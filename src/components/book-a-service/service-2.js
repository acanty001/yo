const myApp = require('../../index.js')

let bookingModalS2Date = new Date()

const bookingModalS2NextBtnCal = document.querySelector('.booking-modal-s2-next-cal')
const bookingModalS2PrevBtnCal = document.querySelector('.booking-modal-s2-prev-cal')

let bookingModalS2NextBtnCalCounter = 0

const bookingModalS2RenderCalendar = () => {
  bookingModalS2Date.setDate(1)

  const monthDays = document.querySelector(".booking-modal-s2-days")
  monthDays.innerHTML = ``

  const lastDay = new Date(
    bookingModalS2Date.getFullYear(),
    bookingModalS2Date.getMonth() + 1,
    0
  ).getDate()

  const prevLastDay = new Date(
    bookingModalS2Date.getFullYear(),
    bookingModalS2Date.getMonth(),
    0
  ).getDate()

  const firstDayIndex = bookingModalS2Date.getDay();

  const lastDayIndex = new Date(
    bookingModalS2Date.getFullYear(),
    bookingModalS2Date.getMonth() + 1,
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

  document.querySelector(".booking-modal-s2-date h1").innerHTML = months[bookingModalS2Date.getMonth()]

  document.querySelector(".booking-modal-s2-date p").innerHTML = new Date().toDateString()

  let days = ""

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      bookingModalS2Date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="booking-modal-s2-today">${i}</div>`
    } else {
      days += `<div class='booking-modal-s2-cal-days'>${i}</div>`
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days
  }
}

bookingModalS2RenderCalendar()

const bookingModalS2 = document.getElementById('booking-modal-s2')
const bookingModalS2Close = document.getElementById('booking-modal-s2-close')
const bookingModalS2BodyLeft = document.getElementById('booking-modal-s2-body-left')
const bookingModalS2BodyLeftTitle = document.getElementById('booking-modal-s2-body-left-title')

const bookingModalS2Step1 = document.getElementById('booking-modal-s2-step1')
const editBookingModalS2Agents = document.getElementById('edit-bm-s2-agents')
const bookingModalS2Agents = document.getElementById('booking-modal-s2-agents')
let bookingModalS2BodyRightAgentsBox = document.getElementById('booking-modal-s2-agents-box')
const bookingModalS2AgentsPickedIcon = document.getElementById('bm-s2-agents-picked-icon')
let bookingModalS2AgentsSelected = false

const bookingModalS2Step2 = document.getElementById('booking-modal-s2-step2')
const editBookingModalS2LocationNull = document.getElementById('edit-bm-2-location-null')
const editBookingModalS2Location = document.getElementById('edit-bm-2-location')
const bookingModalS2LocationPickedIcon = document.getElementById('bm-2-location-picked-icon')
let bookingModalS2LocationSelected = false

const bookingModalS2Step3 = document.getElementById('booking-modal-s2-step3')
const editBookingModalS2DateTimeNull = document.getElementById('edit-bm-s2-datetime-null')
const editBookingModalS2DateTime = document.getElementById('edit-bm-s2-datetime')
const bookingModalS2DateTimePickedIcon = document.getElementById('bm-datetime-picked-icon')
let bookingModalS2DateSelected = false
let bookingModalS2TimeSelected = false
let bookingModalS2DateTimeSelected

const bookingModalS2Step4 = document.getElementById('booking-modal-s2-step4')
const editBookingModalS2ConfirmDetailsNull = document.getElementById('edit-bm-confirm-details-null')
const editBookingModalS2ConfirmDetails = document.getElementById('edit-bm-confirm-details')
const bookingModalS2ConfirmDetailsPickedIcon = document.getElementById('bm-confirm-details-picked-icon')
let bookingModalS2ConfirmDetailsSelected = false


// const bookingModalS2BodyRightAgents = document.getElementById('booking-modal-s2-body-right-agents')


const bookingModalS2Location = document.getElementById('booking-modal-s2-location')
// const bookingModalS2BodyRightLocations = document.getElementById('booking-modal-s2-body-right-location')
const bookingModalS2NewLocationCheckbox = document.getElementById('booking-modal-s2-new-location-checkbox')
let bookingModalS2NewLocationCheckboxCounter = 0
const bookingModalS2CustomerLocationsBox = document.getElementById('booking-modal-s2-customer-locations-box')
let bookingModalS2NewCustomerLocationBox = document.getElementById('booking-modal-s2-new-location-box')
const bookingModalS2NewCustomerLocationInputTypeError = document.getElementById('booking-modal-s2-new-location-box-input-type-error')
const bookingModalS2NewCustomerLocationInputType = document.getElementById('booking-modal-s2-new-location-box-input-type')
const bookingModalS2NewCustomerLocationInputAddressError = document.getElementById('booking-modal-s2-new-location-box-input-address-error')
const bookingModalS2NewCustomerLocationInputAddress = document.getElementById('booking-modal-s2-new-location-box-input-address')
const bookingModalS2NewCustomerLocationInputStateError = document.getElementById('booking-modal-s2-new-location-box-input-state-error')
const bookingModalS2NewCustomerLocationInputState = document.getElementById('booking-modal-s2-new-location-box-input-state')
const bookingModalS2NewCustomerLocationInputCityError = document.getElementById('booking-modal-s2-new-location-box-input-city-error')
const bookingModalS2NewCustomerLocationInputCity = document.getElementById('booking-modal-s2-new-location-box-input-city')
const bookingModalS2NewCustomerLocationInputZipCodeError = document.getElementById('booking-modal-s2-new-location-box-input-zipcode-error')
const bookingModalS2NewCustomerLocationInputZipCode = document.getElementById('booking-modal-s2-new-location-box-input-zipcode')
const bookingModalS2NewCustomerLocationSubmitBtn = document.getElementById('booking-modal-s2-new-location-submit-btn')
let bookingModalS2NewCustomerLocationObj = {
email_address: ''
}

const bookingModalS2DateTime = document.getElementById('booking-modal-s2-datetime')
// const bookingModalS2BodyRightDateTime = document.getElementById('booking-modal-s2-body-right-datetime')
let bookingModalS2BodyRightDateTimeBox = document.getElementById('booking-modal-s2-datetime-box')
const bookingModalS2BodyRightCurrentTimeTitle = document.getElementById('booking-modal-s2-current-time-title')
let bookingModalS2CalToday = document.querySelector('.booking-modal-s2-today')
let bookingModalS2CalDays = document.querySelectorAll('.booking-modal-s2-cal-days')

const bookingModalS2ConfirmDetails = document.getElementById('booking-modal-s2-confirm-details')
const bookingModalS2ConfirmDetailsTitle = document.getElementById('booking-modal-s2-confirm-details-title')
const bookingModalS2ConfirmDetailsContainer = document.getElementById('booking-modal-s2-body-right-confirm-details-container')
const bookingModalS2ChangeNumberCheckbox = document.getElementById('booking-modal-s2-change-number-checkbox')
const bookingModalS2CurrentPhoneContainer = document.getElementById('booking-modal-s2-current-phone-container')
const bookingModalS2CurrentPhoneValue = document.getElementById('booking-modal-s2-current-phone-value')
const bookingModalS2ChangePhone = document.getElementById('booking-modal-s2-change-phone')
const bookingModalS2ChangePhoneError = document.getElementById('booking-modal-s2-change-phone-error')
const bookingModalS2ChangePhoneInput = document.getElementById('booking-modal-s2-change-phone-input')
const bookingModalS2ChangePhoneBtn = document.getElementById('booking-modal-s2-change-phone-input-btn')
const bookingModalS2ChangePhoneCaution = document.getElementById('booking-modal-s2-change-phone-caution')
const bookingModalS2ChangePhoneLoading = document.getElementById('booking-modal-s2-change-phone-loading')
const bookingModalS2ChangePhoneSuccess = document.getElementById('booking-modal-s2-change-phone-success')
const bookingModalS2InfoCorrectCheckbox = document.getElementById('booking-modal-s2-info-correct-checkbox')
const bookingModalS2InfoCorrectRequireIcon = document.getElementById('booking-modal-s2-info-correct-require-icon')
const bookingModalS2SelectedService = document.getElementById('booking-modal-s2-selected-service')
const bookingModalS2SelectedAgent = document.getElementById('booking-modal-s2-selected-agent')
const bookingModalS2SelectedLocation = document.getElementById('booking-modal-s2-selected-location')
const bookingModalS2SelectedDateTime = document.getElementById('booking-modal-s2-selected-datetime')
const bookingModalS2SelectedPrice = document.getElementById('booking-modal-s2-selected-price')
const bookingModalS2CardBtnPrice = document.getElementById('booking-modal-s2-card-button')

const bookingModalS2PaymentsContainer = document.getElementById('booking-modal-s2-payments-container')
const bookingModalS2PaymentForm = document.getElementById('booking-modal-s2-payment-form')
const bookingModalS2LoadingPayment = document.getElementById('booking-modal-s2-loading-payment')
// const bookingModalS2BookingLoading = document.getElementById('booking-modal-s2-confirm-details-loading')
// const bookingModalS2BookingSuccess = document.getElementById('booking-modal-s2-confirm-details-success')
// const bookingModalS2PaymentStatus = document.getElementById('booking-modal-s2-payment-status-container')
const bookingModalS2Policy1 = document.getElementById('booking-modal-s2-policy1')

const bookingModalS2Loading = document.getElementById('booking-modal-s2-confirm-details-loading')
const bookingModalS2LoadingSuccess = document.getElementById('booking-modal-s2-confirm-details-success') 

const bookingModalS2BackBtn = document.getElementById('booking-modal-s2-back')
const bookingModalS2NextNullBtn = document.getElementById('booking-modal-s2-next-null') 
const bookingModalS2NextBtn = document.getElementById('booking-modal-s2-next')

const bookingModalS2Footer = document.getElementById('booking-modal-s2-footer')

let bookingModalS2Counter = 0

let service2NewLocationObj = {
name: '',
address_line_1: '',
administrative_district_level_1: '',
locality: '',
postal_code: ''
}

const service2AvailabilityObj = {
start_at: '',
end_at: '',
location_id: '',
service_variation_id: ''
}

let updateService2PhoneBookingObj = {
  customer_id: '',
  email_address: '',
  phone_number: ''
}

let service2BookingObj = {
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


class Service2Component {
  constructor() {
    
    this.bookingModalNextBtn = this.bookingModalNextBtn()
    this.createBooking = this.createBooking()
    this.closeModal = this.closeModal()
  }

  selectAgent() {
    // edit agent click
    editBookingModalS2Agents.addEventListener('click', () => {
      // right changes
      bookingModalS2Agents.className = 'booking-modal-s2-right'
      bookingModalS2Location.className = 'booking-modal-s2-right hide-container'
      bookingModalS2DateTime.className = 'booking-modal-s2-right hide-container'
      bookingModalS2ConfirmDetails.className = 'booking-modal-s2-right hide-container'

      bookingModalS2Step1.className = 'step-selected'
      bookingModalS2Step2.className = ''
      bookingModalS2Step3.className = ''
      bookingModalS2Step4.className = ''

      bookingModalS2Counter = 0

      // footer changes
      if (bookingModalS2AgentsSelected) {
        bookingModalS2NextBtn.className = 'booking-modal-s2-next'
        bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
      } else {
        bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
        bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
      }
    })

    // if user is on select an "agent"
    if (myApp.companyOptions2Bool && myApp.bookingModalS2.className === 'booking-modal-s2') {

      // select the 1st booking modal step
      bookingModalS2Step1.className = 'step-selected'

      // set early values for service booking object properties
      service2BookingObj.duration_minutes = myApp.companyServicesObj[`${bookingModalS2BodyLeftTitle.textContent}`].duration_minutes
      service2BookingObj.service_variation_id = myApp.companyServicesObj[`${bookingModalS2BodyLeftTitle.textContent}`].service_variation_id
      service2BookingObj.service_variation_version = myApp.companyServicesObj[`${bookingModalS2BodyLeftTitle.textContent}`].service_variation_version
      service2BookingObj.service_price = myApp.companyServicesObj[`${bookingModalS2BodyLeftTitle.textContent}`].service_price
      service2BookingObj.service_name = bookingModalS2BodyLeftTitle.textContent
      service2BookingObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
      service2BookingObj.customer_id = JSON.parse(localStorage.getItem('currentUser')).id
      service2BookingObj.phone_number = JSON.parse(localStorage.getItem('currentUser')).phone_number                             
      service2BookingObj.given_name = JSON.parse(localStorage.getItem('currentUser')).given_name
      service2BookingObj.family_name = JSON.parse(localStorage.getItem('currentUser')).family_name

      // get company agents
      async function getCompanyAgents() {
        // req & res
        const get_company_agents_req = await fetch('/getCompanyAgents', { method: 'get' }) 
        const get_company_agents_res = await get_company_agents_req.json()

        console.log(get_company_agents_res)

        // take all agents and display in bookingModalS2BodyRightAgentsBox
        for (let i = 0; i < get_company_agents_res.team_member_booking_profiles.length; i++) {
          let newH1Element = document.createElement('h1')
          newH1Element.textContent = get_company_agents_res.team_member_booking_profiles[i].display_name
          bookingModalS2BodyRightAgentsBox.appendChild(newH1Element)
        }

        // if an agent is selected
        for (let i = 0; i < bookingModalS2BodyRightAgentsBox.children.length; i++) {
          bookingModalS2BodyRightAgentsBox.children[i].addEventListener('click', () => {   
            for (let j = 0; j < bookingModalS2BodyRightAgentsBox.children.length; j++) {
              bookingModalS2BodyRightAgentsBox.children[j].className = ''
            }
            bookingModalS2BodyRightAgentsBox.children[i].className = 'booking-modal-s2-agent-selected'
            bookingModalS2AgentsPickedIcon.className = 'bi bi-check-circle-fill'

            // hide null continue btn -- show pink color continue btn
            bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
            bookingModalS2NextBtn.className = 'booking-modal-s2-next'
            
            console.log(bookingModalS2NextNullBtn.className)
            console.log(bookingModalS2NextBtn.className)
            
            service2BookingObj.team_member_id = get_company_agents_res.team_member_booking_profiles[i].team_member_id 
            service2BookingObj.employee_name = bookingModalS2BodyRightAgentsBox.children[i].textContent
            bookingModalS2AgentsSelected = true
            console.log(service2BookingObj)
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
    editBookingModalS2Location.addEventListener('click', () => {
      console.log('I have been clicked!')
      // right changes
      bookingModalS2Agents.className = 'booking-modal-s2-right hide-container'
      bookingModalS2Location.className = 'booking-modal-s2-right'
      bookingModalS2DateTime.className = 'booking-modal-s2-right hide-container'
      bookingModalS2ConfirmDetails.className = 'booking-modal-s2-right hide-container'

      bookingModalS2Step1.className = ''
      bookingModalS2Step2.className = 'step-selected'
      bookingModalS2Step3.className = ''
      bookingModalS2Step4.className = ''

      bookingModalS2Counter = 1

      // footer changes
      if (bookingModalS2LocationSelected) {
        bookingModalS2NextBtn.className = 'booking-modal-s2-next'
        bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
      } else {
        bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
        bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
      }
    })

    // if user is on select "location"
    if (myApp.companyOptions2Bool && bookingModalS2Location.className === 'booking-modal-s2-right') {
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
          bookingModalS2CustomerLocationsBox.appendChild(newDivElement)
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
          bookingModalS2CustomerLocationsBox.appendChild(newDivElement)
        }
      }
      console.log(bookingModalS2CustomerLocationsBox.children.length)

      // delete blank customer locations remaining
      for (let i = 0; i < bookingModalS2CustomerLocationsBox.children.length; i++) {
        // get all the list items from all customer locations
        let newCustomerLocationDetails = bookingModalS2CustomerLocationsBox.getElementsByTagName('li')
        console.log(newCustomerLocationDetails)

        if (i === 0) { // 0
          if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
          }
        } else if (i === 1) { // 5
            if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 2) { // 10
            if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 3) { // 15
            if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 4) { // 20
            if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 5) { // 25
            if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 6) { // 30
            if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 7) { // 35
            if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 8) { // 40
            if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 9) { // 45
            if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 10) { // 50
            if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            } 
        }
      }

      // when a customer location is selected
      for (let i = 0; i < bookingModalS2CustomerLocationsBox.children.length; i++) {
        bookingModalS2CustomerLocationsBox.children[i].addEventListener('click', () => {
          // clear any existing customer location style already selected
          for (let j = 0; j < bookingModalS2CustomerLocationsBox.children.length; j++) {
            // clear new service 2 location obj
            service2BookingObj.name = ''
            service2BookingObj.address_line_1 = ''
            service2BookingObj.administrative_district_level_1 = ''
            service2BookingObj.locality = ''
            service2BookingObj.postal_code = ''
            bookingModalS2CustomerLocationsBox.children[j].style = ''
          }

          // get all the list items from all customer locations
          let newCustomerLocationDetails = bookingModalS2CustomerLocationsBox.getElementsByTagName('li')
          console.log(newCustomerLocationDetails)
          // console.log(newCustomerLocationDetails[0].textContent)
          console.log(bookingModalS2CustomerLocationsBox.children[i])

          // style the customer location function
          function styleSelectedLocation() {
            bookingModalS2CustomerLocationsBox.children[i].style.backgroundColor = '#f05e7c'
            bookingModalS2CustomerLocationsBox.children[i].style.color = '#ffffff'
            bookingModalS2CustomerLocationsBox.children[i].style.borderColor = '#f05e7c'
            bookingModalS2CustomerLocationsBox.children[i].style.borderRadius = '10px'  
          }

          // delete blank customer locations
          for (let i = 0; i < bookingModalS2CustomerLocationsBox.children.length; i++) {
            // get all the list items from all customer locations
            let newCustomerLocationDetails = bookingModalS2CustomerLocationsBox.getElementsByTagName('li')
            // console.log(newCustomerLocationDetails[10].textContent)
            if (i === 0) { // 0
              if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
              } else {              
              }
            } else if (i === 1) { // 5
                if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                } else {                
                }
            } else if (i === 2) { // 10
                if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 3) { // 15
                if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 4) { // 20
                if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 5) { // 25
                if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 6) { // 30
                if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                } else {                
                }
            } else if (i === 7) { // 35
                if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 8) { // 40
                if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                } else { 
                }
            } else if (i === 9) { // 45
                if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 10) { // 50
                if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                } 
            }
          }

          // send too new service 2 location obj && unNull the continue btn
          if (i === 0) { // 0
            if (newCustomerLocationDetails[i].textContent !== '') {
              service2BookingObj.name = newCustomerLocationDetails[i].textContent
              service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 1].textContent
              service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 2].textContent
              service2BookingObj.locality = newCustomerLocationDetails[i + 3].textContent
              service2BookingObj.postal_code = newCustomerLocationDetails[i + 4].textContent
              styleSelectedLocation()
              bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
              bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
              bookingModalS2NextBtn.className = 'booking-modal-s2-next'
              bookingModalS2LocationSelected = true
              console.log(service2BookingObj)
            } else {
              bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
            }
          } else if (i === 1) { // 5
              if (newCustomerLocationDetails[i + 4].textContent !== '') {
                service2BookingObj.name = newCustomerLocationDetails[i + 4].textContent
                service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 5].textContent
                service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 6].textContent
                service2BookingObj.locality = newCustomerLocationDetails[i + 7].textContent
                service2BookingObj.postal_code = newCustomerLocationDetails[i + 8].textContent
                styleSelectedLocation()
                bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                bookingModalS2LocationSelected = true
                console.log(service2BookingObj)
              } else {
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 2) { // 10
              if (newCustomerLocationDetails[i + 8].textContent !== '') {
                service2BookingObj.name = newCustomerLocationDetails[i + 8].textContent
                service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 9].textContent
                service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 10].textContent
                service2BookingObj.locality = newCustomerLocationDetails[i + 11].textContent
                service2BookingObj.postal_code = newCustomerLocationDetails[i + 12].textContent 
                styleSelectedLocation()
                bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                bookingModalS2LocationSelected = true
                console.log(service2BookingObj)
              } else {
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 3) { // 15
              if (newCustomerLocationDetails[i + 12].textContent !== '') {
                service2BookingObj.name = newCustomerLocationDetails[i + 12].textContent
                service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 13].textContent
                service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 14].textContent
                service2BookingObj.locality = newCustomerLocationDetails[i + 15].textContent
                service2BookingObj.postal_code = newCustomerLocationDetails[i + 16].textContent 
                styleSelectedLocation()
                bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                bookingModalS2LocationSelected = true
                console.log(service2BookingObj)
              } else {
                console.log('peace')
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 4) { // 20
              if (newCustomerLocationDetails[i + 16].textContent !== '') {
                service2BookingObj.name = newCustomerLocationDetails[i + 16].textContent
                service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 17].textContent
                service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 18].textContent
                service2BookingObj.locality = newCustomerLocationDetails[i + 19].textContent
                service2BookingObj.postal_code = newCustomerLocationDetails[i + 20].textContent
                styleSelectedLocation()
                bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                bookingModalS2LocationSelected = true
                console.log(service2BookingObj)
              } else {
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 5) { // 25
              if (newCustomerLocationDetails[i + 20].textContent !== '') {
                service2BookingObj.name = newCustomerLocationDetails[i + 20].textContent
                service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 21].textContent
                service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 22].textContent
                service2BookingObj.locality = newCustomerLocationDetails[i + 23].textContent
                service2BookingObj.postal_code = newCustomerLocationDetails[i + 24].textContent
                styleSelectedLocation()
                bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                bookingModalS2LocationSelected = true
                console.log(service2BookingObj)
              } else {
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 6) { // 30
              if (newCustomerLocationDetails[i + 24].textContent !== '') {
                service2BookingObj.name = newCustomerLocationDetails[i + 24].textContent
                service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 25].textContent
                service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 26].textContent
                service2BookingObj.locality = newCustomerLocationDetails[i + 27].textContent
                service2BookingObj.postal_code = newCustomerLocationDetails[i + 28].textContent
                styleSelectedLocation()
                bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                bookingModalS2LocationSelected = true
                console.log(service2BookingObj)
              } else {
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 7) { // 35
              if (newCustomerLocationDetails[i + 28].textContent !== '') {
                service2BookingObj.name = newCustomerLocationDetails[i + 28].textContent
                service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 29].textContent
                service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 30].textContent
                service2BookingObj.locality = newCustomerLocationDetails[i + 31].textContent
                service2BookingObj.postal_code = newCustomerLocationDetails[i + 32].textContent
                styleSelectedLocation()
                bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                bookingModalS2LocationSelected = true
                console.log(service2BookingObj)
              } else {
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 8) { // 40
              if (newCustomerLocationDetails[i + 32].textContent !== '') {
                service2BookingObj.name = newCustomerLocationDetails[i + 32].textContent
                service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 33].textContent
                service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 34].textContent
                service2BookingObj.locality = newCustomerLocationDetails[i + 35].textContent
                service2BookingObj.postal_code = newCustomerLocationDetails[i + 36].textContent
                styleSelectedLocation()
                bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                bookingModalS2LocationSelected = true
                console.log(service2BookingObj)
              } else {
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none' 
              }
          } else if (i === 9) { // 45
              if (newCustomerLocationDetails[i + 36].textContent !== '') {
                service2BookingObj.name = newCustomerLocationDetails[i + 36].textContent
                service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 37].textContent
                service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 38].textContent
                service2BookingObj.locality = newCustomerLocationDetails[i + 39].textContent
                service2BookingObj.postal_code = newCustomerLocationDetails[i + 40].textContent
                styleSelectedLocation()
                bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                console.log(service2BookingObj)
              } else {
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 10) { // 50
              if (newCustomerLocationDetails[i + 40].textContent !== '') {
                service2BookingObj.name = newCustomerLocationDetails[i + 40].textContent
                service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 41].textContent
                service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 42].textContent
                service2BookingObj.locality = newCustomerLocationDetails[i + 43].textContent
                service2BookingObj.postal_code = newCustomerLocationDetails[i + 44].textContent
                styleSelectedLocation()
                bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                bookingModalS2LocationSelected = true
                console.log(service2BookingObj)
              } else {
                bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
              } 
          }
        })
      }

      // if checkbox is selected --> show the new customer location box
      bookingModalS2NewLocationCheckbox.addEventListener('click', () => {
        bookingModalS2NewLocationCheckboxCounter++
      
        // checkbox toggle
        if (bookingModalS2NewLocationCheckboxCounter === 1) {
          bookingModalS2NewLocationCheckbox.checked = true           
          bookingModalS2NewCustomerLocationBox.className = 'booking-modal-s2-new-location-box'
        } else if (bookingModalS2NewLocationCheckboxCounter === 2) {
          bookingModalS2NewLocationCheckbox.checked = false          
          bookingModalS2NewCustomerLocationBox.className = 'booking-modal-s2-new-location-box hide-container'
          bookingModalS2NewLocationCheckboxCounter = 0
        }
      })

      ///*******also create a new location on sign up in square*/
      // if new customer location box input fields all filled && btn clicked--> update users location in MongoDb --> create a new location in Square

      // if create new location btn is clicked
      bookingModalS2NewCustomerLocationSubmitBtn.addEventListener('click', () => {
        console.log('ive been clicked.')
        let newOtherLocationsIndex = 0

        // set the new customer modal booking email address
        bookingModalS2NewCustomerLocationObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address

        console.log(newOtherLocationsIndex)

        bookingModalS2NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`] = {}

        // check type is correct
        if (bookingModalS2NewCustomerLocationInputType.value !== 'select-a-type') {
          bookingModalS2NewCustomerLocationInputTypeError.className = 'error hide-container'
          bookingModalS2NewCustomerLocationInputType.className = 'input-valid-clear'
          newUserLocation.type_name = bookingModalS2NewCustomerLocationInputType.value
          bookingModalS2NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].type_name = bookingModalS2NewCustomerLocationInputType.value
        } else {
          bookingModalS2NewCustomerLocationInputTypeError.className = 'error'
          bookingModalS2NewCustomerLocationInputType.className = 'input-invalid'
        }

        // check address is correct
        if (bookingModalS2NewCustomerLocationInputAddress.value.match(addressCheck)) {
          bookingModalS2NewCustomerLocationInputAddressError.className = 'error hide-container'
          bookingModalS2NewCustomerLocationInputAddress.className = 'input-valid-clear'
          newUserLocation.address_line_1 = bookingModalS2NewCustomerLocationInputAddress.value
          bookingModalS2NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].address_line_1 = bookingModalS2NewCustomerLocationInputAddress.value
        } else {
          bookingModalS2NewCustomerLocationInputAddressError.className = 'error'
          bookingModalS2NewCustomerLocationInputAddress.className = 'input-invalid'
        }

        // check state is correct
        if (bookingModalS2NewCustomerLocationInputState.value.match(justLettersCheck)) {
          bookingModalS2NewCustomerLocationInputStateError.className = 'error hide-container'
          bookingModalS2NewCustomerLocationInputState.className = 'input-valid-clear'
          newUserLocation.administrative_district_level_1 = bookingModalS2NewCustomerLocationInputState.value
          bookingModalS2NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].administrative_district_level_1 = bookingModalS2NewCustomerLocationInputState.value
        } else {
          bookingModalS2NewCustomerLocationInputStateError.className = 'error'
          bookingModalS2NewCustomerLocationInputState.className = 'input-invalid'
        }

        // check city is correct
        if (bookingModalS2NewCustomerLocationInputCity.value.match(justLettersCheck)) {
          bookingModalS2NewCustomerLocationInputCityError.className = 'error hide-container'
          bookingModalS2NewCustomerLocationInputCity.className = 'input-valid-clear'
          newUserLocation.locality = bookingModalS2NewCustomerLocationInputCity.value
          bookingModalS2NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].locality = bookingModalS2NewCustomerLocationInputCity.value
        } else {
          bookingModalS2NewCustomerLocationInputCityError.className = 'error'
          bookingModalS2NewCustomerLocationInputCity.className = 'input-invalid'
        }

        // check that zip code is correct
        if (bookingModalS2NewCustomerLocationInputZipCode.value.match(zipCodeCheck)) {
          bookingModalS2NewCustomerLocationInputZipCodeError.className = 'error hide-container'
          bookingModalS2NewCustomerLocationInputZipCode.className = 'input-valid-clear'
          newUserLocation.postal_code = bookingModalS2NewCustomerLocationInputZipCode.value
          bookingModalS2NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].postal_code = bookingModalS2NewCustomerLocationInputZipCode.value
        } else {
          bookingModalS2NewCustomerLocationInputZipCodeError.className = 'error'
          bookingModalS2NewCustomerLocationInputZipCode.className = 'input-invalid'
        }
        console.log(bookingModalS2NewCustomerLocationObj)

        if (bookingModalS2NewCustomerLocationInputType.className === 'input-valid-clear' && bookingModalS2NewCustomerLocationInputAddress.className === 'input-valid-clear' && bookingModalS2NewCustomerLocationInputState.className === 'input-valid-clear' && bookingModalS2NewCustomerLocationInputCity.className === 'input-valid-clear' && bookingModalS2NewCustomerLocationInputZipCode.className === 'input-valid-clear') {
          console.log('All fields are valid..')
          newUserLocation.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
          // create the new location in MongoDB
          // take new location id add to the "bookingModalS2NewCustomerLocationObj.id"
          // add customers new location object to customers data -- MongoDB
          async function newLocationMongoDb() {
            // req & res
            const create_new_location_mongodb_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(bookingModalS2NewCustomerLocationObj)}`, { method: 'put' })
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
                bookingModalS2NewCustomerLocationInputType.value = 'select-a-type'
                bookingModalS2NewCustomerLocationInputAddress.value = ''
                bookingModalS2NewCustomerLocationInputState.value = ''
                bookingModalS2NewCustomerLocationInputCity.value = ''
                bookingModalS2NewCustomerLocationInputZipCode.value = ''

                // clear bookingModalS2CustomerLocationsBox
                bookingModalS2CustomerLocationsBox.innerHTML = ''
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
                    bookingModalS2CustomerLocationsBox.appendChild(newDivElement)
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
                    bookingModalS2CustomerLocationsBox.appendChild(newDivElement)
                  }
                }

                // delete blank customer locations remaining
                for (let i = 0; i < bookingModalS2CustomerLocationsBox.children.length; i++) {
                  // get all the list items from all customer locations
                  let newCustomerLocationDetails = bookingModalS2CustomerLocationsBox.getElementsByTagName('li')
                  console.log(newCustomerLocationDetails)

                  if (i === 0) { // 0
                    if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                      bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                    }
                  } else if (i === 1) { // 5
                      if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 2) { // 10
                      if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 3) { // 15
                      if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 4) { // 20
                      if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 5) { // 25
                      if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 6) { // 30
                      if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 7) { // 35
                      if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 8) { // 40
                      if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 9) { // 45
                      if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 10) { // 50
                      if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      } 
                  }
                }

                // when a customer location is selected
                for (let i = 0; i < bookingModalS2CustomerLocationsBox.children.length; i++) {
                  bookingModalS2CustomerLocationsBox.children[i].addEventListener('click', () => {
                    // clear any existing customer location style already selected
                    for (let j = 0; j < bookingModalS2CustomerLocationsBox.children.length; j++) {
                      // clear new service 2 location obj
                      service2BookingObj.name = ''
                      service2BookingObj.address_line_1 = ''
                      service2BookingObj.administrative_district_level_1 = ''
                      service2BookingObj.locality = ''
                      service2BookingObj.postal_code = ''
                      bookingModalS2CustomerLocationsBox.children[j].style = ''
                    }

                    // get all the list items from all customer locations
                    let newCustomerLocationDetails = bookingModalS2CustomerLocationsBox.getElementsByTagName('li')
                    console.log(newCustomerLocationDetails)
                    // console.log(newCustomerLocationDetails[0].textContent)
                    console.log(bookingModalS2CustomerLocationsBox.children[i])

                    // style the customer location function
                    function styleSelectedLocation() {
                      bookingModalS2CustomerLocationsBox.children[i].style.backgroundColor = '#f05e7c'
                      bookingModalS2CustomerLocationsBox.children[i].style.color = '#ffffff'
                      bookingModalS2CustomerLocationsBox.children[i].style.borderColor = '#f05e7c'
                      bookingModalS2CustomerLocationsBox.children[i].style.borderRadius = '10px'  
                    }

                    // delete blank customer locations
                    for (let i = 0; i < bookingModalS2CustomerLocationsBox.children.length; i++) {
                      // get all the list items from all customer locations
                      let newCustomerLocationDetails = bookingModalS2CustomerLocationsBox.getElementsByTagName('li')
                      // console.log(newCustomerLocationDetails[10].textContent)
                      if (i === 0) { // 0
                        if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                        } else {              
                        }
                      } else if (i === 1) { // 5
                          if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                          } else {                
                          }
                      } else if (i === 2) { // 10
                          if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 3) { // 15
                          if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 4) { // 20
                          if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 5) { // 25
                          if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 6) { // 30
                          if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                          } else {                
                          }
                      } else if (i === 7) { // 35
                          if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 8) { // 40
                          if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                          } else { 
                          }
                      } else if (i === 9) { // 45
                          if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 10) { // 50
                          if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          } 
                      }
                    }

                    // send too new service 2 location obj && unNull the continue btn
                    if (i === 0) { // 0
                      if (newCustomerLocationDetails[i].textContent !== '') {
                        service2BookingObj.name = newCustomerLocationDetails[i].textContent
                        service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 1].textContent
                        service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 2].textContent
                        service2BookingObj.locality = newCustomerLocationDetails[i + 3].textContent
                        service2BookingObj.postal_code = newCustomerLocationDetails[i + 4].textContent
                        styleSelectedLocation()
                        bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                        bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                        bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                        bookingModalS2LocationSelected = true
                        console.log(service2BookingObj)
                      } else {
                        bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                      }
                    } else if (i === 1) { // 5
                        if (newCustomerLocationDetails[i + 4].textContent !== '') {
                          service2BookingObj.name = newCustomerLocationDetails[i + 4].textContent
                          service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 5].textContent
                          service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 6].textContent
                          service2BookingObj.locality = newCustomerLocationDetails[i + 7].textContent
                          service2BookingObj.postal_code = newCustomerLocationDetails[i + 8].textContent
                          styleSelectedLocation()
                          bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2LocationSelected = true
                          console.log(service2BookingObj)
                        } else {
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 2) { // 10
                        if (newCustomerLocationDetails[i + 8].textContent !== '') {
                          service2BookingObj.name = newCustomerLocationDetails[i + 8].textContent
                          service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 9].textContent
                          service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 10].textContent
                          service2BookingObj.locality = newCustomerLocationDetails[i + 11].textContent
                          service2BookingObj.postal_code = newCustomerLocationDetails[i + 12].textContent 
                          styleSelectedLocation()
                          bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2LocationSelected = true
                          console.log(service2BookingObj)
                        } else {
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 3) { // 15
                        if (newCustomerLocationDetails[i + 12].textContent !== '') {
                          service2BookingObj.name = newCustomerLocationDetails[i + 12].textContent
                          service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 13].textContent
                          service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 14].textContent
                          service2BookingObj.locality = newCustomerLocationDetails[i + 15].textContent
                          service2BookingObj.postal_code = newCustomerLocationDetails[i + 16].textContent 
                          styleSelectedLocation()
                          bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2LocationSelected = true
                          console.log(service2BookingObj)
                        } else {
                          console.log('peace')
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 4) { // 20
                        if (newCustomerLocationDetails[i + 16].textContent !== '') {
                          service2BookingObj.name = newCustomerLocationDetails[i + 16].textContent
                          service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 17].textContent
                          service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 18].textContent
                          service2BookingObj.locality = newCustomerLocationDetails[i + 19].textContent
                          service2BookingObj.postal_code = newCustomerLocationDetails[i + 20].textContent
                          styleSelectedLocation()
                          bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2LocationSelected = true
                          console.log(service2BookingObj)
                        } else {
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 5) { // 25
                        if (newCustomerLocationDetails[i + 20].textContent !== '') {
                          service2BookingObj.name = newCustomerLocationDetails[i + 20].textContent
                          service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 21].textContent
                          service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 22].textContent
                          service2BookingObj.locality = newCustomerLocationDetails[i + 23].textContent
                          service2BookingObj.postal_code = newCustomerLocationDetails[i + 24].textContent
                          styleSelectedLocation()
                          bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2LocationSelected = true
                          console.log(service2BookingObj)
                        } else {
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 6) { // 30
                        if (newCustomerLocationDetails[i + 24].textContent !== '') {
                          service2BookingObj.name = newCustomerLocationDetails[i + 24].textContent
                          service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 25].textContent
                          service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 26].textContent
                          service2BookingObj.locality = newCustomerLocationDetails[i + 27].textContent
                          service2BookingObj.postal_code = newCustomerLocationDetails[i + 28].textContent
                          styleSelectedLocation()
                          bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2LocationSelected = true
                          console.log(service2BookingObj)
                        } else {
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 7) { // 35
                        if (newCustomerLocationDetails[i + 28].textContent !== '') {
                          service2BookingObj.name = newCustomerLocationDetails[i + 28].textContent
                          service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 29].textContent
                          service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 30].textContent
                          service2BookingObj.locality = newCustomerLocationDetails[i + 31].textContent
                          service2BookingObj.postal_code = newCustomerLocationDetails[i + 32].textContent
                          styleSelectedLocation()
                          bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2LocationSelected = true
                          console.log(service2BookingObj)
                        } else {
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 8) { // 40
                        if (newCustomerLocationDetails[i + 32].textContent !== '') {
                          service2BookingObj.name = newCustomerLocationDetails[i + 32].textContent
                          service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 33].textContent
                          service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 34].textContent
                          service2BookingObj.locality = newCustomerLocationDetails[i + 35].textContent
                          service2BookingObj.postal_code = newCustomerLocationDetails[i + 36].textContent
                          styleSelectedLocation()
                          bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2LocationSelected = true
                          console.log(service2BookingObj)
                        } else {
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none' 
                        }
                    } else if (i === 9) { // 45
                        if (newCustomerLocationDetails[i + 36].textContent !== '') {
                          service2BookingObj.name = newCustomerLocationDetails[i + 36].textContent
                          service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 37].textContent
                          service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 38].textContent
                          service2BookingObj.locality = newCustomerLocationDetails[i + 39].textContent
                          service2BookingObj.postal_code = newCustomerLocationDetails[i + 40].textContent
                          styleSelectedLocation()
                          bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          console.log(service2BookingObj)
                        } else {
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 10) { // 50
                        if (newCustomerLocationDetails[i + 40].textContent !== '') {
                          service2BookingObj.name = newCustomerLocationDetails[i + 40].textContent
                          service2BookingObj.address_line_1 = newCustomerLocationDetails[i + 41].textContent
                          service2BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 42].textContent
                          service2BookingObj.locality = newCustomerLocationDetails[i + 43].textContent
                          service2BookingObj.postal_code = newCustomerLocationDetails[i + 44].textContent
                          styleSelectedLocation()
                          bookingModalS2LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2LocationSelected = true
                          console.log(service2BookingObj)
                        } else {
                          bookingModalS2CustomerLocationsBox.children[i].style.display = 'none'
                        } 
                    }
                  })
                }
                console.log(bookingModalS2CustomerLocationsBox.children.length)
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
    editBookingModalS2DateTime.addEventListener('click', () => {
      // right changes
      bookingModalS2Agents.className = 'booking-modal-s2-right hide-container'
      bookingModalS2Location.className = 'booking-modal-s2-right hide-container'
      bookingModalS2DateTime.className = 'booking-modal-s2-right'
      bookingModalS2ConfirmDetails.className = 'booking-modal-s2-right hide-container'

      bookingModalS2Step1.className = ''
      bookingModalS2Step2.className = ''
      bookingModalS2Step3.className = 'step-selected'
      bookingModalS2Step4.className = ''

      bookingModalS2Counter = 2

      // footer changes
      if (bookingModalS2DateSelected && bookingModalS2TimeSelected) {
        bookingModalS2NextBtn.className = 'booking-modal-s2-next'
        bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
      } else {
        bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
        bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
      }
    })

    // if user is on select "date & time"
    if (myApp.companyOptions2Bool && bookingModalS2DateTime.className === 'booking-modal-s2-right') {
      console.log('Select date & time!')

      // setup for getting current "start_at" and current "end_at" dates (1 month from the current day)
      const bmDate = new Date()

      let bookingModalS2Year = bmDate.getYear() + 1900
      let bookingModalS2Month = bmDate.getMonth() + 1
      let bookingModalS2Day = bmDate.getDate()

      let bookingModalS2MinDate = `${bookingModalS2Month}-${bookingModalS2Day}-${bookingModalS2Year}`
      let bookingModalS2MaxDate = `${bookingModalS2Month + 1}-${bookingModalS2Day}-${bookingModalS2Year}`

      let bookingModalS2MinDateNew, bookingModalS2MaxDateNew

      console.log(bookingModalS2MinDate, bookingModalS2MaxDate)

        // if current month has 1 digit
      if (bookingModalS2MinDate.substring(0, 2) !== '10' || bookingModalS2MinDate.substring(0, 2) !== '11' || bookingModalS2MinDate.substring(0, 2) !== '12') {
        bookingModalS2MinDate = bookingModalS2MinDate.replace(bookingModalS2MinDate.substring(0, 1), `0${bookingModalS2Month}`)
        console.log(bookingModalS2MinDate)
      }

        // if next month has 1 digit
      if (bookingModalS2MaxDate.substring(0, 2) !== '10' || bookingModalS2MaxDate.substring(0, 2) !== '11' || bookingModalS2MaxDate.substring(0, 2) !== '12') {
        bookingModalS2MaxDate = bookingModalS2MaxDate.replace(bookingModalS2MaxDate.substring(0, 1), `0${bookingModalS2Month + 1}`)
        console.log(bookingModalS2MaxDate)
      }

        // if current date is 1 digit
      if (bookingModalS2MinDate.substring(3, 5).includes('-')) {
        bookingModalS2MinDateNew = bookingModalS2MinDate.slice(0, 3) + '0' + bookingModalS2MinDate.slice(3, 9)
        console.log(bookingModalS2MinDateNew)
      } else {
        bookingModalS2MinDateNew = bookingModalS2MinDate
      }

        // if next date is 1 digit
      if (bookingModalS2MaxDate.substring(3, 5).includes('-')) {
        bookingModalS2MaxDateNew = bookingModalS2MaxDate.slice(0, 3) + '0' + bookingModalS2MaxDate.slice(3, 9)
        console.log(bookingModalS2MaxDateNew)
      } else {
        bookingModalS2MaxDateNew = bookingModalS2MaxDate
      }

        // set the "start_at" and "end_at" times to the serviceAvailabilityObj
      service2AvailabilityObj.start_at = `${bookingModalS2MinDateNew.slice(6, 11)}-${bookingModalS2MinDateNew.slice(0, 2)}-${bookingModalS2MinDateNew.slice(3, 5)}T12:00:00Z`
      service2AvailabilityObj.end_at = `${bookingModalS2MaxDateNew.slice(6, 11)}-${bookingModalS2MaxDateNew.slice(0, 2)}-${bookingModalS2MaxDateNew.slice(3, 5)}T21:00:00Z`
      service2AvailabilityObj.location_id = `${myApp.companyLocationId}`
      service2AvailabilityObj.service_variation_id = `${myApp.companyService2VariationId}`

      console.log(service2AvailabilityObj)

      // 
      // fetch available times for the service
      async function service2Availabilities() {
        // req & res
        const get_company_availabilities_req = await fetch(`/getCompanyAvailabilities/${JSON.stringify(service2AvailabilityObj)}`, { method: 'post' })
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
          // show the bookingModalS2
          // myApp.bookingModalS2.className = 'booking-modal-s2'

          // filter and display available dates on the calendar
          console.log(bookingModalS2CalDays[0].textContent)
          console.log(bookingModalS2CalDays.length)

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

          if (get_company_availabilities_res.availabilities[0].start_at.slice(5, 7) === `0${bookingModalS2Date.getMonth() + 2}` || get_company_availabilities_res.availabilities[0].start_at.slice(5, 7) === '01' && bookingModalS2Date.getMonth() === 11) {
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

          // push the days of the selected calendar month to an array to make comparable to "availableDaysThisMonthArr & availableDaysNextMonthArr"
          for (let i = 0; i < bookingModalS2CalDays.length; i++) {
            if (bookingModalS2CalDays[i].textContent.length === 1) {
              availableCalDaysArr.push(`0${bookingModalS2CalDays[i].textContent}`)
            } else {
              availableCalDaysArr.push(`${bookingModalS2CalDays[i].textContent}`)
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
                bookingModalS2CalDays[j].className = 'booking-modal-s2-datetime-style'
                console.log(bookingModalS2CalDays[j])
              }
            }
          }
          

          /** On Load */
          // mouser over available calendar date (today)
          bookingModalS2CalToday.addEventListener('mouseover', () => {
            console.log('peace')
            if (bookingModalS2CalToday.className === 'booking-modal-s2-today' || bookingModalS2CalToday.className === 'booking-modal-s2-datetime-hovered') {
              bookingModalS2CalToday.style.cursor = 'pointer'
              bookingModalS2CalToday.className = 'booking-modal-s2-datetime-hovered'
            }
          })

          // mouse leave avaialble calendar date (today)
          bookingModalS2CalToday.addEventListener('mouseleave', () => {
            console.log('peace')
            if (bookingModalS2CalToday.className === 'booking-modal-s2-datetime-hovered') {
              bookingModalS2CalToday.className = 'booking-modal-s2-today'
            }
          })

          // if today is clicked
          bookingModalS2CalToday.addEventListener('click', () => {
            console.log('peace')
            if (bookingModalS2CalToday.className === 'booking-modal-s2-datetime-hovered') {
              // unstyle all other available dates
              for (let j = 0; j < bookingModalS2CalDays.length; j++) {
                bookingModalS2CalDays[j].style.backgroundColor = ''
                bookingModalS2CalDays[j].style.color = '#FFFFFF'
              }

              bookingModalS2CalToday.style.backgroundColor = '#f05e7c'
              bookingModalS2CalToday.style.color = '#FFFFFF'

              bookingModalS2DateSelected = true
              console.log(bookingModalS2DateSelected)

              let selectedFinalDate
              let selectedFinalMonth
              console.log(bookingModalS2CalToday)
              selectedDateArr = []
              selectedTimesArr = []
              selectedTimesThisMonthArr = []
              // bookingModalS2BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s2-datetime-box-header"><h1 id="booking-modal-s2-current-time-title" class='booking-modal-s2-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s2-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
              
              // push the selected "date" number to a new array (selectedDateArr)
              if (bookingModalS2CalToday.textContent.length === 1) {
                selectedDateArr.push(`0${bookingModalS2CalToday.textContent}`)
                selectedFinalDate = `0${bookingModalS2CalToday.textContent}`
              } else {
                selectedDateArr.push(bookingModalS2CalToday.textContent)
                selectedFinalDate = bookingModalS2CalToday.textContent
              }

              // loop through initial all available dates array and push all available "times" to a new array
              for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                  selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                }
              }
              console.log(selectedTimesArr)

              console.log(bookingModalS2Date.getMonth().toString().length)

              // loop through and selectedTimesArr and push "times" available for the "this month" only
              for (let i = 0; i < selectedTimesArr.length; i++) {
                if (bookingModalS2Date.getMonth().toString().length === 1) {
                  let currentMonth = `0${bookingModalS2Date.getMonth() + 1}`
                  selectedFinalMonth = `0${bookingModalS2Date.getMonth() + 1}`
                  console.log(bookingModalS2Date.getMonth())

                  if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                    selectedTimesThisMonthArr.push(selectedTimesArr[i])
                    console.log(selectedTimesThisMonthArr)
                  } 

                } else if (bookingModalS2Date.getMonth().toString().length === 2) {
                  if (selectedTimesArr[i].substring(5, 7) === bookingModalS2Date.getMonth()) {
                    selectedTimesThisMonthArr.push(selectedTimesArr[i])
                    selectedFinalMonth = bookingModalS2Date.getMonth() + 1
                    console.log(selectedTimesThisMonthArr)
                  }
                }
              }
              console.log(selectedTimesThisMonthArr)

              // loop through "this months" available "times" array and display those times into the bookingModalS2BodyRightDateTimeBox
              for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                let newH1Element = document.createElement('h1')
                let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                newH1Element.className = 'booking-modal-s2-datetimes'
                
                // convert times to normal times
                if (selectedTimeOnly === '12:00') {
                  newH1Element.textContent = '08:00 AM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '12:30') {
                  newH1Element.textContent = '08:30 AM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '13:00') {
                  newH1Element.textContent = '09:00 AM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '13:30') {
                  newH1Element.textContent = '09:30 AM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '14:00') {
                  newH1Element.textContent = '10:00 AM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '14:30') {
                  newH1Element.textContent = '10:30 AM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '15:00') {
                  newH1Element.textContent = '11:00 AM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '15:30') {
                  newH1Element.textContent = '11:30 AM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '16:00') {
                  newH1Element.textContent = '12:00 PM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '16:30') {
                  newH1Element.textContent = '12:30 PM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '17:00') {
                  newH1Element.textContent = '01:00 PM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '17:30') {
                  newH1Element.textContent = '01:30 PM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '18:00') {
                  newH1Element.textContent = '02:00 PM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '18:30') {
                  newH1Element.textContent = '02:30 PM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '19:00') {
                  newH1Element.textContent = '03:00 PM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '19:30') {
                  newH1Element.textContent = '03:30 PM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '20:00') {
                  newH1Element.textContent = '04:00 PM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '20:30') {
                  newH1Element.textContent = '04:30 PM'
                  bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                }  
              }

              // loop through bookingModalS2BodyRightDateTimeBox to listen for a click from the user
              for (let i = 1; i < bookingModalS2BodyRightDateTimeBox.children.length; i++) {
                bookingModalS2BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                  let selectedFinalTime = ''

                  // clear all other times first
                  for (let j = 0; j < bookingModalS2BodyRightDateTimeBox.children.length; j++) {
                    bookingModalS2BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                    bookingModalS2BodyRightDateTimeBox.children[j].style.color = 'black'
                  }

                  bookingModalS2BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                  bookingModalS2BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                  bookingModalS2TimeSelected = true
                  console.log(bookingModalS2TimeSelected)

                  if (bookingModalS2DateSelected && bookingModalS2TimeSelected) {
                    bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                    bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                    bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                  } else {
                    bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
                    bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
                    bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                  }

                  // convert the time back to army time
                  if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                    selectedFinalTime = '12:00'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                    selectedFinalTime = '12:30'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                    selectedFinalTime = '13:00'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                    selectedFinalTime = '13:30'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                    selectedFinalTime = '14:00'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                    selectedFinalTime = '14:30'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                    selectedFinalTime = '15:00'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                    selectedFinalTime = '15:30'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                    selectedFinalTime = '16:00'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                    selectedFinalTime = '16:30'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                    selectedFinalTime = '17:00'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                    selectedFinalTime = '17:30'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                    selectedFinalTime = '18:00'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                    selectedFinalTime = '18:30'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                    selectedFinalTime = '19:00'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                    selectedFinalTime = '19:30'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                    selectedFinalTime = '20:00'
                  } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                    selectedFinalTime = '20:30'
                  }

                  // push the time and date to the booking object
                  service2BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                  console.log(service2BookingObj)

                })
              }
            } 
          })

          
          // loop through bookingModalS2CalDays
          for (let i = 0; i < bookingModalS2CalDays.length; i++) {
            // mouser over available calendar date
            bookingModalS2CalDays[i].addEventListener('mouseover', () => {
              if (bookingModalS2CalDays[i].className === 'booking-modal-s2-datetime-style') {
                bookingModalS2CalDays[i].style.cursor = 'pointer'
                bookingModalS2CalDays[i].className = 'booking-modal-s2-datetime-style booking-modal-s2-datetime-hovered'
              }
            })

            // mouse leave avaialble calendar date
            bookingModalS2CalDays[i].addEventListener('mouseleave', (event) => {
              if (bookingModalS2CalDays[i].className === 'booking-modal-s2-datetime-style booking-modal-s2-datetime-hovered') {
                bookingModalS2CalDays[i].className = 'booking-modal-s2-datetime-style'
              }
            })

            // click on available calendar date
            bookingModalS2CalDays[i].addEventListener('click', () => {                
              if (bookingModalS2CalDays[i].className === 'booking-modal-s2-datetime-style booking-modal-s2-datetime-hovered') {
                // unstyle all other available dates
                bookingModalS2CalToday.style.backgroundColor = ''
                bookingModalS2CalToday.style.color = ''
                bookingModalS2CalToday.className = 'booking-modal-s2-today'

                for (let j = 0; j < bookingModalS2CalDays.length; j++) {
                  bookingModalS2CalDays[j].style.backgroundColor = ''
                  bookingModalS2CalDays[j].style.color = '#FFFFFF'
                }

                bookingModalS2CalDays[i].style.backgroundColor = '#F05E7C'
                bookingModalS2CalDays[i].style.color = '#FFFFFF'

                bookingModalS2DateSelected = true
                console.log(bookingModalS2DateSelected)

                let selectedFinalDate
                let selectedFinalMonth
                console.log(bookingModalS2CalDays[i])
                selectedDateArr = []
                selectedTimesArr = []
                selectedTimesThisMonthArr = []
                // bookingModalS2BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s2-datetime-box-header"><h1 id="booking-modal-s2-current-time-title" class='booking-modal-s2-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s2-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                
                // push the selected "date" number to a new array (selectedDateArr)
                if (bookingModalS2CalDays[i].textContent.length === 1) {
                  selectedDateArr.push(`0${bookingModalS2CalDays[i].textContent}`)
                  selectedFinalDate = `0${bookingModalS2CalDays[i].textContent}`
                } else {
                  selectedDateArr.push(bookingModalS2CalDays[i].textContent)
                  selectedFinalDate = bookingModalS2CalDays[i].textContent
                }

                // loop through initial all available dates array and push all available "times" to a new array
                for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                  if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                    selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                  }
                }
                console.log(selectedTimesArr)

                console.log(bookingModalS2Date.getMonth().toString().length)

                // loop through and selectedTimesArr and push times available for the "next month" only
                for (let i = 0; i < selectedTimesArr.length; i++) {
                  if (bookingModalS2Date.getMonth().toString().length === 1) {
                    let currentMonth = `0${bookingModalS2Date.getMonth() + 1}`
                    selectedFinalMonth = `0${bookingModalS2Date.getMonth() + 1}`
                    console.log(bookingModalS2Date.getMonth())

                    if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                      selectedTimesThisMonthArr.push(selectedTimesArr[i])
                      console.log(selectedTimesThisMonthArr)
                    } 

                  } else if (bookingModalS2Date.getMonth().toString().length === 2) {
                    if (selectedTimesArr[i].substring(5, 7) === bookingModalS2Date.getMonth()) {
                      selectedTimesThisMonthArr.push(selectedTimesArr[i])
                      selectedFinalMonth = bookingModalS2Date.getMonth() + 1
                      console.log(selectedTimesThisMonthArr)
                    }
                  }
                }
                console.log(selectedTimesThisMonthArr)

                // loop through the new next months available "times" array and display those times into the bookingModalS2BodyRightDateTimeBox
                for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                  let newH1Element = document.createElement('h1')
                  let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                  newH1Element.className = 'booking-modal-s2-datetimes'
                  
                  // convert times to normal times
                  if (selectedTimeOnly === '12:00') {
                    newH1Element.textContent = '08:00 AM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '12:30') {
                    newH1Element.textContent = '08:30 AM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '13:00') {
                    newH1Element.textContent = '09:00 AM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '13:30') {
                    newH1Element.textContent = '09:30 AM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '14:00') {
                    newH1Element.textContent = '10:00 AM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '14:30') {
                    newH1Element.textContent = '10:30 AM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '15:00') {
                    newH1Element.textContent = '11:00 AM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '15:30') {
                    newH1Element.textContent = '11:30 AM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '16:00') {
                    newH1Element.textContent = '12:00 PM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '16:30') {
                    newH1Element.textContent = '12:30 PM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '17:00') {
                    newH1Element.textContent = '01:00 PM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '17:30') {
                    newH1Element.textContent = '01:30 PM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '18:00') {
                    newH1Element.textContent = '02:00 PM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '18:30') {
                    newH1Element.textContent = '02:30 PM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '19:00') {
                    newH1Element.textContent = '03:00 PM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '19:30') {
                    newH1Element.textContent = '03:30 PM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '20:00') {
                    newH1Element.textContent = '04:00 PM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '20:30') {
                    newH1Element.textContent = '04:30 PM'
                    bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                  } 
                }

                // loop through bookingModalS2BodyRightDateTimeBox to listen for a click from the user
                for (let i = 1; i < bookingModalS2BodyRightDateTimeBox.children.length; i++) {
                  bookingModalS2BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                    let selectedFinalTime = ''

                    // clear all other times first
                    for (let j = 0; j < bookingModalS2BodyRightDateTimeBox.children.length; j++) {
                      bookingModalS2BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                      bookingModalS2BodyRightDateTimeBox.children[j].style.color = 'black'
                    }

                    bookingModalS2BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                    bookingModalS2BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                    bookingModalS2TimeSelected = true
                    console.log(bookingModalS2TimeSelected)

                    if (bookingModalS2DateSelected && bookingModalS2TimeSelected) {
                      bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                      bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                      bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                    } else {
                      bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
                      bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
                      bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                    }

                    // convert the time back to army time
                    if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                      selectedFinalTime = '12:00'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                      selectedFinalTime = '12:30'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                      selectedFinalTime = '13:00'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                      selectedFinalTime = '13:30'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                      selectedFinalTime = '14:00'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                      selectedFinalTime = '14:30'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                      selectedFinalTime = '15:00'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                      selectedFinalTime = '15:30'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                      selectedFinalTime = '16:00'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                      selectedFinalTime = '16:30'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                      selectedFinalTime = '17:00'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                      selectedFinalTime = '17:30'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                      selectedFinalTime = '18:00'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                      selectedFinalTime = '18:30'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                      selectedFinalTime = '19:00'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                      selectedFinalTime = '19:30'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                      selectedFinalTime = '20:00'
                    } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                      selectedFinalTime = '20:30'
                    }

                    // push the time and date to the booking object
                    service2BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                    console.log(service2BookingObj)

                  })
                }
              } 
            
            })
          }


          /* Next Btn Cal */
          // if next calendar btn clicked
          bookingModalS2NextBtnCal.addEventListener('click', () => {
            bookingModalS2NextBtnCalCounter++
            availableCalDaysArr = []
            
            let bookingModalS2DateTimeBoxLength = bookingModalS2BodyRightDateTimeBox.children.length
            for (let i = 1; i < bookingModalS2DateTimeBoxLength; i++) {
              console.log(bookingModalS2BodyRightDateTimeBox.children[1])
              bookingModalS2BodyRightDateTimeBox.removeChild(bookingModalS2BodyRightDateTimeBox.children[1])
            }

            if (bookingModalS2NextBtnCalCounter === 1) {
              bookingModalS2NextBtnCal.style.cursor = 'not-allowed'

              bookingModalS2Date.setMonth(bookingModalS2Date.getMonth() + 1)

              bookingModalS2RenderCalendar()

              bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
              bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
              bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'

              bookingModalS2DateSelected = false
              bookingModalS2TimeSelected = false

              console.log(bookingModalS2DateSelected)
              console.log(bookingModalS2TimeSelected)

              let bookingModalS2CalDaysNext = document.querySelectorAll('.booking-modal-s2-cal-days')
              let selectedDateArr = []
              let selectedTimesArr = []
              let selectedTimesNextMonthArr = []
              // bookingModalS2BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s2-datetime-box-header"><h1 id="booking-modal-s2-current-time-title" class='booking-modal-s2-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s2-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`

              console.log(bookingModalS2CalDaysNext)
              console.log(bookingModalS2CalDaysNext.length)



              // push the days of the selected calendar month to an array to make comparable
              for (let i = 0; i < bookingModalS2CalDaysNext.length; i++) {
                if (bookingModalS2CalDaysNext[i].textContent.length === 1) {
                  availableCalDaysArr.push(`0${bookingModalS2CalDaysNext[i].textContent}`)
                } else {
                  availableCalDaysArr.push(`${bookingModalS2CalDaysNext[i].textContent}`)
                }
              }
              console.log(availableCalDaysArr)

              // style and show available dates for the next month on the calendar
              for (let i = 0; i < availableCalDaysArr.length; i++) {
                let availableDaysDate = availableDaysNextMonthArr[i]
                // style available dates from service 1 next month onto the calendar
                for (let j = 0; j < availableCalDaysArr.length; j++) {
                  if (availableCalDaysArr[j] === availableDaysDate) {
                    bookingModalS2CalDaysNext[j].className = 'booking-modal-s2-datetime-style'
                    console.log(bookingModalS2CalDaysNext[j])
                  }
                }
              } 

              // go through bookingModalS2CalDays
              for (let i = 0; i < bookingModalS2CalDaysNext.length; i++) {
                // mouser over available calendar date
                bookingModalS2CalDaysNext[i].addEventListener('mouseover', () => {
                  if (bookingModalS2CalDaysNext[i].className === 'booking-modal-s2-datetime-style') {
                    bookingModalS2CalDaysNext[i].style.cursor = 'pointer'
                    bookingModalS2CalDaysNext[i].className = 'booking-modal-s2-datetime-style booking-modal-s2-datetime-hovered'
                  }
                })

                // mouse leave avaialble calendar date
                bookingModalS2CalDaysNext[i].addEventListener('mouseleave', (event) => {
                  if (bookingModalS2CalDaysNext[i].className === 'booking-modal-s2-datetime-style booking-modal-s2-datetime-hovered') {
                    bookingModalS2CalDaysNext[i].className = 'booking-modal-s2-datetime-style'
                  }
                })

                // click on available calendar date
                bookingModalS2CalDaysNext[i].addEventListener('click', () => {                
                  if (bookingModalS2CalDaysNext[i].className === 'booking-modal-s2-datetime-style booking-modal-s2-datetime-hovered') {
                    // unstyle all other available dates
                    for (let j = 0; j < bookingModalS2CalDaysNext.length; j++) {
                      bookingModalS2CalDaysNext[j].style.backgroundColor = ''
                      bookingModalS2CalDaysNext[j].style.color = '#FFFFFF'
                    }

                    bookingModalS2CalDaysNext[i].style.backgroundColor = '#F05E7C'
                    bookingModalS2CalDaysNext[i].style.color = '#FFFFFF'

                    bookingModalS2DateSelected = true
                    console.log(bookingModalS2DateSelected)

                    let selectedFinalDate
                    let selectedFinalMonth
                    console.log(bookingModalS2CalDaysNext[i])
                    selectedDateArr = []
                    selectedTimesArr = []
                    selectedTimesNextMonthArr = []
                    // bookingModalS2BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s2-datetime-box-header"><h1 id="booking-modal-s2-current-time-title" class='booking-modal-s2-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s2-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                    
                    // push the selected "date" number to a new array (selectedDateArr)
                    if (bookingModalS2CalDaysNext[i].textContent.length === 1) {
                      selectedDateArr.push(`0${bookingModalS2CalDaysNext[i].textContent}`)
                      selectedFinalDate = `0${bookingModalS2CalDaysNext[i].textContent}`
                    } else {
                      selectedDateArr.push(bookingModalS2CalDaysNext[i].textContent)
                      selectedFinalDate = bookingModalS2CalDaysNext[i].textContent
                    }

                    // loop through initial all available dates array and push all available "times" to a new array
                    for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                      if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                        selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                      }
                    }
                    console.log(selectedTimesArr)

                    console.log(bookingModalS2Date.getMonth().toString().length)

                    // loop through and selectedTimesArr and push times available for the "next month" only
                    for (let i = 0; i < selectedTimesArr.length; i++) {
                      if (bookingModalS2Date.getMonth().toString().length === 1) {
                        let currentMonth = `0${bookingModalS2Date.getMonth() + 1}`
                        selectedFinalMonth = `0${bookingModalS2Date.getMonth() + 1}`

                        if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        } 
                      } else if (bookingModalS2Date.getMonth().toString().length === 2) {
                        if (selectedTimesArr[i].substring(5, 7) === bookingModalS2Date.getMonth()) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS2Date.getMonth() + 1
                        }
                      }
                    }
                    console.log(selectedTimesNextMonthArr)

                    // loop through the new next months available "times" array and display those times into the bookingModalS2BodyRightDateTimeBox
                    for (let i = 0; i < selectedTimesNextMonthArr.length; i++) {
                      let newH1Element = document.createElement('h1')
                      let selectedTimeOnly = selectedTimesNextMonthArr[i].substring(11, 16)
                      newH1Element.className = 'booking-modal-s2-datetimes'
                      
                      // convert times to normal times
                      if (selectedTimeOnly === '12:00') {
                        newH1Element.textContent = '08:00 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '12:30') {
                        newH1Element.textContent = '08:30 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:00') {
                        newH1Element.textContent = '09:00 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:30') {
                        newH1Element.textContent = '09:30 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:00') {
                        newH1Element.textContent = '10:00 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:30') {
                        newH1Element.textContent = '10:30 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:00') {
                        newH1Element.textContent = '11:00 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:30') {
                        newH1Element.textContent = '11:30 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:00') {
                        newH1Element.textContent = '12:00 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:30') {
                        newH1Element.textContent = '12:30 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:00') {
                        newH1Element.textContent = '01:00 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:30') {
                        newH1Element.textContent = '01:30 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:00') {
                        newH1Element.textContent = '02:00 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:30') {
                        newH1Element.textContent = '02:30 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:00') {
                        newH1Element.textContent = '03:00 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:30') {
                        newH1Element.textContent = '03:30 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:00') {
                        newH1Element.textContent = '04:00 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:30') {
                        newH1Element.textContent = '04:30 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      }  
                    }

                    // loop through bookingModalS2BodyRightDateTimeBox to listen for a click from the user
                    for (let i = 1; i < bookingModalS2BodyRightDateTimeBox.children.length; i++) {
                      bookingModalS2BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                        let selectedFinalTime = ''

                        // clear all other times first
                        for (let j = 0; j < bookingModalS2BodyRightDateTimeBox.children.length; j++) {
                          bookingModalS2BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                          bookingModalS2BodyRightDateTimeBox.children[j].style.color = 'black'
                        }

                        bookingModalS2BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                        bookingModalS2BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                        bookingModalS2TimeSelected = true
                        console.log(bookingModalS2TimeSelected)

                        if (bookingModalS2DateSelected && bookingModalS2TimeSelected) {
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                        } else {
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
                          bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                        }

                        // convert the time back to army time
                        if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                          selectedFinalTime = '12:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                          selectedFinalTime = '12:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                          selectedFinalTime = '13:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                          selectedFinalTime = '13:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                          selectedFinalTime = '14:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                          selectedFinalTime = '14:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                          selectedFinalTime = '15:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                          selectedFinalTime = '15:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                          selectedFinalTime = '16:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                          selectedFinalTime = '16:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                          selectedFinalTime = '17:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                          selectedFinalTime = '17:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                          selectedFinalTime = '18:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                          selectedFinalTime = '18:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                          selectedFinalTime = '19:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                          selectedFinalTime = '19:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                          selectedFinalTime = '20:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                          selectedFinalTime = '20:30'
                        }

                        // push the time and date to the booking object
                        service2BookingObj.start_at = `${selectedTimesNextMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                        console.log(service2BookingObj)

                      })
                    }

                  } 
                
                })
              }

            } else if (bookingModalS2NextBtnCalCounter > 1) {
              bookingModalS2NextBtnCalCounter = 1
            }
          })


          /**Prev Btn Cal */
          bookingModalS2PrevBtnCal.addEventListener('mouseover', () => {
            if (bookingModalS2NextBtnCalCounter === 0) {
              bookingModalS2PrevBtnCal.style.cursor = 'not-allowed'
            } else if (bookingModalS2NextBtnCalCounter === 1) {
              bookingModalS2PrevBtnCal.style.cursor = 'pointer'
            }   
          })

          bookingModalS2PrevBtnCal.addEventListener('click', () => {
            if (bookingModalS2NextBtnCalCounter === 0) {
              bookingModalS2PrevBtnCal.style.cursor = 'not-allowed'
            } else if (bookingModalS2NextBtnCalCounter === 1) {
              bookingModalS2PrevBtnCal.style.cursor = 'pointer'
              bookingModalS2NextBtnCalCounter--
              availableCalDaysArr = []
              
              let bookingModalS2DateTimeBoxLength = bookingModalS2BodyRightDateTimeBox.children.length
              for (let i = 1; i < bookingModalS2DateTimeBoxLength; i++) {
                console.log(bookingModalS2BodyRightDateTimeBox.children[1])
                bookingModalS2BodyRightDateTimeBox.removeChild(bookingModalS2BodyRightDateTimeBox.children[1])
              }

              if (bookingModalS2NextBtnCalCounter === 0) {
                bookingModalS2PrevBtnCal.style.cursor = 'not-allowed'
                bookingModalS2NextBtnCal.style.cursor = 'pointer'
              }

              bookingModalS2Date.setMonth(bookingModalS2Date.getMonth() - 1)

              bookingModalS2RenderCalendar()

              bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
              bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
              bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'

              bookingModalS2CalToday = document.querySelector('.booking-modal-s2-today')
              console.log(bookingModalS2CalToday)

              bookingModalS2DateSelected = false
              bookingModalS2TimeSelected = false

              console.log(bookingModalS2DateSelected)
              console.log(bookingModalS2TimeSelected)

              let bookingModalS2CalDaysPrev = document.querySelectorAll('.booking-modal-s2-cal-days')
              let selectedDateArr = []
              let selectedTimesArr = []
              let selectedTimesNextMonthArr = []
              // bookingModalS2BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s2-datetime-box-header"><h1 id="booking-modal-s2-current-time-title" class='booking-modal-s2-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s2-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`

              bookingModalS2CalToday.addEventListener('mouseover', () => {
                console.log('peace')
                if (bookingModalS2CalToday.className === 'booking-modal-s2-today' || bookingModalS2CalToday.className === 'booking-modal-s2-datetime-hovered') {
                  bookingModalS2CalToday.style.cursor = 'pointer'
                  bookingModalS2CalToday.className = 'booking-modal-s2-datetime-hovered'
                }
              })
      
              // mouse leave avaialble calendar date (today)
              bookingModalS2CalToday.addEventListener('mouseleave', () => {
                console.log('peace')
                if (bookingModalS2CalToday.className === 'booking-modal-s2-datetime-hovered') {
                  bookingModalS2CalToday.className = 'booking-modal-s2-today'
                }
              })
      
              // if today is clicked
              bookingModalS2CalToday.addEventListener('click', () => {
                console.log('peace')
                if (bookingModalS2CalToday.className === 'booking-modal-s2-datetime-hovered') {
                  // unstyle all other available dates
                  for (let j = 0; j < bookingModalS2CalDaysPrev.length; j++) {
                    bookingModalS2CalDaysPrev[j].style.backgroundColor = ''
                    bookingModalS2CalDaysPrev[j].style.color = '#FFFFFF'
                  }
      
                  bookingModalS2CalToday.style.backgroundColor = '#f05e7c'
                  bookingModalS2CalToday.style.color = '#FFFFFF'

                  bookingModalS2DateSelected = true
                  console.log(bookingModalS2DateSelected)
      
                  let selectedFinalDate
                  let selectedFinalMonth
                  console.log(bookingModalS2CalToday)
                  selectedDateArr = []
                  selectedTimesArr = []
                  selectedTimesThisMonthArr = []
                  // bookingModalS2BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s2-datetime-box-header"><h1 id="booking-modal-s2-current-time-title" class='booking-modal-s2-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s2-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                  
                  // push the selected "date" number to a new array (selectedDateArr)
                  if (bookingModalS2CalToday.textContent.length === 1) {
                    selectedDateArr.push(`0${bookingModalS2CalToday.textContent}`)
                    selectedFinalDate = `0${bookingModalS2CalToday.textContent}`
                  } else {
                    selectedDateArr.push(bookingModalS2CalToday.textContent)
                    selectedFinalDate = bookingModalS2CalToday.textContent
                  }
      
                  // loop through initial all available dates array and push all available "times" to a new array
                  for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                    if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                      selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                    }
                  }
                  console.log(selectedTimesArr)
      
                  console.log(bookingModalS2Date.getMonth().toString().length)
      
                  // loop through and selectedTimesArr and push "times" available for the "this month" only
                  for (let i = 0; i < selectedTimesArr.length; i++) {
                    if (bookingModalS2Date.getMonth().toString().length === 1) {
                      let currentMonth = `0${bookingModalS2Date.getMonth() + 1}`
                      selectedFinalMonth = `0${bookingModalS2Date.getMonth() + 1}`
                      console.log(bookingModalS2Date.getMonth())
      
                      if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                        selectedTimesThisMonthArr.push(selectedTimesArr[i])
                        console.log(selectedTimesThisMonthArr)
                      } 
      
                    } else if (bookingModalS2Date.getMonth().toString().length === 2) {
                      if (selectedTimesArr[i].substring(5, 7) === bookingModalS2Date.getMonth()) {
                        selectedTimesThisMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS2Date.getMonth() + 1
                        console.log(selectedTimesThisMonthArr)
                      }
                    }
                  }
                  console.log(selectedTimesThisMonthArr)
      
                  // loop through "this months" available "times" array and display those times into the bookingModalS2BodyRightDateTimeBox
                  for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                    let newH1Element = document.createElement('h1')
                    let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                    newH1Element.className = 'booking-modal-s2-datetimes'
                    
                    // convert times to normal times
                    if (selectedTimeOnly === '12:00') {
                      newH1Element.textContent = '08:00 AM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '12:30') {
                      newH1Element.textContent = '08:30 AM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '13:00') {
                      newH1Element.textContent = '09:00 AM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '13:30') {
                      newH1Element.textContent = '09:30 AM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '14:00') {
                      newH1Element.textContent = '10:00 AM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '14:30') {
                      newH1Element.textContent = '10:30 AM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '15:00') {
                      newH1Element.textContent = '11:00 AM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '15:30') {
                      newH1Element.textContent = '11:30 AM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '16:00') {
                      newH1Element.textContent = '12:00 PM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '16:30') {
                      newH1Element.textContent = '12:30 PM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '17:00') {
                      newH1Element.textContent = '01:00 PM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '17:30') {
                      newH1Element.textContent = '01:30 PM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '18:00') {
                      newH1Element.textContent = '02:00 PM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '18:30') {
                      newH1Element.textContent = '02:30 PM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '19:00') {
                      newH1Element.textContent = '03:00 PM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '19:30') {
                      newH1Element.textContent = '03:30 PM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '20:00') {
                      newH1Element.textContent = '04:00 PM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '20:30') {
                      newH1Element.textContent = '04:30 PM'
                      bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                    }  
                  }
      
                  // loop through bookingModalS2BodyRightDateTimeBox to listen for a click from the user
                  for (let i = 1; i < bookingModalS2BodyRightDateTimeBox.children.length; i++) {
                    bookingModalS2BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                      let selectedFinalTime = ''
      
                      // clear all other times first
                      for (let j = 0; j < bookingModalS2BodyRightDateTimeBox.children.length; j++) {
                        bookingModalS2BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                        bookingModalS2BodyRightDateTimeBox.children[j].style.color = 'black'
                      }
      
                      bookingModalS2BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                      bookingModalS2BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                      bookingModalS2TimeSelected = true
                      console.log(bookingModalS2TimeSelected)
                      
                      if (bookingModalS2DateSelected && bookingModalS2TimeSelected) {
                        bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                        bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                        bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                      } else {
                        bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
                        bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
                        bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                      }
      
                      // convert the time back to army time
                      if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                        selectedFinalTime = '12:00'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                        selectedFinalTime = '12:30'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                        selectedFinalTime = '13:00'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                        selectedFinalTime = '13:30'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                        selectedFinalTime = '14:00'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                        selectedFinalTime = '14:30'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                        selectedFinalTime = '15:00'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                        selectedFinalTime = '15:30'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                        selectedFinalTime = '16:00'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                        selectedFinalTime = '16:30'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                        selectedFinalTime = '17:00'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                        selectedFinalTime = '17:30'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                        selectedFinalTime = '18:00'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                        selectedFinalTime = '18:30'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                        selectedFinalTime = '19:00'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                        selectedFinalTime = '19:30'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                        selectedFinalTime = '20:00'
                      } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                        selectedFinalTime = '20:30'
                      }
      
                      // push the time and date to the booking object
                      service2BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                    
                      console.log(service2BookingObj)
      
                    })
                  }

                } 
              })

              // push the days in the calendar to an array to make comparable
              for (let i = 0; i < bookingModalS2CalDaysPrev.length; i++) {
                if (bookingModalS2CalDaysPrev[i].textContent.length === 1) {
                  availableCalDaysArr.push(`0${bookingModalS2CalDaysPrev[i].textContent}`)
                } else {
                  availableCalDaysArr.push(`${bookingModalS2CalDaysPrev[i].textContent}`)
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
                    bookingModalS2CalDaysPrev[j].className = 'booking-modal-s2-datetime-style'
                    console.log(bookingModalS2CalDaysPrev[j].className)
                  }
                  
                }
              }

              // loop through bookingModalS2CalDaysPrev
              for (let i = 0; i < bookingModalS2CalDaysPrev.length; i++) {
                // mouser over available calendar date
                bookingModalS2CalDaysPrev[i].addEventListener('mouseover', () => {
                  if (bookingModalS2CalDaysPrev[i].className === 'booking-modal-s2-datetime-style') {
                    bookingModalS2CalDaysPrev[i].style.cursor = 'pointer'
                    bookingModalS2CalDaysPrev[i].className = 'booking-modal-s2-datetime-style booking-modal-s2-datetime-hovered'
                  }
                })

                // mouse leave avaialble calendar date
                bookingModalS2CalDaysPrev[i].addEventListener('mouseleave', () => {
                  if (bookingModalS2CalDaysPrev[i].className === 'booking-modal-s2-datetime-style booking-modal-s2-datetime-hovered') {
                    bookingModalS2CalDaysPrev[i].className = 'booking-modal-s2-datetime-style'
                  }
                })

                // click on available calendar date
                bookingModalS2CalDaysPrev[i].addEventListener('click', () => {                
                  if (bookingModalS2CalDaysPrev[i].className === 'booking-modal-s2-datetime-style booking-modal-s2-datetime-hovered') {
                    // unstyle all other available dates
                    bookingModalS2CalToday.style.backgroundColor = ''
                    bookingModalS2CalToday.style.color = ''
                    bookingModalS2CalToday.className = 'today'

                    // unstyle all other available dates
                    for (let j = 0; j < bookingModalS2CalDaysPrev.length; j++) {
                      bookingModalS2CalDaysPrev[j].style.backgroundColor = ''
                      bookingModalS2CalDaysPrev[j].style.color = '#FFFFFF'
                    }

                    bookingModalS2CalDaysPrev[i].style.backgroundColor = '#F05E7C'
                    bookingModalS2CalDaysPrev[i].style.color = '#FFFFFF'

                    bookingModalS2DateSelected = true
                    console.log(bookingModalS2DateSelected)


                    let selectedFinalDate
                    let selectedFinalMonth
                    console.log(bookingModalS2CalDaysPrev[i])
                    selectedDateArr = []
                    selectedTimesArr = []
                    selectedTimesNextMonthArr = []
                    // bookingModalS2BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s2-datetime-box-header"><h1 id="booking-modal-s2-current-time-title" class='booking-modal-s2-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s2-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                    
                    // push the selected "date" number to a new array (selectedDateArr)
                    if (bookingModalS2CalDaysPrev[i].textContent.length === 1) {
                      selectedDateArr.push(`0${bookingModalS2CalDaysPrev[i].textContent}`)
                      selectedFinalDate = `0${bookingModalS2CalDaysPrev[i].textContent}`
                    } else {
                      selectedDateArr.push(bookingModalS2CalDaysPrev[i].textContent)
                      selectedFinalDate = bookingModalS2CalDaysPrev[i].textContent
                    }

                    // loop through initial all available dates array and push all available "times" to a new array
                    for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                      if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                        selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                      }
                    }
                    console.log(selectedTimesArr)

                    console.log(bookingModalS2Date.getMonth().toString().length)

                    // loop through and selectedTimesArr and push times available for the "next month" only
                    for (let i = 0; i < selectedTimesArr.length; i++) {
                      if (bookingModalS2Date.getMonth().toString().length === 1) {
                        let currentMonth = `0${bookingModalS2Date.getMonth() + 1}`
                        selectedFinalMonth = `0${bookingModalS2Date.getMonth() + 1}`

                        if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        } 
                      } else if (bookingModalS2Date.getMonth().toString().length === 2) {
                        if (selectedTimesArr[i].substring(5, 7) === bookingModalS2Date.getMonth()) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS2Date.getMonth() + 1
                        }
                      }
                    }
                    console.log(selectedTimesNextMonthArr)

                    // loop through the new next months available "times" array and display those times into the bookingModalS2BodyRightDateTimeBox
                    for (let i = 0; i < selectedTimesNextMonthArr.length; i++) {
                      let newH1Element = document.createElement('h1')
                      let selectedTimeOnly = selectedTimesNextMonthArr[i].substring(11, 16)
                      newH1Element.className = 'booking-modal-s2-datetimes'
                      
                      // convert times to normal times
                      if (selectedTimeOnly === '12:00') {
                        newH1Element.textContent = '08:00 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '12:30') {
                        newH1Element.textContent = '08:30 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:00') {
                        newH1Element.textContent = '09:00 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:30') {
                        newH1Element.textContent = '09:30 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:00') {
                        newH1Element.textContent = '10:00 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:30') {
                        newH1Element.textContent = '10:30 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:00') {
                        newH1Element.textContent = '11:00 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:30') {
                        newH1Element.textContent = '11:30 AM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:00') {
                        newH1Element.textContent = '12:00 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:30') {
                        newH1Element.textContent = '12:30 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:00') {
                        newH1Element.textContent = '01:00 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:30') {
                        newH1Element.textContent = '01:30 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:00') {
                        newH1Element.textContent = '02:00 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:30') {
                        newH1Element.textContent = '02:30 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:00') {
                        newH1Element.textContent = '03:00 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:30') {
                        newH1Element.textContent = '03:30 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:00') {
                        newH1Element.textContent = '04:00 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:30') {
                        newH1Element.textContent = '04:30 PM'
                        bookingModalS2BodyRightDateTimeBox.appendChild(newH1Element)
                      }  
                    }

                    // loop through bookingModalS2BodyRightDateTimeBox to listen for a click from the user
                    for (let i = 1; i < bookingModalS2BodyRightDateTimeBox.children.length; i++) {
                      bookingModalS2BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                        let selectedFinalTime = ''

                        // clear all other times first
                        for (let j = 0; j < bookingModalS2BodyRightDateTimeBox.children.length; j++) {
                          bookingModalS2BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                          bookingModalS2BodyRightDateTimeBox.children[j].style.color = 'black'
                        }

                        bookingModalS2BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                        bookingModalS2BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                        bookingModalS2TimeSelected = true
                        console.log(bookingModalS2TimeSelected)

                        if (bookingModalS2DateSelected && bookingModalS2TimeSelected) {
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
                          bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                        } else {
                          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
                          bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
                          bookingModalS2DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                        }
                        

                        // convert the time back to army time
                        if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                          selectedFinalTime = '12:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                          selectedFinalTime = '12:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                          selectedFinalTime = '13:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                          selectedFinalTime = '13:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                          selectedFinalTime = '14:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                          selectedFinalTime = '14:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                          selectedFinalTime = '15:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                          selectedFinalTime = '15:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                          selectedFinalTime = '16:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                          selectedFinalTime = '16:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                          selectedFinalTime = '17:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                          selectedFinalTime = '17:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                          selectedFinalTime = '18:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                          selectedFinalTime = '18:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                          selectedFinalTime = '19:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                          selectedFinalTime = '19:30'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                          selectedFinalTime = '20:00'
                        } else if (bookingModalS2BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                          selectedFinalTime = '20:30'
                        }

                        // push the time and date to the booking object
                        service2BookingObj.start_at = `${selectedTimesNextMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                        console.log(service2BookingObj)

                      })
                    }


                  } 
                
                })

              }

            }

          })
        }
      }
        service2Availabilities()
          .then(() => { console.log('the service2Availabilities() has been sent to the express server') })
          .catch((error) => { console.log(error) }) 
    }
  }

  confirmDetails() {
    // edit "confirm details"
    editBookingModalS2ConfirmDetails.addEventListener('click', () => {
      bookingModalS2Agents.className = 'booking-modal-s2-body-right hide-container'
      bookingModalS2Location.className = 'booking-modal-s2-right hide-container'
      bookingModalS2DateTime.className = 'booking-modal-s2-body-right hide-container'
      bookingModalS2ConfirmDetails.className = 'booking-modal-s2-body-right'
      
      bookingModalS2Step1.className = ''
      bookingModalS2Step2.className = ''
      bookingModalS2Step3.className = ''
      bookingModalS2Step4.className = 'step-selected'

      bookingModalS2Counter = 3

      // display users booking reciept info here

      // display current phone number
      bookingModalS2CurrentPhoneValue.textContent = `${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(0, 3)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(3, 6)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(6, 10)}`

      // display customer reciept 
        // selected "service"
      bookingModalS2SelectedService.textContent = `${bookingModalS2BodyLeftTitle.textContent}`

        // selected "agent"
      for (let i = 0; i < bookingModalS2BodyRightAgentsBox.children.length; i++) {
        if (bookingModalS2BodyRightAgentsBox.children[i].className === 'booking-modal-s2-agent-selected') {
          bookingModalS2SelectedAgent.textContent = bookingModalS2BodyRightAgentsBox.children[i].textContent
        }
      }
        // selected "location"
        console.log(bookingModalS2CustomerLocationsBox.children[0].style.backgroundColor) 
        const regex = /[\s\n]/g
      for (let i = 0; i < bookingModalS2CustomerLocationsBox.children.length; i++) {
        if (bookingModalS2CustomerLocationsBox.children[i].style.backgroundColor === 'rgb(240, 94, 124)') {
          console.log('Go')
          bookingModalS2SelectedLocation.textContent = bookingModalS2CustomerLocationsBox.children[i].textContent
        }
      }
      
        // selected "date and time"
      let bookingModalS2SelectedTime

      if (service2BookingObj.start_at.slice(11, 16) === '12:00') {
        bookingModalS2SelectedTime = '08:00 AM EST'
        service2BookingObj.appointment_time = '08:00 AM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '12:30') {
        bookingModalS2SelectedTime = '08:30 AM EST'
        service2BookingObj.appointment_time = '08:30 AM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '13:00') {
        bookingModalS2SelectedTime = '09:00 AM EST'
        service2BookingObj.appointment_time = '09:00 AM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '13:30') {
        bookingModalS2SelectedTime = '09:30 AM EST'
        service2BookingObj.appointment_time = '09:30 AM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '14:00') {
        bookingModalS2SelectedTime = '10:00 AM EST'
        service2BookingObj.appointment_time = '10:00 AM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '14:30') {
        bookingModalS2SelectedTime = '10:30 AM EST'
        service2BookingObj.appointment_time = '10:30 AM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '15:00') {
        bookingModalS2SelectedTime = '11:00 AM EST'
        service2BookingObj.appointment_time = '11:00 AM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '15:30') {
        bookingModalS2SelectedTime = '11:30 AM EST'
        service2BookingObj.appointment_time = '11:30 AM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '16:00') {
        bookingModalS2SelectedTime = '12:00 PM EST'
        service2BookingObj.appointment_time = '12:00 PM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '16:30') {
        bookingModalS2SelectedTime = '12:30 PM EST'
        service2BookingObj.appointment_time = '12:30 PM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '17:00') {
        bookingModalS2SelectedTime = '01:00 PM EST'
        service2BookingObj.appointment_time = '01:00 PM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '17:30') {
        bookingModalS2SelectedTime = '01:30 PM EST'
        service2BookingObj.appointment_time = '01:30 PM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '18:00') {
        bookingModalS2SelectedTime = '02:00 PM EST'
        service2BookingObj.appointment_time = '02:00 PM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '18:30') {
        bookingModalS2SelectedTime = '02:30 PM EST'
        service2BookingObj.appointment_time = '02:30 PM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '19:00') {
        bookingModalS2SelectedTime = '03:00 PM EST'
        service2BookingObj.appointment_time = '03:00 PM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '19:30') {
        bookingModalS2SelectedTime = '03:30 PM EST'
        service2BookingObj.appointment_time = '03:30 PM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '20:00') {
        bookingModalS2SelectedTime = '04:00 PM EST'
        service2BookingObj.appointment_time = '04:00 PM EST'
      } else if (service2BookingObj.start_at.slice(11, 16) === '20:30') {
        bookingModalS2SelectedTime = '04:30 PM EST'
        service2BookingObj.appointment_time = '04:30 PM EST'
      }   

    
      bookingModalS2SelectedDateTime.textContent = `${service2BookingObj.start_at.slice(5, 7)}/${service2BookingObj.start_at.slice(8, 10)}/${service2BookingObj.start_at.slice(0, 4)} @ ${bookingModalS2SelectedTime}`

      editBookingModalS2ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
      editBookingModalS2ConfirmDetails.className = 'bi bi-pencil-square right1rem'
    })

    // booking modal s2 change phone number checkbox
    bookingModalS2ChangeNumberCheckbox.addEventListener('click', () => {
      if (bookingModalS2ChangeNumberCheckbox.checked) {
        // display change number divs
        bookingModalS2ChangePhone.className = 'booking-modal-s2-change-phone'
        bookingModalS2ChangePhoneCaution.className = 'booking-modal-s2-change-phone-caution'

        // get users email from storage -- display on div
        // updateUserPhoneMongoDbObj.address.address_line_1 = JSON.parse(localStorage.getItem('currentUser')).address.address_line_1
        // updateUserPhoneMongoDbObj.address.administrative_district_level_1 = JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1
        // updateUserPhoneMongoDbObj.address.locality = JSON.parse(localStorage.getItem('currentUser')).address.locality
        // updateUserPhoneMongoDbObj.address.postal_code = JSON.parse(localStorage.getItem('currentUser')).address.postal_code
        updateService2PhoneBookingObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
        
        console.log(updateService2PhoneBookingObj)

      } else {
        // hide change number divs
        bookingModalS2ChangePhone.className = 'booking-modal-s2-change-phone hide-container'
        bookingModalS2ChangePhoneCaution.className = 'booking-modal-s2-change-phone-caution hide-container'
      }

      // change phone number submit btn clicked
      bookingModalS2ChangePhoneBtn.addEventListener('click', () => {
        // check that bookingModalS2NextBtn.className = 'booking-modal-s2-next' matches regex
        if (bookingModalS2ChangePhoneInput.value.match(myApp.phoneCheck1) || bookingModalS2ChangePhoneInput.value.match(myApp.phoneCheck2) || bookingModalS2ChangePhoneInput.value.match(myApp.phoneCheck3) || bookingModalS2ChangePhoneInput.value.match(myApp.phoneCheck4) || bookingModalS2ChangePhoneInput.value.match(myApp.phoneCheck5) || bookingModalS2ChangePhoneInput.value.match(myApp.phoneCheck6)) {
          updateService2PhoneBookingObj.phone_number = bookingModalS2ChangePhoneInput.value
          bookingModalS2ChangePhoneError.className = 'booking-modal-s2-change-phone-input-error hide-container'
          bookingModalS2ChangePhoneInput.className = 'input-valid-clear'

          // filter/clean the phone value
          let filteredCleanPhoneValue = bookingModalS2ChangePhoneInput.value.replace(myApp.filterPhone, '')     

          if (filteredCleanPhoneValue !== JSON.parse(localStorage.getItem('currentUser')).phone_number) {
            updateService2PhoneBookingObj.phone_number = filteredCleanPhoneValue
            service2BookingObj.phone_number = filteredCleanPhoneValue

            if (bookingModalS2ChangePhoneInput.className === 'input-valid-clear') {

              bookingModalS2ChangePhone.className = 'booking-modal-s2-change-phone hide-container'
              bookingModalS2ChangePhoneCaution.className = 'booking-modal-s2-change-phone-caution hide-container'
              bookingModalS2ChangePhoneLoading.className = 'booking-modal-s2-change-phone-loading'

              // if so update the new number in MongoDB
              async function updateMongoDBPhoneNumber() {
                // req & res
                const update_phone_number_mongodb_req = await fetch(`/updatePhoneNumberMongoDB/${JSON.stringify(updateService2PhoneBookingObj)}`, { method: 'post' })
                const update_phone_number_mongodb_res = await update_phone_number_mongodb_req.json()

                console.log(update_phone_number_mongodb_res)

                // change the current number to the new number (confirm details)
                bookingModalS2CurrentPhoneValue.textContent = `${filteredCleanPhoneValue.slice(0, 3)}-${filteredCleanPhoneValue.slice(3, 6)}-${filteredCleanPhoneValue.slice(6, 10)}`

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
                    updateService2PhoneBookingObj.customer_id = get_all_users_square_res.customers[i].id
                    // service1BookingObj.customer_id = get_all_users_square_res.customers[i].id
                    console.log(updateService2PhoneBookingObj)
                  }
                }
                  // send new number to Square Api
                async function updateSquarePhoneNumber() {
                  // req & res
                  const update_phone_number_square_req = await fetch(`/updatePhoneSquare/${JSON.stringify(updateService2PhoneBookingObj)}`, { method: 'put' })
                  const update_phone_number_square_res = await update_phone_number_square_req.json()
    
                  console.log(update_phone_number_square_res)
    
                  // change the current number to the new number (confirm details)
                  bookingModalS2CurrentPhoneValue.textContent = `${filteredCleanPhoneValue.slice(0, 3)}-${filteredCleanPhoneValue.slice(3, 6)}-${filteredCleanPhoneValue.slice(6, 10)}`

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
                    bookingModalS2ChangePhoneLoading.className = 'booking-modal-s2-change-phone-loading hide-container'
                    bookingModalS2ChangePhoneSuccess.className = 'booking-modal-s2-change-phone-success'

                    setTimeout(() => {
                      bookingModalS2ChangePhoneSuccess.className = 'booking-modal-s2-change-phone-success hide-container'
                      bookingModalS2ChangePhone.className = 'booking-modal-s2-change-phone hide-container'
                      bookingModalS2ChangePhoneCaution.className = 'booking-modal-s2-change-phone-caution hide-container'
    
                      bookingModalS2ChangeNumberCheckbox.checked = false
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
              // !bookingModalS2CurrentPhone.checked
            }
          } else {
            // show the error div
            bookingModalS2ChangePhoneError.className = 'booking-modal-s2-change-phone-input-error'

            bookingModalS2ChangePhoneError.innerHTML = `<h1>This number already exists</h1>`
            // "this phone number already exists"
          }
          

        } else {
          // show the phone error divs
          bookingModalS2ChangePhoneError.className = 'booking-modal-s2-change-phone-input-error'
          bookingModalS2ChangePhoneError.innerHTML = `<h1>This number is invalid</h1>`
          bookingModalS2ChangePhoneInput.className = 'booking-modal-s2-change-phone-input-error input-invalid'
        }
      })
    })
  }

  bookingModalNextBtn() {
    // next btn clicked
    bookingModalS2NextBtn.addEventListener('click', () => {
      bookingModalS2Counter++

      // counter on "Select an Agent"
      if (bookingModalS2Counter === 1 && bookingModalS2AgentsSelected) {
        bookingModalS2Agents.className = 'booking-modal-s2-right hide-container'
        bookingModalS2Location.className = 'booking-modal-s2-right'
        bookingModalS2DateTime.className = 'booking-modal-s2-right hide-container'
        bookingModalS2ConfirmDetails.className = 'booking-modal-s2-right hide-container'

        bookingModalS2Step1.className = ''
        bookingModalS2Step2.className = 'step-selected'
        bookingModalS2Step3.className = ''
        bookingModalS2Step4.className = ''

        this.enterLocation()

        // if "location" has been selected keep the footer next btn activated
        if (bookingModalS2LocationSelected) {
          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
        } else {
          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
          bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
        }

        // activate the "edit" locations icon
        editBookingModalS2LocationNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editBookingModalS2Location.className = 'bi bi-pencil-square right1rem'

      } else if (bookingModalS2Counter === 1 && !bookingModalS2AgentsSelected) {
        console.log('Please select an agent.')
        bookingModalS2Counter = 0
      }

      // counter on "Select a Location"
      if (bookingModalS2Counter === 2 && bookingModalS2LocationSelected) {
        bookingModalS2Agents.className = 'booking-modal-s2-right hide-container'
        bookingModalS2Location.className = 'booking-modal-s2-right hide-container'
        bookingModalS2DateTime.className = 'booking-modal-s2-right'
        bookingModalS2ConfirmDetails.className = 'booking-modal-s2-right hide-container'

        bookingModalS2Step1.className = ''
        bookingModalS2Step2.className = ''
        bookingModalS2Step3.className = 'step-selected'
        bookingModalS2Step4.className = ''

        this.selectDateTime()

        // if "date" & "time" has been selected already fill the footer next btn
        if (bookingModalS2DateSelected && bookingModalS2TimeSelected) {
          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null hide-container'
          bookingModalS2NextBtn.className = 'booking-modal-s2-next'
        } else {
          bookingModalS2NextNullBtn.className = 'booking-modal-s2-next-null'
          bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'
        }

        editBookingModalS2DateTimeNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editBookingModalS2DateTime.className = 'bi bi-pencil-square right1rem'
      } else if (bookingModalS2Counter === 2 && !bookingModalS2LocationSelected) {
        console.log('Please select a location')
        bookingModalS2Counter = 1
      }

      // counter on "Select Date & Time"
      if (bookingModalS2Counter === 3 && bookingModalS2DateSelected && bookingModalS2TimeSelected) {
        bookingModalS2Agents.className = 'booking-modal-s2-right hide-container'
        bookingModalS2Location.className = 'booking-modal-s2-right hide-container'
        bookingModalS2DateTime.className = 'booking-modal-s2-right hide-container'
        bookingModalS2ConfirmDetails.className = 'booking-modal-s2-right'

        bookingModalS2Step1.className = ''
        bookingModalS2Step2.className = ''
        bookingModalS2Step3.className = ''
        bookingModalS2Step4.className = 'step-selected'

        this.confirmDetails()

        editBookingModalS2ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editBookingModalS2ConfirmDetails.className = 'bi bi-pencil-square right1rem'

        bookingModalS2NextBtn.className = 'booking-modal-s2-next hide-container'

        // display current phone number
        bookingModalS2CurrentPhoneValue.textContent = `${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(0, 3)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(3, 6)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(6, 10)}`

        // display customer reciept 
          // selected "service"
        bookingModalS2SelectedService.textContent = `${bookingModalS2BodyLeftTitle.textContent}`

          // selected "agent"
        for (let i = 0; i < bookingModalS2BodyRightAgentsBox.children.length; i++) {
          if (bookingModalS2BodyRightAgentsBox.children[i].className === 'booking-modal-s2-agent-selected') {
            bookingModalS2SelectedAgent.textContent = bookingModalS2BodyRightAgentsBox.children[i].textContent
          }
        }
          // selected "location"
          console.log(bookingModalS2CustomerLocationsBox.children[0].style.backgroundColor) 
          const regex = /[\s\n]/g
        for (let i = 0; i < bookingModalS2CustomerLocationsBox.children.length; i++) {
          if (bookingModalS2CustomerLocationsBox.children[i].style.backgroundColor === 'rgb(240, 94, 124)') {
            console.log('Go')
            bookingModalS2SelectedLocation.textContent = bookingModalS2CustomerLocationsBox.children[i].textContent
          }
        }
        
          // selected "date and time"
        let bookingModalS2SelectedTime

        if (service2BookingObj.start_at.slice(11, 16) === '12:00') {
          bookingModalS2SelectedTime = '08:00 AM EST'
          service2BookingObj.appointment_time = '08:00 AM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '12:30') {
          bookingModalS2SelectedTime = '08:30 AM EST'
          service2BookingObj.appointment_time = '08:30 AM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '13:00') {
          bookingModalS2SelectedTime = '09:00 AM EST'
          service2BookingObj.appointment_time = '09:00 AM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '13:30') {
          bookingModalS2SelectedTime = '09:30 AM EST'
          service2BookingObj.appointment_time = '09:30 AM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '14:00') {
          bookingModalS2SelectedTime = '10:00 AM EST'
          service2BookingObj.appointment_time = '10:00 AM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '14:30') {
          bookingModalS2SelectedTime = '10:30 AM EST'
          service2BookingObj.appointment_time = '10:30 AM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '15:00') {
          bookingModalS2SelectedTime = '11:00 AM EST'
          service2BookingObj.appointment_time = '11:00 AM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '15:30') {
          bookingModalS2SelectedTime = '11:30 AM EST'
          service2BookingObj.appointment_time = '11:30 AM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '16:00') {
          bookingModalS2SelectedTime = '12:00 PM EST'
          service2BookingObj.appointment_time = '12:00 PM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '16:30') {
          bookingModalS2SelectedTime = '12:30 PM EST'
          service2BookingObj.appointment_time = '12:30 PM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '17:00') {
          bookingModalS2SelectedTime = '01:00 PM EST'
          service2BookingObj.appointment_time = '01:00 PM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '17:30') {
          bookingModalS2SelectedTime = '01:30 PM EST'
          service2BookingObj.appointment_time = '01:30 PM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '18:00') {
          bookingModalS2SelectedTime = '02:00 PM EST'
          service2BookingObj.appointment_time = '02:00 PM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '18:30') {
          bookingModalS2SelectedTime = '02:30 PM EST'
          service2BookingObj.appointment_time = '02:30 PM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '19:00') {
          bookingModalS2SelectedTime = '03:00 PM EST'
          service2BookingObj.appointment_time = '03:00 PM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '19:30') {
          bookingModalS2SelectedTime = '03:30 PM EST'
          service2BookingObj.appointment_time = '03:30 PM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '20:00') {
          bookingModalS2SelectedTime = '04:00 PM EST'
          service2BookingObj.appointment_time = '04:00 PM EST'
        } else if (service2BookingObj.start_at.slice(11, 16) === '20:30') {
          bookingModalS2SelectedTime = '04:30 PM EST'
          service2BookingObj.appointment_time = '04:30 PM EST'
        }  

        bookingModalS2SelectedDateTime.textContent = `${service2BookingObj.start_at.slice(5, 7)}/${service2BookingObj.start_at.slice(8, 10)}/${service2BookingObj.start_at.slice(0, 4)} @ ${bookingModalS2SelectedTime}`

        editBookingModalS2ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editBookingModalS2ConfirmDetails.className = 'bi bi-pencil-square right1rem'

        // price 
        bookingModalS2SelectedPrice.textContent = service2BookingObj.service_price
        bookingModalS2CardBtnPrice.textContent = `Pay ${service2BookingObj.service_price}`

      } else if (bookingModalS2Counter === 3 && !bookingModalS2DateSelected || bookingModalS2Counter === 3 && !bookingModalS2TimeSelected) {
        console.log('Please select both a date and time.')
        bookingModalS2Counter = 2
      }

    })
  }

  createBooking() {
    // if reciept checkbox clicked show payment div
    bookingModalS2InfoCorrectCheckbox.addEventListener('click', () => {
      if (bookingModalS2InfoCorrectCheckbox.checked) {
        bookingModalS2PaymentsContainer.className = 'booking-modal-s2-payments-container'
        const bookingModalS2PayBtn = document.getElementById('booking-modal-s2-card-button')

        bookingModalS2PayBtn.addEventListener('click', () => {
          // make sure receipt checkbox is selected
          if (bookingModalS2InfoCorrectCheckbox.checked) {
            let paymentStatus = document.getElementById('booking-modal-s2-payment-status-container')
            paymentStatus.className = ''
    
            // hide payment form
            // bookingModalS2PaymentForm.className = 'hide-container'
            // show lodaing payment
            bookingModalS2LoadingPayment.className = 'booking-modal-s2-loading-payment'                       
    
            const paymentVaild = setInterval(() => {
              if (paymentStatus.className === 'is-failure') {
                // hide loading payment box
                bookingModalS2LoadingPayment.className = 'booking-modal-s2-loading-payment hide-container'
                // show payment form
                bookingModalS2PaymentForm.className = ''
                clearInterval(paymentVaild)
              } else if (paymentStatus.className === 'is-success') {
                if (JSON.parse(localStorage.getItem('payment-response')).payment.status === "COMPLETED") {
                  // hide loading payment box
                  bookingModalS2LoadingPayment.className = 'booking-modal-s2-loading-payment hide-container'
                  // show payment form
                  bookingModalS2PaymentForm.className = ''
                  // give margin to payment success div
                  bookingModalS2LoadingPayment.style.marginBottom = '2rem'
                  bookingModalS2Policy1.style.marginTop = '2rem'

                  console.log(service2BookingObj)

                  // hide confirm details div
                  bookingModalS2ConfirmDetailsContainer.className = 'booking-modal-s2-body-right-confirm-details-container hide-container'
                  // show loading booking container
                  bookingModalS2Loading.className = 'booking-modal-s2-confirm-details-loading'
                  // do the following...

                  // create the booking --> Square Api
                  async function createBooking() {
                    // req & res
                    const create_booking_req = await fetch(`/createBooking/${JSON.stringify(service2BookingObj)}`, { method: 'post' })
                    const create_booking_res = await create_booking_req.json()
                    console.log(create_booking_res)

                    if (create_booking_res.booking) {
                      // send both email and text confirmation

                      // email booking confirmation
                      async function emailBooking() {
                        // req & res
                        const send_email_booking_req = await fetch(`/emailBooking/${JSON.stringify(service2BookingObj)}`)
                        const send_email_booking_res = await send_email_booking_req.json()
                        console.log(send_email_booking_res)
                      }
                        emailBooking()
                          .then(() => { console.log('the emailBookng() has been sent to the express server') })
                          .catch((error) => { console.log(error) })

                      // text booking confirmation
                      async function textBooking() {
                        // req & res
                        const send_text_booking_req = await fetch(`/textBooking/${JSON.stringify(service2BookingObj)}`, { method: 'POST' })
                        const send_text_booking_res = await send_text_booking_req.json()
                        console.log(send_text_booking_res)

                        if (send_text_booking_res) {
                          // when done show the booking complete div
                          bookingModalS2Loading.className = 'booking-modal-s2-confirm-details-loading hide-container'
                          bookingModalS2LoadingSuccess.className = 'booking-modal-s2-confirm-details-success'
                          console.log('this is the service2BookingObj duration_minutes', service2BookingObj)
                          if (service2BookingObj.duration_minutes / 60 < 1) {
                            bookingModalS2LoadingSuccess.innerHTML = 
                            `
                            <div class="booking-modal-s2-loading-success"></div>
                            <h1>Thank you for booking with us!</h1>
                            <p>Please check your email and phone for your booking details.</p>
                            <p>Talk to you soon!</p>
                            <p>&#128515;</p>
                            `
                            // refresh the page
                            setTimeout(() => {
                              // myApp.bookingModalS2.className = 'booking-modal-s2 hide-container'
                              location.reload()
                            }, 8000)
                          } else if (service2BookingObj.duration_minutes / 60 === 1) {
                            bookingModalS2LoadingSuccess.innerHTML =
                            `
                            <div class="booking-modal-s2-loading-success"></div>
                            <h1>Thank you for booking with us!</h1>
                            <p>Please check your email and phone for your booking details.</p>
                            <p>See you soon!</p>
                            <p>&#128515;</p>
                            `

                            // refresh the page
                            setTimeout(() => {
                              // myApp.bookingModalS2.className = 'booking-modal-s2 hide-container'
                              location.reload()
                            }, 8000)
                          } else if (service2BookingObj.duration_minutes / 60 > 1) {
                            bookingModalS2LoadingSuccess.innerHTML =
                            `
                            <div class="booking-modal-s2-loading-success"></div>
                            <h1>Thank you for booking with us!</h1>
                            <p>Please check your email and phone for your booking details.</p>
                            <p>See you soon!</p>
                            <p>&#128515;</p>
                            `

                            // refresh the page
                            setTimeout(() => {
                              // myApp.sbookingModalS2.className = 'booking-modal-s2 hide-container'
                              location.reload()
                            }, 8000)
                          }
                        }
                      }
                        textBooking()
                          .then(() => { console.log('textBooking() has been sent to the express server') })
                          .catch((error) => { console.log(error) })
                    }
                  }
                    createBooking()
                      .then(() => { console.log('createBooking() has been sent to express server') })
                      .catch((error) => { console.log(error) })  



                  clearInterval(paymentVaild)
                } else if (JSON.parse(localStorage.getItem('payment-response')).payment.status === "FAILED") {
                  // hide loading payment box
                  bookingModalS2LoadingPayment.className = 'booking-modal-s2-loading-payment hide-container'
                  // show payment form
                  bookingModalS2PaymentForm.className = ''
                  // input-invalid all payment fields & show error message 
                  clearInterval(paymentVaild)
                }
              }
            }, 500)
          } else {
            bookingModalS2InfoCorrectCheckbox.className = 'input-invalid'
          }
        })
      } else {
        bookingModalS2PaymentsContainer.className = 'booking-modal-s2-payments-container hide-container'
      }
    })
  }

  closeModal() {
    bookingModalS2Close.addEventListener('click', () => {
      console.log('ive been clicked on')
      bookingModalS2.className = 'booking-modal-s2 hide-container'
    })
  
    document.addEventListener('click', (event) => { 
      if (event.target === bookingModalS2) {
        bookingModalS2.className = 'booking-modal-s2 hide-container'
      }
    })
  }
}

const service2Component = new Service2Component()

module.exports = { service2Component }
