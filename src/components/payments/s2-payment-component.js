const myApp = require('../../index.js')

class Service2Payment {
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

    let responseJson

    async function initializeCard(payments) {
      const cardOptions = getCardOptions();
      const card = await payments.card(cardOptions);
      await card.attach('#booking-modal-s2-card-container');

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
        amount: `${myApp.service2Price}`,
        given_name: JSON.parse(localStorage.getItem('currentUser')).given_name,
        family_name: JSON.parse(localStorage.getItem('currentUser')).family_name,
        email_address: JSON.parse(localStorage.getItem('currentUser')).email_address,
        service_name: 'In-Home Consultation' // _REPLACE_
      };

      const paymentResponse = await fetch(`/payment/${JSON.stringify(bodyData)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (paymentResponse.ok) {
        // console.log('its okay');
        let responseClone = paymentResponse.clone()
        responseJson = await responseClone.json()
        localStorage.setItem('payment-response', JSON.stringify(responseJson))
        console.log(responseJson)
        return paymentResponse.json();
      }

      const errorBody = await paymentResponse.text();
      throw new Error(errorBody);
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
        'booking-modal-s2-payment-status-container'
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
          'booking-modal-s2-payment-status-container'
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

      const cardButton = document.getElementById('booking-modal-s2-card-button');
      cardButton.addEventListener('click', async function (event) {
        await handlePaymentMethodSubmission(event, card);
      });
    });
  }
}

const s2PaymentComponent = new Service2Payment()

module.exports = { s2PaymentComponent }