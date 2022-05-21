const myApp = require('../../index.js')

// calendar
let bookingModalS1Date = new Date()

const bookingModalS1NextBtnCal = document.querySelector('.booking-modal-s1-next-cal')
const bookingModalS1PrevBtnCal = document.querySelector('.booking-modal-s1-prev-cal')

let bookingModalS1NextBtnCalCounter = 0

const bookingModalS1RenderCalendar = () => {
  bookingModalS1Date.setDate(1)

  const monthDays = document.querySelector(".booking-modal-s1-days")
  monthDays.innerHTML = ``

  const lastDay = new Date(
    bookingModalS1Date.getFullYear(),
    bookingModalS1Date.getMonth() + 1,
    0
  ).getDate()

  const prevLastDay = new Date(
    bookingModalS1Date.getFullYear(),
    bookingModalS1Date.getMonth(),
    0
  ).getDate()

  const firstDayIndex = bookingModalS1Date.getDay();

  const lastDayIndex = new Date(
    bookingModalS1Date.getFullYear(),
    bookingModalS1Date.getMonth() + 1,
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

  document.querySelector(".booking-modal-s1-date h1").innerHTML = months[bookingModalS1Date.getMonth()]

  document.querySelector(".booking-modal-s1-date p").innerHTML = new Date().toDateString()

  let days = ""

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      bookingModalS1Date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="booking-modal-s1-today">${i}</div>`
    } else {
      days += `<div class='booking-modal-s1-cal-days'>${i}</div>`
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days
  }
}

bookingModalS1RenderCalendar()

/** Phone Consultation (create booking class) */
const bookingModalS1 = document.getElementById('booking-modal-s1')
const bookingModalS1Close = document.getElementById('booking-modal-s1-close')
const bookingModalS1BodyLeft = document.getElementById('booking-modal-s1-body-left')
const bookingModalS1BodyLeftTitle = document.getElementById('booking-modal-s1-body-left-title')

const bookingModalS1Step1 = document.getElementById('booking-modal-s1-step-1')
const editBookingModalS1Agents = document.getElementById('edit-bm-s1-agents')
const bookingModalS1AgentsPickedIcon = document.getElementById('booking-modal-s1-agents-picked-icon')
const bookingModalS1Agents = document.getElementById('booking-modal-s1-agents')
const bookingModalS1BodyRightAgentsBox = document.getElementById('booking-modal-s1-agents-box')
let bookingModalS1AgentsSelected = false

const bookingModalS1Step2 = document.getElementById('booking-modal-s1-step-2')
const editBookingModalS1DateTimeNull = document.getElementById('edit-bm-s1-datetime-null')
const editBookingModalS1DateTime = document.getElementById('edit-bm-s1-datetime')
let bookingModalS1BodyRightDateTimeBox = document.getElementById('booking-modal-s1-datetime-box')
const bookingModalS1DateTime = document.getElementById('booking-modal-s1-datetime')
// const bookingModalS1DateTimeBox = document.getElementById('booking-modal-s1-datetime-box')
const bookingModalS1DateTimePickedIcon = document.getElementById('booking-modal-s1-datetime-picked-icon')
let bookingModalS1DateSelected = false
let bookingModalS1TimeSelected = false
let bookingModalS1DateTimeSelected = false

let bookingModalS1CalToday = document.querySelector('.booking-modal-s1-today')
let bookingModalS1CalDays = document.querySelectorAll('.booking-modal-s1-cal-days')

const bookingModalS1Step3 = document.getElementById('booking-modal-s1-step-3')
const editBookingModalS1ConfirmDetails = document.getElementById('edit-bm-s1-confirm-details')
const editBookingModalS1ConfirmDetailsNull = document.getElementById('edit-bm-s1-confirm-details-null')
const bookingModalS1ConfirmDetails = document.getElementById('booking-modal-s1-confirm-details')
const bookingModalS1ConfirmDetailsContainer = document.getElementById('booking-modal-s1-confirm-details-container')
const bookingModalS1ConfirmDetailsPickedIcon = document.getElementById('booking-modal-s1-confirm-details-picked-icon')
const bookingModalS1ConfirmDetailsTitle = document.getElementById('booking-modal-s1-confirm-details-title')
const bookingModalS1ConfirmDetailsRequiredCheckbox = document.getElementById('booking-modal-s1-confirm-details-checkbox-require')
const bookingModalS1CurrentPhone = document.getElementById('booking-modal-s1-current-phone')
let bookingModalS1CurrentPhoneValue = document.getElementById('booking-modal-s1-current-phone-number-value')
const bookingModalS1ChangeNumberCheckbox = document.getElementById('booking-modal-s1-change-phone-number-checkbox')
const bookingModalS1ChangePhone = document.getElementById('booking-modal-s1-change-phone')
const bookingModalS1ChangePhoneError = document.getElementById('booking-modal-s1-change-phone-error')
const bookingModalS1ChangePhoneInput = document.getElementById('booking-modal-s1-change-phone-input')
const bookingModalS1ChangePhoneCaution = document.getElementById('booking-modal-s1-change-phone-caution')
const bookingModalS1ChangePhoneBtn = document.getElementById('booking-modal-s1-change-phone-input-btn')
const bookingModalS1ChangePhoneLoading = document.getElementById('booking-modal-s1-change-phone-loading')
const bookingModalS1ChangePhoneSuccess = document.getElementById('booking-modal-s1-change-phone-success')
const bookingModalS1InfoCorrectCheckbox = document.getElementById('booking-modal-s1-info-correct-checkbox')
let bookingModalS1SelectedService = document.getElementById('booking-modal-s1-selected-service')
let bookingModalS1SelectedAgent = document.getElementById('booking-modal-s1-selected-agent')
let bookingModalS1SelectedDateTime = document.getElementById('booking-modal-s1-selected-datetime')

const bookingModalS1Loading = document.getElementById('booking-modal-s1-confirm-details-loading')
const bookingModalS1LoadingSuccess = document.getElementById('booking-modal-s1-confirm-details-success')

const bookingModalS1BookingBtn = document.getElementById('booking-modal-s1-booking-btn')

const bookingModalS1Footer = document.getElementById('booking-modal-s1-footer')

let bookingModalS1Counter = 0

let bookingModalS1NewNumberObj = {
  phone_number: ''
}

const bookingModalS1NextNullBtn = document.getElementById('booking-modal-s1-next-null')
const bookingModalS1NextBtn = document.getElementById('booking-modal-s1-next')

const bookingModalS1CloseBtn = document.getElementById('booking-modal-s1-close-modal')

let service1AvailabilityObj = {
  end_at: '',
  start_at: '',
  location_id: '',
  service_variation_id: ''
}

let updateService1PhoneBookingObj = {
  customer_id: '',
  email_address: '',
  phone_number: ''
}

const filterPhoneValue = /[-()]/g

let service1BookingObj = {
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

// Enter client service below (service 1)
// --> Phone Consultation <--
class Service1Component {
  constructor() {

    this.bookingModalS1NextBtn = this.bookingModalS1NextBtn()
    this.createBooking = this.createBooking()
    this.closeModal = this.closeModal()
  }

  selectAgent() {
    // edit/select agent left
    editBookingModalS1Agents.addEventListener('click', () => {
      console.log('ive been clicked')
      bookingModalS1ConfirmDetails.className = 'booking-modal-s1-right hide-container'
      bookingModalS1DateTime.className = 'booking-modal-s1-right hide-container'
      bookingModalS1Agents.className = 'booking-modal-s1-right'
      bookingModalS1Step1.className = 'step-selected'
      bookingModalS1Step2.className = ''
      bookingModalS1Step3.className = ''
      bookingModalS1Counter = 0

      if (bookingModalS1AgentsSelected) {
        bookingModalS1NextBtn.className = 'booking-modal-s1-next'
        bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null hide-container'
      } else {
        bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'
        bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null'
      }
    })

    console.log(myApp.companyOptions1Bool)
    console.log(myApp.bookingModalS1)

    // select agent right
    if (myApp.companyOptions1Bool && myApp.bookingModalS1.className === 'booking-modal-s1') {

      // select the booking modal (1)
      bookingModalS1Step1.className = 'step-selected'

      // set early values for service booking object properties
      service1BookingObj.duration_minutes = myApp.companyServicesObj[`${bookingModalS1BodyLeftTitle.textContent}`].duration_minutes
      service1BookingObj.service_variation_id = myApp.companyServicesObj[`${bookingModalS1BodyLeftTitle.textContent}`].service_variation_id
      service1BookingObj.service_variation_version = myApp.companyServicesObj[`${bookingModalS1BodyLeftTitle.textContent}`].service_variation_version
      service1BookingObj.service_price = myApp.companyServicesObj[`${bookingModalS1BodyLeftTitle.textContent}`].service_price
      service1BookingObj.service_name = bookingModalS1BodyLeftTitle.textContent
      service1BookingObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
      service1BookingObj.customer_id = JSON.parse(localStorage.getItem('currentUser')).id
      service1BookingObj.phone_number = JSON.parse(localStorage.getItem('currentUser')).phone_number                             
      service1BookingObj.given_name = JSON.parse(localStorage.getItem('currentUser')).given_name
      service1BookingObj.family_name = JSON.parse(localStorage.getItem('currentUser')).family_name

      // fetch availble agents for service from square
      async function getCompanyAgents() {
        // req & res
        const get_company_agents_req = await fetch('/getCompanyAgents', { method: 'get' }) 
        const get_company_agents_res = await get_company_agents_req.json()

        console.log(get_company_agents_res)

        // grab all agents and display in bookingModalS1AgentsBox
        for (let i = 0; i < get_company_agents_res.team_member_booking_profiles.length; i++) {
          let newH1Element = document.createElement('h1')
          newH1Element.textContent = get_company_agents_res.team_member_booking_profiles[i].display_name
          bookingModalS1BodyRightAgentsBox.appendChild(newH1Element)
        }

        for (let i = 0; i < bookingModalS1BodyRightAgentsBox.children.length; i++) {
          bookingModalS1BodyRightAgentsBox.children[i].addEventListener('click', () => {   
            for (let j = 0; j < bookingModalS1BodyRightAgentsBox.children.length; j++) {
              bookingModalS1BodyRightAgentsBox.children[j].className = ''
            }
            bookingModalS1BodyRightAgentsBox.children[i].className = 'booking-modal-s1-agent-selected'
            bookingModalS1AgentsPickedIcon.className = 'bi bi-check-circle-fill'

            // hide null continue btn -- show pink color continue btn
            bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null hide-container'
            bookingModalS1NextBtn.className = 'booking-modal-s1-next'
            
            service1BookingObj.team_member_id = get_company_agents_res.team_member_booking_profiles[i].team_member_id 
            service1BookingObj.employee_name = bookingModalS1BodyRightAgentsBox.children[i].textContent
            bookingModalS1AgentsSelected = true
            console.log(service1BookingObj)
          })
        }


      }
 
      getCompanyAgents()
      .then(() => { console.log('the getCompanyAgents() has been sent to the express server') })
      .catch((error) => { console.log(error) })
     
    }
  }

  selectDateTime() {
    // edit/select date time left
    editBookingModalS1DateTime.addEventListener('click', () => {
      console.log('ive been clicked')
      bookingModalS1Agents.className = 'booking-modal-s1-right hide-container'
      bookingModalS1ConfirmDetails.className = 'booking-modal-s1-right hide-container'
      bookingModalS1DateTime.className = 'booking-modal-s1-right'
      bookingModalS1Step1.className = ''
      bookingModalS1Step3.className = ''
      bookingModalS1Step2.className = 'step-selected'
      bookingModalS1Counter = 1

      if (bookingModalS1DateSelected && bookingModalS1TimeSelected) {
        bookingModalS1NextBtn.className = 'booking-modal-s1-next'
        bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null hide-container'
      } else {
        bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'
        bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null'
      }
    })

    if (myApp.companyOptions1Bool && myApp.bookingModalS1.className === 'booking-modal-s1') {
      console.log('yo yo yo')
      // select date time right

        // setup for getting "start_at" and "end_at" dates (1 month)
        const bmDate = new Date()

        let bookingModalS1Year = bmDate.getYear() + 1900
        let bookingModalS1Month = bmDate.getMonth() + 1
        let bookingModalS1Day = bmDate.getDate()

        let bookingModalS1MinDate = `${bookingModalS1Month}-${bookingModalS1Day}-${bookingModalS1Year}`
        let bookingModalS1MaxDate = `${bookingModalS1Month + 1}-${bookingModalS1Day}-${bookingModalS1Year}`

        let bookingModalS1MinDateNew, bookingModalS1MaxDateNew

        console.log(bookingModalS1MinDate, bookingModalS1MaxDate)
        
        // if month is 1 digit
        if (bookingModalS1MinDate.substring(0, 2) !== '10' || bookingModalS1MinDate.substring(0, 2) !== '11' || bookingModalS1MinDate.substring(0, 2) !== '12') {
          bookingModalS1MinDate = bookingModalS1MinDate.replace(bookingModalS1MinDate.substring(0, 1), `0${bookingModalS1Month}`)
          console.log(bookingModalS1MinDate)
        }

        if (bookingModalS1MaxDate.substring(0, 2) !== '10' || bookingModalS1MaxDate.substring(0, 2) !== '11' || bookingModalS1MaxDate.substring(0, 2) !== '12') {
          bookingModalS1MaxDate = bookingModalS1MaxDate.replace(bookingModalS1MaxDate.substring(0, 1), `0${bookingModalS1Month + 1}`)
          console.log(bookingModalS1MaxDate)
        }

        // if date is 1 digit
        if (bookingModalS1MinDate.substring(3, 5).includes('-')) {
          bookingModalS1MinDateNew = bookingModalS1MinDate.slice(0, 3) + '0' + bookingModalS1MinDate.slice(3, 9)
          console.log(bookingModalS1MinDateNew)
        } else {
          bookingModalS1MinDateNew = bookingModalS1MinDate
        }

        if (bookingModalS1MaxDate.substring(3, 5).includes('-')) {
          bookingModalS1MaxDateNew = bookingModalS1MaxDate.slice(0, 3) + '0' + bookingModalS1MaxDate.slice(3, 9)
          console.log(bookingModalS1MaxDateNew)
        } else {
          bookingModalS1MaxDateNew = bookingModalS1MaxDate
        }


        service1AvailabilityObj.start_at = `${bookingModalS1MinDateNew.slice(6, 11)}-${bookingModalS1MinDateNew.slice(0, 2)}-${bookingModalS1MinDateNew.slice(3, 5)}T12:00:00Z`
        service1AvailabilityObj.end_at = `${bookingModalS1MaxDateNew.slice(6, 11)}-${bookingModalS1MaxDateNew.slice(0, 2)}-${bookingModalS1MaxDateNew.slice(3, 5)}T21:00:00Z`
        service1AvailabilityObj.location_id = `${myApp.companyLocationId}`
        service1AvailabilityObj.service_variation_id = `${myApp.companyService1VariationId}`

        console.log(service1AvailabilityObj)

        // fetch available times for the service
        async function service1Availabilities() {
          // req & res
          const get_company_availabilities_req = await fetch(`/getCompanyAvailabilities/${JSON.stringify(service1AvailabilityObj)}`, { method: 'post' })
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
            // show the bookingModalS1
            // myApp.bookingModalS1.className = 'booking-modal-s1'

            // filter and display available dates on the calendar
            // console.log(bookingModalS1CalDays[0].textContent)
            console.log(bookingModalS1CalDays.length)

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

            if (get_company_availabilities_res.availabilities[0].start_at.slice(5, 7) === `0${bookingModalS1Date.getMonth() + 2}` || get_company_availabilities_res.availabilities[0].start_at.slice(5, 7) === '01' && bookingModalS1Date.getMonth() === 11) {
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
            for (let i = 0; i < bookingModalS1CalDays.length; i++) {
              if (bookingModalS1CalDays[i].textContent.length === 1) {
                availableCalDaysArr.push(`0${bookingModalS1CalDays[i].textContent}`)
              } else {
                availableCalDaysArr.push(`${bookingModalS1CalDays[i].textContent}`)
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
                  bookingModalS1CalDays[j].className = 'booking-modal-s1-datetime-style'
                  console.log(bookingModalS1CalDays[j])
                }
              }
            }
            

            /** On Load */
            // mouser over available calendar date (today)
            bookingModalS1CalToday.addEventListener('mouseover', () => {
              console.log('peace')
              if (bookingModalS1CalToday.className === 'booking-modal-s1-today' || bookingModalS1CalToday.className === 'booking-modal-s1-datetime-hovered') {
                bookingModalS1CalToday.style.cursor = 'pointer'
                bookingModalS1CalToday.className = 'booking-modal-s1-datetime-hovered'
              }
            })

            // mouse leave avaialble calendar date (today)
            bookingModalS1CalToday.addEventListener('mouseleave', () => {
              console.log('peace')
              if (bookingModalS1CalToday.className === 'booking-modal-s1-datetime-hovered') {
                bookingModalS1CalToday.className = 'booking-modal-s1-today'
              }
            })

            // if today is clicked
            bookingModalS1CalToday.addEventListener('click', () => {
              console.log('peace')
              if (bookingModalS1CalToday.className === 'booking-modal-s1-datetime-hovered') {
                // unstyle all other available dates
                for (let j = 0; j < bookingModalS1CalDays.length; j++) {
                  bookingModalS1CalDays[j].style.backgroundColor = ''
                  bookingModalS1CalDays[j].style.color = '#FFFFFF'
                }

                bookingModalS1CalToday.style.backgroundColor = '#f05e7c'
                bookingModalS1CalToday.style.color = '#FFFFFF'

                bookingModalS1DateSelected = true
                console.log(bookingModalS1DateSelected)

                let selectedFinalDate
                let selectedFinalMonth
                console.log(bookingModalS1CalToday)
                selectedDateArr = []
                selectedTimesArr = []
                selectedTimesThisMonthArr = []
                bookingModalS1BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s1-datetime-box-header"><h1 id="booking-modal-s1-current-time-title" class='booking-modal-s1-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s1-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                
                // push the selected "date" number to a new array (selectedDateArr)
                if (bookingModalS1CalToday.textContent.length === 1) {
                  selectedDateArr.push(`0${bookingModalS1CalToday.textContent}`)
                  selectedFinalDate = `0${bookingModalS1CalToday.textContent}`
                } else {
                  selectedDateArr.push(bookingModalS1CalToday.textContent)
                  selectedFinalDate = bookingModalS1CalToday.textContent
                }

                // loop through initial all available dates array and push all available "times" to a new array
                for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                  if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                    selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                  }
                }
                console.log(selectedTimesArr)

                console.log(bookingModalS1Date.getMonth().toString().length)

                // loop through and selectedTimesArr and push "times" available for the "this month" only
                for (let i = 0; i < selectedTimesArr.length; i++) {
                  if (bookingModalS1Date.getMonth().toString().length === 1) {
                    let currentMonth = `0${bookingModalS1Date.getMonth() + 1}`
                    selectedFinalMonth = `0${bookingModalS1Date.getMonth() + 1}`
                    console.log(bookingModalS1Date.getMonth())

                    if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                      selectedTimesThisMonthArr.push(selectedTimesArr[i])
                      console.log(selectedTimesThisMonthArr)
                    } 

                  } else if (bookingModalS1Date.getMonth().toString().length === 2) {
                    if (selectedTimesArr[i].substring(5, 7) === bookingModalS1Date.getMonth()) {
                      selectedTimesThisMonthArr.push(selectedTimesArr[i])
                      selectedFinalMonth = bookingModalS1Date.getMonth() + 1
                      console.log(selectedTimesThisMonthArr)
                    }
                  }
                }
                console.log(selectedTimesThisMonthArr)

                // loop through "this months" available "times" array and display those times into the bookingModalS1BodyRightDateTimeBox
                for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                  let newH1Element = document.createElement('h1')
                  let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                  newH1Element.className = 'booking-modal-s1-datetimes'
                  
                  // convert times to normal times
                  if (selectedTimeOnly === '12:00') {
                    newH1Element.textContent = '08:00 AM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '12:30') {
                    newH1Element.textContent = '08:30 AM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '13:00') {
                    newH1Element.textContent = '09:00 AM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '13:30') {
                    newH1Element.textContent = '09:30 AM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '14:00') {
                    newH1Element.textContent = '10:00 AM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '14:30') {
                    newH1Element.textContent = '10:30 AM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '15:00') {
                    newH1Element.textContent = '11:00 AM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '15:30') {
                    newH1Element.textContent = '11:30 AM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '16:00') {
                    newH1Element.textContent = '12:00 PM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '16:30') {
                    newH1Element.textContent = '12:30 PM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '17:00') {
                    newH1Element.textContent = '01:00 PM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '17:30') {
                    newH1Element.textContent = '01:30 PM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '18:00') {
                    newH1Element.textContent = '02:00 PM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '18:30') {
                    newH1Element.textContent = '02:30 PM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '19:00') {
                    newH1Element.textContent = '03:00 PM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '19:30') {
                    newH1Element.textContent = '03:30 PM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '20:00') {
                    newH1Element.textContent = '04:00 PM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  } else if (selectedTimeOnly === '20:30') {
                    newH1Element.textContent = '04:30 PM'
                    bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                  }  
                }

                // loop through bookingModalS1BodyRightDateTimeBox to listen for a click from the user
                for (let i = 1; i < bookingModalS1BodyRightDateTimeBox.children.length; i++) {
                  bookingModalS1BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                    let selectedFinalTime = ''

                    // clear all other times first
                    for (let j = 0; j < bookingModalS1BodyRightDateTimeBox.children.length; j++) {
                      bookingModalS1BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                      bookingModalS1BodyRightDateTimeBox.children[j].style.color = 'black'
                    }

                    bookingModalS1BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                    bookingModalS1BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                    bookingModalS1TimeSelected = true
                    console.log(bookingModalS1TimeSelected)

                    if (bookingModalS1DateSelected && bookingModalS1TimeSelected) {
                      bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null hide-container'
                      bookingModalS1NextBtn.className = 'booking-modal-s1-next'
                      bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                    } else {
                      bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null'
                      bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'
                      bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                    }

                    // convert the time back to army time
                    if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                      selectedFinalTime = '12:00'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                      selectedFinalTime = '12:30'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                      selectedFinalTime = '13:00'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                      selectedFinalTime = '13:30'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                      selectedFinalTime = '14:00'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                      selectedFinalTime = '14:30'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                      selectedFinalTime = '15:00'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                      selectedFinalTime = '15:30'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                      selectedFinalTime = '16:00'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                      selectedFinalTime = '16:30'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                      selectedFinalTime = '17:00'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                      selectedFinalTime = '17:30'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                      selectedFinalTime = '18:00'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                      selectedFinalTime = '18:30'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                      selectedFinalTime = '19:00'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                      selectedFinalTime = '19:30'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                      selectedFinalTime = '20:00'
                    } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                      selectedFinalTime = '20:30'
                    }

                    // push the time and date to the booking object
                    service1BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                    console.log(service1BookingObj)

                  })
                }
              } 
            })
      
            // loop through bookingModalS1CalDays
            for (let i = 0; i < bookingModalS1CalDays.length; i++) {
              // mouser over available calendar date
              bookingModalS1CalDays[i].addEventListener('mouseover', () => {
                if (bookingModalS1CalDays[i].className === 'booking-modal-s1-datetime-style') {
                  bookingModalS1CalDays[i].style.cursor = 'pointer'
                  bookingModalS1CalDays[i].className = 'booking-modal-s1-datetime-style booking-modal-s1-datetime-hovered'
                }
              })

              // mouse leave avaialble calendar date
              bookingModalS1CalDays[i].addEventListener('mouseleave', (event) => {
                if (bookingModalS1CalDays[i].className === 'booking-modal-s1-datetime-style booking-modal-s1-datetime-hovered') {
                  bookingModalS1CalDays[i].className = 'booking-modal-s1-datetime-style'
                }
              })

              // click on available calendar date
              bookingModalS1CalDays[i].addEventListener('click', () => {                
                if (bookingModalS1CalDays[i].className === 'booking-modal-s1-datetime-style booking-modal-s1-datetime-hovered') {
                  // unstyle all other available dates
                  bookingModalS1CalToday.style.backgroundColor = ''
                  bookingModalS1CalToday.style.color = ''
                  bookingModalS1CalToday.className = 'booking-modal-s1-today'

                  for (let j = 0; j < bookingModalS1CalDays.length; j++) {
                    bookingModalS1CalDays[j].style.backgroundColor = ''
                    bookingModalS1CalDays[j].style.color = '#FFFFFF'
                  }

                  bookingModalS1CalDays[i].style.backgroundColor = '#F05E7C'
                  bookingModalS1CalDays[i].style.color = '#FFFFFF'

                  bookingModalS1DateSelected = true
                  console.log(bookingModalS1DateSelected)

                  let selectedFinalDate
                  let selectedFinalMonth
                  console.log(bookingModalS1CalDays[i])
                  selectedDateArr = []
                  selectedTimesArr = []
                  selectedTimesThisMonthArr = []
                  bookingModalS1BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s1-datetime-box-header"><h1 id="booking-modal-s1-current-time-title" class='booking-modal-s1-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s1-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                  
                  // push the selected "date" number to a new array (selectedDateArr)
                  if (bookingModalS1CalDays[i].textContent.length === 1) {
                    selectedDateArr.push(`0${bookingModalS1CalDays[i].textContent}`)
                    selectedFinalDate = `0${bookingModalS1CalDays[i].textContent}`
                  } else {
                    selectedDateArr.push(bookingModalS1CalDays[i].textContent)
                    selectedFinalDate = bookingModalS1CalDays[i].textContent
                  }

                  // loop through initial all available dates array and push all available "times" to a new array
                  for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                    if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                      selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                    }
                  }
                  console.log(selectedTimesArr)

                  console.log(bookingModalS1Date.getMonth().toString().length)

                  // loop through and selectedTimesArr and push times available for the "next month" only
                  for (let i = 0; i < selectedTimesArr.length; i++) {
                    if (bookingModalS1Date.getMonth().toString().length === 1) {
                      let currentMonth = `0${bookingModalS1Date.getMonth() + 1}`
                      selectedFinalMonth = `0${bookingModalS1Date.getMonth() + 1}`
                      console.log(bookingModalS1Date.getMonth())

                      if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                        selectedTimesThisMonthArr.push(selectedTimesArr[i])
                        console.log(selectedTimesThisMonthArr)
                      } 

                    } else if (bookingModalS1Date.getMonth().toString().length === 2) {
                      if (selectedTimesArr[i].substring(5, 7) === bookingModalS1Date.getMonth()) {
                        selectedTimesThisMonthArr.push(selectedTimesArr[i])
                        selectedFinalMonth = bookingModalS1Date.getMonth() + 1
                        console.log(selectedTimesThisMonthArr)
                      }
                    }
                  }
                  console.log(selectedTimesThisMonthArr)

                  // loop through the new next months available "times" array and display those times into the bookingModalS1BodyRightDateTimeBox
                  for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                    let newH1Element = document.createElement('h1')
                    let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                    newH1Element.className = 'booking-modal-s1-datetimes'
                    
                    // convert times to normal times
                    if (selectedTimeOnly === '12:00') {
                      newH1Element.textContent = '08:00 AM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '12:30') {
                      newH1Element.textContent = '08:30 AM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '13:00') {
                      newH1Element.textContent = '09:00 AM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '13:30') {
                      newH1Element.textContent = '09:30 AM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '14:00') {
                      newH1Element.textContent = '10:00 AM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '14:30') {
                      newH1Element.textContent = '10:30 AM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '15:00') {
                      newH1Element.textContent = '11:00 AM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '15:30') {
                      newH1Element.textContent = '11:30 AM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '16:00') {
                      newH1Element.textContent = '12:00 PM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '16:30') {
                      newH1Element.textContent = '12:30 PM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '17:00') {
                      newH1Element.textContent = '01:00 PM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '17:30') {
                      newH1Element.textContent = '01:30 PM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '18:00') {
                      newH1Element.textContent = '02:00 PM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '18:30') {
                      newH1Element.textContent = '02:30 PM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '19:00') {
                      newH1Element.textContent = '03:00 PM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '19:30') {
                      newH1Element.textContent = '03:30 PM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '20:00') {
                      newH1Element.textContent = '04:00 PM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } else if (selectedTimeOnly === '20:30') {
                      newH1Element.textContent = '04:30 PM'
                      bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                    } 
                  }

                  // loop through bookingModalS1BodyRightDateTimeBox to listen for a click from the user
                  for (let i = 1; i < bookingModalS1BodyRightDateTimeBox.children.length; i++) {
                    bookingModalS1BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                      let selectedFinalTime = ''

                      // clear all other times first
                      for (let j = 0; j < bookingModalS1BodyRightDateTimeBox.children.length; j++) {
                        bookingModalS1BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                        bookingModalS1BodyRightDateTimeBox.children[j].style.color = 'black'
                      }

                      bookingModalS1BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                      bookingModalS1BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'
                      

                      bookingModalS1TimeSelected = true
                      console.log(bookingModalS1TimeSelected)

                      if (bookingModalS1DateSelected && bookingModalS1TimeSelected) {
                        bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null hide-container'
                        bookingModalS1NextBtn.className = 'booking-modal-s1-next'
                        bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                      } else {
                        bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null'
                        bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'
                        bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                      }

                      // convert the time back to army time
                      if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                        selectedFinalTime = '12:00'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                        selectedFinalTime = '12:30'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                        selectedFinalTime = '13:00'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                        selectedFinalTime = '13:30'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                        selectedFinalTime = '14:00'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                        selectedFinalTime = '14:30'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                        selectedFinalTime = '15:00'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                        selectedFinalTime = '15:30'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                        selectedFinalTime = '16:00'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                        selectedFinalTime = '16:30'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                        selectedFinalTime = '17:00'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                        selectedFinalTime = '17:30'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                        selectedFinalTime = '18:00'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                        selectedFinalTime = '18:30'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                        selectedFinalTime = '19:00'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                        selectedFinalTime = '19:30'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                        selectedFinalTime = '20:00'
                      } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                        selectedFinalTime = '20:30'
                      }

                      // push the time and date to the booking object
                      service1BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                      console.log(service1BookingObj)

                    })
                  }
                } 
              
              })
            }


            /* Next Btn Cal */
            // if next calendar btn clicked
            bookingModalS1NextBtnCal.addEventListener('click', () => {
              console.log('ive been clicked')
              bookingModalS1NextBtnCalCounter++
              availableCalDaysArr = []
              
              let bookingModalS1DateTimeBoxLength = bookingModalS1BodyRightDateTimeBox.children.length
              for (let i = 1; i < bookingModalS1DateTimeBoxLength; i++) {
                console.log(bookingModalS1BodyRightDateTimeBox.children[1])
                bookingModalS1BodyRightDateTimeBox.removeChild(bookingModalS1BodyRightDateTimeBox.children[1])
              }

              if (bookingModalS1NextBtnCalCounter === 1) {
                bookingModalS1NextBtnCal.style.cursor = 'not-allowed'

                bookingModalS1Date.setMonth(bookingModalS1Date.getMonth() + 1)

                bookingModalS1RenderCalendar()

                bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'
                bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null'
                bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'

                bookingModalS1DateSelected = false
                bookingModalS1TimeSelected = false

                console.log(bookingModalS1DateSelected)
                console.log(bookingModalS1TimeSelected)

                let bookingModalS1CalDaysNext = document.querySelectorAll('.booking-modal-s1-cal-days')
                let selectedDateArr = []
                let selectedTimesArr = []
                let selectedTimesNextMonthArr = []
                bookingModalS1BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s1-datetime-box-header"><h1 id="booking-modal-s1-current-time-title" class='booking-modal-s1-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s1-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`

                console.log(bookingModalS1CalDaysNext)
                console.log(bookingModalS1CalDaysNext.length)

                // push the days of the selected calendar month to an array to make comparable
                for (let i = 0; i < bookingModalS1CalDaysNext.length; i++) {
                  if (bookingModalS1CalDaysNext[i].textContent.length === 1) {
                    availableCalDaysArr.push(`0${bookingModalS1CalDaysNext[i].textContent}`)
                  } else {
                    availableCalDaysArr.push(`${bookingModalS1CalDaysNext[i].textContent}`)
                  }
                }
                console.log(availableCalDaysArr)

                // style and show available dates for the next month on the calendar
                for (let i = 0; i < availableCalDaysArr.length; i++) {
                  let availableDaysDate = availableDaysNextMonthArr[i]
                  // style available dates from service 1 next month onto the calendar
                  for (let j = 0; j < availableCalDaysArr.length; j++) {
                    if (availableCalDaysArr[j] === availableDaysDate) {
                      bookingModalS1CalDaysNext[j].className = 'booking-modal-s1-datetime-style'
                      console.log(bookingModalS1CalDaysNext[j])
                    }
                  }
                } 

                // go through bookingModalS1CalDays
                for (let i = 0; i < bookingModalS1CalDaysNext.length; i++) {
                  // mouser over available calendar date
                  bookingModalS1CalDaysNext[i].addEventListener('mouseover', () => {
                    if (bookingModalS1CalDaysNext[i].className === 'booking-modal-s1-datetime-style') {
                      bookingModalS1CalDaysNext[i].style.cursor = 'pointer'
                      bookingModalS1CalDaysNext[i].className = 'booking-modal-s1-datetime-style booking-modal-s1-datetime-hovered'
                    }
                  })

                  // mouse leave avaialble calendar date
                  bookingModalS1CalDaysNext[i].addEventListener('mouseleave', (event) => {
                    if (bookingModalS1CalDaysNext[i].className === 'booking-modal-s1-datetime-style booking-modal-s1-datetime-hovered') {
                      bookingModalS1CalDaysNext[i].className = 'booking-modal-s1-datetime-style'
                    }
                  })

                  // click on available calendar date
                  bookingModalS1CalDaysNext[i].addEventListener('click', () => {                
                    if (bookingModalS1CalDaysNext[i].className === 'booking-modal-s1-datetime-style booking-modal-s1-datetime-hovered') {
                      // unstyle all other available dates
                      for (let j = 0; j < bookingModalS1CalDaysNext.length; j++) {
                        bookingModalS1CalDaysNext[j].style.backgroundColor = ''
                        bookingModalS1CalDaysNext[j].style.color = '#FFFFFF'
                      }

                      bookingModalS1CalDaysNext[i].style.backgroundColor = '#F05E7C'
                      bookingModalS1CalDaysNext[i].style.color = '#FFFFFF'

                      bookingModalS1DateSelected = true
                      console.log(bookingModalS1DateSelected)

                      let selectedFinalDate
                      let selectedFinalMonth
                      console.log(bookingModalS1CalDaysNext[i])
                      selectedDateArr = []
                      selectedTimesArr = []
                      selectedTimesNextMonthArr = []
                      bookingModalS1BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s1-datetime-box-header"><h1 id="booking-modal-s1-current-time-title" class='booking-modal-s1-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s1-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                      
                      // push the selected "date" number to a new array (selectedDateArr)
                      if (bookingModalS1CalDaysNext[i].textContent.length === 1) {
                        selectedDateArr.push(`0${bookingModalS1CalDaysNext[i].textContent}`)
                        selectedFinalDate = `0${bookingModalS1CalDaysNext[i].textContent}`
                      } else {
                        selectedDateArr.push(bookingModalS1CalDaysNext[i].textContent)
                        selectedFinalDate = bookingModalS1CalDaysNext[i].textContent
                      }

                      // loop through initial all available dates array and push all available "times" to a new array
                      for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                        if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                          selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                        }
                      }
                      console.log(selectedTimesArr)

                      console.log(bookingModalS1Date.getMonth().toString().length)

                      // loop through and selectedTimesArr and push times available for the "next month" only
                      for (let i = 0; i < selectedTimesArr.length; i++) {
                        if (bookingModalS1Date.getMonth().toString().length === 1) {
                          let currentMonth = `0${bookingModalS1Date.getMonth() + 1}`
                          selectedFinalMonth = `0${bookingModalS1Date.getMonth() + 1}`

                          if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                            selectedTimesNextMonthArr.push(selectedTimesArr[i])
                          } 
                        } else if (bookingModalS1Date.getMonth().toString().length === 2) {
                          if (selectedTimesArr[i].substring(5, 7) === bookingModalS1Date.getMonth()) {
                            selectedTimesNextMonthArr.push(selectedTimesArr[i])
                          selectedFinalMonth = bookingModalS1Date.getMonth() + 1
                          }
                        }
                      }
                      console.log(selectedTimesNextMonthArr)

                      // loop through the new next months available "times" array and display those times into the bookingModalS1BodyRightDateTimeBox
                      for (let i = 0; i < selectedTimesNextMonthArr.length; i++) {
                        let newH1Element = document.createElement('h1')
                        let selectedTimeOnly = selectedTimesNextMonthArr[i].substring(11, 16)
                        newH1Element.className = 'booking-modal-s1-datetimes'
                        
                        // convert times to normal times
                        if (selectedTimeOnly === '12:00') {
                          newH1Element.textContent = '08:00 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '12:30') {
                          newH1Element.textContent = '08:30 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '13:00') {
                          newH1Element.textContent = '09:00 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '13:30') {
                          newH1Element.textContent = '09:30 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '14:00') {
                          newH1Element.textContent = '10:00 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '14:30') {
                          newH1Element.textContent = '10:30 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '15:00') {
                          newH1Element.textContent = '11:00 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '15:30') {
                          newH1Element.textContent = '11:30 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '16:00') {
                          newH1Element.textContent = '12:00 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '16:30') {
                          newH1Element.textContent = '12:30 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '17:00') {
                          newH1Element.textContent = '01:00 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '17:30') {
                          newH1Element.textContent = '01:30 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '18:00') {
                          newH1Element.textContent = '02:00 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '18:30') {
                          newH1Element.textContent = '02:30 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '19:00') {
                          newH1Element.textContent = '03:00 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '19:30') {
                          newH1Element.textContent = '03:30 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '20:00') {
                          newH1Element.textContent = '04:00 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '20:30') {
                          newH1Element.textContent = '04:30 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        }  
                      }

                      // loop through bookingModalS1BodyRightDateTimeBox to listen for a click from the user
                      for (let i = 1; i < bookingModalS1BodyRightDateTimeBox.children.length; i++) {
                        bookingModalS1BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                          let selectedFinalTime = ''

                          // clear all other times first
                          for (let j = 0; j < bookingModalS1BodyRightDateTimeBox.children.length; j++) {
                            bookingModalS1BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                            bookingModalS1BodyRightDateTimeBox.children[j].style.color = 'black'
                          }

                          bookingModalS1BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                          bookingModalS1BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                          bookingModalS1TimeSelected = true
                          console.log(bookingModalS1TimeSelected)

                          if (bookingModalS1DateSelected && bookingModalS1TimeSelected) {
                            bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null hide-container'
                            bookingModalS1NextBtn.className = 'booking-modal-s1-next'
                            bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                          } else {
                            bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null'
                            bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'
                            bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                          }

                          // convert the time back to army time
                          if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                            selectedFinalTime = '12:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                            selectedFinalTime = '12:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                            selectedFinalTime = '13:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                            selectedFinalTime = '13:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                            selectedFinalTime = '14:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                            selectedFinalTime = '14:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                            selectedFinalTime = '15:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                            selectedFinalTime = '15:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                            selectedFinalTime = '16:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                            selectedFinalTime = '16:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                            selectedFinalTime = '17:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                            selectedFinalTime = '17:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                            selectedFinalTime = '18:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                            selectedFinalTime = '18:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                            selectedFinalTime = '19:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                            selectedFinalTime = '19:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                            selectedFinalTime = '20:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                            selectedFinalTime = '20:30'
                          }

                          // push the time and date to the booking object
                          service1BookingObj.start_at = `${selectedTimesNextMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                          console.log(service1BookingObj)

                        })
                      }

                    } 
                  
                  })
                }

              } else if (bookingModalS1NextBtnCalCounter > 1) {
                bookingModalS1NextBtnCalCounter = 1
              }
            })


            /**Prev Btn Cal */
            bookingModalS1PrevBtnCal.addEventListener('mouseover', () => {
              if (bookingModalS1NextBtnCalCounter === 0) {
                bookingModalS1PrevBtnCal.style.cursor = 'not-allowed'
              } else if (bookingModalS1NextBtnCalCounter === 1) {
                bookingModalS1PrevBtnCal.style.cursor = 'pointer'
              }   
            })

            bookingModalS1PrevBtnCal.addEventListener('click', () => {
              if (bookingModalS1NextBtnCalCounter === 0) {
                bookingModalS1PrevBtnCal.style.cursor = 'not-allowed'
              } else if (bookingModalS1NextBtnCalCounter === 1) {
                bookingModalS1PrevBtnCal.style.cursor = 'pointer'
                bookingModalS1NextBtnCalCounter--
                availableCalDaysArr = []
                
                let bookingModalS1DateTimeBoxLength = bookingModalS1BodyRightDateTimeBox.children.length
                for (let i = 1; i < bookingModalS1DateTimeBoxLength; i++) {
                  console.log(bookingModalS1BodyRightDateTimeBox.children[1])
                  bookingModalS1BodyRightDateTimeBox.removeChild(bookingModalS1BodyRightDateTimeBox.children[1])
                }

                if (bookingModalS1NextBtnCalCounter === 0) {
                  bookingModalS1PrevBtnCal.style.cursor = 'not-allowed'
                  bookingModalS1NextBtnCal.style.cursor = 'pointer'
                }

                bookingModalS1Date.setMonth(bookingModalS1Date.getMonth() - 1)

                bookingModalS1RenderCalendar()

                bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'
                bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null'
                bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'

                bookingModalS1CalToday = document.querySelector('.booking-modal-s1-today')
                console.log(bookingModalS1CalToday)

                bookingModalS1DateSelected = false
                bookingModalS1TimeSelected = false

                console.log(bookingModalS1DateSelected)
                console.log(bookingModalS1TimeSelected)

                let bookingModalS1CalDaysPrev = document.querySelectorAll('.booking-modal-s1-cal-days')
                let selectedDateArr = []
                let selectedTimesArr = []
                let selectedTimesNextMonthArr = []
                bookingModalS1BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s1-datetime-box-header"><h1 id="booking-modal-s1-current-time-title" class='booking-modal-s1-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s1-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`

                bookingModalS1CalToday.addEventListener('mouseover', () => {
                  console.log('peace')
                  if (bookingModalS1CalToday.className === 'booking-modal-s1-today' || bookingModalS1CalToday.className === 'booking-modal-s1-datetime-hovered') {
                    bookingModalS1CalToday.style.cursor = 'pointer'
                    bookingModalS1CalToday.className = 'booking-modal-s1-datetime-hovered'
                  }
                })
        
                // mouse leave avaialble calendar date (today)
                bookingModalS1CalToday.addEventListener('mouseleave', () => {
                  console.log('peace')
                  if (bookingModalS1CalToday.className === 'booking-modal-s1-datetime-hovered') {
                    bookingModalS1CalToday.className = 'booking-modal-s1-today'
                  }
                })
        
                // if today is clicked
                bookingModalS1CalToday.addEventListener('click', () => {
                  console.log('peace')
                  if (bookingModalS1CalToday.className === 'booking-modal-s1-datetime-hovered') {
                    // unstyle all other available dates
                    for (let j = 0; j < bookingModalS1CalDaysPrev.length; j++) {
                      bookingModalS1CalDaysPrev[j].style.backgroundColor = ''
                      bookingModalS1CalDaysPrev[j].style.color = '#FFFFFF'
                    }
        
                    bookingModalS1CalToday.style.backgroundColor = '#f05e7c'
                    bookingModalS1CalToday.style.color = '#FFFFFF'

                    bookingModalS1DateSelected = true
                    console.log(bookingModalS1DateSelected)
        
                    let selectedFinalDate
                    let selectedFinalMonth
                    console.log(bookingModalS1CalToday)
                    selectedDateArr = []
                    selectedTimesArr = []
                    selectedTimesThisMonthArr = []
                    bookingModalS1BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s1-datetime-box-header"><h1 id="booking-modal-s1-current-time-title" class='booking-modal-s1-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s1-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                    
                    // push the selected "date" number to a new array (selectedDateArr)
                    if (bookingModalS1CalToday.textContent.length === 1) {
                      selectedDateArr.push(`0${bookingModalS1CalToday.textContent}`)
                      selectedFinalDate = `0${bookingModalS1CalToday.textContent}`
                    } else {
                      selectedDateArr.push(bookingModalS1CalToday.textContent)
                      selectedFinalDate = bookingModalS1CalToday.textContent
                    }
        
                    // loop through initial all available dates array and push all available "times" to a new array
                    for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                      if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                        selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                      }
                    }
                    console.log(selectedTimesArr)
        
                    console.log(bookingModalS1Date.getMonth().toString().length)
        
                    // loop through and selectedTimesArr and push "times" available for the "this month" only
                    for (let i = 0; i < selectedTimesArr.length; i++) {
                      if (bookingModalS1Date.getMonth().toString().length === 1) {
                        let currentMonth = `0${bookingModalS1Date.getMonth() + 1}`
                        selectedFinalMonth = `0${bookingModalS1Date.getMonth() + 1}`
                        console.log(bookingModalS1Date.getMonth())
        
                        if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                          selectedTimesThisMonthArr.push(selectedTimesArr[i])
                          console.log(selectedTimesThisMonthArr)
                        } 
        
                      } else if (bookingModalS1Date.getMonth().toString().length === 2) {
                        if (selectedTimesArr[i].substring(5, 7) === bookingModalS1Date.getMonth()) {
                          selectedTimesThisMonthArr.push(selectedTimesArr[i])
                          selectedFinalMonth = bookingModalS1Date.getMonth() + 1
                          console.log(selectedTimesThisMonthArr)
                        }
                      }
                    }
                    console.log(selectedTimesThisMonthArr)
        
                    // loop through "this months" available "times" array and display those times into the bookingModalS1BodyRightDateTimeBox
                    for (let i = 0; i < selectedTimesThisMonthArr.length; i++) {
                      let newH1Element = document.createElement('h1')
                      let selectedTimeOnly = selectedTimesThisMonthArr[i].substring(11, 16)
                      newH1Element.className = 'booking-modal-s1-datetimes'
                      
                      // convert times to normal times
                      if (selectedTimeOnly === '12:00') {
                        newH1Element.textContent = '08:00 AM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '12:30') {
                        newH1Element.textContent = '08:30 AM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:00') {
                        newH1Element.textContent = '09:00 AM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '13:30') {
                        newH1Element.textContent = '09:30 AM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:00') {
                        newH1Element.textContent = '10:00 AM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '14:30') {
                        newH1Element.textContent = '10:30 AM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:00') {
                        newH1Element.textContent = '11:00 AM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '15:30') {
                        newH1Element.textContent = '11:30 AM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:00') {
                        newH1Element.textContent = '12:00 PM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '16:30') {
                        newH1Element.textContent = '12:30 PM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:00') {
                        newH1Element.textContent = '01:00 PM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '17:30') {
                        newH1Element.textContent = '01:30 PM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:00') {
                        newH1Element.textContent = '02:00 PM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '18:30') {
                        newH1Element.textContent = '02:30 PM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:00') {
                        newH1Element.textContent = '03:00 PM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '19:30') {
                        newH1Element.textContent = '03:30 PM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:00') {
                        newH1Element.textContent = '04:00 PM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      } else if (selectedTimeOnly === '20:30') {
                        newH1Element.textContent = '04:30 PM'
                        bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                      }  
                    }
        
                    // loop through bookingModalS1BodyRightDateTimeBox to listen for a click from the user
                    for (let i = 1; i < bookingModalS1BodyRightDateTimeBox.children.length; i++) {
                      bookingModalS1BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                        let selectedFinalTime = ''
        
                        // clear all other times first
                        for (let j = 0; j < bookingModalS1BodyRightDateTimeBox.children.length; j++) {
                          bookingModalS1BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                          bookingModalS1BodyRightDateTimeBox.children[j].style.color = 'black'
                        }
        
                        bookingModalS1BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                        bookingModalS1BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                        bookingModalS1TimeSelected = true
                        console.log(bookingModalS1TimeSelected)
                        
                        if (bookingModalS1DateSelected && bookingModalS1TimeSelected) {
                          bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null hide-container'
                          bookingModalS1NextBtn.className = 'booking-modal-s1-next'
                          bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                        } else {
                          bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null'
                          bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'
                          bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                        }
        
                        // convert the time back to army time
                        if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                          selectedFinalTime = '12:00'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                          selectedFinalTime = '12:30'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                          selectedFinalTime = '13:00'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                          selectedFinalTime = '13:30'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                          selectedFinalTime = '14:00'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                          selectedFinalTime = '14:30'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                          selectedFinalTime = '15:00'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                          selectedFinalTime = '15:30'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                          selectedFinalTime = '16:00'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                          selectedFinalTime = '16:30'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                          selectedFinalTime = '17:00'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                          selectedFinalTime = '17:30'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                          selectedFinalTime = '18:00'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                          selectedFinalTime = '18:30'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                          selectedFinalTime = '19:00'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                          selectedFinalTime = '19:30'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                          selectedFinalTime = '20:00'
                        } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                          selectedFinalTime = '20:30'
                        }
        
                        // push the time and date to the booking object
                        service1BookingObj.start_at = `${selectedTimesThisMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                      
                        console.log(service1BookingObj)
        
                      })
                    }

                  } 
                })

                // push the days in the calendar to an array to make comparable
                for (let i = 0; i < bookingModalS1CalDaysPrev.length; i++) {
                  if (bookingModalS1CalDaysPrev[i].textContent.length === 1) {
                    availableCalDaysArr.push(`0${bookingModalS1CalDaysPrev[i].textContent}`)
                  } else {
                    availableCalDaysArr.push(`${bookingModalS1CalDaysPrev[i].textContent}`)
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
                      bookingModalS1CalDaysPrev[j].className = 'booking-modal-s1-datetime-style'
                      console.log(bookingModalS1CalDaysPrev[j].className)
                    }
                    
                  }
                }

                // loop through bookingModalS1CalDaysPrev
                for (let i = 0; i < bookingModalS1CalDaysPrev.length; i++) {
                  // mouser over available calendar date
                  bookingModalS1CalDaysPrev[i].addEventListener('mouseover', () => {
                    if (bookingModalS1CalDaysPrev[i].className === 'booking-modal-s1-datetime-style') {
                      bookingModalS1CalDaysPrev[i].style.cursor = 'pointer'
                      bookingModalS1CalDaysPrev[i].className = 'booking-modal-s1-datetime-style booking-modal-s1-datetime-hovered'
                    }
                  })

                  // mouse leave avaialble calendar date
                  bookingModalS1CalDaysPrev[i].addEventListener('mouseleave', () => {
                    if (bookingModalS1CalDaysPrev[i].className === 'booking-modal-s1-datetime-style booking-modal-s1-datetime-hovered') {
                      bookingModalS1CalDaysPrev[i].className = 'booking-modal-s1-datetime-style'
                    }
                  })

                  // click on available calendar date
                  bookingModalS1CalDaysPrev[i].addEventListener('click', () => {                
                    if (bookingModalS1CalDaysPrev[i].className === 'booking-modal-s1-datetime-style booking-modal-s1-datetime-hovered') {
                      // unstyle all other available dates
                      bookingModalS1CalToday.style.backgroundColor = ''
                      bookingModalS1CalToday.style.color = ''
                      bookingModalS1CalToday.className = 'today'

                      // unstyle all other available dates
                      for (let j = 0; j < bookingModalS1CalDaysPrev.length; j++) {
                        bookingModalS1CalDaysPrev[j].style.backgroundColor = ''
                        bookingModalS1CalDaysPrev[j].style.color = '#FFFFFF'
                      }

                      bookingModalS1CalDaysPrev[i].style.backgroundColor = '#F05E7C'
                      bookingModalS1CalDaysPrev[i].style.color = '#FFFFFF'

                      bookingModalS1DateSelected = true
                      console.log(bookingModalS1DateSelected)


                      let selectedFinalDate
                      let selectedFinalMonth
                      console.log(bookingModalS1CalDaysPrev[i])
                      selectedDateArr = []
                      selectedTimesArr = []
                      selectedTimesNextMonthArr = []
                      bookingModalS1BodyRightDateTimeBox.innerHTML = `<div class="booking-modal-s1-datetime-box-header"><h1 id="booking-modal-s1-current-time-title" class='booking-modal-s1-datetime-title'>Available on Tue., Mar. 8, 2022</h1><h2 class="booking-modal-s1-datetime-subtitle">You can schedule an appointment between 1 day and 60 days ahead of time. Time zone: Eastern Time Zone (EST)</h2></div>`
                      
                      // push the selected "date" number to a new array (selectedDateArr)
                      if (bookingModalS1CalDaysPrev[i].textContent.length === 1) {
                        selectedDateArr.push(`0${bookingModalS1CalDaysPrev[i].textContent}`)
                        selectedFinalDate = `0${bookingModalS1CalDaysPrev[i].textContent}`
                      } else {
                        selectedDateArr.push(bookingModalS1CalDaysPrev[i].textContent)
                        selectedFinalDate = bookingModalS1CalDaysPrev[i].textContent
                      }

                      // loop through initial all available dates array and push all available "times" to a new array
                      for (let i = 0; i < get_company_availabilities_res.availabilities.length; i++) {
                        if (get_company_availabilities_res.availabilities[i].start_at.substring(8, 10) === selectedDateArr[0]) {
                          selectedTimesArr.push(get_company_availabilities_res.availabilities[i].start_at)
                        }
                      }
                      console.log(selectedTimesArr)

                      console.log(bookingModalS1Date.getMonth().toString().length)

                      // loop through and selectedTimesArr and push times available for the "next month" only
                      for (let i = 0; i < selectedTimesArr.length; i++) {
                        if (bookingModalS1Date.getMonth().toString().length === 1) {
                          let currentMonth = `0${bookingModalS1Date.getMonth() + 1}`
                          selectedFinalMonth = `0${bookingModalS1Date.getMonth() + 1}`

                          if (selectedTimesArr[i].substring(5, 7) === currentMonth) {
                            selectedTimesNextMonthArr.push(selectedTimesArr[i])
                          } 
                        } else if (bookingModalS1Date.getMonth().toString().length === 2) {
                          if (selectedTimesArr[i].substring(5, 7) === bookingModalS1Date.getMonth()) {
                            selectedTimesNextMonthArr.push(selectedTimesArr[i])
                          selectedFinalMonth = bookingModalS1Date.getMonth() + 1
                          }
                        }
                      }
                      console.log(selectedTimesNextMonthArr)

                      // loop through the new next months available "times" array and display those times into the bookingModalS1BodyRightDateTimeBox
                      for (let i = 0; i < selectedTimesNextMonthArr.length; i++) {
                        let newH1Element = document.createElement('h1')
                        let selectedTimeOnly = selectedTimesNextMonthArr[i].substring(11, 16)
                        newH1Element.className = 'booking-modal-s1-datetimes'
                        
                        // convert times to normal times
                        if (selectedTimeOnly === '12:00') {
                          newH1Element.textContent = '08:00 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '12:30') {
                          newH1Element.textContent = '08:30 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '13:00') {
                          newH1Element.textContent = '09:00 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '13:30') {
                          newH1Element.textContent = '09:30 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '14:00') {
                          newH1Element.textContent = '10:00 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '14:30') {
                          newH1Element.textContent = '10:30 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '15:00') {
                          newH1Element.textContent = '11:00 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '15:30') {
                          newH1Element.textContent = '11:30 AM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '16:00') {
                          newH1Element.textContent = '12:00 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '16:30') {
                          newH1Element.textContent = '12:30 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '17:00') {
                          newH1Element.textContent = '01:00 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '17:30') {
                          newH1Element.textContent = '01:30 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '18:00') {
                          newH1Element.textContent = '02:00 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '18:30') {
                          newH1Element.textContent = '02:30 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '19:00') {
                          newH1Element.textContent = '03:00 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '19:30') {
                          newH1Element.textContent = '03:30 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '20:00') {
                          newH1Element.textContent = '04:00 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        } else if (selectedTimeOnly === '20:30') {
                          newH1Element.textContent = '04:30 PM'
                          bookingModalS1BodyRightDateTimeBox.appendChild(newH1Element)
                        }  
                      }

                      // loop through bookingModalS1BodyRightDateTimeBox to listen for a click from the user
                      for (let i = 1; i < bookingModalS1BodyRightDateTimeBox.children.length; i++) {
                        bookingModalS1BodyRightDateTimeBox.children[i].addEventListener('click', () => {
                          let selectedFinalTime = ''

                          // clear all other times first
                          for (let j = 0; j < bookingModalS1BodyRightDateTimeBox.children.length; j++) {
                            bookingModalS1BodyRightDateTimeBox.children[j].style.backgroundColor = ''
                            bookingModalS1BodyRightDateTimeBox.children[j].style.color = 'black'
                          }

                          bookingModalS1BodyRightDateTimeBox.children[i].style.backgroundColor = '#F05E7C'
                          bookingModalS1BodyRightDateTimeBox.children[i].style.color = '#FFFFFF'

                          bookingModalS1TimeSelected = true
                          console.log(bookingModalS1TimeSelected)

                          if (bookingModalS1DateSelected && bookingModalS1TimeSelected) {
                            bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null hide-container'
                            bookingModalS1NextBtn.className = 'booking-modal-s1-next'
                            bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill'
                          } else {
                            bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null'
                            bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'
                            bookingModalS1DateTimePickedIcon.className = 'bi bi-check-circle-fill hidden'
                          }
                          

                          // convert the time back to army time
                          if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '08:00 AM') {
                            selectedFinalTime = '12:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '08:30 AM') {
                            selectedFinalTime = '12:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '09:00 AM') {
                            selectedFinalTime = '13:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '09:30 AM') {
                            selectedFinalTime = '13:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '10:00 AM') {
                            selectedFinalTime = '14:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '10:30 AM') {
                            selectedFinalTime = '14:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '11:00 AM') {
                            selectedFinalTime = '15:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '11:30 AM') {
                            selectedFinalTime = '15:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '12:00 PM') {
                            selectedFinalTime = '16:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '12:30 PM') {
                            selectedFinalTime = '16:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '01:00 PM') {
                            selectedFinalTime = '17:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '01:30 PM') {
                            selectedFinalTime = '17:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '02:00 PM') {
                            selectedFinalTime = '18:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '02:30 PM') {
                            selectedFinalTime = '18:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '03:00 PM') {
                            selectedFinalTime = '19:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '03:30 PM') {
                            selectedFinalTime = '19:30'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '04:00 PM') {
                            selectedFinalTime = '20:00'
                          } else if (bookingModalS1BodyRightDateTimeBox.children[i].textContent === '04:30 PM') {
                            selectedFinalTime = '20:30'
                          }

                          // push the time and date to the booking object
                          service1BookingObj.start_at = `${selectedTimesNextMonthArr[0].substring(0, 4)}-${selectedFinalMonth}-${selectedFinalDate}T${selectedFinalTime}:00Z`
                          console.log(service1BookingObj)

                        })
                      }


                    } 
                  
                  })

                }

              }

            })
          }
        }
          service1Availabilities()
            .then(() => { console.log('the service1Availabilities() has been sent to the express server') })
            .catch((error) => { console.log(error) })
        }


  }

  confirmDetails() {
    // edit/select confirm details
    editBookingModalS1ConfirmDetails.addEventListener('click', () => {
      bookingModalS1ConfirmDetails.className = 'booking-modal-s1-right'
      bookingModalS1DateTime.className = 'booking-modal-s1-right hide-container'
      bookingModalS1Agents.className = 'booking-modal-s1-right hide-container'
      bookingModalS1Step1.className = ''
      bookingModalS1Step2.className = ''
      bookingModalS1Step3.className = 'step-selected'
      bookingModalS1Counter = 2

      // display booking reciept details
      bookingModalS1SelectedService.textContent = 'Phone Consultation'

      for (let i = 0; i < bookingModalS1BodyRightAgentsBox.children.length; i++) {
        if (bookingModalS1BodyRightAgentsBox.children[i].className = 'booking-modal-s1-agent-selected') {
          bookingModalS1SelectedAgent.textContent = bookingModalS1BodyRightAgentsBox.children[i].textContent
        }
      }

      let bookingModalS1SelectedTime

      if (service1BookingObj.start_at.slice(11, 16) === '12:00') {
        bookingModalS1SelectedTime = '08:00 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '12:30') {
        bookingModalS1SelectedTime = '08:30 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '13:00') {
        bookingModalS1SelectedTime = '09:00 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '13:30') {
        bookingModalS1SelectedTime = '09:30 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '14:00') {
        bookingModalS1SelectedTime = '10:00 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '14:30') {
        bookingModalS1SelectedTime = '10:30 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '15:00') {
        bookingModalS1SelectedTime = '11:00 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '15:30') {
        bookingModalS1SelectedTime = '11:30 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '16:00') {
        bookingModalS1SelectedTime = '12:00 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '16:30') {
        bookingModalS1SelectedTime = '12:30 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '17:00') {
        bookingModalS1SelectedTime = '01:00 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '17:30') {
        bookingModalS1SelectedTime = '01:30 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '18:00') {
        bookingModalS1SelectedTime = '02:00 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '18:30') {
        bookingModalS1SelectedTime = '02:30 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '19:00') {
        bookingModalS1SelectedTime = '03:00 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '19:30') {
        bookingModalS1SelectedTime = '03:30 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '20:00') {
        bookingModalS1SelectedTime = '04:00 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '20:30') {
        bookingModalS1SelectedTime = '04:30 PM EST'
      } 

      bookingModalS1SelectedDateTime.textContent = `${service1BookingObj.start_at.slice(5, 7)}/${service1BookingObj.start_at.slice(8, 10)}/${service1BookingObj.start_at.slice(0, 4)} @ ${bookingModalS1SelectedTime}`
    })

    // display users booking reciept info here

    // display current phone number
    bookingModalS1CurrentPhoneValue.textContent = `${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(0, 3)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(3, 6)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(6, 10)}`

    // display customer reciept 
      // selected "service"
    bookingModalS1SelectedService.textContent = `${bookingModalS1BodyLeftTitle.textContent}`

      // selected "agent"
    for (let i = 0; i < bookingModalS1BodyRightAgentsBox.children.length; i++) {
      if (bookingModalS1BodyRightAgentsBox.children[i].className === 'booking-modal-s1-agent-selected') {
        bookingModalS1SelectedAgent.textContent = bookingModalS1BodyRightAgentsBox.children[i].textContent
      }
    }
    
      // selected "date and time"
    let bookingModalS1SelectedTime

    if (service1BookingObj.start_at.slice(11, 16) === '12:00') {
      bookingModalS1SelectedTime = '08:00 AM EST'
      service1BookingObj.appointment_time = '08:00 AM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '12:30') {
      bookingModalS1SelectedTime = '08:30 AM EST'
      service1BookingObj.appointment_time = '08:30 AM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '13:00') {
      bookingModalS1SelectedTime = '09:00 AM EST'
      service1BookingObj.appointment_time = '09:00 AM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '13:30') {
      bookingModalS1SelectedTime = '09:30 AM EST'
      service1BookingObj.appointment_time = '09:30 AM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '14:00') {
      bookingModalS1SelectedTime = '10:00 AM EST'
      service1BookingObj.appointment_time = '10:00 AM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '14:30') {
      bookingModalS1SelectedTime = '10:30 AM EST'
      service1BookingObj.appointment_time = '10:30 AM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '15:00') {
      bookingModalS1SelectedTime = '11:00 AM EST'
      service1BookingObj.appointment_time = '11:00 AM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '15:30') {
      bookingModalS1SelectedTime = '11:30 AM EST'
      service1BookingObj.appointment_time = '11:30 AM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '16:00') {
      bookingModalS1SelectedTime = '12:00 PM EST'
      service1BookingObj.appointment_time = '12:00 PM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '16:30') {
      bookingModalS1SelectedTime = '12:30 PM EST'
      service1BookingObj.appointment_time = '12:30 PM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '17:00') {
      bookingModalS1SelectedTime = '01:00 PM EST'
      service1BookingObj.appointment_time = '01:00 PM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '17:30') {
      bookingModalS1SelectedTime = '01:30 PM EST'
      service1BookingObj.appointment_time = '01:30 PM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '18:00') {
      bookingModalS1SelectedTime = '02:00 PM EST'
      service1BookingObj.appointment_time = '02:00 PM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '18:30') {
      bookingModalS1SelectedTime = '02:30 PM EST'
      service1BookingObj.appointment_time = '02:30 PM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '19:00') {
      bookingModalS1SelectedTime = '03:00 PM EST'
      service1BookingObj.appointment_time = '03:00 PM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '19:30') {
      bookingModalS1SelectedTime = '03:30 PM EST'
      service1BookingObj.appointment_time = '03:30 PM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '20:00') {
      bookingModalS1SelectedTime = '04:00 PM EST'
      service1BookingObj.appointment_time = '04:00 PM EST'
    } else if (service1BookingObj.start_at.slice(11, 16) === '20:30') {
      bookingModalS1SelectedTime = '04:30 PM EST'
      service1BookingObj.appointment_time = '04:30 PM EST'
    }   

  
    bookingModalS1SelectedDateTime.textContent = `${service1BookingObj.start_at.slice(5, 7)}/${service1BookingObj.start_at.slice(8, 10)}/${service1BookingObj.start_at.slice(0, 4)} @ ${bookingModalS1SelectedTime}`

    editBookingModalS1ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
    editBookingModalS1ConfirmDetails.className = 'bi bi-pencil-square right1rem'
  
    // booking modal s1 change phone number checkbox
    bookingModalS1ChangeNumberCheckbox.addEventListener('click', () => {
      if (bookingModalS1ChangeNumberCheckbox.checked) {
        // display change number divs
        bookingModalS1ChangePhone.className = 'booking-modal-s1-change-phone'
        bookingModalS1ChangePhoneCaution.className = 'booking-modal-s1-change-phone-caution'

        // get users email from storage -- display on div
        // updateUserPhoneMongoDbObj.address.address_line_1 = JSON.parse(localStorage.getItem('currentUser')).address.address_line_1
        // updateUserPhoneMongoDbObj.address.administrative_district_level_1 = JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1
        // updateUserPhoneMongoDbObj.address.locality = JSON.parse(localStorage.getItem('currentUser')).address.locality
        // updateUserPhoneMongoDbObj.address.postal_code = JSON.parse(localStorage.getItem('currentUser')).address.postal_code
        updateService1PhoneBookingObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
        
        console.log(updateService1PhoneBookingObj)

        // change phone number submit btn clicked
        bookingModalS1ChangePhoneBtn.addEventListener('click', () => {
          console.log('peace')
          // check that bookingModalS1NextBtn.className = 'booking-modal-s1-next' matches regex
          if (bookingModalS1ChangePhoneInput.value.match(myApp.phoneCheck1) || bookingModalS1ChangePhoneInput.value.match(myApp.phoneCheck2) || bookingModalS1ChangePhoneInput.value.match(myApp.phoneCheck3) || bookingModalS1ChangePhoneInput.value.match(myApp.phoneCheck4) || bookingModalS1ChangePhoneInput.value.match(myApp.phoneCheck5) || bookingModalS1ChangePhoneInput.value.match(myApp.phoneCheck6)) {
            updateService1PhoneBookingObj.phone_number = bookingModalS1ChangePhoneInput.value
            bookingModalS1ChangePhoneError.className = 'booking-modal-s1-change-phone-input-error hide-container'
            bookingModalS1ChangePhoneInput.className = 'input-valid-clear'

            // filter/clean the phone value
            let filteredCleanPhoneValue = bookingModalS1ChangePhoneInput.value.replace(filterPhoneValue, '')     

            if (filteredCleanPhoneValue !== JSON.parse(localStorage.getItem('currentUser')).phone_number) {
              updateService1PhoneBookingObj.phone_number = filteredCleanPhoneValue
              service1BookingObj.phone_number = filteredCleanPhoneValue

              if (bookingModalS1ChangePhoneInput.className === 'input-valid-clear') {

                bookingModalS1ChangePhone.className = 'booking-modal-s1-change-phone hide-container'
                bookingModalS1ChangePhoneCaution.className = 'booking-modal-s1-change-phone-caution hide-container'
                bookingModalS1ChangePhoneLoading.className = 'booking-modal-s1-change-phone-loading'

                // if so update the new number in MongoDB
                async function updateMongoDBPhoneNumber() {
                  // req & res
                  const update_phone_number_mongodb_req = await fetch(`/updatePhoneNumberMongoDB/${JSON.stringify(updateService1PhoneBookingObj)}`, { method: 'post' })
                  const update_phone_number_mongodb_res = await update_phone_number_mongodb_req.json()

                  console.log(update_phone_number_mongodb_res)

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
                  myApp.updatedStorageInfo.password = JSON.parse(localStorage.getItem('currentUser')).password
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
                      updateService1PhoneBookingObj.customer_id = get_all_users_square_res.customers[i].id
                      // service1BookingObj.customer_id = get_all_users_square_res.customers[i].id
                      console.log(updateService1PhoneBookingObj)
                    }
                  }
                    // send new number to Square Api
                  async function updateSquarePhoneNumber() {
                    // req & res
                    const update_phone_number_square_req = await fetch(`/updatePhoneSquare/${JSON.stringify(updateService1PhoneBookingObj)}`, { method: 'put' })
                    const update_phone_number_square_res = await update_phone_number_square_req.json()
      
                    console.log(update_phone_number_square_res)

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
                    myApp.updatedStorageInfo.password = JSON.parse(localStorage.getItem('currentUser')).password
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
                      // change the current number to the new number (confirm details)
                      bookingModalS1CurrentPhoneValue.textContent = `${filteredCleanPhoneValue.slice(0, 3)}-${filteredCleanPhoneValue.slice(3, 6)}-${filteredCleanPhoneValue.slice(6, 10)}`

                      bookingModalS1ChangePhoneLoading.className = 'booking-modal-s1-change-phone-loading hide-container'
                      bookingModalS1ChangePhoneSuccess.className = 'booking-modal-s1-change-phone-success'

                      setTimeout(() => {
                        bookingModalS1ChangePhoneSuccess.className = 'booking-modal-s1-change-phone-success hide-container'
                        bookingModalS1ChangePhone.className = 'booking-modal-s1-change-phone hide-container'
                        bookingModalS1ChangePhoneCaution.className = 'booking-modal-s1-change-phone-caution hide-container'
      
                        bookingModalS1ChangeNumberCheckbox.checked = false
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
                // !bookingModalS1CurrentPhone.checked
              }
            } else {
              // show the error div
              bookingModalS1ChangePhoneError.className = 'booking-modal-s1-change-phone-input-error'

              bookingModalS1ChangePhoneError.innerHTML = `<h1>This number already exists</h1>`
              // "this phone number already exists"
            }
            

          } else {
            // show the phone error divs
            bookingModalS1ChangePhoneError.className = 'booking-modal-s1-change-phone-input-error'
            bookingModalS1ChangePhoneError.innerHTML = `<h1>This number is invalid</h1>`
            bookingModalS1ChangePhoneInput.className = 'booking-modal-s1-change-phone-input-error input-invalid'
          }
        })

      } else {
        // hide change number divs
        bookingModalS1ChangePhone.className = 'booking-modal-s1-change-phone hide-container'
        bookingModalS1ChangePhoneCaution.className = 'booking-modal-s1-change-phone-caution hide-container'
      }
    })


  }

  bookingModalS1NextBtn() {
  // next btn clicked
  bookingModalS1NextBtn.addEventListener('click', () => {
    bookingModalS1Counter++

    // select an agent counter
    if (bookingModalS1Counter === 1 && bookingModalS1AgentsSelected) {
      bookingModalS1Agents.className = 'booking-modal-s1-right hide-container'
      bookingModalS1DateTime.className = 'booking-modal-s1-right'
      bookingModalS1ConfirmDetails.className = 'booking-modal-s1-right hide-container'

      bookingModalS1Step1.className = ''
      bookingModalS1Step2.className = 'step-selected'
      bookingModalS1Step3.className = ''

      this.selectDateTime()

      // if "select an agent" has been selected already fill the footer next btn
      if (bookingModalS1AgentsSelected) {
        bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null hide-container'
        bookingModalS1NextBtn.className = 'booking-modal-s1-next'
      } else {
        bookingModalS1NextNullBtn.className = 'booking-modal-s1-next-null'
        bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'
      }

      editBookingModalS1DateTimeNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
      editBookingModalS1DateTime.className = 'bi bi-pencil-square right1rem'
    } else if (bookingModalS1Counter === 1 && !bookingModalS1AgentsSelected) {
        console.log('Please select an agent')
        bookingModalS1Counter = 0
      }

    // select date and time counter
    if (bookingModalS1Counter === 2 && bookingModalS1DateSelected && bookingModalS1TimeSelected) {
      bookingModalS1Agents.className = 'booking-modal-s1-right hide-container'
      bookingModalS1DateTime.className = 'booking-modal-s1-right hide-container'
      bookingModalS1ConfirmDetails.className = 'booking-modal-s1-right'

      bookingModalS1Step1.className = ''
      bookingModalS1Step2.className = ''
      bookingModalS1Step3.className = 'step-selected'

      this.confirmDetails()

      editBookingModalS1ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
      editBookingModalS1ConfirmDetails.className = 'bi bi-pencil-square right1rem'

      bookingModalS1NextBtn.className = 'booking-modal-s1-next hide-container'

      // display current phone number
      bookingModalS1CurrentPhoneValue.textContent = `${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(0, 3)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(3, 6)}-${JSON.parse(localStorage.getItem('currentUser')).phone_number.slice(6, 10)}`

      // display customer reciept 
        // selected "service"
      bookingModalS1SelectedService.textContent = `${bookingModalS1BodyLeftTitle.textContent}`

        // selected "agent"
      for (let i = 0; i < bookingModalS1BodyRightAgentsBox.children.length; i++) {
        if (bookingModalS1BodyRightAgentsBox.children[i].className === 'booking-modal-s1-agent-selected') {
          bookingModalS1SelectedAgent.textContent = bookingModalS1BodyRightAgentsBox.children[i].textContent
        }
      }
      
        // selected "date and time"
      let bookingModalS1SelectedTime

      if (service1BookingObj.start_at.slice(11, 16) === '12:00') {
        bookingModalS1SelectedTime = '08:00 AM EST'
        service1BookingObj.appointment_time = '08:00 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '12:30') {
        bookingModalS1SelectedTime = '08:30 AM EST'
        service1BookingObj.appointment_time = '08:30 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '13:00') {
        bookingModalS1SelectedTime = '09:00 AM EST'
        service1BookingObj.appointment_time = '09:00 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '13:30') {
        bookingModalS1SelectedTime = '09:30 AM EST'
        service1BookingObj.appointment_time = '09:30 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '14:00') {
        bookingModalS1SelectedTime = '10:00 AM EST'
        service1BookingObj.appointment_time = '10:00 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '14:30') {
        bookingModalS1SelectedTime = '10:30 AM EST'
        service1BookingObj.appointment_time = '10:30 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '15:00') {
        bookingModalS1SelectedTime = '11:00 AM EST'
        service1BookingObj.appointment_time = '11:00 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '15:30') {
        bookingModalS1SelectedTime = '11:30 AM EST'
        service1BookingObj.appointment_time = '11:30 AM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '16:00') {
        bookingModalS1SelectedTime = '12:00 PM EST'
        service1BookingObj.appointment_time = '12:00 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '16:30') {
        bookingModalS1SelectedTime = '12:30 PM EST'
        service1BookingObj.appointment_time = '12:30 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '17:00') {
        bookingModalS1SelectedTime = '01:00 PM EST'
        service1BookingObj.appointment_time = '01:00 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '17:30') {
        bookingModalS1SelectedTime = '01:30 PM EST'
        service1BookingObj.appointment_time = '01:30 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '18:00') {
        bookingModalS1SelectedTime = '02:00 PM EST'
        service1BookingObj.appointment_time = '02:00 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '18:30') {
        bookingModalS1SelectedTime = '02:30 PM EST'
        service1BookingObj.appointment_time = '02:30 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '19:00') {
        bookingModalS1SelectedTime = '03:00 PM EST'
        service1BookingObj.appointment_time = '03:00 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '19:30') {
        bookingModalS1SelectedTime = '03:30 PM EST'
        service1BookingObj.appointment_time = '03:30 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '20:00') {
        bookingModalS1SelectedTime = '04:00 PM EST'
        service1BookingObj.appointment_time = '04:00 PM EST'
      } else if (service1BookingObj.start_at.slice(11, 16) === '20:30') {
        bookingModalS1SelectedTime = '04:30 PM EST'
        service1BookingObj.appointment_time = '04:30 PM EST'
      }  

      bookingModalS1SelectedDateTime.textContent = `${service1BookingObj.start_at.slice(5, 7)}/${service1BookingObj.start_at.slice(8, 10)}/${service1BookingObj.start_at.slice(0, 4)} @ ${bookingModalS1SelectedTime}`

      editBookingModalS1ConfirmDetailsNull.className = 'bi bi-pencil-square right1rem edit-bm-null hide-container'
      editBookingModalS1ConfirmDetails.className = 'bi bi-pencil-square right1rem'
    } else if (bookingModalS1Counter === 2 && !bookingModalS1DateSelected || bookingModalS1Counter === 2 && !bookingModalS1TimeSelected) {
      console.log('Please select both a date and time.')
      bookingModalS1Counter = 1
    }

  })
  }

  createBooking() {
    // activate book appointment btn on selection
    bookingModalS1InfoCorrectCheckbox.addEventListener('click', () => {
      if (bookingModalS1InfoCorrectCheckbox.checked) {
        bookingModalS1BookingBtn.style.transitionDuration = '0.5s'
        bookingModalS1BookingBtn.style.backgroundColor = myApp.companyPrimaryColor
        bookingModalS1BookingBtn.style.cursor = 'pointer'
      } else {
        bookingModalS1BookingBtn.style.transitionDuration = '0.5s'
        bookingModalS1BookingBtn.style.backgroundColor = ''
      }
    })

    // booking appointment btn
    bookingModalS1BookingBtn.addEventListener('click', () => {
      console.log(service1BookingObj)
      console.log('The booking btn is active!')
      if (bookingModalS1InfoCorrectCheckbox.checked) {
        // hide confirm details div
        bookingModalS1ConfirmDetailsContainer.className = 'booking-modal-s1-body-right-confirm-details-container hide-container'
        // show loading booking container
        bookingModalS1Loading.className = 'booking-modal-s1-confirm-details-loading'
        // do the following...

        // create the booking --> Square Api
        async function createBooking() {
          // req & res
          const create_booking_req = await fetch(`/createBooking/${JSON.stringify(service1BookingObj)}`, { method: 'post' })
          const create_booking_res = await create_booking_req.json()
          console.log(create_booking_res)

          if (create_booking_res.booking) {
            // send both email and text confirmation

            // email booking confirmation
            async function emailBooking() {
              // req & res
              const send_email_booking_req = await fetch(`/emailBooking/${JSON.stringify(service1BookingObj)}`)
              const send_email_booking_res = await send_email_booking_req.json()
              console.log(send_email_booking_res)
            }
              emailBooking()
                .then(() => { console.log('the emailBookng() has been sent to the express server') })
                .catch((error) => { console.log(error) })

            // text booking confirmation
            async function textBooking() {
              // req & res
              const send_text_booking_req = await fetch(`/textBooking/${JSON.stringify(service1BookingObj)}`, { method: 'POST' })
              const send_text_booking_res = await send_text_booking_req.json()
              console.log(send_text_booking_res)

              if (send_text_booking_res) {
                // when done show the booking complete div
                bookingModalS1Loading.className = 'booking-modal-s1-confirm-details-loading hide-container'
                bookingModalS1LoadingSuccess.className = 'booking-modal-s1-confirm-details-success'
                console.log('this is the service1BookingObj duration_minutes', service1BookingObj)
                if (service1BookingObj.duration_minutes / 60 < 1) {
                  bookingModalS1LoadingSuccess.innerHTML = 
                  `
                  <div class='booking-modal-s1-loading-success'></div>
                  <h1>Thank you for booking with us!</h1>
                  <p>Please check your email and phone for your booking details.</p>
                  <p>Talk to you soon!</p>
                  <p>&#128515;</p>
                  `
                  // refresh the page
                  setTimeout(() => {
                    // myApp.bookingModalS1.className = 'booking-modal-s1 hide-container'
                    location.reload()
                  }, 8000)
                } else if (service1BookingObj.duration_minutes / 60 === 1) {
                  bookingModalS1LoadingSuccess.innerHTML =
                  `
                  <div class='booking-modal-s1-loading-success'></div>
                  <h1>Thank you for booking with us!</h1>
                  <p>Please check your email and phone for your booking details.</p>
                  <p>See you soon!</p>
                  <p>&#128515;</p>
                  `

                  // refresh the page
                  setTimeout(() => {
                    // myApp.bookingModalS1.className = 'booking-modal-s1 hide-container'
                    location.reload()
                  }, 8000)
                } else if (service1BookingObj.duration_minutes / 60 > 1) {
                  bookingModalS1LoadingSuccess.innerHTML =
                  `
                  <div class='booking-modal-s1-loading-success'></div>
                  <h1>Thank you for booking with us!</h1>
                  <p>Please check your email and phone for your booking details.</p>
                  <p>See you soon!</p>
                  <p>&#128515;</p>
                  `

                  // refresh the page
                  setTimeout(() => {
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
        }
    })
  }

  closeModal() {
  bookingModalS1Close.addEventListener('click', () => {
    console.log('ive been clicked on')
    bookingModalS1.className = 'booking-modal-s1 hide-container'
  })

  document.addEventListener('click', (event) => { 
    if (event.target === bookingModalS1) {
      bookingModalS1.className = 'booking-modal-s1 hide-container'
    }
  })  
  }
}


const service1Component = new Service1Component()

module.exports = { service1Component }