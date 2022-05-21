const myApp = require('../../index.js')

const bookingModalS5BillingAddress = document.getElementById('booking-modal-s5-booking-details-address-line-1')
const bookingModalS5BillingState = document.getElementById('booking-modal-s5-booking-details-administrative-district-level-1')
const bookingModalS5BillingCity = document.getElementById('booking-modal-s5-booking-details-locality')
const bookingModalS5BillingZipCode = document.getElementById('booking-modal-s5-booking-details-postal-code')
const bookingModalS5Cardholder = document.getElementById('booking-modal-s5-cardholder-name')

const bookingModalS5QuarterlyPayment = document.getElementById('booking-modal-s5-quarterly-payment')
const bookingModalS5AnnualPayment = document.getElementById('booking-modal-s5-annual-payment')

const cardButton1 = document.getElementById('booking-modal-s5-card-button')

let bookingModalS5BillingAddressObj = {
  address_line_1: '',
  administrative_district_level_1: '',
  locality: '',
  postal_code: '',
  cardholder_name: ''
}

class Service5Payment {
  constructor() {
    
    this.runClass = this.runClass()
  }

  runClass() {
    const appId = process.env.Square_Application_Id
    const locationId = process.env.Square_Location_Id

    console.log(appId)
    // const cardClassSelectors = {
    //     input: {
    //     backgroundColor: '#F7F8F9',
    //     color: '#373F4A',
    //     fontFamily: 'Helvetica Neue',
    //     fontSize: '16px',
    //     fontWeight: 'normal'
    //   },
    //   'input.is-focus': {
    //     backgroundColor: '#F7F8F9',
    //     color: '#3X3F4A',
    //     fontFamily: 'Helvetica Neue',
    //     fontSize: '16px',
    //     fontWeight: 'normal'
    //   },
    //   '.input-container': {
    //     borderColor: 'lightgrey',
    //     borderWidth: '1px',
    //   },
    //   '.input-container.is-focus': {
    //     borderColor: '#cc0023',
    //     borderWidth: '0 0 2px 0',
    //   },
    //   '.input-container.is-error': {
    //     borderColor: '#006aff',
    //     borderWidth: '0 0 2px 0',
    //   },
    //   '.message-icon': {
    //     color: 'green',
    //   },
    //   // You can use media queries with valid selectors:
    //   '@media screen and (max-width: 600px)': {
    //     input: {
    //       'fontSize': '12px',
    //     }
    //   },
    //   '@media only screen and (orientation: portrait)': {
    //     '.message-text': {
    //       'color': 'transparent',
    //     }
    //   }
    // }

    async function initializeCard(payments) {
      const cardOptions = getCardOptions();
      const card = await payments.card(cardOptions);
      await card.attach('#booking-modal-s5-card-container');

      return card;
    }

    function getCardOptions() {
      return {
        "postalCode" : "12347",
        "style": {
          "input": {
            'backgroundColor': '#F7F8F9',
            'color': '#373F4A',
            'fontFamily': 'Helvetica Neue',
            'fontSize': '16px',
            'fontWeight': 'normal'
          },
          // You can use media queries with valid selectors:
          "@media screen and (max-width: 600px)": {
            "input": {
              "fontSize": "12px",
            }
          }
        },
      };
    };

    async function createPayment(token) {
      const bodyData = {
        locationId,
        sourceId: token,
        payment_id: '',
        amount: JSON.parse(localStorage.getItem('service5Price')),
        customer_id: JSON.parse(localStorage.getItem('currentUser')).id,
        given_name: JSON.parse(localStorage.getItem('currentUser')).given_name,
        family_name: JSON.parse(localStorage.getItem('currentUser')).family_name,
        email_address: JSON.parse(localStorage.getItem('currentUser')).email_address,
        cardholder_name: bookingModalS5BillingAddressObj.cardholder_name,
        billing_address: {
          address_line_1: bookingModalS5BillingAddressObj.address_line_1,
          administrative_district_level_1: bookingModalS5BillingAddressObj.administrative_district_level_1,
          locality: bookingModalS5BillingAddressObj.locality,
          postal_code: bookingModalS5BillingAddressObj.postal_code
        },
        card_id: '', // set after createCardOnFile()
        service_name: 'Concierge Session', // _REPLACE_
      };

      if (bookingModalS5QuarterlyPayment.style.backgroundColor === 'rgb(240, 94, 124)') {
        // create a card on file
        async function createCardOnFile() {
          // req && res
          const create_card_on_file_req = await fetch(`/createCard/${JSON.stringify(bodyData)}`, { method: 'post' })
          const create_card_on_file_res = await create_card_on_file_req.json()
          console.log(create_card_on_file_res)

          // get the id of the card on file
          if (create_card_on_file_res.card) {
            bodyData.card_id = create_card_on_file_res.card.id
          
            async function createSubscription() {
              // req && res
              const create_sub_req = await fetch(`/createSubscription/${JSON.stringify(bodyData)}`, { method: 'post' })
              const create_sub_res = await create_sub_req.json()
              console.log(create_sub_res)

              if (create_sub_res.subscription) {
                localStorage.setItem('subscription-response', JSON.stringify(create_sub_res.subscription))
              }
            }
              createSubscription()
                .then(() => { console.log('createSubscription() has been sent to the server') })
                .catch((error) => { console.log(error) })
          } else {
            console.log('Payment failed. Please make sure all fields are correct.')
            localStorage.setItem('subscription-response', false)
            cardButton1.disabled = false  
          }
        }
          createCardOnFile()
            .then(() => { console.log('createCardOnFile() has been sent to the server') })
            .catch((error) => { console.log(error) })
        } else if (bookingModalS5AnnualPayment.style.backgroundColor === 'rgb(240, 94, 124)') {
          let responseJson
          // create a one time payment
          const paymentResponse = await fetch(`/payment/${JSON.stringify(bodyData)}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          })
    
          if (paymentResponse.ok) {
            // console.log('its okay');
            let responseClone = paymentResponse.clone()
            responseJson = await responseClone.json()
            localStorage.setItem('payment-response', JSON.stringify(responseJson))
            console.log(responseJson)
            return paymentResponse.json()
          }

          const errorBody = await paymentResponse.text();
          throw new Error(errorBody); 
      }
    }

    async function tokenize(paymentMethod) {
      const tokenResult = await paymentMethod.tokenize();
      if (tokenResult.status === 'OK') {
        return tokenResult.token;
      } else {
        let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
        if (tokenResult.errors) {
          errorMessage += ` and errors: ${JSON.stringify(
            tokenResult.errors
          )}`;
        }

        throw new Error(errorMessage);
      }
    }

    // status is either SUCCESS or FAILURE;
    function displayPaymentResults(status) {
      
      const statusContainer = document.getElementById(
        'booking-modal-s5-payment-status-container'
      );
      if (status === 'SUCCESS') {
        statusContainer.classList.remove('is-failure');
        statusContainer.classList.add('is-success');
      } else {
        statusContainer.classList.remove('is-success');
        statusContainer.classList.add('is-failure');
      }

      statusContainer.style.visibility = 'visible';
    }

    document.addEventListener('DOMContentLoaded', async function () {
      if (!window.Square) {
        throw new Error('Square.js failed to load properly');
      }

      let payments;
      try {
        payments = window.Square.payments(appId, locationId);
      } catch {
        const statusContainer = document.getElementById(
          'booking-modal-s5-payment-status-container'
        );
        statusContainer.className = 'missing-credentials';
        statusContainer.style.visibility = 'visible';
        return;
      }

      let card;
      try {
        card = await initializeCard(payments);
      } catch (e) {
        console.error('Initializing Card failed', e);
        return;
      }

      // Checkpoint 2.
      async function handlePaymentMethodSubmission(event, paymentMethod) {
        event.preventDefault();

        try {
          // disable the submit button as we await tokenization and make a payment request.
          cardButton.disabled = true;
          const token = await tokenize(paymentMethod);
          const paymentResults = await createPayment(token);
          displayPaymentResults('SUCCESS');

          console.debug('Payment Success', paymentResults);
        } catch (e) {
          cardButton.disabled = false;
          displayPaymentResults('FAILURE');
          console.error(e.message);
        }
      }

      const cardButton = document.getElementById('booking-modal-s5-card-button');
      cardButton.addEventListener('click', async function (event) {
        // billing address check
        if (bookingModalS5BillingAddress.value.match(/[A-Za-z]{2}[0-9]*$/)) {
          bookingModalS5BillingAddressObj.address_line_1 = bookingModalS5BillingAddress.value
          bookingModalS5BillingAddress.className = 'input-valid-clear'
        } else {
          bookingModalS5BillingAddress.className = 'input-invalid'
        }

        // billing state check
        if (bookingModalS5BillingState.value.match(/[A-Za-z]{2}[0-9]*$/)) {
          bookingModalS5BillingAddressObj.administrative_district_level_1 = bookingModalS5BillingState.value
          bookingModalS5BillingState.className = 'input-valid-clear'
        } else {
          bookingModalS5BillingState.className = 'input-invalid'
        }

        // billing city check
        if (bookingModalS5BillingCity.value.match(/[A-Za-z]{2}[0-9]*$/)) {
          bookingModalS5BillingAddressObj.locality = bookingModalS5BillingCity.value
          bookingModalS5BillingCity.className = 'input-valid-clear'
        } else {
          bookingModalS5BillingCity.className = 'input-invalid'
        }

        // billing zip code check
        if (bookingModalS5BillingZipCode.value.match(/^[0-9]{5,5}$/)) {
          bookingModalS5BillingAddressObj.postal_code = bookingModalS5BillingZipCode.value
          bookingModalS5BillingZipCode.className = 'input-valid-clear'
        } else {
          bookingModalS5BillingZipCode.className = 'input-invalid'
        }

        // cardholder name check
        if (bookingModalS5Cardholder.value.match(/[A-Za-z]{2}[0-9]*$/)) {
          bookingModalS5BillingAddressObj.cardholder_name = bookingModalS5Cardholder.value
          bookingModalS5Cardholder.className = 'input-valid-clear'
        } else {
          bookingModalS5Cardholder.className = 'input-invalid'
        }

        if (bookingModalS5BillingAddress.className === 'input-valid-clear' && bookingModalS5BillingState.className === 'input-valid-clear' && bookingModalS5BillingCity.className === 'input-valid-clear' && bookingModalS5BillingZipCode.className === 'input-valid-clear' && bookingModalS5Cardholder.className === 'input-valid-clear') {
          console.log(bookingModalS5BillingAddressObj)
          await handlePaymentMethodSubmission(event, card);
        } else {
          console.log('please enter all fields in correctly')
        }
      });
    });
  }
}

const s5PaymentComponentSub = new Service5Payment()

module.exports = { s5PaymentComponentSub }