const myApp = require('../../index.js')

let bookingModalS3Date = new Date()

const bookingModalS3NextBtnCal = document.querySelector('.booking-modal-s3-next-cal')
const bookingModalS3PrevBtnCal = document.querySelector('.booking-modal-s3-prev-cal')

let bookingModalS3NextBtnCalCounter = 0

const bookingModalS3RenderCalendar = () => {
  bookingModalS3Date.setDate(1)

  const monthDays = document.querySelector(".booking-modal-s3-days")
  monthDays.innerHTML = ``

  const lastDay = new Date(
    bookingModalS3Date.getFullYear(),
    bookingModalS3Date.getMonth() + 1,
    0
  ).getDate()

  const prevLastDay = new Date(
    bookingModalS3Date.getFullYear(),
    bookingModalS3Date.getMonth(),
    0
  ).getDate()

  const firstDayIndex = bookingModalS3Date.getDay();

  const lastDayIndex = new Date(
    bookingModalS3Date.getFullYear(),
    bookingModalS3Date.getMonth() + 1,
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

  document.querySelector(".booking-modal-s3-date h1").innerHTML = months[bookingModalS3Date.getMonth()]

  document.querySelector(".booking-modal-s3-date p").innerHTML = new Date().toDateString()

  let days = ""

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      bookingModalS3Date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="booking-modal-s3-today">${i}</div>`
    } else {
      days += `<div class='booking-modal-s3-cal-days'>${i}</div>`
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days
  }
}

bookingModalS3RenderCalendar()

const bookingModalS3 = document.getElementById('booking-modal-s3')
const bookingModalS3Close = document.getElementById('booking-modal-s3-close')
const bookingModalS3BodyLeft = document.getElementById('booking-modal-s3-body-left')
const bookingModalS3BodyLeftTitle = document.getElementById('booking-modal-s3-body-left-title')

const bookingModalS3Step1 = document.getElementById('booking-modal-s3-step1')
const editbookingModalS3Agents = document.getElementById('edit-bm-s3-agents')
const bookingModalS3Agents = document.getElementById('booking-modal-s3-agents')
let bookingModalS3BodyRightAgentsBox = document.getElementById('booking-modal-s3-agents-box')
const bookingModalS3AgentsPickedIcon = document.getElementById('bm-s3-agents-picked-icon')
let bookingModalS3AgentsSelected = false

const bookingModalS3Step2 = document.getElementById('booking-modal-s3-step2')
const editbookingModalS3LocationNull = document.getElementById('edit-bm-3-location-null')
const editbookingModalS3Location = document.getElementById('edit-bm-3-location')
const bookingModalS3LocationPickedIcon = document.getElementById('bm-3-location-picked-icon')
let bookingModalS3LocationSelected = false

const bookingModalS3Step3 = document.getElementById('booking-modal-s3-step3')
const editbookingModalS3DateTimeNull = document.getElementById('edit-bm-s3-datetime-null')
const editbookingModalS3DateTime = document.getElementById('edit-bm-s3-datetime')
const bookingModalS3DateTimePickedIcon = document.getElementById('bm-datetime-picked-icon')
let bookingModalS3DateSelected = false
let bookingModalS3TimeSelected = false
let bookingModalS3DateTimeSelected

const bookingModalS3Step4 = document.getElementById('booking-modal-s3-step4')
const editbookingModalS3ConfirmDetailsNull = document.getElementById('edit-bm-confirm-details-null')
const editbookingModalS3ConfirmDetails = document.getElementById('edit-bm-confirm-details')
const bookingModalS3ConfirmDetailsPickedIcon = document.getElementById('bm-confirm-details-picked-icon')
let bookingModalS3ConfirmDetailsSelected = false


// const bookingModalS3BodyRightAgents = document.getElementById('booking-modal-s3-body-right-agents')


const bookingModalS3Location = document.getElementById('booking-modal-s3-location')
// const bookingModalS3BodyRightLocations = document.getElementById('booking-modal-s3-body-right-location')
const bookingModalS3NewLocationCheckbox = document.getElementById('booking-modal-s3-new-location-checkbox')
let bookingModalS3NewLocationCheckboxCounter = 0
const bookingModalS3CustomerLocationsBox = document.getElementById('booking-modal-s3-customer-locations-box')
let bookingModalS3NewCustomerLocationBox = document.getElementById('booking-modal-s3-new-location-box')
const bookingModalS3NewCustomerLocationInputTypeError = document.getElementById('booking-modal-s3-new-location-box-input-type-error')
const bookingModalS3NewCustomerLocationInputType = document.getElementById('booking-modal-s3-new-location-box-input-type')
const bookingModalS3NewCustomerLocationInputAddressError = document.getElementById('booking-modal-s3-new-location-box-input-address-error')
const bookingModalS3NewCustomerLocationInputAddress = document.getElementById('booking-modal-s3-new-location-box-input-address')
const bookingModalS3NewCustomerLocationInputStateError = document.getElementById('booking-modal-s3-new-location-box-input-state-error')
const bookingModalS3NewCustomerLocationInputState = document.getElementById('booking-modal-s3-new-location-box-input-state')
const bookingModalS3NewCustomerLocationInputCityError = document.getElementById('booking-modal-s3-new-location-box-input-city-error')
const bookingModalS3NewCustomerLocationInputCity = document.getElementById('booking-modal-s3-new-location-box-input-city')
const bookingModalS3NewCustomerLocationInputZipCodeError = document.getElementById('booking-modal-s3-new-location-box-input-zipcode-error')
const bookingModalS3NewCustomerLocationInputZipCode = document.getElementById('booking-modal-s3-new-location-box-input-zipcode')
const bookingModalS3NewCustomerLocationSubmitBtn = document.getElementById('booking-modal-s3-new-location-submit-btn')
let bookingModalS3NewCustomerLocationObj = {
email_address: ''
}

const bookingModalS3DateTime = document.getElementById('booking-modal-s3-datetime')
// const bookingModalS3BodyRightDateTime = document.getElementById('booking-modal-s3-body-right-datetime')
let bookingModalS3BodyRightDateTimeBox = document.getElementById('booking-modal-s3-datetime-box')
const bookingModalS3BodyRightCurrentTimeTitle = document.getElementById('booking-modal-s3-current-time-title')
let bookingModalS3CalToday = document.querySelector('.booking-modal-s3-today')
let bookingModalS3CalDays = document.querySelectorAll('.booking-modal-s3-cal-days')

const bookingModalS3ConfirmDetails = document.getElementById('booking-modal-s3-confirm-details')
const bookingModalS3ConfirmDetailsTitle = document.getElementById('booking-modal-s3-confirm-details-title')
const bookingModalS3ConfirmDetailsContainer = document.getElementById('booking-modal-s3-body-right-confirm-details-container')
const bookingModalS3ChangeNumberCheckbox = document.getElementById('booking-modal-s3-change-number-checkbox')
const bookingModalS3CurrentPhoneContainer = document.getElementById('booking-modal-s3-current-phone-container')
const bookingModalS3CurrentPhoneValue = document.getElementById('booking-modal-s3-current-phone-value')
const bookingModalS3ChangePhone = document.getElementById('booking-modal-s3-change-phone')
const bookingModalS3ChangePhoneError = document.getElementById('booking-modal-s3-change-phone-error')
const bookingModalS3ChangePhoneInput = document.getElementById('booking-modal-s3-change-phone-input')
const bookingModalS3ChangePhoneBtn = document.getElementById('booking-modal-s3-change-phone-input-btn')
const bookingModalS3ChangePhoneCaution = document.getElementById('booking-modal-s3-change-phone-caution')
const bookingModalS3ChangePhoneLoading = document.getElementById('booking-modal-s3-change-phone-loading')
const bookingModalS3ChangePhoneSuccess = document.getElementById('booking-modal-s3-change-phone-success')
const bookingModalS3InfoCorrectCheckbox = document.getElementById('booking-modal-s3-info-correct-checkbox')
const bookingModalS3InfoCorrectRequireIcon = document.getElementById('booking-modal-s3-info-correct-require-icon')
const bookingModalS3SelectedService = document.getElementById('booking-modal-s3-selected-service')
const bookingModalS3SelectedAgent = document.getElementById('booking-modal-s3-selected-agent')
const bookingModalS3SelectedLocation = document.getElementById('booking-modal-s3-selected-location')
const bookingModalS3SelectedDateTime = document.getElementById('booking-modal-s3-selected-datetime')
const bookingModalS3SelectedPrice = document.getElementById('booking-modal-s3-selected-price')
const bookingModalS3PayBtnPrice = document.getElementById('booking-modal-s3-card-button')

const bookingModalS3PaymentsContainer = document.getElementById('booking-modal-s3-payments-container')
const bookingModalS3PaymentForm = document.getElementById('booking-modal-s3-payment-form')
const bookingModalS3LoadingPayment = document.getElementById('booking-modal-s3-loading-payment')
// const bookingModalS3BookingLoading = document.getElementById('booking-modal-s3-confirm-details-loading')
// const bookingModalS3BookingSuccess = document.getElementById('booking-modal-s3-confirm-details-success')
// const bookingModalS3PaymentStatus = document.getElementById('booking-modal-s3-payment-status-container')
const bookingModalS3Policy1 = document.getElementById('booking-modal-s3-policy1')

const bookingModalS3Loading = document.getElementById('booking-modal-s3-confirm-details-loading')
const bookingModalS3LoadingSuccess = document.getElementById('booking-modal-s3-confirm-details-success') 

const bookingModalS3BackBtn = document.getElementById('booking-modal-s3-back')
const bookingModalS3NextNullBtn = document.getElementById('booking-modal-s3-next-null') 
const bookingModalS3NextBtn = document.getElementById('booking-modal-s3-next')

const bookingModalS3Footer = document.getElementById('booking-modal-s3-footer')

let bookingModalS3Counter = 0

let service3NewLocationObj = {
name: '',
address_line_1: '',
administrative_district_level_1: '',
locality: '',
postal_code: ''
}

const service3AvailabilityObj = {
start_at: '',
end_at: '',
location_id: '',
service_variation_id: ''
}

let updateService3PhoneBookingObj = {
  customer_id: '',
  email_address: '',
  phone_number: ''
}

let service3BookingObj = {
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


class Service3Component {
  constructor() {
    
    this.bookingModalNextBtn = this.bookingModalNextBtn()
    this.createBooking = this.createBooking()
    this.closeModal = this.closeModal()
  }

  selectAgent() {
    // edit agent click
    editbookingModalS3Agents.addEventListener('click', () => {
      // right changes
      bookingModalS3Agents.className = 'booking-modal-s3-right'
      bookingModalS3Location.className = 'booking-modal-s3-right hide-container'
      bookingModalS3DateTime.className = 'booking-modal-s3-right hide-container'
      bookingModalS3ConfirmDetails.className = 'booking-modal-s3-right hide-container'

      bookingModalS3Step1.className = 'step-selected'
      bookingModalS3Step2.className = ''
      bookingModalS3Step3.className = ''
      bookingModalS3Step4.className = ''

      bookingModalS3Counter = 0

      // footer changes
      if (bookingModalS3AgentsSelected) {
        bookingModalS3NextBtn.className = 'booking-modal-s3-next'
        bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
      } else {
        bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
        bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
      }
    })

    // if user is on select an "agent"
    if (myApp.companyOptions3Bool && myApp.bookingModalS3.className === 'booking-modal-s3') {

      // select the 1st booking modal step
      bookingModalS3Step1.className = 'step-selected'

      // set early values for service booking object properties
      service3BookingObj.duration_minutes = myApp.companyServicesObj[`${bookingModalS3BodyLeftTitle.textContent}`].duration_minutes
      service3BookingObj.service_variation_id = myApp.companyServicesObj[`${bookingModalS3BodyLeftTitle.textContent}`].service_variation_id
      service3BookingObj.service_variation_version = myApp.companyServicesObj[`${bookingModalS3BodyLeftTitle.textContent}`].service_variation_version
      service3BookingObj.service_price = myApp.companyServicesObj[`${bookingModalS3BodyLeftTitle.textContent}`].service_price
      service3BookingObj.service_name = bookingModalS3BodyLeftTitle.textContent
      service3BookingObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
      service3BookingObj.customer_id = JSON.parse(localStorage.getItem('currentUser')).id
      service3BookingObj.phone_number = JSON.parse(localStorage.getItem('currentUser')).phone_number                             
      service3BookingObj.given_name = JSON.parse(localStorage.getItem('currentUser')).given_name
      service3BookingObj.family_name = JSON.parse(localStorage.getItem('currentUser')).family_name

      // get company agents
      async function getCompanyAgents() {
        // req & res
        const get_company_agents_req = await fetch('/getCompanyAgents', { method: 'get' }) 
        const get_company_agents_res = await get_company_agents_req.json()

        console.log(get_company_agents_res)

        // take all agents and display in bookingModalS3BodyRightAgentsBox
        for (let i = 0; i < get_company_agents_res.team_member_booking_profiles.length; i++) {
          let newH1Element = document.createElement('h1')
          newH1Element.textContent = get_company_agents_res.team_member_booking_profiles[i].display_name
          bookingModalS3BodyRightAgentsBox.appendChild(newH1Element)
        }

        // if an agent is selected
        for (let i = 0; i < bookingModalS3BodyRightAgentsBox.children.length; i++) {
          bookingModalS3BodyRightAgentsBox.children[i].addEventListener('click', () => {   
            for (let j = 0; j < bookingModalS3BodyRightAgentsBox.children.length; j++) {
              bookingModalS3BodyRightAgentsBox.children[j].className = ''
            }
            bookingModalS3BodyRightAgentsBox.children[i].className = 'booking-modal-s3-agent-selected'
            bookingModalS3AgentsPickedIcon.className = 'bi bi-check-circle-fill'

            // hide null continue btn -- show pink color continue btn
            bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
            bookingModalS3NextBtn.className = 'booking-modal-s3-next'
            
            console.log(bookingModalS3NextNullBtn.className)
            console.log(bookingModalS3NextBtn.className)
            
            service3BookingObj.team_member_id = get_company_agents_res.team_member_booking_profiles[i].team_member_id 
            service3BookingObj.employee_name = bookingModalS3BodyRightAgentsBox.children[i].textContent
            bookingModalS3AgentsSelected = true
            console.log(service3BookingObj)
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
    editbookingModalS3Location.addEventListener('click', () => {
      console.log('I have been clicked!')
      // right changes
      bookingModalS3Agents.className = 'booking-modal-s3-right hide-container'
      bookingModalS3Location.className = 'booking-modal-s3-right'
      bookingModalS3DateTime.className = 'booking-modal-s3-right hide-container'
      bookingModalS3ConfirmDetails.className = 'booking-modal-s3-right hide-container'

      bookingModalS3Step1.className = ''
      bookingModalS3Step2.className = 'step-selected'
      bookingModalS3Step3.className = ''
      bookingModalS3Step4.className = ''

      bookingModalS3Counter = 1

      // footer changes
      if (bookingModalS3LocationSelected) {
        bookingModalS3NextBtn.className = 'booking-modal-s3-next'
        bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
      } else {
        bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
        bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
      }
    })

    // if user is on select "location"
    if (myApp.companyOptions3Bool && bookingModalS3Location.className === 'booking-modal-s3-right') {
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
          bookingModalS3CustomerLocationsBox.appendChild(newDivElement)
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
          bookingModalS3CustomerLocationsBox.appendChild(newDivElement)
        }
      }
      console.log(bookingModalS3CustomerLocationsBox.children.length)

      // delete blank customer locations remaining
      for (let i = 0; i < bookingModalS3CustomerLocationsBox.children.length; i++) {
        // get all the list items from all customer locations
        let newCustomerLocationDetails = bookingModalS3CustomerLocationsBox.getElementsByTagName('li')
        console.log(newCustomerLocationDetails)

        if (i === 0) { // 0
          if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
          }
        } else if (i === 1) { // 5
            if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 2) { // 10
            if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 3) { // 15
            if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 4) { // 20
            if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 5) { // 25
            if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 6) { // 30
            if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 7) { // 35
            if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 8) { // 40
            if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 9) { // 45
            if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            }
        } else if (i === 10) { // 50
            if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            } 
        }
      }

      // when a customer location is selected
      for (let i = 0; i < bookingModalS3CustomerLocationsBox.children.length; i++) {
        bookingModalS3CustomerLocationsBox.children[i].addEventListener('click', () => {
          // clear any existing customer location style already selected
          for (let j = 0; j < bookingModalS3CustomerLocationsBox.children.length; j++) {
            // clear new service 2 location obj
            service3BookingObj.name = ''
            service3BookingObj.address_line_1 = ''
            service3BookingObj.administrative_district_level_1 = ''
            service3BookingObj.locality = ''
            service3BookingObj.postal_code = ''
            bookingModalS3CustomerLocationsBox.children[j].style = ''
          }

          // get all the list items from all customer locations
          let newCustomerLocationDetails = bookingModalS3CustomerLocationsBox.getElementsByTagName('li')
          console.log(newCustomerLocationDetails)
          // console.log(newCustomerLocationDetails[0].textContent)
          console.log(bookingModalS3CustomerLocationsBox.children[i])

          // style the customer location function
          function styleSelectedLocation() {
            bookingModalS3CustomerLocationsBox.children[i].style.backgroundColor = '#f05e7c'
            bookingModalS3CustomerLocationsBox.children[i].style.color = '#ffffff'
            bookingModalS3CustomerLocationsBox.children[i].style.borderColor = '#f05e7c'
            bookingModalS3CustomerLocationsBox.children[i].style.borderRadius = '10px'  
          }

          // delete blank customer locations
          for (let i = 0; i < bookingModalS3CustomerLocationsBox.children.length; i++) {
            // get all the list items from all customer locations
            let newCustomerLocationDetails = bookingModalS3CustomerLocationsBox.getElementsByTagName('li')
            // console.log(newCustomerLocationDetails[10].textContent)
            if (i === 0) { // 0
              if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
              } else {              
              }
            } else if (i === 1) { // 5
                if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                } else {                
                }
            } else if (i === 2) { // 10
                if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 3) { // 15
                if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 4) { // 20
                if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 5) { // 25
                if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 6) { // 30
                if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                } else {                
                }
            } else if (i === 7) { // 35
                if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 8) { // 40
                if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                } else { 
                }
            } else if (i === 9) { // 45
                if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                }
            } else if (i === 10) { // 50
                if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                  bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                } else {
                } 
            }
          }

          // send too new service 2 location obj && unNull the continue btn
          if (i === 0) { // 0
            if (newCustomerLocationDetails[i].textContent !== '') {
              service3BookingObj.name = newCustomerLocationDetails[i].textContent
              service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 1].textContent
              service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 2].textContent
              service3BookingObj.locality = newCustomerLocationDetails[i + 3].textContent
              service3BookingObj.postal_code = newCustomerLocationDetails[i + 4].textContent
              styleSelectedLocation()
              bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
              bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
              bookingModalS3NextBtn.className = 'booking-modal-s3-next'
              bookingModalS3LocationSelected = true
              console.log(service3BookingObj)
            } else {
              bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
            }
          } else if (i === 1) { // 5
              if (newCustomerLocationDetails[i + 4].textContent !== '') {
                service3BookingObj.name = newCustomerLocationDetails[i + 4].textContent
                service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 5].textContent
                service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 6].textContent
                service3BookingObj.locality = newCustomerLocationDetails[i + 7].textContent
                service3BookingObj.postal_code = newCustomerLocationDetails[i + 8].textContent
                styleSelectedLocation()
                bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                bookingModalS3LocationSelected = true
                console.log(service3BookingObj)
              } else {
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 2) { // 10
              if (newCustomerLocationDetails[i + 8].textContent !== '') {
                service3BookingObj.name = newCustomerLocationDetails[i + 8].textContent
                service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 9].textContent
                service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 10].textContent
                service3BookingObj.locality = newCustomerLocationDetails[i + 11].textContent
                service3BookingObj.postal_code = newCustomerLocationDetails[i + 12].textContent 
                styleSelectedLocation()
                bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                bookingModalS3LocationSelected = true
                console.log(service3BookingObj)
              } else {
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 3) { // 15
              if (newCustomerLocationDetails[i + 12].textContent !== '') {
                service3BookingObj.name = newCustomerLocationDetails[i + 12].textContent
                service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 13].textContent
                service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 14].textContent
                service3BookingObj.locality = newCustomerLocationDetails[i + 15].textContent
                service3BookingObj.postal_code = newCustomerLocationDetails[i + 16].textContent 
                styleSelectedLocation()
                bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                bookingModalS3LocationSelected = true
                console.log(service3BookingObj)
              } else {
                console.log('peace')
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 4) { // 20
              if (newCustomerLocationDetails[i + 16].textContent !== '') {
                service3BookingObj.name = newCustomerLocationDetails[i + 16].textContent
                service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 17].textContent
                service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 18].textContent
                service3BookingObj.locality = newCustomerLocationDetails[i + 19].textContent
                service3BookingObj.postal_code = newCustomerLocationDetails[i + 20].textContent
                styleSelectedLocation()
                bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                bookingModalS3LocationSelected = true
                console.log(service3BookingObj)
              } else {
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 5) { // 25
              if (newCustomerLocationDetails[i + 20].textContent !== '') {
                service3BookingObj.name = newCustomerLocationDetails[i + 20].textContent
                service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 21].textContent
                service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 22].textContent
                service3BookingObj.locality = newCustomerLocationDetails[i + 23].textContent
                service3BookingObj.postal_code = newCustomerLocationDetails[i + 24].textContent
                styleSelectedLocation()
                bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                bookingModalS3LocationSelected = true
                console.log(service3BookingObj)
              } else {
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 6) { // 30
              if (newCustomerLocationDetails[i + 24].textContent !== '') {
                service3BookingObj.name = newCustomerLocationDetails[i + 24].textContent
                service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 25].textContent
                service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 26].textContent
                service3BookingObj.locality = newCustomerLocationDetails[i + 27].textContent
                service3BookingObj.postal_code = newCustomerLocationDetails[i + 28].textContent
                styleSelectedLocation()
                bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                bookingModalS3LocationSelected = true
                console.log(service3BookingObj)
              } else {
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 7) { // 35
              if (newCustomerLocationDetails[i + 28].textContent !== '') {
                service3BookingObj.name = newCustomerLocationDetails[i + 28].textContent
                service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 29].textContent
                service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 30].textContent
                service3BookingObj.locality = newCustomerLocationDetails[i + 31].textContent
                service3BookingObj.postal_code = newCustomerLocationDetails[i + 32].textContent
                styleSelectedLocation()
                bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                bookingModalS3LocationSelected = true
                console.log(service3BookingObj)
              } else {
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 8) { // 40
              if (newCustomerLocationDetails[i + 32].textContent !== '') {
                service3BookingObj.name = newCustomerLocationDetails[i + 32].textContent
                service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 33].textContent
                service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 34].textContent
                service3BookingObj.locality = newCustomerLocationDetails[i + 35].textContent
                service3BookingObj.postal_code = newCustomerLocationDetails[i + 36].textContent
                styleSelectedLocation()
                bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                bookingModalS3LocationSelected = true
                console.log(service3BookingObj)
              } else {
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none' 
              }
          } else if (i === 9) { // 45
              if (newCustomerLocationDetails[i + 36].textContent !== '') {
                service3BookingObj.name = newCustomerLocationDetails[i + 36].textContent
                service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 37].textContent
                service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 38].textContent
                service3BookingObj.locality = newCustomerLocationDetails[i + 39].textContent
                service3BookingObj.postal_code = newCustomerLocationDetails[i + 40].textContent
                styleSelectedLocation()
                bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                console.log(service3BookingObj)
              } else {
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
              }
          } else if (i === 10) { // 50
              if (newCustomerLocationDetails[i + 40].textContent !== '') {
                service3BookingObj.name = newCustomerLocationDetails[i + 40].textContent
                service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 41].textContent
                service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 42].textContent
                service3BookingObj.locality = newCustomerLocationDetails[i + 43].textContent
                service3BookingObj.postal_code = newCustomerLocationDetails[i + 44].textContent
                styleSelectedLocation()
                bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                bookingModalS3LocationSelected = true
                console.log(service3BookingObj)
              } else {
                bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
              } 
          }
        })
      }

      // if checkbox is selected --> show the new customer location box
      bookingModalS3NewLocationCheckbox.addEventListener('click', () => {
        bookingModalS3NewLocationCheckboxCounter++
      
        // checkbox toggle
        if (bookingModalS3NewLocationCheckboxCounter === 1) {
          bookingModalS3NewLocationCheckbox.checked = true           
          bookingModalS3NewCustomerLocationBox.className = 'booking-modal-s3-new-location-box'
        } else if (bookingModalS3NewLocationCheckboxCounter === 2) {
          bookingModalS3NewLocationCheckbox.checked = false          
          bookingModalS3NewCustomerLocationBox.className = 'booking-modal-s3-new-location-box hide-container'
          bookingModalS3NewLocationCheckboxCounter = 0
        }
      })

      ///*******also create a new location on sign up in square*/
      // if new customer location box input fields all filled && btn clicked--> update users location in MongoDb --> create a new location in Square

      // if create new location btn is clicked
      bookingModalS3NewCustomerLocationSubmitBtn.addEventListener('click', () => {
        console.log('ive been clicked.')
        let newOtherLocationsIndex = 0

        // set the new customer modal booking email address
        bookingModalS3NewCustomerLocationObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address

        console.log(newOtherLocationsIndex)

        bookingModalS3NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`] = {}

        // check type is correct
        if (bookingModalS3NewCustomerLocationInputType.value !== 'select-a-type') {
          bookingModalS3NewCustomerLocationInputTypeError.className = 'error hide-container'
          bookingModalS3NewCustomerLocationInputType.className = 'input-valid-clear'
          newUserLocation.type_name = bookingModalS3NewCustomerLocationInputType.value
          bookingModalS3NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].type_name = bookingModalS3NewCustomerLocationInputType.value
        } else {
          bookingModalS3NewCustomerLocationInputTypeError.className = 'error'
          bookingModalS3NewCustomerLocationInputType.className = 'input-invalid'
        }

        // check address is correct
        if (bookingModalS3NewCustomerLocationInputAddress.value.match(addressCheck)) {
          bookingModalS3NewCustomerLocationInputAddressError.className = 'error hide-container'
          bookingModalS3NewCustomerLocationInputAddress.className = 'input-valid-clear'
          newUserLocation.address_line_1 = bookingModalS3NewCustomerLocationInputAddress.value
          bookingModalS3NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].address_line_1 = bookingModalS3NewCustomerLocationInputAddress.value
        } else {
          bookingModalS3NewCustomerLocationInputAddressError.className = 'error'
          bookingModalS3NewCustomerLocationInputAddress.className = 'input-invalid'
        }

        // check state is correct
        if (bookingModalS3NewCustomerLocationInputState.value.match(justLettersCheck)) {
          bookingModalS3NewCustomerLocationInputStateError.className = 'error hide-container'
          bookingModalS3NewCustomerLocationInputState.className = 'input-valid-clear'
          newUserLocation.administrative_district_level_1 = bookingModalS3NewCustomerLocationInputState.value
          bookingModalS3NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].administrative_district_level_1 = bookingModalS3NewCustomerLocationInputState.value
        } else {
          bookingModalS3NewCustomerLocationInputStateError.className = 'error'
          bookingModalS3NewCustomerLocationInputState.className = 'input-invalid'
        }

        // check city is correct
        if (bookingModalS3NewCustomerLocationInputCity.value.match(justLettersCheck)) {
          bookingModalS3NewCustomerLocationInputCityError.className = 'error hide-container'
          bookingModalS3NewCustomerLocationInputCity.className = 'input-valid-clear'
          newUserLocation.locality = bookingModalS3NewCustomerLocationInputCity.value
          bookingModalS3NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].locality = bookingModalS3NewCustomerLocationInputCity.value
        } else {
          bookingModalS3NewCustomerLocationInputCityError.className = 'error'
          bookingModalS3NewCustomerLocationInputCity.className = 'input-invalid'
        }

        // check that zip code is correct
        if (bookingModalS3NewCustomerLocationInputZipCode.value.match(zipCodeCheck)) {
          bookingModalS3NewCustomerLocationInputZipCodeError.className = 'error hide-container'
          bookingModalS3NewCustomerLocationInputZipCode.className = 'input-valid-clear'
          newUserLocation.postal_code = bookingModalS3NewCustomerLocationInputZipCode.value
          bookingModalS3NewCustomerLocationObj[`location${newOtherLocationsIndex + 1}`].postal_code = bookingModalS3NewCustomerLocationInputZipCode.value
        } else {
          bookingModalS3NewCustomerLocationInputZipCodeError.className = 'error'
          bookingModalS3NewCustomerLocationInputZipCode.className = 'input-invalid'
        }
        console.log(bookingModalS3NewCustomerLocationObj)

        if (bookingModalS3NewCustomerLocationInputType.className === 'input-valid-clear' && bookingModalS3NewCustomerLocationInputAddress.className === 'input-valid-clear' && bookingModalS3NewCustomerLocationInputState.className === 'input-valid-clear' && bookingModalS3NewCustomerLocationInputCity.className === 'input-valid-clear' && bookingModalS3NewCustomerLocationInputZipCode.className === 'input-valid-clear') {
          console.log('All fields are valid..')
          newUserLocation.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
          // create the new location in MongoDB
          // take new location id add to the "bookingModalS3NewCustomerLocationObj.id"
          // add customers new location object to customers data -- MongoDB
          async function newLocationMongoDb() {
            // req & res
            const create_new_location_mongodb_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(bookingModalS3NewCustomerLocationObj)}`, { method: 'put' })
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
                bookingModalS3NewCustomerLocationInputType.value = 'select-a-type'
                bookingModalS3NewCustomerLocationInputAddress.value = ''
                bookingModalS3NewCustomerLocationInputState.value = ''
                bookingModalS3NewCustomerLocationInputCity.value = ''
                bookingModalS3NewCustomerLocationInputZipCode.value = ''

                // clear bookingModalS3CustomerLocationsBox
                bookingModalS3CustomerLocationsBox.innerHTML = ''
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
                    bookingModalS3CustomerLocationsBox.appendChild(newDivElement)
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
                    bookingModalS3CustomerLocationsBox.appendChild(newDivElement)
                  }
                }

                // delete blank customer locations remaining
                for (let i = 0; i < bookingModalS3CustomerLocationsBox.children.length; i++) {
                  // get all the list items from all customer locations
                  let newCustomerLocationDetails = bookingModalS3CustomerLocationsBox.getElementsByTagName('li')
                  console.log(newCustomerLocationDetails)

                  if (i === 0) { // 0
                    if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                      bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                    }
                  } else if (i === 1) { // 5
                      if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 2) { // 10
                      if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 3) { // 15
                      if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 4) { // 20
                      if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 5) { // 25
                      if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 6) { // 30
                      if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 7) { // 35
                      if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 8) { // 40
                      if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 9) { // 45
                      if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      }
                  } else if (i === 10) { // 50
                      if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      } 
                  }
                }

                // when a customer location is selected
                for (let i = 0; i < bookingModalS3CustomerLocationsBox.children.length; i++) {
                  bookingModalS3CustomerLocationsBox.children[i].addEventListener('click', () => {
                    // clear any existing customer location style already selected
                    for (let j = 0; j < bookingModalS3CustomerLocationsBox.children.length; j++) {
                      // clear new service 2 location obj
                      service3BookingObj.name = ''
                      service3BookingObj.address_line_1 = ''
                      service3BookingObj.administrative_district_level_1 = ''
                      service3BookingObj.locality = ''
                      service3BookingObj.postal_code = ''
                      bookingModalS3CustomerLocationsBox.children[j].style = ''
                    }

                    // get all the list items from all customer locations
                    let newCustomerLocationDetails = bookingModalS3CustomerLocationsBox.getElementsByTagName('li')
                    console.log(newCustomerLocationDetails)
                    // console.log(newCustomerLocationDetails[0].textContent)
                    console.log(bookingModalS3CustomerLocationsBox.children[i])

                    // style the customer location function
                    function styleSelectedLocation() {
                      bookingModalS3CustomerLocationsBox.children[i].style.backgroundColor = '#f05e7c'
                      bookingModalS3CustomerLocationsBox.children[i].style.color = '#ffffff'
                      bookingModalS3CustomerLocationsBox.children[i].style.borderColor = '#f05e7c'
                      bookingModalS3CustomerLocationsBox.children[i].style.borderRadius = '10px'  
                    }

                    // delete blank customer locations
                    for (let i = 0; i < bookingModalS3CustomerLocationsBox.children.length; i++) {
                      // get all the list items from all customer locations
                      let newCustomerLocationDetails = bookingModalS3CustomerLocationsBox.getElementsByTagName('li')
                      // console.log(newCustomerLocationDetails[10].textContent)
                      if (i === 0) { // 0
                        if (!newCustomerLocationDetails[i].textContent.match(/[A-Z-a-z]/)) {
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                        } else {              
                        }
                      } else if (i === 1) { // 5
                          if (!newCustomerLocationDetails[i + 4].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                          } else {                
                          }
                      } else if (i === 2) { // 10
                          if (!newCustomerLocationDetails[i + 8].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 3) { // 15
                          if (!newCustomerLocationDetails[i + 12].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 4) { // 20
                          if (!newCustomerLocationDetails[i + 16].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 5) { // 25
                          if (!newCustomerLocationDetails[i + 20].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 6) { // 30
                          if (!newCustomerLocationDetails[i + 24].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                          } else {                
                          }
                      } else if (i === 7) { // 35
                          if (!newCustomerLocationDetails[i + 28].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 8) { // 40
                          if (!newCustomerLocationDetails[i + 32].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                          } else { 
                          }
                      } else if (i === 9) { // 45
                          if (!newCustomerLocationDetails[i + 36].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          }
                      } else if (i === 10) { // 50
                          if (!newCustomerLocationDetails[i + 40].textContent.match(/[A-Z-a-z]/)) {
                            bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                          } else {
                          } 
                      }
                    }

                    // send too new service 2 location obj && unNull the continue btn
                    if (i === 0) { // 0
                      if (newCustomerLocationDetails[i].textContent !== '') {
                        service3BookingObj.name = newCustomerLocationDetails[i].textContent
                        service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 1].textContent
                        service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 2].textContent
                        service3BookingObj.locality = newCustomerLocationDetails[i + 3].textContent
                        service3BookingObj.postal_code = newCustomerLocationDetails[i + 4].textContent
                        styleSelectedLocation()
                        bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                        bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                        bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                        bookingModalS3LocationSelected = true
                        console.log(service3BookingObj)
                      } else {
                        bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                      }
                    } else if (i === 1) { // 5
                        if (newCustomerLocationDetails[i + 4].textContent !== '') {
                          service3BookingObj.name = newCustomerLocationDetails[i + 4].textContent
                          service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 5].textContent
                          service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 6].textContent
                          service3BookingObj.locality = newCustomerLocationDetails[i + 7].textContent
                          service3BookingObj.postal_code = newCustomerLocationDetails[i + 8].textContent
                          styleSelectedLocation()
                          bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3LocationSelected = true
                          console.log(service3BookingObj)
                        } else {
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 2) { // 10
                        if (newCustomerLocationDetails[i + 8].textContent !== '') {
                          service3BookingObj.name = newCustomerLocationDetails[i + 8].textContent
                          service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 9].textContent
                          service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 10].textContent
                          service3BookingObj.locality = newCustomerLocationDetails[i + 11].textContent
                          service3BookingObj.postal_code = newCustomerLocationDetails[i + 12].textContent 
                          styleSelectedLocation()
                          bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3LocationSelected = true
                          console.log(service3BookingObj)
                        } else {
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 3) { // 15
                        if (newCustomerLocationDetails[i + 12].textContent !== '') {
                          service3BookingObj.name = newCustomerLocationDetails[i + 12].textContent
                          service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 13].textContent
                          service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 14].textContent
                          service3BookingObj.locality = newCustomerLocationDetails[i + 15].textContent
                          service3BookingObj.postal_code = newCustomerLocationDetails[i + 16].textContent 
                          styleSelectedLocation()
                          bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3LocationSelected = true
                          console.log(service3BookingObj)
                        } else {
                          console.log('peace')
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 4) { // 20
                        if (newCustomerLocationDetails[i + 16].textContent !== '') {
                          service3BookingObj.name = newCustomerLocationDetails[i + 16].textContent
                          service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 17].textContent
                          service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 18].textContent
                          service3BookingObj.locality = newCustomerLocationDetails[i + 19].textContent
                          service3BookingObj.postal_code = newCustomerLocationDetails[i + 20].textContent
                          styleSelectedLocation()
                          bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3LocationSelected = true
                          console.log(service3BookingObj)
                        } else {
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 5) { // 25
                        if (newCustomerLocationDetails[i + 20].textContent !== '') {
                          service3BookingObj.name = newCustomerLocationDetails[i + 20].textContent
                          service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 21].textContent
                          service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 22].textContent
                          service3BookingObj.locality = newCustomerLocationDetails[i + 23].textContent
                          service3BookingObj.postal_code = newCustomerLocationDetails[i + 24].textContent
                          styleSelectedLocation()
                          bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3LocationSelected = true
                          console.log(service3BookingObj)
                        } else {
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 6) { // 30
                        if (newCustomerLocationDetails[i + 24].textContent !== '') {
                          service3BookingObj.name = newCustomerLocationDetails[i + 24].textContent
                          service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 25].textContent
                          service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 26].textContent
                          service3BookingObj.locality = newCustomerLocationDetails[i + 27].textContent
                          service3BookingObj.postal_code = newCustomerLocationDetails[i + 28].textContent
                          styleSelectedLocation()
                          bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3LocationSelected = true
                          console.log(service3BookingObj)
                        } else {
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 7) { // 35
                        if (newCustomerLocationDetails[i + 28].textContent !== '') {
                          service3BookingObj.name = newCustomerLocationDetails[i + 28].textContent
                          service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 29].textContent
                          service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 30].textContent
                          service3BookingObj.locality = newCustomerLocationDetails[i + 31].textContent
                          service3BookingObj.postal_code = newCustomerLocationDetails[i + 32].textContent
                          styleSelectedLocation()
                          bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3LocationSelected = true
                          console.log(service3BookingObj)
                        } else {
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 8) { // 40
                        if (newCustomerLocationDetails[i + 32].textContent !== '') {
                          service3BookingObj.name = newCustomerLocationDetails[i + 32].textContent
                          service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 33].textContent
                          service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 34].textContent
                          service3BookingObj.locality = newCustomerLocationDetails[i + 35].textContent
                          service3BookingObj.postal_code = newCustomerLocationDetails[i + 36].textContent
                          styleSelectedLocation()
                          bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3LocationSelected = true
                          console.log(service3BookingObj)
                        } else {
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none' 
                        }
                    } else if (i === 9) { // 45
                        if (newCustomerLocationDetails[i + 36].textContent !== '') {
                          service3BookingObj.name = newCustomerLocationDetails[i + 36].textContent
                          service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 37].textContent
                          service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 38].textContent
                          service3BookingObj.locality = newCustomerLocationDetails[i + 39].textContent
                          service3BookingObj.postal_code = newCustomerLocationDetails[i + 40].textContent
                          styleSelectedLocation()
                          bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          console.log(service3BookingObj)
                        } else {
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                        }
                    } else if (i === 10) { // 50
                        if (newCustomerLocationDetails[i + 40].textContent !== '') {
                          service3BookingObj.name = newCustomerLocationDetails[i + 40].textContent
                          service3BookingObj.address_line_1 = newCustomerLocationDetails[i + 41].textContent
                          service3BookingObj.administrative_district_level_1 = newCustomerLocationDetails[i + 42].textContent
                          service3BookingObj.locality = newCustomerLocationDetails[i + 43].textContent
                          service3BookingObj.postal_code = newCustomerLocationDetails[i + 44].textContent
                          styleSelectedLocation()
                          bookingModalS3LocationPickedIcon.className = 'bi bi-check-circle-fill'
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3LocationSelected = true
                          console.log(service3BookingObj)
                        } else {
                          bookingModalS3CustomerLocationsBox.children[i].style.display = 'none'
                        } 
                    }
                  })
                }
                console.log(bookingModalS3CustomerLocationsBox.children.length)
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
    editbookingModalS3DateTime.addEventListener('click', () => {
      // right changes
      bookingModalS3Agents.className = 'booking-modal-s3-right hide-container'
      bookingModalS3Location.className = 'booking-modal-s3-right hide-container'
      bookingModalS3DateTime.className = 'booking-modal-s3-right'
      bookingModalS3ConfirmDetails.className = 'booking-modal-s3-right hide-container'

      bookingModalS3Step1.className = ''
      bookingModalS3Step2.className = ''
      bookingModalS3Step3.className = 'step-selected'
      bookingModalS3Step4.className = ''

      bookingModalS3Counter = 2

      // footer changes
      if (bookingModalS3DateSelected && bookingModalS3TimeSelected) {
        bookingModalS3NextBtn.className = 'booking-modal-s3-next'
        bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
      } else {
        bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
        bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
      }
    })

    // if user is on select "date & time"
    if (myApp.companyOptions3Bool && bookingModalS3DateTime.className === 'booking-modal-s3-right') {
      console.log('Select date & time!')

      // setup for getting current "start_at" and current "end_at" dates (1 month from the current day)
      const bmDate = new Date()

      let bookingModalS3Year = bmDate.getYear() + 1900
      let bookingModalS3Month = bmDate.getMonth() + 1
      let bookingModalS3Day = bmDate.getDate()

      let bookingModalS3MinDate = `${bookingModalS3Month}-${bookingModalS3Day}-${bookingModalS3Year}`
      let bookingModalS3MaxDate = `${bookingModalS3Month + 1}-${bookingModalS3Day}-${bookingModalS3Year}`

      let bookingModalS3MinDateNew, bookingModalS3MaxDateNew

      console.log(bookingModalS3MinDate, bookingModalS3MaxDate)

        // if current month has 1 digit
      if (bookingModalS3MinDate.substring(0, 2) !== '10' || bookingModalS3MinDate.substring(0, 2) !== '11' || bookingModalS3MinDate.substring(0, 2) !== '12') {
        bookingModalS3MinDate = bookingModalS3MinDate.replace(bookingModalS3MinDate.substring(0, 1), `0${bookingModalS3Month}`)
        console.log(bookingModalS3MinDate)
      }

        // if next month has 1 digit
      if (bookingModalS3MaxDate.substring(0, 2) !== '10' || bookingModalS3MaxDate.substring(0, 2) !== '11' || bookingModalS3MaxDate.substring(0, 2) !== '12') {
        bookingModalS3MaxDate = bookingModalS3MaxDate.replace(bookingModalS3MaxDate.substring(0, 1), `0${bookingModalS3Month + 1}`)
        console.log(bookingModalS3MaxDate)
      }

        // if current date is 1 digit
      if (bookingModalS3MinDate.substring(3, 5).includes('-')) {
        bookingModalS3MinDateNew = bookingModalS3MinDate.slice(0, 3) + '0' + bookingModalS3MinDate.slice(3, 9)
        console.log(bookingModalS3MinDateNew)
      } else {
        bookingModalS3MinDateNew = bookingModalS3MinDate
      }

        // if next date is 1 digit
      if (bookingModalS3MaxDate.substring(3, 5).includes('-')) {
        bookingModalS3MaxDateNew = bookingModalS3MaxDate.slice(0, 3) + '0' + bookingModalS3MaxDate.slice(3, 9)
        console.log(bookingModalS3MaxDateNew)
      } else {
        bookingModalS3MaxDateNew = bookingModalS3MaxDate
      }

        // set the "start_at" and "end_at" times to the serviceAvailabilityObj
      service3AvailabilityObj.start_at = `${bookingModalS3MinDateNew.slice(6, 11)}-${bookingModalS3MinDateNew.slice(0, 2)}-${bookingModalS3MinDateNew.slice(3, 5)}T12:00:00Z`
      service3AvailabilityObj.end_at = `${bookingModalS3MaxDateNew.slice(6, 11)}-${bookingModalS3MaxDateNew.slice(0, 2)}-${bookingModalS3MaxDateNew.slice(3, 5)}T21:00:00Z`
      service3AvailabilityObj.location_id = `${myApp.companyLocationId}`
      service3AvailabilityObj.service_variation_id = `${myApp.companyService3VariationId}`

      console.log(service3AvailabilityObj)

      // 
      // fetch available times for the service
      async function service3Availabilities() {
        // req & res
        const get_company_availabilities_req = await fetch(`/getCompanyAvailabilities/${JSON.stringify(service3AvailabilityObj)}`, { method: 'post' })
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
          // show the bookingModalS3
          // myApp.bookingModalS3.className = 'booking-modal-s3'

          // filter and display available dates on the calendar
          console.log(bookingModalS3CalDays[0].textContent)
          console.log(bookingModalS3CalDays.length)

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

          if (get_company_availabilities_res.availabilities[0].start_at.slice(5, 7) === `0${bookingModalS3Date.getMonth() + 2}` || get_company_availabilities_res.availabilities[0].start_at.slice(5, 7) === '01' && bookingModalS3Date.getMonth() === 11) {
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
          for (let i = 0; i < bookingModalS3CalDays.length; i++) {
            if (bookingModalS3CalDays[i].textContent.length === 1) {
              availableCalDaysArr.push(`0${bookingModalS3CalDays[i].textContent}`)
            } else {
              availableCalDaysArr.push(`${bookingModalS3CalDays[i].textContent}`)
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
                bookingModalS3CalDays[j].className = 'booking-modal-s3-datetime-style'
                console.log(bookingModalS3CalDays[j])
              }
            }
          }
          

          /** On Load */
          // mouser over available calendar date (today)
          bookingModalS3CalToday.addEventListener('mouseover', () => {
            console.log('peace')
            if (bookingModalS3CalToday.className === 'booking-modal-s3-today' || bookingModalS3CalToday.className === 'booking-modal-s3-datetime-hovered') {
              bookingModalS3CalToday.style.cursor = 'pointer'
              bookingModalS3CalToday.className = 'booking-modal-s3-datetime-hovered'
            }
          })

          // mouse leave avaialble calendar date (today)
          bookingModalS3CalToday.addEventListener('mouseleave', () => {
            console.log('peace')
            if (bookingModalS3CalToday.className === 'booking-modal-s3-datetime-hovered') {
              bookingModalS3CalToday.className = 'booking-modal-s3-today'
            }
          })

          // if today is clicked
          bookingModalS3CalToday.addEventListener('click', () => {
            console.log('peace')
            if (bookingModalS3CalToday.className === 'booking-modal-s3-datetime-hovered') {
              // unstyle all other available dates
              for (let j = 0; j < bookingModalS3CalDays.length; j++) {
                bookingModalS3CalDays[j].style.backgroundColor = ''
                bookingModalS3CalDays[j].style.color = '#FFFFFF'
              }

              bookingModalS3CalToday.style.backgroundColor = '#f05e7c'
              bookingModalS3CalToday.style.color = '#FFFFFF'

              bookingModalS3DateSelected = true
              console.log(bookingModalS3DateSelected)

              let selectedFinalDate
              let selectedFinalMonth
              console.log(bookingModalS3CalToday)
              selectedDateArr = []
              selectedTimesArr = []
              selectedTimesThisMonthArr = []
              // bookingModalS3BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s3-datetime-box-header"><h1 id="booking-modal-s3-current-time-title" class='booking-modal-s3-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s3-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
              
              // push the selected "date" number to a new array (selectedDateArr)
              if (bookingModalS3CalToday.textContent.length === 1) {
                selectedDateArr.push(`0${bookingModalS3CalToday.textContent}`)
                selectedFinalDate = `0${bookingModalS3CalToday.textContent}`
              } else {
                selectedDateArr.push(bookingModalS3CalToday.textContent)
                selectedFinalDate = bookingModalS3CalToday.textContent
              }

              // loop through initial all available dates array and push all available "times" to a new array
              for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                  selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                }
              }
              console.log(selectedTimesArr)

              console.log(bookingModalS3Date.getMonth().toString().length)

              // loop through and selectedTimesArr and push "times" available for the "this month" only
              for (let i = 0; i < selectedTimesArr.length; i++) {
                if (bookingModalS3Date.getMonth().toString().length === 1) {
                  let currentMonth = `0${bookingModalS3Date.getMonth() + 1}`
                  selectedFinalMonth = `0${bookingModalS3Date.getMonth() + 1}`
                  console.log(bookingModalS3Date.getMonth())

                  if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                    selectedTimesThisMonthArr.push(selectedTimesArr[i])
                    console.log(selectedTimesThisMonthArr)
                  } 

                } else if (bookingModalS3Date.getMonth().toString().length === 2) {
                  if (selectedTimesArr[i].substring(5, 7) === bookingModalS3Date.getMonth()) {
                    selectedTimesThisMonthArr.push(selectedTimesArr[i])
                    selectedFinalMonth = bookingModalS3Date.getMonth() + 1
                    console.log(selectedTimesThisMonthArr)
                  }
                }
              }
              console.log(selectedTimesThisMonthArr)

              // loop through "this months" available "times" array and display those times into the bookingModalS3BodyRightDateTimeBox
              for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                let newH1Element = document.createElement('h1')
                let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                newH1Element.className = 'booking-modal-s3-datetimes'
                
                // convert times to normal times
                if (selectedTimeOnly === '12:00') {
                  newH1Element.textContent = '08:00 AM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '12:30') {
                  newH1Element.textContent = '08:30 AM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '13:00') {
                  newH1Element.textContent = '09:00 AM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '13:30') {
                  newH1Element.textContent = '09:30 AM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '14:00') {
                  newH1Element.textContent = '10:00 AM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '14:30') {
                  newH1Element.textContent = '10:30 AM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '15:00') {
                  newH1Element.textContent = '11:00 AM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '15:30') {
                  newH1Element.textContent = '11:30 AM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '16:00') {
                  newH1Element.textContent = '12:00 PM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '16:30') {
                  newH1Element.textContent = '12:30 PM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '17:00') {
                  newH1Element.textContent = '01:00 PM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '17:30') {
                  newH1Element.textContent = '01:30 PM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '18:00') {
                  newH1Element.textContent = '02:00 PM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '18:30') {
                  newH1Element.textContent = '02:30 PM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '19:00') {
                  newH1Element.textContent = '03:00 PM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '19:30') {
                  newH1Element.textContent = '03:30 PM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '20:00') {
                  newH1Element.textContent = '04:00 PM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                } else if (selectedTimeOnly === '20:30') {
                  newH1Element.textContent = '04:30 PM'
                  bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                }  
              }

              // loop through bookingModalS3BodyRightDateTimeBox to listen for a click from the user
              for (let i = 1; i < bookingModalS3BodyRightDateTimeBox.children.length; i++) {
                bookingModalS3BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                  let selectedFinalTime = ''

                  // clear all other times first
                  for (let j = 0; j < bookingModalS3BodyRightDateTimeBox.children.length; j++) {
                    bookingModalS3BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                    bookingModalS3BodyRightDateTimeBox.children[j].style.color = 'black'
                  }

                  bookingModalS3BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                  bookingModalS3BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                  bookingModalS3TimeSelected = true
                  console.log(bookingModalS3TimeSelected)

                  if (bookingModalS3DateSelected && bookingModalS3TimeSelected) {
                    bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                    bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                    bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                  } else {
                    bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
                    bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
                    bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                  }

                  // convert the time back to army time
                  if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                    selectedFinalTime = '12:00'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                    selectedFinalTime = '12:30'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                    selectedFinalTime = '13:00'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                    selectedFinalTime = '13:30'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                    selectedFinalTime = '14:00'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                    selectedFinalTime = '14:30'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                    selectedFinalTime = '15:00'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                    selectedFinalTime = '15:30'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                    selectedFinalTime = '16:00'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                    selectedFinalTime = '16:30'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                    selectedFinalTime = '17:00'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                    selectedFinalTime = '17:30'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                    selectedFinalTime = '18:00'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                    selectedFinalTime = '18:30'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                    selectedFinalTime = '19:00'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                    selectedFinalTime = '19:30'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                    selectedFinalTime = '20:00'
                  } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                    selectedFinalTime = '20:30'
                  }

                  // push the time and date to the booking object
                  service3BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                  console.log(service3BookingObj)

                })
              }
            } 
          })

          
          // loop through bookingModalS3CalDays
          for (let i = 0; i < bookingModalS3CalDays.length; i++) {
            // mouser over available calendar date
            bookingModalS3CalDays[i].addEventListener('mouseover', () => {
              if (bookingModalS3CalDays[i].className === 'booking-modal-s3-datetime-style') {
                bookingModalS3CalDays[i].style.cursor = 'pointer'
                bookingModalS3CalDays[i].className = 'booking-modal-s3-datetime-style booking-modal-s3-datetime-hovered'
              }
            })

            // mouse leave avaialble calendar date
            bookingModalS3CalDays[i].addEventListener('mouseleave', (event) => {
              if (bookingModalS3CalDays[i].className === 'booking-modal-s3-datetime-style booking-modal-s3-datetime-hovered') {
                bookingModalS3CalDays[i].className = 'booking-modal-s3-datetime-style'
              }
            })

            // click on available calendar date
            bookingModalS3CalDays[i].addEventListener('click', () => {                
              if (bookingModalS3CalDays[i].className === 'booking-modal-s3-datetime-style booking-modal-s3-datetime-hovered') {
                // unstyle all other available dates
                bookingModalS3CalToday.style.backgroundColor = ''
                bookingModalS3CalToday.style.color = ''
                bookingModalS3CalToday.className = 'booking-modal-s3-today'

                for (let j = 0; j < bookingModalS3CalDays.length; j++) {
                  bookingModalS3CalDays[j].style.backgroundColor = ''
                  bookingModalS3CalDays[j].style.color = '#FFFFFF'
                }

                bookingModalS3CalDays[i].style.backgroundColor = '#F05E7C'
                bookingModalS3CalDays[i].style.color = '#FFFFFF'

                bookingModalS3DateSelected = true
                console.log(bookingModalS3DateSelected)

                let selectedFinalDate
                let selectedFinalMonth
                console.log(bookingModalS3CalDays[i])
                selectedDateArr = []
                selectedTimesArr = []
                selectedTimesThisMonthArr = []
                // bookingModalS3BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s3-datetime-box-header"><h1 id="booking-modal-s3-current-time-title" class='booking-modal-s3-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s3-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                
                // push the selected "date" number to a new array (selectedDateArr)
                if (bookingModalS3CalDays[i].textContent.length === 1) {
                  selectedDateArr.push(`0${bookingModalS3CalDays[i].textContent}`)
                  selectedFinalDate = `0${bookingModalS3CalDays[i].textContent}`
                } else {
                  selectedDateArr.push(bookingModalS3CalDays[i].textContent)
                  selectedFinalDate = bookingModalS3CalDays[i].textContent
                }

                // loop through initial all available dates array and push all available "times" to a new array
                for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                  if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                    selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                  }
                }
                console.log(selectedTimesArr)

                console.log(bookingModalS3Date.getMonth().toString().length)

                // loop through and selectedTimesArr and push times available for the "next month" only
                for (let i = 0; i < selectedTimesArr.length; i++) {
                  if (bookingModalS3Date.getMonth().toString().length === 1) {
                    let currentMonth = `0${bookingModalS3Date.getMonth() + 1}`
                    selectedFinalMonth = `0${bookingModalS3Date.getMonth() + 1}`
                    console.log(bookingModalS3Date.getMonth())

                    if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                      selectedTimesThisMonthArr.push(selectedTimesArr[i])
                      console.log(selectedTimesThisMonthArr)
                    } 

                  } else if (bookingModalS3Date.getMonth().toString().length === 2) {
                    if (selectedTimesArr[i].substring(5, 7) === bookingModalS3Date.getMonth()) {
                      selectedTimesThisMonthArr.push(selectedTimesArr[i])
                      selectedFinalMonth = bookingModalS3Date.getMonth() + 1
                      console.log(selectedTimesThisMonthArr)
                    }
                  }
                }
                console.log(selectedTimesThisMonthArr)

                // loop through the new next months available "times" array and display those times into the bookingModalS3BodyRightDateTimeBox
                for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                  let newH1Element = document.createElement('h1')
                  let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                  newH1Element.className = 'booking-modal-s3-datetimes'
                  
                  // convert times to normal times
                  if (selectedTimeOnly === '12:00') {
                    newH1Element.textContent = '08:00 AM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '12:30') {
                    newH1Element.textContent = '08:30 AM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '13:00') {
                    newH1Element.textContent = '09:00 AM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '13:30') {
                    newH1Element.textContent = '09:30 AM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '14:00') {
                    newH1Element.textContent = '10:00 AM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '14:30') {
                    newH1Element.textContent = '10:30 AM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '15:00') {
                    newH1Element.textContent = '11:00 AM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '15:30') {
                    newH1Element.textContent = '11:30 AM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '16:00') {
                    newH1Element.textContent = '12:00 PM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '16:30') {
                    newH1Element.textContent = '12:30 PM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '17:00') {
                    newH1Element.textContent = '01:00 PM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '17:30') {
                    newH1Element.textContent = '01:30 PM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '18:00') {
                    newH1Element.textContent = '02:00 PM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '18:30') {
                    newH1Element.textContent = '02:30 PM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '19:00') {
                    newH1Element.textContent = '03:00 PM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '19:30') {
                    newH1Element.textContent = '03:30 PM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '20:00') {
                    newH1Element.textContent = '04:00 PM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '20:30') {
                    newH1Element.textContent = '04:30 PM'
                    bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                  } 
                }

                // loop through bookingModalS3BodyRightDateTimeBox to listen for a click from the user
                for (let i = 1; i < bookingModalS3BodyRightDateTimeBox.children.length; i++) {
                  bookingModalS3BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                    let selectedFinalTime = ''

                    // clear all other times first
                    for (let j = 0; j < bookingModalS3BodyRightDateTimeBox.children.length; j++) {
                      bookingModalS3BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                      bookingModalS3BodyRightDateTimeBox.children[j].style.color = 'black'
                    }

                    bookingModalS3BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                    bookingModalS3BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                    bookingModalS3TimeSelected = true
                    console.log(bookingModalS3TimeSelected)

                    if (bookingModalS3DateSelected && bookingModalS3TimeSelected) {
                      bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                      bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                      bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                    } else {
                      bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
                      bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
                      bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                    }

                    // convert the time back to army time
                    if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                      selectedFinalTime = '12:00'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                      selectedFinalTime = '12:30'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                      selectedFinalTime = '13:00'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                      selectedFinalTime = '13:30'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                      selectedFinalTime = '14:00'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                      selectedFinalTime = '14:30'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                      selectedFinalTime = '15:00'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                      selectedFinalTime = '15:30'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                      selectedFinalTime = '16:00'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                      selectedFinalTime = '16:30'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                      selectedFinalTime = '17:00'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                      selectedFinalTime = '17:30'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                      selectedFinalTime = '18:00'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                      selectedFinalTime = '18:30'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                      selectedFinalTime = '19:00'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                      selectedFinalTime = '19:30'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                      selectedFinalTime = '20:00'
                    } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                      selectedFinalTime = '20:30'
                    }

                    // push the time and date to the booking object
                    service3BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                    console.log(service3BookingObj)

                  })
                }
              } 
            
            })
          }


          /* Next Btn Cal */
          // if next calendar btn clicked
          bookingModalS3NextBtnCal.addEventListener('click', () => {
            bookingModalS3NextBtnCalCounter++
            availableCalDaysArr = []
            
            let bookingModalS3DateTimeBoxLength = bookingModalS3BodyRightDateTimeBox.children.length
            for (let i = 1; i < bookingModalS3DateTimeBoxLength; i++) {
              console.log(bookingModalS3BodyRightDateTimeBox.children[1])
              bookingModalS3BodyRightDateTimeBox.removeChild(bookingModalS3BodyRightDateTimeBox.children[1])
            }

            if (bookingModalS3NextBtnCalCounter === 1) {
              bookingModalS3NextBtnCal.style.cursor = 'not-allowed'

              bookingModalS3Date.setMonth(bookingModalS3Date.getMonth() + 1)

              bookingModalS3RenderCalendar()

              bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
              bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
              bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'

              bookingModalS3DateSelected = false
              bookingModalS3TimeSelected = false

              console.log(bookingModalS3DateSelected)
              console.log(bookingModalS3TimeSelected)

              let bookingModalS3CalDaysNext = document.querySelectorAll('.booking-modal-s3-cal-days')
              let selectedDateArr = []
              let selectedTimesArr = []
              let selectedTimesNextMonthArr = []
              // bookingModalS3BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s3-datetime-box-header"><h1 id="booking-modal-s3-current-time-title" class='booking-modal-s3-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s3-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`

              console.log(bookingModalS3CalDaysNext)
              console.log(bookingModalS3CalDaysNext.length)



              // push the days of the selected calendar month to an array to make comparable
              for (let i = 0; i < bookingModalS3CalDaysNext.length; i++) {
                if (bookingModalS3CalDaysNext[i].textContent.length === 1) {
                  availableCalDaysArr.push(`0${bookingModalS3CalDaysNext[i].textContent}`)
                } else {
                  availableCalDaysArr.push(`${bookingModalS3CalDaysNext[i].textContent}`)
                }
              }
              console.log(availableCalDaysArr)

              // style and show available dates for the next month on the calendar
              for (let i = 0; i < availableCalDaysArr.length; i++) {
                let availableDaysDate = availableDaysNextMonthArr[i]
                // style available dates from service 1 next month onto the calendar
                for (let j = 0; j < availableCalDaysArr.length; j++) {
                  if (availableCalDaysArr[j] === availableDaysDate) {
                    bookingModalS3CalDaysNext[j].className = 'booking-modal-s3-datetime-style'
                    console.log(bookingModalS3CalDaysNext[j])
                  }
                }
              } 

              // go through bookingModalS3CalDays
              for (let i = 0; i < bookingModalS3CalDaysNext.length; i++) {
                // mouser over available calendar date
                bookingModalS3CalDaysNext[i].addEventListener('mouseover', () => {
                  if (bookingModalS3CalDaysNext[i].className === 'booking-modal-s3-datetime-style') {
                    bookingModalS3CalDaysNext[i].style.cursor = 'pointer'
                    bookingModalS3CalDaysNext[i].className = 'booking-modal-s3-datetime-style booking-modal-s3-datetime-hovered'
                  }
                })

                // mouse leave avaialble calendar date
                bookingModalS3CalDaysNext[i].addEventListener('mouseleave', (event) => {
                  if (bookingModalS3CalDaysNext[i].className === 'booking-modal-s3-datetime-style booking-modal-s3-datetime-hovered') {
                    bookingModalS3CalDaysNext[i].className = 'booking-modal-s3-datetime-style'
                  }
                })

                // click on available calendar date
                bookingModalS3CalDaysNext[i].addEventListener('click', () => {                
                  if (bookingModalS3CalDaysNext[i].className === 'booking-modal-s3-datetime-style booking-modal-s3-datetime-hovered') {
                    // unstyle all other available dates
                    for (let j = 0; j < bookingModalS3CalDaysNext.length; j++) {
                      bookingModalS3CalDaysNext[j].style.backgroundColor = ''
                      bookingModalS3CalDaysNext[j].style.color = '#FFFFFF'
                    }

                    bookingModalS3CalDaysNext[i].style.backgroundColor = '#F05E7C'
                    bookingModalS3CalDaysNext[i].style.color = '#FFFFFF'

                    bookingModalS3DateSelected = true
                    console.log(bookingModalS3DateSelected)

                    let selectedFinalDate
                    let selectedFinalMonth
                    console.log(bookingModalS3CalDaysNext[i])
                    selectedDateArr = []
                    selectedTimesArr = []
                    selectedTimesNextMonthArr = []
                    // bookingModalS3BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s3-datetime-box-header"><h1 id="booking-modal-s3-current-time-title" class='booking-modal-s3-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s3-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                    
                    // push the selected "date" number to a new array (selectedDateArr)
                    if (bookingModalS3CalDaysNext[i].textContent.length === 1) {
                      selectedDateArr.push(`0${bookingModalS3CalDaysNext[i].textContent}`)
                      selectedFinalDate = `0${bookingModalS3CalDaysNext[i].textContent}`
                    } else {
                      selectedDateArr.push(bookingModalS3CalDaysNext[i].textContent)
                      selectedFinalDate = bookingModalS3CalDaysNext[i].textContent
                    }

                    // loop through initial all available dates array and push all available "times" to a new array
                    for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                      if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                        selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                      }
                    }
                    console.log(selectedTimesArr)

                    console.log(bookingModalS3Date.getMonth().toString().length)

                    // loop through and selectedTimesArr and push times available for the "next month" only
                    for (let i = 0; i < selectedTimesArr.length; i++) {
                      if (bookingModalS3Date.getMonth().toString().length === 1) {
                        let currentMonth = `0${bookingModalS3Date.getMonth() + 1}`
                        selectedFinalMonth = `0${bookingModalS3Date.getMonth() + 1}`

                        if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        } 
                      } else if (bookingModalS3Date.getMonth().toString().length === 2) {
                        if (selectedTimesArr[i].substring(5, 7) === bookingModalS3Date.getMonth()) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS3Date.getMonth() + 1
                        }
                      }
                    }
                    console.log(selectedTimesNextMonthArr)

                    // loop through the new next months available "times" array and display those times into the bookingModalS3BodyRightDateTimeBox
                    for (let i = 0; i < selectedTimesNextMonthArr.length; i++) {
                      let newH1Element = document.createElement('h1')
                      let selectedTimeOnly = selectedTimesNextMonthArr[i].substring(11, 16)
                      newH1Element.className = 'booking-modal-s3-datetimes'
                      
                      // convert times to normal times
                      if (selectedTimeOnly === '12:00') {
                        newH1Element.textContent = '08:00 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '12:30') {
                        newH1Element.textContent = '08:30 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:00') {
                        newH1Element.textContent = '09:00 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:30') {
                        newH1Element.textContent = '09:30 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:00') {
                        newH1Element.textContent = '10:00 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:30') {
                        newH1Element.textContent = '10:30 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:00') {
                        newH1Element.textContent = '11:00 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:30') {
                        newH1Element.textContent = '11:30 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:00') {
                        newH1Element.textContent = '12:00 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:30') {
                        newH1Element.textContent = '12:30 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:00') {
                        newH1Element.textContent = '01:00 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:30') {
                        newH1Element.textContent = '01:30 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:00') {
                        newH1Element.textContent = '02:00 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:30') {
                        newH1Element.textContent = '02:30 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:00') {
                        newH1Element.textContent = '03:00 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:30') {
                        newH1Element.textContent = '03:30 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:00') {
                        newH1Element.textContent = '04:00 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:30') {
                        newH1Element.textContent = '04:30 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      }  
                    }

                    // loop through bookingModalS3BodyRightDateTimeBox to listen for a click from the user
                    for (let i = 1; i < bookingModalS3BodyRightDateTimeBox.children.length; i++) {
                      bookingModalS3BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                        let selectedFinalTime = ''

                        // clear all other times first
                        for (let j = 0; j < bookingModalS3BodyRightDateTimeBox.children.length; j++) {
                          bookingModalS3BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                          bookingModalS3BodyRightDateTimeBox.children[j].style.color = 'black'
                        }

                        bookingModalS3BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                        bookingModalS3BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                        bookingModalS3TimeSelected = true
                        console.log(bookingModalS3TimeSelected)

                        if (bookingModalS3DateSelected && bookingModalS3TimeSelected) {
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                        } else {
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
                          bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                        }

                        // convert the time back to army time
                        if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                          selectedFinalTime = '12:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                          selectedFinalTime = '12:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                          selectedFinalTime = '13:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                          selectedFinalTime = '13:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                          selectedFinalTime = '14:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                          selectedFinalTime = '14:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                          selectedFinalTime = '15:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                          selectedFinalTime = '15:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                          selectedFinalTime = '16:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                          selectedFinalTime = '16:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                          selectedFinalTime = '17:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                          selectedFinalTime = '17:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                          selectedFinalTime = '18:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                          selectedFinalTime = '18:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                          selectedFinalTime = '19:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                          selectedFinalTime = '19:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                          selectedFinalTime = '20:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                          selectedFinalTime = '20:30'
                        }

                        // push the time and date to the booking object
                        service3BookingObj.start_at = `${selectedTimesNextMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                        console.log(service3BookingObj)

                      })
                    }

                  } 
                
                })
              }

            } else if (bookingModalS3NextBtnCalCounter > 1) {
              bookingModalS3NextBtnCalCounter = 1
            }
          })


          /**Prev Btn Cal */
          bookingModalS3PrevBtnCal.addEventListener('mouseover', () => {
            if (bookingModalS3NextBtnCalCounter === 0) {
              bookingModalS3PrevBtnCal.style.cursor = 'not-allowed'
            } else if (bookingModalS3NextBtnCalCounter === 1) {
              bookingModalS3PrevBtnCal.style.cursor = 'pointer'
            }   
          })

          bookingModalS3PrevBtnCal.addEventListener('click', () => {
            if (bookingModalS3NextBtnCalCounter === 0) {
              bookingModalS3PrevBtnCal.style.cursor = 'not-allowed'
            } else if (bookingModalS3NextBtnCalCounter === 1) {
              bookingModalS3PrevBtnCal.style.cursor = 'pointer'
              bookingModalS3NextBtnCalCounter--
              availableCalDaysArr = []
              
              let bookingModalS3DateTimeBoxLength = bookingModalS3BodyRightDateTimeBox.children.length
              for (let i = 1; i < bookingModalS3DateTimeBoxLength; i++) {
                console.log(bookingModalS3BodyRightDateTimeBox.children[1])
                bookingModalS3BodyRightDateTimeBox.removeChild(bookingModalS3BodyRightDateTimeBox.children[1])
              }

              if (bookingModalS3NextBtnCalCounter === 0) {
                bookingModalS3PrevBtnCal.style.cursor = 'not-allowed'
                bookingModalS3NextBtnCal.style.cursor = 'pointer'
              }

              bookingModalS3Date.setMonth(bookingModalS3Date.getMonth() - 1)

              bookingModalS3RenderCalendar()

              bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
              bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
              bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'

              bookingModalS3CalToday = document.querySelector('.booking-modal-s3-today')
              console.log(bookingModalS3CalToday)

              bookingModalS3DateSelected = false
              bookingModalS3TimeSelected = false

              console.log(bookingModalS3DateSelected)
              console.log(bookingModalS3TimeSelected)

              let bookingModalS3CalDaysPrev = document.querySelectorAll('.booking-modal-s3-cal-days')
              let selectedDateArr = []
              let selectedTimesArr = []
              let selectedTimesNextMonthArr = []
              // bookingModalS3BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s3-datetime-box-header"><h1 id="booking-modal-s3-current-time-title" class='booking-modal-s3-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s3-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`

              bookingModalS3CalToday.addEventListener('mouseover', () => {
                console.log('peace')
                if (bookingModalS3CalToday.className === 'booking-modal-s3-today' || bookingModalS3CalToday.className === 'booking-modal-s3-datetime-hovered') {
                  bookingModalS3CalToday.style.cursor = 'pointer'
                  bookingModalS3CalToday.className = 'booking-modal-s3-datetime-hovered'
                }
              })
      
              // mouse leave avaialble calendar date (today)
              bookingModalS3CalToday.addEventListener('mouseleave', () => {
                console.log('peace')
                if (bookingModalS3CalToday.className === 'booking-modal-s3-datetime-hovered') {
                  bookingModalS3CalToday.className = 'booking-modal-s3-today'
                }
              })
      
              // if today is clicked
              bookingModalS3CalToday.addEventListener('click', () => {
                console.log('peace')
                if (bookingModalS3CalToday.className === 'booking-modal-s3-datetime-hovered') {
                  // unstyle all other available dates
                  for (let j = 0; j < bookingModalS3CalDaysPrev.length; j++) {
                    bookingModalS3CalDaysPrev[j].style.backgroundColor = ''
                    bookingModalS3CalDaysPrev[j].style.color = '#FFFFFF'
                  }
      
                  bookingModalS3CalToday.style.backgroundColor = '#f05e7c'
                  bookingModalS3CalToday.style.color = '#FFFFFF'

                  bookingModalS3DateSelected = true
                  console.log(bookingModalS3DateSelected)
      
                  let selectedFinalDate
                  let selectedFinalMonth
                  console.log(bookingModalS3CalToday)
                  selectedDateArr = []
                  selectedTimesArr = []
                  selectedTimesThisMonthArr = []
                  // bookingModalS3BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s3-datetime-box-header"><h1 id="booking-modal-s3-current-time-title" class='booking-modal-s3-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s3-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                  
                  // push the selected "date" number to a new array (selectedDateArr)
                  if (bookingModalS3CalToday.textContent.length === 1) {
                    selectedDateArr.push(`0${bookingModalS3CalToday.textContent}`)
                    selectedFinalDate = `0${bookingModalS3CalToday.textContent}`
                  } else {
                    selectedDateArr.push(bookingModalS3CalToday.textContent)
                    selectedFinalDate = bookingModalS3CalToday.textContent
                  }
      
                  // loop through initial all available dates array and push all available "times" to a new array
                  for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                    if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                      selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                    }
                  }
                  console.log(selectedTimesArr)
      
                  console.log(bookingModalS3Date.getMonth().toString().length)
      
                  // loop through and selectedTimesArr and push "times" available for the "this month" only
                  for (let i = 0; i < selectedTimesArr.length; i++) {
                    if (bookingModalS3Date.getMonth().toString().length === 1) {
                      let currentMonth = `0${bookingModalS3Date.getMonth() + 1}`
                      selectedFinalMonth = `0${bookingModalS3Date.getMonth() + 1}`
                      console.log(bookingModalS3Date.getMonth())
      
                      if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                        selectedTimesThisMonthArr.push(selectedTimesArr[i])
                        console.log(selectedTimesThisMonthArr)
                      } 
      
                    } else if (bookingModalS3Date.getMonth().toString().length === 2) {
                      if (selectedTimesArr[i].substring(5, 7) === bookingModalS3Date.getMonth()) {
                        selectedTimesThisMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS3Date.getMonth() + 1
                        console.log(selectedTimesThisMonthArr)
                      }
                    }
                  }
                  console.log(selectedTimesThisMonthArr)
      
                  // loop through "this months" available "times" array and display those times into the bookingModalS3BodyRightDateTimeBox
                  for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                    let newH1Element = document.createElement('h1')
                    let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                    newH1Element.className = 'booking-modal-s3-datetimes'
                    
                    // convert times to normal times
                    if (selectedTimeOnly === '12:00') {
                      newH1Element.textContent = '08:00 AM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '12:30') {
                      newH1Element.textContent = '08:30 AM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '13:00') {
                      newH1Element.textContent = '09:00 AM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '13:30') {
                      newH1Element.textContent = '09:30 AM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '14:00') {
                      newH1Element.textContent = '10:00 AM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '14:30') {
                      newH1Element.textContent = '10:30 AM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '15:00') {
                      newH1Element.textContent = '11:00 AM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '15:30') {
                      newH1Element.textContent = '11:30 AM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '16:00') {
                      newH1Element.textContent = '12:00 PM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '16:30') {
                      newH1Element.textContent = '12:30 PM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '17:00') {
                      newH1Element.textContent = '01:00 PM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '17:30') {
                      newH1Element.textContent = '01:30 PM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '18:00') {
                      newH1Element.textContent = '02:00 PM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '18:30') {
                      newH1Element.textContent = '02:30 PM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '19:00') {
                      newH1Element.textContent = '03:00 PM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '19:30') {
                      newH1Element.textContent = '03:30 PM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '20:00') {
                      newH1Element.textContent = '04:00 PM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '20:30') {
                      newH1Element.textContent = '04:30 PM'
                      bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                    }  
                  }
      
                  // loop through bookingModalS3BodyRightDateTimeBox to listen for a click from the user
                  for (let i = 1; i < bookingModalS3BodyRightDateTimeBox.children.length; i++) {
                    bookingModalS3BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                      let selectedFinalTime = ''
      
                      // clear all other times first
                      for (let j = 0; j < bookingModalS3BodyRightDateTimeBox.children.length; j++) {
                        bookingModalS3BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                        bookingModalS3BodyRightDateTimeBox.children[j].style.color = 'black'
                      }
      
                      bookingModalS3BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                      bookingModalS3BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                      bookingModalS3TimeSelected = true
                      console.log(bookingModalS3TimeSelected)
                      
                      if (bookingModalS3DateSelected && bookingModalS3TimeSelected) {
                        bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                        bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                        bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                      } else {
                        bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
                        bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
                        bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                      }
      
                      // convert the time back to army time
                      if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                        selectedFinalTime = '12:00'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                        selectedFinalTime = '12:30'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                        selectedFinalTime = '13:00'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                        selectedFinalTime = '13:30'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                        selectedFinalTime = '14:00'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                        selectedFinalTime = '14:30'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                        selectedFinalTime = '15:00'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                        selectedFinalTime = '15:30'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                        selectedFinalTime = '16:00'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                        selectedFinalTime = '16:30'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                        selectedFinalTime = '17:00'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                        selectedFinalTime = '17:30'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                        selectedFinalTime = '18:00'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                        selectedFinalTime = '18:30'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                        selectedFinalTime = '19:00'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                        selectedFinalTime = '19:30'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                        selectedFinalTime = '20:00'
                      } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                        selectedFinalTime = '20:30'
                      }
      
                      // push the time and date to the booking object
                      service3BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                    
                      console.log(service3BookingObj)
      
                    })
                  }

                } 
              })

              // push the days in the calendar to an array to make comparable
              for (let i = 0; i < bookingModalS3CalDaysPrev.length; i++) {
                if (bookingModalS3CalDaysPrev[i].textContent.length === 1) {
                  availableCalDaysArr.push(`0${bookingModalS3CalDaysPrev[i].textContent}`)
                } else {
                  availableCalDaysArr.push(`${bookingModalS3CalDaysPrev[i].textContent}`)
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
                    bookingModalS3CalDaysPrev[j].className = 'booking-modal-s3-datetime-style'
                    console.log(bookingModalS3CalDaysPrev[j].className)
                  }
                  
                }
              }

              // loop through bookingModalS3CalDaysPrev
              for (let i = 0; i < bookingModalS3CalDaysPrev.length; i++) {
                // mouser over available calendar date
                bookingModalS3CalDaysPrev[i].addEventListener('mouseover', () => {
                  if (bookingModalS3CalDaysPrev[i].className === 'booking-modal-s3-datetime-style') {
                    bookingModalS3CalDaysPrev[i].style.cursor = 'pointer'
                    bookingModalS3CalDaysPrev[i].className = 'booking-modal-s3-datetime-style booking-modal-s3-datetime-hovered'
                  }
                })

                // mouse leave avaialble calendar date
                bookingModalS3CalDaysPrev[i].addEventListener('mouseleave', () => {
                  if (bookingModalS3CalDaysPrev[i].className === 'booking-modal-s3-datetime-style booking-modal-s3-datetime-hovered') {
                    bookingModalS3CalDaysPrev[i].className = 'booking-modal-s3-datetime-style'
                  }
                })

                // click on available calendar date
                bookingModalS3CalDaysPrev[i].addEventListener('click', () => {                
                  if (bookingModalS3CalDaysPrev[i].className === 'booking-modal-s3-datetime-style booking-modal-s3-datetime-hovered') {
                    // unstyle all other available dates
                    bookingModalS3CalToday.style.backgroundColor = ''
                    bookingModalS3CalToday.style.color = ''
                    bookingModalS3CalToday.className = 'today'

                    // unstyle all other available dates
                    for (let j = 0; j < bookingModalS3CalDaysPrev.length; j++) {
                      bookingModalS3CalDaysPrev[j].style.backgroundColor = ''
                      bookingModalS3CalDaysPrev[j].style.color = '#FFFFFF'
                    }

                    bookingModalS3CalDaysPrev[i].style.backgroundColor = '#F05E7C'
                    bookingModalS3CalDaysPrev[i].style.color = '#FFFFFF'

                    bookingModalS3DateSelected = true
                    console.log(bookingModalS3DateSelected)


                    let selectedFinalDate
                    let selectedFinalMonth
                    console.log(bookingModalS3CalDaysPrev[i])
                    selectedDateArr = []
                    selectedTimesArr = []
                    selectedTimesNextMonthArr = []
                    // bookingModalS3BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s3-datetime-box-header"><h1 id="booking-modal-s3-current-time-title" class='booking-modal-s3-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s3-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                    
                    // push the selected "date" number to a new array (selectedDateArr)
                    if (bookingModalS3CalDaysPrev[i].textContent.length === 1) {
                      selectedDateArr.push(`0${bookingModalS3CalDaysPrev[i].textContent}`)
                      selectedFinalDate = `0${bookingModalS3CalDaysPrev[i].textContent}`
                    } else {
                      selectedDateArr.push(bookingModalS3CalDaysPrev[i].textContent)
                      selectedFinalDate = bookingModalS3CalDaysPrev[i].textContent
                    }

                    // loop through initial all available dates array and push all available "times" to a new array
                    for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                      if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                        selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                      }
                    }
                    console.log(selectedTimesArr)

                    console.log(bookingModalS3Date.getMonth().toString().length)

                    // loop through and selectedTimesArr and push times available for the "next month" only
                    for (let i = 0; i < selectedTimesArr.length; i++) {
                      if (bookingModalS3Date.getMonth().toString().length === 1) {
                        let currentMonth = `0${bookingModalS3Date.getMonth() + 1}`
                        selectedFinalMonth = `0${bookingModalS3Date.getMonth() + 1}`

                        if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        } 
                      } else if (bookingModalS3Date.getMonth().toString().length === 2) {
                        if (selectedTimesArr[i].substring(5, 7) === bookingModalS3Date.getMonth()) {
                          selectedTimesNextMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS3Date.getMonth() + 1
                        }
                      }
                    }
                    console.log(selectedTimesNextMonthArr)

                    // loop through the new next months available "times" array and display those times into the bookingModalS3BodyRightDateTimeBox
                    for (let i = 0; i < selectedTimesNextMonthArr.length; i++) {
                      let newH1Element = document.createElement('h1')
                      let selectedTimeOnly = selectedTimesNextMonthArr[i].substring(11, 16)
                      newH1Element.className = 'booking-modal-s3-datetimes'
                      
                      // convert times to normal times
                      if (selectedTimeOnly === '12:00') {
                        newH1Element.textContent = '08:00 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '12:30') {
                        newH1Element.textContent = '08:30 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:00') {
                        newH1Element.textContent = '09:00 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:30') {
                        newH1Element.textContent = '09:30 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:00') {
                        newH1Element.textContent = '10:00 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:30') {
                        newH1Element.textContent = '10:30 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:00') {
                        newH1Element.textContent = '11:00 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:30') {
                        newH1Element.textContent = '11:30 AM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:00') {
                        newH1Element.textContent = '12:00 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:30') {
                        newH1Element.textContent = '12:30 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:00') {
                        newH1Element.textContent = '01:00 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:30') {
                        newH1Element.textContent = '01:30 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:00') {
                        newH1Element.textContent = '02:00 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:30') {
                        newH1Element.textContent = '02:30 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:00') {
                        newH1Element.textContent = '03:00 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:30') {
                        newH1Element.textContent = '03:30 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:00') {
                        newH1Element.textContent = '04:00 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:30') {
                        newH1Element.textContent = '04:30 PM'
                        bookingModalS3BodyRightDateTimeBox.appendChild(newH1Element)
                      }  
                    }

                    // loop through bookingModalS3BodyRightDateTimeBox to listen for a click from the user
                    for (let i = 1; i < bookingModalS3BodyRightDateTimeBox.children.length; i++) {
                      bookingModalS3BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                        let selectedFinalTime = ''

                        // clear all other times first
                        for (let j = 0; j < bookingModalS3BodyRightDateTimeBox.children.length; j++) {
                          bookingModalS3BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                          bookingModalS3BodyRightDateTimeBox.children[j].style.color = 'black'
                        }

                        bookingModalS3BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                        bookingModalS3BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                        bookingModalS3TimeSelected = true
                        console.log(bookingModalS3TimeSelected)

                        if (bookingModalS3DateSelected && bookingModalS3TimeSelected) {
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
                          bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                        } else {
                          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
                          bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
                          bookingModalS3DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                        }
                        

                        // convert the time back to army time
                        if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                          selectedFinalTime = '12:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                          selectedFinalTime = '12:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                          selectedFinalTime = '13:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                          selectedFinalTime = '13:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                          selectedFinalTime = '14:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                          selectedFinalTime = '14:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                          selectedFinalTime = '15:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                          selectedFinalTime = '15:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                          selectedFinalTime = '16:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                          selectedFinalTime = '16:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                          selectedFinalTime = '17:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                          selectedFinalTime = '17:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                          selectedFinalTime = '18:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                          selectedFinalTime = '18:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                          selectedFinalTime = '19:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                          selectedFinalTime = '19:30'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                          selectedFinalTime = '20:00'
                        } else if (bookingModalS3BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                          selectedFinalTime = '20:30'
                        }

                        // push the time and date to the booking object
                        service3BookingObj.start_at = `${selectedTimesNextMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                        console.log(service3BookingObj)

                      })
                    }


                  } 
                
                })

              }

            }

          })
        }
      }
        service3Availabilities()
          .then(() => { console.log('the service3Availabilities() has been sent to the express server') })
          .catch((error) => { console.log(error) }) 
    }
  }

  confirmDetails() {
    // edit "confirm details"
    editbookingModalS3ConfirmDetails.addEventListener('click', () => {
      bookingModalS3Agents.className = 'booking-modal-s3-body-right hide-container'
      bookingModalS3Location.className = 'booking-modal-s3-right hide-container'
      bookingModalS3DateTime.className = 'booking-modal-s3-body-right hide-container'
      bookingModalS3ConfirmDetails.className = 'booking-modal-s3-body-right'
      
      bookingModalS3Step1.className = ''
      bookingModalS3Step2.className = ''
      bookingModalS3Step3.className = ''
      bookingModalS3Step4.className = 'step-selected'

      bookingModalS3Counter = 3

      // display users booking reciept info here

      // display current phone number
      bookingModalS3CurrentPhoneValue.textContent = `${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(0, 3)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(3, 6)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(6, 10)}`

      // display customer reciept 
        // selected "service"
      bookingModalS3SelectedService.textContent = `${bookingModalS3BodyLeftTitle.textContent}`

        // selected "agent"
      for (let i = 0; i < bookingModalS3BodyRightAgentsBox.children.length; i++) {
        if (bookingModalS3BodyRightAgentsBox.children[i].className === 'booking-modal-s3-agent-selected') {
          bookingModalS3SelectedAgent.textContent = bookingModalS3BodyRightAgentsBox.children[i].textContent
        }
      }
        // selected "location"
        console.log(bookingModalS3CustomerLocationsBox.children[0].style.backgroundColor) 
        const regex = /[\s\n]/g
      for (let i = 0; i < bookingModalS3CustomerLocationsBox.children.length; i++) {
        if (bookingModalS3CustomerLocationsBox.children[i].style.backgroundColor === 'rgb(240, 94, 124)') {
          console.log('Go')
          bookingModalS3SelectedLocation.textContent = bookingModalS3CustomerLocationsBox.children[i].textContent
        }
      }
      
        // selected "date and time"
      let bookingModalS3SelectedTime

      if (service3BookingObj.start_at.slice(11, 16) === '12:00') {
        bookingModalS3SelectedTime = '08:00 AM EST'
        service3BookingObj.appointment_time = '08:00 AM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '12:30') {
        bookingModalS3SelectedTime = '08:30 AM EST'
        service3BookingObj.appointment_time = '08:30 AM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '13:00') {
        bookingModalS3SelectedTime = '09:00 AM EST'
        service3BookingObj.appointment_time = '09:00 AM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '13:30') {
        bookingModalS3SelectedTime = '09:30 AM EST'
        service3BookingObj.appointment_time = '09:30 AM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '14:00') {
        bookingModalS3SelectedTime = '10:00 AM EST'
        service3BookingObj.appointment_time = '10:00 AM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '14:30') {
        bookingModalS3SelectedTime = '10:30 AM EST'
        service3BookingObj.appointment_time = '10:30 AM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '15:00') {
        bookingModalS3SelectedTime = '11:00 AM EST'
        service3BookingObj.appointment_time = '11:00 AM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '15:30') {
        bookingModalS3SelectedTime = '11:30 AM EST'
        service3BookingObj.appointment_time = '11:30 AM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '16:00') {
        bookingModalS3SelectedTime = '12:00 PM EST'
        service3BookingObj.appointment_time = '12:00 PM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '16:30') {
        bookingModalS3SelectedTime = '12:30 PM EST'
        service3BookingObj.appointment_time = '12:30 PM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '17:00') {
        bookingModalS3SelectedTime = '01:00 PM EST'
        service3BookingObj.appointment_time = '01:00 PM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '17:30') {
        bookingModalS3SelectedTime = '01:30 PM EST'
        service3BookingObj.appointment_time = '01:30 PM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '18:00') {
        bookingModalS3SelectedTime = '02:00 PM EST'
        service3BookingObj.appointment_time = '02:00 PM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '18:30') {
        bookingModalS3SelectedTime = '02:30 PM EST'
        service3BookingObj.appointment_time = '02:30 PM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '19:00') {
        bookingModalS3SelectedTime = '03:00 PM EST'
        service3BookingObj.appointment_time = '03:00 PM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '19:30') {
        bookingModalS3SelectedTime = '03:30 PM EST'
        service3BookingObj.appointment_time = '03:30 PM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '20:00') {
        bookingModalS3SelectedTime = '04:00 PM EST'
        service3BookingObj.appointment_time = '04:00 PM EST'
      } else if (service3BookingObj.start_at.slice(11, 16) === '20:30') {
        bookingModalS3SelectedTime = '04:30 PM EST'
        service3BookingObj.appointment_time = '04:30 PM EST'
      }   

    
      bookingModalS3SelectedDateTime.textContent = `${service3BookingObj.start_at.slice(5, 7)}/${service3BookingObj.start_at.slice(8, 10)}/${service3BookingObj.start_at.slice(0, 4)} @ ${bookingModalS3SelectedTime}`

      editbookingModalS3ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
      editbookingModalS3ConfirmDetails.className = 'bi bi-pencil-square right1rem'
    })

    // booking modal s2 change phone number checkbox
    bookingModalS3ChangeNumberCheckbox.addEventListener('click', () => {
      if (bookingModalS3ChangeNumberCheckbox.checked) {
        // display change number divs
        bookingModalS3ChangePhone.className = 'booking-modal-s3-change-phone'
        bookingModalS3ChangePhoneCaution.className = 'booking-modal-s3-change-phone-caution'

        // get users email from storage -- display on div
        // updateUserPhoneMongoDbObj.address.address_line_1 = JSON.parse(localStorage.getItem('currentUser')).address.address_line_1
        // updateUserPhoneMongoDbObj.address.administrative_district_level_1 = JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1
        // updateUserPhoneMongoDbObj.address.locality = JSON.parse(localStorage.getItem('currentUser')).address.locality
        // updateUserPhoneMongoDbObj.address.postal_code = JSON.parse(localStorage.getItem('currentUser')).address.postal_code
        updateService3PhoneBookingObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
        
        console.log(updateService3PhoneBookingObj)

      } else {
        // hide change number divs
        bookingModalS3ChangePhone.className = 'booking-modal-s3-change-phone hide-container'
        bookingModalS3ChangePhoneCaution.className = 'booking-modal-s3-change-phone-caution hide-container'
      }

      // change phone number submit btn clicked
      bookingModalS3ChangePhoneBtn.addEventListener('click', () => {
        // check that bookingModalS3NextBtn.className = 'booking-modal-s3-next' matches regex
        if (bookingModalS3ChangePhoneInput.value.match(myApp.phoneCheck1) || bookingModalS3ChangePhoneInput.value.match(myApp.phoneCheck2) || bookingModalS3ChangePhoneInput.value.match(myApp.phoneCheck3) || bookingModalS3ChangePhoneInput.value.match(myApp.phoneCheck4) || bookingModalS3ChangePhoneInput.value.match(myApp.phoneCheck5) || bookingModalS3ChangePhoneInput.value.match(myApp.phoneCheck6)) {
          updateService3PhoneBookingObj.phone_number = bookingModalS3ChangePhoneInput.value
          bookingModalS3ChangePhoneError.className = 'booking-modal-s3-change-phone-input-error hide-container'
          bookingModalS3ChangePhoneInput.className = 'input-valid-clear'

          // filter/clean the phone value
          let filteredCleanPhoneValue = bookingModalS3ChangePhoneInput.value.replace(myApp.filterPhone, '')     

          if (filteredCleanPhoneValue !== JSON.parse(localStorage.getItem('currentUser')).phone_number) {
            updateService3PhoneBookingObj.phone_number = filteredCleanPhoneValue
            service3BookingObj.phone_number = filteredCleanPhoneValue

            if (bookingModalS3ChangePhoneInput.className === 'input-valid-clear') {

              bookingModalS3ChangePhone.className = 'booking-modal-s3-change-phone hide-container'
              bookingModalS3ChangePhoneCaution.className = 'booking-modal-s3-change-phone-caution hide-container'
              bookingModalS3ChangePhoneLoading.className = 'booking-modal-s3-change-phone-loading'

              // if so update the new number in MongoDB
              async function updateMongoDBPhoneNumber() {
                // req & res
                const update_phone_number_mongodb_req = await fetch(`/updatePhoneNumberMongoDB/${JSON.stringify(updateService3PhoneBookingObj)}`, { method: 'post' })
                const update_phone_number_mongodb_res = await update_phone_number_mongodb_req.json()

                console.log(update_phone_number_mongodb_res)

                // change the current number to the new number (confirm details)
                bookingModalS3CurrentPhoneValue.textContent = `${filteredCleanPhoneValue.slice(0, 3)}-${filteredCleanPhoneValue.slice(3, 6)}-${filteredCleanPhoneValue.slice(6, 10)}`

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
                    updateService3PhoneBookingObj.customer_id = get_all_users_square_res.customers[i].id
                    // service1BookingObj.customer_id = get_all_users_square_res.customers[i].id
                    console.log(updateService3PhoneBookingObj)
                  }
                }
                  // send new number to Square Api
                async function updateSquarePhoneNumber() {
                  // req & res
                  const update_phone_number_square_req = await fetch(`/updatePhoneSquare/${JSON.stringify(updateService3PhoneBookingObj)}`, { method: 'put' })
                  const update_phone_number_square_res = await update_phone_number_square_req.json()
    
                  console.log(update_phone_number_square_res)
    
                  // change the current number to the new number (confirm details)
                  bookingModalS3CurrentPhoneValue.textContent = `${filteredCleanPhoneValue.slice(0, 3)}-${filteredCleanPhoneValue.slice(3, 6)}-${filteredCleanPhoneValue.slice(6, 10)}`

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
                    bookingModalS3ChangePhoneLoading.className = 'booking-modal-s3-change-phone-loading hide-container'
                    bookingModalS3ChangePhoneSuccess.className = 'booking-modal-s3-change-phone-success'

                    setTimeout(() => {
                      bookingModalS3ChangePhoneSuccess.className = 'booking-modal-s3-change-phone-success hide-container'
                      bookingModalS3ChangePhone.className = 'booking-modal-s3-change-phone hide-container'
                      bookingModalS3ChangePhoneCaution.className = 'booking-modal-s3-change-phone-caution hide-container'
    
                      bookingModalS3ChangeNumberCheckbox.checked = false
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
              // !bookingModalS3CurrentPhone.checked
            }
          } else {
            // show the error div
            bookingModalS3ChangePhoneError.className = 'booking-modal-s3-change-phone-input-error'

            bookingModalS3ChangePhoneError.innerHTML = `<h1>This number already exists</h1>`
            // "this phone number already exists"
          }
          

        } else {
          // show the phone error divs
          bookingModalS3ChangePhoneError.className = 'booking-modal-s3-change-phone-input-error'
          bookingModalS3ChangePhoneError.innerHTML = `<h1>This number is invalid</h1>`
          bookingModalS3ChangePhoneInput.className = 'booking-modal-s3-change-phone-input-error input-invalid'
        }
      })
    })
  }

  bookingModalNextBtn() {
    // next btn clicked
    bookingModalS3NextBtn.addEventListener('click', () => {
      bookingModalS3Counter++

      // counter on "Select an Agent"
      if (bookingModalS3Counter === 1 && bookingModalS3AgentsSelected) {
        bookingModalS3Agents.className = 'booking-modal-s3-right hide-container'
        bookingModalS3Location.className = 'booking-modal-s3-right'
        bookingModalS3DateTime.className = 'booking-modal-s3-right hide-container'
        bookingModalS3ConfirmDetails.className = 'booking-modal-s3-right hide-container'

        bookingModalS3Step1.className = ''
        bookingModalS3Step2.className = 'step-selected'
        bookingModalS3Step3.className = ''
        bookingModalS3Step4.className = ''

        this.enterLocation()

        // if "location" has been selected keep the footer next btn activated
        if (bookingModalS3LocationSelected) {
          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
        } else {
          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
          bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
        }

        // activate the "edit" locations icon
        editbookingModalS3LocationNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS3Location.className = 'bi bi-pencil-square right1rem'

      } else if (bookingModalS3Counter === 1 && !bookingModalS3AgentsSelected) {
        console.log('Please select an agent.')
        bookingModalS3Counter = 0
      }

      // counter on "Select a Location"
      if (bookingModalS3Counter === 2 && bookingModalS3LocationSelected) {
        bookingModalS3Agents.className = 'booking-modal-s3-right hide-container'
        bookingModalS3Location.className = 'booking-modal-s3-right hide-container'
        bookingModalS3DateTime.className = 'booking-modal-s3-right'
        bookingModalS3ConfirmDetails.className = 'booking-modal-s3-right hide-container'

        bookingModalS3Step1.className = ''
        bookingModalS3Step2.className = ''
        bookingModalS3Step3.className = 'step-selected'
        bookingModalS3Step4.className = ''

        this.selectDateTime()

        // if "date" & "time" has been selected already fill the footer next btn
        if (bookingModalS3DateSelected && bookingModalS3TimeSelected) {
          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null hide-container'
          bookingModalS3NextBtn.className = 'booking-modal-s3-next'
        } else {
          bookingModalS3NextNullBtn.className = 'booking-modal-s3-next-null'
          bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'
        }

        editbookingModalS3DateTimeNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS3DateTime.className = 'bi bi-pencil-square right1rem'
      } else if (bookingModalS3Counter === 2 && !bookingModalS3LocationSelected) {
        console.log('Please select a location')
        bookingModalS3Counter = 1
      }

      // counter on "Select Date & Time"
      if (bookingModalS3Counter === 3 && bookingModalS3DateSelected && bookingModalS3TimeSelected) {
        bookingModalS3Agents.className = 'booking-modal-s3-right hide-container'
        bookingModalS3Location.className = 'booking-modal-s3-right hide-container'
        bookingModalS3DateTime.className = 'booking-modal-s3-right hide-container'
        bookingModalS3ConfirmDetails.className = 'booking-modal-s3-right'

        bookingModalS3Step1.className = ''
        bookingModalS3Step2.className = ''
        bookingModalS3Step3.className = ''
        bookingModalS3Step4.className = 'step-selected'

        this.confirmDetails()

        editbookingModalS3ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS3ConfirmDetails.className = 'bi bi-pencil-square right1rem'

        bookingModalS3NextBtn.className = 'booking-modal-s3-next hide-container'

        // display current phone number
        bookingModalS3CurrentPhoneValue.textContent = `${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(0, 3)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(3, 6)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(6, 10)}`

        // display customer reciept 
          // selected "service"
        bookingModalS3SelectedService.textContent = `${bookingModalS3BodyLeftTitle.textContent}`

          // selected "agent"
        for (let i = 0; i < bookingModalS3BodyRightAgentsBox.children.length; i++) {
          if (bookingModalS3BodyRightAgentsBox.children[i].className === 'booking-modal-s3-agent-selected') {
            bookingModalS3SelectedAgent.textContent = bookingModalS3BodyRightAgentsBox.children[i].textContent
          }
        }
          // selected "location"
          console.log(bookingModalS3CustomerLocationsBox.children[0].style.backgroundColor) 
          const regex = /[\s\n]/g
        for (let i = 0; i < bookingModalS3CustomerLocationsBox.children.length; i++) {
          if (bookingModalS3CustomerLocationsBox.children[i].style.backgroundColor === 'rgb(240, 94, 124)') {
            console.log('Go')
            bookingModalS3SelectedLocation.textContent = bookingModalS3CustomerLocationsBox.children[i].textContent
          }
        }
        
          // selected "date and time"
        let bookingModalS3SelectedTime

        if (service3BookingObj.start_at.slice(11, 16) === '12:00') {
          bookingModalS3SelectedTime = '08:00 AM EST'
          service3BookingObj.appointment_time = '08:00 AM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '12:30') {
          bookingModalS3SelectedTime = '08:30 AM EST'
          service3BookingObj.appointment_time = '08:30 AM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '13:00') {
          bookingModalS3SelectedTime = '09:00 AM EST'
          service3BookingObj.appointment_time = '09:00 AM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '13:30') {
          bookingModalS3SelectedTime = '09:30 AM EST'
          service3BookingObj.appointment_time = '09:30 AM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '14:00') {
          bookingModalS3SelectedTime = '10:00 AM EST'
          service3BookingObj.appointment_time = '10:00 AM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '14:30') {
          bookingModalS3SelectedTime = '10:30 AM EST'
          service3BookingObj.appointment_time = '10:30 AM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '15:00') {
          bookingModalS3SelectedTime = '11:00 AM EST'
          service3BookingObj.appointment_time = '11:00 AM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '15:30') {
          bookingModalS3SelectedTime = '11:30 AM EST'
          service3BookingObj.appointment_time = '11:30 AM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '16:00') {
          bookingModalS3SelectedTime = '12:00 PM EST'
          service3BookingObj.appointment_time = '12:00 PM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '16:30') {
          bookingModalS3SelectedTime = '12:30 PM EST'
          service3BookingObj.appointment_time = '12:30 PM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '17:00') {
          bookingModalS3SelectedTime = '01:00 PM EST'
          service3BookingObj.appointment_time = '01:00 PM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '17:30') {
          bookingModalS3SelectedTime = '01:30 PM EST'
          service3BookingObj.appointment_time = '01:30 PM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '18:00') {
          bookingModalS3SelectedTime = '02:00 PM EST'
          service3BookingObj.appointment_time = '02:00 PM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '18:30') {
          bookingModalS3SelectedTime = '02:30 PM EST'
          service3BookingObj.appointment_time = '02:30 PM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '19:00') {
          bookingModalS3SelectedTime = '03:00 PM EST'
          service3BookingObj.appointment_time = '03:00 PM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '19:30') {
          bookingModalS3SelectedTime = '03:30 PM EST'
          service3BookingObj.appointment_time = '03:30 PM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '20:00') {
          bookingModalS3SelectedTime = '04:00 PM EST'
          service3BookingObj.appointment_time = '04:00 PM EST'
        } else if (service3BookingObj.start_at.slice(11, 16) === '20:30') {
          bookingModalS3SelectedTime = '04:30 PM EST'
          service3BookingObj.appointment_time = '04:30 PM EST'
        }  

        bookingModalS3SelectedDateTime.textContent = `${service3BookingObj.start_at.slice(5, 7)}/${service3BookingObj.start_at.slice(8, 10)}/${service3BookingObj.start_at.slice(0, 4)} @ ${bookingModalS3SelectedTime}`

        // price
        bookingModalS3SelectedPrice.textContent = service3BookingObj.service_price
        bookingModalS3PayBtnPrice.textContent = `Pay ${service3BookingObj.service_price}`

        editbookingModalS3ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
        editbookingModalS3ConfirmDetails.className = 'bi bi-pencil-square right1rem'

      } else if (bookingModalS3Counter === 3 && !bookingModalS3DateSelected || bookingModalS3Counter === 3 && !bookingModalS3TimeSelected) {
        console.log('Please select both a date and time.')
        bookingModalS3Counter = 2
      }

    })
  }

  createBooking() {
    // if reciept checkbox clicked show payment div
    bookingModalS3InfoCorrectCheckbox.addEventListener('click', () => {
      if (bookingModalS3InfoCorrectCheckbox.checked) {
        bookingModalS3PaymentsContainer.className = 'booking-modal-s3-payments-container'
        const bookingModalS3PayBtn = document.getElementById('booking-modal-s3-card-button')

        bookingModalS3PayBtn.addEventListener('click', () => {
          // make sure receipt checkbox is selected
          if (bookingModalS3InfoCorrectCheckbox.checked) {
            let paymentStatus = document.getElementById('booking-modal-s3-payment-status-container')
            paymentStatus.className = ''
    
            // hide payment form
            // bookingModalS3PaymentForm.className = 'hide-container'
  
            // show lodaing payment
            bookingModalS3LoadingPayment.className = 'booking-modal-s3-loading-payment'                       
    
            const paymentVaild = setInterval(() => {
              if (paymentStatus.className === 'is-failure') {
                // hide loading payment box
                bookingModalS3LoadingPayment.className = 'booking-modal-s3-loading-payment hide-container'
                // show payment form
                bookingModalS3PaymentForm.className = ''
                clearInterval(paymentVaild)
              } else if (paymentStatus.className === 'is-success') {
                if (JSON.parse(localStorage.getItem('payment-response')).payment.status === "COMPLETED") {
                  // hide loading payment box
                  bookingModalS3LoadingPayment.className = 'booking-modal-s3-loading-payment hide-container'
                  // show payment form
                  bookingModalS3PaymentForm.className = ''
                  // give margin to payment success div
                  bookingModalS3LoadingPayment.style.marginBottom = '2rem'
                  bookingModalS3Policy1.style.marginTop = '2rem'

                  console.log(service3BookingObj)

                  // hide confirm details div
                  bookingModalS3ConfirmDetailsContainer.className = 'booking-modal-s3-body-right-confirm-details-container hide-container'
                  // show loading booking container
                  bookingModalS3Loading.className = 'booking-modal-s3-confirm-details-loading'
                  // do the following...

                  // create the booking --> Square Api
                  async function createBooking() {
                    // req & res
                    const create_booking_req = await fetch(`/createBooking/${JSON.stringify(service3BookingObj)}`, { method: 'post' })
                    const create_booking_res = await create_booking_req.json()
                    console.log(create_booking_res)

                    if (create_booking_res.booking) {
                      // send both email and text confirmation

                      // email booking confirmation
                      async function emailBooking() {
                        // req & res
                        const send_email_booking_req = await fetch(`/emailBooking/${JSON.stringify(service3BookingObj)}`)
                        const send_email_booking_res = await send_email_booking_req.json()
                        console.log(send_email_booking_res)
                      }
                        emailBooking()
                          .then(() => { console.log('the emailBookng() has been sent to the express server') })
                          .catch((error) => { console.log(error) })

                      // text booking confirmation
                      async function textBooking() {
                        // req & res
                        const send_text_booking_req = await fetch(`/textBooking/${JSON.stringify(service3BookingObj)}`, { method: 'POST' })
                        const send_text_booking_res = await send_text_booking_req.json()
                        console.log(send_text_booking_res)

                        if (send_text_booking_res) {
                          // when done show the booking complete div
                          bookingModalS3Loading.className = 'booking-modal-s3-confirm-details-loading hide-container'
                          bookingModalS3LoadingSuccess.className = 'booking-modal-s3-confirm-details-success'
                          console.log('this is the service3BookingObj duration_minutes', service3BookingObj)
                          if (service3BookingObj.duration_minutes / 60 < 1) {
                            bookingModalS3LoadingSuccess.innerHTML = 
                            `
                            <div class="booking-modal-s3-loading-success"></div>
                            <h1>Thank you for booking with us!</h1>
                            <p>Please check your email and phone for your booking details.</p>
                            <p>Talk to you soon!</p>
                            <p>&#128515;</p>
                            `
                            // refresh the page
                            setTimeout(() => {
                              // myApp.bookingModalS3.className = 'booking-modal-s3 hide-container'
                              location.reload()
                            }, 8000)
                          } else if (service3BookingObj.duration_minutes / 60 === 1) {
                            bookingModalS3LoadingSuccess.innerHTML =
                            `
                            <div class="booking-modal-s3-loading-success"></div>
                            <h1>Thank you for booking with us!</h1>
                            <p>Please check your email and phone for your booking details.</p>
                            <p>See you soon!</p>
                            <p>&#128515;</p>
                            `

                            // refresh the page
                            setTimeout(() => {
                              // myApp.bookingModalS3.className = 'booking-modal-s3 hide-container'
                              location.reload()
                            }, 8000)
                          } else if (service3BookingObj.duration_minutes / 60 > 1) {
                            bookingModalS3LoadingSuccess.innerHTML =
                            `
                            <div class="booking-modal-s3-loading-success"></div>
                            <h1>Thank you for booking with us!</h1>
                            <p>Please check your email and phone for your booking details.</p>
                            <p>See you soon!</p>
                            <p>&#128515;</p>
                            `

                            // refresh the page
                            setTimeout(() => {
                              // myApp.sbookingModalS3.className = 'booking-modal-s3 hide-container'
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
                  bookingModalS3LoadingPayment.className = 'booking-modal-s3-loading-payment hide-container'
                  // show payment form
                  bookingModalS3PaymentForm.className = ''
                  // input-invalid all payment fields & show error message 
                  clearInterval(paymentVaild)
                }
              }
            }, 500)
          } else {
            bookingModalS3InfoCorrectCheckbox.className = 'input-invalid'
          }
        })
      } else {
        bookingModalS3PaymentsContainer.className = 'booking-modal-s3-payments-container hide-container'
      }
    })


  }

  closeModal() {
    bookingModalS3Close.addEventListener('click', () => {
      console.log('ive been clicked on')
      bookingModalS3.className = 'booking-modal-s3 hide-container'
    })
  
    document.addEventListener('click', (event) => { 
      if (event.target === bookingModalS3) {
        bookingModalS3.className = 'booking-modal-s3 hide-container'
      }
    })
  }
}

const service3Component = new Service3Component()

module.exports = { service3Component }
