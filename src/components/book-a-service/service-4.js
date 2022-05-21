const myApp = require('../../index.js')


let bookingModalS4Date = new Date()

const bookingModalS4NextBtnCal = document.querySelector('.booking-modal-s4-next-cal')
const bookingModalS4PrevBtnCal = document.querySelector('.booking-modal-s4-prev-cal')

let bookingModalS4NextBtnCalCounter = 0

const bookingModalS4RenderCalendar = () => {
  bookingModalS4Date.setDate(1)

  const monthDays = document.querySelector(".booking-modal-s4-days")
  monthDays.innerHTML = ``

  const lastDay = new Date(
    bookingModalS4Date.getFullYear(),
    bookingModalS4Date.getMonth() + 1,
    0
  ).getDate()

  const prevLastDay = new Date(
    bookingModalS4Date.getFullYear(),
    bookingModalS4Date.getMonth(),
    0
  ).getDate()

  const firstDayIndex = bookingModalS4Date.getDay();

  const lastDayIndex = new Date(
    bookingModalS4Date.getFullYear(),
    bookingModalS4Date.getMonth() + 1,
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

  document.querySelector(".booking-modal-s4-date h1").innerHTML = months[bookingModalS4Date.getMonth()]

  document.querySelector(".booking-modal-s4-date p").innerHTML = new Date().toDateString()

  let days = ""

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      bookingModalS4Date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="booking-modal-s4-today">${i}</div>`
    } else {
      days += `<div class='booking-modal-s4-cal-days'>${i}</div>`
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days
  }
}

bookingModalS4RenderCalendar()

const bookingModalS4 = document.getElementById('booking-modal-s4')
const bookingModalS4Close = document.getElementById('booking-modal-s4-close')
const bookingModalS4BodyLeft = document.getElementById('booking-modal-s4-body-left')
const bookingModalS4BodyLeftTitle = document.getElementById('booking-modal-s4-body-left-title')

const bookingModalS4Step1 = document.getElementById('booking-modal-s4-step1')
const editbookingModalS4Agents = document.getElementById('edit-bm-s4-agents')
const bookingModalS4Agents = document.getElementById('booking-modal-s4-agents')
let bookingModalS4BodyRightAgentsBox = document.getElementById('booking-modal-s4-agents-box')
const bookingModalS4AgentsPickedIcon = document.getElementById('bm-s4-agents-picked-icon')
let bookingModalS4AgentsSelected = false

const bookingModalS4Step2 = document.getElementById('booking-modal-s4-step2')
const editbookingModalS4LocationNull = document.getElementById('edit-bm-4-location-null')
const editbookingModalS4Location = document.getElementById('edit-bm-4-location')
const bookingModalS4LocationPickedIcon = document.getElementById('bm-4-location-picked-icon')
let bookingModalS4LocationSelected = false

const bookingModalS4Step3 = document.getElementById('booking-modal-s4-step3')
const editbookingModalS4DateTimeNull = document.getElementById('edit-bm-s4-datetime-null')
const editbookingModalS4DateTime = document.getElementById('edit-bm-s4-datetime')
const bookingModalS4DateTimePickedIcon = document.getElementById('bm-4-datetime-picked-icon')
let bookingModalS4DateSelected = false
let bookingModalS4TimeSelected = false
let bookingModalS4DateTimeSelected

const bookingModalS4Step4 = document.getElementById('booking-modal-s4-step4')
const editbookingModalS4ConfirmDetailsNull = document.getElementById('edit-bm-confirm-details-null')
const editbookingModalS4ConfirmDetails = document.getElementById('edit-bm-confirm-details')
const bookingModalS4ConfirmDetailsPickedIcon = document.getElementById('bm-confirm-details-picked-icon')
let bookingModalS4ConfirmDetailsSelected = false


// const bookingModalS4BodyRightAgents = document.getElementById('booking-modal-s4-body-right-agents')


const bookingModalS4Location = document.getElementById('booking-modal-s4-location')
// const bookingModalS4BodyRightLocations = document.getElementById('booking-modal-s4-body-right-location')
const bookingModalS4NewLocationCheckbox = document.getElementById('booking-modal-s4-new-location-checkbox')
let bookingModalS4NewLocationCheckboxCounter = 0
const bookingModalS4CustomerLocationsBox = document.getElementById('booking-modal-s4-customer-locations-box')
let bookingModalS4NewCustomerLocationBox = document.getElementById('booking-modal-s4-new-location-box')
const bookingModalS4NewCustomerLocationInputTypeError = document.getElementById('booking-modal-s4-new-location-box-input-type-error')
const bookingModalS4NewCustomerLocationInputType = document.getElementById('booking-modal-s4-new-location-box-input-type')
const bookingModalS4NewCustomerLocationInputAddressError = document.getElementById('booking-modal-s4-new-location-box-input-address-error')
const bookingModalS4NewCustomerLocationInputAddress = document.getElementById('booking-modal-s4-new-location-box-input-address')
const bookingModalS4NewCustomerLocationInputStateError = document.getElementById('booking-modal-s4-new-location-box-input-state-error')
const bookingModalS4NewCustomerLocationInputState = document.getElementById('booking-modal-s4-new-location-box-input-state')
const bookingModalS4NewCustomerLocationInputCityError = document.getElementById('booking-modal-s4-new-location-box-input-city-error')
const bookingModalS4NewCustomerLocationInputCity = document.getElementById('booking-modal-s4-new-location-box-input-city')
const bookingModalS4NewCustomerLocationInputZipCodeError = document.getElementById('booking-modal-s4-new-location-box-input-zipcode-error')
const bookingModalS4NewCustomerLocationInputZipCode = document.getElementById('booking-modal-s4-new-location-box-input-zipcode')
const bookingModalS4NewCustomerLocationSubmitBtn = document.getElementById('booking-modal-s4-new-location-submit-btn')
let bookingModalS4NewCustomerLocationObj = {
email_address: ''
}

const bookingModalS4DateTime = document.getElementById('booking-modal-s4-datetime')
// const bookingModalS4BodyRightDateTime = document.getElementById('booking-modal-s4-body-right-datetime')
let bookingModalS4BodyRightDateTimeBox = document.getElementById('booking-modal-s4-datetime-box')
const bookingModalS4BodyRightCurrentTimeTitle = document.getElementById('booking-modal-s4-current-time-title')
let bookingModalS4CalToday = document.querySelector('.booking-modal-s4-today')
let bookingModalS4CalDays = document.querySelectorAll('.booking-modal-s4-cal-days')

const bookingModalS4ConfirmDetails = document.getElementById('booking-modal-s4-confirm-details')
const bookingModalS4ConfirmDetailsTitle = document.getElementById('booking-modal-s4-confirm-details-title')
const bookingModalS4ConfirmDetailsContainer = document.getElementById('booking-modal-s4-body-right-confirm-details-container')
const bookingModalS4ChangeNumberCheckbox = document.getElementById('booking-modal-s4-change-number-checkbox')
const bookingModalS4CurrentPhoneContainer = document.getElementById('booking-modal-s4-current-phone-container')
const bookingModalS4CurrentPhoneValue = document.getElementById('booking-modal-s4-current-phone-value')
const bookingModalS4ChangePhone = document.getElementById('booking-modal-s4-change-phone')
const bookingModalS4ChangePhoneError = document.getElementById('booking-modal-s4-change-phone-error')
const bookingModalS4ChangePhoneInput = document.getElementById('booking-modal-s4-change-phone-input')
const bookingModalS4ChangePhoneBtn = document.getElementById('booking-modal-s4-change-phone-input-btn')
const bookingModalS4ChangePhoneCaution = document.getElementById('booking-modal-s4-change-phone-caution')
const bookingModalS4ChangePhoneLoading = document.getElementById('booking-modal-s4-change-phone-loading')
const bookingModalS4ChangePhoneSuccess = document.getElementById('booking-modal-s4-change-phone-success')
const bookingModalS4InfoCorrectCheckbox = document.getElementById('booking-modal-s4-info-correct-checkbox')
const bookingModalS4InfoCorrectRequireIcon = document.getElementById('booking-modal-s4-info-correct-require-icon')
const bookingModalS4SelectedService = document.getElementById('booking-modal-s4-selected-service')
const bookingModalS4SelectedAgent = document.getElementById('booking-modal-s4-selected-agent')
const bookingModalS4SelectedLocation = document.getElementById('booking-modal-s4-selected-location')
const bookingModalS4SelectedDateTime = document.getElementById('booking-modal-s4-selected-datetime')
const bookingModalS4SelectedPrice = document.getElementById('booking-modal-s4-selected-price')
const bookingModalS4PayBtnPrice = document.getElementById('booking-modal-s4-card-button')

const bookingModalS4PaymentsContainer = document.getElementById('booking-modal-s4-payments-container')
const bookingModalS4PaymentForm = document.getElementById('booking-modal-s4-payment-form')
const bookingModalS4LoadingPayment = document.getElementById('booking-modal-s4-loading-payment')
// const bookingModalS4BookingLoading = document.getElementById('booking-modal-s4-confirm-details-loading')
// const bookingModalS4BookingSuccess = document.getElementById('booking-modal-s4-confirm-details-success')
// const bookingModalS4PaymentStatus = document.getElementById('booking-modal-s4-payment-status-container')
const bookingModalS4Policy1 = document.getElementById('booking-modal-s4-policy1')

const bookingModalS4Loading = document.getElementById('booking-modal-s4-confirm-details-loading')
const bookingModalS4LoadingSuccess = document.getElementById('booking-modal-s4-confirm-details-success') 

const bookingModalS4BackBtn = document.getElementById('booking-modal-s4-back')
const bookingModalS4NextNullBtn = document.getElementById('booking-modal-s4-next-null') 
const bookingModalS4NextBtn = document.getElementById('booking-modal-s4-next')

const bookingModalS4Footer = document.getElementById('booking-modal-s4-footer')

let bookingModalS4Counter = 0

let service4NewLocationObj = {
name: '',
address_line_1: '',
administrative_district_level_1: '',
locality: '',
postal_code: ''
}

const service4AvailabilityObj = {
start_at: '',
end_at: '',
location_id: '',
service_variation_id: ''
}

let updateservice4PhoneBookingObj = {
  customer_id: '',
  email_address: '',
  phone_number: ''
}

let service4BookingObj = {
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


class Service4Component {
  constructor() {
    
    this.bookingModalNextBtn = this.bookingModalNextBtn()
    this.createBooking = this.createBooking()
    this.closeModal = this.closeModal()
  }

  selectAgent() {
    // edit agent click
    editbookingModalS4Agents.addEventListener('click', () => {
      // right changes
      bookingModalS4Agents.className = 'booking-modal-s4-right'
      bookingModalS4Location.className = 'booking-modal-s4-right hide-container'
      bookingModalS4DateTime.className = 'booking-modal-s4-right hide-container'
      bookingModalS4ConfirmDetails.className = 'booking-modal-s4-right hide-container'

      bookingModalS4Step1.className = 'step-selected'
      bookingModalS4Step2.className = ''
      bookingModalS4Step3.className = ''
      bookingModalS4Step4.className = ''

      bookingModalS4Counter = 0

      // footer changes
      if (bookingModalS4AgentsSelected) {
        bookingModalS4NextBtn.className = 'booking-modal-s4-next'
        bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
      } else {
        bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
        bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
      }
    })

    // if user is on select an "agent"
    if (myApp.companyOptions4Bool && myApp.bookingModalS4.className === 'booking-modal-s4') {

      // select the 1st booking modal step
      bookingModalS4Step1.className = 'step-selected'

      // set early values for service booking object properties
      service4BookingObj.duration_minutes = myApp.companyServicesObj[`${bookingModalS4BodyLeftTitle.textContent}`].duration_minutes
      service4BookingObj.service_variation_id = myApp.companyServicesObj[`${bookingModalS4BodyLeftTitle.textContent}`].service_variation_id
      service4BookingObj.service_variation_version = myApp.companyServicesObj[`${bookingModalS4BodyLeftTitle.textContent}`].service_variation_version
      service4BookingObj.service_price = myApp.companyServicesObj[`${bookingModalS4BodyLeftTitle.textContent}`].service_price
      service4BookingObj.service_name = bookingModalS4BodyLeftTitle.textContent
      service4BookingObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
      service4BookingObj.customer_id = JSON.parse(localStorage.getItem('currentUser')).id
      service4BookingObj.phone_number = JSON.parse(localStorage.getItem('currentUser')).phone_number                             
      service4BookingObj.given_name = JSON.parse(localStorage.getItem('currentUser')).given_name
      service4BookingObj.family_name = JSON.parse(localStorage.getItem('currentUser')).family_name

      // get company agents
      async function getCompanyAgents() {
        // req & res
        const get_company_agents_req = await fetch('/getCompanyAgents', { method: 'get' }) 
        const get_company_agents_res = await get_company_agents_req.json()

        console.log(get_company_agents_res)

        // take all agents and display in bookingModalS4BodyRightAgentsBox
        for (let i = 0; i < get_company_agents_res.team_member_booking_profiles.length; i++) {
          let newH1Element = document.createElement('h1')
          newH1Element.textContent = get_company_agents_res.team_member_booking_profiles[i].display_name
          bookingModalS4BodyRightAgentsBox.appendChild(newH1Element)
        }

        // if an agent is selected
        for (let i = 0; i < bookingModalS4BodyRightAgentsBox.children.length; i++) {
          bookingModalS4BodyRightAgentsBox.children[i].addEventListener('click', () => {   
            for (let j = 0; j < bookingModalS4BodyRightAgentsBox.children.length; j++) {
              bookingModalS4BodyRightAgentsBox.children[j].className = ''
            }
            bookingModalS4BodyRightAgentsBox.children[i].className = 'booking-modal-s4-agent-selected'
            bookingModalS4AgentsPickedIcon.className = 'bi bi-check-circle-fill'

            // hide null continue btn -- show pink color continue btn
            bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
            bookingModalS4NextBtn.className = 'booking-modal-s4-next'
            
            console.log(bookingModalS4NextNullBtn.className)
            console.log(bookingModalS4NextBtn.className)
            
            service4BookingObj.team_member_id = get_company_agents_res.team_member_booking_profiles[i].team_member_id 
            service4BookingObj.employee_name = bookingModalS4BodyRightAgentsBox.children[i].textContent
            bookingModalS4AgentsSelected = true
            console.log(service4BookingObj)
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
    editbookingModalS4Location.addEventListener('click', () => {
      console.log('I have been clicked!')
      // right changes
      bookingModalS4Agents.className = 'booking-modal-s4-right hide-container'
      bookingModalS4Location.className = 'booking-modal-s4-right'
      bookingModalS4DateTime.className = 'booking-modal-s4-right hide-container'
      bookingModalS4ConfirmDetails.className = 'booking-modal-s4-right hide-container'

      bookingModalS4Step1.className = ''
      bookingModalS4Step2.className = 'step-selected'
      bookingModalS4Step3.className = ''
      bookingModalS4Step4.className = ''

      bookingModalS4Counter = 1

      // footer changes
      if (bookingModalS4LocationSelected) {
        bookingModalS4NextBtn.className = 'booking-modal-s4-next'
        bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
      } else {
        bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
        bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
      }
    })

    let selectedLocationObj = {
      type_name: '',
      address_line_1: '',
      administrative_district_level_1: '',
      locality: '',
      postal_code: ''
    }

    let distanceMatrixObj = {
      userLat: '',
      userLong: '',
      companyLat: '',
      companyLong: ''
    }

    // if user is on select "location"
    if (myApp.companyOptions4Bool && bookingModalS4Location.className === 'booking-modal-s4-right') {
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
          bookingModalS4CustomerLocationsBox.appendChild(newDivElement)
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
          bookingModalS4CustomerLocationsBox.appendChild(newDivElement)
        }
      }
      console.log(bookingModalS4CustomerLocationsBox.children.length)

      // delete/remove blank customer locations remaining (coming from ":" & ",")
      for (let i = 0; i < bookingModalS4CustomerLocationsBox.children.length; i++) {
        // get all the list items from all customer locations
        let newCustomerLocationDetails = bookingModalS4CustomerLocationsBox.getElementsByTagName('li')
        console.log(newCustomerLocationDetails)

        if (i === 0) { // 0
          if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
          }
        } else if (i === 1) { // 5
            if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 2) { // 10
            if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 3) { // 15
            if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 4) { // 20
            if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 5) { // 25
            if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 6) { // 30
            if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 7) { // 35
            if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 8) { // 40
            if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 9) { // 45
            if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 10) { // 50
            if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            } 
        }
      }

      // when a customer location is selected
      for (let i = 0; i < bookingModalS4CustomerLocationsBox.children.length; i++) {
        bookingModalS4CustomerLocationsBox.children[i].addEventListener('click', () => {
          // clear any existing customer location style already selected
          for (let j = 0; j < bookingModalS4CustomerLocationsBox.children.length; j++) {
            // clear new service 2 location obj
            service4BookingObj.name = ''
            service4BookingObj.address_line_1 = ''
            service4BookingObj.administrative_district_level_1 = ''
            service4BookingObj.locality = ''
            service4BookingObj.postal_code = ''
            bookingModalS4CustomerLocationsBox.children[j].style = ''
          }

          // get all the list items from all customer locations
          let newCustomerLocationDetails = bookingModalS4CustomerLocationsBox.getElementsByTagName('li')
          console.log(newCustomerLocationDetails)
          // console.log(newCustomerLocationDetails[0].textContent)
          console.log(bookingModalS4CustomerLocationsBox.children[i])

          // style the customer location function
          function styleSelectedLocation() {
            bookingModalS4CustomerLocationsBox.children[i].style.backgroundColor = '#f05e7c'
            bookingModalS4CustomerLocationsBox.children[i].style.color = '#ffffff'
            bookingModalS4CustomerLocationsBox.children[i].style.borderColor = '#f05e7c'
            bookingModalS4CustomerLocationsBox.children[i].style.borderRadius = '10px'  
          }

          // delete/remove blank customer locations remaining (coming from ":" & ",")
          for (let i = 0; i < bookingModalS4CustomerLocationsBox.children.length; i++) {
            // get all the list items from all customer locations
            let newCustomerLocationDetails = bookingModalS4CustomerLocationsBox.getElementsByTagName('li')
            // console.log(newCustomerLocationDetails[10].textContent)
            if (i === 0) { // 0
              if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
              } else {              
              }
            } else if (i === 1) { // 5
                if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                } else {                
                }
            } else if (i === 2) { // 10
                if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 3) { // 15
                if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 4) { // 20
                if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 5) { // 25
                if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 6) { // 30
                if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                } else {                
                }
            } else if (i === 7) { // 35
                if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 8) { // 40
                if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                } else { 
                }
            } else if (i === 9) { // 45
                if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 10) { // 50
                if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                } 
            }
          }

          // send too new service 2 location obj && unNull the continue btn
          if (i === 0) { // 0
            if (newCustomerLocationDetails[i].textContent !== '') {

              console.log('it equals love')
              // send to selected location object (for getting lat & long)
              selectedLocationObj.type_name = newCustomerLocationDetails[i].textContent
              selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 1].textContent
              selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 2].textContent
              selectedLocationObj.locality = newCustomerLocationDetails[i + 3].textContent
              selectedLocationObj.postal_code = newCustomerLocationDetails[i + 4].textContent

              // send to service 4 booking object
              service4BookingObj.name = newCustomerLocationDetails[i].textContent
              service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 1].textContent
              service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 2].textContent
              service4BookingObj.locality = newCustomerLocationDetails[i + 3].textContent
              service4BookingObj.postal_code = newCustomerLocationDetails[i + 4].textContent


              styleSelectedLocation()

              getLatLong()
                .then(() => { console.log('getLatLong() has been sent to the server') })
                .catch((error) => {console.log(error)})

              bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
              bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
              bookingModalS4NextBtn.className = 'booking-modal-s4-next'
              bookingModalS4LocationSelected = true
              console.log(service4BookingObj)
            } else {
              bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
            }
          } else if (i === 1) { // 5
              if (newCustomerLocationDetails[i + 4].textContent !== '') {

                console.log('it equals')

                selectedLocationObj.type_name = newCustomerLocationDetails[i + 4].textContent
                selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 5].textContent
                selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 6].textContent
                selectedLocationObj.locality = newCustomerLocationDetails[i + 7].textContent
                selectedLocationObj.postal_code = newCustomerLocationDetails[i + 8].textContent

                service4BookingObj.name = newCustomerLocationDetails[i + 4].textContent
                service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 5].textContent
                service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 6].textContent
                service4BookingObj.locality = newCustomerLocationDetails[i + 7].textContent
                service4BookingObj.postal_code = newCustomerLocationDetails[i + 8].textContent

                console.log(selectedLocationObj)
                styleSelectedLocation()

                getLatLong()
                  .then(() => { console.log('getLatLong() has been sent to the server') })
                  .catch((error) => {console.log(error)})

                bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                bookingModalS4LocationSelected = true
                console.log(service4BookingObj)
              } else {
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 2) { // 10
              if (newCustomerLocationDetails[i + 8].textContent !== '') {
                selectedLocationObj.type_name = newCustomerLocationDetails[i + 8].textContent
                selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 9].textContent
                selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 10].textContent
                selectedLocationObj.locality = newCustomerLocationDetails[i +11].textContent
                selectedLocationObj.postal_code = newCustomerLocationDetails[i + 12].textContent

                service4BookingObj.name = newCustomerLocationDetails[i + 8].textContent
                service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 9].textContent
                service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 10].textContent
                service4BookingObj.locality = newCustomerLocationDetails[i + 11].textContent
                service4BookingObj.postal_code = newCustomerLocationDetails[i + 12].textContent 

                styleSelectedLocation()

                getLatLong()
                  .then(() => { console.log('getLatLong() has been sent to the server') })
                  .catch((error) => {console.log(error)})

                bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                bookingModalS4LocationSelected = true
                console.log(service4BookingObj)
              } else {
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 3) { // 15
              if (newCustomerLocationDetails[i + 12].textContent !== '') {
                selectedLocationObj.type_name = newCustomerLocationDetails[i + 12].textContent
                selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 13].textContent
                selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 14].textContent
                selectedLocationObj.locality = newCustomerLocationDetails[i + 15].textContent
                selectedLocationObj.postal_code = newCustomerLocationDetails[i + 16].textContent

                service4BookingObj.name = newCustomerLocationDetails[i + 12].textContent
                service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 13].textContent
                service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 14].textContent
                service4BookingObj.locality = newCustomerLocationDetails[i + 15].textContent
                service4BookingObj.postal_code = newCustomerLocationDetails[i + 16].textContent 
                
                styleSelectedLocation()

                getLatLong()
                  .then(() => { console.log('getLatLong() has been sent to the server') })
                  .catch((error) => {console.log(error)})

                bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                bookingModalS4LocationSelected = true
                console.log(service4BookingObj)
              } else {
                console.log('peace')
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 4) { // 20
              if (newCustomerLocationDetails[i + 16].textContent !== '') {
                selectedLocationObj.type_name = newCustomerLocationDetails[i + 16].textContent
                selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 17].textContent
                selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 18].textContent
                selectedLocationObj.locality = newCustomerLocationDetails[i + 19].textContent
                selectedLocationObj.postal_code = newCustomerLocationDetails[i + 20].textContent

                service4BookingObj.name = newCustomerLocationDetails[i + 16].textContent
                service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 17].textContent
                service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 18].textContent
                service4BookingObj.locality = newCustomerLocationDetails[i + 19].textContent
                service4BookingObj.postal_code = newCustomerLocationDetails[i + 20].textContent
                styleSelectedLocation()

                getLatLong()
                  .then(() => { console.log('getLatLong() has been sent to the server') })
                  .catch((error) => {console.log(error)})

                bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                bookingModalS4LocationSelected = true
                console.log(service4BookingObj)
              } else {
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 5) { // 25
              if (newCustomerLocationDetails[i + 20].textContent !== '') {
                selectedLocationObj.type_name = newCustomerLocationDetails[i + 20].textContent
                selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 21].textContent
                selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 22].textContent
                selectedLocationObj.locality = newCustomerLocationDetails[i + 23].textContent
                selectedLocationObj.postal_code = newCustomerLocationDetails[i + 24].textContent

                service4BookingObj.name = newCustomerLocationDetails[i + 20].textContent
                service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 21].textContent
                service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 22].textContent
                service4BookingObj.locality = newCustomerLocationDetails[i + 23].textContent
                service4BookingObj.postal_code = newCustomerLocationDetails[i + 24].textContent

                styleSelectedLocation()

                getLatLong()
                  .then(() => { console.log('getLatLong() has been sent to the server') })
                  .catch((error) => {console.log(error)})

                bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                bookingModalS4LocationSelected = true
                console.log(service4BookingObj)
              } else {
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 6) { // 30
              if (newCustomerLocationDetails[i + 24].textContent !== '') {
                selectedLocationObj.type_name = newCustomerLocationDetails[i + 24].textContent
                selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 25].textContent
                selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 26].textContent
                selectedLocationObj.locality = newCustomerLocationDetails[i + 27].textContent
                selectedLocationObj.postal_code = newCustomerLocationDetails[i + 28].textContent

                service4BookingObj.name = newCustomerLocationDetails[i + 24].textContent
                service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 25].textContent
                service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 26].textContent
                service4BookingObj.locality = newCustomerLocationDetails[i + 27].textContent
                service4BookingObj.postal_code = newCustomerLocationDetails[i + 28].textContent
                styleSelectedLocation()

                getLatLong()
                  .then(() => { console.log('getLatLong() has been sent to the server') })
                  .catch((error) => {console.log(error)})

                bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                bookingModalS4LocationSelected = true
                console.log(service4BookingObj)
              } else {
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 7) { // 35
              if (newCustomerLocationDetails[i + 28].textContent !== '') {
                selectedLocationObj.type_name = newCustomerLocationDetails[i + 28].textContent
                selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 29].textContent
                selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 30].textContent
                selectedLocationObj.locality = newCustomerLocationDetails[i + 31].textContent
                selectedLocationObj.postal_code = newCustomerLocationDetails[i + 32].textContent

                service4BookingObj.name = newCustomerLocationDetails[i + 28].textContent
                service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 29].textContent
                service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 30].textContent
                service4BookingObj.locality = newCustomerLocationDetails[i + 31].textContent
                service4BookingObj.postal_code = newCustomerLocationDetails[i + 32].textContent

                styleSelectedLocation()

                getLatLong()
                  .then(() => { console.log('getLatLong() has been sent to the server') })
                  .catch((error) => {console.log(error)})

                bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                bookingModalS4LocationSelected = true
                console.log(service4BookingObj)
              } else {
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 8) { // 40
              if (newCustomerLocationDetails[i + 32].textContent !== '') {
                selectedLocationObj.type_name = newCustomerLocationDetails[i + 32].textContent
                selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 33].textContent
                selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 34].textContent
                selectedLocationObj.locality = newCustomerLocationDetails[i + 35].textContent
                selectedLocationObj.postal_code = newCustomerLocationDetails[i + 36].textContent

                service4BookingObj.name = newCustomerLocationDetails[i + 32].textContent
                service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 33].textContent
                service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 34].textContent
                service4BookingObj.locality = newCustomerLocationDetails[i + 35].textContent
                service4BookingObj.postal_code = newCustomerLocationDetails[i + 36].textContent

                styleSelectedLocation()

                getLatLong()
                  .then(() => { console.log('getLatLong() has been sent to the server') })
                  .catch((error) => {console.log(error)})

                bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                bookingModalS4LocationSelected = true
                console.log(service4BookingObj)
              } else {
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none' 
              }
          } else if (i === 9) { // 45
              if (newCustomerLocationDetails[i + 36].textContent !== '') {
                selectedLocationObj.type_name = newCustomerLocationDetails[i + 36].textContent
                selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 37].textContent
                selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 38].textContent
                selectedLocationObj.locality = newCustomerLocationDetails[i + 39].textContent
                selectedLocationObj.postal_code = newCustomerLocationDetails[i + 40].textContent

                service4BookingObj.name = newCustomerLocationDetails[i + 36].textContent
                service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 37].textContent
                service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 38].textContent
                service4BookingObj.locality = newCustomerLocationDetails[i + 39].textContent
                service4BookingObj.postal_code = newCustomerLocationDetails[i + 40].textContent
                styleSelectedLocation()

                getLatLong()
                  .then(() => { console.log('getLatLong() has been sent to the server') })
                  .catch((error) => {console.log(error)})

                bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                console.log(service4BookingObj)
              } else {
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 10) { // 50
              if (newCustomerLocationDetails[i + 40].textContent !== '') {
                selectedLocationObj.type_name = newCustomerLocationDetails[i + 40].textContent
                selectedLocationObj.address_line_1 = newCustomerLocationDetails[i + 41].textContent
                selectedLocationObj.administrative_district_level_1 = newCustomerLocationDetails[i + 42].textContent
                selectedLocationObj.locality = newCustomerLocationDetails[i + 43].textContent
                selectedLocationObj.postal_code = newCustomerLocationDetails[i + 44].textContent

                service4BookingObj.name = newCustomerLocationDetails[i + 40].textContent
                service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 41].textContent
                service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 42].textContent
                service4BookingObj.locality = newCustomerLocationDetails[i + 43].textContent
                service4BookingObj.postal_code = newCustomerLocationDetails[i + 44].textContent
                styleSelectedLocation()

                getLatLong()
                  .then(() => { console.log('getLatLong() has been sent to the server') })
                  .catch((error) => {console.log(error)})

                bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                bookingModalS4LocationSelected = true
                console.log(service4BookingObj)
              } else {
                bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
              } 
          }
        })
      }

      // if checkbox is selected --> show the new customer location box
      bookingModalS4NewLocationCheckbox.addEventListener('click', () => {
        bookingModalS4NewLocationCheckboxCounter++
      
        // checkbox toggle
        if (bookingModalS4NewLocationCheckboxCounter === 1) {
          bookingModalS4NewLocationCheckbox.checked = true           
          bookingModalS4NewCustomerLocationBox.className = 'booking-modal-s4-new-location-box'
        } else if (bookingModalS4NewLocationCheckboxCounter === 2) {
          bookingModalS4NewLocationCheckbox.checked = false          
          bookingModalS4NewCustomerLocationBox.className = 'booking-modal-s4-new-location-box hide-container'
          bookingModalS4NewLocationCheckboxCounter = 0
        }
      })

      // if create new location btn is clicked
      bookingModalS4NewCustomerLocationSubmitBtn.addEventListener('click', () => {
        console.log('ive been clicked.')
        let newOtherLocationsIndex = 0

        // set the new customer modal booking email address
        bookingModalS4NewCustomerLocationObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address

        console.log(newOtherLocationsIndex)

        bookingModalS4NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`] = {}

        // check type is correct
        if (bookingModalS4NewCustomerLocationInputType.value !== 'select-a-type') {
          bookingModalS4NewCustomerLocationInputTypeError.className = 'error hide-container'
          bookingModalS4NewCustomerLocationInputType.className = 'input-valid-clear'
          newUserLocation.type_name = bookingModalS4NewCustomerLocationInputType.value
          bookingModalS4NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].type_name = bookingModalS4NewCustomerLocationInputType.value
        } else {
          bookingModalS4NewCustomerLocationInputTypeError.className = 'error'
          bookingModalS4NewCustomerLocationInputType.className = 'input-invalid'
        }

        // check address is correct
        if (bookingModalS4NewCustomerLocationInputAddress.value.match(addressCheck)) {
          bookingModalS4NewCustomerLocationInputAddressError.className = 'error hide-container'
          bookingModalS4NewCustomerLocationInputAddress.className = 'input-valid-clear'
          newUserLocation.address_line_1 = bookingModalS4NewCustomerLocationInputAddress.value
          bookingModalS4NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].address_line_1 = bookingModalS4NewCustomerLocationInputAddress.value
        } else {
          bookingModalS4NewCustomerLocationInputAddressError.className = 'error'
          bookingModalS4NewCustomerLocationInputAddress.className = 'input-invalid'
        }

        // check state is correct
        if (bookingModalS4NewCustomerLocationInputState.value.match(justLettersCheck)) {
          bookingModalS4NewCustomerLocationInputStateError.className = 'error hide-container'
          bookingModalS4NewCustomerLocationInputState.className = 'input-valid-clear'
          newUserLocation.administrative_district_level_1 = bookingModalS4NewCustomerLocationInputState.value
          bookingModalS4NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].administrative_district_level_1 = bookingModalS4NewCustomerLocationInputState.value
        } else {
          bookingModalS4NewCustomerLocationInputStateError.className = 'error'
          bookingModalS4NewCustomerLocationInputState.className = 'input-invalid'
        }

        // check city is correct
        if (bookingModalS4NewCustomerLocationInputCity.value.match(justLettersCheck)) {
          bookingModalS4NewCustomerLocationInputCityError.className = 'error hide-container'
          bookingModalS4NewCustomerLocationInputCity.className = 'input-valid-clear'
          newUserLocation.locality = bookingModalS4NewCustomerLocationInputCity.value
          bookingModalS4NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].locality = bookingModalS4NewCustomerLocationInputCity.value
        } else {
          bookingModalS4NewCustomerLocationInputCityError.className = 'error'
          bookingModalS4NewCustomerLocationInputCity.className = 'input-invalid'
        }

        // check that zip code is correct
        if (bookingModalS4NewCustomerLocationInputZipCode.value.match(zipCodeCheck)) {
          bookingModalS4NewCustomerLocationInputZipCodeError.className = 'error hide-container'
          bookingModalS4NewCustomerLocationInputZipCode.className = 'input-valid-clear'
          newUserLocation.postal_code = bookingModalS4NewCustomerLocationInputZipCode.value
          bookingModalS4NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].postal_code = bookingModalS4NewCustomerLocationInputZipCode.value
        } else {
          bookingModalS4NewCustomerLocationInputZipCodeError.className = 'error'
          bookingModalS4NewCustomerLocationInputZipCode.className = 'input-invalid'
        }
        console.log(bookingModalS4NewCustomerLocationObj)

        if (bookingModalS4NewCustomerLocationInputType.className === 'input-valid-clear' && bookingModalS4NewCustomerLocationInputAddress.className === 'input-valid-clear' && bookingModalS4NewCustomerLocationInputState.className === 'input-valid-clear' && bookingModalS4NewCustomerLocationInputCity.className === 'input-valid-clear' && bookingModalS4NewCustomerLocationInputZipCode.className === 'input-valid-clear') {
          console.log('All fields are valid..')
          newUserLocation.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
          // create the new location in MongoDB
          // take new location id add to the "bookingModalS4NewCustomerLocationObj.id"
          // add customers new location object to customers data -- MongoDB
          async function newLocationMongoDb() {
            // req & res
            const create_new_location_mongodb_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(bookingModalS4NewCustomerLocationObj)}`, { method: 'put' })
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
                bookingModalS4NewCustomerLocationInputType.value = 'select-a-type'
                bookingModalS4NewCustomerLocationInputAddress.value = ''
                bookingModalS4NewCustomerLocationInputState.value = ''
                bookingModalS4NewCustomerLocationInputCity.value = ''
                bookingModalS4NewCustomerLocationInputZipCode.value = ''

                // clear bookingModalS4CustomerLocationsBox
                bookingModalS4CustomerLocationsBox.innerHTML = ''
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
                    bookingModalS4CustomerLocationsBox.appendChild(newDivElement)
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
                    bookingModalS4CustomerLocationsBox.appendChild(newDivElement)
                  }
                }

                // delete/remove blank customer locations remaining (coming from ";" & ":")
                for (let i = 0; i < bookingModalS4CustomerLocationsBox.children.length; i++) {
                  // get all the list items from all customer locations
                  let newCustomerLocationDetails = bookingModalS4CustomerLocationsBox.getElementsByTagName('li')
                  console.log(newCustomerLocationDetails)

                  if (i === 0) { // 0
                    if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                      bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                    }
                  } else if (i === 1) { // 5
                      if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 2) { // 10
                      if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 3) { // 15
                      if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 4) { // 20
                      if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 5) { // 25
                      if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 6) { // 30
                      if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 7) { // 35
                      if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 8) { // 40
                      if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 9) { // 45
                      if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 10) { // 50
                      if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      } 
                  }
                }

                // when a customer location is selected
                for (let i = 0; i < bookingModalS4CustomerLocationsBox.children.length; i++) {
                  bookingModalS4CustomerLocationsBox.children[i].addEventListener('click', () => {
                    // clear any existing customer location style already selected
                    for (let j = 0; j < bookingModalS4CustomerLocationsBox.children.length; j++) {
                      // clear new service 2 location obj
                      service4BookingObj.name = ''
                      service4BookingObj.address_line_1 = ''
                      service4BookingObj.administrative_district_level_1 = ''
                      service4BookingObj.locality = ''
                      service4BookingObj.postal_code = ''
                      bookingModalS4CustomerLocationsBox.children[j].style = ''
                    }

                    // get all the list items from all customer locations
                    let newCustomerLocationDetails = bookingModalS4CustomerLocationsBox.getElementsByTagName('li')
                    console.log(newCustomerLocationDetails)
                    // console.log(newCustomerLocationDetails[0].textContent)
                    console.log(bookingModalS4CustomerLocationsBox.children[i])

                    // style the customer location function
                    function styleSelectedLocation() {
                      bookingModalS4CustomerLocationsBox.children[i].style.backgroundColor = '#f05e7c'
                      bookingModalS4CustomerLocationsBox.children[i].style.color = '#ffffff'
                      bookingModalS4CustomerLocationsBox.children[i].style.borderColor = '#f05e7c'
                      bookingModalS4CustomerLocationsBox.children[i].style.borderRadius = '10px'  
                    }

                    // delete/remove blank customer locations
                    for (let i = 0; i < bookingModalS4CustomerLocationsBox.children.length; i++) {
                      // get all the list items from all customer locations
                      let newCustomerLocationDetails = bookingModalS4CustomerLocationsBox.getElementsByTagName('li')
                      // console.log(newCustomerLocationDetails[10].textContent)
                      if (i === 0) { // 0
                        if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                        } else {              
                        }
                      } else if (i === 1) { // 5
                          if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                          } else {                
                          }
                      } else if (i === 2) { // 10
                          if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 3) { // 15
                          if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 4) { // 20
                          if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 5) { // 25
                          if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 6) { // 30
                          if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                          } else {                
                          }
                      } else if (i === 7) { // 35
                          if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 8) { // 40
                          if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                          } else { 
                          }
                      } else if (i === 9) { // 45
                          if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 10) { // 50
                          if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          } 
                      }
                    }

                    // send too new service 2 location obj && unNull the continue btn
                    if (i === 0) { // 0
                      if (newCustomerLocationDetails[i].textContent !== '') {
                        service4BookingObj.name = newCustomerLocationDetails[i].textContent
                        service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 1].textContent
                        service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 2].textContent
                        service4BookingObj.locality = newCustomerLocationDetails[i + 3].textContent
                        service4BookingObj.postal_code = newCustomerLocationDetails[i + 4].textContent

                        

                        styleSelectedLocation()
                        bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                        bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                        bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                        bookingModalS4LocationSelected = true
                        console.log(service4BookingObj)
                      } else {
                        bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                      }
                    } else if (i === 1) { // 5
                        if (newCustomerLocationDetails[i + 4].textContent !== '') {
                          service4BookingObj.name = newCustomerLocationDetails[i + 4].textContent
                          service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 5].textContent
                          service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 6].textContent
                          service4BookingObj.locality = newCustomerLocationDetails[i + 7].textContent
                          service4BookingObj.postal_code = newCustomerLocationDetails[i + 8].textContent
                          styleSelectedLocation()
                          bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4LocationSelected = true
                          console.log(service4BookingObj)
                        } else {
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 2) { // 10
                        if (newCustomerLocationDetails[i + 8].textContent !== '') {
                          service4BookingObj.name = newCustomerLocationDetails[i + 8].textContent
                          service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 9].textContent
                          service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 10].textContent
                          service4BookingObj.locality = newCustomerLocationDetails[i + 11].textContent
                          service4BookingObj.postal_code = newCustomerLocationDetails[i + 12].textContent 
                          styleSelectedLocation()
                          bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4LocationSelected = true
                          console.log(service4BookingObj)
                        } else {
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 3) { // 15
                        if (newCustomerLocationDetails[i + 12].textContent !== '') {
                          service4BookingObj.name = newCustomerLocationDetails[i + 12].textContent
                          service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 13].textContent
                          service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 14].textContent
                          service4BookingObj.locality = newCustomerLocationDetails[i + 15].textContent
                          service4BookingObj.postal_code = newCustomerLocationDetails[i + 16].textContent 
                          styleSelectedLocation()
                          bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4LocationSelected = true
                          console.log(service4BookingObj)
                        } else {
                          console.log('peace')
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 4) { // 20
                        if (newCustomerLocationDetails[i + 16].textContent !== '') {
                          service4BookingObj.name = newCustomerLocationDetails[i + 16].textContent
                          service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 17].textContent
                          service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 18].textContent
                          service4BookingObj.locality = newCustomerLocationDetails[i + 19].textContent
                          service4BookingObj.postal_code = newCustomerLocationDetails[i + 20].textContent
                          styleSelectedLocation()
                          bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4LocationSelected = true
                          console.log(service4BookingObj)
                        } else {
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 5) { // 25
                        if (newCustomerLocationDetails[i + 20].textContent !== '') {
                          service4BookingObj.name = newCustomerLocationDetails[i + 20].textContent
                          service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 21].textContent
                          service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 22].textContent
                          service4BookingObj.locality = newCustomerLocationDetails[i + 23].textContent
                          service4BookingObj.postal_code = newCustomerLocationDetails[i + 24].textContent
                          styleSelectedLocation()
                          bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4LocationSelected = true
                          console.log(service4BookingObj)
                        } else {
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 6) { // 30
                        if (newCustomerLocationDetails[i + 24].textContent !== '') {
                          service4BookingObj.name = newCustomerLocationDetails[i + 24].textContent
                          service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 25].textContent
                          service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 26].textContent
                          service4BookingObj.locality = newCustomerLocationDetails[i + 27].textContent
                          service4BookingObj.postal_code = newCustomerLocationDetails[i + 28].textContent
                          styleSelectedLocation()
                          bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4LocationSelected = true
                          console.log(service4BookingObj)
                        } else {
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 7) { // 35
                        if (newCustomerLocationDetails[i + 28].textContent !== '') {
                          service4BookingObj.name = newCustomerLocationDetails[i + 28].textContent
                          service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 29].textContent
                          service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 30].textContent
                          service4BookingObj.locality = newCustomerLocationDetails[i + 31].textContent
                          service4BookingObj.postal_code = newCustomerLocationDetails[i + 32].textContent
                          styleSelectedLocation()
                          bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4LocationSelected = true
                          console.log(service4BookingObj)
                        } else {
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 8) { // 40
                        if (newCustomerLocationDetails[i + 32].textContent !== '') {
                          service4BookingObj.name = newCustomerLocationDetails[i + 32].textContent
                          service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 33].textContent
                          service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 34].textContent
                          service4BookingObj.locality = newCustomerLocationDetails[i + 35].textContent
                          service4BookingObj.postal_code = newCustomerLocationDetails[i + 36].textContent
                          styleSelectedLocation()
                          bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4LocationSelected = true
                          console.log(service4BookingObj)
                        } else {
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none' 
                        }
                    } else if (i === 9) { // 45
                        if (newCustomerLocationDetails[i + 36].textContent !== '') {
                          service4BookingObj.name = newCustomerLocationDetails[i + 36].textContent
                          service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 37].textContent
                          service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 38].textContent
                          service4BookingObj.locality = newCustomerLocationDetails[i + 39].textContent
                          service4BookingObj.postal_code = newCustomerLocationDetails[i + 40].textContent
                          styleSelectedLocation()
                          bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          console.log(service4BookingObj)
                        } else {
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 10) { // 50
                        if (newCustomerLocationDetails[i + 40].textContent !== '') {
                          service4BookingObj.name = newCustomerLocationDetails[i + 40].textContent
                          service4BookingObj.address_line_1 = newCustomerLocationDetails[i + 41].textContent
                          service4BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 42].textContent
                          service4BookingObj.locality = newCustomerLocationDetails[i + 43].textContent
                          service4BookingObj.postal_code = newCustomerLocationDetails[i + 44].textContent
                          styleSelectedLocation()
                          bookingModalS4LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4LocationSelected = true
                          console.log(service4BookingObj)
                        } else {
                          bookingModalS4CustomerLocationsBox.children[i].style.display = 'none'
                        } 
                    }
                  })
                }
                console.log(bookingModalS4CustomerLocationsBox.children.length)
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

    // get lat - long of users location function
    async function getLatLong() {
      // req && res
      const get_lat_long_req = await fetch(`/getLatLong/${JSON.stringify(selectedLocationObj)}`, { method: 'get' })
      const get_lat_long_res = await get_lat_long_req.json()
      console.log(get_lat_long_res)

      let distanceObj = {
        userLat: get_lat_long_res[0].lat,
        userLong:  get_lat_long_res[0].lon,
        companyLat:  myApp.companyLat,
        companyLong:  myApp.companyLong
      }
       

      if (get_lat_long_res[0]) {
            // get distance (m) from user location and company location
        async function getDistanceMatrix() {
          // req && res
          const get_distance_matrix_req = await fetch(`/getDistance/${JSON.stringify(distanceObj)}`)
          const get_distance_matrix_res = await get_distance_matrix_req.json()
          console.log(get_distance_matrix_res)

          // set the price
          let distanceFromCityHQ = get_distance_matrix_res.distances[0][1]
          console.log(distanceFromCityHQ)

          if (distanceFromCityHQ > 120) {
            let uniqueDistanceGap = (distanceFromCityHQ - 120) / 1609.344
            let uniquePrice = (((uniqueDistanceGap * myApp.uniqueRatePerM) + myApp.service3Price ) / 100).toFixed(2)
            
            if (uniquePrice.length === 4) {
              service4BookingObj.service_price = `${uniquePrice.slice(0, 2)},${uniquePrice.slice(3, 4)}`
            } else if (uniquePrice.length === 6) {
              service4BookingObj.service_price = `${uniquePrice.slice(0, 2)},${uniquePrice.slice(3, 6)}`
            } else if (uniquePrice.length === 8) {
              service4BookingObj.service_price = `${uniquePrice.slice(0, 2)},${uniquePrice.slice(3, 6)},${uniquePrice.slice(6, 9)}`
            } else {
              service4BookingObj.service_price = `$${uniquePrice}`
            }
          }
        } 
          getDistanceMatrix()
            .then(() => { console.log('getDistanceMatrix() has been sent to the server') })
            .catch((error) => { console.log(error) })
      }
    }


  }

  selectDateTime() {
    // edit "date & time"
    editbookingModalS4DateTime.addEventListener('click', () => {
      // right changes
      bookingModalS4Agents.className = 'booking-modal-s4-right hide-container'
      bookingModalS4Location.className = 'booking-modal-s4-right hide-container'
      bookingModalS4DateTime.className = 'booking-modal-s4-right'
      bookingModalS4ConfirmDetails.className = 'booking-modal-s4-right hide-container'

      bookingModalS4Step1.className = ''
      bookingModalS4Step2.className = ''
      bookingModalS4Step3.className = 'step-selected'
      bookingModalS4Step4.className = ''

      bookingModalS4Counter = 2

      // footer changes
      if (bookingModalS4DateSelected && bookingModalS4TimeSelected) {
        bookingModalS4NextBtn.className = 'booking-modal-s4-next'
        bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
      } else {
        bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
        bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
      }
    })

    // if user is on select "date & time"
    if (myApp.companyOptions4Bool && bookingModalS4DateTime.className === 'booking-modal-s4-right') {
      console.log('Select date & time!')

      // setup for getting current "start_at" and current "end_at" dates (1 month from the current day)
      const bmDate = new Date()

      let bookingModalS4Year = bmDate.getYear() + 1900
      let bookingModalS4Month = bmDate.getMonth() + 1
      let bookingModalS4Day = bmDate.getDate()

      let bookingModalS4MinDate = `${bookingModalS4Month}-${bookingModalS4Day}-${bookingModalS4Year}`
      let bookingModalS4MaxDate = `${bookingModalS4Month + 1}-${bookingModalS4Day}-${bookingModalS4Year}`

      let bookingModalS4MinDateNew, bookingModalS4MaxDateNew

      console.log(bookingModalS4MinDate, bookingModalS4MaxDate)

        // if current month has 1 digit
      if (bookingModalS4MinDate.substring(0, 2) !== '10' || bookingModalS4MinDate.substring(0, 2) !== '11' || bookingModalS4MinDate.substring(0, 2) !== '12') {
        bookingModalS4MinDate = bookingModalS4MinDate.replace(bookingModalS4MinDate.substring(0, 1), `0${bookingModalS4Month}`)
        console.log(bookingModalS4MinDate)
      }

        // if next month has 1 digit
      if (bookingModalS4MaxDate.substring(0, 2) !== '10' || bookingModalS4MaxDate.substring(0, 2) !== '11' || bookingModalS4MaxDate.substring(0, 2) !== '12') {
        bookingModalS4MaxDate = bookingModalS4MaxDate.replace(bookingModalS4MaxDate.substring(0, 1), `0${bookingModalS4Month + 1}`)
        console.log(bookingModalS4MaxDate)
      }

        // if current date is 1 digit
      if (bookingModalS4MinDate.substring(3, 5).includes('-')) {
        bookingModalS4MinDateNew = bookingModalS4MinDate.slice(0, 3) + '0' + bookingModalS4MinDate.slice(3, 9)
        console.log(bookingModalS4MinDateNew)
      } else {
        bookingModalS4MinDateNew = bookingModalS4MinDate
      }

        // if next date is 1 digit
      if (bookingModalS4MaxDate.substring(3, 5).includes('-')) {
        bookingModalS4MaxDateNew = bookingModalS4MaxDate.slice(0, 3) + '0' + bookingModalS4MaxDate.slice(3, 9)
        console.log(bookingModalS4MaxDateNew)
      } else {
        bookingModalS4MaxDateNew = bookingModalS4MaxDate
      }

        // set the "start_at" and "end_at" times to the serviceAvailabilityObj
      service4AvailabilityObj.start_at = `${bookingModalS4MinDateNew.slice(6, 11)}-${bookingModalS4MinDateNew.slice(0, 2)}-${bookingModalS4MinDateNew.slice(3, 5)}T12:00:00Z`
      service4AvailabilityObj.end_at = `${bookingModalS4MaxDateNew.slice(6, 11)}-${bookingModalS4MaxDateNew.slice(0, 2)}-${bookingModalS4MaxDateNew.slice(3, 5)}T21:00:00Z`
      service4AvailabilityObj.location_id = `${myApp.companyLocationId}`
      service4AvailabilityObj.service_variation_id = `${myApp.companyService4VariationId}` // _REPLACE_

      console.log(service4AvailabilityObj)

      // 
      // fetch available times for the service
      async function service4Availabilities() {
        // req & res
        const get_company_availabilities_req = await fetch(`/getCompanyAvailabilities/${JSON.stringify(service4AvailabilityObj)}`, { method: 'post' })
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
          // show the bookingModalS4
          // myApp.bookingModalS4.className = 'booking-modal-s4'

          // filter and display available dates on the calendar
          console.log(bookingModalS4CalDays[0].textContent)
          console.log(bookingModalS4CalDays.length)

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

          if (get_company_availabilities_res.availabilities[0].start_at.slice(5, 7) === `0${bookingModalS4Date.getMonth() + 2}` || get_company_availabilities_res.availabilities[0].start_at.slice(5, 7) === '01' && bookingModalS4Date.getMonth() === 11) {
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
          for (let i = 0; i < bookingModalS4CalDays.length; i++) {
            if (bookingModalS4CalDays[i].textContent.length === 1) {
              availableCalDaysArr.push(`0${bookingModalS4CalDays[i].textContent}`)
            } else {
              availableCalDaysArr.push(`${bookingModalS4CalDays[i].textContent}`)
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
                bookingModalS4CalDays[j].className = 'booking-modal-s4-datetime-style'
                console.log(bookingModalS4CalDays[j])
              }
            }
          }
          

          /** On Load */
          // mouser over available calendar date (today)
          bookingModalS4CalToday.addEventListener('mouseover', () => {
            console.log('peace')
            if (bookingModalS4CalToday.className === 'booking-modal-s4-today' || bookingModalS4CalToday.className === 'booking-modal-s4-datetime-hovered') {
              bookingModalS4CalToday.style.cursor = 'pointer'
              bookingModalS4CalToday.className = 'booking-modal-s4-datetime-hovered'
            }
          })

          // mouse leave avaialble calendar date (today)
          bookingModalS4CalToday.addEventListener('mouseleave', () => {
            console.log('peace')
            if (bookingModalS4CalToday.className === 'booking-modal-s4-datetime-hovered') {
              bookingModalS4CalToday.className = 'booking-modal-s4-today'
            }
          })

          // if today is clicked
          bookingModalS4CalToday.addEventListener('click', () => {
            console.log('peace')
            if (bookingModalS4CalToday.className === 'booking-modal-s4-datetime-hovered') {
              // unstyle all other available dates
              for (let j = 0; j < bookingModalS4CalDays.length; j++) {
                bookingModalS4CalDays[j].style.backgroundColor = ''
                bookingModalS4CalDays[j].style.color = '#FFFFFF'
              }

              bookingModalS4CalToday.style.backgroundColor = '#f05e7c'
              bookingModalS4CalToday.style.color = '#FFFFFF'

              bookingModalS4DateSelected = true
              console.log(bookingModalS4DateSelected)

              let selectedFinalDate
              let selectedFinalMonth
              console.log(bookingModalS4CalToday)
              selectedDateArr = []
              selectedTimesArr = []
              selectedTimesThisMonthArr = []
              // bookingModalS4BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s4-datetime-box-header"><h1 id="booking-modal-s4-current-time-title" class='booking-modal-s4-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s4-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
              
              // push the selected "date" number to a new array (selectedDateArr)
              if (bookingModalS4CalToday.textContent.length === 1) {
                selectedDateArr.push(`0${bookingModalS4CalToday.textContent}`)
                selectedFinalDate = `0${bookingModalS4CalToday.textContent}`
              } else {
                selectedDateArr.push(bookingModalS4CalToday.textContent)
                selectedFinalDate = bookingModalS4CalToday.textContent
              }

              // loop through initial all available dates array and push all available "times" to a new array
              for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                  selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                }
              }
              console.log(selectedTimesArr)

              console.log(bookingModalS4Date.getMonth().toString().length)

              // loop through and selectedTimesArr and push "times" available for the "this month" only
              for (let i = 0; i < selectedTimesArr.length; i++) {
                if (bookingModalS4Date.getMonth().toString().length === 1) {
                  let currentMonth = `0${bookingModalS4Date.getMonth() + 1}`
                  selectedFinalMonth = `0${bookingModalS4Date.getMonth() + 1}`
                  console.log(bookingModalS4Date.getMonth())

                  if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                    selectedTimesThisMonthArr.push(selectedTimesArr[i])
                    console.log(selectedTimesThisMonthArr)
                  } 

                } else if (bookingModalS4Date.getMonth().toString().length === 2) {
                  if (selectedTimesArr[i].substring(5, 7) === bookingModalS4Date.getMonth()) {
                    selectedTimesThisMonthArr.push(selectedTimesArr[i])
                    selectedFinalMonth = bookingModalS4Date.getMonth() + 1
                    console.log(selectedTimesThisMonthArr)
                  }
                }
              }
              console.log(selectedTimesThisMonthArr)

              // loop through "this months" available "times" array and display those times into the bookingModalS4BodyRightDateTimeBox
              for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                let newH1Element = document.createElement('h1')
                let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                newH1Element.className = 'booking-modal-s4-datetimes'
                
                // convert times to normal times
                if (selectedTimeOnly === '12:00') {
                  newH1Element.textContent = '08:00 AM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '12:30') {
                  newH1Element.textContent = '08:30 AM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '13:00') {
                  newH1Element.textContent = '09:00 AM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '13:30') {
                  newH1Element.textContent = '09:30 AM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '14:00') {
                  newH1Element.textContent = '10:00 AM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '14:30') {
                  newH1Element.textContent = '10:30 AM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '15:00') {
                  newH1Element.textContent = '11:00 AM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '15:30') {
                  newH1Element.textContent = '11:30 AM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '16:00') {
                  newH1Element.textContent = '12:00 PM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '16:30') {
                  newH1Element.textContent = '12:30 PM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '17:00') {
                  newH1Element.textContent = '01:00 PM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '17:30') {
                  newH1Element.textContent = '01:30 PM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '18:00') {
                  newH1Element.textContent = '02:00 PM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '18:30') {
                  newH1Element.textContent = '02:30 PM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '19:00') {
                  newH1Element.textContent = '03:00 PM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '19:30') {
                  newH1Element.textContent = '03:30 PM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '20:00') {
                  newH1Element.textContent = '04:00 PM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '20:30') {
                  newH1Element.textContent = '04:30 PM'
                  bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                }  
              }

              // loop through bookingModalS4BodyRightDateTimeBox to listen for a click from the user
              for (let i = 1; i < bookingModalS4BodyRightDateTimeBox.children.length; i++) {
                bookingModalS4BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                  let selectedFinalTime = ''

                  // clear all other times first
                  for (let j = 0; j < bookingModalS4BodyRightDateTimeBox.children.length; j++) {
                    bookingModalS4BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                    bookingModalS4BodyRightDateTimeBox.children[j].style.color = 'black'
                  }

                  bookingModalS4BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                  bookingModalS4BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                  bookingModalS4TimeSelected = true
                  console.log(bookingModalS4TimeSelected)

                  if (bookingModalS4DateSelected && bookingModalS4TimeSelected) {
                    bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                    bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                    bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                  } else {
                    bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
                    bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
                    bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                  }

                  // convert the time back to army time
                  if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                    selectedFinalTime = '12:00'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                    selectedFinalTime = '12:30'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                    selectedFinalTime = '13:00'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                    selectedFinalTime = '13:30'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                    selectedFinalTime = '14:00'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                    selectedFinalTime = '14:30'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                    selectedFinalTime = '15:00'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                    selectedFinalTime = '15:30'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                    selectedFinalTime = '16:00'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                    selectedFinalTime = '16:30'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                    selectedFinalTime = '17:00'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                    selectedFinalTime = '17:30'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                    selectedFinalTime = '18:00'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                    selectedFinalTime = '18:30'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                    selectedFinalTime = '19:00'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                    selectedFinalTime = '19:30'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                    selectedFinalTime = '20:00'
                  } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                    selectedFinalTime = '20:30'
                  }

                  // push the time and date to the booking object
                  service4BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                  console.log(service4BookingObj)

                })
              }
            } 
          })

          
          // loop through bookingModalS4CalDays
          for (let i = 0; i < bookingModalS4CalDays.length; i++) {
            // mouser over available calendar date
            bookingModalS4CalDays[i].addEventListener('mouseover', () => {
              if (bookingModalS4CalDays[i].className === 'booking-modal-s4-datetime-style') {
                bookingModalS4CalDays[i].style.cursor = 'pointer'
                bookingModalS4CalDays[i].className = 'booking-modal-s4-datetime-style booking-modal-s4-datetime-hovered'
              }
            })

            // mouse leave avaialble calendar date
            bookingModalS4CalDays[i].addEventListener('mouseleave', (event) => {
              if (bookingModalS4CalDays[i].className === 'booking-modal-s4-datetime-style booking-modal-s4-datetime-hovered') {
                bookingModalS4CalDays[i].className = 'booking-modal-s4-datetime-style'
              }
            })

            // click on available calendar date
            bookingModalS4CalDays[i].addEventListener('click', () => {                
              if (bookingModalS4CalDays[i].className === 'booking-modal-s4-datetime-style booking-modal-s4-datetime-hovered') {
                // unstyle all other available dates
                bookingModalS4CalToday.style.backgroundColor = ''
                bookingModalS4CalToday.style.color = ''
                bookingModalS4CalToday.className = 'booking-modal-s4-today'

                for (let j = 0; j < bookingModalS4CalDays.length; j++) {
                  bookingModalS4CalDays[j].style.backgroundColor = ''
                  bookingModalS4CalDays[j].style.color = '#FFFFFF'
                }

                bookingModalS4CalDays[i].style.backgroundColor = '#F05E7C'
                bookingModalS4CalDays[i].style.color = '#FFFFFF'

                bookingModalS4DateSelected = true
                console.log(bookingModalS4DateSelected)

                let selectedFinalDate
                let selectedFinalMonth
                console.log(bookingModalS4CalDays[i])
                selectedDateArr = []
                selectedTimesArr = []
                selectedTimesThisMonthArr = []
                // bookingModalS4BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s4-datetime-box-header"><h1 id="booking-modal-s4-current-time-title" class='booking-modal-s4-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s4-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                
                // push the selected "date" number to a new array (selectedDateArr)
                if (bookingModalS4CalDays[i].textContent.length === 1) {
                  selectedDateArr.push(`0${bookingModalS4CalDays[i].textContent}`)
                  selectedFinalDate = `0${bookingModalS4CalDays[i].textContent}`
                } else {
                  selectedDateArr.push(bookingModalS4CalDays[i].textContent)
                  selectedFinalDate = bookingModalS4CalDays[i].textContent
                }

                // loop through initial all available dates array and push all available "times" to a new array
                for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                  if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                    selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                  }
                }
                console.log(selectedTimesArr)

                console.log(bookingModalS4Date.getMonth().toString().length)

                // loop through and selectedTimesArr and push times available for the "next month" only
                for (let i = 0; i < selectedTimesArr.length; i++) {
                  if (bookingModalS4Date.getMonth().toString().length === 1) {
                    let currentMonth = `0${bookingModalS4Date.getMonth() + 1}`
                    selectedFinalMonth = `0${bookingModalS4Date.getMonth() + 1}`
                    console.log(bookingModalS4Date.getMonth())

                    if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                      selectedTimesThisMonthArr.push(selectedTimesArr[i])
                      console.log(selectedTimesThisMonthArr)
                    } 

                  } else if (bookingModalS4Date.getMonth().toString().length === 2) {
                    if (selectedTimesArr[i].substring(5, 7) === bookingModalS4Date.getMonth()) {
                      selectedTimesThisMonthArr.push(selectedTimesArr[i])
                      selectedFinalMonth = bookingModalS4Date.getMonth() + 1
                      console.log(selectedTimesThisMonthArr)
                    }
                  }
                }
                console.log(selectedTimesThisMonthArr)

                // loop through the new next months available "times" array and display those times into the bookingModalS4BodyRightDateTimeBox
                for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                  let newH1Element = document.createElement('h1')
                  let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                  newH1Element.className = 'booking-modal-s4-datetimes'
                  
                  // convert times to normal times
                  if (selectedTimeOnly === '12:00') {
                    newH1Element.textContent = '08:00 AM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '12:30') {
                    newH1Element.textContent = '08:30 AM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '13:00') {
                    newH1Element.textContent = '09:00 AM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '13:30') {
                    newH1Element.textContent = '09:30 AM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '14:00') {
                    newH1Element.textContent = '10:00 AM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '14:30') {
                    newH1Element.textContent = '10:30 AM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '15:00') {
                    newH1Element.textContent = '11:00 AM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '15:30') {
                    newH1Element.textContent = '11:30 AM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '16:00') {
                    newH1Element.textContent = '12:00 PM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '16:30') {
                    newH1Element.textContent = '12:30 PM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '17:00') {
                    newH1Element.textContent = '01:00 PM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '17:30') {
                    newH1Element.textContent = '01:30 PM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '18:00') {
                    newH1Element.textContent = '02:00 PM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '18:30') {
                    newH1Element.textContent = '02:30 PM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '19:00') {
                    newH1Element.textContent = '03:00 PM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '19:30') {
                    newH1Element.textContent = '03:30 PM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '20:00') {
                    newH1Element.textContent = '04:00 PM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '20:30') {
                    newH1Element.textContent = '04:30 PM'
                    bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                  } 
                }

                // loop through bookingModalS4BodyRightDateTimeBox to listen for a click from the user
                for (let i = 1; i < bookingModalS4BodyRightDateTimeBox.children.length; i++) {
                  bookingModalS4BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                    let selectedFinalTime = ''

                    // clear all other times first
                    for (let j = 0; j < bookingModalS4BodyRightDateTimeBox.children.length; j++) {
                      bookingModalS4BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                      bookingModalS4BodyRightDateTimeBox.children[j].style.color = 'black'
                    }

                    bookingModalS4BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                    bookingModalS4BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                    bookingModalS4TimeSelected = true
                    console.log(bookingModalS4TimeSelected)

                    if (bookingModalS4DateSelected && bookingModalS4TimeSelected) {
                      bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                      bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                      bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                    } else {
                      bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
                      bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
                      bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                    }

                    // convert the time back to army time
                    if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                      selectedFinalTime = '12:00'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                      selectedFinalTime = '12:30'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                      selectedFinalTime = '13:00'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                      selectedFinalTime = '13:30'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                      selectedFinalTime = '14:00'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                      selectedFinalTime = '14:30'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                      selectedFinalTime = '15:00'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                      selectedFinalTime = '15:30'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                      selectedFinalTime = '16:00'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                      selectedFinalTime = '16:30'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                      selectedFinalTime = '17:00'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                      selectedFinalTime = '17:30'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                      selectedFinalTime = '18:00'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                      selectedFinalTime = '18:30'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                      selectedFinalTime = '19:00'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                      selectedFinalTime = '19:30'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                      selectedFinalTime = '20:00'
                    } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                      selectedFinalTime = '20:30'
                    }

                    // push the time and date to the booking object
                    service4BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                    console.log(service4BookingObj)

                  })
                }
              } 
            
            })
          }


          /* Next Btn Cal */
          // if next calendar btn clicked
          bookingModalS4NextBtnCal.addEventListener('click', () => {
            bookingModalS4NextBtnCalCounter++
            availableCalDaysArr = []

            let bookingModalS4DateTimeBoxLength = bookingModalS4BodyRightDateTimeBox.children.length
              for (let i = 1; i < bookingModalS4DateTimeBoxLength; i++) {
                console.log(bookingModalS4BodyRightDateTimeBox.children[1])
                bookingModalS4BodyRightDateTimeBox.removeChild(bookingModalS4BodyRightDateTimeBox.children[1])
              }

            if (bookingModalS4NextBtnCalCounter === 1) {
              bookingModalS4NextBtnCal.style.cursor = 'not-allowed'

              bookingModalS4Date.setMonth(bookingModalS4Date.getMonth() + 1)

              bookingModalS4RenderCalendar()

              bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
              bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
              bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'

              bookingModalS4DateSelected = false
              bookingModalS4TimeSelected = false

              console.log(bookingModalS4DateSelected)
              console.log(bookingModalS4TimeSelected)

              let bookingModalS4CalDaysNext = document.querySelectorAll('.booking-modal-s4-cal-days')
              let selectedDateArr = []
              let selectedTimesArr = []
              let selectedTimesNextMonthArr = []
              // bookingModalS4BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s4-datetime-box-header"><h1 id="booking-modal-s4-current-time-title" class='booking-modal-s4-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s4-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`

              console.log(bookingModalS4CalDaysNext)
              console.log(bookingModalS4CalDaysNext.length)



              // push the days of the selected calendar month to an array to make comparable
              for (let i = 0; i < bookingModalS4CalDaysNext.length; i++) {
                if (bookingModalS4CalDaysNext[i].textContent.length === 1) {
                  availableCalDaysArr.push(`0${bookingModalS4CalDaysNext[i].textContent}`)
                } else {
                  availableCalDaysArr.push(`${bookingModalS4CalDaysNext[i].textContent}`)
                }
              }
              console.log(availableCalDaysArr)

              // style and show available dates for the next month on the calendar
              for (let i = 0; i < availableCalDaysArr.length; i++) {
                let availableDaysDate = availableDaysNextMonthArr[i]
                // style available dates from service 1 next month onto the calendar
                for (let j = 0; j < availableCalDaysArr.length; j++) {
                  if (availableCalDaysArr[j] === availableDaysDate) {
                    bookingModalS4CalDaysNext[j].className = 'booking-modal-s4-datetime-style'
                    console.log(bookingModalS4CalDaysNext[j])
                  }
                }
              } 

              // go through bookingModalS4CalDays
              for (let i = 0; i < bookingModalS4CalDaysNext.length; i++) {
                // mouser over available calendar date
                bookingModalS4CalDaysNext[i].addEventListener('mouseover', () => {
                  if (bookingModalS4CalDaysNext[i].className === 'booking-modal-s4-datetime-style') {
                    bookingModalS4CalDaysNext[i].style.cursor = 'pointer'
                    bookingModalS4CalDaysNext[i].className = 'booking-modal-s4-datetime-style booking-modal-s4-datetime-hovered'
                  }
                })

                // mouse leave avaialble calendar date
                bookingModalS4CalDaysNext[i].addEventListener('mouseleave', (event) => {
                  if (bookingModalS4CalDaysNext[i].className === 'booking-modal-s4-datetime-style booking-modal-s4-datetime-hovered') {
                    bookingModalS4CalDaysNext[i].className = 'booking-modal-s4-datetime-style'
                  }
                })

                // click on available calendar date
                bookingModalS4CalDaysNext[i].addEventListener('click', () => {                
                  if (bookingModalS4CalDaysNext[i].className === 'booking-modal-s4-datetime-style booking-modal-s4-datetime-hovered') {
                    // unstyle all other available dates
                    for (let j = 0; j < bookingModalS4CalDaysNext.length; j++) {
                      bookingModalS4CalDaysNext[j].style.backgroundColor = ''
                      bookingModalS4CalDaysNext[j].style.color = '#FFFFFF'
                    }

                    bookingModalS4CalDaysNext[i].style.backgroundColor = '#F05E7C'
                    bookingModalS4CalDaysNext[i].style.color = '#FFFFFF'

                    bookingModalS4DateSelected = true
                    console.log(bookingModalS4DateSelected)

                    let selectedFinalDate
                    let selectedFinalMonth
                    console.log(bookingModalS4CalDaysNext[i])
                    selectedDateArr = []
                    selectedTimesArr = []
                    selectedTimesNextMonthArr = []
                    // bookingModalS4BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s4-datetime-box-header"><h1 id="booking-modal-s4-current-time-title" class='booking-modal-s4-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s4-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                    
                    // push the selected "date" number to a new array (selectedDateArr)
                    if (bookingModalS4CalDaysNext[i].textContent.length === 1) {
                      selectedDateArr.push(`0${bookingModalS4CalDaysNext[i].textContent}`)
                      selectedFinalDate = `0${bookingModalS4CalDaysNext[i].textContent}`
                    } else {
                      selectedDateArr.push(bookingModalS4CalDaysNext[i].textContent)
                      selectedFinalDate = bookingModalS4CalDaysNext[i].textContent
                    }

                    // loop through initial all available dates array and push all available "times" to a new array
                    for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                      if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                        selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                      }
                    }
                    console.log(selectedTimesArr)

                    console.log(bookingModalS4Date.getMonth().toString().length)

                    // loop through and selectedTimesArr and push times available for the "next month" only
                    for (let i = 0; i < selectedTimesArr.length; i++) {
                      if (bookingModalS4Date.getMonth().toString().length === 1) {
                        let currentMonth = `0${bookingModalS4Date.getMonth() + 1}`
                        selectedFinalMonth = `0${bookingModalS4Date.getMonth() + 1}`

                        if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        } 
                      } else if (bookingModalS4Date.getMonth().toString().length === 2) {
                        if (selectedTimesArr[i].substring(5, 7) === bookingModalS4Date.getMonth()) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS4Date.getMonth() + 1
                        }
                      }
                    }
                    console.log(selectedTimesNextMonthArr)

                    // loop through the new next months available "times" array and display those times into the bookingModalS4BodyRightDateTimeBox
                    for (let i = 0; i < selectedTimesNextMonthArr.length; i++) {
                      let newH1Element = document.createElement('h1')
                      let selectedTimeOnly = selectedTimesNextMonthArr[i].substring(11, 16)
                      newH1Element.className = 'booking-modal-s4-datetimes'
                      
                      // convert times to normal times
                      if (selectedTimeOnly === '12:00') {
                        newH1Element.textContent = '08:00 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '12:30') {
                        newH1Element.textContent = '08:30 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:00') {
                        newH1Element.textContent = '09:00 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:30') {
                        newH1Element.textContent = '09:30 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:00') {
                        newH1Element.textContent = '10:00 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:30') {
                        newH1Element.textContent = '10:30 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:00') {
                        newH1Element.textContent = '11:00 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:30') {
                        newH1Element.textContent = '11:30 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:00') {
                        newH1Element.textContent = '12:00 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:30') {
                        newH1Element.textContent = '12:30 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:00') {
                        newH1Element.textContent = '01:00 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:30') {
                        newH1Element.textContent = '01:30 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:00') {
                        newH1Element.textContent = '02:00 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:30') {
                        newH1Element.textContent = '02:30 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:00') {
                        newH1Element.textContent = '03:00 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:30') {
                        newH1Element.textContent = '03:30 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:00') {
                        newH1Element.textContent = '04:00 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:30') {
                        newH1Element.textContent = '04:30 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      }  
                    }

                    // loop through bookingModalS4BodyRightDateTimeBox to listen for a click from the user
                    for (let i = 1; i < bookingModalS4BodyRightDateTimeBox.children.length; i++) {
                      bookingModalS4BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                        let selectedFinalTime = ''

                        // clear all other times first
                        for (let j = 0; j < bookingModalS4BodyRightDateTimeBox.children.length; j++) {
                          bookingModalS4BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                          bookingModalS4BodyRightDateTimeBox.children[j].style.color = 'black'
                        }

                        bookingModalS4BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                        bookingModalS4BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                        bookingModalS4TimeSelected = true
                        console.log(bookingModalS4TimeSelected)

                        if (bookingModalS4DateSelected && bookingModalS4TimeSelected) {
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                        } else {
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
                          bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                        }

                        // convert the time back to army time
                        if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                          selectedFinalTime = '12:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                          selectedFinalTime = '12:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                          selectedFinalTime = '13:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                          selectedFinalTime = '13:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                          selectedFinalTime = '14:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                          selectedFinalTime = '14:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                          selectedFinalTime = '15:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                          selectedFinalTime = '15:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                          selectedFinalTime = '16:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                          selectedFinalTime = '16:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                          selectedFinalTime = '17:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                          selectedFinalTime = '17:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                          selectedFinalTime = '18:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                          selectedFinalTime = '18:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                          selectedFinalTime = '19:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                          selectedFinalTime = '19:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                          selectedFinalTime = '20:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                          selectedFinalTime = '20:30'
                        }

                        // push the time and date to the booking object
                        service4BookingObj.start_at = `${selectedTimesNextMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                        console.log(service4BookingObj)

                      })
                    }

                  } 
                
                })
              }

            } else if (bookingModalS4NextBtnCalCounter > 1) {
              bookingModalS4NextBtnCalCounter = 1
            }
          })


          /**Prev Btn Cal */
          bookingModalS4PrevBtnCal.addEventListener('mouseover', () => {
            if (bookingModalS4NextBtnCalCounter === 0) {
              bookingModalS4PrevBtnCal.style.cursor = 'not-allowed'
            } else if (bookingModalS4NextBtnCalCounter === 1) {
              bookingModalS4PrevBtnCal.style.cursor = 'pointer'
            }   
          })

          bookingModalS4PrevBtnCal.addEventListener('click', () => {
            if (bookingModalS4NextBtnCalCounter === 0) {
              bookingModalS4PrevBtnCal.style.cursor = 'not-allowed'
            } else if (bookingModalS4NextBtnCalCounter === 1) {
              bookingModalS4PrevBtnCal.style.cursor = 'pointer'
              bookingModalS4NextBtnCalCounter--
              availableCalDaysArr = []
              
              let bookingModalS4DateTimeBoxLength = bookingModalS4BodyRightDateTimeBox.children.length
              for (let i = 1; i < bookingModalS4DateTimeBoxLength; i++) {
                console.log(bookingModalS4BodyRightDateTimeBox.children[1])
                bookingModalS4BodyRightDateTimeBox.removeChild(bookingModalS4BodyRightDateTimeBox.children[1])
              }

              if (bookingModalS4NextBtnCalCounter === 0) {
                bookingModalS4PrevBtnCal.style.cursor = 'not-allowed'
                bookingModalS4NextBtnCal.style.cursor = 'pointer'
              }

              bookingModalS4Date.setMonth(bookingModalS4Date.getMonth() - 1)

              bookingModalS4RenderCalendar()

              bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
              bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
              bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'

              bookingModalS4CalToday = document.querySelector('.booking-modal-s4-today')
              console.log(bookingModalS4CalToday)

              bookingModalS4DateSelected = false
              bookingModalS4TimeSelected = false

              console.log(bookingModalS4DateSelected)
              console.log(bookingModalS4TimeSelected)

              let bookingModalS4CalDaysPrev = document.querySelectorAll('.booking-modal-s4-cal-days')
              let selectedDateArr = []
              let selectedTimesArr = []
              let selectedTimesNextMonthArr = []
              // bookingModalS4BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s4-datetime-box-header"><h1 id="booking-modal-s4-current-time-title" class='booking-modal-s4-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s4-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`

              bookingModalS4CalToday.addEventListener('mouseover', () => {
                console.log('peace')
                if (bookingModalS4CalToday.className === 'booking-modal-s4-today' || bookingModalS4CalToday.className === 'booking-modal-s4-datetime-hovered') {
                  bookingModalS4CalToday.style.cursor = 'pointer'
                  bookingModalS4CalToday.className = 'booking-modal-s4-datetime-hovered'
                }
              })
      
              // mouse leave avaialble calendar date (today)
              bookingModalS4CalToday.addEventListener('mouseleave', () => {
                console.log('peace')
                if (bookingModalS4CalToday.className === 'booking-modal-s4-datetime-hovered') {
                  bookingModalS4CalToday.className = 'booking-modal-s4-today'
                }
              })
      
              // if today is clicked
              bookingModalS4CalToday.addEventListener('click', () => {
                console.log('peace')
                if (bookingModalS4CalToday.className === 'booking-modal-s4-datetime-hovered') {
                  // unstyle all other available dates
                  for (let j = 0; j < bookingModalS4CalDaysPrev.length; j++) {
                    bookingModalS4CalDaysPrev[j].style.backgroundColor = ''
                    bookingModalS4CalDaysPrev[j].style.color = '#FFFFFF'
                  }
      
                  bookingModalS4CalToday.style.backgroundColor = '#f05e7c'
                  bookingModalS4CalToday.style.color = '#FFFFFF'

                  bookingModalS4DateSelected = true
                  console.log(bookingModalS4DateSelected)
      
                  let selectedFinalDate
                  let selectedFinalMonth
                  console.log(bookingModalS4CalToday)
                  selectedDateArr = []
                  selectedTimesArr = []
                  selectedTimesThisMonthArr = []
                  // bookingModalS4BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s4-datetime-box-header"><h1 id="booking-modal-s4-current-time-title" class='booking-modal-s4-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s4-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                  
                  // push the selected "date" number to a new array (selectedDateArr)
                  if (bookingModalS4CalToday.textContent.length === 1) {
                    selectedDateArr.push(`0${bookingModalS4CalToday.textContent}`)
                    selectedFinalDate = `0${bookingModalS4CalToday.textContent}`
                  } else {
                    selectedDateArr.push(bookingModalS4CalToday.textContent)
                    selectedFinalDate = bookingModalS4CalToday.textContent
                  }
      
                  // loop through initial all available dates array and push all available "times" to a new array
                  for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                    if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                      selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                    }
                  }
                  console.log(selectedTimesArr)
      
                  console.log(bookingModalS4Date.getMonth().toString().length)
      
                  // loop through and selectedTimesArr and push "times" available for the "this month" only
                  for (let i = 0; i < selectedTimesArr.length; i++) {
                    if (bookingModalS4Date.getMonth().toString().length === 1) {
                      let currentMonth = `0${bookingModalS4Date.getMonth() + 1}`
                      selectedFinalMonth = `0${bookingModalS4Date.getMonth() + 1}`
                      console.log(bookingModalS4Date.getMonth())
      
                      if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                        selectedTimesThisMonthArr.push(selectedTimesArr[i])
                        console.log(selectedTimesThisMonthArr)
                      } 
      
                    } else if (bookingModalS4Date.getMonth().toString().length === 2) {
                      if (selectedTimesArr[i].substring(5, 7) === bookingModalS4Date.getMonth()) {
                        selectedTimesThisMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS4Date.getMonth() + 1
                        console.log(selectedTimesThisMonthArr)
                      }
                    }
                  }
                  console.log(selectedTimesThisMonthArr)
      
                  // loop through "this months" available "times" array and display those times into the bookingModalS4BodyRightDateTimeBox
                  for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                    let newH1Element = document.createElement('h1')
                    let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                    newH1Element.className = 'booking-modal-s4-datetimes'
                    
                    // convert times to normal times
                    if (selectedTimeOnly === '12:00') {
                      newH1Element.textContent = '08:00 AM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '12:30') {
                      newH1Element.textContent = '08:30 AM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '13:00') {
                      newH1Element.textContent = '09:00 AM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '13:30') {
                      newH1Element.textContent = '09:30 AM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '14:00') {
                      newH1Element.textContent = '10:00 AM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '14:30') {
                      newH1Element.textContent = '10:30 AM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '15:00') {
                      newH1Element.textContent = '11:00 AM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '15:30') {
                      newH1Element.textContent = '11:30 AM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '16:00') {
                      newH1Element.textContent = '12:00 PM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '16:30') {
                      newH1Element.textContent = '12:30 PM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '17:00') {
                      newH1Element.textContent = '01:00 PM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '17:30') {
                      newH1Element.textContent = '01:30 PM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '18:00') {
                      newH1Element.textContent = '02:00 PM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '18:30') {
                      newH1Element.textContent = '02:30 PM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '19:00') {
                      newH1Element.textContent = '03:00 PM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '19:30') {
                      newH1Element.textContent = '03:30 PM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '20:00') {
                      newH1Element.textContent = '04:00 PM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '20:30') {
                      newH1Element.textContent = '04:30 PM'
                      bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                    }  
                  }
      
                  // loop through bookingModalS4BodyRightDateTimeBox to listen for a click from the user
                  for (let i = 1; i < bookingModalS4BodyRightDateTimeBox.children.length; i++) {
                    bookingModalS4BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                      let selectedFinalTime = ''
      
                      // clear all other times first
                      for (let j = 0; j < bookingModalS4BodyRightDateTimeBox.children.length; j++) {
                        bookingModalS4BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                        bookingModalS4BodyRightDateTimeBox.children[j].style.color = 'black'
                      }
      
                      bookingModalS4BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                      bookingModalS4BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                      bookingModalS4TimeSelected = true
                      console.log(bookingModalS4TimeSelected)
                      
                      if (bookingModalS4DateSelected && bookingModalS4TimeSelected) {
                        bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                        bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                        bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                      } else {
                        bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
                        bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
                        bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                      }
      
                      // convert the time back to army time
                      if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                        selectedFinalTime = '12:00'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                        selectedFinalTime = '12:30'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                        selectedFinalTime = '13:00'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                        selectedFinalTime = '13:30'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                        selectedFinalTime = '14:00'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                        selectedFinalTime = '14:30'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                        selectedFinalTime = '15:00'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                        selectedFinalTime = '15:30'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                        selectedFinalTime = '16:00'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                        selectedFinalTime = '16:30'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                        selectedFinalTime = '17:00'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                        selectedFinalTime = '17:30'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                        selectedFinalTime = '18:00'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                        selectedFinalTime = '18:30'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                        selectedFinalTime = '19:00'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                        selectedFinalTime = '19:30'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                        selectedFinalTime = '20:00'
                      } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                        selectedFinalTime = '20:30'
                      }
      
                      // push the time and date to the booking object
                      service4BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                    
                      console.log(service4BookingObj)
      
                    })
                  }

                } 
              })

              // push the days in the calendar to an array to make comparable
              for (let i = 0; i < bookingModalS4CalDaysPrev.length; i++) {
                if (bookingModalS4CalDaysPrev[i].textContent.length === 1) {
                  availableCalDaysArr.push(`0${bookingModalS4CalDaysPrev[i].textContent}`)
                } else {
                  availableCalDaysArr.push(`${bookingModalS4CalDaysPrev[i].textContent}`)
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
                    bookingModalS4CalDaysPrev[j].className = 'booking-modal-s4-datetime-style'
                    console.log(bookingModalS4CalDaysPrev[j].className)
                  }
                  
                }
              }

              // loop through bookingModalS4CalDaysPrev
              for (let i = 0; i < bookingModalS4CalDaysPrev.length; i++) {
                // mouser over available calendar date
                bookingModalS4CalDaysPrev[i].addEventListener('mouseover', () => {
                  if (bookingModalS4CalDaysPrev[i].className === 'booking-modal-s4-datetime-style') {
                    bookingModalS4CalDaysPrev[i].style.cursor = 'pointer'
                    bookingModalS4CalDaysPrev[i].className = 'booking-modal-s4-datetime-style booking-modal-s4-datetime-hovered'
                  }
                })

                // mouse leave avaialble calendar date
                bookingModalS4CalDaysPrev[i].addEventListener('mouseleave', () => {
                  if (bookingModalS4CalDaysPrev[i].className === 'booking-modal-s4-datetime-style booking-modal-s4-datetime-hovered') {
                    bookingModalS4CalDaysPrev[i].className = 'booking-modal-s4-datetime-style'
                  }
                })

                // click on available calendar date
                bookingModalS4CalDaysPrev[i].addEventListener('click', () => {                
                  if (bookingModalS4CalDaysPrev[i].className === 'booking-modal-s4-datetime-style booking-modal-s4-datetime-hovered') {
                    // unstyle all other available dates
                    bookingModalS4CalToday.style.backgroundColor = ''
                    bookingModalS4CalToday.style.color = ''
                    bookingModalS4CalToday.className = 'today'

                    // unstyle all other available dates
                    for (let j = 0; j < bookingModalS4CalDaysPrev.length; j++) {
                      bookingModalS4CalDaysPrev[j].style.backgroundColor = ''
                      bookingModalS4CalDaysPrev[j].style.color = '#FFFFFF'
                    }

                    bookingModalS4CalDaysPrev[i].style.backgroundColor = '#F05E7C'
                    bookingModalS4CalDaysPrev[i].style.color = '#FFFFFF'

                    bookingModalS4DateSelected = true
                    console.log(bookingModalS4DateSelected)


                    let selectedFinalDate
                    let selectedFinalMonth
                    console.log(bookingModalS4CalDaysPrev[i])
                    selectedDateArr = []
                    selectedTimesArr = []
                    selectedTimesNextMonthArr = []
                    // bookingModalS4BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s4-datetime-box-header"><h1 id="booking-modal-s4-current-time-title" class='booking-modal-s4-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s4-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                    
                    // push the selected "date" number to a new array (selectedDateArr)
                    if (bookingModalS4CalDaysPrev[i].textContent.length === 1) {
                      selectedDateArr.push(`0${bookingModalS4CalDaysPrev[i].textContent}`)
                      selectedFinalDate = `0${bookingModalS4CalDaysPrev[i].textContent}`
                    } else {
                      selectedDateArr.push(bookingModalS4CalDaysPrev[i].textContent)
                      selectedFinalDate = bookingModalS4CalDaysPrev[i].textContent
                    }

                    // loop through initial all available dates array and push all available "times" to a new array
                    for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                      if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                        selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                      }
                    }
                    console.log(selectedTimesArr)

                    console.log(bookingModalS4Date.getMonth().toString().length)

                    // loop through and selectedTimesArr and push times available for the "next month" only
                    for (let i = 0; i < selectedTimesArr.length; i++) {
                      if (bookingModalS4Date.getMonth().toString().length === 1) {
                        let currentMonth = `0${bookingModalS4Date.getMonth() + 1}`
                        selectedFinalMonth = `0${bookingModalS4Date.getMonth() + 1}`

                        if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        } 
                      } else if (bookingModalS4Date.getMonth().toString().length === 2) {
                        if (selectedTimesArr[i].substring(5, 7) === bookingModalS4Date.getMonth()) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS4Date.getMonth() + 1
                        }
                      }
                    }
                    console.log(selectedTimesNextMonthArr)

                    // loop through the new next months available "times" array and display those times into the bookingModalS4BodyRightDateTimeBox
                    for (let i = 0; i < selectedTimesNextMonthArr.length; i++) {
                      let newH1Element = document.createElement('h1')
                      let selectedTimeOnly = selectedTimesNextMonthArr[i].substring(11, 16)
                      newH1Element.className = 'booking-modal-s4-datetimes'
                      
                      // convert times to normal times
                      if (selectedTimeOnly === '12:00') {
                        newH1Element.textContent = '08:00 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '12:30') {
                        newH1Element.textContent = '08:30 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:00') {
                        newH1Element.textContent = '09:00 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:30') {
                        newH1Element.textContent = '09:30 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:00') {
                        newH1Element.textContent = '10:00 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:30') {
                        newH1Element.textContent = '10:30 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:00') {
                        newH1Element.textContent = '11:00 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:30') {
                        newH1Element.textContent = '11:30 AM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:00') {
                        newH1Element.textContent = '12:00 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:30') {
                        newH1Element.textContent = '12:30 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:00') {
                        newH1Element.textContent = '01:00 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:30') {
                        newH1Element.textContent = '01:30 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:00') {
                        newH1Element.textContent = '02:00 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:30') {
                        newH1Element.textContent = '02:30 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:00') {
                        newH1Element.textContent = '03:00 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:30') {
                        newH1Element.textContent = '03:30 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:00') {
                        newH1Element.textContent = '04:00 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:30') {
                        newH1Element.textContent = '04:30 PM'
                        bookingModalS4BodyRightDateTimeBox.appendChild(newH1Element)
                      }  
                    }

                    // loop through bookingModalS4BodyRightDateTimeBox to listen for a click from the user
                    for (let i = 1; i < bookingModalS4BodyRightDateTimeBox.children.length; i++) {
                      bookingModalS4BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                        let selectedFinalTime = ''

                        // clear all other times first
                        for (let j = 0; j < bookingModalS4BodyRightDateTimeBox.children.length; j++) {
                          bookingModalS4BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                          bookingModalS4BodyRightDateTimeBox.children[j].style.color = 'black'
                        }

                        bookingModalS4BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                        bookingModalS4BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                        bookingModalS4TimeSelected = true
                        console.log(bookingModalS4TimeSelected)

                        if (bookingModalS4DateSelected && bookingModalS4TimeSelected) {
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
                          bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                        } else {
                          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
                          bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
                          bookingModalS4DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                        }
                        

                        // convert the time back to army time
                        if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                          selectedFinalTime = '12:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                          selectedFinalTime = '12:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                          selectedFinalTime = '13:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                          selectedFinalTime = '13:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                          selectedFinalTime = '14:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                          selectedFinalTime = '14:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                          selectedFinalTime = '15:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                          selectedFinalTime = '15:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                          selectedFinalTime = '16:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                          selectedFinalTime = '16:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                          selectedFinalTime = '17:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                          selectedFinalTime = '17:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                          selectedFinalTime = '18:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                          selectedFinalTime = '18:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                          selectedFinalTime = '19:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                          selectedFinalTime = '19:30'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                          selectedFinalTime = '20:00'
                        } else if (bookingModalS4BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                          selectedFinalTime = '20:30'
                        }

                        // push the time and date to the booking object
                        service4BookingObj.start_at = `${selectedTimesNextMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                        console.log(service4BookingObj)

                      })
                    }


                  } 
                
                })

              }

            }

          })
        }
      }
        service4Availabilities()
          .then(() => { console.log('the service4Availabilities() has been sent to the express server') })
          .catch((error) => { console.log(error) }) 
    }
  }

  confirmDetails() {
    // edit "confirm details"
    editbookingModalS4ConfirmDetails.addEventListener('click', () => {
      bookingModalS4Agents.className = 'booking-modal-s4-body-right hide-container'
      bookingModalS4Location.className = 'booking-modal-s4-right hide-container'
      bookingModalS4DateTime.className = 'booking-modal-s4-body-right hide-container'
      bookingModalS4ConfirmDetails.className = 'booking-modal-s4-body-right'
      
      bookingModalS4Step1.className = ''
      bookingModalS4Step2.className = ''
      bookingModalS4Step3.className = ''
      bookingModalS4Step4.className = 'step-selected'

      bookingModalS4Counter = 3

      // display users booking reciept info here

      // display current phone number
      bookingModalS4CurrentPhoneValue.textContent = `${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(0, 3)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(3, 6)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(6, 10)}`

      // display customer reciept 
        // selected "service"
      bookingModalS4SelectedService.textContent = `${bookingModalS4BodyLeftTitle.textContent}`

        // selected "agent"
      for (let i = 0; i < bookingModalS4BodyRightAgentsBox.children.length; i++) {
        if (bookingModalS4BodyRightAgentsBox.children[i].className === 'booking-modal-s4-agent-selected') {
          bookingModalS4SelectedAgent.textContent = bookingModalS4BodyRightAgentsBox.children[i].textContent
        }
      }
        // selected "location"
        console.log(bookingModalS4CustomerLocationsBox.children[0].style.backgroundColor) 
        const regex = /[\s\n]/g
      for (let i = 0; i < bookingModalS4CustomerLocationsBox.children.length; i++) {
        if (bookingModalS4CustomerLocationsBox.children[i].style.backgroundColor === 'rgb(240, 94, 124)') {
          console.log('Go')
          bookingModalS4SelectedLocation.textContent = bookingModalS4CustomerLocationsBox.children[i].textContent
        }
      }
      
        // selected "date and time"
      let bookingModalS4SelectedTime

      if (service4BookingObj.start_at.slice(11, 16) === '12:00') {
        bookingModalS4SelectedTime = '08:00 AM EST'
        service4BookingObj.appointment_time = '08:00 AM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '12:30') {
        bookingModalS4SelectedTime = '08:30 AM EST'
        service4BookingObj.appointment_time = '08:30 AM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '13:00') {
        bookingModalS4SelectedTime = '09:00 AM EST'
        service4BookingObj.appointment_time = '09:00 AM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '13:30') {
        bookingModalS4SelectedTime = '09:30 AM EST'
        service4BookingObj.appointment_time = '09:30 AM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '14:00') {
        bookingModalS4SelectedTime = '10:00 AM EST'
        service4BookingObj.appointment_time = '10:00 AM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '14:30') {
        bookingModalS4SelectedTime = '10:30 AM EST'
        service4BookingObj.appointment_time = '10:30 AM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '15:00') {
        bookingModalS4SelectedTime = '11:00 AM EST'
        service4BookingObj.appointment_time = '11:00 AM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '15:30') {
        bookingModalS4SelectedTime = '11:30 AM EST'
        service4BookingObj.appointment_time = '11:30 AM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '16:00') {
        bookingModalS4SelectedTime = '12:00 PM EST'
        service4BookingObj.appointment_time = '12:00 PM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '16:30') {
        bookingModalS4SelectedTime = '12:30 PM EST'
        service4BookingObj.appointment_time = '12:30 PM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '17:00') {
        bookingModalS4SelectedTime = '01:00 PM EST'
        service4BookingObj.appointment_time = '01:00 PM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '17:30') {
        bookingModalS4SelectedTime = '01:30 PM EST'
        service4BookingObj.appointment_time = '01:30 PM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '18:00') {
        bookingModalS4SelectedTime = '02:00 PM EST'
        service4BookingObj.appointment_time = '02:00 PM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '18:30') {
        bookingModalS4SelectedTime = '02:30 PM EST'
        service4BookingObj.appointment_time = '02:30 PM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '19:00') {
        bookingModalS4SelectedTime = '03:00 PM EST'
        service4BookingObj.appointment_time = '03:00 PM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '19:30') {
        bookingModalS4SelectedTime = '03:30 PM EST'
        service4BookingObj.appointment_time = '03:30 PM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '20:00') {
        bookingModalS4SelectedTime = '04:00 PM EST'
        service4BookingObj.appointment_time = '04:00 PM EST'
      } else if (service4BookingObj.start_at.slice(11, 16) === '20:30') {
        bookingModalS4SelectedTime = '04:30 PM EST'
        service4BookingObj.appointment_time = '04:30 PM EST'
      }   

    
      bookingModalS4SelectedDateTime.textContent = `${service4BookingObj.start_at.slice(5, 7)}/${service4BookingObj.start_at.slice(8, 10)}/${service4BookingObj.start_at.slice(0, 4)} @ ${bookingModalS4SelectedTime}`

      editbookingModalS4ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
      editbookingModalS4ConfirmDetails.className = 'bi bi-pencil-square right1rem'
    })

    // booking modal s2 change phone number checkbox
    bookingModalS4ChangeNumberCheckbox.addEventListener('click', () => {
      if (bookingModalS4ChangeNumberCheckbox.checked) {
        // display change number divs
        bookingModalS4ChangePhone.className = 'booking-modal-s4-change-phone'
        bookingModalS4ChangePhoneCaution.className = 'booking-modal-s4-change-phone-caution'

        // get users email from storage -- display on div
        // updateUserPhoneMongoDbObj.address.address_line_1 = JSON.parse(localStorage.getItem('currentUser')).address.address_line_1
        // updateUserPhoneMongoDbObj.address.administrative_district_level_1 = JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1
        // updateUserPhoneMongoDbObj.address.locality = JSON.parse(localStorage.getItem('currentUser')).address.locality
        // updateUserPhoneMongoDbObj.address.postal_code = JSON.parse(localStorage.getItem('currentUser')).address.postal_code
        updateservice4PhoneBookingObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
        
        console.log(updateservice4PhoneBookingObj)

      } else {
        // hide change number divs
        bookingModalS4ChangePhone.className = 'booking-modal-s4-change-phone hide-container'
        bookingModalS4ChangePhoneCaution.className = 'booking-modal-s4-change-phone-caution hide-container'
      }

      // change phone number submit btn clicked
      bookingModalS4ChangePhoneBtn.addEventListener('click', () => {
        // check that bookingModalS4NextBtn.className = 'booking-modal-s4-next' matches regex
        if (bookingModalS4ChangePhoneInput.value.match(myApp.phoneCheck1) || bookingModalS4ChangePhoneInput.value.match(myApp.phoneCheck2) || bookingModalS4ChangePhoneInput.value.match(myApp.phoneCheck3) || bookingModalS4ChangePhoneInput.value.match(myApp.phoneCheck4) || bookingModalS4ChangePhoneInput.value.match(myApp.phoneCheck5) || bookingModalS4ChangePhoneInput.value.match(myApp.phoneCheck6)) {
          updateservice4PhoneBookingObj.phone_number = bookingModalS4ChangePhoneInput.value
          bookingModalS4ChangePhoneError.className = 'booking-modal-s4-change-phone-input-error hide-container'
          bookingModalS4ChangePhoneInput.className = 'input-valid-clear'

          // filter/clean the phone value
          let filteredCleanPhoneValue = bookingModalS4ChangePhoneInput.value.replace(myApp.filterPhone, '')     

          if (filteredCleanPhoneValue !== JSON.parse(localStorage.getItem('currentUser')).phone_number) {
            updateservice4PhoneBookingObj.phone_number = filteredCleanPhoneValue
            service4BookingObj.phone_number = filteredCleanPhoneValue

            if (bookingModalS4ChangePhoneInput.className === 'input-valid-clear') {

              bookingModalS4ChangePhone.className = 'booking-modal-s4-change-phone hide-container'
              bookingModalS4ChangePhoneCaution.className = 'booking-modal-s4-change-phone-caution hide-container'
              bookingModalS4ChangePhoneLoading.className = 'booking-modal-s4-change-phone-loading'

              // if so update the new number in MongoDB
              async function updateMongoDBPhoneNumber() {
                // req & res
                const update_phone_number_mongodb_req = await fetch(`/updatePhoneNumberMongoDB/${JSON.stringify(updateservice4PhoneBookingObj)}`, { method: 'post' })
                const update_phone_number_mongodb_res = await update_phone_number_mongodb_req.json()

                console.log(update_phone_number_mongodb_res)

                // change the current number to the new number (confirm details)
                bookingModalS4CurrentPhoneValue.textContent = `${filteredCleanPhoneValue.slice(0, 3)}-${filteredCleanPhoneValue.slice(3, 6)}-${filteredCleanPhoneValue.slice(6, 10)}`

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
                    updateservice4PhoneBookingObj.customer_id = get_all_users_square_res.customers[i].id
                    // service1BookingObj.customer_id = get_all_users_square_res.customers[i].id
                    console.log(updateservice4PhoneBookingObj)
                  }
                }
                  // send new number to Square Api
                async function updateSquarePhoneNumber() {
                  // req & res
                  const update_phone_number_square_req = await fetch(`/updatePhoneSquare/${JSON.stringify(updateservice4PhoneBookingObj)}`, { method: 'put' })
                  const update_phone_number_square_res = await update_phone_number_square_req.json()
    
                  console.log(update_phone_number_square_res)
    
                  // change the current number to the new number (confirm details)
                  bookingModalS4CurrentPhoneValue.textContent = `${filteredCleanPhoneValue.slice(0, 3)}-${filteredCleanPhoneValue.slice(3, 6)}-${filteredCleanPhoneValue.slice(6, 10)}`

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
                    bookingModalS4ChangePhoneLoading.className = 'booking-modal-s4-change-phone-loading hide-container'
                    bookingModalS4ChangePhoneSuccess.className = 'booking-modal-s4-change-phone-success'

                    setTimeout(() => {
                      bookingModalS4ChangePhoneSuccess.className = 'booking-modal-s4-change-phone-success hide-container'
                      bookingModalS4ChangePhone.className = 'booking-modal-s4-change-phone hide-container'
                      bookingModalS4ChangePhoneCaution.className = 'booking-modal-s4-change-phone-caution hide-container'
    
                      bookingModalS4ChangeNumberCheckbox.checked = false
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
              // !bookingModalS4CurrentPhone.checked
            }
          } else {
            // show the error div
            bookingModalS4ChangePhoneError.className = 'booking-modal-s4-change-phone-input-error'

            bookingModalS4ChangePhoneError.innerHTML = `<h1>This number already exists</h1>`
            // "this phone number already exists"
          }
          

        } else {
          // show the phone error divs
          bookingModalS4ChangePhoneError.className = 'booking-modal-s4-change-phone-input-error'
          bookingModalS4ChangePhoneError.innerHTML = `<h1>This number is invalid</h1>`
          bookingModalS4ChangePhoneInput.className = 'booking-modal-s4-change-phone-input-error input-invalid'
        }
      })
    })
  }

  bookingModalNextBtn() {
    // next btn clicked
    bookingModalS4NextBtn.addEventListener('click', () => {
      bookingModalS4Counter++

      // counter on "Select an Agent"
      if (bookingModalS4Counter === 1 && bookingModalS4AgentsSelected) {
        bookingModalS4Agents.className = 'booking-modal-s4-right hide-container'
        bookingModalS4Location.className = 'booking-modal-s4-right'
        bookingModalS4DateTime.className = 'booking-modal-s4-right hide-container'
        bookingModalS4ConfirmDetails.className = 'booking-modal-s4-right hide-container'

        bookingModalS4Step1.className = ''
        bookingModalS4Step2.className = 'step-selected'
        bookingModalS4Step3.className = ''
        bookingModalS4Step4.className = ''

        this.enterLocation()

        // if "location" has been selected keep the footer next btn activated
        if (bookingModalS4LocationSelected) {
          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
        } else {
          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
          bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
        }

        // activate the "edit" locations icon
        editbookingModalS4LocationNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS4Location.className = 'bi bi-pencil-square right1rem'

      } else if (bookingModalS4Counter === 1 && !bookingModalS4AgentsSelected) {
        console.log('Please select an agent.')
        bookingModalS4Counter = 0
      }

      // counter on "Select a Location"
      if (bookingModalS4Counter === 2 && bookingModalS4LocationSelected) {
        bookingModalS4Agents.className = 'booking-modal-s4-right hide-container'
        bookingModalS4Location.className = 'booking-modal-s4-right hide-container'
        bookingModalS4DateTime.className = 'booking-modal-s4-right'
        bookingModalS4ConfirmDetails.className = 'booking-modal-s4-right hide-container'

        bookingModalS4Step1.className = ''
        bookingModalS4Step2.className = ''
        bookingModalS4Step3.className = 'step-selected'
        bookingModalS4Step4.className = ''

        this.selectDateTime()

        // if "date" & "time" has been selected already fill the footer next btn
        if (bookingModalS4DateSelected && bookingModalS4TimeSelected) {
          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null hide-container'
          bookingModalS4NextBtn.className = 'booking-modal-s4-next'
        } else {
          bookingModalS4NextNullBtn.className = 'booking-modal-s4-next-null'
          bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'
        }

        editbookingModalS4DateTimeNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS4DateTime.className = 'bi bi-pencil-square right1rem'
      } else if (bookingModalS4Counter === 2 && !bookingModalS4LocationSelected) {
        console.log('Please select a location')
        bookingModalS4Counter = 1
      }

      // counter on "Select Date & Time"
      if (bookingModalS4Counter === 3 && bookingModalS4DateSelected && bookingModalS4TimeSelected) {
        bookingModalS4Agents.className = 'booking-modal-s4-right hide-container'
        bookingModalS4Location.className = 'booking-modal-s4-right hide-container'
        bookingModalS4DateTime.className = 'booking-modal-s4-right hide-container'
        bookingModalS4ConfirmDetails.className = 'booking-modal-s4-right'

        bookingModalS4Step1.className = ''
        bookingModalS4Step2.className = ''
        bookingModalS4Step3.className = ''
        bookingModalS4Step4.className = 'step-selected'

        this.confirmDetails()

        editbookingModalS4ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS4ConfirmDetails.className = 'bi bi-pencil-square right1rem'

        bookingModalS4NextBtn.className = 'booking-modal-s4-next hide-container'

        // display current phone number
        bookingModalS4CurrentPhoneValue.textContent = `${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(0, 3)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(3, 6)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(6, 10)}`

        // display customer reciept 
          // selected "service"
        bookingModalS4SelectedService.textContent = `${bookingModalS4BodyLeftTitle.textContent}`

          // selected "agent"
        for (let i = 0; i < bookingModalS4BodyRightAgentsBox.children.length; i++) {
          if (bookingModalS4BodyRightAgentsBox.children[i].className === 'booking-modal-s4-agent-selected') {
            bookingModalS4SelectedAgent.textContent = bookingModalS4BodyRightAgentsBox.children[i].textContent
          }
        }
          // selected "location"
          console.log(bookingModalS4CustomerLocationsBox.children[0].style.backgroundColor) 
          const regex = /[\s\n]/g
        for (let i = 0; i < bookingModalS4CustomerLocationsBox.children.length; i++) {
          if (bookingModalS4CustomerLocationsBox.children[i].style.backgroundColor === 'rgb(240, 94, 124)') {
            console.log('Go')
            bookingModalS4SelectedLocation.textContent = bookingModalS4CustomerLocationsBox.children[i].textContent
          }
        }
        
          // selected "date and time"
        let bookingModalS4SelectedTime

        if (service4BookingObj.start_at.slice(11, 16) === '12:00') {
          bookingModalS4SelectedTime = '08:00 AM EST'
          service4BookingObj.appointment_time = '08:00 AM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '12:30') {
          bookingModalS4SelectedTime = '08:30 AM EST'
          service4BookingObj.appointment_time = '08:30 AM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '13:00') {
          bookingModalS4SelectedTime = '09:00 AM EST'
          service4BookingObj.appointment_time = '09:00 AM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '13:30') {
          bookingModalS4SelectedTime = '09:30 AM EST'
          service4BookingObj.appointment_time = '09:30 AM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '14:00') {
          bookingModalS4SelectedTime = '10:00 AM EST'
          service4BookingObj.appointment_time = '10:00 AM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '14:30') {
          bookingModalS4SelectedTime = '10:30 AM EST'
          service4BookingObj.appointment_time = '10:30 AM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '15:00') {
          bookingModalS4SelectedTime = '11:00 AM EST'
          service4BookingObj.appointment_time = '11:00 AM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '15:30') {
          bookingModalS4SelectedTime = '11:30 AM EST'
          service4BookingObj.appointment_time = '11:30 AM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '16:00') {
          bookingModalS4SelectedTime = '12:00 PM EST'
          service4BookingObj.appointment_time = '12:00 PM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '16:30') {
          bookingModalS4SelectedTime = '12:30 PM EST'
          service4BookingObj.appointment_time = '12:30 PM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '17:00') {
          bookingModalS4SelectedTime = '01:00 PM EST'
          service4BookingObj.appointment_time = '01:00 PM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '17:30') {
          bookingModalS4SelectedTime = '01:30 PM EST'
          service4BookingObj.appointment_time = '01:30 PM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '18:00') {
          bookingModalS4SelectedTime = '02:00 PM EST'
          service4BookingObj.appointment_time = '02:00 PM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '18:30') {
          bookingModalS4SelectedTime = '02:30 PM EST'
          service4BookingObj.appointment_time = '02:30 PM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '19:00') {
          bookingModalS4SelectedTime = '03:00 PM EST'
          service4BookingObj.appointment_time = '03:00 PM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '19:30') {
          bookingModalS4SelectedTime = '03:30 PM EST'
          service4BookingObj.appointment_time = '03:30 PM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '20:00') {
          bookingModalS4SelectedTime = '04:00 PM EST'
          service4BookingObj.appointment_time = '04:00 PM EST'
        } else if (service4BookingObj.start_at.slice(11, 16) === '20:30') {
          bookingModalS4SelectedTime = '04:30 PM EST'
          service4BookingObj.appointment_time = '04:30 PM EST'
        }  

        bookingModalS4SelectedDateTime.textContent = `${service4BookingObj.start_at.slice(5, 7)}/${service4BookingObj.start_at.slice(8, 10)}/${service4BookingObj.start_at.slice(0, 4)} @ ${bookingModalS4SelectedTime}`

        // price
        bookingModalS4SelectedPrice.textContent = service4BookingObj.service_price
        localStorage.setItem('service4Price', service4BookingObj.service_price.slice(1,service4BookingObj.service_price.length) * 100)
        bookingModalS4PayBtnPrice.textContent = `Pay ${service4BookingObj.service_price}`

        editbookingModalS4ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS4ConfirmDetails.className = 'bi bi-pencil-square right1rem'

      } else if (bookingModalS4Counter === 3 && !bookingModalS4DateSelected || bookingModalS4Counter === 3 && !bookingModalS4TimeSelected) {
        console.log('Please select both a date and time.')
        bookingModalS4Counter = 2
      }

    })
  }

  createBooking() {
    // if reciept checkbox clicked show payment div
    bookingModalS4InfoCorrectCheckbox.addEventListener('click', () => {
      if (bookingModalS4InfoCorrectCheckbox.checked) {
        bookingModalS4PaymentsContainer.className = 'booking-modal-s4-payments-container'
        const bookingModalS4PayBtn = document.getElementById('booking-modal-s4-card-button')

        bookingModalS4PayBtn.addEventListener('click', () => {
          // make sure receipt checkbox is selected
          if (bookingModalS4InfoCorrectCheckbox.checked) {
            let paymentStatus = document.getElementById('booking-modal-s4-payment-status-container')
            paymentStatus.className = ''
    
            // hide payment form
            // bookingModalS4PaymentForm.className = 'hide-container'
  
            // show lodaing payment
            bookingModalS4LoadingPayment.className = 'booking-modal-s4-loading-payment'                       
    
            const paymentVaild = setInterval(() => {
              if (paymentStatus.className === 'is-failure') {
                // hide loading payment box
                bookingModalS4LoadingPayment.className = 'booking-modal-s4-loading-payment hide-container'
                // show payment form
                bookingModalS4PaymentForm.className = ''
                clearInterval(paymentVaild)
              } else if (paymentStatus.className === 'is-success') {
                if (JSON.parse(localStorage.getItem('payment-response')).payment.status === "COMPLETED") {
                  // hide loading payment box
                  bookingModalS4LoadingPayment.className = 'booking-modal-s4-loading-payment hide-container'
                  // show payment form
                  bookingModalS4PaymentForm.className = ''
                  // give margin to payment success div
                  bookingModalS4LoadingPayment.style.marginBottom = '2rem'
                  bookingModalS4Policy1.style.marginTop = '2rem'

                  console.log(service4BookingObj)

                  // hide confirm details div
                  bookingModalS4ConfirmDetailsContainer.className = 'booking-modal-s4-body-right-confirm-details-container hide-container'
                  // show loading booking container
                  bookingModalS4Loading.className = 'booking-modal-s4-confirm-details-loading'
                  // do the following...

                  // create the booking --> Square Api
                  async function createBooking() {
                    // req & res
                    const create_booking_req = await fetch(`/createBooking/${JSON.stringify(service4BookingObj)}`, { method: 'post' })
                    const create_booking_res = await create_booking_req.json()
                    console.log(create_booking_res)

                    if (create_booking_res.booking) {
                      // send both email and text confirmation

                      // email booking confirmation
                      async function emailBooking() {
                        // req & res
                        const send_email_booking_req = await fetch(`/emailBooking/${JSON.stringify(service4BookingObj)}`)
                        const send_email_booking_res = await send_email_booking_req.json()
                        console.log(send_email_booking_res)
                      }
                        emailBooking()
                          .then(() => { console.log('the emailBookng() has been sent to the express server') })
                          .catch((error) => { console.log(error) })

                      // text booking confirmation
                      async function textBooking() {
                        // req & res
                        const send_text_booking_req = await fetch(`/textBooking/${JSON.stringify(service4BookingObj)}`, { method: 'POST' })
                        const send_text_booking_res = await send_text_booking_req.json()
                        console.log(send_text_booking_res)

                        if (send_text_booking_res) {
                          // when done show the booking complete div
                          bookingModalS4Loading.className = 'booking-modal-s4-confirm-details-loading hide-container'
                          bookingModalS4LoadingSuccess.className = 'booking-modal-s4-confirm-details-success'
                          console.log('this is the service4BookingObj duration_minutes', service4BookingObj)
                          if (service4BookingObj.duration_minutes / 60 < 1) {
                            bookingModalS4LoadingSuccess.innerHTML = 
                            `
                            <div class="booking-modal-s4-loading-success"></div>
                            <h1>Thank you for booking with us!</h1>
                            <p>Please check your email and phone for your booking details.</p>
                            <p>Talk to you soon!</p>
                            <p>&#128515;</p>
                            `
                            // refresh the page
                            setTimeout(() => {
                              // myApp.bookingModalS4.className = 'booking-modal-s4 hide-container'
                              location.reload()
                            }, 8000)
                          } else if (service4BookingObj.duration_minutes / 60 === 1) {
                            bookingModalS4LoadingSuccess.innerHTML =
                            `
                            <div class="booking-modal-s4-loading-success"></div>
                            <h1>Thank you for booking with us!</h1>
                            <p>Please check your email and phone for your booking details.</p>
                            <p>See you soon!</p>
                            <p>&#128515;</p>
                            `

                            // refresh the page
                            setTimeout(() => {
                              // myApp.bookingModalS4.className = 'booking-modal-s4 hide-container'
                              location.reload()
                            }, 8000)
                          } else if (service4BookingObj.duration_minutes / 60 > 1) {
                            bookingModalS4LoadingSuccess.innerHTML =
                            `
                            <div class="booking-modal-s4-loading-success"></div>
                            <h1>Thank you for booking with us!</h1>
                            <p>Please check your email and phone for your booking details.</p>
                            <p>See you soon!</p>
                            <p>&#128515;</p>
                            `

                            // refresh the page
                            setTimeout(() => {
                              // myApp.sbookingModalS4.className = 'booking-modal-s4 hide-container'
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
                  bookingModalS4LoadingPayment.className = 'booking-modal-s4-loading-payment hide-container'
                  // show payment form
                  bookingModalS4PaymentForm.className = ''
                  // input-invalid all payment fields & show error message 
                  clearInterval(paymentVaild)
                }
              }
            }, 500)
          } else {
            bookingModalS4InfoCorrectCheckbox.className = 'input-invalid'
          }
        })
      } else {
        bookingModalS4PaymentsContainer.className = 'booking-modal-s4-payments-container hide-container'
      }
    })


  }

  closeModal() {
    bookingModalS4Close.addEventListener('click', () => {
      console.log('ive been clicked on')
      bookingModalS4.className = 'booking-modal-s4 hide-container'
    })
  
    document.addEventListener('click', (event) => { 
      if (event.target === bookingModalS4) {
        bookingModalS4.className = 'booking-modal-s4 hide-container'
      }
    })
  }
}

const service4Component = new Service4Component()

module.exports = { service4Component }
