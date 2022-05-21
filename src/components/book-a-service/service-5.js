const myApp = require('../../index.js')

const bookingModalS5AddressError = document.getElementById('bm-5-error-address')
const bookingModalS5CardholderError = document.getElementById('bm-5-error-cardholdername')

let bookingModalS5Date = new Date()

const bookingModalS5NextBtnCal = document.querySelector('.booking-modal-s5-next-cal')
const bookingModalS5PrevBtnCal = document.querySelector('.booking-modal-s5-prev-cal')

let bookingModalS5NextBtnCalCounter = 0

const bookingModalS5RenderCalendar = () => {
  bookingModalS5Date.setDate(1)

  const monthDays = document.querySelector(".booking-modal-s5-days")
  monthDays.innerHTML = ``

  const lastDay = new Date(
    bookingModalS5Date.getFullYear(),
    bookingModalS5Date.getMonth() + 1,
    0
  ).getDate()

  const prevLastDay = new Date(
    bookingModalS5Date.getFullYear(),
    bookingModalS5Date.getMonth(),
    0
  ).getDate()

  const firstDayIndex = bookingModalS5Date.getDay();

  const lastDayIndex = new Date(
    bookingModalS5Date.getFullYear(),
    bookingModalS5Date.getMonth() + 1,
    0
  ).getDay()

  let nextDays = 7 - lastDayIndex - 1

  if (nextDays === 0) {
    nextDays = 7
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".booking-modal-s5-date h1").innerHTML = months[bookingModalS5Date.getMonth()]

  document.querySelector(".booking-modal-s5-date p").innerHTML = new Date().toDateString()

  let days = ""

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      bookingModalS5Date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="booking-modal-s5-today">${i}</div>`
    } else {
      days += `<div class='booking-modal-s5-cal-days'>${i}</div>`
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days
  }
}

bookingModalS5RenderCalendar()

const bookingModalS5 = document.getElementById('booking-modal-s5')
const bookingModalS5Close = document.getElementById('booking-modal-s5-close')
const bookingModalS5BodyLeft = document.getElementById('booking-modal-s5-body-left')
const bookingModalS5BodyLeftTitle = document.getElementById('booking-modal-s5-body-left-title')

const bookingModalS5Step1 = document.getElementById('booking-modal-s5-step1')
const editbookingModalS5Agents = document.getElementById('edit-bm-s5-agents')
const bookingModalS5Agents = document.getElementById('booking-modal-s5-agents')
let bookingModalS5BodyRightAgentsBox = document.getElementById('booking-modal-s5-agents-box')
const bookingModalS5AgentsPickedIcon = document.getElementById('bm-s5-agents-picked-icon')
let bookingModalS5AgentsSelected = false

const bookingModalS5Step2 = document.getElementById('booking-modal-s5-step2')
const editbookingModalS5LocationNull = document.getElementById('edit-bm-5-location-null')
const editbookingModalS5Location = document.getElementById('edit-bm-5-location')
const bookingModalS5LocationPickedIcon = document.getElementById('bm-5-location-picked-icon')
let bookingModalS5LocationSelected = false

const bookingModalS5Step3 = document.getElementById('booking-modal-s5-step3')
const editbookingModalS5DateTimeNull = document.getElementById('edit-bm-s5-datetime-null')
const editbookingModalS5DateTime = document.getElementById('edit-bm-s5-datetime')
const bookingModalS5DateTimePickedIcon = document.getElementById('bm-5-datetime-picked-icon')
let bookingModalS5DateSelected = false
let bookingModalS5TimeSelected = false
let bookingModalS5DateTimeSelected

const bookingModalS5Step4 = document.getElementById('booking-modal-s5-step4')
const editbookingModalS5ConfirmDetailsNull = document.getElementById('edit-bm-confirm-details-null')
const editbookingModalS5ConfirmDetails = document.getElementById('edit-bm-confirm-details')
const bookingModalS5ConfirmDetailsPickedIcon = document.getElementById('bm-confirm-details-picked-icon')
let bookingModalS5ConfirmDetailsSelected = false


// const bookingModalS5BodyRightAgents = document.getElementById('booking-modal-s5-body-right-agents')


const bookingModalS5Location = document.getElementById('booking-modal-s5-location')
// const bookingModalS5BodyRightLocations = document.getElementById('booking-modal-s5-body-right-location')
const bookingModalS5NewLocationCheckbox = document.getElementById('booking-modal-s5-new-location-checkbox')
let bookingModalS5NewLocationCheckboxCounter = 0
const bookingModalS5CustomerLocationsBox = document.getElementById('booking-modal-s5-customer-locations-box')
let bookingModalS5NewCustomerLocationBox = document.getElementById('booking-modal-s5-new-location-box')
const bookingModalS5NewCustomerLocationInputTypeError = document.getElementById('booking-modal-s5-new-location-box-input-type-error')
const bookingModalS5NewCustomerLocationInputType = document.getElementById('booking-modal-s5-new-location-box-input-type')
const bookingModalS5NewCustomerLocationInputAddressError = document.getElementById('booking-modal-s5-new-location-box-input-address-error')
const bookingModalS5NewCustomerLocationInputAddress = document.getElementById('booking-modal-s5-new-location-box-input-address')
const bookingModalS5NewCustomerLocationInputStateError = document.getElementById('booking-modal-s5-new-location-box-input-state-error')
const bookingModalS5NewCustomerLocationInputState = document.getElementById('booking-modal-s5-new-location-box-input-state')
const bookingModalS5NewCustomerLocationInputCityError = document.getElementById('booking-modal-s5-new-location-box-input-city-error')
const bookingModalS5NewCustomerLocationInputCity = document.getElementById('booking-modal-s5-new-location-box-input-city')
const bookingModalS5NewCustomerLocationInputZipCodeError = document.getElementById('booking-modal-s5-new-location-box-input-zipcode-error')
const bookingModalS5NewCustomerLocationInputZipCode = document.getElementById('booking-modal-s5-new-location-box-input-zipcode')
const bookingModalS5NewCustomerLocationSubmitBtn = document.getElementById('booking-modal-s5-new-location-submit-btn')
let bookingModalS5NewCustomerLocationObj = {
email_address: ''
}

const bookingModalS5DateTime = document.getElementById('booking-modal-s5-datetime')
// const bookingModalS5BodyRightDateTime = document.getElementById('booking-modal-s5-body-right-datetime')
let bookingModalS5BodyRightDateTimeBox = document.getElementById('booking-modal-s5-datetime-box')
const bookingModalS5BodyRightCurrentTimeTitle = document.getElementById('booking-modal-s5-current-time-title')
let bookingModalS5CalToday = document.querySelector('.booking-modal-s5-today')
let bookingModalS5CalDays = document.querySelectorAll('.booking-modal-s5-cal-days')

const bookingModalS5ConfirmDetails = document.getElementById('booking-modal-s5-confirm-details')
const bookingModalS5ConfirmDetailsTitle = document.getElementById('booking-modal-s5-confirm-details-title')
const bookingModalS5ConfirmDetailsContainer = document.getElementById('booking-modal-s5-body-right-confirm-details-container')
const bookingModalS5ChangeNumberCheckbox = document.getElementById('booking-modal-s5-change-number-checkbox')
const bookingModalS5CurrentPhoneContainer = document.getElementById('booking-modal-s5-current-phone-container')
const bookingModalS5CurrentPhoneValue = document.getElementById('booking-modal-s5-current-phone-value')
const bookingModalS5ChangePhone = document.getElementById('booking-modal-s5-change-phone')
const bookingModalS5ChangePhoneError = document.getElementById('booking-modal-s5-change-phone-error')
const bookingModalS5ChangePhoneInput = document.getElementById('booking-modal-s5-change-phone-input')
const bookingModalS5ChangePhoneBtn = document.getElementById('booking-modal-s5-change-phone-input-btn')
const bookingModalS5ChangePhoneCaution = document.getElementById('booking-modal-s5-change-phone-caution')
const bookingModalS5ChangePhoneLoading = document.getElementById('booking-modal-s5-change-phone-loading')
const bookingModalS5ChangePhoneSuccess = document.getElementById('booking-modal-s5-change-phone-success')
const bookingModalS5InfoCorrectCheckbox = document.getElementById('booking-modal-s5-info-correct-checkbox')
const bookingModalS5InfoCorrectRequireIcon = document.getElementById('booking-modal-s5-info-correct-require-icon')

const bookingModalS5QuarterlyPayment = document.getElementById('booking-modal-s5-quarterly-payment')
const bookingModalS5AnnualPayment = document.getElementById('booking-modal-s5-annual-payment')


const bookingModalS5SelectedService = document.getElementById('booking-modal-s5-selected-service')
const bookingModalS5SelectedAgent = document.getElementById('booking-modal-s5-selected-agent')
const bookingModalS5SelectedLocation = document.getElementById('booking-modal-s5-selected-location')
const bookingModalS5SelectedDateTime = document.getElementById('booking-modal-s5-selected-datetime')

const bookingModalS5BillingAddress = document.getElementById('booking-modal-s5-booking-details-address-line-1')
const bookingModalS5BillingState = document.getElementById('booking-modal-s5-booking-details-administrative-district-level-1')
const bookingModalS5BillingCity = document.getElementById('booking-modal-s5-booking-details-locality')
const bookingModalS5BillingZipCode = document.getElementById('booking-modal-s5-booking-details-postal-code')
const bookingModalS5Cardholder = document.getElementById('booking-modal-s5-cardholder-name')

const bookingModalS5SelectedPrice = document.getElementById('booking-modal-s5-selected-price')
const bookingModalS5PayBtnPrice = document.getElementById('booking-modal-s5-card-button')

const bookingModalS5PaymentsContainer = document.getElementById('booking-modal-s5-payments-container')
const bookingModalS5PaymentForm = document.getElementById('booking-modal-s5-payment-form')
const bookingModalS5LoadingPayment = document.getElementById('booking-modal-s5-loading-payment')
// const bookingModalS5BookingLoading = document.getElementById('booking-modal-s5-confirm-details-loading')
// const bookingModalS5BookingSuccess = document.getElementById('booking-modal-s5-confirm-details-success')
// const bookingModalS5PaymentStatus = document.getElementById('booking-modal-s5-payment-status-container')
const bookingModalS5Policy1 = document.getElementById('booking-modal-s5-policy1')

const bookingModalS5Loading = document.getElementById('booking-modal-s5-confirm-details-loading')
const bookingModalS5LoadingSuccess = document.getElementById('booking-modal-s5-confirm-details-success') 

const bookingModalS5BackBtn = document.getElementById('booking-modal-s5-back')
const bookingModalS5NextNullBtn = document.getElementById('booking-modal-s5-next-null') 
const bookingModalS5NextBtn = document.getElementById('booking-modal-s5-next')

const bookingModalS5Footer = document.getElementById('booking-modal-s5-footer')

let bookingModalS5Counter = 0

let service5NewLocationObj = {
name: '',
address_line_1: '',
administrative_district_level_1: '',
locality: '',
postal_code: ''
}

const service5AvailabilityObj = {
start_at: '',
end_at: '',
location_id: '',
service_variation_id: ''
}

let updateService5PhoneBookingObj = {
  customer_id: '',
  email_address: '',
  phone_number: ''
}

let service5BookingObj = {
  duration_minutes: '60',
  service_variation_id: '',
  service_variation_version: '',
  service_price: '',
  team_member_id: '',
  service_name: '',
  employee_name: '',
  email_address: '',
  phone_number: '',
  given_name: '', 
  family_name: '',
  start_at: '',
  appointment_time: '',
  location_id: '',
  customer_id: '',
  name: '',
  address_line_1: '',
  administrative_district_level_1: '',
  locality: '',
  postal_code: ''
}

let customerConciergeApptsArr = []
let customerConciergeApptsIdArr = []


class Service5Component {
  constructor() {
    
    this.bookingModalNextBtn = this.bookingModalNextBtn()
    this.createBooking = this.createBooking()
    this.closeModal = this.closeModal()
  }

  selectAgent() {
    // edit agent click
    editbookingModalS5Agents.addEventListener('click', () => {
      // right changes
      bookingModalS5Agents.className = 'booking-modal-s5-right'
      bookingModalS5Location.className = 'booking-modal-s5-right hide-container'
      bookingModalS5DateTime.className = 'booking-modal-s5-right hide-container'
      bookingModalS5ConfirmDetails.className = 'booking-modal-s5-right hide-container'

      bookingModalS5Step1.className = 'step-selected'
      bookingModalS5Step2.className = ''
      bookingModalS5Step3.className = ''
      bookingModalS5Step4.className = ''

      bookingModalS5Counter = 0

      // footer changes
      if (bookingModalS5AgentsSelected) {
        bookingModalS5NextBtn.className = 'booking-modal-s5-next'
        bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
      } else {
        bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
        bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
      }
    })

    // if user is on select an "agent"
    if (myApp.companyOptions5Bool && myApp.bookingModalS5.className === 'booking-modal-s5') {

      // select the 1st booking modal step
      bookingModalS5Step1.className = 'step-selected'

      // set early values for service booking object properties
      service5BookingObj.duration_minutes = myApp.companyServicesObj[`${bookingModalS5BodyLeftTitle.textContent}`].duration_minutes
      service5BookingObj.service_variation_id = myApp.companyServicesObj[`${bookingModalS5BodyLeftTitle.textContent}`].service_variation_id
      service5BookingObj.service_variation_version = myApp.companyServicesObj[`${bookingModalS5BodyLeftTitle.textContent}`].service_variation_version
      service5BookingObj.service_price = myApp.companyServicesObj[`${bookingModalS5BodyLeftTitle.textContent}`].service_price
      service5BookingObj.service_name = bookingModalS5BodyLeftTitle.textContent
      service5BookingObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
      service5BookingObj.customer_id = JSON.parse(localStorage.getItem('currentUser')).id
      service5BookingObj.phone_number = JSON.parse(localStorage.getItem('currentUser')).phone_number                             
      service5BookingObj.given_name = JSON.parse(localStorage.getItem('currentUser')).given_name
      service5BookingObj.family_name = JSON.parse(localStorage.getItem('currentUser')).family_name

      // get company agents
      async function getCompanyAgents() {
        // req & res
        const get_company_agents_req = await fetch('/getCompanyAgents', { method: 'get' }) 
        const get_company_agents_res = await get_company_agents_req.json()

        console.log(get_company_agents_res)

        // take all agents and display in bookingModalS5BodyRightAgentsBox
        for (let i = 0; i < get_company_agents_res.team_member_booking_profiles.length; i++) {
          let newH1Element = document.createElement('h1')
          newH1Element.textContent = get_company_agents_res.team_member_booking_profiles[i].display_name
          bookingModalS5BodyRightAgentsBox.appendChild(newH1Element)
        }

        // if an agent is selected
        for (let i = 0; i < bookingModalS5BodyRightAgentsBox.children.length; i++) {
          bookingModalS5BodyRightAgentsBox.children[i].addEventListener('click', () => {   
            for (let j = 0; j < bookingModalS5BodyRightAgentsBox.children.length; j++) {
              bookingModalS5BodyRightAgentsBox.children[j].className = ''
            }
            bookingModalS5BodyRightAgentsBox.children[i].className = 'booking-modal-s5-agent-selected'
            bookingModalS5AgentsPickedIcon.className = 'bi bi-check-circle-fill'

            // hide null continue btn -- show pink color continue btn
            bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
            bookingModalS5NextBtn.className = 'booking-modal-s5-next'
            
            console.log(bookingModalS5NextNullBtn.className)
            console.log(bookingModalS5NextBtn.className)
            
            service5BookingObj.team_member_id = get_company_agents_res.team_member_booking_profiles[i].team_member_id 
            service5BookingObj.employee_name = bookingModalS5BodyRightAgentsBox.children[i].textContent
            bookingModalS5AgentsSelected = true
            console.log(service5BookingObj)
          })
        }


      }
        getCompanyAgents()
        .then(() => { console.log('the getCompanyAgents() has been sent to the express server') })
        .catch((error) => { console.log(error) })
    }
  }

  enterLocation() {
    // edit location
    editbookingModalS5Location.addEventListener('click', () => {
      console.log('I have been clicked!')
      // right changes
      bookingModalS5Agents.className = 'booking-modal-s5-right hide-container'
      bookingModalS5Location.className = 'booking-modal-s5-right'
      bookingModalS5DateTime.className = 'booking-modal-s5-right hide-container'
      bookingModalS5ConfirmDetails.className = 'booking-modal-s5-right hide-container'

      bookingModalS5Step1.className = ''
      bookingModalS5Step2.className = 'step-selected'
      bookingModalS5Step3.className = ''
      bookingModalS5Step4.className = ''

      bookingModalS5Counter = 1

      // footer changes
      if (bookingModalS5LocationSelected) {
        bookingModalS5NextBtn.className = 'booking-modal-s5-next'
        bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
      } else {
        bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
        bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
      }
    })

    // if user is on select "location"
    if (myApp.companyOptions5Bool && bookingModalS5Location.className === 'booking-modal-s5-right') {
      console.log('Lets get those locations!')

      // grab existing customer locations from local storage and display in customer location box
      for (let i = 0; i < 10; i++) {
        if (i === 0) {
          // append customers main home location first
          let newDivElement = document.createElement('div')
        
          newDivElement.innerHTML = `
          <ul>
            <li style='font-weight: 900;text-decoration: underline;margin-bottom: 1rem;'>Home:</li>
            <li>${JSON.parse(localStorage.getItem('currentUser')).address.address_line_1}</li>
            <li>${JSON.parse(localStorage.getItem('currentUser')).address.locality}</li>
            <li>${JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1},</li>
            <li>${JSON.parse(localStorage.getItem('currentUser')).address.postal_code}</li>
          </ul>
          `
          bookingModalS5CustomerLocationsBox.appendChild(newDivElement)
        } else {
          // append customers other locations second
          let newDivElement = document.createElement('div')
          newDivElement.innerHTML = `
          <ul>
            <li style='font-weight: 900;text-decoration: underline;margin-bottom: 1rem;'>${JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].type_name}:</li>
            <li>${JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].address_line_1}</li>
            <li>${JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].locality}</li>
            <li>${JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].administrative_district_level_1},</li>
            <li>${JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].postal_code}</li>
          </ul>
          `
          bookingModalS5CustomerLocationsBox.appendChild(newDivElement)
        }
      }
      console.log(bookingModalS5CustomerLocationsBox.children.length)

      // delete blank customer locations remaining
      for (let i = 0; i < bookingModalS5CustomerLocationsBox.children.length; i++) {
        // get all the list items from all customer locations
        let newCustomerLocationDetails = bookingModalS5CustomerLocationsBox.getElementsByTagName('li')
        console.log(newCustomerLocationDetails)

        if (i === 0) { // 0
          if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
          }
        } else if (i === 1) { // 5
            if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 2) { // 10
            if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 3) { // 15
            if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 4) { // 20
            if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 5) { // 25
            if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 6) { // 30
            if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 7) { // 35
            if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 8) { // 40
            if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 9) { // 45
            if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 10) { // 50
            if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            } 
        }
      }

      // when a customer location is selected
      for (let i = 0; i < bookingModalS5CustomerLocationsBox.children.length; i++) {
        bookingModalS5CustomerLocationsBox.children[i].addEventListener('click', () => {
          // clear any existing customer location style already selected
          for (let j = 0; j < bookingModalS5CustomerLocationsBox.children.length; j++) {
            // clear new service 2 location obj
            service5BookingObj.name = ''
            service5BookingObj.address_line_1 = ''
            service5BookingObj.administrative_district_level_1 = ''
            service5BookingObj.locality = ''
            service5BookingObj.postal_code = ''
            bookingModalS5CustomerLocationsBox.children[j].style = ''
          }

          // get all the list items from all customer locations
          let newCustomerLocationDetails = bookingModalS5CustomerLocationsBox.getElementsByTagName('li')
          console.log(newCustomerLocationDetails)
          // console.log(newCustomerLocationDetails[0].textContent)
          console.log(bookingModalS5CustomerLocationsBox.children[i])

          // style the customer location function
          function styleSelectedLocation() {
            bookingModalS5CustomerLocationsBox.children[i].style.backgroundColor = '#f05e7c'
            bookingModalS5CustomerLocationsBox.children[i].style.color = '#ffffff'
            bookingModalS5CustomerLocationsBox.children[i].style.borderColor = '#f05e7c'
            bookingModalS5CustomerLocationsBox.children[i].style.borderRadius = '10px'  
          }

          // delete blank customer locations
          for (let i = 0; i < bookingModalS5CustomerLocationsBox.children.length; i++) {
            // get all the list items from all customer locations
            let newCustomerLocationDetails = bookingModalS5CustomerLocationsBox.getElementsByTagName('li')
            // console.log(newCustomerLocationDetails[10].textContent)
            if (i === 0) { // 0
              if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
              } else {              
              }
            } else if (i === 1) { // 5
                if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                } else {                
                }
            } else if (i === 2) { // 10
                if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 3) { // 15
                if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 4) { // 20
                if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 5) { // 25
                if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 6) { // 30
                if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                } else {                
                }
            } else if (i === 7) { // 35
                if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 8) { // 40
                if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                } else { 
                }
            } else if (i === 9) { // 45
                if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 10) { // 50
                if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                } 
            }
          }

          // send too new service 2 location obj && unNull the continue btn
          if (i === 0) { // 0
            if (newCustomerLocationDetails[i].textContent !== '') {
              service5BookingObj.name = newCustomerLocationDetails[i].textContent
              service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 1].textContent
              service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 2].textContent
              service5BookingObj.locality = newCustomerLocationDetails[i + 3].textContent
              service5BookingObj.postal_code = newCustomerLocationDetails[i + 4].textContent
              styleSelectedLocation()
              bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
              bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
              bookingModalS5NextBtn.className = 'booking-modal-s5-next'
              bookingModalS5LocationSelected = true
              console.log(service5BookingObj)
            } else {
              bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
            }
          } else if (i === 1) { // 5
              if (newCustomerLocationDetails[i + 4].textContent !== '') {
                service5BookingObj.name = newCustomerLocationDetails[i + 4].textContent
                service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 5].textContent
                service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 6].textContent
                service5BookingObj.locality = newCustomerLocationDetails[i + 7].textContent
                service5BookingObj.postal_code = newCustomerLocationDetails[i + 8].textContent
                styleSelectedLocation()
                bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                bookingModalS5LocationSelected = true
                console.log(service5BookingObj)
              } else {
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 2) { // 10
              if (newCustomerLocationDetails[i + 8].textContent !== '') {
                service5BookingObj.name = newCustomerLocationDetails[i + 8].textContent
                service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 9].textContent
                service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 10].textContent
                service5BookingObj.locality = newCustomerLocationDetails[i + 11].textContent
                service5BookingObj.postal_code = newCustomerLocationDetails[i + 12].textContent 
                styleSelectedLocation()
                bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                bookingModalS5LocationSelected = true
                console.log(service5BookingObj)
              } else {
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 3) { // 15
              if (newCustomerLocationDetails[i + 12].textContent !== '') {
                service5BookingObj.name = newCustomerLocationDetails[i + 12].textContent
                service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 13].textContent
                service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 14].textContent
                service5BookingObj.locality = newCustomerLocationDetails[i + 15].textContent
                service5BookingObj.postal_code = newCustomerLocationDetails[i + 16].textContent 
                styleSelectedLocation()
                bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                bookingModalS5LocationSelected = true
                console.log(service5BookingObj)
              } else {
                console.log('peace')
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 4) { // 20
              if (newCustomerLocationDetails[i + 16].textContent !== '') {
                service5BookingObj.name = newCustomerLocationDetails[i + 16].textContent
                service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 17].textContent
                service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 18].textContent
                service5BookingObj.locality = newCustomerLocationDetails[i + 19].textContent
                service5BookingObj.postal_code = newCustomerLocationDetails[i + 20].textContent
                styleSelectedLocation()
                bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                bookingModalS5LocationSelected = true
                console.log(service5BookingObj)
              } else {
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 5) { // 25
              if (newCustomerLocationDetails[i + 20].textContent !== '') {
                service5BookingObj.name = newCustomerLocationDetails[i + 20].textContent
                service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 21].textContent
                service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 22].textContent
                service5BookingObj.locality = newCustomerLocationDetails[i + 23].textContent
                service5BookingObj.postal_code = newCustomerLocationDetails[i + 24].textContent
                styleSelectedLocation()
                bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                bookingModalS5LocationSelected = true
                console.log(service5BookingObj)
              } else {
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 6) { // 30
              if (newCustomerLocationDetails[i + 24].textContent !== '') {
                service5BookingObj.name = newCustomerLocationDetails[i + 24].textContent
                service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 25].textContent
                service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 26].textContent
                service5BookingObj.locality = newCustomerLocationDetails[i + 27].textContent
                service5BookingObj.postal_code = newCustomerLocationDetails[i + 28].textContent
                styleSelectedLocation()
                bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                bookingModalS5LocationSelected = true
                console.log(service5BookingObj)
              } else {
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 7) { // 35
              if (newCustomerLocationDetails[i + 28].textContent !== '') {
                service5BookingObj.name = newCustomerLocationDetails[i + 28].textContent
                service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 29].textContent
                service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 30].textContent
                service5BookingObj.locality = newCustomerLocationDetails[i + 31].textContent
                service5BookingObj.postal_code = newCustomerLocationDetails[i + 32].textContent
                styleSelectedLocation()
                bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                bookingModalS5LocationSelected = true
                console.log(service5BookingObj)
              } else {
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 8) { // 40
              if (newCustomerLocationDetails[i + 32].textContent !== '') {
                service5BookingObj.name = newCustomerLocationDetails[i + 32].textContent
                service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 33].textContent
                service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 34].textContent
                service5BookingObj.locality = newCustomerLocationDetails[i + 35].textContent
                service5BookingObj.postal_code = newCustomerLocationDetails[i + 36].textContent
                styleSelectedLocation()
                bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                bookingModalS5LocationSelected = true
                console.log(service5BookingObj)
              } else {
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none' 
              }
          } else if (i === 9) { // 45
              if (newCustomerLocationDetails[i + 36].textContent !== '') {
                service5BookingObj.name = newCustomerLocationDetails[i + 36].textContent
                service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 37].textContent
                service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 38].textContent
                service5BookingObj.locality = newCustomerLocationDetails[i + 39].textContent
                service5BookingObj.postal_code = newCustomerLocationDetails[i + 40].textContent
                styleSelectedLocation()
                bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                console.log(service5BookingObj)
              } else {
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 10) { // 50
              if (newCustomerLocationDetails[i + 40].textContent !== '') {
                service5BookingObj.name = newCustomerLocationDetails[i + 40].textContent
                service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 41].textContent
                service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 42].textContent
                service5BookingObj.locality = newCustomerLocationDetails[i + 43].textContent
                service5BookingObj.postal_code = newCustomerLocationDetails[i + 44].textContent
                styleSelectedLocation()
                bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                bookingModalS5LocationSelected = true
                console.log(service5BookingObj)
              } else {
                bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
              } 
          }
        })
      }

      // if checkbox is selected --> show the new customer location box
      bookingModalS5NewLocationCheckbox.addEventListener('click', () => {
        bookingModalS5NewLocationCheckboxCounter++
      
        // checkbox toggle
        if (bookingModalS5NewLocationCheckboxCounter === 1) {
          bookingModalS5NewLocationCheckbox.checked = true           
          bookingModalS5NewCustomerLocationBox.className = 'booking-modal-s5-new-location-box'
        } else if (bookingModalS5NewLocationCheckboxCounter === 2) {
          bookingModalS5NewLocationCheckbox.checked = false          
          bookingModalS5NewCustomerLocationBox.className = 'booking-modal-s5-new-location-box hide-container'
          bookingModalS5NewLocationCheckboxCounter = 0
        }
      })

      ///*******also create a new location on sign up in square*/
      // if new customer location box input fields all filled && btn clicked--> update users location in MongoDb --> create a new location in Square

      // if create new location btn is clicked
      bookingModalS5NewCustomerLocationSubmitBtn.addEventListener('click', () => {
        console.log('ive been clicked.')
        let newOtherLocationsIndex = 0

        // set the new customer modal booking email address
        bookingModalS5NewCustomerLocationObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address

        console.log(newOtherLocationsIndex)

        bookingModalS5NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`] = {}

        // check type is correct
        if (bookingModalS5NewCustomerLocationInputType.value !== 'select-a-type') {
          bookingModalS5NewCustomerLocationInputTypeError.className = 'error hide-container'
          bookingModalS5NewCustomerLocationInputType.className = 'input-valid-clear'
          newUserLocation.type_name = bookingModalS5NewCustomerLocationInputType.value
          bookingModalS5NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].type_name = bookingModalS5NewCustomerLocationInputType.value
        } else {
          bookingModalS5NewCustomerLocationInputTypeError.className = 'error'
          bookingModalS5NewCustomerLocationInputType.className = 'input-invalid'
        }

        // check address is correct
        if (bookingModalS5NewCustomerLocationInputAddress.value.match(addressCheck)) {
          bookingModalS5NewCustomerLocationInputAddressError.className = 'error hide-container'
          bookingModalS5NewCustomerLocationInputAddress.className = 'input-valid-clear'
          newUserLocation.address_line_1 = bookingModalS5NewCustomerLocationInputAddress.value
          bookingModalS5NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].address_line_1 = bookingModalS5NewCustomerLocationInputAddress.value
        } else {
          bookingModalS5NewCustomerLocationInputAddressError.className = 'error'
          bookingModalS5NewCustomerLocationInputAddress.className = 'input-invalid'
        }

        // check state is correct
        if (bookingModalS5NewCustomerLocationInputState.value.match(justLettersCheck)) {
          bookingModalS5NewCustomerLocationInputStateError.className = 'error hide-container'
          bookingModalS5NewCustomerLocationInputState.className = 'input-valid-clear'
          newUserLocation.administrative_district_level_1 = bookingModalS5NewCustomerLocationInputState.value
          bookingModalS5NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].administrative_district_level_1 = bookingModalS5NewCustomerLocationInputState.value
        } else {
          bookingModalS5NewCustomerLocationInputStateError.className = 'error'
          bookingModalS5NewCustomerLocationInputState.className = 'input-invalid'
        }

        // check city is correct
        if (bookingModalS5NewCustomerLocationInputCity.value.match(justLettersCheck)) {
          bookingModalS5NewCustomerLocationInputCityError.className = 'error hide-container'
          bookingModalS5NewCustomerLocationInputCity.className = 'input-valid-clear'
          newUserLocation.locality = bookingModalS5NewCustomerLocationInputCity.value
          bookingModalS5NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].locality = bookingModalS5NewCustomerLocationInputCity.value
        } else {
          bookingModalS5NewCustomerLocationInputCityError.className = 'error'
          bookingModalS5NewCustomerLocationInputCity.className = 'input-invalid'
        }

        // check that zip code is correct
        if (bookingModalS5NewCustomerLocationInputZipCode.value.match(zipCodeCheck)) {
          bookingModalS5NewCustomerLocationInputZipCodeError.className = 'error hide-container'
          bookingModalS5NewCustomerLocationInputZipCode.className = 'input-valid-clear'
          newUserLocation.postal_code = bookingModalS5NewCustomerLocationInputZipCode.value
          bookingModalS5NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].postal_code = bookingModalS5NewCustomerLocationInputZipCode.value
        } else {
          bookingModalS5NewCustomerLocationInputZipCodeError.className = 'error'
          bookingModalS5NewCustomerLocationInputZipCode.className = 'input-invalid'
        }
        console.log(bookingModalS5NewCustomerLocationObj)

        if (bookingModalS5NewCustomerLocationInputType.className === 'input-valid-clear' && bookingModalS5NewCustomerLocationInputAddress.className === 'input-valid-clear' && bookingModalS5NewCustomerLocationInputState.className === 'input-valid-clear' && bookingModalS5NewCustomerLocationInputCity.className === 'input-valid-clear' && bookingModalS5NewCustomerLocationInputZipCode.className === 'input-valid-clear') {
          console.log('All fields are valid..')
          newUserLocation.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
          // create the new location in MongoDB
          // take new location id add to the "bookingModalS5NewCustomerLocationObj.id"
          // add customers new location object to customers data -- MongoDB
          async function newLocationMongoDb() {
            // req & res
            const create_new_location_mongodb_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(bookingModalS5NewCustomerLocationObj)}`, { method: 'put' })
            const create_new_location_mongodb_res = await create_new_location_mongodb_req.json()
            console.log(create_new_location_mongodb_res)

            if (create_new_location_mongodb_res === 'the users selected input field has been updated on MongoDb') {
              // get customers updated data from MongoDb --> update localStorage
              async function getCustomersFile() {
                // req & res
                const get_customer_file_req = await fetch(`/checkUserMongoDB/${localStorage.getItem('currentUser')}`, { method: 'get' })
                const get_customer_file_res = await get_customer_file_req.json()
                console.log(get_customer_file_res)

                localStorage.removeItem('currentUser')

                localStorage.setItem('currentUser', JSON.stringify(get_customer_file_res))

                // clear newCustomerLocation Input fields
                bookingModalS5NewCustomerLocationInputType.value = 'select-a-type'
                bookingModalS5NewCustomerLocationInputAddress.value = ''
                bookingModalS5NewCustomerLocationInputState.value = ''
                bookingModalS5NewCustomerLocationInputCity.value = ''
                bookingModalS5NewCustomerLocationInputZipCode.value = ''

                // clear bookingModalS5CustomerLocationsBox
                bookingModalS5CustomerLocationsBox.innerHTML = ''
                // add to locations selection box div...
                // grab existing customer locations from local storage and display in customer location box
                for (let i = 0; i < 10; i++) {
                  if (i === 0) {
                    // append customers main home location first
                    let newDivElement = document.createElement('div')
                  
                    newDivElement.innerHTML = `
                    <ul>
                      <li style='font-weight: 900;text-decoration: underline;margin-bottom: 1rem;'>Home:</li>
                      <li>${JSON.parse(localStorage.getItem('currentUser')).address.address_line_1}</li>
                      <li>${JSON.parse(localStorage.getItem('currentUser')).address.locality}</li>
                      <li>${JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1},</li>
                      <li>${JSON.parse(localStorage.getItem('currentUser')).address.postal_code}</li>
                    </ul>
                    `
                    bookingModalS5CustomerLocationsBox.appendChild(newDivElement)
                  } else {
                    // append customers other locations second
                    let newDivElement = document.createElement('div')
                    newDivElement.innerHTML = `
                    <ul>
                      <li style='font-weight: 900;text-decoration: underline;margin-bottom: 1rem;'>${JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].type_name}:</li>
                      <li>${JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].address_line_1}</li>
                      <li>${JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].locality}</li>
                      <li>${JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].administrative_district_level_1},</li>
                      <li>${JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].postal_code}</li>
                    </ul>
                    `
                    bookingModalS5CustomerLocationsBox.appendChild(newDivElement)
                  }
                }

                // delete blank customer locations remaining
                for (let i = 0; i < bookingModalS5CustomerLocationsBox.children.length; i++) {
                  // get all the list items from all customer locations
                  let newCustomerLocationDetails = bookingModalS5CustomerLocationsBox.getElementsByTagName('li')
                  console.log(newCustomerLocationDetails)

                  if (i === 0) { // 0
                    if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                      bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                    }
                  } else if (i === 1) { // 5
                      if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 2) { // 10
                      if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 3) { // 15
                      if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 4) { // 20
                      if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 5) { // 25
                      if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 6) { // 30
                      if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 7) { // 35
                      if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 8) { // 40
                      if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 9) { // 45
                      if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 10) { // 50
                      if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      } 
                  }
                }

                // when a customer location is selected
                for (let i = 0; i < bookingModalS5CustomerLocationsBox.children.length; i++) {
                  bookingModalS5CustomerLocationsBox.children[i].addEventListener('click', () => {
                    // clear any existing customer location style already selected
                    for (let j = 0; j < bookingModalS5CustomerLocationsBox.children.length; j++) {
                      // clear new service 2 location obj
                      service5BookingObj.name = ''
                      service5BookingObj.address_line_1 = ''
                      service5BookingObj.administrative_district_level_1 = ''
                      service5BookingObj.locality = ''
                      service5BookingObj.postal_code = ''
                      bookingModalS5CustomerLocationsBox.children[j].style = ''
                    }

                    // get all the list items from all customer locations
                    let newCustomerLocationDetails = bookingModalS5CustomerLocationsBox.getElementsByTagName('li')
                    console.log(newCustomerLocationDetails)
                    // console.log(newCustomerLocationDetails[0].textContent)
                    console.log(bookingModalS5CustomerLocationsBox.children[i])

                    // style the customer location function
                    function styleSelectedLocation() {
                      bookingModalS5CustomerLocationsBox.children[i].style.backgroundColor = '#f05e7c'
                      bookingModalS5CustomerLocationsBox.children[i].style.color = '#ffffff'
                      bookingModalS5CustomerLocationsBox.children[i].style.borderColor = '#f05e7c'
                      bookingModalS5CustomerLocationsBox.children[i].style.borderRadius = '10px'  
                    }

                    // delete blank customer locations
                    for (let i = 0; i < bookingModalS5CustomerLocationsBox.children.length; i++) {
                      // get all the list items from all customer locations
                      let newCustomerLocationDetails = bookingModalS5CustomerLocationsBox.getElementsByTagName('li')
                      // console.log(newCustomerLocationDetails[10].textContent)
                      if (i === 0) { // 0
                        if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                        } else {              
                        }
                      } else if (i === 1) { // 5
                          if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                          } else {                
                          }
                      } else if (i === 2) { // 10
                          if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 3) { // 15
                          if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 4) { // 20
                          if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 5) { // 25
                          if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 6) { // 30
                          if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                          } else {                
                          }
                      } else if (i === 7) { // 35
                          if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 8) { // 40
                          if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                          } else { 
                          }
                      } else if (i === 9) { // 45
                          if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 10) { // 50
                          if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          } 
                      }
                    }

                    // send too new service 2 location obj && unNull the continue btn
                    if (i === 0) { // 0
                      if (newCustomerLocationDetails[i].textContent !== '') {
                        service5BookingObj.name = newCustomerLocationDetails[i].textContent
                        service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 1].textContent
                        service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 2].textContent
                        service5BookingObj.locality = newCustomerLocationDetails[i + 3].textContent
                        service5BookingObj.postal_code = newCustomerLocationDetails[i + 4].textContent
                        styleSelectedLocation()
                        bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                        bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                        bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                        bookingModalS5LocationSelected = true
                        console.log(service5BookingObj)
                      } else {
                        bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                      }
                    } else if (i === 1) { // 5
                        if (newCustomerLocationDetails[i + 4].textContent !== '') {
                          service5BookingObj.name = newCustomerLocationDetails[i + 4].textContent
                          service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 5].textContent
                          service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 6].textContent
                          service5BookingObj.locality = newCustomerLocationDetails[i + 7].textContent
                          service5BookingObj.postal_code = newCustomerLocationDetails[i + 8].textContent
                          styleSelectedLocation()
                          bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5LocationSelected = true
                          console.log(service5BookingObj)
                        } else {
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 2) { // 10
                        if (newCustomerLocationDetails[i + 8].textContent !== '') {
                          service5BookingObj.name = newCustomerLocationDetails[i + 8].textContent
                          service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 9].textContent
                          service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 10].textContent
                          service5BookingObj.locality = newCustomerLocationDetails[i + 11].textContent
                          service5BookingObj.postal_code = newCustomerLocationDetails[i + 12].textContent 
                          styleSelectedLocation()
                          bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5LocationSelected = true
                          console.log(service5BookingObj)
                        } else {
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 3) { // 15
                        if (newCustomerLocationDetails[i + 12].textContent !== '') {
                          service5BookingObj.name = newCustomerLocationDetails[i + 12].textContent
                          service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 13].textContent
                          service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 14].textContent
                          service5BookingObj.locality = newCustomerLocationDetails[i + 15].textContent
                          service5BookingObj.postal_code = newCustomerLocationDetails[i + 16].textContent 
                          styleSelectedLocation()
                          bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5LocationSelected = true
                          console.log(service5BookingObj)
                        } else {
                          console.log('peace')
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 4) { // 20
                        if (newCustomerLocationDetails[i + 16].textContent !== '') {
                          service5BookingObj.name = newCustomerLocationDetails[i + 16].textContent
                          service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 17].textContent
                          service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 18].textContent
                          service5BookingObj.locality = newCustomerLocationDetails[i + 19].textContent
                          service5BookingObj.postal_code = newCustomerLocationDetails[i + 20].textContent
                          styleSelectedLocation()
                          bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5LocationSelected = true
                          console.log(service5BookingObj)
                        } else {
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 5) { // 25
                        if (newCustomerLocationDetails[i + 20].textContent !== '') {
                          service5BookingObj.name = newCustomerLocationDetails[i + 20].textContent
                          service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 21].textContent
                          service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 22].textContent
                          service5BookingObj.locality = newCustomerLocationDetails[i + 23].textContent
                          service5BookingObj.postal_code = newCustomerLocationDetails[i + 24].textContent
                          styleSelectedLocation()
                          bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5LocationSelected = true
                          console.log(service5BookingObj)
                        } else {
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 6) { // 30
                        if (newCustomerLocationDetails[i + 24].textContent !== '') {
                          service5BookingObj.name = newCustomerLocationDetails[i + 24].textContent
                          service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 25].textContent
                          service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 26].textContent
                          service5BookingObj.locality = newCustomerLocationDetails[i + 27].textContent
                          service5BookingObj.postal_code = newCustomerLocationDetails[i + 28].textContent
                          styleSelectedLocation()
                          bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5LocationSelected = true
                          console.log(service5BookingObj)
                        } else {
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 7) { // 35
                        if (newCustomerLocationDetails[i + 28].textContent !== '') {
                          service5BookingObj.name = newCustomerLocationDetails[i + 28].textContent
                          service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 29].textContent
                          service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 30].textContent
                          service5BookingObj.locality = newCustomerLocationDetails[i + 31].textContent
                          service5BookingObj.postal_code = newCustomerLocationDetails[i + 32].textContent
                          styleSelectedLocation()
                          bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5LocationSelected = true
                          console.log(service5BookingObj)
                        } else {
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 8) { // 40
                        if (newCustomerLocationDetails[i + 32].textContent !== '') {
                          service5BookingObj.name = newCustomerLocationDetails[i + 32].textContent
                          service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 33].textContent
                          service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 34].textContent
                          service5BookingObj.locality = newCustomerLocationDetails[i + 35].textContent
                          service5BookingObj.postal_code = newCustomerLocationDetails[i + 36].textContent
                          styleSelectedLocation()
                          bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5LocationSelected = true
                          console.log(service5BookingObj)
                        } else {
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none' 
                        }
                    } else if (i === 9) { // 45
                        if (newCustomerLocationDetails[i + 36].textContent !== '') {
                          service5BookingObj.name = newCustomerLocationDetails[i + 36].textContent
                          service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 37].textContent
                          service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 38].textContent
                          service5BookingObj.locality = newCustomerLocationDetails[i + 39].textContent
                          service5BookingObj.postal_code = newCustomerLocationDetails[i + 40].textContent
                          styleSelectedLocation()
                          bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          console.log(service5BookingObj)
                        } else {
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 10) { // 50
                        if (newCustomerLocationDetails[i + 40].textContent !== '') {
                          service5BookingObj.name = newCustomerLocationDetails[i + 40].textContent
                          service5BookingObj.address_line_1 = newCustomerLocationDetails[i + 41].textContent
                          service5BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 42].textContent
                          service5BookingObj.locality = newCustomerLocationDetails[i + 43].textContent
                          service5BookingObj.postal_code = newCustomerLocationDetails[i + 44].textContent
                          styleSelectedLocation()
                          bookingModalS5LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5LocationSelected = true
                          console.log(service5BookingObj)
                        } else {
                          bookingModalS5CustomerLocationsBox.children[i].style.display = 'none'
                        } 
                    }
                  })
                }
                console.log(bookingModalS5CustomerLocationsBox.children.length)
              }
                getCustomersFile()
                  .then(() => { console.log('the getCustomersFile() has been sent to the express server') })
                  .catch((error) => { console.log(error) })
            }
          }
            newLocationMongoDb()
              .then(() => { console.log('the newLocationMongoDb() has been sent to the express server') })
              .catch((error) => { console.log(error) })
          // create new location -- Square
        }
      })
    }
  }

  selectDateTime() {
    // edit "date & time"
    editbookingModalS5DateTime.addEventListener('click', () => {
      // right changes
      bookingModalS5Agents.className = 'booking-modal-s5-right hide-container'
      bookingModalS5Location.className = 'booking-modal-s5-right hide-container'
      bookingModalS5DateTime.className = 'booking-modal-s5-right'
      bookingModalS5ConfirmDetails.className = 'booking-modal-s5-right hide-container'

      bookingModalS5Step1.className = ''
      bookingModalS5Step2.className = ''
      bookingModalS5Step3.className = 'step-selected'
      bookingModalS5Step4.className = ''

      bookingModalS5Counter = 2

      // footer changes
      if (bookingModalS5DateSelected && bookingModalS5TimeSelected) {
        bookingModalS5NextBtn.className = 'booking-modal-s5-next'
        bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
      } else {
        bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
        bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
      }
    })

    // if user is on select "date & time"
    if (myApp.companyOptions5Bool && bookingModalS5DateTime.className === 'booking-modal-s5-right') {
      console.log('Select date & time!')

      // setup for getting current "start_at" and current "end_at" dates (1 month from the current day)
      const bmDate = new Date()

      let bookingModalS5Year = bmDate.getYear() + 1900
      let bookingModalS5Month = bmDate.getMonth() + 1
      let bookingModalS5Day = bmDate.getDate()

      let bookingModalS5MinDate = `${bookingModalS5Month}-${bookingModalS5Day}-${bookingModalS5Year}`
      let bookingModalS5MaxDate = `${bookingModalS5Month + 1}-${bookingModalS5Day}-${bookingModalS5Year}`

      let bookingModalS5MinDateNew, bookingModalS5MaxDateNew

      console.log(bookingModalS5MinDate, bookingModalS5MaxDate)

        // if current month has 1 digit
      if (bookingModalS5MinDate.substring(0, 2) !== '10' || bookingModalS5MinDate.substring(0, 2) !== '11' || bookingModalS5MinDate.substring(0, 2) !== '12') {
        bookingModalS5MinDate = bookingModalS5MinDate.replace(bookingModalS5MinDate.substring(0, 1), `0${bookingModalS5Month}`)
        console.log(bookingModalS5MinDate)
      }

        // if next month has 1 digit
      if (bookingModalS5MaxDate.substring(0, 2) !== '10' || bookingModalS5MaxDate.substring(0, 2) !== '11' || bookingModalS5MaxDate.substring(0, 2) !== '12') {
        bookingModalS5MaxDate = bookingModalS5MaxDate.replace(bookingModalS5MaxDate.substring(0, 1), `0${bookingModalS5Month + 1}`)
        console.log(bookingModalS5MaxDate)
      }

        // if current date is 1 digit
      if (bookingModalS5MinDate.substring(3, 5).includes('-')) {
        bookingModalS5MinDateNew = bookingModalS5MinDate.slice(0, 3) + '0' + bookingModalS5MinDate.slice(3, 9)
        console.log(bookingModalS5MinDateNew)
      } else {
        bookingModalS5MinDateNew = bookingModalS5MinDate
      }

        // if next date is 1 digit
      if (bookingModalS5MaxDate.substring(3, 5).includes('-')) {
        bookingModalS5MaxDateNew = bookingModalS5MaxDate.slice(0, 3) + '0' + bookingModalS5MaxDate.slice(3, 9)
        console.log(bookingModalS5MaxDateNew)
      } else {
        bookingModalS5MaxDateNew = bookingModalS5MaxDate
      }

        // set the "start_at" and "end_at" times to the serviceAvailabilityObj
      service5AvailabilityObj.start_at = `${bookingModalS5MinDateNew.slice(6, 11)}-${bookingModalS5MinDateNew.slice(0, 2)}-${bookingModalS5MinDateNew.slice(3, 5)}T12:00:00Z`
      service5AvailabilityObj.end_at = `${bookingModalS5MaxDateNew.slice(6, 11)}-${bookingModalS5MaxDateNew.slice(0, 2)}-${bookingModalS5MaxDateNew.slice(3, 5)}T21:00:00Z`
      service5AvailabilityObj.location_id = `${myApp.companyLocationId}`
      service5AvailabilityObj.service_variation_id = `${myApp.companyService5VariationId}`

      console.log(service5AvailabilityObj)

      // 
      // fetch available times for the service
      async function service5Availabilities() {
        // req & res
        const get_company_availabilities_req = await fetch(`/getCompanyAvailabilities/${JSON.stringify(service5AvailabilityObj)}`, { method: 'post' })
        const get_company_availabilities_res = await get_company_availabilities_req.json()

        console.log(get_company_availabilities_res)

        if (get_company_availabilities_res.errors[0]) {
          console.log('It looks like you have an appointment with us already. Cancel your existing appointment to create a new booking. Thank You.')          
          
          // show the user the "booking exists" modal
          bookingExistsModal.className = 'booking-exists-modal'

          // booking close btn
          bookingExistsModalClose.addEventListener('click', () => {
            bookingExistsModal.className = 'bookine-exists-modal hide-container'
          })
          // booking close on clickaway
          document.addEventListener('click', (event) => {
            if (event.target === bookingExistsModal) {
              bookingExistsModal.className = 'booking-exists-modal hide-container'
            }
          })
        } else {
          // show the bookingModalS5
          // myApp.bookingModalS5.className = 'booking-modal-s5'

          // filter and display available dates on the calendar
          console.log(bookingModalS5CalDays[0].textContent)
          console.log(bookingModalS5CalDays.length)

          let availableDaysArr = []
          let availableDaysThisMonthArr = []
          let availableDaysNextMonthArr = []
          let availableCalDaysArr = []

          let selectedDateArr = []
          let selectedTimesArr = []
          let selectedTimesThisMonthArr = []
          
          // push all the available "dates" into a new array (service 1)
          for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
            if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10)) {
              if (availableDaysArr[i - 1] !== get_company_availabilities_res.availabilities[i].start_at.substring(8, 10)) {
                availableDaysArr.push(get_company_availabilities_res.availabilities[i].start_at.substring(8, 10))
              }
            }
          }

          // refine all available "dates" so they only occur once in the array
          for (let i = 0; i < availableDaysArr.length; i++) {
            if (availableDaysArr[i] === availableDaysArr[i - 1]) {
              availableDaysArr.splice(i, 1)
              i = 0
            }
          }
          console.log(availableDaysArr)

          // split dates in "availableDaysArr" to this month array/next month array
          let maxDate = Math.max(...availableDaysArr)
          console.log(maxDate)
          let indexMaxDate = availableDaysArr.indexOf(`${maxDate}`)
          console.log(indexMaxDate)

          console.log(bookingModalS5Date.getMonth())

          // if all available days only have a next month value then append to next month Arr
          if (get_company_availabilities_res.availabilities[0].start_at.slice(5, 7) === `0${bookingModalS5Date.getMonth() + 2}` || get_company_availabilities_res.availabilities[0].start_at.slice(5, 7) === '01' && bookingModalS5Date.getMonth() === 11) {
            // append all values to next month
            for (let i = 0; i < indexMaxDate; i++) {
              availableDaysNextMonthArr.push(availableDaysArr[i])
            }
          } else {
              // push current available days of "this" month to an arr
              for (let i = 0; i <= indexMaxDate; i++) {
                availableDaysThisMonthArr.push(availableDaysArr[i])
              }

              // push current available days of "next" month to an arr
              for (let i = indexMaxDate + 1; i < availableDaysArr.length; i++) {
                availableDaysNextMonthArr.push(availableDaysArr[i])
              }
              console.log(availableDaysThisMonthArr)
              console.log(availableDaysNextMonthArr)
          }
          
          // else do the following



          // push the days of the selected calendar month to an array to make comparable to "availableDaysThisMonthArr & availableDaysNextMonthArr"
          for (let i = 0; i < bookingModalS5CalDays.length; i++) {
            if (bookingModalS5CalDays[i].textContent.length === 1) {
              availableCalDaysArr.push(`0${bookingModalS5CalDays[i].textContent}`)
            } else {
              availableCalDaysArr.push(`${bookingModalS5CalDays[i].textContent}`)
            }
          }

          // style and show available dates for this month on the calendar
          for (let i = 0; i < availableCalDaysArr.length; i++) {
            let availableDaysDate = availableDaysThisMonthArr[i]
            let availableCalDaysIndex

            // find index of current date in the calendar
            for (let k = 0; k <= availableCalDaysArr.length; k++) {
              if (availableDaysDate === availableCalDaysArr[k]) {
                availableCalDaysIndex = k
              }
            }

            // style available dates from service 2 this month onto the calendar
            for (let j = availableCalDaysIndex; j < availableCalDaysArr.length; j++) {
              if (availableCalDaysArr[j] === availableDaysDate) {
                bookingModalS5CalDays[j].className = 'booking-modal-s5-datetime-style'
                console.log(bookingModalS5CalDays[j])
              }
            }
          }
          

          /** On Load */
          // mouser over available calendar date (today)
          bookingModalS5CalToday.addEventListener('mouseover', () => {
            console.log('peace')
            if (bookingModalS5CalToday.className === 'booking-modal-s5-today' || bookingModalS5CalToday.className === 'booking-modal-s5-datetime-hovered') {
              bookingModalS5CalToday.style.cursor = 'pointer'
              bookingModalS5CalToday.className = 'booking-modal-s5-datetime-hovered'
            }
          })

          // mouse leave avaialble calendar date (today)
          bookingModalS5CalToday.addEventListener('mouseleave', () => {
            console.log('peace')
            if (bookingModalS5CalToday.className === 'booking-modal-s5-datetime-hovered') {
              bookingModalS5CalToday.className = 'booking-modal-s5-today'
            }
          })

          // if today is clicked
          bookingModalS5CalToday.addEventListener('click', () => {
            console.log('peace')
            if (bookingModalS5CalToday.className === 'booking-modal-s5-datetime-hovered') {
              // unstyle all other available dates
              for (let j = 0; j < bookingModalS5CalDays.length; j++) {
                bookingModalS5CalDays[j].style.backgroundColor = ''
                bookingModalS5CalDays[j].style.color = '#FFFFFF'
              }

              bookingModalS5CalToday.style.backgroundColor = '#f05e7c'
              bookingModalS5CalToday.style.color = '#FFFFFF'

              bookingModalS5DateSelected = true
              console.log(bookingModalS5DateSelected)

              let selectedFinalDate
              let selectedFinalMonth
              console.log(bookingModalS5CalToday)
              selectedDateArr = []
              selectedTimesArr = []
              selectedTimesThisMonthArr = []
              // bookingModalS5BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s5-datetime-box-header"><h1 id="booking-modal-s5-current-time-title" class='booking-modal-s5-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s5-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
              
              // push the selected "date" number to a new array (selectedDateArr)
              if (bookingModalS5CalToday.textContent.length === 1) {
                selectedDateArr.push(`0${bookingModalS5CalToday.textContent}`)
                selectedFinalDate = `0${bookingModalS5CalToday.textContent}`
              } else {
                selectedDateArr.push(bookingModalS5CalToday.textContent)
                selectedFinalDate = bookingModalS5CalToday.textContent
              }

              // loop through initial all available dates array and push all available "times" to a new array
              for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                  selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                }
              }
              console.log(selectedTimesArr)

              console.log(bookingModalS5Date.getMonth().toString().length)

              // loop through and selectedTimesArr and push "times" available for the "this month" only
              for (let i = 0; i < selectedTimesArr.length; i++) {
                if (bookingModalS5Date.getMonth().toString().length === 1) {
                  let currentMonth = `0${bookingModalS5Date.getMonth() + 1}`
                  selectedFinalMonth = `0${bookingModalS5Date.getMonth() + 1}`
                  console.log(bookingModalS5Date.getMonth())

                  if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                    selectedTimesThisMonthArr.push(selectedTimesArr[i])
                    console.log(selectedTimesThisMonthArr)
                  } 

                } else if (bookingModalS5Date.getMonth().toString().length === 2) {
                  if (selectedTimesArr[i].substring(5, 7) === bookingModalS5Date.getMonth()) {
                    selectedTimesThisMonthArr.push(selectedTimesArr[i])
                    selectedFinalMonth = bookingModalS5Date.getMonth() + 1
                    console.log(selectedTimesThisMonthArr)
                  }
                }
              }
              console.log(selectedTimesThisMonthArr)

              // loop through "this months" available "times" array and display those times into the bookingModalS5BodyRightDateTimeBox
              for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                let newH1Element = document.createElement('h1')
                let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                newH1Element.className = 'booking-modal-s5-datetimes'
                
                // convert times to normal times
                if (selectedTimeOnly === '12:00') {
                  newH1Element.textContent = '08:00 AM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '12:30') {
                  newH1Element.textContent = '08:30 AM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '13:00') {
                  newH1Element.textContent = '09:00 AM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '13:30') {
                  newH1Element.textContent = '09:30 AM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '14:00') {
                  newH1Element.textContent = '10:00 AM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '14:30') {
                  newH1Element.textContent = '10:30 AM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '15:00') {
                  newH1Element.textContent = '11:00 AM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '15:30') {
                  newH1Element.textContent = '11:30 AM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '16:00') {
                  newH1Element.textContent = '12:00 PM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '16:30') {
                  newH1Element.textContent = '12:30 PM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '17:00') {
                  newH1Element.textContent = '01:00 PM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '17:30') {
                  newH1Element.textContent = '01:30 PM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '18:00') {
                  newH1Element.textContent = '02:00 PM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '18:30') {
                  newH1Element.textContent = '02:30 PM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '19:00') {
                  newH1Element.textContent = '03:00 PM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '19:30') {
                  newH1Element.textContent = '03:30 PM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '20:00') {
                  newH1Element.textContent = '04:00 PM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '20:30') {
                  newH1Element.textContent = '04:30 PM'
                  bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                }  
              }

              // loop through bookingModalS5BodyRightDateTimeBox to listen for a click from the user
              for (let i = 1; i < bookingModalS5BodyRightDateTimeBox.children.length; i++) {
                bookingModalS5BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                  let selectedFinalTime = ''

                  // clear all other times first
                  for (let j = 0; j < bookingModalS5BodyRightDateTimeBox.children.length; j++) {
                    bookingModalS5BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                    bookingModalS5BodyRightDateTimeBox.children[j].style.color = 'black'
                  }

                  bookingModalS5BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                  bookingModalS5BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                  bookingModalS5TimeSelected = true
                  console.log(bookingModalS5TimeSelected)

                  if (bookingModalS5DateSelected && bookingModalS5TimeSelected) {
                    bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                    bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                    bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                  } else {
                    bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
                    bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
                    bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                  }

                  // convert the time back to army time
                  if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                    selectedFinalTime = '12:00'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                    selectedFinalTime = '12:30'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                    selectedFinalTime = '13:00'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                    selectedFinalTime = '13:30'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                    selectedFinalTime = '14:00'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                    selectedFinalTime = '14:30'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                    selectedFinalTime = '15:00'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                    selectedFinalTime = '15:30'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                    selectedFinalTime = '16:00'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                    selectedFinalTime = '16:30'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                    selectedFinalTime = '17:00'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                    selectedFinalTime = '17:30'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                    selectedFinalTime = '18:00'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                    selectedFinalTime = '18:30'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                    selectedFinalTime = '19:00'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                    selectedFinalTime = '19:30'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                    selectedFinalTime = '20:00'
                  } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                    selectedFinalTime = '20:30'
                  }

                  // push the time and date to the booking object
                  service5BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                  console.log(service5BookingObj)

                })
              }
            } 
          })

          
          // loop through bookingModalS5CalDays
          for (let i = 0; i < bookingModalS5CalDays.length; i++) {
            // mouser over available calendar date
            bookingModalS5CalDays[i].addEventListener('mouseover', () => {
              if (bookingModalS5CalDays[i].className === 'booking-modal-s5-datetime-style') {
                bookingModalS5CalDays[i].style.cursor = 'pointer'
                bookingModalS5CalDays[i].className = 'booking-modal-s5-datetime-style booking-modal-s5-datetime-hovered'
              }
            })

            // mouse leave avaialble calendar date
            bookingModalS5CalDays[i].addEventListener('mouseleave', (event) => {
              if (bookingModalS5CalDays[i].className === 'booking-modal-s5-datetime-style booking-modal-s5-datetime-hovered') {
                bookingModalS5CalDays[i].className = 'booking-modal-s5-datetime-style'
              }
            })

            // click on available calendar date
            bookingModalS5CalDays[i].addEventListener('click', () => {                
              if (bookingModalS5CalDays[i].className === 'booking-modal-s5-datetime-style booking-modal-s5-datetime-hovered') {
                // unstyle all other available dates
                bookingModalS5CalToday.style.backgroundColor = ''
                bookingModalS5CalToday.style.color = ''
                bookingModalS5CalToday.className = 'booking-modal-s5-today'

                for (let j = 0; j < bookingModalS5CalDays.length; j++) {
                  bookingModalS5CalDays[j].style.backgroundColor = ''
                  bookingModalS5CalDays[j].style.color = '#FFFFFF'
                }

                bookingModalS5CalDays[i].style.backgroundColor = '#F05E7C'
                bookingModalS5CalDays[i].style.color = '#FFFFFF'

                bookingModalS5DateSelected = true
                console.log(bookingModalS5DateSelected)

                let selectedFinalDate
                let selectedFinalMonth
                console.log(bookingModalS5CalDays[i])
                selectedDateArr = []
                selectedTimesArr = []
                selectedTimesThisMonthArr = []
                // bookingModalS5BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s5-datetime-box-header"><h1 id="booking-modal-s5-current-time-title" class='booking-modal-s5-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s5-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                
                // push the selected "date" number to a new array (selectedDateArr)
                if (bookingModalS5CalDays[i].textContent.length === 1) {
                  selectedDateArr.push(`0${bookingModalS5CalDays[i].textContent}`)
                  selectedFinalDate = `0${bookingModalS5CalDays[i].textContent}`
                } else {
                  selectedDateArr.push(bookingModalS5CalDays[i].textContent)
                  selectedFinalDate = bookingModalS5CalDays[i].textContent
                }

                // loop through initial all available dates array and push all available "times" to a new array
                for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                  if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                    selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                  }
                }
                console.log(selectedTimesArr)

                console.log(bookingModalS5Date.getMonth().toString().length)

                // loop through and selectedTimesArr and push times available for the "next month" only
                for (let i = 0; i < selectedTimesArr.length; i++) {
                  if (bookingModalS5Date.getMonth().toString().length === 1) {
                    let currentMonth = `0${bookingModalS5Date.getMonth() + 1}`
                    selectedFinalMonth = `0${bookingModalS5Date.getMonth() + 1}`
                    console.log(bookingModalS5Date.getMonth())

                    if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                      selectedTimesThisMonthArr.push(selectedTimesArr[i])
                      console.log(selectedTimesThisMonthArr)
                    } 

                  } else if (bookingModalS5Date.getMonth().toString().length === 2) {
                    if (selectedTimesArr[i].substring(5, 7) === bookingModalS5Date.getMonth()) {
                      selectedTimesThisMonthArr.push(selectedTimesArr[i])
                      selectedFinalMonth = bookingModalS5Date.getMonth() + 1
                      console.log(selectedTimesThisMonthArr)
                    }
                  }
                }
                console.log(selectedTimesThisMonthArr)

                // loop through the new next months available "times" array and display those times into the bookingModalS5BodyRightDateTimeBox
                for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                  let newH1Element = document.createElement('h1')
                  let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                  newH1Element.className = 'booking-modal-s5-datetimes'
                  
                  // convert times to normal times
                  if (selectedTimeOnly === '12:00') {
                    newH1Element.textContent = '08:00 AM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '12:30') {
                    newH1Element.textContent = '08:30 AM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '13:00') {
                    newH1Element.textContent = '09:00 AM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '13:30') {
                    newH1Element.textContent = '09:30 AM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '14:00') {
                    newH1Element.textContent = '10:00 AM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '14:30') {
                    newH1Element.textContent = '10:30 AM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '15:00') {
                    newH1Element.textContent = '11:00 AM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '15:30') {
                    newH1Element.textContent = '11:30 AM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '16:00') {
                    newH1Element.textContent = '12:00 PM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '16:30') {
                    newH1Element.textContent = '12:30 PM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '17:00') {
                    newH1Element.textContent = '01:00 PM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '17:30') {
                    newH1Element.textContent = '01:30 PM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '18:00') {
                    newH1Element.textContent = '02:00 PM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '18:30') {
                    newH1Element.textContent = '02:30 PM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '19:00') {
                    newH1Element.textContent = '03:00 PM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '19:30') {
                    newH1Element.textContent = '03:30 PM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '20:00') {
                    newH1Element.textContent = '04:00 PM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '20:30') {
                    newH1Element.textContent = '04:30 PM'
                    bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                  } 
                }

                // loop through bookingModalS5BodyRightDateTimeBox to listen for a click from the user
                for (let i = 1; i < bookingModalS5BodyRightDateTimeBox.children.length; i++) {
                  bookingModalS5BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                    let selectedFinalTime = ''

                    // clear all other times first
                    for (let j = 0; j < bookingModalS5BodyRightDateTimeBox.children.length; j++) {
                      bookingModalS5BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                      bookingModalS5BodyRightDateTimeBox.children[j].style.color = 'black'
                    }

                    bookingModalS5BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                    bookingModalS5BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'  

                    bookingModalS5TimeSelected = true
                    console.log(bookingModalS5TimeSelected)

                    if (bookingModalS5DateSelected && bookingModalS5TimeSelected) {
                      bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                      bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                      bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                    } else {
                      bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
                      bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
                      bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                    }

                    // convert the time back to army time
                    if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                      selectedFinalTime = '12:00'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                      selectedFinalTime = '12:30'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                      selectedFinalTime = '13:00'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                      selectedFinalTime = '13:30'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                      selectedFinalTime = '14:00'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                      selectedFinalTime = '14:30'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                      selectedFinalTime = '15:00'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                      selectedFinalTime = '15:30'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                      selectedFinalTime = '16:00'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                      selectedFinalTime = '16:30'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                      selectedFinalTime = '17:00'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                      selectedFinalTime = '17:30'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                      selectedFinalTime = '18:00'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                      selectedFinalTime = '18:30'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                      selectedFinalTime = '19:00'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                      selectedFinalTime = '19:30'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                      selectedFinalTime = '20:00'
                    } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                      selectedFinalTime = '20:30'
                    }

                    // push the time and date to the booking object
                    service5BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                    console.log(service5BookingObj)

                  })
                }
              } 
            
            })
          }


          /* Next Btn Cal */
          // if next calendar btn clicked
          bookingModalS5NextBtnCal.addEventListener('click', () => {
            bookingModalS5NextBtnCalCounter++
            availableCalDaysArr = []
            let bookingModalS5DateTimeBoxLength = bookingModalS5BodyRightDateTimeBox.children.length
            for (let i = 1; i < bookingModalS5DateTimeBoxLength; i++) {
              console.log(bookingModalS5BodyRightDateTimeBox.children[1])
              bookingModalS5BodyRightDateTimeBox.removeChild(bookingModalS5BodyRightDateTimeBox.children[1])
            }

            if (bookingModalS5NextBtnCalCounter === 1) {
              bookingModalS5NextBtnCal.style.cursor = 'not-allowed'

              bookingModalS5Date.setMonth(bookingModalS5Date.getMonth() + 1)

              bookingModalS5RenderCalendar()

              bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
              bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
              bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'

              bookingModalS5DateSelected = false
              bookingModalS5TimeSelected = false

              console.log(bookingModalS5DateSelected)
              console.log(bookingModalS5TimeSelected)

              let bookingModalS5CalDaysNext = document.querySelectorAll('.booking-modal-s5-cal-days')
              let selectedDateArr = []
              let selectedTimesArr = []
              let selectedTimesNextMonthArr = []
              // bookingModalS5BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s5-datetime-box-header"><h1 id="booking-modal-s5-current-time-title" class='booking-modal-s5-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s5-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`

              console.log(bookingModalS5CalDaysNext)
              console.log(bookingModalS5CalDaysNext.length)



              // push the days of the selected calendar month to an array to make comparable
              for (let i = 0; i < bookingModalS5CalDaysNext.length; i++) {
                if (bookingModalS5CalDaysNext[i].textContent.length === 1) {
                  availableCalDaysArr.push(`0${bookingModalS5CalDaysNext[i].textContent}`)
                } else {
                  availableCalDaysArr.push(`${bookingModalS5CalDaysNext[i].textContent}`)
                }
              }
              console.log(availableCalDaysArr)

              // style and show available dates for the next month on the calendar
              for (let i = 0; i < availableCalDaysArr.length; i++) {
                let availableDaysDate = availableDaysNextMonthArr[i]
                // style available dates from service 1 next month onto the calendar
                for (let j = 0; j < availableCalDaysArr.length; j++) {
                  if (availableCalDaysArr[j] === availableDaysDate) {
                    bookingModalS5CalDaysNext[j].className = 'booking-modal-s5-datetime-style'
                    console.log(bookingModalS5CalDaysNext[j])
                  }
                }
              } 

              // go through bookingModalS5CalDays
              for (let i = 0; i < bookingModalS5CalDaysNext.length; i++) {
                // mouser over available calendar date
                bookingModalS5CalDaysNext[i].addEventListener('mouseover', () => {
                  if (bookingModalS5CalDaysNext[i].className === 'booking-modal-s5-datetime-style') {
                    bookingModalS5CalDaysNext[i].style.cursor = 'pointer'
                    bookingModalS5CalDaysNext[i].className = 'booking-modal-s5-datetime-style booking-modal-s5-datetime-hovered'
                  }
                })

                // mouse leave avaialble calendar date
                bookingModalS5CalDaysNext[i].addEventListener('mouseleave', (event) => {
                  if (bookingModalS5CalDaysNext[i].className === 'booking-modal-s5-datetime-style booking-modal-s5-datetime-hovered') {
                    bookingModalS5CalDaysNext[i].className = 'booking-modal-s5-datetime-style'
                  }
                })

                // click on available calendar date
                bookingModalS5CalDaysNext[i].addEventListener('click', () => {                
                  if (bookingModalS5CalDaysNext[i].className === 'booking-modal-s5-datetime-style booking-modal-s5-datetime-hovered') {
                    // unstyle all other available dates
                    for (let j = 0; j < bookingModalS5CalDaysNext.length; j++) {
                      bookingModalS5CalDaysNext[j].style.backgroundColor = ''
                      bookingModalS5CalDaysNext[j].style.color = '#FFFFFF'
                    }

                    bookingModalS5CalDaysNext[i].style.backgroundColor = '#F05E7C'
                    bookingModalS5CalDaysNext[i].style.color = '#FFFFFF'

                    bookingModalS5DateSelected = true
                    console.log(bookingModalS5DateSelected)

                    let selectedFinalDate
                    let selectedFinalMonth
                    console.log(bookingModalS5CalDaysNext[i])
                    selectedDateArr = []
                    selectedTimesArr = []
                    selectedTimesNextMonthArr = []
                    // bookingModalS5BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s5-datetime-box-header"><h1 id="booking-modal-s5-current-time-title" class='booking-modal-s5-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s5-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                    
                    // push the selected "date" number to a new array (selectedDateArr)
                    if (bookingModalS5CalDaysNext[i].textContent.length === 1) {
                      selectedDateArr.push(`0${bookingModalS5CalDaysNext[i].textContent}`)
                      selectedFinalDate = `0${bookingModalS5CalDaysNext[i].textContent}`
                    } else {
                      selectedDateArr.push(bookingModalS5CalDaysNext[i].textContent)
                      selectedFinalDate = bookingModalS5CalDaysNext[i].textContent
                    }

                    // loop through initial all available dates array and push all available "times" to a new array
                    for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                      if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                        selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                      }
                    }
                    console.log(selectedTimesArr)

                    console.log(bookingModalS5Date.getMonth().toString().length)

                    // loop through and selectedTimesArr and push times available for the "next month" only
                    for (let i = 0; i < selectedTimesArr.length; i++) {
                      if (bookingModalS5Date.getMonth().toString().length === 1) {
                        let currentMonth = `0${bookingModalS5Date.getMonth() + 1}`
                        selectedFinalMonth = `0${bookingModalS5Date.getMonth() + 1}`

                        if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        } 
                      } else if (bookingModalS5Date.getMonth().toString().length === 2) {
                        if (selectedTimesArr[i].substring(5, 7) === bookingModalS5Date.getMonth()) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS5Date.getMonth() + 1
                        }
                      }
                    }
                    console.log(selectedTimesNextMonthArr)

                    // loop through the new next months available "times" array and display those times into the bookingModalS5BodyRightDateTimeBox
                    for (let i = 0; i < selectedTimesNextMonthArr.length; i++) {
                      let newH1Element = document.createElement('h1')
                      let selectedTimeOnly = selectedTimesNextMonthArr[i].substring(11, 16)
                      newH1Element.className = 'booking-modal-s5-datetimes'
                      
                      // convert times to normal times
                      if (selectedTimeOnly === '12:00') {
                        newH1Element.textContent = '08:00 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '12:30') {
                        newH1Element.textContent = '08:30 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:00') {
                        newH1Element.textContent = '09:00 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:30') {
                        newH1Element.textContent = '09:30 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:00') {
                        newH1Element.textContent = '10:00 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:30') {
                        newH1Element.textContent = '10:30 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:00') {
                        newH1Element.textContent = '11:00 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:30') {
                        newH1Element.textContent = '11:30 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:00') {
                        newH1Element.textContent = '12:00 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:30') {
                        newH1Element.textContent = '12:30 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:00') {
                        newH1Element.textContent = '01:00 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:30') {
                        newH1Element.textContent = '01:30 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:00') {
                        newH1Element.textContent = '02:00 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:30') {
                        newH1Element.textContent = '02:30 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:00') {
                        newH1Element.textContent = '03:00 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:30') {
                        newH1Element.textContent = '03:30 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:00') {
                        newH1Element.textContent = '04:00 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:30') {
                        newH1Element.textContent = '04:30 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      }  
                    }

                    // loop through bookingModalS5BodyRightDateTimeBox to listen for a click from the user
                    for (let i = 1; i < bookingModalS5BodyRightDateTimeBox.children.length; i++) {
                      bookingModalS5BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                        let selectedFinalTime = ''

                        // clear all other times first
                        for (let j = 0; j < bookingModalS5BodyRightDateTimeBox.children.length; j++) {
                          bookingModalS5BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                          bookingModalS5BodyRightDateTimeBox.children[j].style.color = 'black'
                        }

                        bookingModalS5BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                        bookingModalS5BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                        bookingModalS5TimeSelected = true
                        console.log(bookingModalS5TimeSelected)

                        if (bookingModalS5DateSelected && bookingModalS5TimeSelected) {
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                        } else {
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
                          bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                        }

                        // convert the time back to army time
                        if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                          selectedFinalTime = '12:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                          selectedFinalTime = '12:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                          selectedFinalTime = '13:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                          selectedFinalTime = '13:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                          selectedFinalTime = '14:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                          selectedFinalTime = '14:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                          selectedFinalTime = '15:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                          selectedFinalTime = '15:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                          selectedFinalTime = '16:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                          selectedFinalTime = '16:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                          selectedFinalTime = '17:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                          selectedFinalTime = '17:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                          selectedFinalTime = '18:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                          selectedFinalTime = '18:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                          selectedFinalTime = '19:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                          selectedFinalTime = '19:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                          selectedFinalTime = '20:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                          selectedFinalTime = '20:30'
                        }

                        // push the time and date to the booking object
                        service5BookingObj.start_at = `${selectedTimesNextMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                        console.log(service5BookingObj)

                      })
                    }

                  } 
                
                })
              }

            } else if (bookingModalS5NextBtnCalCounter > 1) {
              bookingModalS5NextBtnCalCounter = 1
            }
          })


          /**Prev Btn Cal */
          bookingModalS5PrevBtnCal.addEventListener('mouseover', () => {
            if (bookingModalS5NextBtnCalCounter === 0) {
              bookingModalS5PrevBtnCal.style.cursor = 'not-allowed'
            } else if (bookingModalS5NextBtnCalCounter === 1) {
              bookingModalS5PrevBtnCal.style.cursor = 'pointer'
            }   
          })

          bookingModalS5PrevBtnCal.addEventListener('click', () => {
            if (bookingModalS5NextBtnCalCounter === 0) {
              bookingModalS5PrevBtnCal.style.cursor = 'not-allowed'
            } else if (bookingModalS5NextBtnCalCounter === 1) {
              bookingModalS5PrevBtnCal.style.cursor = 'pointer'
              bookingModalS5NextBtnCalCounter--
              availableCalDaysArr = []

              let bookingModalS5DateTimeBoxLength = bookingModalS5BodyRightDateTimeBox.children.length
              for (let i = 1; i < bookingModalS5DateTimeBoxLength; i++) {
                console.log(bookingModalS5BodyRightDateTimeBox.children[1])
                bookingModalS5BodyRightDateTimeBox.removeChild(bookingModalS5BodyRightDateTimeBox.children[1])
              }

              if (bookingModalS5NextBtnCalCounter === 0) {
                bookingModalS5PrevBtnCal.style.cursor = 'not-allowed'
                bookingModalS5NextBtnCal.style.cursor = 'pointer'
              }

              bookingModalS5Date.setMonth(bookingModalS5Date.getMonth() - 1)

              bookingModalS5RenderCalendar()

              bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
              bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
              bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'

              bookingModalS5CalToday = document.querySelector('.booking-modal-s5-today')
              console.log(bookingModalS5CalToday)

              bookingModalS5DateSelected = false
              bookingModalS5TimeSelected = false

              console.log(bookingModalS5DateSelected)
              console.log(bookingModalS5TimeSelected)

              let bookingModalS5CalDaysPrev = document.querySelectorAll('.booking-modal-s5-cal-days')
              let selectedDateArr = []
              let selectedTimesArr = []
              let selectedTimesNextMonthArr = []
              // bookingModalS5BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s5-datetime-box-header"><h1 id="booking-modal-s5-current-time-title" class='booking-modal-s5-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s5-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`

              bookingModalS5CalToday.addEventListener('mouseover', () => {
                console.log('peace')
                if (bookingModalS5CalToday.className === 'booking-modal-s5-today' || bookingModalS5CalToday.className === 'booking-modal-s5-datetime-hovered') {
                  bookingModalS5CalToday.style.cursor = 'pointer'
                  bookingModalS5CalToday.className = 'booking-modal-s5-datetime-hovered'
                }
              })
      
              // mouse leave avaialble calendar date (today)
              bookingModalS5CalToday.addEventListener('mouseleave', () => {
                console.log('peace')
                if (bookingModalS5CalToday.className === 'booking-modal-s5-datetime-hovered') {
                  bookingModalS5CalToday.className = 'booking-modal-s5-today'
                }
              })
      
              // if today is clicked
              bookingModalS5CalToday.addEventListener('click', () => {
                console.log('peace')
                if (bookingModalS5CalToday.className === 'booking-modal-s5-datetime-hovered') {
                  // unstyle all other available dates
                  for (let j = 0; j < bookingModalS5CalDaysPrev.length; j++) {
                    bookingModalS5CalDaysPrev[j].style.backgroundColor = ''
                    bookingModalS5CalDaysPrev[j].style.color = '#FFFFFF'
                  }
      
                  bookingModalS5CalToday.style.backgroundColor = '#f05e7c'
                  bookingModalS5CalToday.style.color = '#FFFFFF'

                  bookingModalS5DateSelected = true
                  console.log(bookingModalS5DateSelected)
      
                  let selectedFinalDate
                  let selectedFinalMonth
                  console.log(bookingModalS5CalToday)
                  selectedDateArr = []
                  selectedTimesArr = []
                  selectedTimesThisMonthArr = []
                  // bookingModalS5BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s5-datetime-box-header"><h1 id="booking-modal-s5-current-time-title" class='booking-modal-s5-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s5-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                  
                  // push the selected "date" number to a new array (selectedDateArr)
                  if (bookingModalS5CalToday.textContent.length === 1) {
                    selectedDateArr.push(`0${bookingModalS5CalToday.textContent}`)
                    selectedFinalDate = `0${bookingModalS5CalToday.textContent}`
                  } else {
                    selectedDateArr.push(bookingModalS5CalToday.textContent)
                    selectedFinalDate = bookingModalS5CalToday.textContent
                  }
      
                  // loop through initial all available dates array and push all available "times" to a new array
                  for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                    if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                      selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                    }
                  }
                  console.log(selectedTimesArr)
      
                  console.log(bookingModalS5Date.getMonth().toString().length)
      
                  // loop through and selectedTimesArr and push "times" available for the "this month" only
                  for (let i = 0; i < selectedTimesArr.length; i++) {
                    if (bookingModalS5Date.getMonth().toString().length === 1) {
                      let currentMonth = `0${bookingModalS5Date.getMonth() + 1}`
                      selectedFinalMonth = `0${bookingModalS5Date.getMonth() + 1}`
                      console.log(bookingModalS5Date.getMonth())
      
                      if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                        selectedTimesThisMonthArr.push(selectedTimesArr[i])
                        console.log(selectedTimesThisMonthArr)
                      } 
      
                    } else if (bookingModalS5Date.getMonth().toString().length === 2) {
                      if (selectedTimesArr[i].substring(5, 7) === bookingModalS5Date.getMonth()) {
                        selectedTimesThisMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS5Date.getMonth() + 1
                        console.log(selectedTimesThisMonthArr)
                      }
                    }
                  }
                  console.log(selectedTimesThisMonthArr)
      
                  // loop through "this months" available "times" array and display those times into the bookingModalS5BodyRightDateTimeBox
                  for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                    let newH1Element = document.createElement('h1')
                    let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                    newH1Element.className = 'booking-modal-s5-datetimes'
                    
                    // convert times to normal times
                    if (selectedTimeOnly === '12:00') {
                      newH1Element.textContent = '08:00 AM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '12:30') {
                      newH1Element.textContent = '08:30 AM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '13:00') {
                      newH1Element.textContent = '09:00 AM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '13:30') {
                      newH1Element.textContent = '09:30 AM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '14:00') {
                      newH1Element.textContent = '10:00 AM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '14:30') {
                      newH1Element.textContent = '10:30 AM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '15:00') {
                      newH1Element.textContent = '11:00 AM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '15:30') {
                      newH1Element.textContent = '11:30 AM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '16:00') {
                      newH1Element.textContent = '12:00 PM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '16:30') {
                      newH1Element.textContent = '12:30 PM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '17:00') {
                      newH1Element.textContent = '01:00 PM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '17:30') {
                      newH1Element.textContent = '01:30 PM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '18:00') {
                      newH1Element.textContent = '02:00 PM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '18:30') {
                      newH1Element.textContent = '02:30 PM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '19:00') {
                      newH1Element.textContent = '03:00 PM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '19:30') {
                      newH1Element.textContent = '03:30 PM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '20:00') {
                      newH1Element.textContent = '04:00 PM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '20:30') {
                      newH1Element.textContent = '04:30 PM'
                      bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                    }  
                  }
      
                  // loop through bookingModalS5BodyRightDateTimeBox to listen for a click from the user
                  for (let i = 1; i < bookingModalS5BodyRightDateTimeBox.children.length; i++) {
                    bookingModalS5BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                      let selectedFinalTime = ''
      
                      // clear all other times first
                      for (let j = 0; j < bookingModalS5BodyRightDateTimeBox.children.length; j++) {
                        bookingModalS5BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                        bookingModalS5BodyRightDateTimeBox.children[j].style.color = 'black'
                      }
      
                      bookingModalS5BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                      bookingModalS5BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                      bookingModalS5TimeSelected = true
                      console.log(bookingModalS5TimeSelected)
                      
                      if (bookingModalS5DateSelected && bookingModalS5TimeSelected) {
                        bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                        bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                        bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                      } else {
                        bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
                        bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
                        bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                      }
      
                      // convert the time back to army time
                      if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                        selectedFinalTime = '12:00'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                        selectedFinalTime = '12:30'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                        selectedFinalTime = '13:00'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                        selectedFinalTime = '13:30'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                        selectedFinalTime = '14:00'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                        selectedFinalTime = '14:30'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                        selectedFinalTime = '15:00'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                        selectedFinalTime = '15:30'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                        selectedFinalTime = '16:00'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                        selectedFinalTime = '16:30'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                        selectedFinalTime = '17:00'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                        selectedFinalTime = '17:30'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                        selectedFinalTime = '18:00'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                        selectedFinalTime = '18:30'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                        selectedFinalTime = '19:00'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                        selectedFinalTime = '19:30'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                        selectedFinalTime = '20:00'
                      } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                        selectedFinalTime = '20:30'
                      }
      
                      // push the time and date to the booking object
                      service5BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                    
                      console.log(service5BookingObj)
      
                    })
                  }

                } 
              })

              // push the days in the calendar to an array to make comparable
              for (let i = 0; i < bookingModalS5CalDaysPrev.length; i++) {
                if (bookingModalS5CalDaysPrev[i].textContent.length === 1) {
                  availableCalDaysArr.push(`0${bookingModalS5CalDaysPrev[i].textContent}`)
                } else {
                  availableCalDaysArr.push(`${bookingModalS5CalDaysPrev[i].textContent}`)
                }
              }

              // style and show available dates for this month on the calendar
              for (let i = 0; i < availableCalDaysArr.length; i++) {
                let availableDaysDate = availableDaysThisMonthArr[i]
                let availableCalDaysIndex

                // find index of current date in the calendar
                for (let k = 0; k < availableCalDaysArr.length; k++) {
                  if (availableDaysDate === availableCalDaysArr[k]) {
                    availableCalDaysIndex = k
                  }
                }

                // style available dates from service 1 this month onto the calendar
                for (let j = availableCalDaysIndex; j < availableCalDaysArr.length; j++) {
                  if (availableCalDaysArr[j] === availableDaysDate) {
                    bookingModalS5CalDaysPrev[j].className = 'booking-modal-s5-datetime-style'
                    console.log(bookingModalS5CalDaysPrev[j].className)
                  }
                  
                }
              }

              // loop through bookingModalS5CalDaysPrev
              for (let i = 0; i < bookingModalS5CalDaysPrev.length; i++) {
                // mouser over available calendar date
                bookingModalS5CalDaysPrev[i].addEventListener('mouseover', () => {
                  if (bookingModalS5CalDaysPrev[i].className === 'booking-modal-s5-datetime-style') {
                    bookingModalS5CalDaysPrev[i].style.cursor = 'pointer'
                    bookingModalS5CalDaysPrev[i].className = 'booking-modal-s5-datetime-style booking-modal-s5-datetime-hovered'
                  }
                })

                // mouse leave avaialble calendar date
                bookingModalS5CalDaysPrev[i].addEventListener('mouseleave', () => {
                  if (bookingModalS5CalDaysPrev[i].className === 'booking-modal-s5-datetime-style booking-modal-s5-datetime-hovered') {
                    bookingModalS5CalDaysPrev[i].className = 'booking-modal-s5-datetime-style'
                  }
                })

                // click on available calendar date
                bookingModalS5CalDaysPrev[i].addEventListener('click', () => {                
                  if (bookingModalS5CalDaysPrev[i].className === 'booking-modal-s5-datetime-style booking-modal-s5-datetime-hovered') {
                    // unstyle all other available dates
                    bookingModalS5CalToday.style.backgroundColor = ''
                    bookingModalS5CalToday.style.color = ''
                    bookingModalS5CalToday.className = 'today'

                    // unstyle all other available dates
                    for (let j = 0; j < bookingModalS5CalDaysPrev.length; j++) {
                      bookingModalS5CalDaysPrev[j].style.backgroundColor = ''
                      bookingModalS5CalDaysPrev[j].style.color = '#FFFFFF'
                    }

                    bookingModalS5CalDaysPrev[i].style.backgroundColor = '#F05E7C'
                    bookingModalS5CalDaysPrev[i].style.color = '#FFFFFF'

                    bookingModalS5DateSelected = true
                    console.log(bookingModalS5DateSelected)


                    let selectedFinalDate
                    let selectedFinalMonth
                    console.log(bookingModalS5CalDaysPrev[i])
                    selectedDateArr = []
                    selectedTimesArr = []
                    selectedTimesNextMonthArr = []
                    // bookingModalS5BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s5-datetime-box-header"><h1 id="booking-modal-s5-current-time-title" class='booking-modal-s5-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s5-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                    
                    // push the selected "date" number to a new array (selectedDateArr)
                    if (bookingModalS5CalDaysPrev[i].textContent.length === 1) {
                      selectedDateArr.push(`0${bookingModalS5CalDaysPrev[i].textContent}`)
                      selectedFinalDate = `0${bookingModalS5CalDaysPrev[i].textContent}`
                    } else {
                      selectedDateArr.push(bookingModalS5CalDaysPrev[i].textContent)
                      selectedFinalDate = bookingModalS5CalDaysPrev[i].textContent
                    }

                    // loop through initial all available dates array and push all available "times" to a new array
                    for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                      if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                        selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                      }
                    }
                    console.log(selectedTimesArr)

                    console.log(bookingModalS5Date.getMonth().toString().length)

                    // loop through and selectedTimesArr and push times available for the "next month" only
                    for (let i = 0; i < selectedTimesArr.length; i++) {
                      if (bookingModalS5Date.getMonth().toString().length === 1) {
                        let currentMonth = `0${bookingModalS5Date.getMonth() + 1}`
                        selectedFinalMonth = `0${bookingModalS5Date.getMonth() + 1}`

                        if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        } 
                      } else if (bookingModalS5Date.getMonth().toString().length === 2) {
                        if (selectedTimesArr[i].substring(5, 7) === bookingModalS5Date.getMonth()) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS5Date.getMonth() + 1
                        }
                      }
                    }
                    console.log(selectedTimesNextMonthArr)

                    // loop through the new next months available "times" array and display those times into the bookingModalS5BodyRightDateTimeBox
                    for (let i = 0; i < selectedTimesNextMonthArr.length; i++) {
                      let newH1Element = document.createElement('h1')
                      let selectedTimeOnly = selectedTimesNextMonthArr[i].substring(11, 16)
                      newH1Element.className = 'booking-modal-s5-datetimes'
                      
                      // convert times to normal times
                      if (selectedTimeOnly === '12:00') {
                        newH1Element.textContent = '08:00 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '12:30') {
                        newH1Element.textContent = '08:30 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:00') {
                        newH1Element.textContent = '09:00 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:30') {
                        newH1Element.textContent = '09:30 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:00') {
                        newH1Element.textContent = '10:00 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:30') {
                        newH1Element.textContent = '10:30 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:00') {
                        newH1Element.textContent = '11:00 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:30') {
                        newH1Element.textContent = '11:30 AM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:00') {
                        newH1Element.textContent = '12:00 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:30') {
                        newH1Element.textContent = '12:30 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:00') {
                        newH1Element.textContent = '01:00 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:30') {
                        newH1Element.textContent = '01:30 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:00') {
                        newH1Element.textContent = '02:00 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:30') {
                        newH1Element.textContent = '02:30 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:00') {
                        newH1Element.textContent = '03:00 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:30') {
                        newH1Element.textContent = '03:30 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:00') {
                        newH1Element.textContent = '04:00 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:30') {
                        newH1Element.textContent = '04:30 PM'
                        bookingModalS5BodyRightDateTimeBox.appendChild(newH1Element)
                      }  
                    }

                    // loop through bookingModalS5BodyRightDateTimeBox to listen for a click from the user
                    for (let i = 1; i < bookingModalS5BodyRightDateTimeBox.children.length; i++) {
                      bookingModalS5BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                        let selectedFinalTime = ''

                        // clear all other times first
                        for (let j = 0; j < bookingModalS5BodyRightDateTimeBox.children.length; j++) {
                          bookingModalS5BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                          bookingModalS5BodyRightDateTimeBox.children[j].style.color = 'black'
                        }

                        bookingModalS5BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                        bookingModalS5BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                        bookingModalS5TimeSelected = true
                        console.log(bookingModalS5TimeSelected)

                        if (bookingModalS5DateSelected && bookingModalS5TimeSelected) {
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
                          bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                        } else {
                          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
                          bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
                          bookingModalS5DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                        }
                        

                        // convert the time back to army time
                        if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                          selectedFinalTime = '12:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                          selectedFinalTime = '12:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                          selectedFinalTime = '13:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                          selectedFinalTime = '13:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                          selectedFinalTime = '14:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                          selectedFinalTime = '14:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                          selectedFinalTime = '15:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                          selectedFinalTime = '15:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                          selectedFinalTime = '16:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                          selectedFinalTime = '16:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                          selectedFinalTime = '17:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                          selectedFinalTime = '17:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                          selectedFinalTime = '18:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                          selectedFinalTime = '18:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                          selectedFinalTime = '19:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                          selectedFinalTime = '19:30'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                          selectedFinalTime = '20:00'
                        } else if (bookingModalS5BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                          selectedFinalTime = '20:30'
                        }

                        // push the time and date to the booking object
                        service5BookingObj.start_at = `${selectedTimesNextMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                        console.log(service5BookingObj)

                      })
                    }


                  } 
                
                })

              }

            }

          })
        }
      }
        service5Availabilities()
          .then(() => { console.log('the service5Availabilities() has been sent to the express server') })
          .catch((error) => { console.log(error) }) 
    }
  }

  confirmDetails() {
    // edit "confirm details"
    editbookingModalS5ConfirmDetails.addEventListener('click', () => {
      bookingModalS5Agents.className = 'booking-modal-s5-body-right hide-container'
      bookingModalS5Location.className = 'booking-modal-s5-right hide-container'
      bookingModalS5DateTime.className = 'booking-modal-s5-body-right hide-container'
      bookingModalS5ConfirmDetails.className = 'booking-modal-s5-body-right'
      
      bookingModalS5Step1.className = ''
      bookingModalS5Step2.className = ''
      bookingModalS5Step3.className = ''
      bookingModalS5Step4.className = 'step-selected'

      bookingModalS5Counter = 3

      // display users booking reciept info here

      // display current phone number
      bookingModalS5CurrentPhoneValue.textContent = `${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(0, 3)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(3, 6)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(6, 10)}`

      // display customer reciept 
        // selected "service"
      bookingModalS5SelectedService.textContent = `${bookingModalS5BodyLeftTitle.textContent}`

        // selected "agent"
      for (let i = 0; i < bookingModalS5BodyRightAgentsBox.children.length; i++) {
        if (bookingModalS5BodyRightAgentsBox.children[i].className === 'booking-modal-s5-agent-selected') {
          bookingModalS5SelectedAgent.textContent = bookingModalS5BodyRightAgentsBox.children[i].textContent
        }
      }
        // selected "location"
        console.log(bookingModalS5CustomerLocationsBox.children[0].style.backgroundColor) 
        const regex = /[\s\n]/g
      for (let i = 0; i < bookingModalS5CustomerLocationsBox.children.length; i++) {
        if (bookingModalS5CustomerLocationsBox.children[i].style.backgroundColor === 'rgb(240, 94, 124)') {
          console.log('Go')
          bookingModalS5SelectedLocation.textContent = bookingModalS5CustomerLocationsBox.children[i].textContent
        }
      }
      
        // selected "date and time"
      let bookingModalS5SelectedTime

      if (service5BookingObj.start_at.slice(11, 16) === '12:00') {
        bookingModalS5SelectedTime = '08:00 AM EST'
        service5BookingObj.appointment_time = '08:00 AM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '12:30') {
        bookingModalS5SelectedTime = '08:30 AM EST'
        service5BookingObj.appointment_time = '08:30 AM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '13:00') {
        bookingModalS5SelectedTime = '09:00 AM EST'
        service5BookingObj.appointment_time = '09:00 AM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '13:30') {
        bookingModalS5SelectedTime = '09:30 AM EST'
        service5BookingObj.appointment_time = '09:30 AM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '14:00') {
        bookingModalS5SelectedTime = '10:00 AM EST'
        service5BookingObj.appointment_time = '10:00 AM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '14:30') {
        bookingModalS5SelectedTime = '10:30 AM EST'
        service5BookingObj.appointment_time = '10:30 AM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '15:00') {
        bookingModalS5SelectedTime = '11:00 AM EST'
        service5BookingObj.appointment_time = '11:00 AM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '15:30') {
        bookingModalS5SelectedTime = '11:30 AM EST'
        service5BookingObj.appointment_time = '11:30 AM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '16:00') {
        bookingModalS5SelectedTime = '12:00 PM EST'
        service5BookingObj.appointment_time = '12:00 PM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '16:30') {
        bookingModalS5SelectedTime = '12:30 PM EST'
        service5BookingObj.appointment_time = '12:30 PM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '17:00') {
        bookingModalS5SelectedTime = '01:00 PM EST'
        service5BookingObj.appointment_time = '01:00 PM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '17:30') {
        bookingModalS5SelectedTime = '01:30 PM EST'
        service5BookingObj.appointment_time = '01:30 PM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '18:00') {
        bookingModalS5SelectedTime = '02:00 PM EST'
        service5BookingObj.appointment_time = '02:00 PM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '18:30') {
        bookingModalS5SelectedTime = '02:30 PM EST'
        service5BookingObj.appointment_time = '02:30 PM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '19:00') {
        bookingModalS5SelectedTime = '03:00 PM EST'
        service5BookingObj.appointment_time = '03:00 PM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '19:30') {
        bookingModalS5SelectedTime = '03:30 PM EST'
        service5BookingObj.appointment_time = '03:30 PM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '20:00') {
        bookingModalS5SelectedTime = '04:00 PM EST'
        service5BookingObj.appointment_time = '04:00 PM EST'
      } else if (service5BookingObj.start_at.slice(11, 16) === '20:30') {
        bookingModalS5SelectedTime = '04:30 PM EST'
        service5BookingObj.appointment_time = '04:30 PM EST'
      }   

    
      bookingModalS5SelectedDateTime.textContent = `${service5BookingObj.start_at.slice(5, 7)}/${service5BookingObj.start_at.slice(8, 10)}/${service5BookingObj.start_at.slice(0, 4)} @ ${bookingModalS5SelectedTime}`

      editbookingModalS5ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
      editbookingModalS5ConfirmDetails.className = 'bi bi-pencil-square right1rem'
    })

    // booking modal s2 change phone number checkbox
    bookingModalS5ChangeNumberCheckbox.addEventListener('click', () => {
      if (bookingModalS5ChangeNumberCheckbox.checked) {
        // display change number divs
        bookingModalS5ChangePhone.className = 'booking-modal-s5-change-phone'
        bookingModalS5ChangePhoneCaution.className = 'booking-modal-s5-change-phone-caution'

        // get users email from storage -- display on div
        // updateUserPhoneMongoDbObj.address.address_line_1 = JSON.parse(localStorage.getItem('currentUser')).address.address_line_1
        // updateUserPhoneMongoDbObj.address.administrative_district_level_1 = JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1
        // updateUserPhoneMongoDbObj.address.locality = JSON.parse(localStorage.getItem('currentUser')).address.locality
        // updateUserPhoneMongoDbObj.address.postal_code = JSON.parse(localStorage.getItem('currentUser')).address.postal_code
        updateService5PhoneBookingObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
        
        console.log(updateService5PhoneBookingObj)

      } else {
        // hide change number divs
        bookingModalS5ChangePhone.className = 'booking-modal-s5-change-phone hide-container'
        bookingModalS5ChangePhoneCaution.className = 'booking-modal-s5-change-phone-caution hide-container'
      }

      // change phone number submit btn clicked
      bookingModalS5ChangePhoneBtn.addEventListener('click', () => {
        // check that bookingModalS5NextBtn.className = 'booking-modal-s5-next' matches regex
        if (bookingModalS5ChangePhoneInput.value.match(myApp.phoneCheck1) || bookingModalS5ChangePhoneInput.value.match(myApp.phoneCheck2) || bookingModalS5ChangePhoneInput.value.match(myApp.phoneCheck3) || bookingModalS5ChangePhoneInput.value.match(myApp.phoneCheck4) || bookingModalS5ChangePhoneInput.value.match(myApp.phoneCheck5) || bookingModalS5ChangePhoneInput.value.match(myApp.phoneCheck6)) {
          updateService5PhoneBookingObj.phone_number = bookingModalS5ChangePhoneInput.value
          bookingModalS5ChangePhoneError.className = 'booking-modal-s5-change-phone-input-error hide-container'
          bookingModalS5ChangePhoneInput.className = 'input-valid-clear'

          // filter/clean the phone value
          let filteredCleanPhoneValue = bookingModalS5ChangePhoneInput.value.replace(myApp.filterPhone, '')     

          if (filteredCleanPhoneValue !== JSON.parse(localStorage.getItem('currentUser')).phone_number) {
            updateService5PhoneBookingObj.phone_number = filteredCleanPhoneValue
            service5BookingObj.phone_number = filteredCleanPhoneValue

            if (bookingModalS5ChangePhoneInput.className === 'input-valid-clear') {

              bookingModalS5ChangePhone.className = 'booking-modal-s5-change-phone hide-container'
              bookingModalS5ChangePhoneCaution.className = 'booking-modal-s5-change-phone-caution hide-container'
              bookingModalS5ChangePhoneLoading.className = 'booking-modal-s5-change-phone-loading'

              // if so update the new number in MongoDB
              async function updateMongoDBPhoneNumber() {
                // req & res
                const update_phone_number_mongodb_req = await fetch(`/updatePhoneNumberMongoDB/${JSON.stringify(updateService5PhoneBookingObj)}`, { method: 'post' })
                const update_phone_number_mongodb_res = await update_phone_number_mongodb_req.json()

                console.log(update_phone_number_mongodb_res)

                // change the current number to the new number (confirm details)
                bookingModalS5CurrentPhoneValue.textContent = `${filteredCleanPhoneValue.slice(0, 3)}-${filteredCleanPhoneValue.slice(3, 6)}-${filteredCleanPhoneValue.slice(6, 10)}`

                myApp.updatedStorageInfo.address.address_line_1 = JSON.parse(localStorage.getItem('currentUser')).address.address_line_1 
                myApp.updatedStorageInfo.address.administrative_district_level_1= JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1
                myApp.updatedStorageInfo.address.locality = JSON.parse(localStorage.getItem('currentUser')).address.locality
                myApp.updatedStorageInfo.address.postal_code = JSON.parse(localStorage.getItem('currentUser')).address.postal_code

                myApp.updatedStorageInfo.id = JSON.parse(localStorage.getItem('currentUser')).id
                myApp.updatedStorageInfo.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
                myApp.updatedStorageInfo.family_name = JSON.parse(localStorage.getItem('currentUser')).family_name
                myApp.updatedStorageInfo.given_name = JSON.parse(localStorage.getItem('currentUser')).given_name
                myApp.updatedStorageInfo.nickname = JSON.parse(localStorage.getItem('currentUser')).nickname
                myApp.updatedStorageInfo.birthday = JSON.parse(localStorage.getItem('currentUser')).birthday
                myApp.updatedStorageInfo.password1 = JSON.parse(localStorage.getItem('currentUser')).password1
                myApp.updatedStorageInfo.phone_number = filteredCleanPhoneValue

                for (let i = 0; i < 11; i++) {
                  myApp.updatedStorageInfo[`location${i}`].type_name = JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].type_name
                  myApp.updatedStorageInfo[`location${i}`].address_line_1 = JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].address_line_1
                  myApp.updatedStorageInfo[`location${i}`].administrative_district_level_1 = JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].administrative_district_level_1
                  myApp.updatedStorageInfo[`location${i}`].locality = JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].locality
                  myApp.updatedStorageInfo[`location${i}`].postal_code = JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].postal_code
                }


                localStorage.removeItem('currentUser')
                localStorage.setItem('currentUser', JSON.stringify(myApp.updatedStorageInfo))
              }
                updateMongoDBPhoneNumber()
                .then(() => { console.log('the updateMongoDBPhoneNumber() has been sent to the express server') })
                .catch((error) => { console.log(error) })

              // if so update the new number in Square
              // get all customers
              async function getAllUsersSquare() {
                // req & res
                const get_all_users_square_req = await fetch(`/getCompanyUsersSquare`, { method: 'get' })            
                const get_all_users_square_res = await get_all_users_square_req.json()

                console.log(get_all_users_square_res)

                for (let i = 0; i < get_all_users_square_res.customers.length; i++) {
                  console.log('peace')
                  if (get_all_users_square_res.customers[i].email_address === JSON.parse(localStorage.getItem('currentUser')).email_address) {
                    updateService5PhoneBookingObj.customer_id = get_all_users_square_res.customers[i].id
                    // service1BookingObj.customer_id = get_all_users_square_res.customers[i].id
                    console.log(updateService5PhoneBookingObj)
                  }
                }
                  // send new number to Square Api
                async function updateSquarePhoneNumber() {
                  // req & res
                  const update_phone_number_square_req = await fetch(`/updatePhoneSquare/${JSON.stringify(updateService5PhoneBookingObj)}`, { method: 'put' })
                  const update_phone_number_square_res = await update_phone_number_square_req.json()
    
                  console.log(update_phone_number_square_res)
    
                  // change the current number to the new number (confirm details)
                  bookingModalS5CurrentPhoneValue.textContent = `${filteredCleanPhoneValue.slice(0, 3)}-${filteredCleanPhoneValue.slice(3, 6)}-${filteredCleanPhoneValue.slice(6, 10)}`

                  myApp.updatedStorageInfo.address.address_line_1 = JSON.parse(localStorage.getItem('currentUser')).address.address_line_1 
                  myApp.updatedStorageInfo.address.administrative_district_level_1= JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1
                  myApp.updatedStorageInfo.address.locality = JSON.parse(localStorage.getItem('currentUser')).address.locality
                  myApp.updatedStorageInfo.address.postal_code = JSON.parse(localStorage.getItem('currentUser')).address.postal_code

                  myApp.updatedStorageInfo.id = JSON.parse(localStorage.getItem('currentUser')).id
                  myApp.updatedStorageInfo.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
                  myApp.updatedStorageInfo.family_name = JSON.parse(localStorage.getItem('currentUser')).family_name
                  myApp.updatedStorageInfo.given_name = JSON.parse(localStorage.getItem('currentUser')).given_name
                  myApp.updatedStorageInfo.nickname = JSON.parse(localStorage.getItem('currentUser')).nickname
                  myApp.updatedStorageInfo.birthday = JSON.parse(localStorage.getItem('currentUser')).birthday
                  myApp.updatedStorageInfo.password1 = JSON.parse(localStorage.getItem('currentUser')).password1
                  myApp.updatedStorageInfo.phone_number = filteredCleanPhoneValue

                  for (let i = 1; i < 11; i++) {
                    myApp.updatedStorageInfo[`location${i}`].type_name = JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].type_name
                    myApp.updatedStorageInfo[`location${i}`].address_line_1 = JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].address_line_1
                    myApp.updatedStorageInfo[`location${i}`].administrative_district_level_1 = JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].administrative_district_level_1
                    myApp.updatedStorageInfo[`location${i}`].locality = JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].locality
                    myApp.updatedStorageInfo[`location${i}`].postal_code = JSON.parse(localStorage.getItem('currentUser'))[`location${i}`].postal_code
                  }


                  localStorage.removeItem('currentUser')
                  localStorage.setItem('currentUser', JSON.stringify(myApp.updatedStorageInfo))

                  setTimeout(() => {
                    bookingModalS5ChangePhoneLoading.className = 'booking-modal-s5-change-phone-loading hide-container'
                    bookingModalS5ChangePhoneSuccess.className = 'booking-modal-s5-change-phone-success'

                    setTimeout(() => {
                      bookingModalS5ChangePhoneSuccess.className = 'booking-modal-s5-change-phone-success hide-container'
                      bookingModalS5ChangePhone.className = 'booking-modal-s5-change-phone hide-container'
                      bookingModalS5ChangePhoneCaution.className = 'booking-modal-s5-change-phone-caution hide-container'
    
                      bookingModalS5ChangeNumberCheckbox.checked = false
                    }, 4000)

                  }, 2000)
                  
                  
                }
                  updateSquarePhoneNumber()
                  .then(() => { console.log('the updateSquarePhoneNumber() has been sent to the express server') })
                  .catch((error) => console.log(error))
              }
                getAllUsersSquare()
                .then(() => { console.log('the getAllUsersSquare() has been sent to the express server') })
                .catch((error) => console.log(error))
              

              // uncheck the checkbox and hide change number divs
              // !bookingModalS5CurrentPhone.checked
            }
          } else {
            // show the error div
            bookingModalS5ChangePhoneError.className = 'booking-modal-s5-change-phone-input-error'

            bookingModalS5ChangePhoneError.innerHTML = `<h1>This number already exists</h1>`
            // "this phone number already exists"
          }
          

        } else {
          // show the phone error divs
          bookingModalS5ChangePhoneError.className = 'booking-modal-s5-change-phone-input-error'
          bookingModalS5ChangePhoneError.innerHTML = `<h1>This number is invalid</h1>`
          bookingModalS5ChangePhoneInput.className = 'booking-modal-s5-change-phone-input-error input-invalid'
        }
      })
    })

    // booking modal s5 quarterly payment
    bookingModalS5QuarterlyPayment.addEventListener('click', () => {
      bookingModalS5AnnualPayment.style.backgroundColor = ''
      bookingModalS5AnnualPayment.style.color = 'black'
      bookingModalS5AnnualPayment.style.transitionDuration = '0.5s'
      bookingModalS5QuarterlyPayment.style.backgroundColor = myApp.companyPrimaryColor
      bookingModalS5QuarterlyPayment.style.color = 'white'
      bookingModalS5QuarterlyPayment.style.transitionDuration = '0.5s'
      service5BookingObj.service_price = `$${myApp.service5Price2Quart / 100}.00`
      bookingModalS5SelectedPrice.textContent = service5BookingObj.service_price
      localStorage.setItem('service5Price', myApp.service5Price2Quart)
      bookingModalS5PayBtnPrice.textContent = `Pay ${service5BookingObj.service_price}`

      if (bookingModalS5InfoCorrectCheckbox.checked) {
        bookingModalS5InfoCorrectCheckbox.click()
        bookingModalS5InfoCorrectCheckbox.click()
      }

    })

    // booking modal s5 annual payment
    bookingModalS5AnnualPayment.addEventListener('click', () => {
      bookingModalS5QuarterlyPayment.style.backgroundColor = ''
      bookingModalS5QuarterlyPayment.style.color = 'black'
      bookingModalS5QuarterlyPayment.style.transitionDuration = '0.5s'
      bookingModalS5AnnualPayment.style.backgroundColor = myApp.companyPrimaryColor
      bookingModalS5AnnualPayment.style.color = 'white'
      bookingModalS5AnnualPayment.style.transitionDuration = '0.5s'
      service5BookingObj.service_price = `$${myApp.service5Price2Ann / 100}.00`
      bookingModalS5SelectedPrice.textContent = service5BookingObj.service_price
      localStorage.setItem('service5Price', myApp.service5Price2Ann)
      bookingModalS5PayBtnPrice.textContent = `Pay ${service5BookingObj.service_price}`

      if (bookingModalS5InfoCorrectCheckbox.checked) {
        bookingModalS5InfoCorrectCheckbox.click()
        bookingModalS5InfoCorrectCheckbox.click()
      }
    })
  }

  bookingModalNextBtn() {
    // next btn clicked
    bookingModalS5NextBtn.addEventListener('click', () => {
      bookingModalS5Counter++

      // counter on "Select an Agent"
      if (bookingModalS5Counter === 1 && bookingModalS5AgentsSelected) {
        bookingModalS5Agents.className = 'booking-modal-s5-right hide-container'
        bookingModalS5Location.className = 'booking-modal-s5-right'
        bookingModalS5DateTime.className = 'booking-modal-s5-right hide-container'
        bookingModalS5ConfirmDetails.className = 'booking-modal-s5-right hide-container'

        bookingModalS5Step1.className = ''
        bookingModalS5Step2.className = 'step-selected'
        bookingModalS5Step3.className = ''
        bookingModalS5Step4.className = ''

        this.enterLocation()

        // if "location" has been selected keep the footer next btn activated
        if (bookingModalS5LocationSelected) {
          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
        } else {
          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
          bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
        }

        // activate the "edit" locations icon
        editbookingModalS5LocationNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS5Location.className = 'bi bi-pencil-square right1rem'

      } else if (bookingModalS5Counter === 1 && !bookingModalS5AgentsSelected) {
        console.log('Please select an agent.')
        bookingModalS5Counter = 0
      }

      // counter on "Select a Location"
      if (bookingModalS5Counter === 2 && bookingModalS5LocationSelected) {
        bookingModalS5Agents.className = 'booking-modal-s5-right hide-container'
        bookingModalS5Location.className = 'booking-modal-s5-right hide-container'
        bookingModalS5DateTime.className = 'booking-modal-s5-right'
        bookingModalS5ConfirmDetails.className = 'booking-modal-s5-right hide-container'

        bookingModalS5Step1.className = ''
        bookingModalS5Step2.className = ''
        bookingModalS5Step3.className = 'step-selected'
        bookingModalS5Step4.className = ''

        this.selectDateTime()

        // if "date" & "time" has been selected already fill the footer next btn
        if (bookingModalS5DateSelected && bookingModalS5TimeSelected) {
          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null hide-container'
          bookingModalS5NextBtn.className = 'booking-modal-s5-next'
        } else {
          bookingModalS5NextNullBtn.className = 'booking-modal-s5-next-null'
          bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'
        }

        editbookingModalS5DateTimeNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS5DateTime.className = 'bi bi-pencil-square right1rem'
      } else if (bookingModalS5Counter === 2 && !bookingModalS5LocationSelected) {
        console.log('Please select a location')
        bookingModalS5Counter = 1
      }

      // counter on "Select Date & Time"
      if (bookingModalS5Counter === 3 && bookingModalS5DateSelected && bookingModalS5TimeSelected) {
        bookingModalS5Agents.className = 'booking-modal-s5-right hide-container'
        bookingModalS5Location.className = 'booking-modal-s5-right hide-container'
        bookingModalS5DateTime.className = 'booking-modal-s5-right hide-container'
        bookingModalS5ConfirmDetails.className = 'booking-modal-s5-right'

        bookingModalS5Step1.className = ''
        bookingModalS5Step2.className = ''
        bookingModalS5Step3.className = ''
        bookingModalS5Step4.className = 'step-selected'

        this.confirmDetails()

        editbookingModalS5ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS5ConfirmDetails.className = 'bi bi-pencil-square right1rem'

        bookingModalS5NextBtn.className = 'booking-modal-s5-next hide-container'

        // display current phone number
        bookingModalS5CurrentPhoneValue.textContent = `${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(0, 3)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(3, 6)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(6, 10)}`

        // display customer reciept 
          // selected "service"
        bookingModalS5SelectedService.textContent = `${bookingModalS5BodyLeftTitle.textContent}`

          // selected "agent"
        for (let i = 0; i < bookingModalS5BodyRightAgentsBox.children.length; i++) {
          if (bookingModalS5BodyRightAgentsBox.children[i].className === 'booking-modal-s5-agent-selected') {
            bookingModalS5SelectedAgent.textContent = bookingModalS5BodyRightAgentsBox.children[i].textContent
          }
        }
          // selected "location"
          console.log(bookingModalS5CustomerLocationsBox.children[0].style.backgroundColor) 
          const regex = /[\s\n]/g
        for (let i = 0; i < bookingModalS5CustomerLocationsBox.children.length; i++) {
          if (bookingModalS5CustomerLocationsBox.children[i].style.backgroundColor === 'rgb(240, 94, 124)') {
            console.log('Go')
            bookingModalS5SelectedLocation.textContent = bookingModalS5CustomerLocationsBox.children[i].textContent
          }
        }
        
          // selected "date and time"
        let bookingModalS5SelectedTime

        if (service5BookingObj.start_at.slice(11, 16) === '12:00') {
          bookingModalS5SelectedTime = '08:00 AM EST'
          service5BookingObj.appointment_time = '08:00 AM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '12:30') {
          bookingModalS5SelectedTime = '08:30 AM EST'
          service5BookingObj.appointment_time = '08:30 AM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '13:00') {
          bookingModalS5SelectedTime = '09:00 AM EST'
          service5BookingObj.appointment_time = '09:00 AM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '13:30') {
          bookingModalS5SelectedTime = '09:30 AM EST'
          service5BookingObj.appointment_time = '09:30 AM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '14:00') {
          bookingModalS5SelectedTime = '10:00 AM EST'
          service5BookingObj.appointment_time = '10:00 AM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '14:30') {
          bookingModalS5SelectedTime = '10:30 AM EST'
          service5BookingObj.appointment_time = '10:30 AM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '15:00') {
          bookingModalS5SelectedTime = '11:00 AM EST'
          service5BookingObj.appointment_time = '11:00 AM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '15:30') {
          bookingModalS5SelectedTime = '11:30 AM EST'
          service5BookingObj.appointment_time = '11:30 AM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '16:00') {
          bookingModalS5SelectedTime = '12:00 PM EST'
          service5BookingObj.appointment_time = '12:00 PM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '16:30') {
          bookingModalS5SelectedTime = '12:30 PM EST'
          service5BookingObj.appointment_time = '12:30 PM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '17:00') {
          bookingModalS5SelectedTime = '01:00 PM EST'
          service5BookingObj.appointment_time = '01:00 PM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '17:30') {
          bookingModalS5SelectedTime = '01:30 PM EST'
          service5BookingObj.appointment_time = '01:30 PM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '18:00') {
          bookingModalS5SelectedTime = '02:00 PM EST'
          service5BookingObj.appointment_time = '02:00 PM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '18:30') {
          bookingModalS5SelectedTime = '02:30 PM EST'
          service5BookingObj.appointment_time = '02:30 PM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '19:00') {
          bookingModalS5SelectedTime = '03:00 PM EST'
          service5BookingObj.appointment_time = '03:00 PM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '19:30') {
          bookingModalS5SelectedTime = '03:30 PM EST'
          service5BookingObj.appointment_time = '03:30 PM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '20:00') {
          bookingModalS5SelectedTime = '04:00 PM EST'
          service5BookingObj.appointment_time = '04:00 PM EST'
        } else if (service5BookingObj.start_at.slice(11, 16) === '20:30') {
          bookingModalS5SelectedTime = '04:30 PM EST'
          service5BookingObj.appointment_time = '04:30 PM EST'
        }  

        bookingModalS5SelectedDateTime.textContent = `${service5BookingObj.start_at.slice(5, 7)}/${service5BookingObj.start_at.slice(8, 10)}/${service5BookingObj.start_at.slice(0, 4)} @ ${bookingModalS5SelectedTime}`
        customerConciergeApptsArr[0] = service5BookingObj.start_at

        // price done in confirmDetails()

        editbookingModalS5ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS5ConfirmDetails.className = 'bi bi-pencil-square right1rem'

      } else if (bookingModalS5Counter === 3 && !bookingModalS5DateSelected || bookingModalS5Counter === 3 && !bookingModalS5TimeSelected) {
        console.log('Please select both a date and time.')
        bookingModalS5Counter = 2
      }

    })
  }

  createBooking() {
    // if reciept checkbox clicked show payment div
    bookingModalS5InfoCorrectCheckbox.addEventListener('click', () => {
      if (bookingModalS5InfoCorrectCheckbox.checked && bookingModalS5SelectedPrice.textContent !== '') {
        bookingModalS5PaymentsContainer.className = 'booking-modal-s5-payments-container'
        const bookingModalS5PayBtn = document.getElementById('booking-modal-s5-card-button')

        bookingModalS5PayBtn.addEventListener('click', () => {
          // make sure receipt checkbox is selected

          if (bookingModalS5BillingAddress.className === 'input-valid-clear' && bookingModalS5BillingState.className === 'input-valid-clear' && bookingModalS5BillingCity.className === 'input-valid-clear' && bookingModalS5BillingZipCode.className === 'input-valid-clear' && bookingModalS5Cardholder.className === 'input-valid-clear') {
            console.log('All fields are entered')
            let paymentStatus = document.getElementById('booking-modal-s5-payment-status-container')
            paymentStatus.className = ''
    
            // hide payment form
            // bookingModalS5PaymentForm.className = 'hide-container'
  
            // show lodaing payment
            bookingModalS5LoadingPayment.className = 'booking-modal-s5-loading-payment'                       
            
            setTimeout(() => {
              const paymentVaild = setInterval(() => {
                console.log(paymentStatus)
                if (paymentStatus.className === 'is-failure' || JSON.parse(localStorage.getItem('subscription-response')) === false) {
                  clearInterval(paymentVaild)

                  // hide loading payment box
                  bookingModalS5LoadingPayment.className = 'booking-modal-s5-loading-payment hide-container'
                  // show payment form
                  bookingModalS5PaymentForm.className = ''
                  bookingModalS5AddressError.className = 'bm-5-error-address'
                  bookingModalS5CardholderError.className = 'bm-5-error-cardholdername'
                }
                  
                if (localStorage.getItem('payment-response') || JSON.parse(localStorage.getItem('subscription-response')).status === 'ACTIVE') {
                  clearInterval(paymentVaild)

                  // hide loading payment box
                  bookingModalS5LoadingPayment.className = 'booking-modal-s5-loading-payment hide-container'
                  // show payment form
                  bookingModalS5PaymentForm.className = ''
                  // give margin to payment success div
                  bookingModalS5LoadingPayment.style.marginBottom = '2rem'
                  bookingModalS5Policy1.style.marginTop = '2rem'

                  console.log(service5BookingObj)

                  // hide confirm details div
                  bookingModalS5ConfirmDetailsContainer.className = 'booking-modal-s5-body-right-confirm-details-container hide-container'
                  // show loading booking container
                  bookingModalS5Loading.className = 'booking-modal-s5-confirm-details-loading'
                  // do the following...

                  // add/update subscription id in MongoDB
                  async function addSubscriptionId() {
                    // req && res
                    let newSubId = {
                      email_address: JSON.parse(localStorage.getItem('currentUser')).email_address,
                      subscription_id: JSON.parse(localStorage.getItem('subscription-response')).id
                    }
                    const add_sub_id_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(newSubId)}`, { method: 'PUT' })
                    const add_sub_id_res = await add_sub_id_req.json()
                    console.log(add_sub_id_res)
                  }
                    addSubscriptionId()
                      .then(() => { console.log('addSubscriptionId() has been sent to the server') })
                      .catch((error) => { console.log(error) })

                  // create the bookings --> Square Api
                  let customerBookingTimesArr = []
                  let customerBookingIdsArr = []

                  let updateCustomerBookingObj = {
                    email_address: JSON.parse(localStorage.getItem('currentUser')).email_address,
                    concierge_bookings: {}
                  }

                  customerBookingTimesArr[0] = `${service5BookingObj.start_at.slice(0, 4)}-${service5BookingObj.start_at.slice(5, 7)}-${service5BookingObj.start_at.slice(8, 20)}`

                  service5BookingObj.start_at = customerBookingTimesArr[0]

                  createBookingReq(service5BookingObj, 1)
                    .then(() => { 
                      console.log('createBookingReq() has been sent to the server')})
                    .catch((error) => { console.log(error)} )
                  

                  // push other three times into an array
                  for (let i = 1; i < 4; i++) {

                    customerBookingTimesArr.push(`${service5BookingObj.start_at.slice(0, 4)}-${Number(service5BookingObj.start_at.slice(5, 7)) + (i * 4)}-${service5BookingObj.start_at.slice(8, 20)}`)
                    
                    if (customerBookingTimesArr[i].slice(5, 7).includes('-')) {
                      customerBookingTimesArr[i] = (`${service5BookingObj.start_at.slice(0, 4)}-0${Number(service5BookingObj.start_at.slice(5, 7)) + (i * 4)}-${service5BookingObj.start_at.slice(8, 20)}`)
                    }

                    if (i == 3) {
                      for (let j = 1; j < customerBookingTimesArr.length; j++) {
                        let newBookingDate = new Date(customerBookingTimesArr[j].slice(0, 4), Number(customerBookingTimesArr[j].slice(5, 7) - 1), customerBookingTimesArr[j].slice(8, 10)).toISOString()

                        if (newBookingDate.slice(5, 7).includes('-')) {
                          customerBookingTimesArr[j] = `${newBookingDate.slice(0, 4)}-0${newBookingDate.slice(5, 7)}-${newBookingDate.slice(8, 10)}${service5BookingObj.start_at.slice(8, 20)}`
                          service5BookingObj.start_at = customerBookingTimesArr[j]
                          createBookingReq(service5BookingObj, i + 1)
                            .then(() => { console.log('createBookingReq() has been sent to the server')})
                            .catch((error) => { console.log(error)} )
                        } else {
                          customerBookingTimesArr[j] = `${newBookingDate.slice(0, 4)}-${newBookingDate.slice(5, 7)}-${newBookingDate.slice(8, 10)}${service5BookingObj.start_at.slice(10, 20)}`
                          service5BookingObj.start_at = customerBookingTimesArr[j]
                          createBookingReq(service5BookingObj, i + 1)
                            .then(() => { console.log('createBookingReq() has been sent to the server')})
                            .catch((error) => { console.log(error)} )
                        }

                        if (j === customerBookingTimesArr.length - 1) {
                          setTimeout(() => { 
                            console.log(customerBookingIdsArr)
                            for (let i = 0; i < 4; i ++) {
                              updateCustomerBookingObj.concierge_bookings[`booking_time${i + 1}`] = customerBookingTimesArr[i]
                              updateCustomerBookingObj.concierge_bookings[`booking_id${i + 1}`] = customerBookingIdsArr[i]
          
                              console.log(updateCustomerBookingObj)
                            }

                            updateConciergeBookingsMdb(updateCustomerBookingObj)
                                .then(() => { 
                                  getCustomerData()
                                    .then(() => { console.log('getCustomerData() has been sent to the server') })
                                    .catch((error) => { console.log(error) })
                                  console.log('updateConciergeBookingMdb() has been sent to the server') })
                                .catch((error) => { console.log(error) })
                          }, 4000)
                          
                        }
                      }

                      console.log(customerBookingTimesArr)
                    }

                    

                    // if (i === 3) {
                    //   // create all four bookings
                    //   for (let i = 0; i < customerBookingTimesArr.length; i++) {
                    //     service5BookingObj.start_at = customerBookingTimesArr[0]
                    //     createBookingReq(service5BookingObj, i + 1)
                    //   }
                    // }
                  }



                    



                  // create booking function
                  async function createBookingReq(object, number) {
                    // req & res
                    const create_booking_req = await fetch(`/createBooking/${JSON.stringify(object)}`, { method: 'post' })
                    const create_booking_res = await create_booking_req.json()
                    console.log(create_booking_res.booking.id)

                    customerBookingIdsArr.push(create_booking_res.booking.id)
                  }

                  // update "concierge_bookings" -- mongodb
                  async function updateConciergeBookingsMdb(object) {
                    // req && res
                    const update_concierge_bookings_mdb_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(object)}`, { method: 'put' })
                    const update_concierge_bookings_mdb_res = await update_concierge_bookings_mdb_req.json()
                    console.log(update_concierge_bookings_mdb_res)
                  }

                  // get updated customer data from mongodb
                  async function getCustomerData() {
                    // req && res
                    const get_customer_data_req = await fetch(`/checkUserMongoDB/${localStorage.getItem('currentUser')}`, { method: 'get' })
                    const get_customer_data_res = await get_customer_data_req.json()
                    console.log(get_customer_data_res)

                    localStorage.removeItem('currentUser')
                    localStorage.setItem('currentUser', JSON.stringify(get_customer_data_res))

                    textBooking(service5BookingObj)
                      .then(() => { console.log('textBooking() has been sent to the server') })
                      .catch((error) => { console.log(error) })
                    emailBooking(service5BookingObj)
                      .then(() => { console.log('emailBooking() has been sent to the server') })
                      .catch((error) => { console.log(error) })
                  }

                  // email booking function
                  async function emailBooking(object) {
                    // req & res
                    const send_email_booking_req = await fetch(`/emailBooking/${JSON.stringify(object)}`)
                    const send_email_booking_res = await send_email_booking_req.json()
                    console.log(send_email_booking_res)
                  }

                  // text booking function
                  async function textBooking(object) {
                    // req & res
                    const send_text_booking_req = await fetch(`/textBooking/${JSON.stringify(object)}`, { method: 'POST' })
                    const send_text_booking_res = await send_text_booking_req.json()
                    console.log(send_text_booking_res)

                    if (send_text_booking_res) {
                      // when done show the booking complete div
                      bookingModalS5Loading.className = 'booking-modal-s5-confirm-details-loading hide-container'
                      bookingModalS5LoadingSuccess.className = 'booking-modal-s5-confirm-details-success'
                      console.log('this is the service5BookingObj duration_minutes', service5BookingObj)
                      if (service5BookingObj.duration_minutes / 60 < 1) {
                        bookingModalS5LoadingSuccess.innerHTML = 
                        `
                        <div class="booking-modal-s5-loading-success"></div>
                        <h1>Thank you for booking with us!</h1>
                        <p>Please check your email and phone for your booking details.</p>
                        <p>Talk to you soon!</p>
                        <p>&#128515;</p>
                        `
                        // refresh the page
                        setTimeout(() => {
                          // myApp.bookingModalS5.className = 'booking-modal-s5 hide-container'
                          location.reload()
                        }, 8000)
                      } else if (service5BookingObj.duration_minutes / 60 === 1) {
                        bookingModalS5LoadingSuccess.innerHTML =
                        `
                        <div class="booking-modal-s5-loading-success"></div>
                        <h1>Thank you for booking with us!</h1>
                        <p>Please check your email and phone for your booking details.</p>
                        <p>See you soon!</p>
                        <p>&#128515;</p>
                        `

                        // refresh the page
                        setTimeout(() => {
                          // myApp.bookingModalS5.className = 'booking-modal-s5 hide-container'
                          location.reload()
                        }, 8000)
                      } else if (service5BookingObj.duration_minutes / 60 > 1) {
                        bookingModalS5LoadingSuccess.innerHTML =
                        `
                        <div class="booking-modal-s5-loading-success"></div>
                        <h1>Thank you for booking with us!</h1>
                        <p>Please check your email and phone for your booking details.</p>
                        <p>See you soon!</p>
                        <p>&#128515;</p>
                        `

                        // refresh the page
                        setTimeout(() => {
                          // myApp.sbookingModalS5.className = 'booking-modal-s5 hide-container'
                          location.reload()
                        }, 8000)
                      }
                    }
                  }

                    
                } 
                  
                // if (JSON.parse(localStorage.getItem('payment-response')).payment.status === 'FAILED') {
                //   // hide loading payment box
                //   bookingModalS5LoadingPayment.className = 'booking-modal-s5-loading-payment hide-container'
                //   // show payment form
                //   bookingModalS5PaymentForm.className = ''
                //   // input-invalid all payment fields & show error message 
                //   clearInterval(paymentVaild)
                // }
              }, 500)
            },2000)


          }  
        })
      } else {
        bookingModalS5PaymentsContainer.className = 'booking-modal-s5-payments-container hide-container'
      }
    })
  }

  closeModal() {
    bookingModalS5Close.addEventListener('click', () => {
      console.log('ive been clicked on')
      bookingModalS5.className = 'booking-modal-s5 hide-container'
    })
  
    document.addEventListener('click', (event) => { 
      if (event.target === bookingModalS5) {
        bookingModalS5.className = 'booking-modal-s5 hide-container'
      }
    })
  }


}

const service5Component = new Service5Component()

module.exports = { service5Component }
