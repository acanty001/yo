/** import modules */

  //- components

    // services
  const { service1Component } = require('./components/book-a-service/service-1.js')
  const { service2Component } = require('./components/book-a-service/service-2.js')
  const { service3Component } = require('./components/book-a-service/service-3.js')
  const { service4Component } = require('./components/book-a-service/service-4.js')
  const { service5Component } = require('./components/book-a-service/service-5.js')

    // auth
  const { loginComponent } = require('./components/auth/login.js')
  const { signUpComponent } = require('./components/auth/signup.js')
  const { signOutComponent } = require('./components/auth/signout.js')
  const { pleaseLoginSignUpComponent } = require('./components/auth/please-login-signup.js')
  const { forgotPasswordComponent } = require('./components/auth/forgot-password.js')

    // payments
  // const { s1PaymentComponent } = require('./components/payments/s1-payment-component.js')
  const { s2PaymentComponent } = require('./components/payments/s2-payment-component.js')
  const { s3PaymentComponent } = require('./components/payments/s3-payment-component.js')
  const { s4PaymentComponent } = require('./components/payments/s4-payment-component.js')
  const { s5PaymentComponentSub } = require('./components/payments/s5-payment-component-sub.js')
  // const { s5PaymentComponent } = require('./components/payments/s5-payment-component.js')

    // company search
  const { companySearch } = require('./components/company-search/company-search.js')

    // info services 
  const { infoServicesComponent } = require('./components/services/info-services.js')

    // before & after
  const { beforeAfterComponent } = require('./components/before-and-after/before-and-after.js')

    // frequently asked questions
  const { faqsComponent } = require('./components/faqs/faqs.js')

    // reviews
  const { reviewsComponent } = require('./components/reviews/reviews.js')

    // careers
  const { careersComponent } = require('./components/careers/careers.js')

    // terms and policies
  const { termsConditionsComponent } = require('./components/terms-and-policies/terms-and-conditions.js')
  const { policyComponent } = require('./components/terms-and-policies/policy.js')

    // support
  const { supportComponent } = require('./components/support/support.js')

  //- stylesheets
  import './styles/app.css'
  import './styles/style.css'

/** domain */ 
const domainName = 'http://www.googlywiggly.com'

/** company latitude && longitude */
const companyLat = '38.8976997'
const companyLong = '-77.03655315'

/** rate per mile (unique session) */
const uniqueRatePerM = 475

/** service booking modals */
const bookingModalS1 = document.getElementById('booking-modal-s1')
const bookingModalS2 = document.getElementById('booking-modal-s2')
const bookingModalS3 = document.getElementById('booking-modal-s3')
const bookingModalS4 = document.getElementById('booking-modal-s4')
const bookingModalS5 = document.getElementById('booking-modal-s5')

/** service booking prices */
const service1Price = '0'
const service2Price = '10000'
const service3Price = '69000'
const service4Price = '' // depends on user location
const service5Price2Quart = '17800'
const service5Price2Ann = '68800'


/** .env */
const companyLocationId = process.env.Square_Location_Id

const companyService1VariationId = process.env.Square_Service1
const companyService2VariationId = process.env.Square_Service2
const companyService3VariationId = process.env.Square_Service3
const companyService4VariationId = process.env.Square_Service4
const companyService5VariationId = process.env.Square_Service5

/** regex */
const reg_fs_ls_nickNameCheck = /[A-Za-z]{2}[0-9]*$/
const justLettersCheck = /[A-Za-z0-9]*$/
const nicknameCheck = /^\([0-9]{3,3}\)\-[0-9]{3,3}\-[0-9]{4,4}$/
const phoneCheck1 = /^\([0-9]{3,3}\)\-[0-9]{3,3}\-[0-9]{4,4}$/
const phoneCheck2 = /^[0-9]{10,10}$/
const phoneCheck3 = /^1\([0-9]{3,3}\)\-[0-9]{3,3}\-[0-9]{4,4}$/
const phoneCheck4 = /^\([0-9]{3,3}\)[0-9]{3,3}\-[0-9]{4,4}$/
const phoneCheck5 = /^[0-9]{3,3}\-[0-9]{3,3}\-[0-9]{4,4}$/
const phoneCheck6 = /^[0-9]{3,3}\.[0-9]{3,3}\.[0-9]{4,4}$/
const filterPhone =  /[-()]/g
const addressCheck = /[A-Za-z]{2}[0-9]*$/
const zipCodeCheck = /^[0-9]{5,5}$/
const lettersOnlyCheck = /^[A-Za-z]*$/
const dobCheck = /[A-Za-z]{2}$/
const emailCheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const passwordCheck = /^[A-Za-z0-9]{8,25}[~!@#$%^&*()_+{}|"?><|=-`\\';/.,]{3,3}$/

/** objects */
let updatedStorageInfo = {
  address: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  id: '', 
  birthday: '',
  email_address: '',
  nickname: '',
  family_name: '',
  given_name: '',
  phone_number: '',
  password: '',
  location1: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location2: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location3: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location4: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location5: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location6: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location7: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location8: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location9: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location10: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  }
}

document.addEventListener('readystatechange', () => {
  console.log(document.readyState)
  if (document.readyState === 'loading') {
    document.querySelector('.page-loader').className = 'page-loader'
  }

  if (document.readyState === 'interactive') {
    document.querySelector('.page-loader').className = 'page-loader'
  }

  if (document.readyState === 'complete') {
    document.querySelector('.page-loader').className = 'page-loader hide-container'
  }
})





// const signupLoginBox = document.getElementById('signup-login-box')
// const loggedInUserBox = document.getElementById('logged-in-user-name-box')

// const navDropDownBtn = document.getElementById('fas fa-user-circle')
// const soPoshNavUl = document.getElementById('so-posh-nav')

// let navUlCounter = 0

// const headLogInBtn = document.getElementById('login-btn')
// const headSignUpBtn = document.getElementById('signup-btn')
// const headLogOutBtn = document.getElementById('logout-btn')

// const beforeImageContainer = document.getElementById('before-image-container')
// const afterImageContainer = document.getElementById('after-image-container')

// const floatingNav = document.getElementById('floating-nav')
// const liveIcon = document.getElementById('live-icon')

// let photoBInterval
// let photoAInterval

// arrowCounter = 0

// const arrowLeft = document.getElementById('arrow-left')
// const arrowRight = document.getElementById('arrow-right')

// const beforeImgArr = ['beforeBasement', 'beforeCloset', 'beforePantry', 'beforePlayroom']
// const afterImgArr = ['afterBasement', 'afterCloset', 'afterPantry', 'afterPlayroom']

// const wheelD1 = document.getElementById('wheel-d-1')
// const wheelD2 = document.getElementById('wheel-d-2')
// const wheelD3 = document.getElementById('wheel-d-3')
// const wheelD4 = document.getElementById('wheel-d-4')

// let allLocId

// const ringBell = document.getElementById('ring-bell')
// const ringPhone = document.getElementById('ring-phone')

// // setInterval(() => {
// //   if (ringPhone.className === 'fas fa-phone ring-phone-off' || ringBell === 'fas fa-bell ring-bell-off') {
// //     ringPhone.className = 'fas fa-phone ring-phone-on'
// //   } else {
// //     ringPhone.className = 'fas fa-phone ring-phone-off'
// //   }
// // }, 3200)

// // constantly check if a user is logged in from sign up from the local storage
//   let timeoutID
  
//   function setup() {
//       this.addEventListener("mousemove", resetTimer, false)
//       this.addEventListener("mousedown", resetTimer, false)
//       this.addEventListener("keypress", resetTimer, false)
//       this.addEventListener("DOMMouseScroll", resetTimer, false)
//       this.addEventListener("mousewheel", resetTimer, false)
//       this.addEventListener("touchmove", resetTimer, false)
//       this.addEventListener("MSPointerMove", resetTimer, false)
  
//       startTimer();
//   }
//   setup();
  
//   function startTimer() {
//       // wait 2 seconds before calling goInactive
//       timeoutID = window.setTimeout(goInactive, 1800000)

//       // console.log(timeoutID)
//   }
  
//   function resetTimer(e) {
//       window.clearTimeout(timeoutID)
  
//       goActive();
//   }
  
//   function goInactive() {
//     localStorage.removeItem('currentUser')
//     localStorage.removeItem('live-on')
//   }
  
//   function goActive() {
//       // do something
//       // if (localStorage.getItem('currentUser')) {
//       //   headLogInBtn.className = '.sign-up-log-in-log-out-btn hide-container'
//       //   headSignUpBtn.className = 'sign-up-log-in-log-out-btn hide-container'
//       //   headLogOutBtn.className = 'sign-up-log-in-log-out-btn'
//       //   // display none/block it

//       //   const liveOnorOff = localStorage.getItem('live-on')

//       //   if (liveOnorOff === 'true') {
//       //     liveIcon.innerHTML = ''

//       //     liveIcon.innerHTML = `
//       //     <div id='logged-in-user-name-box' class="logged-in-user-name-box">
//       //       <p class='user-name-logged-in'>${JSON.parse(localStorage.getItem('currentUser')).given_name}</p>
//       //     </div>            
//       //     <div class="online-green"></div>
//       //     <i id='account-menu' class="fas fa-caret-down account-menu"></i>
//       //     `
//       //   }
//       // }
      
//       startTimer()
//   }

//   if (localStorage.getItem('currentUser')) {
//     headLogInBtn.className = '.sign-up-log-in-log-out-btn hide-container'
//     headSignUpBtn.className = 'sign-up-log-in-log-out-btn hide-container'
//     headLogOutBtn.className = 'sign-up-log-in-log-out-btn'
//     // display none/block it

//     const liveOnorOff = localStorage.getItem('live-on')

//     if (liveOnorOff === 'true') {
//       liveIcon.innerHTML = ''

//       liveIcon.innerHTML = `
//       <div id='logged-in-user-name-box' class="logged-in-user-name-box">
//         <p class='user-name-logged-in'>${JSON.parse(localStorage.getItem('currentUser')).given_name}</p>
//       </div>            
//       <div class="online-green"></div>
//       <i id='account-menu' class="fas fa-caret-down account-menu"></i>
//       `
//     }
//   }


// // logout button clicked 
// // headLogOutBtn.addEventListener('click', (event) => {
// //   let confirmLogOut = window.confirm('Are you sure you want to log out?')


// //   if (confirmLogOut) {
// //     localStorage.removeItem('currentUser')
// //     localStorage.removeItem('live-on')

// //     document.location.reload()
// //   } else {
// //     console.log('Alright then.. good... yess.... pay for our services... mwuahahahaha')
// //   }

// //   // if (localStorage.getItem('currentUser') === '') {
// //   //   headLogInBtn.className = 'sign-up-log-in-log-out-btn'
// //   //   headSignUpBtn.className = 'sign-up-log-in-log-out-btn'
// //   //   loggedInUserBox.innerHTML = ''
// //   //   headLogOutBtn.className = 'sign-up-log-in-log-out-btn hide-container'
// //   //   loggedInUserBox.innerHTML = `
// //   //       <p class='user-name-logged-in'>Welcome, <span class='box-username'>${JSON.parse(localStorage.getItem('currentUser')).given_name}</span></p>
// //   //   `
// //   // } 
  
// //   // if (localStorage.getItem('live-on') === '') { 
// //   //   liveIcon.innerHTML = `
// //   //   <div id='logged-in-user-name-box' class="logged-in-user-name-box"></div>            
// //   //   <div class="online-red"></div>
// //   //   <i id='account-menu' class="fas fa-caret-down account-menu"></i>
// //   //   `
// //   // }
// // })

// if (localStorage.getItem('currentUser') === '') {
//   headLogInBtn.className = 'sign-up-log-in-log-out-btn'
//   headSignUpBtn.className = 'sign-up-log-in-log-out-btn'
//   loggedInUserBox.innerHTML = ''
//   headLogOutBtn.className = 'sign-up-log-in-log-out-btn hide-container'
//   loggedInUserBox.innerHTML = `
//       <p class='user-name-logged-in'><span class='box-username'>${JSON.parse(localStorage.getItem('currentUser')).given_name}</span></p>
//   `
// } 

// if (localStorage.getItem('live-on') === '') { 
//   liveIcon.innerHTML = `
//   <div id='logged-in-user-name-box' class="logged-in-user-name-box"></div>            
//   <div class="online-red"></div>
//   <i id='account-menu' class="fas fa-caret-down account-menu"></i>
//   `
// }

// /*****************
//  * Google Maps Api
//  */
// function initMap() {
//   // latitude and longitude for map
//   const myLatLng = { lat: 41.1220, lng: -73.7949 };

//   // options for map
//   const mapOptions = {
//     center: myLatLng,
//     zoom: 15,
//   }

//   // create new map
//   const map = new google.maps.Map(document.getElementById("map-api"), mapOptions)

//   // create new marker on the map
//   const image = './img/placeholder2.png'

//   const marker = new google.maps.Marker({
//     position: myLatLng,
//     map,
//     icon: image
//   })

//   // create an info window
//   const detailWindow = new google.maps.InfoWindow({
//     content: `<h1>1234 Main St, 10566 Westchester, NY</h1>` 
//   })

//   marker.addListener("click", () => {
//     detailWindow.open(map, marker)
//     })
// }

// /****************
//  * Service Modals
//  */
// const notLoggedModal = document.getElementById('not-logged-modal')
// const notLoggedModalDeleteBtn = document.getElementById('close-modal2')
// const phoneConsultationBnBtn = document.getElementById('phone-consultation-bn-btn')
// const phoneConsultationModal = document.getElementById('phone-consultation-modal')
// const phoneConsultationModalDeleteBtn = document.getElementById('close-modal')

// const mainBody = document.getElementById('main-body')

// console.log(localStorage.getItem('currentUser'))

// // 01 phone consultation modal
// // phoneConsultationBnBtn.addEventListener('click', () => {
// //   // if user is not logged in -- make them --
// //   if (localStorage.getItem('currentUser') !== null) {
// //     phoneConsultationModal.className = 'modal'
// //     mainBody.className = 'lock-scroll'
// //   } else {
// //     notLoggedModal.className = 'not-logged-modal'
// //     mainBody.className = 'lock-scroll'
// //   }
// // })

// // notLoggedModalDeleteBtn.addEventListener('click', ()=> {
// //   notLoggedModal.className = 'not-logged-modal hide-modal'
// //   mainBody.className = ''
// // })

// // phoneConsultationModalDeleteBtn.addEventListener('click', () => {
// //   phoneConsultationModal.className = 'modal hide-modal'
// //   mainBody.className = ''
// // })

// // 02 in-home consultation modal

// // 03 one session modal

// // 04 concierge service modal



const date = new Date()


/**********
 * Calendar
 */

// Service 1 Calendar


// let bookingModalS1NextBtnCal = []
// let bookingModalS1PrevBtnCal = []
// let bookingModalS1NextBtnCalCounter
// let bookingModalS1RenderCalendar

  

  



// Service 2 Calendar
// let bookingModalS2NextBtnCal = []
// let bookingModalS2PrevBtnCal = []
// let bookingModalS2NextBtnCalCounter
// let bookingModalS2RenderCalendar


  
// window.location.href === `${homePage1}` || window.location.href === `${homePage2}` ? bookingModalS2RenderCalendar() : console.log('Dont render the calendar')


  

// /*********************
//  * Square Bookings Api
//  */
// let calDaysDiv = document.getElementById('days-days')
// let calMonth = document.getElementById('cal-month')

// let currentYear = date.getFullYear()
// const currentMonth1 = new Date().getMonth()


// let newAvailableTimeArr = []
// let newList = []
// let newListTimes = []

// let monthSliceNATArr = []
// let currMonthAvailableTimes = []

// let newCalMonth = ''

// let clicked1 = false
// let clicked2 = false
// let clicked3 = 0

// let updateUserPhone1 = {
//   phone_number: ''
// }

// let updateUserProf = {
//   details: {
//     address_line_1: '',
//     administrative_district_level_1: '',
//     locality: '',
//     postal_code: '',
//     birthday: '',
//     email_address: '',
//     family_name: '',
//     given_name: '',
//     idempotency_key: '',
//     nickname: '', 
//     note: '', 
//     phone_number: '',
//     password: '',
//     password2: '',
//     id: ''
//   },
//   otherLocations: {
//     loc_one: {
//       address_line_1: '',
//       administrative_district_level_1: '',
//       locality: '',
//       postal_code: ''
//     },
//     loc_two: {
//       address_line_1: '',
//       administrative_district_level_1: '',
//       locality: '',
//       postal_code: ''
//     },
//     loc_three: {
//       address_line_1: '',
//       administrative_district_level_1: '',
//       locality: '',
//       postal_code: ''
//     }
//   }
// }

// // let newCustSquare = {
// //   details: {
// //     address_line_1: '',
// //     administrative_district_level_1: '',
// //     locality: '',
// //     postal_code: '',
// //     birthday: '',
// //     email_address: '',
// //     family_name: '',
// //     given_name: '',
// //     idempotency_key: '',
// //     nickname: '',
// //     note: '',
// //     phone_number: '',
// //     id: ''
// //   }
// // }

// let newBookingConfirmation = {
//   details: {
//     email_address: '',
//     appointment_time: '',
//     time_booked: '',
//     given_name: '',
//     family_name: '',
//     employee: '',
//     phone_number: ''
//   }
// }

// let customerPhoneBooking = {
//   booking: {
//     customer_id: '',
//     location_id: '',
//     appointment_segments: [
//       {
//       duration_minutes: 20,
//       service_variation_id: '',
//       service_variation_version: 0,
//       team_member_id: ''
//       }
//     ],
//     start_at: '',
//     customer_note: '',
//     seller_note: ''
//   },
//   idempotency_key: ''
// }

// // let customerAppointmentDayAndTime = {
// //   appointmentTime: '',
// //   appointmentDay: ''
// // }

// const monthsListArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 

// const timesDiv = document.getElementById('times')
// const timesMorningDiv = document.getElementById('morning-times')
// const timesAfternoonDiv = document.getElementById('afternoon-times')
// const timesEveningDiv = document.getElementById('evening-times')

// let currentMonth
// let selectedCalDaysTarget

// let allCatalogItems
// let allTeamMembers

// let allAvailableTimes

// /***********[Square Bookings Api]************
//  * Retrieve Availability
//  */

// // retrieve and integrate availability times from Square API into calendar 
// async function retrieveSquareAvailability() {
//   const calDays = document.querySelectorAll('.cal-days')
//   // fetch catalog items with "GET"
//   const response = await fetch('/retrieveCatalogItems', { method: 'get' })
//   const data = await response.json()

//   allCatalogItems = data
//   console.log(allCatalogItems)
//   console.log(data)
//   // console.log(data.objects[0].item_data.variations[0].id)

//   // fetch avaliabilty with catalog item data 
//   const idData = data.objects[0].item_data.variations[0].id 
//   // getting availabity for the responsed service
//   const response2 = await fetch(`/searchWomensHaircut/${idData}`, { method: 'post' })
//   const data2 = await response2.json()

//   allAvailableTimes = data2

//   const monthsList = {
//     0: 'January',
//     1: 'February',
//     2: 'March',
//     3: 'April',
//     4: 'May',
//     5: 'June',
//     6: 'July',
//     7: 'August',
//     8: 'September',
//     9: 'October',
//     10: 'November',
//     11: 'December' 
//   } 

//   // find the current month based on its name and convert to a number
//   for (let i = 0; i < 12; i++) {
//     if (monthsList[i] === calMonth.innerHTML) {
//       newCalMonth = i
//       // console.log(newCalMonth)
//     }
//   }

//   console.log(data2.availabilities)

//   // slice each item in all available times array into a new variable then push those new variables to new array
//   for (let i = 0; i < data2.availabilities.length; i++) {
//     const availableTimes = data2.availabilities[i].start_at
//     // console.log(availableTimes)
//     let availableYear = availableTimes.slice(0,4)
//     let availableMonth = availableTimes.slice(5, 7) - 1
//     let availableDay = availableTimes.slice(8, 10)
//     let availableHours = availableTimes.slice(11, 13)
//     let availableMinutes = availableTimes.slice(14, 16)
//     let availableSeconds = availableTimes.slice(17, 19)

//     let newAvailableTime = new Date(availableYear, availableMonth, availableDay, availableHours, availableMinutes, availableSeconds)

//     newAvailableTimeArr.push(newAvailableTime)

//     // console.log(newAvailableTime.getDate())

//     for (let i = 0; i < calDays.length; i++) {
//       if (parseFloat(calDays[i].innerHTML) === newAvailableTime.getDate() && newCalMonth === newAvailableTime.getMonth()) {
//         calDays[i].className = 'cal-days cal-days-style'
//       }
//     }
//   }

//   let calDaysAvailable = calDaysDiv.querySelectorAll('.cal-days-style')
//   console.log(calDaysAvailable)

//   // morning time clicked and sent to the customerPhoneBooking objcet (day)
//   calDaysDiv.addEventListener('click', (event) => {
//     console.log(calDaysDiv)
//     if (event.target.className === 'cal-days cal-days-style') {
//       console.log('they equal')
//       clicked1 = true
//       clicked2 = true
//       clicked3++

//       // find all available dates and times based on calendar day click and push to newList
//       for (let i = 0; i < newAvailableTimeArr.length; i++) {
//         if ((event.target.textContent) === JSON.stringify(newAvailableTimeArr[i].getDate())) {
//           // console.log(newAvailableTimeArr[i])
//           console.log(newAvailableTimeArr[i].getDate())
//           console.log(String(newAvailableTimeArr[i]))
//           newList.push(String(newAvailableTimeArr[i]))
//         }
        
//         if (newList.length && clicked1 === true) {
//           newList = []
//           newList.push(JSON.stringify(newAvailableTimeArr[i]))
//           clicked1 = false
//         }
//       }

//       // display shade-pink on and off on calendar day clicks and send the 'day' clicked to the customerPhoneBooking object
//       if (event.target.className === 'cal-days cal-days-style') {
//         console.log(event.target.className)
//         for (let i = 0; i < calDaysAvailable.length; i++) {
//           if (calDaysAvailable[i].className = 'cal-days cal-days-style') {
//             calDaysAvailable[i].className = 'cal-days cal-days-style'
//           }
//           event.target.className = 'cal-days cal-days-style shade-pink'
//           selectedCalDaysTarget = event.target.textContent
//         }
        

//         console.log(parseFloat(event.target.textContent))
//         // customerAppointmentDayAndTime.appointmentDay = event.target.textContent
//       }

//       // slice through the newList and create a new list with newListTimes -- for placing times on the screen
//       for (let i = 0; i < newList.length; i++) {
//         newListTimes.push(newList[i].slice(16,24))

//         if (newListTimes.length && clicked2 === true) {
//           newListTimes = []
//           newListTimes.push(newList[i].slice(16, 24))
//           clicked2 = false
//         }
//       }

//       // append available times to time cards in the correct div
//       for (let i = 0; i < newListTimes.length; i++) {
//         let linkElement = document.createElement('a')
//         linkElement.className = 'time-card'

//         if (newListTimes[i] === '24:00:00') {
//           linkElement.textContent = `07:00:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '00:30:00') {
//           linkElement.textContent = `07:30:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '01:00:00') {
//           linkElement.textContent = `08:00:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '01:30:00') {
//           linkElement.textContent = `08:30:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '02:00:00') {
//           linkElement.textContent = `09:00:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '02:30:00') {
//           linkElement.textContent = `09:30:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '03:00:00') {
//           linkElement.textContent = `10:00:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '03:30:00') {
//           linkElement.textContent = `10:30:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '04:00:00') {
//           linkElement.textContent = `11:00:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '04:30:00') {
//           linkElement.textContent = `11:30:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '05:00:00') {
//           linkElement.textContent = `12:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '05:30:00') {
//           linkElement.textContent = `12:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '06:00:00') {
//           linkElement.textContent = `01:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '06:30:00') {
//           linkElement.textContent = `01:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '07:00:00') {
//           linkElement.textContent = `02:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '07:30:00') {
//           linkElement.textContent = `02:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '08:00:00') {
//           linkElement.textContent = `03:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '08:30:00') {
//           linkElement.textContent = `03:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '09:00:00') {
//           linkElement.textContent = `04:00:00 am`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '09:30:00') {
//           linkElement.textContent = `04:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '10:00:00') {
//           linkElement.textContent = `05:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '10:30:00') {
//           linkElement.textContent = `05:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '11:00:00') {
//           linkElement.textContent = `06:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '11:30:00') {
//           linkElement.textContent = `06:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '12:00:00') {
//           linkElement.textContent = `07:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '12:30:00') {
//           linkElement.textContent = `07:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '13:00:00') {
//           linkElement.textContent = `08:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '13:30:00') {
//           linkElement.textContent = `08:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '14:00:00') {
//           linkElement.textContent = `09:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '14:30:00') {
//           linkElement.textContent = `09:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '15:00:00') {
//           linkElement.textContent = `10:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '15:30:00') {
//           linkElement.textContent = `10:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '16:00:00') {
//           linkElement.textContent = `11:00:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '16:30:00') {
//           linkElement.textContent = `11:30:00 am`
//           timesMorningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '17:00:00') {
//           linkElement.textContent = `12:00:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '17:30:00') {
//           linkElement.textContent = `12:30:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '18:00:00') {
//           linkElement.textContent = `01:00:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '18:30:00') {
//           linkElement.textContent = `01:30:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '19:00:00') {
//           linkElement.textContent = `02:00:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '19:30:00') {
//           linkElement.textContent = `02:30:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '20:00:00') {
//           linkElement.textContent = `03:00:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '20:30:00') {
//           linkElement.textContent = `03:30:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '21:00:00') {
//           linkElement.textContent = `04:00:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '21:30:00') {
//           linkElement.textContent = `04:30:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '22:00:00') {
//           linkElement.textContent = `05:00:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '22:30:00') {
//           linkElement.textContent = `05:30:00 pm`
//           timesAfternoonDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '23:00:00') {
//           linkElement.textContent = `06:00:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         } else if (newListTimes[i] === '23:30:00') {
//           linkElement.textContent = `06:30:00 pm`
//           timesEveningDiv.appendChild(linkElement)
//         }

//         // clear previous time cards on second click and fill on new time cards based on date clicked
//         if (timesDiv.children.length && clicked3 === 2) {
//           timesMorningDiv.innerHTML = ''
//           timesAfternoonDiv.innerHTML = ''
//           timesEveningDiv.innerHTML = ''
      
//           if (newListTimes[i] === '00:00:00') {
//             linkElement.textContent = `07:00:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '00:30:00') {
//             linkElement.textContent = `07:30:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '01:00:00') {
//             linkElement.textContent = `08:00:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '01:30:00') {
//             linkElement.textContent = `08:30:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '02:00:00') {
//             linkElement.textContent = `09:00:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '02:30:00') {
//             linkElement.textContent = `09:30:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '03:00:00') {
//             linkElement.textContent = `10:00:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '03:30:00') {
//             linkElement.textContent = `10:30:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '04:00:00') {
//             linkElement.textContent = `11:00:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '04:30:00') {
//             linkElement.textContent = `11:30:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '05:00:00') {
//             linkElement.textContent = `12:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '05:30:00') {
//             linkElement.textContent = `12:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '06:00:00') {
//             linkElement.textContent = `01:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '06:30:00') {
//             linkElement.textContent = `01:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '07:00:00') {
//             linkElement.textContent = `02:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '07:30:00') {
//             linkElement.textContent = `02:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '08:00:00') {
//             linkElement.textContent = `03:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '08:30:00') {
//             linkElement.textContent = `03:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '09:00:00') {
//             linkElement.textContent = `04:00:00 am`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '09:30:00') {
//             linkElement.textContent = `04:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '10:00:00') {
//             linkElement.textContent = `05:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '10:30:00') {
//             linkElement.textContent = `05:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '11:00:00') {
//             linkElement.textContent = `06:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '11:30:00') {
//             linkElement.textContent = `06:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '12:00:00') {
//             linkElement.textContent = `07:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '12:30:00') {
//             linkElement.textContent = `07:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '01:00:00') {
//             linkElement.textContent = `08:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '01:30:00') {
//             linkElement.textContent = `08:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '02:00:00') {
//             linkElement.textContent = `09:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '02:30:00') {
//             linkElement.textContent = `09:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '03:00:00') {
//             linkElement.textContent = `10:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '03:30:00') {
//             linkElement.textContent = `10:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '04:00:00') {
//             linkElement.textContent = `11:00:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '04:30:00') {
//             linkElement.textContent = `11:30:00 am`
//             timesMorningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '05:00:00') {
//             linkElement.textContent = `12:00:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '05:30:00') {
//             linkElement.textContent = `12:30:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '06:00:00') {
//             linkElement.textContent = `01:00:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '06:30:00') {
//             linkElement.textContent = `01:30:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '07:00:00') {
//             linkElement.textContent = `02:00:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '07:30:00') {
//             linkElement.textContent = `02:30:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '08:00:00') {
//             linkElement.textContent = `03:00:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '08:30:00') {
//             linkElement.textContent = `03:30:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '09:00:00') {
//             linkElement.textContent = `04:00:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '09:30:00') {
//             linkElement.textContent = `04:30:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '10:00:00') {
//             linkElement.textContent = `05:00:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '10:30:00') {
//             linkElement.textContent = `05:30:00 pm`
//             timesAfternoonDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '11:00:00') {
//             linkElement.textContent = `06:00:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           } else if (newListTimes[i] === '11:30:00') {
//             linkElement.textContent = `06:30:00 pm`
//             timesEveningDiv.appendChild(linkElement)
//           }

//           clicked3 = 1
//         }
//       }

//       // find the correct month and turn into a variable in the correct syntax and send the day, month, and year as one to the customerPhoneBooking object
//       for (let i = 0; i < monthsListArr.length; i ++) {
//         if(calMonth.textContent === monthsListArr[i]) {
//           console.log(monthsListArr[i])
//           if (monthsListArr[i] === 'January') {
//             currentMonth = '01'
//           } else if (monthsListArr[i] === 'February') {
//             currentMonth = '02'
//           } else if (monthsListArr[i] === 'March') {
//             currentMonth = '03'
//           } else if (monthsListArr[i] === 'April') {
//             currentMonth = '04'
//           } else if (monthsListArr[i] === 'May') {
//             currentMonth = '05'
//           } else if (monthsListArr[i] === 'June') {
//             currentMonth = '06'
//           } else if (monthsListArr[i] === 'July') {
//             currentMonth = '07'
//           } else if (monthsListArr[i] === 'August') {
//             currentMonth = '08'
//           } else if (monthsListArr[i] === 'September') {
//             currentMonth = '09'
//           } else if (monthsListArr[i] === 'October') {
//             currentMonth = '10'
//           } else if (monthsListArr[i] === 'November') {
//             currentMonth = '11'
//           } else if (monthsListArr[i] === 'December') {
//             currentMonth = '12'
//           }
          
//           // collect all data clicked and send to the customerPhoneBooking object
//           // customerPhoneBooking.appointmentDayAndTime = `${currentYear}-${currentMonth}-${customerAppointmentDayAndTime.appointmentDay}T${customerAppointmentDayAndTime.appointmentTime}.00Z`
//         }
//       }
  
//       // console.log(customerPhoneBooking.appointmentDayAndTime)

//     } else {
//       console.log('ah ah ah! Can\'t get a click outta me!')
//     }
//   })

//   // morning time clicked and sent to the customerPhoneBooking objcet (time)
//   timesMorningDiv.addEventListener('click', (event) => {
//     for (let i = 0; i < timesMorningDiv.children.length; i++) {
//     if (event.target === timesMorningDiv.children[i]) {
//       for (let i = 0; i < timesAfternoonDiv.children.length; i++) {
//         timesAfternoonDiv.children[i].className = 'time-card'
//       }
//       for (let i = 0; i < timesEveningDiv.children.length; i++) {
//         timesEveningDiv.children[i].className = 'time-card'
//       }  
//       timesMorningDiv.children[i].className = 'time-card time-card-select'
//       if (timesMorningDiv.children[i].textContent === '12:00:00 am') {
//         // customerAppointmentDayAndTime.appointmentTime = '00:00:00'
//       } else if (timesMorningDiv.children[i].textContent === '12:30:00 am') {
//         // customerAppointmentDayAndTime.appointmentTime = '00:30:00'
//       } else {
//         // customerAppointmentDayAndTime.appointmentTime = timesMorningDiv.children[i].textContent.slice(0, 8)
//       }  
//     } else {
//       timesMorningDiv.children[i].className = 'time-card'
//     }
//     }

//     for (let i = 0; i < monthsListArr.length; i ++) {
//       let currentMonth
//       if(calMonth.textContent === monthsListArr[i]) {
//         console.log(monthsListArr[i])
//         if (monthsListArr[i] === 'January') {
//           currentMonth = '01'
//         } else if (monthsListArr[i] === 'February') {
//           currentMonth = '02'
//         } else if (monthsListArr[i] === 'March') {
//           currentMonth = '03'
//         } else if (monthsListArr[i] === 'April') {
//           currentMonth = '04'
//         } else if (monthsListArr[i] === 'May') {
//           currentMonth = '05'
//         } else if (monthsListArr[i] === 'June') {
//           currentMonth = '06'
//         } else if (monthsListArr[i] === 'July') {
//           currentMonth = '07'
//         } else if (monthsListArr[i] === 'August') {
//           currentMonth = '08'
//         } else if (monthsListArr[i] === 'September') {
//           currentMonth = '09'
//         } else if (monthsListArr[i] === 'October') {
//           currentMonth = '10'
//         } else if (monthsListArr[i] === 'November') {
//           currentMonth = '11'
//         } else if (monthsListArr[i] === 'December') {
//           currentMonth = '12'
//         }
//         // customerPhoneBooking.appointmentDayAndTime = `${currentYear}-${currentMonth}-${customerAppointmentDayAndTime.appointmentDay}T${customerAppointmentDayAndTime.appointmentTime}.00Z`
//       }
//     }





//     // console.log(customerAppointmentDayAndTime)
//     console.log(customerPhoneBooking)  
//   })

//   // afternoon time clicked and sent to the customerPhoneBooking object (time)
//   timesAfternoonDiv.addEventListener('click', (event) => {
//     for (let i = 0; i < timesAfternoonDiv.children.length; i++) {
//       if (event.target === timesAfternoonDiv.children[i]) {
//         for (let i = 0; i < timesMorningDiv.children.length; i++) {
//           timesMorningDiv.children[i].className = 'time-card'
//         }
//         for (let i = 0; i < timesEveningDiv.children.length; i++) {
//         timesEveningDiv.children[i].className = 'time-card'
//         } 

//         timesAfternoonDiv.children[i].className = 'time-card time-card-select'

//         if (timesAfternoonDiv.children[i].textContent === '01:00:00 pm') {
//           // customerAppointmentDayAndTime.appointmentTime = '13:00:00'
//         } else if (timesAfternoonDiv.children[i].textContent === '01:30:00 pm') {
//           // customerAppointmentDayAndTime.appointmentTime = '13:30:00'
//         } else if (timesAfternoonDiv.children[i].textContent === '02:00:00 pm') {
//           // customerAppointmentDayAndTime.appointmentTime = '14:00:00'
//         } else if (timesAfternoonDiv.children[i].textContent === '2:30:00 pm') {
//           // customerAppointmentDayAndTime.appointmentTime = '14:30:00'
//         } else if (timesAfternoonDiv.children[i].textContent === '03:00:00 pm') {
//           // customerAppointmentDayAndTime.appointmentTime = '15:00:00'
//         } else if (timesAfternoonDiv.children[i].textContent === '03:30:00 pm') {
//           // customerAppointmentDayAndTime.appointmentTime = '15:30:00'
//         } else if (timesAfternoonDiv.children[i].textContent === '04:00:00 pm') {
//           // customerAppointmentDayAndTime.appointmentTime = '16:00:00'
//         } else if (timesAfternoonDiv.children[i].textContent === '04:30:00 pm') {
//           // customerAppointmentDayAndTime.appointmentTime = '16:30:00'
//         } else if (timesAfternoonDiv.children[i].textContent === '05:00:00 pm') {
//           // customerAppointmentDayAndTime.appointmentTime = '17:00:00'
//         } else if (timesAfternoonDiv.children[i].textContent === '05:30:00 pm') {
//           // customerAppointmentDayAndTime.appointmentTime = '17:30:00'
//         }
//       } else {
//           timesAfternoonDiv.children[i].className = 'time-card'
//         }
//     }

//     for (let i = 0; i < monthsListArr.length; i ++) {
//       let currentMonth
//       if(calMonth.textContent === monthsListArr[i]) {
//         console.log(monthsListArr[i])
//         if (monthsListArr[i] === 'January') {
//           currentMonth = '01'
//         } else if (monthsListArr[i] === 'February') {
//           currentMonth = '02'
//         } else if (monthsListArr[i] === 'March') {
//           currentMonth = '03'
//         } else if (monthsListArr[i] === 'April') {
//           currentMonth = '04'
//         } else if (monthsListArr[i] === 'May') {
//           currentMonth = '05'
//         } else if (monthsListArr[i] === 'June') {
//           currentMonth = '06'
//         } else if (monthsListArr[i] === 'July') {
//           currentMonth = '07'
//         } else if (monthsListArr[i] === 'August') {
//           currentMonth = '08'
//         } else if (monthsListArr[i] === 'September') {
//           currentMonth = '09'
//         } else if (monthsListArr[i] === 'October') {
//           currentMonth = '10'
//         } else if (monthsListArr[i] === 'November') {
//           currentMonth = '11'
//         } else if (monthsListArr[i] === 'December') {
//           currentMonth = '12'
//         }
//         // customerPhoneBooking.appointmentDayAndTime = `${currentYear}-${currentMonth}-${customerAppointmentDayAndTime.appointmentDay}T${customerAppointmentDayAndTime.appointmentTime}.00Z`
//       }
//     }

//     // console.log(customerAppointmentDayAndTime)
//     console.log(customerPhoneBooking)  
//   })

//   // evening time clicked and sent to the customerPhoneBooking object (time)
//   timesEveningDiv.addEventListener('click', (event) => {
//     for (let i = 0; i < timesEveningDiv.children.length; i++) {
//     if (event.target === timesEveningDiv.children[i]) {
//       for (let i = 0; i < timesMorningDiv.children.length; i++) {
//         timesMorningDiv.children[i].className = 'time-card'
//       }
//       for (let i = 0; i < timesAfternoonDiv.children.length; i++) {
//       timesAfternoonDiv.children[i].className = 'time-card'
//       } 
//       timesEveningDiv.children[i].className = 'time-card time-card-select'
//       if (timesEveningDiv.children[i].textContent === '06:00:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '18:00:00'
//       } else if (timesEveningDiv.children[i].textContent === '06:30:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '18:30:00'
//       } else if (timesEveningDiv.children[i].textContent === '07:00:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '19:00:00'
//       } else if (timesEveningDiv.children[i].textContent === '07:30:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '19:30:00'
//       }  else if (timesEveningDiv.children[i].textContent === '08:00:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '20:00:00'
//       } else if (timesEveningDiv.children[i].textContent === '08:30:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '20:30:00'
//       }  else if (timesEveningDiv.children[i].textContent === '09:00:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '21:00:00'
//       } else if (timesEveningDiv.children[i].textContent === '09:30:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '21:30:00'
//       }  else if (timesEveningDiv.children[i].textContent === '10:00:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '22:00:00'
//       } else if (timesEveningDiv.children[i].textContent === '10:30:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '22:30:00'
//       }  else if (timesEveningDiv.children[i].textContent === '11:00:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '23:00:00'
//       } else if (timesEveningDiv.children[i].textContent === '11:30:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '23:30:00'
//       }  else if (timesEveningDiv.children[i].textContent === '12:00:00 pm') {
//         // customerAppointmentDayAndTime.appointmentTime = '00:00:00'
//       } 
//     } else {
//         timesEveningDiv.children[i].className = 'time-card'
//       }
//     }

//     for (let i = 0; i < monthsListArr.length; i ++) {
//       let currentMonth
//       if(calMonth.textContent === monthsListArr[i]) {
//         console.log(monthsListArr[i])
//         if (monthsListArr[i] === 'January') {
//           currentMonth = '01'
//         } else if (monthsListArr[i] === 'February') {
//           currentMonth = '02'
//         } else if (monthsListArr[i] === 'March') {
//           currentMonth = '03'
//         } else if (monthsListArr[i] === 'April') {
//           currentMonth = '04'
//         } else if (monthsListArr[i] === 'May') {
//           currentMonth = '05'
//         } else if (monthsListArr[i] === 'June') {
//           currentMonth = '06'
//         } else if (monthsListArr[i] === 'July') {
//           currentMonth = '07'
//         } else if (monthsListArr[i] === 'August') {
//           currentMonth = '08'
//         } else if (monthsListArr[i] === 'September') {
//           currentMonth = '09'
//         } else if (monthsListArr[i] === 'October') {
//           currentMonth = '10'
//         } else if (monthsListArr[i] === 'November') {
//           currentMonth = '11'
//         } else if (monthsListArr[i] === 'December') {
//           currentMonth = '12'
//         }
//         // customerPhoneBooking.appointmentDayAndTime = `${currentYear}-${currentMonth}-${customerAppointmentDayAndTime.appointmentDay}T${customerAppointmentDayAndTime.appointmentTime}.00Z`
//       }
//     }

//     // console.log(customerAppointmentDayAndTime)
//     console.log(customerPhoneBooking)  

//   })

//   // next calendar button click
//   bookingModalS1NextBtnCal.addEventListener("click", () => {
//     calDaysDiv = []
//     calDaysAvailable = []
//     currMonthAvailableTimes = []    

//     date.setMonth(date.getMonth() + 1)
//     currentYear = date.getFullYear()
//     date.setFullYear(currentYear)

//     console.log(date.getMonth()) // 0
//     console.log(currentYear) // 2021 because it was defined alreadt as date.getFullYear which was changed yet

//     console.log(newAvailableTimeArr[newAvailableTimeArr.length - 1].getMonth())
    
//     // styles the 
//     // for (let i = 0; i < timesMorningDiv.children.length; i++) {
//     //   timesMorningDiv.children[i].className = 'time-card'
//     // }
//     // for (let i = 0; i < timesAfternoonDiv.children.length; i++) {
//     //  timesAfternoonDiv.children[i].className = 'time-card'
//     // } 
//     // for (let i = 0; i < timesEveningDiv.children.length; i++) {
//     //   timesEveningDiv.children[i].className = 'time-card'
//     // } 

//     bookingModalS1RenderCalendar()

//     for (let i = 0; i < 12; i++) {
//       if (monthsList[i] === calMonth.innerHTML) {
//         newCalMonth = i
//         // console.log(newCalMonth)
//       }
//     }

//     calDaysDiv = document.getElementById('days-days')

//     let dayMonthCount = date.getMonth()
//     let calDays2 = document.querySelectorAll('.cal-days')

//     // filter through all available times and create current month available times based on calendar month
//     for (let i = 0; i < newAvailableTimeArr.length; i++) {
//       let availTimeGetMonth = newAvailableTimeArr[i].getMonth()
//       // console.log(arr)
//       if(availTimeGetMonth === dayMonthCount) { // set this equal to a count out of 12
//       currMonthAvailableTimes.push(newAvailableTimeArr[i])
//       } else { 
//         console.log('Just leave the rest alone...')
//       }
//     }

//     console.log(currMonthAvailableTimes)
    
//     // style calendar days based on current calendar month available times
//     currMonthAvailableTimes.forEach((item) => {  
//       for (let i = 0; i < calDays2.length; i++) {
//         if (item.getDate() === parseInt(calDays2[i].textContent) && newCalMonth === item.getMonth()) { 
//           calDays2[i].className = 'cal-days cal-days-style'
//         }
//       }
//     })

//     calDaysAvailable = calDaysDiv.querySelectorAll('.cal-days-style')
//   })

//   // previous click
//   bookingModalS1PrevBtnCal.addEventListener('click', () => {
//     calDaysDiv = []
//     calDaysAvailable = []
//     currMonthAvailableTimes = []

//     if (date.getMonth() === currentMonth1) {
//       date.setMonth(currentMonth1)
//       currentYear = date.getFullYear()
//       date.setFullYear(currentYear)
//     } else if (date.getMonth() === 0) {
//       date.setMonth(currentMonth1)
//       currentYear = date.getFullYear() - 1
//       date.setFullYear(currentYear)
//     } else {
//       date.setMonth(date.getMonth() - 1)
//       currentYear = date.getFullYear()
//       date.setFullYear(currentYear)
//     }

//     console.log(currentYear)
//     console.log(date.getMonth())

//     // for (let i = 0; i < timesMorningDiv.children.length; i++) {
//     //   timesMorningDiv.children[i].className = 'time-card'
//     // }
//     // for (let i = 0; i < timesAfternoonDiv.children.length; i++) {
//     //  timesAfternoonDiv.children[i].className = 'time-card'
//     // } 
//     // for (let i = 0; i < timesEveningDiv.children.length; i++) {
//     //   timesEveningDiv.children[i].className = 'time-card'
//     // } 

//     bookingModalS1RenderCalendar()

//     for (let i = 0; i < 12; i++) {
//       if (monthsList[i] === calMonth.innerHTML) {
//         newCalMonth = i
//       }
//     }

//     calDaysDiv = document.getElementById('days-days')
    
//     let dayMonthCount2 = date.getMonth()
//     let calDays2 = document.querySelectorAll('.cal-days')

//     console.log(calDays2)

//     // filter through all available times and create current month available times based on calendar month
//     for (let i = 0; i < newAvailableTimeArr.length; i++) {
//       let availTimeGetMonth = newAvailableTimeArr[i].getMonth()
//       // console.log(arr)
//       if(availTimeGetMonth === dayMonthCount2) { // set this equal to a count out of 12
//         currMonthAvailableTimes.push(newAvailableTimeArr[i])
//       } else {
//         // nextMonthAvailableTimes = []
//         // date2.setMonth(newAvailableTimeArr[0].getMonth())
//       }
//     }

//     console.log(currMonthAvailableTimes)
    
//     // style calendar days based on current calendar month available times
//     currMonthAvailableTimes.forEach((item) => {   
//       for (let i = 0; i < calDays2.length; i++) {
//         if (item.getDate() === parseInt(calDays2[i].textContent) && newCalMonth === item.getMonth()) {
//           calDays2[i].className = 'cal-days cal-days-style'
//         }
//       }
//     })

//     calDaysAvailable = calDaysDiv.querySelectorAll('.cal-days-style')
//   })
// }

// retrieveSquareAvailability() 

// // book phone counsultation
// async function bookPhoneConsultation() {
//   const locationForm = document.getElementById('location-form')
//   const staffMemberContainer = document.getElementById('select-staff-container')
//   const selectDateAndTimeContainer = document.getElementById('select-date-and-time-container')
//   const enterDetailsContainer = document.getElementById('enter-details-container')
//   const edLoader = document.getElementById('ed-loader-container')
//   const edSuccess = document.getElementById('ed-success-container')

//   let serviceCounter1 = 0

//   const pcIntro = document.getElementById('pc-intro')
//   const sideBarDetails = document.getElementById('sidebar-details')
//   const sideBarSMBtn = document.getElementById('sidebar-staff-member-btn')
//   const sideBarSMEdit = document.getElementById('sidebar-staff-edit')
//   const sideBarSMDiv = document.getElementById('sidebar-staff-member')
//   const sideBarSDANDTBtn = document.getElementById('sidebar-customer-date-and-time-btn')
//   const sideBarSDANDTEdit = document.getElementById('sidebar-customer-date-and-time-edit')
//   const sideBarSDANDTDiv = document.getElementById('sidebar-customer-date-and-time')

//   const sideBarEDBtn = document.getElementById('sidebar-customer-details-btn')
//   const sideBarEDEdit = document.getElementById('sidebar-enter-details-edit')
//   const sideBarEDDiv = document.getElementById('sidebar-customer-details')

//   const footerModalNextBtn = document.getElementById('next-footer-modal-btn')
//   const footerModalNextText = document.getElementById('next-footer-modal-btn-text')
//   const footerModalBackBtn = document.getElementById('back-footer-modal-btn')
//   const footerModalBackText = document.getElementById('back-footer-modal-btn-text')

//   if (serviceCounter1 <= 0) {
//     serviceCounter1 = 0
//     footerModalBackBtn.className = 'back-footer-modal-btn disable-footer-modal-btn'
//     footerModalBackText.className = 'footer-modal-btn-hide'

//     footerModalNextBtn.className = 'next-footer-modal-btn'
//     footerModalNextText.className = 'footer-modal-btn-show'
//   }

//   footerModalNextBtn.addEventListener('click', ()=> {
//     serviceCounter1 ++
//     if (serviceCounter1 === 1) {
//       sideBarDetails.className = 'sidebar-details'

//       pcIntro.className = 'phone-consultation-intro hide-container'
//       locationForm.className = 'phone-consultation-form'
//       staffMemberContainer.className = 'select-staff-container'
//       selectDateAndTimeContainer.className = 'select-date-and-time-container hide-container'
//       enterDetailsContainer.className = 'enter-details-container hide-container'

//       footerModalBackBtn.className = 'back-footer-modal-btn'
//       footerModalBackText.className = 'footer-modal-btn-show'

//       console.log('peace peace 304333452')
//     } else if (serviceCounter1 === 2) {
//       staffMemberContainer.className = 'select-staff-container hide-container'
//       selectDateAndTimeContainer.className = 'select-date-and-time-container'
//       enterDetailsContainer.className = 'enter-details-container hide-container'

//     } else if (serviceCounter1 === 3) {
//       staffMemberContainer.className = 'select-staff-container hide-container'
//       selectDateAndTimeContainer.className = 'select-date-and-time-container hide-container'
//       enterDetailsContainer.className = 'enter-details-container'

//       footerModalBackBtn.className = 'back-footer-modal-btn'
//       footerModalBackText.className = 'footer-modal-btn-show'

//       footerModalNextBtn.className = 'next-footer-modal-btn disable-footer-modal-btn'
//       footerModalNextText.className = 'footer-modal-btn-hide'

//       serviceCounter1 = 3
//     }

//     if (serviceCounter1 > 3) {
//       serviceCounter1 = 3
//     }

//     console.log(serviceCounter1)
//   })

//   footerModalBackBtn.addEventListener('click', ()=> {
//     if (serviceCounter1 === 3) {
//       selectDateAndTimeContainer.className = 'select-date-and-time-container'
//       enterDetailsContainer.className = 'enter-details-container hide-container'
//       staffMemberContainer.className = 'select-staff-container hide-container'
//       pcIntro.className = 'phone-consultation-intro hide-container'

//       footerModalBackBtn.className = 'back-footer-modal-btn'
//       footerModalBackText.className = 'footer-modal-btn-show'

//       footerModalNextBtn.className = 'next-footer-modal-btn'
//       footerModalNextText.className = 'footer-modal-btn-show'

//       serviceCounter1 = 2
//     } else if (serviceCounter1 === 2) {
//       staffMemberContainer.className = 'select-staff-container'
//       selectDateAndTimeContainer.className = 'select-date-and-time-container hide-container'
//       enterDetailsContainer.className = 'enter-details-container hide-container'
//       pcIntro.className = 'phone-consultation-intro hide-container'

//       serviceCounter1 = 1
//     } else if (serviceCounter1 === 1) {
//       pcIntro.className = 'phone-consultation-intro'
//       sideBarDetails.className = 'sidebar-details hide-container'
//       locationForm.className = 'phone-consultation-form hide-container'
//       staffMemberContainer.className = 'select-staff-container hide-container'
//       selectDateAndTimeContainer.className = 'select-date-and-time-container hide-container'
//       enterDetailsContainer.className = 'enter-details-container hide-container'

//       footerModalBackBtn.className = 'back-footer-modal-btn disable-footer-modal-btn'
//       footerModalBackText.className = 'footer-modal-btn-hide'

//       footerModalNextBtn.className = 'next-footer-modal-btn'
//       footerModalNextText.className = 'footer-modal-btn-show'

//       serviceCounter1 = 0
//     }
//     console.log(serviceCounter1)
//   })

//   // show current phone number in sidebar
//   if (localStorage.getItem('currentUser')) {
//     let newPElement = document.createElement('p')

//     let currPhone = JSON.parse(localStorage.getItem('currentUser')).phone_number 
//     let currPhoneSlice = `(${currPhone.slice(0,3)})-${currPhone.slice(3,6)}-${currPhone.slice(6, 10)}`

//     newPElement.textContent = `Phone: ${currPhoneSlice}`
//     sideBarEDDiv.appendChild(newPElement)
//   }

//   // if staffMember sidebar section clicked
//   sideBarSMEdit.addEventListener('click', () => {
//     staffMemberContainer.className = 'select-staff-container'

//     selectDateAndTimeContainer.className = 'select-date-and-time-container hide-container'
//     enterDetailsContainer.className = 'enter-details-container hide-container'

//     sideBarSMBtn.className = 'sidebar-staff-member-btn sb-selected'
//     sideBarSDANDTBtn.className = 'sidebar-customer-date-and-time-btn'
//     sideBarEDBtn.className = 'sidebar-customer-details-btn'

//     serviceCounter1 = 0

//     footerModalBackBtn.className = 'back-footer-modal-btn disable-footer-modal-btn'
//     footerModalBackText.className = 'footer-modal-btn-hide'

//     footerModalNextBtn.className = 'next-footer-modal-btn'
//     footerModalNextText.className = 'footer-modal-btn-show'

//   })

//   // if selectDateAndTime sidebar section clicked
//   sideBarSDANDTEdit.addEventListener('click', () => {
//     selectDateAndTimeContainer.className = 'select-date-and-time-container'

//     staffMemberContainer.className = 'select-staff-container hide-container'
//     enterDetailsContainer.className = 'enter-details-container hide-container'

//     sideBarSDANDTBtn.className = 'sidebar-customer-date-and-time-btn sb-selected'
//     sideBarEDBtn.className = 'sidebar-customer-details-btn'
//     sideBarSMBtn.className = 'sidebar-staff-member-btn'

    
//     footerModalNextBtn.className = 'next-footer-modal-btn'
//     footerModalNextText.className = 'footer-modal-btn-show'


//     footerModalBackBtn.className = 'back-footer-modal-btn'
//     footerModalBackText.className = 'footer-modal-btn-show'

//     serviceCounter1 = 1
//   })

//   // if enterDetails sidebar section clicked
//   sideBarEDEdit.addEventListener('click', () => {
//     enterDetailsContainer.className = 'enter-details-container'

//     staffMemberContainer.className = 'select-staff-container hide-container'
//     selectDateAndTimeContainer.className = 'select-date-and-time-container hide-container'

//     sideBarEDBtn.className = 'sidebar-customer-details-btn sb-selected'
//     sideBarSDANDTBtn.className = 'sidebar-customer-date-and-time-btn'
//     sideBarSMBtn.className = 'sidebar-staff-member-btn'

//     serviceCounter1 = 2

//     footerModalBackBtn.className = 'back-footer-modal-btn'
//     footerModalBackText.className = 'footer-modal-btn-show'

//     footerModalNextBtn.className = 'next-footer-modal-btn disable-footer-modal-btn'
//     footerModalNextText.className = 'footer-modal-btn-hide'
//   }) 

//   // Show selected container style in sidebar
//   if (staffMemberContainer.className === 'select-staff-container') {
//     sideBarSMBtn.className = 'sidebar-staff-member-btn sb-selected'

//     sideBarSDANDTBtn.className = 'sidebar-customer-date-and-time-btn'
//     sideBarEDBtn.className = 'sidebar-customer-details-btn'
//   }  else if (selectDateAndTimeContainer.className = 'select-date-and-time-container') {
//     sideBarSDANDTBtn.className = 'sidebar-customer-date-and-time-btn sb-selected'

//     sideBarSMBtn.className = 'sidebar-staff-member-btn'
//     sideBarEDBtn.className = 'sidebar-customer-details-btn'
//   } else if (enterDetailsContainer.className = 'enter-details-container') {
//     sideBarEDBtn.className = 'sidebar-customer-details-btn sb-selected'
    
//     sideBarSMBtn.className = 'sidebar-staff-member-btn'
//     sideBarSDANDTBtn.className = 'sidebar-customer-date-and-time-btn'
//   }
  

//   /***********[Square Bookings Api]************
//    * Retrieve List of Team Members
//    */
//   // retrieve list of team members from Square API // retrieve list of team members from Square API 
//   const response = await fetch('/retrieveTeamMemeberBookingProfile', { method: 'get' })
//   const data = await response.json()

//   allTeamMembers = data
//   console.log(data)

//   const teamMembers = data.team_member_booking_profiles
//   console.log(teamMembers)


//   // staff member container // staff member container // staff member container
//   const selectStaffDiv = document.getElementById('staff-container-contents')
//   const staffMemberDiv = document.getElementById('staff-member-div')  

//   // show list of staff members from fetched data
//   for (let i = 0; i < teamMembers.length; i++) {
//     selectStaffDiv.innerHTML = `
//       <p>${teamMembers[i].display_name}</p>
//     `
//     // staffMemberDiv.appendChild(btn)
//   }

//   // when staff member is clicked stlye the div
//   staffMemberDiv.addEventListener('click', (event) => {
//     let newPElement = document.createElement('p')
//     for (let i = 0; i < staffMemberDiv.children.length; i++) {
//       if (event.target === staffMemberDiv.children[i]) {
//         sideBarSMDiv.lastChild.remove()
//         newPElement.textContent = staffMemberDiv.children[i].textContent
//         sideBarSMDiv.appendChild(newPElement)

//         staffMemberDiv.children[i].className = 'selected-staff-member'
//         customerPhoneBooking.booking.appointment_segments[0].team_member_id = teamMembers[i].team_member_id
//         console.log(customerPhoneBooking)
//       } else if (event.target === selectStaffDiv.children[i] || event.target === selectStaffDiv.children[i + 1]) {
//         sideBarSMDiv.lastChild.remove()
//         newPElement.textContent = staffMemberDiv.children[i].textContent
//         sideBarSMDiv.appendChild(newPElement)

//         staffMemberDiv.children[i].className = 'selected-staff-member'
//         customerPhoneBooking.booking.appointment_segments[0].team_member_id = teamMembers[i].team_member_id
//         console.log(customerPhoneBooking)
//       } 
//     }
//   })

//   // show selected staff member in sidebar
//   for (let i = 0; i < staffMemberDiv.children.length; i++) {
//     if (staffMemberDiv.children[i].className === 'selected-staff-member') {
//       sideBarSMBtn.className = 'sidebar-staff-member-btn sb-selected'
//     } else if (!staffMemberDiv.children[i].className === 'selected-staff-member' && !staffMemberContainer.className === 'select-staff-container') {
//       sideBarSMBtn.className = 'sidebar-staff-member-btn'
//     }
//   }

// // --- --- --- // --- --- --- // --- --- --- // --- --- --- // --- --- --- //


// // PICK A LOCATION CONTAINER
//   // const selectCompanyLocation = document.getElementById('company-location-contents')
//   // const selectUserLocation = document.getElementById('user-location-contents')

//   // // click on company location
//   // selectCompanyLocation.addEventListener('click', () => {
//   //   selectUserLocation.className = 'user-location-contents'
//   //   selectCompanyLocation.className = 'company-location-contents location-selected'
//   //   if (sideBarSLDiv.children[1]) {
//   //     sideBarSLDiv.children[1].remove()
//   //   }
//   //   let newPElement = document.createElement('p')
//   //   newPElement.textContent = '1234 Main St, 10566 Westchester, NY'
//   //   sideBarSLDiv.appendChild(newPElement)
//   // })

//   // // click on user location
//   // selectUserLocation.addEventListener('click', () => {
//   //   selectCompanyLocation.className = 'company-location-contents'
//   //   selectUserLocation.className = 'user-location-contents location-selected'
//   //   if (sideBarSLDiv.children[1]) {
//   //     sideBarSLDiv.children[1].remove()
//   //   }
//   //   let newPElement = document.createElement('p')
//   //   newPElement.textContent = `We will be meeting at your location!`
//   //   sideBarSLDiv.appendChild(newPElement) 
//   // })

//   timesMorningDiv.addEventListener('click', (event) => {
//     for (let i = 0; i < timesMorningDiv.children.length; i++) {
//      if (event.target === timesMorningDiv.children[i]) {
//       let clickedTime = timesMorningDiv.children[i].textContent
//       let newPElement = document.createElement('p')
//       if (sideBarSDANDTDiv.children[1]) {
//         sideBarSDANDTDiv.children[1].remove()
//       }
//       newPElement.textContent = `We will see you on ${monthsListArr[currentMonth - 1]} the ${selectedCalDaysTarget}th at ${clickedTime}`
//       sideBarSDANDTDiv.appendChild(newPElement)
//      } 
//     }
//   })

//   timesAfternoonDiv.addEventListener('click', (event) => {
//     for (let i = 0; i < timesAfternoonDiv.children.length; i++) {
//      if (event.target === timesAfternoonDiv.children[i]) {
//       let clickedTime = timesAfternoonDiv.children[i].textContent
//       let newPElement = document.createElement('p')
//       if (sideBarSDANDTDiv.children[1]) {
//         sideBarSDANDTDiv.children[1].remove()
//       }
//       newPElement.textContent = `We will see you on ${monthsListArr[currentMonth - 1]} the ${selectedCalDaysTarget}th at ${clickedTime}`
//       sideBarSDANDTDiv.appendChild(newPElement)
//      } 
//     }
//   })

//   timesEveningDiv.addEventListener('click', (event) => {
//     for (let i = 0; i < timesEveningDiv.children.length; i++) {
//      if (event.target === timesEveningDiv.children[i]) {
//       let clickedTime = timesEveningDiv.children[i].textContent
//       let newPElement = document.createElement('p')
//       if (sideBarSDANDTDiv.children[1]) {
//         sideBarSDANDTDiv.children[1].remove()
//       }
//       newPElement.textContent = `We will see you on ${monthsListArr[currentMonth - 1]} the ${selectedCalDaysTarget}th at ${clickedTime}`
//       sideBarSDANDTDiv.appendChild(newPElement)
//      } 
//     }
//   })

//   // enter details container // enter detials container // enter details container
//   const checkbox1 = document.getElementById('ed-checkbox-1')
//   let checkboxCtr = false
     
//   const edAddyHeader = document.getElementById('ed-addy-header')
//   const edCurrPhoneNum = document.getElementById('ed-curr-phone')

//   let currPhone = JSON.parse(localStorage.getItem('currentUser')).phone_number 
//   let currPhoneSlice = `(${currPhone.slice(0,3)})-${currPhone.slice(3,6)}-${currPhone.slice(6, 10)}`

//   const edPhoneDetails = document.getElementById('ed-phone-details')
//   const edPhoneError = document.getElementById('ed-phone-error')
//   const edPhoneUpdated = document.getElementById('ed-phone-updated')
//   const edPhone = document.getElementById('ed-phone')

//   const edUpdateNumBox = document.getElementById('ed-update-number')
//   const edUpdateNumBtn = document.getElementById('ed-update-number-btn')

//   const edPhoneNoteDetail = document.getElementById('ed-phone-note-detail')
//   const edNotes = document.getElementById('ed-notes')

//   /* use for other services */
//   // const edAddyTypeDetails = document.getElementById('ed-addytype-details')
//   // const edAddressDetails = document.getElementById('ed-address-details')
//   // const edAddyStateDetails = document.getElementById('ed-state-details')
//   // const edAddyCityDetails = document.getElementById('ed-city-details')
//   // const edAddyZipDetails = document.getElementById('ed-zipcode-details')

//   const phoneCheck1 = /\([0-9]{3,3}\)\-[0-9]{3,3}\-[0-9]{4,4}$/ // (000)-000-0000
//   const phoneCheck2 = /^[0-9]{10,10}$/ // 0000000000
//   const phoneCheck3 = /1\([0-9]{3,3}\)\-[0-9]{3,3}\-[0-9]{4,4}$/ // 1(000)-000-0000
//   const phoneCheck4 = /\([0-9]{3,3}\)[0-9]{3,3}\-[0-9]{4,4}$/ // (000)000-0000
//   const phoneCheck5 = /[0-9]{3,3}\-[0-9]{3,3}\-[0-9]{4,4}$/ // 000-000-0000
//   const phoneCheck6 = /[0-9]{3,3}\.[0-9]{3,3}\.[0-9]{4,4}$/ // 000.000.0000

//   const notesCheck = /[A-Za-z0-9\,\.\/\<\>\?\;\'\:\"\[\]\{\}\|\`\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=]/

//   // for adding another address to profile
//   let newCustLocId = {
//     location: {
//       address: {
//         address_line_1: '',
//         administrative_district_level_1: '',
//         first_name: '',
//         last_name: '',
//         locality: '',
//         postal_code: ''
//       },
//       name: ''
//     } 
//   }

//   // set the current phone number on edCurrPhoneNum div
//   if (!checkbox1.checked && !checkboxCtr && localStorage.getItem('currentUser')) {
//     edCurrPhoneNum.textContent = `${currPhoneSlice}`
//   } 

//   // show new number div when checkbox1 is clicked
//   checkbox1.addEventListener('click', ()=> {
//     if (checkbox1.checked) {
//       edAddyHeader.className = 'ed-header-2'
//       edPhoneDetails.className = 'ed-phone-details'
//       edPhoneNoteDetail.className ='ed-phone-note-detail'
//       edUpdateNumBox.className = 'ed-update-number'
//     } else {
//       edAddyHeader.className = 'ed-header-2 hide-container'
//       edPhoneDetails.className = 'ed-phone-details hide-container'
//       edPhoneNoteDetail.className = 'ed-phone-note-detail hide-container'
//       edUpdateNumBox.className = 'ed-update-number hide-container' 
//     }
//   })

//   // book appointment submit btn // book appointment submit btn // book appointment submit btn
//   const bookPCAppointmentBtn = document.getElementById('p-consul-submit-btn')

//   let soPoshLocId = '' // goes with creating booking

//   console.log(edCurrPhoneNum.textContent)

//   // update number is clicked
//   edUpdateNumBtn.addEventListener('click', ()=> {
//   
//   let filteredCleanPhoneValue2 = edCurrPhoneNum.textContent.replace(filterPhoneValue, '')

//   // check to make sure phone input doesn't already exist in square api and mongodb
//   if (filteredCleanPhoneValue === filteredCleanPhoneValue2) {
//     edPhoneError.innerHTML = `
//       <p class='error show'>This phone number already exists</p>
//     `
//     edPhone.className = 'input-invalid'
//     console.log('this phone number exists already')
//   } else {
//     // check the value from the phone input
//     if (edPhone.value.match(phoneCheck1) || edPhone.value.match(phoneCheck2) || edPhone.value.match(phoneCheck3) || edPhone.value.match(phoneCheck4) || edPhone.value.match(phoneCheck5) || edPhone.value.match(phoneCheck6)) {
//       edPhoneError.children[0].className = 'error hide'
//       edPhone.className = 'input-valid'

//       // send updated number to its own object
//       updateUserPhone1.phone_number = filteredCleanPhoneValue

//       // create updated list -- to send to server -- to update mongodb and square api 
//       updateUserProf.details.address_line_1 = JSON.parse(localStorage.getItem('currentUser')).address.address_line_1
//       updateUserProf.details.administrative_district_level_1 = JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1
//       updateUserProf.details.locality = JSON.parse(localStorage.getItem('currentUser')).address.locality
//       updateUserProf.details.postal_code = JSON.parse(localStorage.getItem('currentUser')).address.postal_code

//       updateUserProf.details.birthday = JSON.parse(localStorage.getItem('currentUser')).birthday
//       updateUserProf.details.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
//       updateUserProf.details.family_name = JSON.parse(localStorage.getItem('currentUser')).family_name
//       updateUserProf.details.given_name = JSON.parse(localStorage.getItem('currentUser')).given_name
//       updateUserProf.details.idempotency_key = JSON.parse(localStorage.getItem('currentUser')).idempotency_key
//       updateUserProf.details.nickname = JSON.parse(localStorage.getItem('currentUser')).nickname
//       updateUserProf.details.note = JSON.parse(localStorage.getItem('currentUser')).note
//       updateUserProf.details.phone_number = updateUserPhone1.phone_number // updated phone number
//       updateUserProf.details.password = JSON.parse(localStorage.getItem('currentUser')).password
//       updateUserProf.details.password2 = JSON.parse(localStorage.getItem('currentUser')).password2

//       // update user settings with new number in mongodb
//       async function updateUserPhone() {
//         // req & res
//         const sendNewPhone = await fetch(`/updatePhone/${JSON.stringify(updateUserProf.details)}`, { method: 'post' })
//         const resSendNewPhone = await sendNewPhone.json()

//         console.log(resSendNewPhone)
//       }

//         updateUserPhone()
//           .then( () => { 
//             console.log('the users data has been updated on mongodb') 
//           } )
//           .catch((error) => { console.log(error) })

//       // update user settings with new number in square api
//       async function getAllSquareCustomers() {
//         // req & res
//         const getAllSquareCustomers = await fetch('/getAllSquareCustomers')
//         const resgetAllSquareCustomers = await getAllSquareCustomers.json()

//         console.log(resgetAllSquareCustomers)

//         for (let i = 0; i < resgetAllSquareCustomers.customers.length; i++) {
//           if (resgetAllSquareCustomers.customers[i].given_name === JSON.parse(localStorage.getItem('currentUser')).given_name) {
//             updateUserProf.details.id = resgetAllSquareCustomers.customers[i].id

//             async function updateUserSquare() {
//               // req & res
//               const updatedReq = await fetch(`/updateUserSquare/${JSON.stringify(updateUserProf.details)}`, { method: 'put' })
//               const resUpdatedReq = await updatedReq.json()

//               console.log(resUpdatedReq)
//             }
//               updateUserSquare()
//                 .then ( () => { console.log('the users data has been updated on the square api') } )
//                 .catch( (error)=> { console.log(error) } )

//           }
//         }


//       }

//         getAllSquareCustomers()
//           .then( ()=> { 
//             console.log('all customers from square api have been recieved') 

//             async function getMongoDBCustomers() {
//               // req & res
//               const request = await fetch(`/getUserProfile/${JSON.stringify(updateUserProf.details)}`, { method: 'get' })
//               const data = await request.json()

//               console.log(data)

//               localStorage.removeItem('currentUser')
//               localStorage.setItem('currentUser', JSON.stringify(data[0]))

//               if (localStorage.getItem('currentUser')) {
//                 let newPElement = document.createElement('p')
            
//                 let currPhone = JSON.parse(localStorage.getItem('currentUser')).phone_number 
//                 let currPhoneSlice = `(${currPhone.slice(0,3)})-${currPhone.slice(3,6)}-${currPhone.slice(6, 10)}`
            
//                 newPElement.textContent = `Phone: ${currPhoneSlice}`
//                 sideBarEDDiv.innerHTML = `
//                 <div class="sidebar-customer-details-header">
//                   <a href='#' id="sidebar-customer-details-btn" class="sidebar-customer-details-btn">Enter Details</a>
//                   <div id='sidebar-enter-details-edit' class="edit">
//                     <i class="fas fa-edit"></i>
//                   </div>
//                 </div>
//                 `
//                 sideBarEDDiv.appendChild(newPElement)

//                 // display a message showing success in updated number **
//                 edPhoneNoteDetail.className = 'ed-phone-note-detail hide-container'
//                 edPhoneUpdated.className = 'ed-phone-updated' 
//                 edCurrPhoneNum.textContent = `${currPhoneSlice}`

//                 setTimeout(()=> {
//                   edPhoneDetails.className = 'ed-phone-details hide-container'
//                   edPhoneUpdated.className = 'ed-phone-updated hide-container'
//                   edUpdateNumBox.className = 'ed-update-number hide-container'
//                   edPhone.className = ''
//                   checkbox1.click()
//                 }, 1000)
//               }
//             }
//               getMongoDBCustomers()
//                 .then( ()=> console.log('retrieved the users profile from MongoDB') )
//                 .catch( (error)=> { console.log(error) } )
//           })
//           .catch( (error)=> { console.log(error) })


//     } else {
//       edPhoneError.innerHTML = `
//         <p class='error show'>This phone number is invalid</p>
//       `
//       edPhone.className = 'input-invalid'
//       console.log('this phone number is invalid')
//     }
//   }

//   })

//   // submit phone consultation btn is clicked //
//   bookPCAppointmentBtn.addEventListener('click', ()=> {
//     // ** Lets create a new booking! ** //

//     let selectedMonthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

//     let selectedYearInt
//     let selectedMonthInt
//     let selectedDateInt 
//     let selectedTimeInt
  
//     let custBookDANDT = ''

//     let timeBooked = new Date()

//     // get all customers from square api (customer id) -- send to customerPhoneBooking object
//     async function getAllCustomersS() {
//       // req & res
//       const request_s_cust = await fetch('/getAllSquareCustomers', { method: 'get' })
//       const res_request_s_cust = await request_s_cust.json()

//       console.log(res_request_s_cust)

//       for (let i = 0; i < res_request_s_cust.customers.length; i++) {
//         if (res_request_s_cust.customers[i].given_name === JSON.parse(localStorage.getItem('currentUser')).given_name) {
//           customerPhoneBooking.booking.customer_id = res_request_s_cust.customers[i].id
//         }
//       }
//     }
    

//       getAllCustomersS()
//         .then( ()=> { console.log('all the customers have been retrieved supremintel') } )
//         .catch( (error)=> { console.log(error) })

//     // get the customer note if there is one -- send to customerPhoneBooking object
//     customerPhoneBooking.booking.customer_note = edNotes.value

//     // get all the locations from the square api (location id) -- grab the default id -- send to the customerPhoneBooking object
//     async function getAllLocations() {
//       // req & res
//       const request_loc = await fetch('/gLocations', { method: 'get' })
//       const res_request_loc = await request_loc.json()

//       console.log(res_request_loc)

//       for (let i = 0; i < res_request_loc.locations.length; i++) {
//         if(res_request_loc.locations[i].name === 'Default Test Account') {
//           customerPhoneBooking.booking.location_id = res_request_loc.locations[i].id 
//         }
//       }
//     }

//       getAllLocations()
//         .then( ()=> { console.log('all the locations were retrieved supremeintel') } )
//         .catch( (error)=> { console.log(error) } )

//     // no seller note -- send to the customerPhoneBooking object
//     customerPhoneBooking.booking.seller_note = ''

//     // get the appointment day and time from sidebar -- send to the customerPhoneBooking object
//     if (sideBarSDANDTDiv.children.length !== 2) {
//       let newPElement = document.createElement('p')
//       newPElement.textContent = 'Select date and time!'
//       newPElement.className = 'input-invalid'
//       sideBarSDANDTDiv.appendChild(newPElement)
//     } else if (sideBarSDANDTDiv.children.length === 2 && sideBarSDANDTDiv.children[1].textContent !== 'Select date and time!') {
//       let selectedDateandTime = sideBarSDANDTDiv.children[1].textContent
//       console.log(selectedDateandTime)

//       let selectedMonth = selectedDateandTime.slice(19,22)
//       let selectedDate = selectedDateandTime.slice(31,33)
//       let selectedTime = selectedDateandTime.slice(39,50)
//       let selectedTime1

//       console.log(selectedMonth, selectedDate, selectedTime)

//       // find the selected month
//       for (let i = 0; i < selectedMonthsArr.length; i++) {
//         if (selectedMonthsArr[i] === selectedMonth) {
//           if (i < 10) {
//             selectedMonthInt = `0${i + 1}`
//           } else {
//             selectedMonthInt = i + 1
//           }      
//         }
//       }

//       // get the selected date
//       selectedDateInt = selectedDate

//       // get the selected time
//       if (selectedTime === '00:30:00') {
//         selectedTime1 = '00:30:00'
//       } else if (selectedTime === '01:00:00') {
//         selectedTime1 = '01:00:00'
//       } else if (selectedTime === '01:30:00 am') {
//         selectedTime1 = '01:30:00'
//       } else if (selectedTime === '02:00:00 am') {
//         selectedTime1 = '02:00:00'
//       } else if (selectedTime === '02:30:00 am') {
//         selectedTime1 = '02:30:00'
//       } else if (selectedTime === '03:00:00 am') {
//         selectedTime1 = '03:00:00'
//       } else if (selectedTime === '03:30:00 am') {
//         selectedTime1 = '03:30:00'
//       } else if (selectedTime === '04:00:00 am') {
//         selectedTime1 = '04:00:00'
//       } else if (selectedTime === '04:30:00 am') {
//         selectedTime1 = '04:30:00'
//       } else if (selectedTime === '05:00:00 am') {
//         selectedTime1 = '05:00:00'
//       } else if (selectedTime === '05:30:00 am') {
//         selectedTime1 = '05:30:00'
//       } else if (selectedTime === '06:00:00 am') {
//         selectedTime1 = '06:00:00'
//       } else if (selectedTime === '06:30:00 am') {
//         selectedTime1 = '06:30:00'
//       } else if (selectedTime === '07:00:00 am') {
//         selectedTime1 = '07:00:00'
//       } else if (selectedTime === '07:30:00 am') {
//         selectedTime1 = '07:30:00'
//       } else if (selectedTime === '08:00:00 am') {
//         selectedTime1 = '08:00:00'
//       } else if (selectedTime === '08:30:00 am') {
//         selectedTime1 = '08:30:00'
//       } else if (selectedTime === '09:00:00 am') {
//         selectedTime1 = '09:00:00'
//       } else if (selectedTime === '09:30:00 am') {
//         selectedTime1 = '09:30:00'
//       } else if (selectedTime === '10:00:00 am') {
//         selectedTime1 = '10:00:00'
//       } else if (selectedTime === '10:30:00 am') {
//         selectedTime1 = '10:30:00'
//       } else if (selectedTime === '11:00:00 am') {
//         selectedTime1 = '11:00:00'
//       } else if (selectedTime === '11:30:00 pm') {
//         selectedTime1 = '11:30:00'
//       } else if (selectedTime === '12:00:00 pm') {
//         selectedTime1 = '12:00:00'
//       } else if (selectedTime === '12:30:00 pm') {
//         selectedTime1 = '12:30:00'
//       } else if (selectedTime === '01:00:00 pm') {
//         selectedTime1 = '13:00:00'
//       } else if (selectedTime === '01:30:00 pm') {
//         selectedTime1 = '13:30:00'
//       } else if (selectedTime === '02:00:00 pm') {
//         selectedTime1 = '14:00:00'
//       } else if (selectedTime === '02:30:00 pm') {
//         selectedTime1 = '14:30:00'
//       } else if (selectedTime === '03:00:00 pm') {
//         selectedTime1 = '15:00:00'
//       } else if (selectedTime === '03:30:00 pm') {
//         selectedTime1 = '15:30:00'
//       } else if (selectedTime === '04:00:00 pm') {
//         selectedTime1 = '16:00:00'
//       } else if (selectedTime === '04:30:00 pm') {
//         selectedTime1 = '16:30:00'
//       } else if (selectedTime === '05:00:00 pm') {
//         selectedTime1 = '17:00:00'
//       } else if (selectedTime === '05:30:00 pm') {
//         selectedTime1 = '17:30:00'
//       } else if (selectedTime === '06:00:00 pm') {
//         selectedTime1 = '18:00:00'
//       } else if (selectedTime === '06:30:00 pm') {
//         selectedTime1 = '18:30:00'
//       } else if (selectedTime === '07:00:00 pm') {
//         selectedTime1 = '19:00:00'
//       } else if (selectedTime === '07:30:00 pm') {
//         selectedTime1 = '19:30:00'
//       } else if (selectedTime === '08:00:00 pm') {
//         selectedTime1 = '20:00:00'
//       } else if (selectedTime === '08:30:00 pm') {
//         selectedTime1 = '20:30:00'
//       } else if (selectedTime === '09:00:00 pm') {
//         selectedTime1 = '21:00:00'
//       } else if (selectedTime === '09:30:00 pm') {
//         selectedTime1 = '21:30:00'
//       } else if (selectedTime === '10:00:00 pm') {
//         selectedTime1 = '22:00:00'
//       } else if (selectedTime === '10:30:00 pm') {
//         selectedTime1 = '22:30:00'
//       } else if (selectedTime === '11:00:00 pm') {
//         selectedTime1 = '23:00:00'
//       } else if (selectedTime === '11:30:00 pm') {
//         selectedTime1 = '23:30:00'
//       } else if (selectedTime === '12:00:00 am') {
//         selectedTime1 = '24:00:00'
//       }  
      
//       selectedTimeInt = selectedTime1
      
//       // find the selected year
//       for (let i = 0; i < allAvailableTimes.availabilities.length; i++) {
//         let isThisTheYear = allAvailableTimes.availabilities[i].start_at.slice(0,4)
//         let isThisTheMonth = allAvailableTimes.availabilities[i].start_at.slice(5,7)
//         let isThisTheDate = allAvailableTimes.availabilities[i].start_at.slice(8,10)

//         console.log(isThisTheYear, isThisTheMonth, isThisTheDate)        

//         if (selectedMonthInt === isThisTheMonth && selectedDateInt === isThisTheDate) {
//           selectedYearInt = isThisTheYear
//         }
//       }

//       // push the full date to the custBDANDT object
//       custBookDANDT = `${selectedYearInt}-${selectedMonthInt}-${selectedDateInt}T${selectedTimeInt}-05:00`

//       console.log(custBookDANDT)
      
//       customerPhoneBooking.booking.start_at = custBookDANDT
//     }

//     // duration minutes have already been set to 20 minutes
    
//     // service variationID is already in the console -- send to the customerPhoneBooking object
//     // service variation version is already in the console -- send to the customerPhoneBooking object
//     for (let i = 0; i < allCatalogItems.objects.length; i++) {
//       if (allCatalogItems.objects[i].item_data.name === 'Women\'s Haircut') {
//         customerPhoneBooking.booking.appointment_segments[0].service_variation_id = allCatalogItems.objects[i].item_data.variations[0].id
//         customerPhoneBooking.booking.appointment_segments[0].service_variation_version = allCatalogItems.objects[i].item_data.variations[0].version
//       }
//     }

//     // team_member_id has already been added to customerBooking object on click

//     // prepare the customers booking email with details
//     const regex = /[\s\n]/g
//     const employeeName = sideBarSMDiv.children[1].textContent
//     let newCleanEmployee, first_half, second_half

//     if (employeeName.match(regex)) {
//       const cleanEmployee = sideBarSMDiv.children[1].textContent.replace(regex, '')

//       for(let i = 0; i < cleanEmployee.length; i++) {
//         if(cleanEmployee[i] === cleanEmployee[i].toUpperCase()) {
//           console.log(i)
//           if(i > 0) {
//             first_half = cleanEmployee.slice(0, i)
//             console.log(first_half)
//             second_half = cleanEmployee.slice(i, cleanEmployee.length)
//             newCleanEmployee = first_half + ' ' + second_half
//           }
//         }
//       }
//     }


//     newBookingConfirmation.details.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
//     newBookingConfirmation.details.appointment_time = customerPhoneBooking.booking.start_at
//     newBookingConfirmation.details.time_booked = String(timeBooked)
//     newBookingConfirmation.details.given_name = JSON.parse(localStorage.getItem('currentUser')).given_name
//     newBookingConfirmation.details.family_name = JSON.parse(localStorage.getItem('currentUser')).family_name
//     newBookingConfirmation.details.employee = newCleanEmployee
//     newBookingConfirmation.details.phone_number = JSON.parse(localStorage.getItem('currentUser')).phone_number
 

//     console.log(sideBarSMDiv.children[1].textContent)

//     console.log(newBookingConfirmation.details)
//     console.log(newBookingConfirmation.details.employee)

//     console.log(customerPhoneBooking)
//     console.log(customerPhoneBooking.booking.appointment_segments[0].duration_minutes)

//     // check to make sure all fields in object are filled
//     setTimeout(()=> {
//       if (customerPhoneBooking.booking.customer_id !== '' && customerPhoneBooking.booking_location_id !== '' && customerPhoneBooking.booking.start_at && customerPhoneBooking.booking.appointment_segments[0].duration_minutes !== '' && customerPhoneBooking.booking.appointment_segments[0].service_variation_id !== '' && customerPhoneBooking.booking.appointment_segments[0].service_variation_version !== '' && customerPhoneBooking.booking.appointment_segments[0].team_member_id !== '') {
//         console.log(customerPhoneBooking.booking.customer_id)
  
//         async function cPhoneBooking() {
//           // req & res
//           const spb_request = await fetch(`/cPhoneBooking/${JSON.stringify(customerPhoneBooking)}`, { method: 'post' })
//           const res_spb_request = await spb_request.json()
  
//           console.log(res_spb_request)
//         }
  
//           cPhoneBooking()
//             .then( ()=> { 
//               console.log('The booking has been sent to the express server') 
//               enterDetailsContainer.className = 'enter-details-container hide-container'
//               edLoader.className = 'ed-loader-container'
//               setTimeout(()=> {
//                 edLoader.className = 'ed-loader-container hide-container'
//                 edSuccess.className = 'ed-success-container' 
//               }, 700)
//             } )
//             .catch( (error)=> { console.log(error) } )


//         // send booking details to customers email
//         async function newBookingEmail() {
//           // req & res
//           const srequest = await fetch(`/newBookingEmail/${JSON.stringify(newBookingConfirmation.details)}`, { method: 'get' })
//           const sresponse_data = await srequest.json()
          
//           console.log(sresponse_data)
//         }
//           newBookingEmail()
//             .then(()=> { console.log('the phone consultation booking details have been sent to the customer via email') })
//             .catch((error)=> { console.log(error) })

//         // send booking details to customers phone
//         async function newBookingPhone() {
//           // req & res
//           const srequest = await fetch(`/newBookingPhone/${JSON.stringify(newBookingConfirmation.details)}`, { method: 'post' })
//           const srequest_data = await srequest.json()

//           console.log(srequest_data)
//         }
//           newBookingPhone()
//             .then(()=> { console.log('booking details have been sent to express') })
//             .catch((error)=> { console.log(error) })


//       } else {
//         console.log('Please make sure to select all required fields')
//       }
//     }, 1000)





//     // --then send fullly filled object to the server -- to then send to square api

//     // check if all values in the ed form are truthy
//     // if (edNotes.value.match(notesCheck) && edAddy1.value.match(addyCheck) && edCity.value.match(cityCheck) && edState.value && edZipCode.value.match(zipCodeCheck) && edBusiName.value.match(busiNameCheck)) {
//     //   let edPhoneFilt = edPhone.value.replace(filtPhoneCheck, '')
//     //   let locDate = new Date()
 
//     //   pConsulNewLoc.location.address.address_line_1 = edAddy1.value
//     //   pConsulNewLoc.location.address.administrative_district_level_1 = edState.value
//     //   pConsulNewLoc.location.address.first_name = edFsName.value
//     //   pConsulNewLoc.location.address.last_name = edLsName.value
//     //   pConsulNewLoc.location.address.postal_code = edZipCode.value
//     //   pConsulNewLoc.location.address.locality = edCity.value
//     //   customerPhoneBooking.customerNote = edNotes.value // customerPhoneBooking
//     //   pConsulNewLoc.location.business_email = edEmail.value
//     //   pConsulNewLoc.location.phone_number = edPhoneFilt
//     //   pConsulNewLoc.location.name = `${edBusiName.value} - ${locDate}`

//     //   console.log(pConsulNewLoc, 'This is the location object filled')
//     //   console.log(customerPhoneBooking)
//     // } else {
//     //   console.log('Peace lord all the fields have not been entered correctly')
//     //   if (!edPhone.value.match(phoneCheck1) || !edPhone.value.match(phoneCheck2) || !edPhone.value.match(phoneCheck3) || !edPhone.value.match(phoneCheck4) || !edPhone.value.match(phoneCheck5)) {
//     //     edPhone.className = 'input-invalid'
//     //   }
//     //   if (!edEmail.value.match(emailCheck)) {
//     //     edEmail.className = 'input-invalid'
//     //   }
//     //   if (!edFsName.value.match(reg_fs_lsNameCheck)) {
//     //     edFsName.className = 'input-invalid'
//     //   }
//     //   if (!edLsName.value.match(reg_fs_lsNameCheck)) {
//     //     edLsName.className = 'input-invalid'
//     //   }
//     //   if (!edNotes.value.match(notesCheck)) {
//     //     edNotes.className = 'input-invalid'
//     //   }
//     //   if (!edAddy1.value.match(addyCheck)) {
//     //     edAddy1.className = 'input-invalid'
//     //   }
//     //   if (!edCity.value.match(cityCheck)) {
//     //     edCity.className = 'input-invalid'
//     //   }
//     //   if (!edState.value) {
//     //     edState.className = 'input-invalid'
//     //   }
//     //   if (!edZipCode.value.match(zipCodeCheck)) {
//     //     edZipCode.className = 'input-invalid'
//     //   }
      
//     // }
    
//     // // check to make sure all fields in the sidebar and enter details form are full before send off the new location object *********
//     // if (sideBarSMDiv.children[1] && sideBarSLDiv.children[1] && sideBarSDANDTDiv.children[1] && pConsulNewLoc.location.address.address_line_1 !== '' && pConsulNewLoc.location.address.administrative_district_level_1 !== '' && pConsulNewLoc.location.address.first_name !== '' && pConsulNewLoc.location.address.last_name !== '' && pConsulNewLoc.location.address.postal_code !== '' && pConsulNewLoc.location.address.locality !== ''  && pConsulNewLoc.location.business_email !== '' && pConsulNewLoc.location.phone_number !== '' && pConsulNewLoc.location.name !== '') {
//     //   // get all list locations
//     //   async function gLocatoins() {
//     //     const loc_response = await fetch('/gLocations', {  method: 'get'} )
//     //     const loc_data = await loc_response.json()

//     //     console.log(loc_data.locations)


//     //     // if sideBarSLDiv.innerHTML = 'the so posh address'
//     //     if (sideBarSLDiv.children[1].textContent === '1234 Main St, 10566 Westchester, NY') {
//     //       for (let i = 0; i < loc_data.locations.length; i++) {
//     //         if (loc_data.locations[i].name === 'Defualt Test Account') {
//     //           soPoshLocId = loc_data.locations[i].id
//     //           customerPhoneBooking.locationID = soPoshLocId
//     //         }
//     //       }
//     //     } else if (sideBarSLDiv.children[1].textContent === 'We will be meeting at your location!') {
//     //       console.log('okay lets send your location')
//     //       // find info in the database that matches the users location details
//     //       // if so prompt them to login or sign up saying this location already exists under another account
//     //       // also find info in the square databse that matches the users info
//     //       // if so prompt them to login or sign up sayin we've been here before login or sign up to qualify for dea and promotions *********** will do this later... this is extra**********

//     //       // else user location brand new send the location id to square space
//     //       async function cLocation() {
//     //         // req & res
//     //         const c_loc_response = await fetch(`/cLocation/${JSON.stringify(pConsulNewLoc)}`, { method: 'POST' })
//     //         const c_loc_data = await c_loc_response.json()

//     //         console.log(c_loc_data)

//     //         customerPhoneBooking.locationID = c_loc_data.location.id // customerPhoneBooking

//     //         console.log(customerPhoneBooking)
//     //       }
//     //       cLocation()

//     //       // once location created retrieve all locations again - find user location - send to the customerPhoneBooking object

//     //       // for (let i = 0; i < loc_data.locations.length; i++) {
//     //       //   if (loc_data.locations[i].email === '')
//     //       // }
//     //     }

//     //   }

//     //   gLocatoins()

//     //   console.log('okay lets create the new location id!')
//     // } else {
//     //   if (!sideBarSMDiv.children[1]) {
//     //     sideBarSMDiv.children[0].className = 'sidebar-staff-member input-invalid'
//     //   }
//     //   if (!sideBarSLDiv.children[1]) {
//     //     sideBarSLDiv.children[0].className = 'sidebar-staff-member input-invalid'
//     //   }
//     //   if (!sideBarSDANDTDiv.children[1]) {
//     //     sideBarSDANDTDiv.children[0].className = 'sidebar-staff-member input-invalid'
//     //   }
//     //   console.log('ah ahh ah now you know better! Get those divs filled! and get all those detail input fields entered')
//     // }


//     // BOOK APPOINTMENT BTN CLICKED 
//       // check to make sure all fields in the sidebar have been filled and picked

//       // then

//       // get all locations in the square API to check if location exists already if user location is selected
//       // if (selectUserLocation.className === 'user-location-contents location-selected') {
//         // check to see that the location entered, does not exist in the square API already.

//   })  
// }

// bookPhoneConsultation()



































// // show User when logged in
// // console.log(userLoggedIN)
// document.addEventListener('scroll', (event)=> {
//   floatingNav.className = 'floating-nav2'
// })

// document.addEventListener('mouseover', (event)=> {
//   if (event.target.className === 'floating-nav2' || event.target.className === 'fas fa-user-circle' || event.target.className === 'live-icon' || event.target.className === 'logged-in-user-name-box' || event.target.className === 'online-red' || event.target.className === 'fas fa-caret-down' || event.target.className === 'floating-nav-ul' ) {
//     floatingNav.className = 'floating-nav'
//   }
// })

// document.addEventListener('mouseover', (event)=> {
//   if (event.target.className === '') {

//   }
// })

// const accountMenu = document.getElementById('account-menu')
// const floatingNavUl = document.getElementById('floating-nav-ul')
// const floatingNavUl2 = document.getElementById('floating-nav-ul2')

// let floatingNavUlCounter = 0

// console.log(liveIcon.children[2])

// document.addEventListener('click', (event)=> {
//   console.log('clicked')
//   console.log(floatingNavUlCounter)
//   console.log(event.target)

//   if (event.target.className === liveIcon.children[2].className) {
//     floatingNavUlCounter++
//   }
  
//   if(floatingNavUlCounter === 1) {
//     if (event.target.className === liveIcon.children[2].className) {
//       floatingNavUl.className = 'floating-nav-ul'
//       console.log(floatingNavUlCounter)
//     }
//   } 
   
//   if (floatingNavUlCounter === 2) {
//     if (event.target.className === liveIcon.children[2].className) {
//       floatingNavUl.className = 'floating-nav-ul hide-container'
//       console.log(floatingNavUlCounter)
//       floatingNavUlCounter = 0
//     }  
//   }

// })

// // const star1 = document.getElementById('star-1')
// // const star2 = document.getElementById('star-2')
// // const star3 = document.getElementById('star-3')
// // const star4 = document.getElementById('star-4')
// // const star5 = document.getElementById('star-5')

// // star5.addEventListener('mouseover', ()=> {
// //   star5.className = 'far fa-star star-selected'
// //   star4.className = 'far fa-star star-selected'
// //   star3.className = 'far fa-star star-selected'
// //   star2.className = 'far fa-star star-selected'
// //   star1.className = 'far fa-star star-selected'
// // })

// // star5.addEventListener('mouseout', ()=> {
// //   star5.className = 'far fa-star'
// //   star4.className = 'far fa-star'
// //   star3.className = 'far fa-star'
// //   star2.className = 'far fa-star'
// //   star1.className = 'far fa-star'
// // })

// // star4.addEventListener('mouseover', ()=> {
// //   star4.className = 'far fa-star star-selected'
// //   star3.className = 'far fa-star star-selected'
// //   star2.className = 'far fa-star star-selected'
// //   star1.className = 'far fa-star star-selected'
// // })

// // star4.addEventListener('mouseout', ()=> {
// //   star4.className = 'far fa-star'
// //   star3.className = 'far fa-star'
// //   star2.className = 'far fa-star'
// //   star1.className = 'far fa-star'
// // })

// // star3.addEventListener('mouseover', ()=> {
// //   star3.className = 'far fa-star star-selected'
// //   star2.className = 'far fa-star star-selected'
// //   star1.className = 'far fa-star star-selected'
// // })

// // star3.addEventListener('mouseout', ()=> {
// //   star3.className = 'far fa-star'
// //   star2.className = 'far fa-star'
// //   star1.className = 'far fa-star'
// // })

// // star2.addEventListener('mouseover', ()=> {
// //   star2.className = 'far fa-star star-selected'
// //   star1.className = 'far fa-star star-selected'
// // })

// // star2.addEventListener('mouseout', ()=> {
// //   star2.className = 'far fa-star'
// //   star1.className = 'far fa-star'
// // })

// // star1.addEventListener('mouseover', ()=> {
// //   star1.className = 'far fa-star star-selected'
// // })

// // star1.addEventListener('mouseout', ()=> {
// //   star1.className = 'far fa-star'
// // })


// // before and after wheel
// const bandaImgsArr = ['beforePantry', 'afterPantry', 'beforeCloset', 'afterCloset', 'beforeBasement', 'afterBasement', 'beforeBasement2', 'afterBasement2', 'beforeCloset2', 'afterCloset2', 'beforeCloset3', 'afterCloset3']

// const bandaImages = document.getElementById('banda-images')

// const beforeImage = document.getElementById('before-image')
// const afterImage = document.getElementById('after-image')

// const leftArrow = document.getElementById('left-arrow')
// const rightArrow = document.getElementById('right-arrow')

// let bandaCounter = 0
// let oddNumber = 0

// // leftArrow.addEventListener('click', ()=> {
// //   if (bandaCounter === 0) {
// //     bandaCounter = bandaImgsArr.length / 2
// //     bandaImages.innerHTML = `
// //       <img id='after-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 2]}.jpg' alt=''>
// //       <img id='before-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 1]}.jpg' alt=''> 
// //     `
// //   } else if (bandaCounter === bandaImgsArr.length / 2) {
// //     bandaCounter--
// //     bandaImages.innerHTML = `
// //       <img id='after-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 4]}.jpg' alt=''>
// //       <img id='before-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 3]}.jpg' alt=''>
// //     `
// //   } else if (bandaCounter === 5) {
// //     bandaCounter--
// //     bandaImages.innerHTML = `
// //     <img id='after-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 6]}.jpg' alt=''>
// //     <img id='before-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 5]}.jpg' alt=''>
// //   `
// //   } else if (bandaCounter === 4) {
// //     bandaCounter--
// //     bandaImages.innerHTML = `
// //     <img id='after-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 8]}.jpg' alt=''>
// //     <img id='before-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 7]}.jpg' alt=''>
// //   `
// //   } else if (bandaCounter === 3) {
// //     bandaCounter--
// //     bandaImages.innerHTML = `
// //     <img id='after-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 10]}.jpg' alt=''>
// //     <img id='before-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 9]}.jpg' alt=''>
// //   `
// //   } else if (bandaCounter === 2) {
// //     bandaCounter--
// //     bandaImages.innerHTML = `
// //     <img id='after-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 12]}.jpg' alt=''>
// //     <img id='before-image' class='gradual' src='./img/${bandaImgsArr[bandaImgsArr.length - 11]}.jpg' alt=''>
// //   `
// //   } else if (bandaCounter === 1) {
// //     bandaCounter--
// //     bandaImages.innerHTML = `
// //       <img id='before-image' class='gradual' src="./img/beforePlayroom.jpg" alt="">
// //       <img id='after-image' class='gradual' src="./img/afterPlayroom.jpg" alt="">
// //     `
// //   }
// //   console.log('this is the count', bandaCounter)
// // })

// // rightArrow.addEventListener('click', ()=> {
// //   if (bandaCounter === 0) {
// //     bandaCounter++
// //     bandaImages.innerHTML = `
// //     <img id='before-image' class='gradual' src="./img/${bandaImgsArr[0]}.jpg" alt="">
// //     <img id='after-image' class='gradual' src="./img/${bandaImgsArr[1]}.jpg" alt="">
// //   `
// //   } else if (bandaCounter === 1) {
// //     bandaCounter++
// //     bandaImages.innerHTML = `
// //       <img id='before-image' class='gradual' src="./img/${bandaImgsArr[2]}.jpg" alt="">
// //       <img id='after-image' class='gradual' src="./img/${bandaImgsArr[3]}.jpg" alt="">
// //     `
// //   } else if (bandaCounter === 2) {
// //     bandaCounter++
// //     bandaImages.innerHTML = `
// //       <img id='before-image' class='gradual' src="./img/${bandaImgsArr[4]}.jpg" alt="">
// //       <img id='after-image' class='gradual' src="./img/${bandaImgsArr[5]}.jpg" alt="">
// //     `
// //   } else if (bandaCounter === 3) {
// //     bandaCounter++
// //     bandaImages.innerHTML = `
// //       <img id='before-image' class='gradual' src="./img/${bandaImgsArr[6]}.jpg" alt="">
// //       <img id='after-image' class='gradual' src="./img/${bandaImgsArr[7]}.jpg" alt="">
// //     `
// //   } else if (bandaCounter === 4) {
// //     bandaCounter++
// //     bandaImages.innerHTML = `
// //       <img id='before-image' class='gradual' src="./img/${bandaImgsArr[8]}.jpg" alt="">
// //       <img id='after-image' class='gradual' src="./img/${bandaImgsArr[9]}.jpg" alt="">
// //     `
// //   } else if (bandaCounter === 5) {
// //     bandaCounter++
// //     bandaImages.innerHTML = `
// //       <img id='before-image' class='gradual' src="./img/${bandaImgsArr[10]}.jpg" alt="">
// //       <img id='after-image' class='gradual' src="./img/${bandaImgsArr[11]}.jpg" alt="">
// //     `
// //   } else if (bandaCounter === 6) {
// //     bandaCounter = 0
// //     bandaImages.innerHTML = `
// //     <img id='before-image' class='gradual' src="./img/beforePlayroom.jpg" alt="">
// //     <img id='after-image' class='gradual' src="./img/afterPlayroom.jpg" alt="">
// //   `
// //   }
// //   console.log('this is the count', bandaCounter)
// // })

// //* phone consultation */

// // check to see if user is logged in
//   // if so display the modal
//   // else prompt them to login or sign up 




// // animation scroll 



// // const scrollOffset = 100

// // const scrollElement1 = document.querySelector(".js-scroll1")
// // const scrollElement2 = document.querySelector(".js-scroll2")
// // const scrollElement3 = document.querySelector(".js-scroll")
// // const scrollElement4 = document.querySelector(".js-scroll")
// // const scrollElement5 = document.querySelector(".js-scroll")

// // console.log(scrollElement1, scrollElement2)

// // const elementInView = (el, scrollOffset = 0) => {
// //   const elementTop = el.getBoundingClientRect().top
// //   console.log(Math.abs(elementTop * 0.001))
// //   return ( elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset))
// // }

// // const displayScrollElement1 = () => {
// //   scrollElement1.className = 'center js-scroll1 scrolled'
// // }

// // const displayScrollElement2 = () => {
// //   scrollElement2.className = 'center-2 js-scroll2 scrolled'
// // }


// // const hideScrollElement1 = () => {
// //   scrollElement1.className = 'center js-scroll1 quickly'
// // }
// // const hideScrollElement2 = () => {
// //   scrollElement2.className = 'center-2 js-scroll2 quickly'
// // }

// // const handleScrollAnimation = () => {
// //   if (elementInView(scrollElement1, scrollOffset)) {
// //     displayScrollElement1()
// //   } else {
// //     hideScrollElement1()
// //   }

// //   if (elementInView(scrollElement2, scrollOffset)) {
// //     displayScrollElement2()
// //   } else {
// //     hideScrollElement2()
// //   }
// // }

// // window.addEventListener('scroll', () => {
// //   handleScrollAnimation();
// // })




// Date
const currentDate = new Date()
let currentYear = currentDate.getFullYear()

/* Company Colors */
const companyPrimaryColor = '#F05E7C'
const companySecondaryColor = '#3a3a3a'
const companyPrimaryBlack = '#000000'
const companySecondaryBlack = '#333333'

// Company Services
let companyServicesArr = []
let companyServicesObj = {}

async function getServices() {
  // req & res
  const get_services_req = await fetch('/getServices', { method: 'get' })
  const get_services_res = await get_services_req.json()
  console.log(get_services_res)
  
  if (get_services_res.objects) {
    for (let i = 0; i < get_services_res.objects.length; i++) {
      if (get_services_res.objects[i].type === 'ITEM' && get_services_res.objects[i].item_data.variations[0].item_variation_data.price_money) {
        companyServicesArr.push(get_services_res.objects[i].item_data.name)
        companyServicesObj[`${get_services_res.objects[i].item_data.name}`] = {}
        companyServicesObj[`${get_services_res.objects[i].item_data.name}`].duration_minutes = get_services_res.objects[i].item_data.variations[0].item_variation_data.service_duration / 60000
        companyServicesObj[`${get_services_res.objects[i].item_data.name}`].service_variation_id = get_services_res.objects[i].item_data.variations[0].id
        companyServicesObj[`${get_services_res.objects[i].item_data.name}`].service_variation_version = get_services_res.objects[i].item_data.variations[0].version
        companyServicesObj[`${get_services_res.objects[i].item_data.name}`].service_price = `$${get_services_res.objects[i].item_data.variations[0].item_variation_data.price_money.amount / 100}.00`
      } else if (get_services_res.objects[i].type === 'ITEM' && get_services_res.objects[i].item_data.variations[0].item_variation_data.pricing_type === 'VARIABLE_PRICING') {
        companyServicesArr.push(get_services_res.objects[i].item_data.name)
        companyServicesObj[`${get_services_res.objects[i].item_data.name}`] = {}
        companyServicesObj[`${get_services_res.objects[i].item_data.name}`].duration_minutes = get_services_res.objects[i].item_data.variations[0].item_variation_data.service_duration / 60000
        companyServicesObj[`${get_services_res.objects[i].item_data.name}`].service_variation_id = get_services_res.objects[i].item_data.variations[0].id
        companyServicesObj[`${get_services_res.objects[i].item_data.name}`].service_variation_version = get_services_res.objects[i].item_data.variations[0].version
        companyServicesObj[`${get_services_res.objects[i].item_data.name}`].service_price = `TBD`
      } else {
        console.log('Item does not exist.')
      }
    }
    console.log(companyServicesArr)
    console.log(companyServicesObj)
    // console.log(Object.keys(companyServicesObj))
  }
}
  getServices()
    .then(() => { console.log('getServices() has been sent to express server') })
    .catch((error) => { console.log(error) })


// Payment Regexes
// const visaRegex = /(^[4]\d{12}$)|(^[4]\d{15}$})/
// const mastercardRegex = /^[5]\d{14}$/ 
// const americanExpressRegex = /(^[3][4]\d{13}$)|(^[3][7]\d{13}$)/
// const discoverRegex = /^[6]\d{15}$/
// const expDateRegex = `/^[0]\d\/[${currentYear.slice(2,3)}-9][${currentYear.slice(3,4)}-9]$/`
// const cvvRegex = /^[0-9]{3}$/
// const zipCodeRegex = /^[0-9]{6}$/

/* header  */
const userLoggedIn = false
const transDur = '0.5s'

const companyLogo = document.getElementById('company-logo')

const companyOptions = document.getElementById('company-options-title')
const companyOptionsIcon = document.getElementById('company-options-icon')
const companyOptionsEle = document.querySelectorAll('.company-options-ele')
const companyOptionsDropDown = document.getElementById('company-options-drop-down')
const companyOptions1 = document.getElementById('company-options-1-drop-down')
const companyOptions2 = document.getElementById('company-options-2-drop-down')
const companyOptions3 = document.getElementById('company-options-3-drop-down')
const companyOptions4 = document.getElementById('company-options-4-drop-down')
const companyOptions5 = document.getElementById('company-options-5-drop-down')
let companyOptions1Bool, companyOptions2Bool, companyOptions3Bool, companyOptions4Bool, companyOptions5Bool

const bookingExistsModal = document.getElementById('booking-exists-modal')
const bookingExistsModalClose = document.getElementById('booking-exists-modal-close')

const companyAny = document.getElementById('company-any')
const companyAnyIcon = document.getElementById('company-any-icon')


const companyCallToAction = document.getElementById('company-call-to-action')

const companyLanguages = document.getElementById('company-languages-title')
const companyLanguagesIcon = document.getElementById('company-languages-icon')
const companyLanguagesEle = document.querySelectorAll('.company-languages-ele')
const companyLanguagesDropDown = document.getElementById('company-languages-drop-down')

const userAccessProfile = document.getElementById('user-access-profile')
const userAccessProfileDropDown = document.getElementById('user-access-profile-drop-down')
const userAccessAppointments = document.getElementById('user-access-profile-appointment')
const userAccessContainerLeftAppointments = document.getElementById('user-access-profile-container-left-appointment')
const userAccessContainerRightAppointments = document.getElementById('user-access-profile-container-right-appointment')
const userAccessMyAccount = document.getElementById('user-access-profile-myaccount')
const userAccessContainerLeftMyAccount = document.getElementById('user-access-profile-container-left-myaccount')
const userAccessContainerRightMyAccount = document.getElementById('user-access-profile-container-right-myaccount')

const userAccessProfileMyAccountFirstN = document.getElementById('user-access-profile-container-right-myaccount-firstn')
const userAccessProfileMyAccountLastN = document.getElementById('user-access-profile-container-right-myaccount-lastn')
const userAccessProfileMyAccountNickN = document.getElementById('user-access-profile-container-right-myaccount-nickn')
const userAccessProfileMyAccountDOB = document.getElementById('user-access-profile-container-right-myaccount-dob')
const userAccessProfileMyAccountAddress = document.getElementById('user-access-profile-container-right-myaccount-address')
const userAccessProfileMyAccountCity = document.getElementById('user-access-profile-container-right-myaccount-city')
const userAccessProfileMyAccountState = document.getElementById('user-access-profile-container-right-myaccount-state')
const userAccessProfileMyAccountZipCode = document.getElementById('user-access-profile-container-right-myaccount-zipcode')
const userAccessProfileMyAccountEmail = document.getElementById('user-access-profile-container-right-myaccount-email')
const userAccessProfileMyAccountPhone = document.getElementById('user-access-profile-container-right-myaccount-phone')
const userAccessProfileMyAccountPassword = document.getElementById('user-access-profile-container-right-myaccount-password')


const userAccessLogin = document.getElementById('login-btn-1')
const userAccessSignUp = document.getElementById('signup-btn-1')
const userAccessSignOut = document.getElementById('signout-btn-1')


const companyChatSupport = document.getElementById('company-chat-support')
const companyChatSupportModal = document.getElementById('company-chat-support-container-modal')
const companyChatSupportModalClose1 = document.getElementById('company-chat-support-container-modal-close-1')
const companyChatSupportModalClose2 = document.getElementById('company-chat-support-container-modal-close-2')
const companyChatSupportChatNow = document.getElementById('company-chat-support-chat-now')
const companyChatSupportContainerDetails1 = document.getElementById('company-chat-support-container-details-1')
const companyChatSupportContainerDetails2 = document.getElementById('company-chat-support-container-details-2')
const companyChatSupportContainerMessages = document.getElementById('company-chat-support-container-messages')
let companyChatSupportUserInput = document.getElementById('company-chat-support-message-input')
const companyChatSupportSendBtn = document.getElementById('company-chat-support-send-btn')

const pleaseLoginSignUpModal = document.getElementById('please-login-signup-modal-container')

const existingAppointmentModal = document.getElementById('existing-appointment-modal')
const existingAppointmentModalClose = document.getElementById('existing-appointment-modal-close')
const existingAppointmentBtn = document.getElementById('existing-appointment-btn')

let companyChatSupportUserInputValue = {
  details: {
    user_input: ''
  }
}

const companyServices = {
  service_1: 'Phone Consultation',
  service_2: 'In-HomeConsultation',
  service_3: 'Posh Session',
  service_4: 'Unique Session',
  service_5: 'Concierge Sessions'
}

/** user-access-profile page */
const getUserSquareInfo = {
  details: {
    email_address: '',
    password: ''
  }
}

let updateMyAcctFieldObj = {
  email_address: ''
}

class UserAccessProfile {
  constructor(getUserSquareInfo, userAccessContainerLeftMyAccount, userAccessProfileMyAccountFirstN, userAccessProfileMyAccountLastN, userAccessProfileMyAccountNickN, userAccessProfileMyAccountDOB, userAccessProfileMyAccountAddress, userAccessProfileMyAccountState, userAccessProfileMyAccountCity, userAccessProfileMyAccountZipCode, userAccessProfileMyAccountEmail, userAccessProfileMyAccountPhone, userAccessProfileMyAccountPassword, userAccessContainerLeftAppointments, userAccessContainerRightMyAccount,userAccessContainerRightAppointments) {
    this.getUserSquareInfo = getUserSquareInfo

    this.userAccessContainerLeftMyAccount = userAccessContainerLeftMyAccount
    this.userAccessProfileMyAccountFirstN = userAccessProfileMyAccountFirstN 
    this.userAccessProfileMyAccountLastN = userAccessProfileMyAccountLastN
    this.userAccessProfileMyAccountNickN = userAccessProfileMyAccountNickN
    this.userAccessProfileMyAccountDOB = userAccessProfileMyAccountDOB
    this.userAccessProfileMyAccountAddress = userAccessProfileMyAccountAddress
    this.userAccessProfileMyAccountState = userAccessProfileMyAccountState
    this.userAccessProfileMyAccountCity = userAccessProfileMyAccountCity
    this.userAccessProfileMyAccountZipCode = userAccessProfileMyAccountZipCode
    this.userAccessProfileMyAccountEmail = userAccessProfileMyAccountEmail
    this.userAccessProfileMyAccountPhone = userAccessProfileMyAccountPhone
    this.userAccessProfileMyAccountPassword = userAccessProfileMyAccountPassword

    this.userAccessContainerLeftAppointments = userAccessContainerLeftAppointments

    this.userAccessContainerRightMyAccount = userAccessContainerRightMyAccount
    this.userAccessContainerRightAppointments = userAccessContainerRightAppointments

    this.runMyAccountClick = this.runMyAccountClick()
    this.runAppointmentsClick = this.runAppointmentsClick()
  }

  // my account click
  runMyAccountClick() {
    if (userAccessProfileDropDown.className === 'user-access-profile-drop-down' || window.location.href === `${domainName}/user-access-profile.html`) {

      // left my account clicked
      this.userAccessContainerLeftMyAccount.addEventListener('click', () => {
        this.userAccessContainerLeftAppointments.className = 'gradually'
        this.userAccessContainerLeftMyAccount.className = 'gradually user-access-profile-selected'
  
        this.userAccessContainerRightAppointments.className = 'user-access-profile-container-right-appointment hide-container'
        this.userAccessContainerRightMyAccount.className = 'user-access-profile-container-right-myaccount'
        
  
        // display user info onto page
        this.userAccessProfileMyAccountAddress.innerHTML = `
        <div>
          <h1>Address:</h1>
          <h2 id='edit-address-detail'>${JSON.parse(localStorage.getItem('currentUser')).address.address_line_1}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-address-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-address-input' type='text' placeholder='Enter here'>
            <i id='edit-address-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-address-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-address-btn' class="bi bi-pencil-square" data-name='address_line_1'></i>
        </div>
        `
        let editAddressDetail = document.getElementById('edit-address-detail')
        let editAddressBtn = document.getElementById('edit-address-btn')
        let editAddressInputIconDiv = document.getElementById('edit-address-input-icon-div')
        let editAddressUpdated = document.getElementById('edit-address-updated')
        let editAddressInput = document.getElementById('edit-address-input')
        let editAddressInputBtn = document.getElementById('edit-address-input-btn')
        let editAddressCounter = 0 

        updateField(editAddressDetail, editAddressBtn, editAddressInputIconDiv, editAddressUpdated, editAddressInput, editAddressInputBtn, editAddressCounter)
  
        this.userAccessProfileMyAccountState.innerHTML = `
        <div>
          <h1>State:</h1>
          <h2 id='edit-state-detail'>${JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-state-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-state-input' type='text' placeholder='Enter here'>
            <i id='edit-state-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-state-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-state-btn' class="bi bi-pencil-square" data-name='administrative_district_level_1'></i>
        </div>
        `

        let editStateDetail = document.getElementById('edit-state-detail')
        let editStateBtn = document.getElementById('edit-state-btn')
        let editStateInputIconDiv = document.getElementById('edit-state-input-icon-div')
        let editStateUpdated = document.getElementById('edit-state-updated')
        let editStateInput = document.getElementById('edit-state-input')
        let editStateInputBtn = document.getElementById('edit-state-input-btn')
        let editStateCounter = 0 

        updateField(editStateDetail, editStateBtn, editStateInputIconDiv, editStateUpdated, editStateInput, editStateInputBtn, editStateCounter)

        this.userAccessProfileMyAccountCity.innerHTML = `
        <div>
          <h1>City:</h1>
          <h2 id='edit-city-detail'>${JSON.parse(localStorage.getItem('currentUser')).address.locality}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-city-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-city-input' type='text' placeholder='Enter here'>
            <i id='edit-city-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-city-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-city-btn' class="bi bi-pencil-square" data-name='locality'></i>
        </div>
        `

        let editCityDetail = document.getElementById('edit-city-detail')
        let editCityBtn = document.getElementById('edit-city-btn')
        let editCityInputIconDiv = document.getElementById('edit-city-input-icon-div')
        let editCityUpdated = document.getElementById('edit-city-updated')
        let editCityInput = document.getElementById('edit-city-input')
        let editCityInputBtn = document.getElementById('edit-city-input-btn')
        let editCityCounter = 0 

        updateField(editCityDetail, editCityBtn, editCityInputIconDiv, editCityUpdated, editCityInput, editCityInputBtn, editCityCounter)
    
        this.userAccessProfileMyAccountZipCode.innerHTML = `
        <div>
          <h1>Zip Code:</h1>
          <h2 id='edit-zipcode-detail'>${JSON.parse(localStorage.getItem('currentUser')).address.postal_code}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-zipcode-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-zipcode-input' type='text' placeholder='Enter here'>
            <i id='edit-zipcode-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-zipcode-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-zipcode-btn' class="bi bi-pencil-square" data-name='postal_code'></i>
        </div>
        `

        let editZipCodeDetail = document.getElementById('edit-zipcode-detail')
        let editZipCodeBtn = document.getElementById('edit-zipcode-btn')
        let editZipCodeInputIconDiv = document.getElementById('edit-zipcode-input-icon-div')
        let editZipCodeUpdated = document.getElementById('edit-zipcode-updated')
        let editZipCodeInput = document.getElementById('edit-zipcode-input')
        let editZipCodeInputBtn = document.getElementById('edit-zipcode-input-btn')
        let editZipCodeCounter = 0 

        updateField(editZipCodeDetail, editZipCodeBtn, editZipCodeInputIconDiv, editZipCodeUpdated, editZipCodeInput, editZipCodeInputBtn, editZipCodeCounter)
  
        this.userAccessProfileMyAccountFirstN.innerHTML = `
        <div>
          <h1>First N:</h1>
          <h2 id='edit-firstn-detail'>${JSON.parse(localStorage.getItem('currentUser')).given_name}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-firstn-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-firstn-input' type='text' placeholder='Enter here'>
            <i id='edit-firstn-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-firstn-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-firstn-btn' class="bi bi-pencil-square" data-name='given_name'></i>
        </div>
        `

        let editFirstNDetail = document.getElementById('edit-firstn-detail')
        let editFirstNBtn = document.getElementById('edit-firstn-btn')
        let editFirstNInputIconDiv = document.getElementById('edit-firstn-input-icon-div')
        let editFirstNUpdated = document.getElementById('edit-firstn-updated')
        let editFirstNInput = document.getElementById('edit-firstn-input')
        let editFirstNInputBtn = document.getElementById('edit-firstn-input-btn')
        let editFirstNCounter = 0

        updateField(editFirstNDetail, editFirstNBtn, editFirstNInputIconDiv, editFirstNUpdated, editFirstNInput, editFirstNInputBtn, editFirstNCounter) 

        this.userAccessProfileMyAccountLastN.innerHTML = `
        <div>
          <h1>Last N:</h1>
          <h2 id='edit-lastn-detail'>${JSON.parse(localStorage.getItem('currentUser')).family_name}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-lastn-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-lastn-input' type='text' placeholder='Enter here'>
            <i id='edit-lastn-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-lastn-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-lastn-btn' class="bi bi-pencil-square" data-name='family_name'></i>
        </div>
        `

        let editLastNDetail = document.getElementById('edit-lastn-detail')
        let editLastNBtn = document.getElementById('edit-lastn-btn')
        let editLastNInputIconDiv = document.getElementById('edit-lastn-input-icon-div')
        let editLastNUpdated = document.getElementById('edit-lastn-updated')
        let editLastNInput = document.getElementById('edit-lastn-input')
        let editLastNInputBtn = document.getElementById('edit-lastn-input-btn')
        let editLastNCounter = 0

        updateField(editLastNDetail, editLastNBtn, editLastNInputIconDiv, editLastNUpdated, editLastNInput, editLastNInputBtn, editLastNCounter) 
  
        this.userAccessProfileMyAccountNickN.innerHTML = `
        <div>
          <h1>Nickname:</h1>
          <h2 id='edit-nickn-detail'>${JSON.parse(localStorage.getItem('currentUser')).nickname}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-nickn-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-nickn-input' type='text' placeholder='Enter here'>
            <i id='edit-nickn-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-nickn-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-nickn-btn' class="bi bi-pencil-square" data-name='nickname'></i>
        </div>
        `

        let editNickNDetail = document.getElementById('edit-nickn-detail')
        let editNickNBtn = document.getElementById('edit-nickn-btn')
        let editNickNInputIconDiv = document.getElementById('edit-nickn-input-icon-div')
        let editNickNUpdated = document.getElementById('edit-nickn-updated')
        let editNickNInput = document.getElementById('edit-nickn-input')
        let editNickNInputBtn = document.getElementById('edit-nickn-input-btn')
        let editNickNCounter = 0

        updateField(editNickNDetail, editNickNBtn, editNickNInputIconDiv, editNickNUpdated, editNickNInput, editNickNInputBtn, editNickNCounter) 
  
        this.userAccessProfileMyAccountDOB.innerHTML = `
        <div>
          <h1>Birthday:</h1>
          <h2 id='edit-birthday-detail'>${JSON.parse(localStorage.getItem('currentUser')).birthday}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-birthday-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-birthday-input' type='text' placeholder='Enter here'>
            <i id='edit-birthday-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-birthday-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-birthday-btn' class="bi bi-pencil-square" data-name='birthday'></i>
        </div>
        `

        let editBirthdayDetail = document.getElementById('edit-birthday-detail')
        let editBirthdayBtn = document.getElementById('edit-birthday-btn')
        let editBirthdayInputIconDiv = document.getElementById('edit-birthday-input-icon-div')
        let editBirthdayUpdated = document.getElementById('edit-birthday-updated')
        let editBirthdayInput = document.getElementById('edit-birthday-input')
        let editBirthdayInputBtn = document.getElementById('edit-birthday-input-btn')
        let editBirthdayCounter = 0

        updateField(editBirthdayDetail, editBirthdayBtn, editBirthdayInputIconDiv, editBirthdayUpdated, editBirthdayInput, editBirthdayInputBtn, editBirthdayCounter) 
  
        this.userAccessProfileMyAccountEmail.innerHTML = `
        <div>
          <h1>Email:</h1>
          <h2 id='edit-email-detail'>${JSON.parse(localStorage.getItem('currentUser')).email_address}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-email-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-email-input' type='text' placeholder='Enter here'>
            <i id='edit-email-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-email-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-email-btn' class="bi bi-pencil-square" data-name='email_address'></i>
        </div>
        `

        let editEmailDetail = document.getElementById('edit-email-detail')
        let editEmailBtn = document.getElementById('edit-email-btn')
        let editEmailInputIconDiv = document.getElementById('edit-email-input-icon-div')
        let editEmailUpdated = document.getElementById('edit-email-updated')
        let editEmailInput = document.getElementById('edit-email-input')
        let editEmailInputBtn = document.getElementById('edit-email-input-btn')
        let editEmailCounter = 0

        updateField(editEmailDetail, editEmailBtn, editEmailInputIconDiv, editEmailUpdated, editEmailInput, editEmailInputBtn, editEmailCounter) 
  
        this.userAccessProfileMyAccountPhone.innerHTML = `
        <div>
          <h1>Phone:</h1>
          <h2 id='edit-phone-detail'>${JSON.parse(localStorage.getItem('currentUser')).phone_number}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-phone-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-phone-input' type='text' placeholder='Enter here'>
            <i id='edit-phone-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-phone-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-phone-btn' class="bi bi-pencil-square" data-name='phone_number'></i>
        </div>
        `

        let editPhoneDetail = document.getElementById('edit-phone-detail')
        let editPhoneBtn = document.getElementById('edit-phone-btn')
        let editPhoneInputIconDiv = document.getElementById('edit-phone-input-icon-div')
        let editPhoneUpdated = document.getElementById('edit-phone-updated')
        let editPhoneInput = document.getElementById('edit-phone-input')
        let editPhoneInputBtn = document.getElementById('edit-phone-input-btn')
        let editPhoneCounter = 0

        updateField(editPhoneDetail, editPhoneBtn, editPhoneInputIconDiv, editPhoneUpdated, editPhoneInput, editPhoneInputBtn, editPhoneCounter) 
  
        this.userAccessProfileMyAccountPassword.innerHTML = `
        <div>
          <h1>Password:</h1>
          <h2 id='edit-password-detail'>${JSON.parse(localStorage.getItem('currentUser')).password}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-password-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-password-input' type='text' placeholder='Enter here'>
            <i id='edit-password-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-password-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-password-btn' class="bi bi-pencil-square" data-name='password'></i>
        </div>
        `

        let editPass1Detail = document.getElementById('edit-password-detail')
        let editPass1Btn = document.getElementById('edit-password-btn')
        let editPass1InputIconDiv = document.getElementById('edit-password-input-icon-div')
        let editPass1Updated = document.getElementById('edit-password-updated')
        let editPass1Input = document.getElementById('edit-password-input')
        let editPass1InputBtn = document.getElementById('edit-password-input-btn')
        let editPass1Counter = 0

        updateField(editPass1Detail, editPass1Btn, editPass1InputIconDiv, editPass1Updated, editPass1Input, editPass1InputBtn, editPass1Counter) 

        // edit the field main function
        function updateField(editFieldDetailName, editFieldTypeBtn, editFieldInputIconDiv, editFieldUpdated, editFieldInput, editFieldInputBtn, editFieldTypeCounter) {
          let editField

          let fieldsArr = ['address_line_1','administrative_district_level_1', 'locality', 'postal_code', 'birthday', 'email_address', 'family_name', 'given_name', 'nickname', 'password', 'password2', 'phone_number']
          let fieldsObj = {
            address_line_1: 'Address',
            administrative_district_level_1: 'State',
            locality: 'City',
            postal_code: 'Zip Code',
            birthday: 'Birthday',
            email_address: 'Email',
            family_name: 'Last Name',
            given_name: 'First Name',
            nickname: 'Nickname',
            password: 'Password',
            phone_number: 'Phone'
          }

          let fieldsCheck = {
            address_line_1: reg_fs_ls_nickNameCheck,
            administrative_district_level_1: lettersOnlyCheck,
            locality: lettersOnlyCheck,
            postal_code: zipCodeCheck,
            birthday: dobCheck,
            email_address: emailCheck,
            family_name: reg_fs_ls_nickNameCheck,
            given_name: reg_fs_ls_nickNameCheck,
            nickname: nicknameCheck,
            password: passwordCheck,
            phone_number: [phoneCheck1, phoneCheck2, phoneCheck3, phoneCheck4, phoneCheck5, phoneCheck6]
          }
          const addressPropertiesArr = ['address_line_1', 'administrative_district_level_1', 'locality', 'postal_code']

          // edit field btn 
          editFieldTypeBtn.addEventListener('click', () => {
            editFieldInput.className = ''
            console.log(editFieldTypeBtn.getAttribute('name'))
            editFieldTypeCounter++
            if (editFieldTypeCounter === 1) {
              editField = editFieldTypeBtn.dataset.name
              console.log(editField)
              editFieldInput.value = ''
              editFieldInputIconDiv.style.display = ''
              editFieldInputIconDiv.style.visibility = ''
            } else {
              editFieldUpdated.style.display = 'none'
              editFieldInputIconDiv.style.visibility = 'hidden'
              editFieldTypeCounter = 0
            }
          })

          // edit input btn
          editFieldInputBtn.addEventListener('click', () => {
            console.log(editField) 
            if (editField === 'phone_number') {
              if (editFieldInput.value.match(phoneCheck1) || editFieldInput.value.match(phoneCheck2) || editFieldInput.value.match(phoneCheck3) || editFieldInput.value.match(phoneCheck4) || editFieldInput.value.match(phoneCheck5) || editFieldInput.value.match(phoneCheck6) && editFieldInput.value !== '') {
                updateMyAcctFieldObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address

                updateMyAcctFieldObj[`${editField}`] = editFieldInput.value
  
                updateMyAcctFieldObj.id = JSON.parse(localStorage.getItem('currentUser')).id
  
                console.log(updateMyAcctFieldObj)
  
                let editFieldMsg
                for (let i = 0; i < fieldsArr.length; i++) {
                  if (fieldsArr[i] === editField) {
                    editFieldMsg = `Are you sure you want to edit the ${fieldsObj[`${editField}`]} field?`
                    console.log(editFieldMsg)
                  }
                }
                let inputFieldAlert = window.confirm(editFieldMsg)
                if (inputFieldAlert) {
                  // update field in MongoDb
                  updateUserFieldMongoDb(updateMyAcctFieldObj)
                  .then(() => { console.log('the updaeMyAcctField() has been sent to the express server') })
                  .catch((error) => { console.log(error) })
  
                  // update field in Square
                  updateUserFieldSquare(updateMyAcctFieldObj)
                  .then(() => { console.log('the updateUserFieldSquare() has been sent to the express server') })
                  .catch((error) => { console.log(error) })
  
  
                  let localStorageObj = JSON.parse(localStorage.getItem('currentUser'))
                  for (let i = 0; i < addressPropertiesArr.length; i++) {
                    if (addressPropertiesArr[i] === editField) {
                      localStorageObj.address[`${editField}`] = editFieldInput.value
                    } else {
                      if (editField === 'password') {
                        localStorageObj[`${editField}`] = '**********'
                      } else {
                        localStorageObj[`${editField}`] = editFieldInput.value
                      }
                      
                    }
                  }
                  localStorage.setItem('currentUser', JSON.stringify(localStorageObj))
                  console.log(localStorageObj)
  
                  editFieldDetailName.textContent = editFieldInput.value
                  editFieldInputIconDiv.style.display = 'none'
                  editFieldUpdated.style.display = ''
  
                  setTimeout(() => {
                    editFieldUpdated.style.display = 'none'
                    editFieldInputIconDiv.style.display = ''
                    editFieldInputIconDiv.style.visibility = 'hidden'
                    editFieldTypeCounter = 0
                  }, 4000)    
                }
              }
            } else if (editFieldInput.value !== '' && editFieldInput.value.match(fieldsCheck[`${editField}`])) {
              updateMyAcctFieldObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address

              updateMyAcctFieldObj[`${editField}`] = editFieldInput.value

              updateMyAcctFieldObj.id = JSON.parse(localStorage.getItem('currentUser')).id

              console.log(updateMyAcctFieldObj)

              let editFieldMsg
              for (let i = 0; i < fieldsArr.length; i++) {
                if (fieldsArr[i] === editField) {
                  editFieldMsg = `Are you sure you want to edit the ${fieldsObj[`${editField}`]} field?`
                  console.log(editFieldMsg)
                }
              }
              let inputFieldAlert = window.confirm(editFieldMsg)
              if (inputFieldAlert) {
                // update field in MongoDb
                updateUserFieldMongoDb(updateMyAcctFieldObj)
                .then(() => { console.log('the updaeMyAcctField() has been sent to the express server') })
                .catch((error) => { console.log(error) })

                // update field in Square
                updateUserFieldSquare(updateMyAcctFieldObj)
                .then(() => { console.log('the updateUserFieldSquare() has been sent to the express server') })
                .catch((error) => { console.log(error) })


                let localStorageObj = JSON.parse(localStorage.getItem('currentUser'))
                for (let i = 0; i < addressPropertiesArr.length; i++) {
                  if (addressPropertiesArr[i] === editField) {
                    localStorageObj.address[`${editField}`] = editFieldInput.value
                  } else {
                    if (editField === 'password') {
                      localStorageObj[`${editField}`] = '**********'
                    } else {
                      localStorageObj[`${editField}`] = editFieldInput.value
                    }
                    
                  }
                }
                localStorage.setItem('currentUser', JSON.stringify(localStorageObj))
                console.log(localStorageObj)

                editFieldDetailName.textContent = editFieldInput.value
                editFieldInputIconDiv.style.display = 'none'
                editFieldUpdated.style.display = ''

                setTimeout(() => {
                  editFieldUpdated.style.display = 'none'
                  editFieldInputIconDiv.style.display = ''
                  editFieldInputIconDiv.style.visibility = 'hidden'
                  editFieldTypeCounter = 0
                }, 4000)    
              }
            } else {
              editFieldInput.className = 'input-invalid'
            }  
          })
        }

        // update the given field MongoDb async function
        async function updateUserFieldMongoDb(field) {
          // req & res
          const update_my_acct_field_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(field)}`, { method: 'put' })
          const update_my_acct_field_res = await update_my_acct_field_req.json()

          console.log(update_my_acct_field_res)

          // if (update_my_acct_field_res === `the users ${updateMyAcctFieldObj[objField]} has been updated`) {
          //   console.log('the users field has been updated')
          // }
        }

        // update the given field Square async function
        async function updateUserFieldSquare(field) {
          // req & res
          const update_my_acct_field_square_req = await fetch(`/updateUserFieldSquare/${JSON.stringify(field)}`, { method: 'put' })
          const update_my_acct_field_square_res = await update_my_acct_field_square_req.json()

          console.log(update_my_acct_field_square_res)
        }
      })

    }
  }

  // appointments click
  runAppointmentsClick() {
    if (userAccessProfileDropDown.className === 'user-access-profile-drop-down' || window.location.href === `${domainName}/user-access-profile.html`) {

      this.userAccessContainerLeftAppointments.addEventListener('click', () => {
        userAccessContainerLeftMyAccount.className = 'gradually'
        userAccessContainerLeftAppointments.className = 'gradually user-access-profile-selected'
        userAccessContainerRightMyAccount.className = 'user-access-profile-container-right-myaccount hide-container'
        userAccessContainerRightAppointments.className = 'user-access-profile-container-right-appointment'

        userAccessContainerRightAppointments.innerHTML = `<div class="appointment-loading"></div>`

        let usersBookingObj, appointmentService, appointmentAgent, appointmentDuration, appointmentTime, appointmentDate, appointmentDateNTime
  
        // get appointments from square api
        async function getUserAppointments() {
          const get_user_appointments_req = await fetch(`/getUserAppointments`, { method: 'get' })
          const get_user_appointments_res = await get_user_appointments_req.json()
  
          console.log(get_user_appointments_res)
  
          // set users "booking object" to variable
          for (let i = 0; i < get_user_appointments_res.bookings.length; i++) {
            if (get_user_appointments_res.bookings[i].customer_id === JSON.parse(localStorage.getItem('currentUser')).id && get_user_appointments_res.bookings[i].status === 'ACCEPTED') {
              usersBookingObj = get_user_appointments_res.bookings[i]
              console.log(usersBookingObj)
            }
          }

          if (!usersBookingObj) {
            userAccessContainerRightAppointments.innerHTML = `
            <div>
              <h1 class='user-access-profile-selected'>Appointments</h1>
            </div>
            <div class='container-right-appointment-box'>
              <div>
                <h2>It looks like you don't have any bookings.</h2>
              </div>
            </div>
            `
            localStorage.removeItem('subscription-response')
            localStorage.removeItem('payment-response')
          } else {
            // set users booking "duration" to variable
            if (usersBookingObj.appointment_segments[0].duration_minutes / 60 < 1) {
              appointmentDuration = `${usersBookingObj.appointment_segments[0].duration_minutes} mins`
            } else if (usersBookingObj.appointment_segments[0].duration_minutes / 60 === 1) {
              appointmentDuration = `${usersBookingObj.appointment_segments[0].duration_minutes / 60} hr`
            } else {
              appointmentDuration = `${usersBookingObj.appointment_segments[0].duration_minutes / 60} hrs`
            }
            console.log(appointmentDuration)

    
            // set selected "service" from users booking to variable
            for (let i = 0; i < companyServicesArr.length; i++) {
              if (companyServicesObj[`${companyServicesArr[i]}`].service_variation_id === usersBookingObj.appointment_segments[0].service_variation_id) {
                appointmentService = `${companyServicesArr[i]}`
              }
            }
    
            // set appointment "time" from users booking to variable
            appointmentTime = usersBookingObj.start_at.slice(11, 16)
    
            if (appointmentTime === '12:00') {
              appointmentTime = '08:00 AM'
            } else if (appointmentTime === '12:30') {
              appointmentTime = '08:30 AM'
            } else if (appointmentTime === '13:00') {
              appointmentTime = '09:00 AM'
            } else if (appointmentTime === '13:30') {
              appointmentTime = '09:30 AM'
            } else if (appointmentTime === '14:00') {
              appointmentTime = '10:00 AM'
            } else if (appointmentTime === '14:30') {
              appointmentTime = '10:30 AM'
            } else if (appointmentTime === '15:00') {
              appointmentTime = '11:00 AM'
            } else if (appointmentTime === '15:30') {
              appointmentTime = '11:30 AM'
            } else if (appointmentTime === '16:00') {
              appointmentTime = '12:00 PM'
            } else if (appointmentTime === '16:30') {
              appointmentTime = '12:30 PM'
            } else if (appointmentTime === '17:00') {
              appointmentTime = '01:00 PM'
            } else if (appointmentTime === '17:30') {
              appointmentTime = '01:30 PM'
            } else if (appointmentTime === '18:00') {
              appointmentTime = '02:00 PM'
            } else if (appointmentTime === '18:30') {
              appointmentTime = '02:30 PM'
            } else if (appointmentTime === '19:00') {
              appointmentTime = '03:00 PM'
            } else if (appointmentTime === '19:30') {
              appointmentTime = '03:30 PM'
            } else if (appointmentTime === '20:00') {
              appointmentTime = '04:00 PM'
            } else if (appointmentTime === '20:30') {
              appointmentTime = '04:30 PM'
            }  
    
            // set users booking "date"
            appointmentDate = `${usersBookingObj.start_at.slice(5, 7)}-${usersBookingObj.start_at.slice(8, 10)}-${usersBookingObj.start_at.slice(0, 4)}`
            // concat users booking "date and time"
            appointmentDateNTime = `${appointmentDate} @ ${appointmentTime}`
    
            // get the list of employees from Square
            async function getCompanyAgents() {
              // req & res
              const get_company_agents_req = await fetch('/getCompanyAgents', { method: 'get' })
              const get_company_agents_res = await get_company_agents_req.json()
    
              console.log(get_company_agents_res)
    
              // set company "agent" from users booking to variable
              for (let i = 0; i < get_company_agents_res.team_member_booking_profiles.length; i++) {
                if (get_company_agents_res.team_member_booking_profiles[i].team_member_id = get_user_appointments_res.bookings[i].creator_details.team_member_id) {
                  appointmentAgent = `${get_company_agents_res.team_member_booking_profiles[i].display_name}`
                }
  
                // display appointment segments
                if (usersBookingObj.status === 'ACCEPTED') {

                  if (appointmentService === 'Concierge Session') { // _REPLACE_ME_
                    let appointmentTime1 = new Date(JSON.parse(localStorage.getItem('currentUser')).concierge_bookings.booking_time1).toLocaleString()
                    let newAppointmentTime1 = appointmentTime1.replace(',', ' @')
                    let appointmentTime2 = new Date(JSON.parse(localStorage.getItem('currentUser')).concierge_bookings.booking_time2).toLocaleString()
                    let newAppointmentTime2 = appointmentTime2.replace(',', ' @')
                    let appointmentTime3 = new Date(JSON.parse(localStorage.getItem('currentUser')).concierge_bookings.booking_time3).toLocaleString()
                    let newAppointmentTime3 = appointmentTime3.replace(',', ' @')
                    let appointmentTime4 = new Date(JSON.parse(localStorage.getItem('currentUser')).concierge_bookings.booking_time4).toLocaleString()
                    let newAppointmentTime4 = appointmentTime4.replace(',', ' @')

                    userAccessContainerRightAppointments.innerHTML = `                    
                    <div>
                      <h1 class='user-access-profile-selected'>Appointments</h1>
                    </div>
                    <div class='container-right-appointment-box'>
                      <div class='container-right-appointment-box-2'>
                        <h2>Service: ${appointmentService}</h2>
                        <h2>Agent: ${appointmentAgent}</h2>
                        <h2>Duration: ${appointmentDuration}</h2>
                        <h2>Appointment 1: ${newAppointmentTime1}</h2>
                        <h2>Appointment 2: ${newAppointmentTime2}</h2>
                        <h2>Appointment 3: ${newAppointmentTime3}</h2>
                        <h2>Appointment 4: ${newAppointmentTime4}</h2>
                      </div>
                      <div>
                        <i id='appointment-delete-btn' class="bi bi-x-lg"></i>
                      </div>
                    </div>
                    `
                  } else {
                    userAccessContainerRightAppointments.innerHTML = `
                    <div>
                      <h1 class='user-access-profile-selected'>Appointments</h1>
                    </div>
                    <div class='container-right-appointment-box'>
                      <div class='container-right-appointment-box-2'>
                        <h2>Service: ${appointmentService}</h2>
                        <h2>Agent: ${appointmentAgent}</h2>
                        <h2>Duration: ${appointmentDuration}</h2>
                        <h2>Upcoming Appointment: ${appointmentDateNTime}</h2>
                      </div>
                      <div>
                        <i id='appointment-delete-btn' class="bi bi-x-lg"></i>
                      </div>
                    </div>
                      `
                  }
                  let apptDeleteBtn = document.getElementById('appointment-delete-btn')
                  apptDeleteBtn.addEventListener('click', () => {
                    console.log('I want to delete this booking')
                    // ask are you sure you want to delete the booking?
                    const cancelBookingAlert = window.confirm('Are you sure you would like to cancel this booking?')

                    if (cancelBookingAlert) {
                      userAccessContainerRightAppointments.innerHTML = `<div class='appointment-loading'></div>`

                      // if concierge session is true send to use other cancel booking function else use the other concierge booking function
                      if (appointmentService === 'Concierge Session') {
                        let cancelBookingObj = {
                          email_address: JSON.parse(localStorage.getItem('currentUser')).email_address
                        }
                        // cancel all 4 bookings/cancel subscription/clear "concierge_bookings" object MDB
                        for (let i = 0; i < 4; i++) {
                          cancelBookingObj.id = JSON.parse(localStorage.getItem('currentUser')).concierge_bookings[`booking_id${i + 1}`]
  
                          cancelBookingService5(cancelBookingObj, i)
                            .then(() => { console.log('cancelBookingService5Obj() has been sent to the server') })
                            .catch((error) => { console.log(error) })

                          if (i === 3) {
                            cancelSubscription()
                            .then(() => { console.log('cancelSubscription() has been sent to the server') })
                            .catch((error) => { console.log(error) })

                            let clearConciergeBookingObj = {
                              email_address: JSON.parse(localStorage.getItem('currentUser')).email_address
                            }
                            // clear "booking_time" parameters -- mongodb
                            for (let i = 0; i < 4; i++) {
                              clearConciergeBookingObj.concierge_bookings[`booking_time${i + 1}`] = ''
                              clearConciergeBookingValues(clearConciergeBookingObj)
                                .then(() => { console.log('clearConciergeBookingValues() has been sent to the server') })
                                .catch((error) => { console.log(error) } )
                            }
                            // clear "booking_id" parameters -- mongodb
                            for (let i = 0; i < 4; i++) {
                              clearConciergeBookingObj.concierge_bookings[`booking_id${i + 1}`] = ''
                              clearConciergeBookingValues(clearConciergeBookingObj)
                                .then(() => { console.log('clearConciergeBookingValues() has been sent to the server') })
                                .catch((error) => { console.log(error) } )
                            }
                          }
                        }
                      } else {
                          // cancel booking
                          cancelBooking(usersBookingObj)
                            .then(() => { console.log('cancelBooking() has been sent to the express server') })
                            .catch((error) => { console.log(error) })        
                      } 

                      // delete booking from square 
                      async function cancelBooking() {
                        // req & res
                        const cancel_booking_req = await fetch(`/cancelBooking/${JSON.stringify(usersBookingObj)}`, { method: 'post'})
                        const cancel_booking_res = await cancel_booking_req.json()
                        console.log(cancel_booking_res)

                        // once done show the else message down below
                        if (cancel_booking_res.booking.status === 'CANCELLED_BY_SELLER') {
                          setTimeout(() => {
                            console.log('your booking has been canceled')
                            localStorage.removeItem('payment-response')
                            localStorage.removeItem('subscription-response')
                            localStorage.removeItem('servie1Price')
                            localStorage.removeItem('servie2Price')
                            localStorage.removeItem('servie3Price')
                            localStorage.removeItem('servie4Price')
                            localStorage.removeItem('servie5Price')
                            
                            userAccessContainerRightAppointments.innerHTML = `
                            <div>
                              <h1 class='user-access-profile-selected'>Appointments</h1>
                            </div>
                            <div class='container-right-appointment-box'>
                              <div>
                                <h2>It looks like you don't have any bookings.</h2>
                              </div>
                            </div>
                            `
                            localStorage.removeItem('subscription-response')
                            localStorage.removeItem('payment-response')
                          }, 2000)

                        }
                      }

                      // cancel booking service 5
                      async function cancelBookingService5(object, count) {
                        // request && response
                        const cancel_booking_req = await fetch(`/cancelBooking/${JSON.stringify(object)}`, { method: 'post'})
                        const cancel_booking_res = await cancel_booking_req.json()
                        console.log(cancel_booking_res)

                        // once done show the else message down below
                        if (count === 3) {
                          console.log(count)
                          if (cancel_booking_res.booking.status === 'CANCELLED_BY_SELLER') {
                            setTimeout(() => {
                              console.log('your booking has been canceled')
                              localStorage.removeItem('payment-response')
                              localStorage.removeItem('subscription-response')
                              localStorage.removeItem('servie1Price')
                              localStorage.removeItem('servie2Price')
                              localStorage.removeItem('servie3Price')
                              localStorage.removeItem('servie4Price')
                              localStorage.removeItem('servie5Price')

                              userAccessContainerRightAppointments.innerHTML = `
                              <div>
                                <h1 class='user-access-profile-selected'>Appointments</h1>
                              </div>
                              <div class='container-right-appointment-box'>
                                <div>
                                  <h2>It looks like you don't have any bookings.</h2>
                                </div>
                              </div>
                              `
                              localStorage.removeItem('subscription-response')
                              localStorage.removeItem('payment-response')
                            }, 2000)
                          }
                        } 
                      }

                      // cancel subscription (if applicable)
                      async function cancelSubscription() {
                        // req && res
                        const cancel_sub_req = await fetch(`/cancelSubscription/${localStorage.getItem('currentUser')}`, { method: 'POST' })
                        const cancel_sub_res = await cancel_sub_req.json()

                        // if successful
                        if (cancel_sub_res.subscription) {
                          // clear/update subscription id in MongoDB
                          async function updateMongoDB() {
                            // req && res
                            let newSubId = {
                              subscription_id: ''
                            }
                            const clear_subscription_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(newSubId)}`, { method: 'PUT' })
                            const clear_subscription_res = await clear_subscription_req.json()
                            console.log(clear_subscription_res)
                          }
                            updateMongoDB()
                              .then(() => { console.log('updatemongoDB() has been sent to the server') })
                              .catch((error) => { console.log(error) })
                          
                        }
                      }
                        
                      // update/clear "concierge_booking" values in mongoDb
                      async function clearConciergeBookingValues(object) { 
                        // request & response
                        const clear_cb_values_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(object)}`, { method: "PUT" })
                        const clear_cb_values_res = await clear_cb_values_req.json()
                        console.log(clear_cb_values_res)
                      }
                    } 
                  })
                }

              }

            }
              getCompanyAgents()
                .then(() => { console.log('peace') })
                .catch((error) => { console.log(error) })
          }
        }
          getUserAppointments()
            .then(() => { console.log('the getUserAppointments() has been sent to express server') })
            .catch((error) => { console.log(error) })
      })
    }
  }
}

const userAccessProfileClass = new UserAccessProfile(getUserSquareInfo, userAccessContainerLeftMyAccount, userAccessProfileMyAccountFirstN, userAccessProfileMyAccountLastN, userAccessProfileMyAccountNickN, userAccessProfileMyAccountDOB, userAccessProfileMyAccountAddress, userAccessProfileMyAccountState, userAccessProfileMyAccountCity, userAccessProfileMyAccountZipCode, userAccessProfileMyAccountEmail, userAccessProfileMyAccountPhone, userAccessProfileMyAccountPassword, userAccessContainerLeftAppointments, userAccessContainerRightMyAccount,userAccessContainerRightAppointments)






// Service Info Modals
const service1InfoModal = document.getElementById('service-1-info-modal')
const service1InfoModalClose = document.getElementById('service-1-info-modal-close')
const service1InfoModalBookNowBtn = document.getElementById('service-1-info-modal-book-now-btn')






















class Header {
  constructor(companyLogo, companyOptions, companyOptionsIcon, companyOptionsDropDown, companyOptionsEle, companyAny, companyLanguages, companyLanguagesIcon, companyLanguagesDropDown, companyOptions1, companyOptions2, companyOptions3, companyOptions4, companyOptions5, bookingModalS1, companyLanguagesEle, companyCallToAction, companyChatSupport, companyChatSupportChatNow, companyChatSupportContainerDetails1, companyChatSupportContainerDetails2, companyChatSupportModal, companyChatSupportModalClose1, companyChatSupportModalClose2, companyChatSupportContainerMessages, companyChatSupportUserInput, companyChatSupportUserInputValue, companyChatSupportSendBtn, userAccessProfile, userAccessProfileDropDown, userAccessAppointments, userAccessContainerLeftAppointments, userAccessContainerRightAppointments, userAccessMyAccount, userAccessContainerLeftMyAccount, userAccessContainerRightMyAccount, userAccessProfileMyAccountFirstN, userAccessProfileMyAccountLastN, userAccessProfileMyAccountNickN, userAccessProfileMyAccountDOB, userAccessProfileMyAccountAddress, userAccessProfileMyAccountState, userAccessProfileMyAccountCity, userAccessProfileMyAccountZipCode, userAccessProfileMyAccountEmail, userAccessProfileMyAccountPhone, userAccessProfileMyAccountPassword, userAccessLogin, userAccessSignUp, userAccessSignOut, userLoggedIn, color1, color2, transDur, existingAppointmentBtn) {
    this.companyLogo = companyLogo // company logo

    this.companyOptions = companyOptions // e.g services
    this.companyOptionsIcon = companyOptionsIcon //  e.g drop-down arrow
    this.companyOptionsDropDown = companyOptionsDropDown // e.g container itself
    this.companyOptionsEle = companyOptionsEle // e.g (companyOptions + companyOptionsIcon)
    this.companyOptionsCounter = 0 // e.g counter for class switches
    this.companyOptions1 = companyOptions1
    this.companyOptions2 = companyOptions2
    this.companyOptions3 = companyOptions3
    this.companyOptions4 = companyOptions4
    this.companyOptions5 = companyOptions5

    this.bookingModalS1 = bookingModalS1

    this.companyAny = companyAny // e/g news, support, . Any nav of choice

    this.companyLanguages = companyLanguages // e.g languages for different users
    this.companyLanguagesIcon = companyLanguagesIcon // e.g icon for languages (globe)
    this.companyLanguagesDropDown = companyLanguagesDropDown
    this.companyLanguagesEle = companyLanguagesEle
    this.companyLanguagesCounter = 0

    this.companyCallToAction = companyCallToAction // e.g an immediate call to action option e.g "lets get started" 

    this.companyChatSupport = companyChatSupport // e.g chat support
    this.companyChatSupportChatNow = companyChatSupportChatNow
    this.companyChatSupportContainerDetails1 = companyChatSupportContainerDetails1
    this.companyChatSupportContainerDetails2 = companyChatSupportContainerDetails2
    this.companyChatSupportContainerMessages = companyChatSupportContainerMessages
    this.companyChatSupportModal = companyChatSupportModal
    this.companyChatSupportModalClose1 = companyChatSupportModalClose1
    this.companyChatSupportModalClose2 = companyChatSupportModalClose2
    this.companyChatSupportUserInput = companyChatSupportUserInput
    this.companyChatSupportUserInputValue = companyChatSupportUserInputValue
    this.companyChatSupportSendBtn = companyChatSupportSendBtn

    this.userAccessProfile = userAccessProfile // e.g button to access all of users details
    this.userAccessProfileDropDown = userAccessProfileDropDown
    this.userAccessProfileCounter = 0
    this.userAccessAppointments = userAccessAppointments
    this.userAccessContainerLeftAppointments = userAccessContainerLeftAppointments
    this.userAccessContainerRightAppointments = userAccessContainerRightAppointments
    this.userAccessMyAccount = userAccessMyAccount
    this.userAccessContainerLeftMyAccount = userAccessContainerLeftMyAccount
    this.userAccessContainerRightMyAccount = userAccessContainerRightMyAccount

    this.userAccessProfileMyAccountFirstN = userAccessProfileMyAccountFirstN 
    this.userAccessProfileMyAccountLastN = userAccessProfileMyAccountLastN
    this.userAccessProfileMyAccountNickN = userAccessProfileMyAccountNickN
    this.userAccessProfileMyAccountDOB = userAccessProfileMyAccountDOB
    this.userAccessProfileMyAccountAddress = userAccessProfileMyAccountAddress
    this.userAccessProfileMyAccountState = userAccessProfileMyAccountState
    this.userAccessProfileMyAccountCity = userAccessProfileMyAccountCity
    this.userAccessProfileMyAccountZipCode = userAccessProfileMyAccountZipCode
    this.userAccessProfileMyAccountEmail = userAccessProfileMyAccountEmail
    this.userAccessProfileMyAccountPhone = userAccessProfileMyAccountPhone
    this.userAccessProfileMyAccountPassword = userAccessProfileMyAccountPassword

    this.existingAppointmentBtn = existingAppointmentBtn

    this.userAccessLogin = userAccessLogin
    this.userAccessSignUp = userAccessSignUp
    this.userAccessSignOut = userAccessSignOut

    this.userLogged - userLoggedIn

    this.color1 = color1
    this.color2 = color2
    this.transDur = transDur

    this.runCompanyLogo = this.runCompanyLogo()
    this.runCompanyOptions = this.runCompanyOptions()
    this.runCompanyAny = this.runCompanyAny()
    this.runCompanyLanguages = this.runCompanyLanguages()
    this.runCompanyCallToAction = this.runCompanyCallToAction()
    this.runCompanyChatSupport = this.runCompanyChatSupport()
    this.runUserAccessProfile = this.runUserAccessProfile()
  }

  runCompanyLogo() {
   // none
  }

  runCompanyOptions() {

    // onclick
    this.companyOptionsEle.forEach((element) => {
      console.log(this.companyOptionsEle)
      element.addEventListener('click', () => {
        this.companyOptionsCounter++
        if (this.companyOptionsCounter === 1) {
          this.companyOptions.style.color = this.color1
          this.companyOptionsIcon.style.color = this.color1
          this.companyOptionsIcon.className = 'company-options-ele bi bi-chevron-down spin-up hover-black'
          this.companyOptionsDropDown.className = 'company-options-drop-down'      
        } else if (this.companyOptionsCounter === 2) {
          this.companyOptions.style.color = this.color2
          this.companyOptionsIcon.style.color = this.color2
          this.companyOptionsIcon.className = 'company-options-ele bi bi-chevron-down spin-down hover-black'
          this.companyOptionsDropDown.className = 'company-options-drop-down hide-container'
          this.companyOptionsCounter = 0
        }
        console.log(this.companyOptionsCounter)
      })
    })

    // on mouseover
    this.companyOptionsEle.forEach((element) => {
      element.addEventListener('mouseover', ()=> {
        this.companyOptions.style.transitionDuration = this.transDur
        this.companyOptionsIcon.style.transitionDuration = this.transDur
        this.companyOptions.style.color = this.color1
        this.companyOptionsIcon.style.color = this.color1
      })      
    })

    // on mouseleave
    this.companyOptionsEle.forEach((element) => {
      element.addEventListener('mouseleave', (event)=> {
        this.companyOptions.style.transitionDuration = this.transDur
        this.companyOptionsIcon.style.transitionDuration = this.transDur
        if (this.companyOptionsCounter === 1 && event.target === this.companyOptions || this.companyOptionsCounter === 1 && event.target === this.companyOptionsIcon) {
          // do nothing
        } else {
          this.companyOptions.style.color = this.color2
          this.companyOptionsIcon.style.color = this.color2
        }
      })
    })

    // off drop down click
    document.addEventListener('click', (event) => {
      if (this.companyOptionsDropDown.className === 'company-options-drop-down') {
        if (!this.companyOptionsDropDown.contains(event.target) && event.target !== this.companyOptions && event.target !== companyOptionsIcon) {
          this.companyOptionsDropDown.className = 'company-options-drop-down hide-container'
          this.companyOptionsIcon.className = 'company-options-ele bi bi-chevron-down spin-down hover-black'
          this.companyOptions.style.color = this.color2
          this.companyOptionsIcon.style.color = this.color2
          this.companyOptionsCounter = 0
        }
      }
    })

    // comapany option 1 click
    this.companyOptions1.addEventListener('click', (event)=> {
      companyOptions1.style.pointerEvents = 'none'
      setTimeout(() => {
        companyOptions1.style.pointerEvents = 'auto'
      },3000)
      console.log('ive been clicked')
      localStorage.removeItem('payment-response')
      // if the customer is not signed in
      if (!localStorage.getItem('currentUser')) {
        console.log('Please Sign In or Sign Up.')
        pleaseLoginSignUpModal.className = 'please-login-signup-modal-container'
      } else {

        // fetch bookings -- see if customer already has a booking
        async function getCustomerAppointments() {
          // req && res
        const get_customer_appointments_req = await fetch('getUserAppointments', { method: 'GET' })
        const get_customer_appointments_res = await get_customer_appointments_req.json()
        console.log(get_customer_appointments_res)

        for (let i = 0; i < get_customer_appointments_res.bookings.length; i++) {
          if (get_customer_appointments_res.bookings[i].customer_id === JSON.parse(localStorage.getItem('currentUser')).id && get_customer_appointments_res.bookings[i].status === 'ACCEPTED') {
            console.log('you have an existing appointment already')

            // display already have a booking modal
            existingAppointmentModal.className = 'existing-appointment-modal'

            existingAppointmentModalClose.addEventListener('click', () => {
              existingAppointmentModal.className = 'existing-appointment-modal hide-container'
            })

            document.addEventListener('click', (event) => {
              event.target.className === existingAppointmentModal.className ? existingAppointmentModal.className = 'existing-appointment-modal hide-container' : console.log('Click away form the modal to exit')
            })
          } else {
            if (i === get_customer_appointments_res.bookings.length - 1 && existingAppointmentModal.className !== 'existing-appointment-modal') {
              // set the servive boolean to true
              companyOptions1Bool = true
              companyOptions2Bool = false
              companyOptions3Bool = false
              companyOptions4Bool = false
              companyOptions5Bool = false

              // open service 1 modal and fetch/display all employees
              bookingModalS1.className = 'booking-modal-s1' 
              service1Component.selectAgent()
              break
            }
          }
        }
        }
          getCustomerAppointments()
            .then(() => { console.log('getCustomerAppointments() has been sent to the express server') })
            .catch((error) => { console.log(error) })
      }
    })

    // company option 2 click
    this.companyOptions2.addEventListener('click', ()=> {
      companyOptions2.style.pointerEvents = 'none'
      setTimeout(() => {
        companyOptions2.style.pointerEvents = 'auto'
      },3000)
      localStorage.removeItem('payment-response')
      // if the customer is not signed in
      if (!localStorage.getItem('currentUser')) {
        console.log('Please Sign In or Sign Up.')
        pleaseLoginSignUpModal.className = 'please-login-signup-modal-container'
      } else {
          // fetch bookings -- see if customer already has a booking
          async function getCustomerAppointments() {
            // req && res
            const get_customer_appointments_req = await fetch('getUserAppointments', { method: 'GET' })
            const get_customer_appointments_res = await get_customer_appointments_req.json()
            console.log(get_customer_appointments_res)

            for (let i = 0; i < get_customer_appointments_res.bookings.length; i++) {
              console.log(get_customer_appointments_res.bookings[i].status)
              if (get_customer_appointments_res.bookings[i].customer_id === JSON.parse(localStorage.getItem('currentUser')).id && get_customer_appointments_res.bookings[i].status === 'ACCEPTED') {
                console.log('you have an existing appointment already')

                // display already have a booking modal
                existingAppointmentModal.className = 'existing-appointment-modal'

                existingAppointmentModalClose.addEventListener('click', () => {
                  existingAppointmentModal.className = 'existing-appointment-modal hide-container'
                })

                document.addEventListener('click', (event) => {
                  event.target.className === existingAppointmentModal.className ? existingAppointmentModal.className = 'existing-appointment-modal hide-container' : console.log('Click away form the modal to exit')
                })
              } else {
                if (i === get_customer_appointments_res.bookings.length - 1 && existingAppointmentModal.className !== 'existing-appointment-modal') {
                  // set the service clicked boolean to true
                  companyOptions1Bool = false
                  companyOptions2Bool = true
                  companyOptions3Bool = false
                  companyOptions4Bool = false
                  companyOptions5Bool = false

                  // open service 2 modal and fetch/display all employees
                  bookingModalS2.className = 'booking-modal-s2'
                  service2Component.selectAgent()
                  break
                }
              }
            }
          }
            getCustomerAppointments()
              .then(() => { console.log('getCustomerAppointments() has been sent to the express server') })
              .catch((error) => { console.log(error) })
      }
    })

    // company option 3 click
    this.companyOptions3.addEventListener('click', ()=> {
      companyOptions3.style.pointerEvents = 'none'
      setTimeout(() => {
        companyOptions3.style.pointerEvents = 'auto'
      },2000)
      console.log('ive been clicked')
      localStorage.removeItem('payment-response')
      // if the customer is not signed in
      if (!localStorage.getItem('currentUser')) {
        pleaseLoginSignUpModal.className = 'please-login-signup-modal-container'
      } else {

        // fetch bookings -- see if customer already has a booking
        async function getCustomerAppointments() {
          // req && res
        const get_customer_appointments_req = await fetch('getUserAppointments', { method: 'GET' })
        const get_customer_appointments_res = await get_customer_appointments_req.json()
        console.log(get_customer_appointments_res)

        for (let i = 0; i < get_customer_appointments_res.bookings.length; i++) {
          if (get_customer_appointments_res.bookings[i].customer_id === JSON.parse(localStorage.getItem('currentUser')).id && get_customer_appointments_res.bookings[i].status === 'ACCEPTED') {
            console.log('you have an existing appointment already')

            // display already have a booking modal
            existingAppointmentModal.className = 'existing-appointment-modal'

            existingAppointmentModalClose.addEventListener('click', () => {
              existingAppointmentModal.className = 'existing-appointment-modal hide-container'
            })

            document.addEventListener('click', (event) => {
              event.target.className === existingAppointmentModal.className ? existingAppointmentModal.className = 'existing-appointment-modal hide-container' : console.log('Click away form the modal to exit')
            })
          } else {
            if (i === get_customer_appointments_res.bookings.length - 1 && existingAppointmentModal.className !== 'existing-appointment-modal') {
              // set the servive boolean to true
              companyOptions1Bool = false
              companyOptions2Bool = false
              companyOptions3Bool = true
              companyOptions4Bool = false
              companyOptions5Bool = false

              // open service 1 modal and fetch/display all employees
              bookingModalS3.className = 'booking-modal-s3' 
              service3Component.selectAgent()
              break
            }
          }
        }
        }
          getCustomerAppointments()
            .then(() => { console.log('getCustomerAppointments() has been sent to the express server') })
            .catch((error) => { console.log(error) })
      }

      // bookingModalS1.className = 'booking-modal-s1'
    })

    // company option 4 click
    this.companyOptions4.addEventListener('click', ()=> {
      companyOptions4.style.pointerEvents = 'none'
      setTimeout(() => {
        companyOptions4.style.pointerEvents = 'auto'
      },2000)
      console.log('ive been clicked')
      localStorage.removeItem('payment-response')
      // if the customer is not signed in
      if (!localStorage.getItem('currentUser')) {
        pleaseLoginSignUpModal.className = 'please-login-signup-modal-container'
      } else {

        // fetch bookings -- see if customer already has a booking
        async function getCustomerAppointments() {
          // req && res
        const get_customer_appointments_req = await fetch('getUserAppointments', { method: 'GET' })
        const get_customer_appointments_res = await get_customer_appointments_req.json()
        console.log(get_customer_appointments_res)

        for (let i = 0; i < get_customer_appointments_res.bookings.length; i++) {
          if (get_customer_appointments_res.bookings[i].customer_id === JSON.parse(localStorage.getItem('currentUser')).id && get_customer_appointments_res.bookings[i].status === 'ACCEPTED') {
            console.log('you have an existing appointment already')

            // display already have a booking modal
            existingAppointmentModal.className = 'existing-appointment-modal'

            existingAppointmentModalClose.addEventListener('click', () => {
              existingAppointmentModal.className = 'existing-appointment-modal hide-container'
            })

            document.addEventListener('click', (event) => {
              event.target.className === existingAppointmentModal.className ? existingAppointmentModal.className = 'existing-appointment-modal hide-container' : console.log('Click away form the modal to exit')
            })
          } else {
            if (i === get_customer_appointments_res.bookings.length - 1 && existingAppointmentModal.className !== 'existing-appointment-modal') {
              // set the servive boolean to true
              companyOptions1Bool = false
              companyOptions2Bool = false
              companyOptions3Bool = false
              companyOptions4Bool = true
              companyOptions5Bool = false

              // open service 1 modal and fetch/display all employees
              bookingModalS4.className = 'booking-modal-s4' 
              service4Component.selectAgent()
              break
            }
          }
        }
        }
          getCustomerAppointments()
            .then(() => { console.log('getCustomerAppointments() has been sent to the express server') })
            .catch((error) => { console.log(error) })
      }
    })

    // company option 5 click
    this.companyOptions5.addEventListener('click', ()=> {
      companyOptions5.style.pointerEvents = 'none'
      setTimeout(() => {
        companyOptions5.style.pointerEvents = 'auto'
      },2000)
      console.log('ive been clicked')
      localStorage.removeItem('subscription-response')
      localStorage.removeItem('payment-response')
      // if the customer is not signed in
      if (!localStorage.getItem('currentUser')) {
        pleaseLoginSignUpModal.className = 'please-login-signup-modal-container'
      } else {

        // fetch bookings -- see if customer already has a booking
        async function getCustomerAppointments() {
          // req && res
        const get_customer_appointments_req = await fetch('getUserAppointments', { method: 'GET' })
        const get_customer_appointments_res = await get_customer_appointments_req.json()
        console.log(get_customer_appointments_res)

        for (let i = 0; i < get_customer_appointments_res.bookings.length; i++) {
          if (get_customer_appointments_res.bookings[i].customer_id === JSON.parse(localStorage.getItem('currentUser')).id && get_customer_appointments_res.bookings[i].status === 'ACCEPTED') {
            console.log('you have an existing appointment already')

            // display already have a booking modal
            existingAppointmentModal.className = 'existing-appointment-modal'

            existingAppointmentModalClose.addEventListener('click', () => {
              existingAppointmentModal.className = 'existing-appointment-modal hide-container'
            })

            document.addEventListener('click', (event) => {
              event.target.className === existingAppointmentModal.className ? existingAppointmentModal.className = 'existing-appointment-modal hide-container' : console.log('Click away form the modal to exit')
            })
          } else {
            if (i === get_customer_appointments_res.bookings.length - 1 && existingAppointmentModal.className !== 'existing-appointment-modal') {
              // set the servive boolean to true
              companyOptions1Bool = false
              companyOptions2Bool = false
              companyOptions3Bool = false
              companyOptions4Bool = false
              companyOptions5Bool = true

              // open service 1 modal and fetch/display all employees
              bookingModalS5.className = 'booking-modal-s5' 
              service5Component.selectAgent()
              break
            }
          }
        }
        }
          getCustomerAppointments()
            .then(() => { console.log('getCustomerAppointments() has been sent to the express server') })
            .catch((error) => { console.log(error) })
      }
    })
  }

  runCompanyAny() {
    // "mouseover"
    for (let i = 0; i < companyAny.children.length; i++) {
      companyAny.children[i].addEventListener('mouseover', () => {
        console.log('im hovering over you')
        for (let j = 0; j < companyAny.children.length; j ++) {
          companyAny.children[j].style.color = 'rgb(240, 94, 124)'
          companyAny.children[j].style.cursor = 'pointer'
        }
      })
    }
    // "mouseleave"
    for (let i = 0; i < companyAny.children.length; i++) {
      companyAny.children[i].addEventListener('mouseleave', () => {
        console.log('im no longer hovering over you')
        for (let j = 0; j < companyAny.children.length; j ++) {
          companyAny.children[j].style.color = ''
        }
      })
    }
    // "click"
    companyAny.addEventListener('click', () => {
      window.location.href = domainName
    })
  }

  runCompanyLanguages() {
    //on click
    this.companyLanguagesEle.forEach((element) => {
      element.addEventListener('click', () => {
        this.companyLanguagesCounter++
        if (this.companyLanguagesCounter === 1) {
          this.companyLanguages.style.color = this.color1
          this.companyLanguagesIcon.style.color = this.color1
          this.companyLanguagesIcon.className = 'company-languages-ele bi bi-globe hover-black'
          this.companyLanguagesDropDown.className = 'company-languages-drop-down'      
        } else if (this.companyLanguagesCounter === 2) {
          this.companyLanguages.style.color = this.color2
          this.companyLanguagesIcon.style.color = this.color2
          this.companyLanguagesIcon.className = 'company-languages-ele bi bi-globe hover-black'
          this.companyLanguagesDropDown.className = 'company-languages-drop-down hide-container'
          this.companyLanguagesCounter = 0
        }
      })
    })

    // on mouseover
    this.companyLanguagesEle.forEach((element) => {
      element.addEventListener('mouseover', ()=> {
        this.companyLanguages.style.transitionDuration = this.transDur
        this.companyLanguagesIcon.style.transitionDuration = this.transDur
        this.companyLanguages.style.color = this.color1
        this.companyLanguagesIcon.style.color = this.color1
      })      
    })

    // on mouseleave
    this.companyLanguagesEle.forEach((element) => {
      element.addEventListener('mouseleave', (event)=> {
        this.companyLanguages.style.transitionDuration = this.transDur
        this.companyLanguagesIcon.style.transitionDuration = this.transDur
        if (this.companyLanguagesCounter === 1 && event.target === this.companyLanguages || this.companyLanguagesCounter === 1 && event.target === this.companyLanguagesIcon) {
        } else {
          this.companyLanguages.style.color = this.color2
          this.companyLanguagesIcon.style.color = this.color2
        }
      })
    })

    // off drop down click
    document.addEventListener('click', (event) => {
      if (this.companyLanguagesDropDown.className === 'company-languages-drop-down') {
        if (!this.companyLanguagesDropDown.contains(event.target) && event.target !== this.companyLanguages && event.target !== companyLanguagesIcon) {
          this.companyLanguagesDropDown.className = 'company-languages-drop-down hide-container'
          this.companyLanguagesIcon.className = 'company-languages-ele bi bi-globe hover-black'
          this.companyLanguages.style.color = this.color2
          this.companyLanguagesIcon.style.color = this.color2
          this.companyLanguagesCounter = 0
        }
      }
    })


  }

  runCompanyCallToAction() {
    this.companyCallToAction.addEventListener('click', () => {
      service1InfoModal.className = 'service-1-info-modal'

      service1InfoModalClose.addEventListener('click', () => {
        service1InfoModal.className = 'service-1-info-modal hide-container'
      })

      service1InfoModalBookNowBtn.addEventListener('click', () => {
        service1InfoModal.className = 'service-1-info-modal hide-container'
        companyOptions1.click()
      })

      document.addEventListener('click', (event) => {
        if (event.target.className === service1InfoModal.className) {
          service1InfoModal.className = 'service-1-info-modal hide-container'
        }
      })
    })
  }

  runCompanyChatSupport() {
    // open modal click
    this.companyChatSupport.addEventListener('click', (event) => {
      this.companyChatSupportModal.className = 'company-chat-support-container-modal'

      if (this.companyChatSupportModal.className === 'company-chat-support-container-modal') {
        this.companyChatSupport.className = 'bi bi-headset h-icon-1 chat-open'
      } else {
        this.companyChatSupport.className = 'bi b-headset h-icon-1'
      }

      // async -- find total employees with accounts on text magic

    })

    // close modal click
    this.companyChatSupportModalClose1.addEventListener('click', () => {
      this.companyChatSupportModal.className = 'company-chat-support-container-modal hide-container'
      this.companyChatSupport.className = 'bi bi-headset h-icon-1'
    })

    this.companyChatSupportModalClose2.addEventListener('click', () => {
      this.companyChatSupportModal.className = 'company-chat-support-container-modal hide-container'
      this.companyChatSupport.className = 'bi bi-headset h-icon-1'
    })

    // chat now click
    this.companyChatSupportChatNow.addEventListener('click', () => {
      this.companyChatSupportContainerDetails1.className = 'company-chat-support-container-details-1 hide-container'
      this.companyChatSupportContainerDetails2.className = 'company-chat-support-container-details-2'
    })

    // user sends a message
    this.companyChatSupportSendBtn.addEventListener('click', () => {
      if (this.companyChatSupportUserInput.value !== '') {
        this.companyChatSupportUserInputValue.details.user_input = this.companyChatSupportUserInput.value
        this.companyChatSupportUserInputValue.details.time_sent = new Date()

        let userContainer = document.createElement('div')
        userContainer.className = 'company-chat-support-container-details-2-body-right'

        let userTimeEleContainer = document.createElement('div')
        userTimeEleContainer.className = 'company-chat-support-container-details-2-body-right-message-time'
        
        let userTimeEleP = document.createElement('p')
        userTimeEleP.textContent = new Date()
        
        userTimeEleContainer.appendChild(userTimeEleP)

        let userMessageEleContainer = document.createElement('div')
        userMessageEleContainer.className = 'company-chat-support-container-details-2-body-right-message-container'

        // let userContainerSpaceBetween = document.createElement('div')
        // userContainerSpaceBetween.className = 'space-between'

        let userMessageEle = document.createElement('div')
        userMessageEle.className = 'company-chat-support-container-details-2-body-right-message'

        let userMessageEleP = document.createElement('p')
        userMessageEleP.textContent = this.companyChatSupportUserInput.value

        userMessageEle.appendChild(userMessageEleP)

        let userPfp = document.createElement('img')
        userPfp.src = './img/employee_of_the_month.jpg'

        userMessageEleContainer.appendChild(userMessageEle)
        userMessageEleContainer.appendChild(userPfp) 
        
        userContainer.appendChild(userTimeEleContainer)
        userContainer.appendChild(userMessageEleContainer)
        
        this.companyChatSupportContainerMessages.appendChild(userContainer)

        this.companyChatSupportUserInput.value = ''

        console.log(this.companyChatSupportUserInputValue.details)

        // send text message to company employee
        // async function sendChatMessage() {
        //   // req & res
        //   const send_chat_req = await fetch(`/sendChatMessage/${JSON.stringify(companyChatSupportUserInputValue.details)}`, { method: 'post' })
        //   const send_chat_res = await send_chat_req.json()

        //   console.log(send_chat_res)
        // }
        //   sendChatMessage()
        //     .then(() => { console.log('the chat message has been sent to the server') })
        //     .catch((error) => { console.log(error) })
      }
    })

    // get data from text messeage
    // if new message exists append contents to new div
    // display in the 

  }

  runUserAccessProfile() {

    // user access profile icon click
    this.userAccessProfile.addEventListener('click', () => {
      this.userAccessProfileCounter++
      if (this.userAccessProfileCounter === 1) /* integrate && if userLoggedIn */ {
        this.userAccessProfileDropDown.className = 'user-access-profile-drop-down'
      } else if (this.userAccessProfileCounter == 1) /* integrate && if !userLoggedIn */  {
        this.userAccessProfileModal.className = 'signup-for-free-container-modal'
      } else if (this.userAccessProfileCounter === 2) /* integrate && if userLoggedIn */  {
        this.userAccessProfileDropDown.className = 'user-access-profile-drop-down hide-container'
        this.userAccessProfileCounter = 0
      }     
    })

    // check to change user access profile icon live circle
    if (localStorage.getItem('liveOn')) {
      userAccessProfile.className = 'bi bi-person-circle h-icon-green'
      this.userAccessAppointments.className = 'user-access-profile-2-drop-down'
      this.userAccessMyAccount.className = 'user-access-profile-3-drop-down'
      this.userAccessLogin.className = 'user-access-profile-4-drop-down hide-container'
      this.userAccessSignUp.className = 'user-access-profile-5-drop-down hide-container'
      this.userAccessSignOut.className = 'user-access-profile-6-drop-down'
    } else {
    }

    // drop down list items

    // my account
    this.userAccessMyAccount.addEventListener('click', () => {
      localStorage.removeItem('userAccessAppointmentsCounter')
      localStorage.setItem('userAccessMyAccountCounter', true)

      window.location.href = `${domainName}/user-access-profile.html`  
    })

    // appointments
    this.userAccessAppointments.addEventListener('click', () => {
      localStorage.removeItem('userAccessMyAccountCounter')
      localStorage.setItem('userAccessAppointmentsCounter', true)

      window.location.href = `${domainName}/user-access-profile.html`          
    })

    document.addEventListener('DOMContentLoaded', () => {

      // my account
      if (window.location.href === `${domainName}/user-access-profile.html` && JSON.parse(localStorage.getItem('userAccessMyAccountCounter'))) {
        localStorage.removeItem('userAccessAppointmentsCounter')
        localStorage.setItem('userAccessMyAccountCounter', true)
        console.log('hey')
        userAccessContainerLeftAppointments.className = 'gradually'
        userAccessContainerLeftMyAccount.className = 'gradually user-access-profile-selected'
        userAccessContainerRightAppointments.className = 'user-access-profile-container-right-appointment hide-container'
        userAccessContainerRightMyAccount.className = 'user-access-profile-container-right-myaccount'

        this.userAccessProfileMyAccountAddress.innerHTML = `
        <div>
          <h1>Address:</h1>
          <h2 id='edit-address-detail'>${JSON.parse(localStorage.getItem('currentUser')).address.address_line_1}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-address-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-address-input' type='text' placeholder='Enter here'>
            <i id='edit-address-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-address-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-address-btn' class="bi bi-pencil-square" data-name='address_line_1'></i>
        </div>
        `
        let editAddressDetail = document.getElementById('edit-address-detail')
        let editAddressBtn = document.getElementById('edit-address-btn')
        let editAddressInputIconDiv = document.getElementById('edit-address-input-icon-div')
        let editAddressUpdated = document.getElementById('edit-address-updated')
        let editAddressInput = document.getElementById('edit-address-input')
        let editAddressInputBtn = document.getElementById('edit-address-input-btn')
        let editAddressCounter = 0 

        updateField(editAddressDetail, editAddressBtn, editAddressInputIconDiv, editAddressUpdated, editAddressInput, editAddressInputBtn, editAddressCounter)
  
        this.userAccessProfileMyAccountState.innerHTML = `
        <div>
          <h1>State:</h1>
          <h2 id='edit-state-detail'>${JSON.parse(localStorage.getItem('currentUser')).address.administrative_district_level_1}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-state-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-state-input' type='text' placeholder='Enter here'>
            <i id='edit-state-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-state-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-state-btn' class="bi bi-pencil-square" data-name='administrative_district_level_1'></i>
        </div>
        `

        let editStateDetail = document.getElementById('edit-state-detail')
        let editStateBtn = document.getElementById('edit-state-btn')
        let editStateInputIconDiv = document.getElementById('edit-state-input-icon-div')
        let editStateUpdated = document.getElementById('edit-state-updated')
        let editStateInput = document.getElementById('edit-state-input')
        let editStateInputBtn = document.getElementById('edit-state-input-btn')
        let editStateCounter = 0 

        updateField(editStateDetail, editStateBtn, editStateInputIconDiv, editStateUpdated, editStateInput, editStateInputBtn, editStateCounter)

        this.userAccessProfileMyAccountCity.innerHTML = `
        <div>
          <h1>City:</h1>
          <h2 id='edit-city-detail'>${JSON.parse(localStorage.getItem('currentUser')).address.locality}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-city-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-city-input' type='text' placeholder='Enter here'>
            <i id='edit-city-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-city-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-city-btn' class="bi bi-pencil-square" data-name='locality'></i>
        </div>
        `

        let editCityDetail = document.getElementById('edit-city-detail')
        let editCityBtn = document.getElementById('edit-city-btn')
        let editCityInputIconDiv = document.getElementById('edit-city-input-icon-div')
        let editCityUpdated = document.getElementById('edit-city-updated')
        let editCityInput = document.getElementById('edit-city-input')
        let editCityInputBtn = document.getElementById('edit-city-input-btn')
        let editCityCounter = 0 

        updateField(editCityDetail, editCityBtn, editCityInputIconDiv, editCityUpdated, editCityInput, editCityInputBtn, editCityCounter)
    
        this.userAccessProfileMyAccountZipCode.innerHTML = `
        <div>
          <h1>Zip Code:</h1>
          <h2 id='edit-zipcode-detail'>${JSON.parse(localStorage.getItem('currentUser')).address.postal_code}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-zipcode-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-zipcode-input' type='text' placeholder='Enter here'>
            <i id='edit-zipcode-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-zipcode-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-zipcode-btn' class="bi bi-pencil-square" data-name='postal_code'></i>
        </div>
        `

        let editZipCodeDetail = document.getElementById('edit-zipcode-detail')
        let editZipCodeBtn = document.getElementById('edit-zipcode-btn')
        let editZipCodeInputIconDiv = document.getElementById('edit-zipcode-input-icon-div')
        let editZipCodeUpdated = document.getElementById('edit-zipcode-updated')
        let editZipCodeInput = document.getElementById('edit-zipcode-input')
        let editZipCodeInputBtn = document.getElementById('edit-zipcode-input-btn')
        let editZipCodeCounter = 0 

        updateField(editZipCodeDetail, editZipCodeBtn, editZipCodeInputIconDiv, editZipCodeUpdated, editZipCodeInput, editZipCodeInputBtn, editZipCodeCounter)
  
        this.userAccessProfileMyAccountFirstN.innerHTML = `
        <div>
          <h1>First N:</h1>
          <h2 id='edit-firstn-detail'>${JSON.parse(localStorage.getItem('currentUser')).given_name}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-firstn-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-firstn-input' type='text' placeholder='Enter here'>
            <i id='edit-firstn-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-firstn-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-firstn-btn' class="bi bi-pencil-square" data-name='given_name'></i>
        </div>
        `

        let editFirstNDetail = document.getElementById('edit-firstn-detail')
        let editFirstNBtn = document.getElementById('edit-firstn-btn')
        let editFirstNInputIconDiv = document.getElementById('edit-firstn-input-icon-div')
        let editFirstNUpdated = document.getElementById('edit-firstn-updated')
        let editFirstNInput = document.getElementById('edit-firstn-input')
        let editFirstNInputBtn = document.getElementById('edit-firstn-input-btn')
        let editFirstNCounter = 0

        updateField(editFirstNDetail, editFirstNBtn, editFirstNInputIconDiv, editFirstNUpdated, editFirstNInput, editFirstNInputBtn, editFirstNCounter) 

        this.userAccessProfileMyAccountLastN.innerHTML = `
        <div>
          <h1>Last N:</h1>
          <h2 id='edit-lastn-detail'>${JSON.parse(localStorage.getItem('currentUser')).family_name}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-lastn-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-lastn-input' type='text' placeholder='Enter here'>
            <i id='edit-lastn-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-lastn-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-lastn-btn' class="bi bi-pencil-square" data-name='family_name'></i>
        </div>
        `

        let editLastNDetail = document.getElementById('edit-lastn-detail')
        let editLastNBtn = document.getElementById('edit-lastn-btn')
        let editLastNInputIconDiv = document.getElementById('edit-lastn-input-icon-div')
        let editLastNUpdated = document.getElementById('edit-lastn-updated')
        let editLastNInput = document.getElementById('edit-lastn-input')
        let editLastNInputBtn = document.getElementById('edit-lastn-input-btn')
        let editLastNCounter = 0

        updateField(editLastNDetail, editLastNBtn, editLastNInputIconDiv, editLastNUpdated, editLastNInput, editLastNInputBtn, editLastNCounter) 
  
        this.userAccessProfileMyAccountNickN.innerHTML = `
        <div>
          <h1>Nickname:</h1>
          <h2 id='edit-nickn-detail'>${JSON.parse(localStorage.getItem('currentUser')).nickname}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-nickn-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-nickn-input' type='text' placeholder='Enter here'>
            <i id='edit-nickn-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-nickn-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-nickn-btn' class="bi bi-pencil-square" data-name='nickname'></i>
        </div>
        `

        let editNickNDetail = document.getElementById('edit-nickn-detail')
        let editNickNBtn = document.getElementById('edit-nickn-btn')
        let editNickNInputIconDiv = document.getElementById('edit-nickn-input-icon-div')
        let editNickNUpdated = document.getElementById('edit-nickn-updated')
        let editNickNInput = document.getElementById('edit-nickn-input')
        let editNickNInputBtn = document.getElementById('edit-nickn-input-btn')
        let editNickNCounter = 0

        updateField(editNickNDetail, editNickNBtn, editNickNInputIconDiv, editNickNUpdated, editNickNInput, editNickNInputBtn, editNickNCounter) 
  
        this.userAccessProfileMyAccountDOB.innerHTML = `
        <div>
          <h1>Birthday:</h1>
          <h2 id='edit-birthday-detail'>${JSON.parse(localStorage.getItem('currentUser')).birthday}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-birthday-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-birthday-input' type='text' placeholder='Enter here'>
            <i id='edit-birthday-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-birthday-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-birthday-btn' class="bi bi-pencil-square" data-name='birthday'></i>
        </div>
        `

        let editBirthdayDetail = document.getElementById('edit-birthday-detail')
        let editBirthdayBtn = document.getElementById('edit-birthday-btn')
        let editBirthdayInputIconDiv = document.getElementById('edit-birthday-input-icon-div')
        let editBirthdayUpdated = document.getElementById('edit-birthday-updated')
        let editBirthdayInput = document.getElementById('edit-birthday-input')
        let editBirthdayInputBtn = document.getElementById('edit-birthday-input-btn')
        let editBirthdayCounter = 0

        updateField(editBirthdayDetail, editBirthdayBtn, editBirthdayInputIconDiv, editBirthdayUpdated, editBirthdayInput, editBirthdayInputBtn, editBirthdayCounter) 
  
        this.userAccessProfileMyAccountEmail.innerHTML = `
        <div>
          <h1>Email:</h1>
          <h2 id='edit-email-detail'>${JSON.parse(localStorage.getItem('currentUser')).email_address}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-email-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-email-input' type='text' placeholder='Enter here'>
            <i id='edit-email-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-email-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-email-btn' class="bi bi-pencil-square" data-name='email_address'></i>
        </div>
        `

        let editEmailDetail = document.getElementById('edit-email-detail')
        let editEmailBtn = document.getElementById('edit-email-btn')
        let editEmailInputIconDiv = document.getElementById('edit-email-input-icon-div')
        let editEmailUpdated = document.getElementById('edit-email-updated')
        let editEmailInput = document.getElementById('edit-email-input')
        let editEmailInputBtn = document.getElementById('edit-email-input-btn')
        let editEmailCounter = 0

        updateField(editEmailDetail, editEmailBtn, editEmailInputIconDiv, editEmailUpdated, editEmailInput, editEmailInputBtn, editEmailCounter) 
  
        this.userAccessProfileMyAccountPhone.innerHTML = `
        <div>
          <h1>Phone:</h1>
          <h2 id='edit-phone-detail'>${JSON.parse(localStorage.getItem('currentUser')).phone_number}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-phone-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-phone-input' type='text' placeholder='Enter here'>
            <i id='edit-phone-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-phone-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-phone-btn' class="bi bi-pencil-square" data-name='phone_number'></i>
        </div>
        `

        let editPhoneDetail = document.getElementById('edit-phone-detail')
        let editPhoneBtn = document.getElementById('edit-phone-btn')
        let editPhoneInputIconDiv = document.getElementById('edit-phone-input-icon-div')
        let editPhoneUpdated = document.getElementById('edit-phone-updated')
        let editPhoneInput = document.getElementById('edit-phone-input')
        let editPhoneInputBtn = document.getElementById('edit-phone-input-btn')
        let editPhoneCounter = 0

        updateField(editPhoneDetail, editPhoneBtn, editPhoneInputIconDiv, editPhoneUpdated, editPhoneInput, editPhoneInputBtn, editPhoneCounter) 
  
        this.userAccessProfileMyAccountPassword.innerHTML = `
        <div>
          <h1>Password:</h1>
          <h2 id='edit-password-detail'>${JSON.parse(localStorage.getItem('currentUser')).password}</h2>
        </div>
        <div class='user-access-edit-input-div'>
          <div id='edit-password-input-icon-div' class='user-access-input-div' style='visibility: hidden'>
            <input id='edit-password-input' type='text' placeholder='Enter here'>
            <i id='edit-password-input-btn' class="bi bi-arrow-right-circle-fill"></i>
          </div>
          <div id='edit-password-updated' class='user-access-input-div-updated' style='display:none'>
            <h2>Updated!</h2>
          </div>
          <i id='edit-password-btn' class="bi bi-pencil-square" data-name='password'></i>
        </div>
        `

        let editPass1Detail = document.getElementById('edit-password-detail')
        let editPass1Btn = document.getElementById('edit-password-btn')
        let editPass1InputIconDiv = document.getElementById('edit-password-input-icon-div')
        let editPass1Updated = document.getElementById('edit-password-updated')
        let editPass1Input = document.getElementById('edit-password-input')
        let editPass1InputBtn = document.getElementById('edit-password-input-btn')
        let editPass1Counter = 0

        updateField(editPass1Detail, editPass1Btn, editPass1InputIconDiv, editPass1Updated, editPass1Input, editPass1InputBtn, editPass1Counter) 

        // edit the field main function
        function updateField(editFieldDetailName, editFieldTypeBtn, editFieldInputIconDiv, editFieldUpdated, editFieldInput, editFieldInputBtn, editFieldTypeCounter) {
          let editField

          let fieldsArr = ['address_line_1','administrative_district_level_1', 'locality', 'postal_code', 'birthday', 'email_address', 'family_name', 'given_name', 'nickname', 'password', 'password2', 'phone_number']
          let fieldsObj = {
            address_line_1: 'Address',
            administrative_district_level_1: 'State',
            locality: 'City',
            postal_code: 'Zip Code',
            birthday: 'Birthday',
            email_address: 'Email',
            family_name: 'Last Name',
            given_name: 'First Name',
            nickname: 'Nickname',
            password: 'Password',
            phone_number: 'Phone'
          }

          let fieldsCheck = {
            address_line_1: reg_fs_ls_nickNameCheck,
            administrative_district_level_1: lettersOnlyCheck,
            locality: lettersOnlyCheck,
            postal_code: zipCodeCheck,
            birthday: dobCheck,
            email_address: emailCheck,
            family_name: reg_fs_ls_nickNameCheck,
            given_name: reg_fs_ls_nickNameCheck,
            nickname: nicknameCheck,
            password: passwordCheck,
            phone_number: [phoneCheck1, phoneCheck2, phoneCheck3, phoneCheck4, phoneCheck5, phoneCheck6]
          }
          const addressPropertiesArr = ['address_line_1', 'administrative_district_level_1', 'locality', 'postal_code']

          // edit field btn 
          editFieldTypeBtn.addEventListener('click', () => {
            editFieldInput.className = ''
            console.log(editFieldTypeBtn.getAttribute('name'))
            editFieldTypeCounter++
            if (editFieldTypeCounter === 1) {
              editField = editFieldTypeBtn.dataset.name
              console.log(editField)
              editFieldInput.value = ''
              editFieldInputIconDiv.style.display = ''
              editFieldInputIconDiv.style.visibility = ''
            } else {
              editFieldUpdated.style.display = 'none'
              editFieldInputIconDiv.style.visibility = 'hidden'
              editFieldTypeCounter = 0
            }
          })

          // edit input btn
          editFieldInputBtn.addEventListener('click', () => {
            console.log(editField) 
            if (editField === 'phone_number') {
              if (editFieldInput.value.match(phoneCheck1) || editFieldInput.value.match(phoneCheck2) || editFieldInput.value.match(phoneCheck3) || editFieldInput.value.match(phoneCheck4) || editFieldInput.value.match(phoneCheck5) || editFieldInput.value.match(phoneCheck6) && editFieldInput.value !== '') {
                updateMyAcctFieldObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address

                updateMyAcctFieldObj[`${editField}`] = editFieldInput.value
  
                updateMyAcctFieldObj.id = JSON.parse(localStorage.getItem('currentUser')).id
  
                console.log(updateMyAcctFieldObj)
  
                let editFieldMsg
                for (let i = 0; i < fieldsArr.length; i++) {
                  if (fieldsArr[i] === editField) {
                    editFieldMsg = `Are you sure you want to edit the ${fieldsObj[`${editField}`]} field?`
                    console.log(editFieldMsg)
                  }
                }
                let inputFieldAlert = window.confirm(editFieldMsg)
                if (inputFieldAlert) {
                  // update field in MongoDb
                  updateUserFieldMongoDb(updateMyAcctFieldObj)
                  .then(() => { console.log('the updaeMyAcctField() has been sent to the express server') })
                  .catch((error) => { console.log(error) })
  
                  // update field in Square
                  updateUserFieldSquare(updateMyAcctFieldObj)
                  .then(() => { console.log('the updateUserFieldSquare() has been sent to the express server') })
                  .catch((error) => { console.log(error) })
  
  
                  let localStorageObj = JSON.parse(localStorage.getItem('currentUser'))
                  for (let i = 0; i < addressPropertiesArr.length; i++) {
                    if (addressPropertiesArr[i] === editField) {
                      localStorageObj.address[`${editField}`] = editFieldInput.value
                    } else {
                      if (editField === 'password') {
                        localStorageObj[`${editField}`] = '**********'
                      } else {
                        localStorageObj[`${editField}`] = editFieldInput.value
                      }
                      
                    }
                  }
                  localStorage.setItem('currentUser', JSON.stringify(localStorageObj))
                  console.log(localStorageObj)
  
                  editFieldDetailName.textContent = editFieldInput.value
                  editFieldInputIconDiv.style.display = 'none'
                  editFieldUpdated.style.display = ''
  
                  setTimeout(() => {
                    editFieldUpdated.style.display = 'none'
                    editFieldInputIconDiv.style.display = ''
                    editFieldInputIconDiv.style.visibility = 'hidden'
                    editFieldTypeCounter = 0
                  }, 4000)    
                }
              }
            } else if (editFieldInput.value !== '' && editFieldInput.value.match(fieldsCheck[`${editField}`])) {
              updateMyAcctFieldObj.email_address = JSON.parse(localStorage.getItem('currentUser')).email_address

              updateMyAcctFieldObj[`${editField}`] = editFieldInput.value

              updateMyAcctFieldObj.id = JSON.parse(localStorage.getItem('currentUser')).id

              console.log(updateMyAcctFieldObj)

              let editFieldMsg
              for (let i = 0; i < fieldsArr.length; i++) {
                if (fieldsArr[i] === editField) {
                  editFieldMsg = `Are you sure you want to edit the ${fieldsObj[`${editField}`]} field?`
                  console.log(editFieldMsg)
                }
              }
              let inputFieldAlert = window.confirm(editFieldMsg)
              if (inputFieldAlert) {
                // update field in MongoDb
                updateUserFieldMongoDb(updateMyAcctFieldObj)
                .then(() => { console.log('the updaeMyAcctField() has been sent to the express server') })
                .catch((error) => { console.log(error) })

                // update field in Square
                updateUserFieldSquare(updateMyAcctFieldObj)
                .then(() => { console.log('the updateUserFieldSquare() has been sent to the express server') })
                .catch((error) => { console.log(error) })


                let localStorageObj = JSON.parse(localStorage.getItem('currentUser'))
                for (let i = 0; i < addressPropertiesArr.length; i++) {
                  if (addressPropertiesArr[i] === editField) {
                    localStorageObj.address[`${editField}`] = editFieldInput.value
                  } else {
                    if (editField === 'password') {
                      localStorageObj[`${editField}`] = '**********'
                    } else {
                      localStorageObj[`${editField}`] = editFieldInput.value
                    }
                    
                  }
                }
                localStorage.setItem('currentUser', JSON.stringify(localStorageObj))
                console.log(localStorageObj)

                editFieldDetailName.textContent = editFieldInput.value
                editFieldInputIconDiv.style.display = 'none'
                editFieldUpdated.style.display = ''

                setTimeout(() => {
                  editFieldUpdated.style.display = 'none'
                  editFieldInputIconDiv.style.display = ''
                  editFieldInputIconDiv.style.visibility = 'hidden'
                  editFieldTypeCounter = 0
                }, 4000)    
              }
            } else {
              editFieldInput.className = 'input-invalid'
            }  
          })
        }

        // update the given field MongoDb async function
        async function updateUserFieldMongoDb(field) {
          // req & res
          const update_my_acct_field_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(field)}`, { method: 'put' })
          const update_my_acct_field_res = await update_my_acct_field_req.json()

          console.log(update_my_acct_field_res)

          // if (update_my_acct_field_res === `the users ${updateMyAcctFieldObj[objField]} has been updated`) {
          //   console.log('the users field has been updated')
          // }
        }

        // update the given field Square async function
        async function updateUserFieldSquare(field) {
          // req & res
          const update_my_acct_field_square_req = await fetch(`/updateUserFieldSquare/${JSON.stringify(field)}`, { method: 'put' })
          const update_my_acct_field_square_res = await update_my_acct_field_square_req.json()

          console.log(update_my_acct_field_square_res)
        }

      }

      // appointments
      if (window.location.href === `${domainName}/user-access-profile.html` && JSON.parse(localStorage.getItem('userAccessAppointmentsCounter')) || window.location.href === `${domainName}/user-access-profile.html` && !JSON.parse(localStorage.getItem('userAccessAppointmentsCounter')) && window.location.href === `${domainName}/user-access-profile.html` && !JSON.parse(localStorage.getItem('userAccessMyAccountCounter'))) {
        localStorage.removeItem('userAccessMyAccountCounter')
        localStorage.setItem('userAccessAppointmentsCounter', true)
        userAccessContainerLeftMyAccount.className = 'gradually'
        userAccessContainerLeftAppointments.className = 'gradually user-access-profile-selected'
        userAccessContainerRightMyAccount.className = 'user-access-profile-container-right-myaccount hide-container'
        userAccessContainerRightAppointments.className = 'user-access-profile-container-right-appointment'

        userAccessContainerRightAppointments.innerHTML = `<div class="appointment-loading"></div>`

        let usersBookingObj, appointmentService, appointmentAgent, appointmentDuration, appointmentTime, appointmentDate, appointmentDateNTime
  
        // get appointments from square api
        async function getUserAppointments() {
          const get_user_appointments_req = await fetch(`/getUserAppointments`, { method: 'get' })
          const get_user_appointments_res = await get_user_appointments_req.json()
  
          console.log(get_user_appointments_res)
  
          // set users "booking object" to variable
          for (let i = 0; i < get_user_appointments_res.bookings.length; i++) {
            if (get_user_appointments_res.bookings[i].customer_id === JSON.parse(localStorage.getItem('currentUser')).id && get_user_appointments_res.bookings[i].status === 'ACCEPTED') {
              usersBookingObj = get_user_appointments_res.bookings[i]
              console.log(usersBookingObj)
            }
          }

          if (!usersBookingObj) {
            userAccessContainerRightAppointments.innerHTML = `
            <div>
              <h1 class='user-access-profile-selected'>Appointments</h1>
            </div>
            <div class='container-right-appointment-box'>
              <div>
                <h2>It looks like you don't have any bookings.</h2>
              </div>
            </div>
            `
            localStorage.removeItem('subscription-response')
            localStorage.removeItem('payment-response')
          } else {
            // set users booking "duration" to variable
            if (usersBookingObj.appointment_segments[0].duration_minutes / 60 < 1) {
              appointmentDuration = `${usersBookingObj.appointment_segments[0].duration_minutes} mins`
            } else if (usersBookingObj.appointment_segments[0].duration_minutes / 60 === 1) {
              appointmentDuration = `${usersBookingObj.appointment_segments[0].duration_minutes / 60} hr`
            } else {
              appointmentDuration = `${usersBookingObj.appointment_segments[0].duration_minutes / 60} hrs`
            }
            console.log(appointmentDuration)

    
            // set selected "service" from users booking to variable
            for (let i = 0; i < companyServicesArr.length; i++) {
              if (companyServicesObj[`${companyServicesArr[i]}`].service_variation_id === usersBookingObj.appointment_segments[0].service_variation_id) {
                appointmentService = `${companyServicesArr[i]}`
              }
            }
    
            // set appointment "time" from users booking to variable
            appointmentTime = usersBookingObj.start_at.slice(11, 16)
    
            if (appointmentTime === '12:00') {
              appointmentTime = '08:00 AM'
            } else if (appointmentTime === '12:30') {
              appointmentTime = '08:30 AM'
            } else if (appointmentTime === '13:00') {
              appointmentTime = '09:00 AM'
            } else if (appointmentTime === '13:30') {
              appointmentTime = '09:30 AM'
            } else if (appointmentTime === '14:00') {
              appointmentTime = '10:00 AM'
            } else if (appointmentTime === '14:30') {
              appointmentTime = '10:30 AM'
            } else if (appointmentTime === '15:00') {
              appointmentTime = '11:00 AM'
            } else if (appointmentTime === '15:30') {
              appointmentTime = '11:30 AM'
            } else if (appointmentTime === '16:00') {
              appointmentTime = '12:00 PM'
            } else if (appointmentTime === '16:30') {
              appointmentTime = '12:30 PM'
            } else if (appointmentTime === '17:00') {
              appointmentTime = '01:00 PM'
            } else if (appointmentTime === '17:30') {
              appointmentTime = '01:30 PM'
            } else if (appointmentTime === '18:00') {
              appointmentTime = '02:00 PM'
            } else if (appointmentTime === '18:30') {
              appointmentTime = '02:30 PM'
            } else if (appointmentTime === '19:00') {
              appointmentTime = '03:00 PM'
            } else if (appointmentTime === '19:30') {
              appointmentTime = '03:30 PM'
            } else if (appointmentTime === '20:00') {
              appointmentTime = '04:00 PM'
            } else if (appointmentTime === '20:30') {
              appointmentTime = '04:30 PM'
            }  
    
            // set users booking "date"
            appointmentDate = `${usersBookingObj.start_at.slice(5, 7)}-${usersBookingObj.start_at.slice(8, 10)}-${usersBookingObj.start_at.slice(0, 4)}`
            // concat users booking "date and time"
            appointmentDateNTime = `${appointmentDate} @ ${appointmentTime}`
    
            // get the list of employees from Square
            async function getCompanyAgents() {
              // req & res
              const get_company_agents_req = await fetch('/getCompanyAgents', { method: 'get' })
              const get_company_agents_res = await get_company_agents_req.json()
    
              console.log(get_company_agents_res)
    
              // set company "agent" from users booking to variable
              for (let i = 0; i < get_company_agents_res.team_member_booking_profiles.length; i++) {
                if (get_company_agents_res.team_member_booking_profiles[i].team_member_id = get_user_appointments_res.bookings[i].creator_details.team_member_id) {
                  appointmentAgent = `${get_company_agents_res.team_member_booking_profiles[i].display_name}`
                }
  
                // display appointment segments
                if (usersBookingObj.status === 'ACCEPTED') {

                  if (appointmentService === 'Concierge Session') { // _REPLACE_ME_

                    // grab appointment times from localStorage and display for the user
                    let appointmentTime1 = new Date(JSON.parse(localStorage.getItem('currentUser')).concierge_bookings.booking_time1).toLocaleString()
                    let newAppointmentTime1 = appointmentTime1.replace(',', ' @')
                    let appointmentTime2 = new Date(JSON.parse(localStorage.getItem('currentUser')).concierge_bookings.booking_time2).toLocaleString()
                    let newAppointmentTime2 = appointmentTime2.replace(',', ' @')
                    let appointmentTime3 = new Date(JSON.parse(localStorage.getItem('currentUser')).concierge_bookings.booking_time3).toLocaleString()
                    let newAppointmentTime3 = appointmentTime3.replace(',', ' @')
                    let appointmentTime4 = new Date(JSON.parse(localStorage.getItem('currentUser')).concierge_bookings.booking_time4).toLocaleString()
                    let newAppointmentTime4 = appointmentTime4.replace(',', ' @')

                    userAccessContainerRightAppointments.innerHTML = `                    
                    <div>
                      <h1 class='user-access-profile-selected'>Appointments</h1>
                    </div>
                    <div class='container-right-appointment-box'>
                      <div class='container-right-appointment-box-2'>
                        <h2>Service: ${appointmentService}</h2>
                        <h2>Agent: ${appointmentAgent}</h2>
                        <h2>Duration: ${appointmentDuration}</h2>
                        <h2>Appointment 1: ${newAppointmentTime1}</h2>
                        <h2>Appointment 2: ${newAppointmentTime2}</h2>
                        <h2>Appointment 3: ${newAppointmentTime3}</h2>
                        <h2>Appointment 4: ${newAppointmentTime4}</h2>
                      </div>
                      <div>
                        <i id='appointment-delete-btn' class="bi bi-x-lg"></i>
                      </div>
                    </div>
                    `
                  } else {
                    userAccessContainerRightAppointments.innerHTML = `
                    <div>
                      <h1 class='user-access-profile-selected'>Appointments</h1>
                    </div>
                    <div class='container-right-appointment-box'>
                      <div class='container-right-appointment-box-2'>
                        <h2>Service: ${appointmentService}</h2>
                        <h2>Agent: ${appointmentAgent}</h2>
                        <h2>Duration: ${appointmentDuration}</h2>
                        <h2>Upcoming Appointment: ${appointmentDateNTime}</h2>
                      </div>
                      <div>
                        <i id='appointment-delete-btn' class="bi bi-x-lg"></i>
                      </div>
                    </div>
                  `
                  }
                  
                  let apptDeleteBtn = document.getElementById('appointment-delete-btn')
                  apptDeleteBtn.addEventListener('click', () => {
                    console.log('I want to delete this booking')
                    // ask are you sure you want to delete the booking?
                    const cancelBookingAlert = window.confirm('Are you sure you would like to cancel this booking?')

                    if (cancelBookingAlert) {
                      userAccessContainerRightAppointments.innerHTML = `<div class='appointment-loading'></div>`

                      // if concierge session is true send to use other cancel booking function else use the other concierge booking function
                      if (appointmentService === 'Concierge Session') {
                        let cancelBookingObj = {
                          email_address: JSON.parse(localStorage.getItem('currentUser')).email_address
                        }
                        // cancel all 4 bookings/cancel subscription/clear "concierge_bookings" object MDB
                        for (let i = 0; i < 4; i++) {
                          cancelBookingObj.id = JSON.parse(localStorage.getItem('currentUser')).concierge_bookings[`booking_id${i + 1}`]
  
                          cancelBookingService5(cancelBookingObj, i)
                            .then(() => { console.log('cancelBookingService5Obj() has been sent to the server') })
                            .catch((error) => { console.log(error) })

                          if (i === 3) {
                            cancelSubscription()
                            .then(() => { console.log('cancelSubscription() has been sent to the server') })
                            .catch((error) => { console.log(error) })

                            let clearConciergeBookingObj = {
                              email_address: JSON.parse(localStorage.getItem('currentUser')).email_address
                            }
                            // clear "booking_time" parameters -- mongodb
                            for (let i = 0; i < 4; i++) {
                              clearConciergeBookingObj.concierge_bookings[`booking_time${i + 1}`] = ''
                              clearConciergeBookingValues(clearConciergeBookingObj)
                                .then(() => { console.log('clearConciergeBookingValues() has been sent to the server') })
                                .catch((error) => { console.log(error) } )
                            }
                            // clear "booking_id" parameters -- mongodb
                            for (let i = 0; i < 4; i++) {
                              clearConciergeBookingObj.concierge_bookings[`booking_id${i + 1}`] = ''
                              clearConciergeBookingValues(clearConciergeBookingObj)
                                .then(() => { console.log('clearConciergeBookingValues() has been sent to the server') })
                                .catch((error) => { console.log(error) } )
                            }
                          }
                        }
                      } else {
                          // cancel booking
                          cancelBooking(usersBookingObj)
                            .then(() => { console.log('cancelBooking() has been sent to the express server') })
                            .catch((error) => { console.log(error) })        
                      } 

                      // delete booking from square 
                      async function cancelBooking() {
                        // req & res
                        const cancel_booking_req = await fetch(`/cancelBooking/${JSON.stringify(usersBookingObj)}`, { method: 'post'})
                        const cancel_booking_res = await cancel_booking_req.json()
                        console.log(cancel_booking_res)

                        // once done show the else message down below
                        if (cancel_booking_res.booking.status === 'CANCELLED_BY_SELLER') {
                          setTimeout(() => {
                            console.log('your booking has been canceled')
                            localStorage.removeItem('payment-response')
                            localStorage.removeItem('subscription-response')
                            localStorage.removeItem('servie1Price')
                            localStorage.removeItem('servie2Price')
                            localStorage.removeItem('servie3Price')
                            localStorage.removeItem('servie4Price')
                            localStorage.removeItem('servie5Price')
                            
                            userAccessContainerRightAppointments.innerHTML = `
                            <div>
                              <h1 class='user-access-profile-selected'>Appointments</h1>
                            </div>
                            <div class='container-right-appointment-box'>
                              <div>
                                <h2>It looks like you don't have any bookings.</h2>
                              </div>
                            </div>
                            `
                            localStorage.removeItem('subscription-response')
                            localStorage.removeItem('payment-response')
                          }, 2000)

                        }
                      }

                      // cancel booking service 5
                      async function cancelBookingService5(object, count) {
                        // request && response
                        const cancel_booking_req = await fetch(`/cancelBooking/${JSON.stringify(object)}`, { method: 'post'})
                        const cancel_booking_res = await cancel_booking_req.json()
                        console.log(cancel_booking_res)

                        // once done show the else message down below
                        if (count === 3) {
                          console.log(count)
                          if (cancel_booking_res.booking.status === 'CANCELLED_BY_SELLER') {
                            setTimeout(() => {
                              console.log('your booking has been canceled')
                              localStorage.removeItem('payment-response')
                              localStorage.removeItem('subscription-response')
                              localStorage.removeItem('servie1Price')
                              localStorage.removeItem('servie2Price')
                              localStorage.removeItem('servie3Price')
                              localStorage.removeItem('servie4Price')
                              localStorage.removeItem('servie5Price')

                              userAccessContainerRightAppointments.innerHTML = `
                              <div>
                                <h1 class='user-access-profile-selected'>Appointments</h1>
                              </div>
                              <div class='container-right-appointment-box'>
                                <div>
                                  <h2>It looks like you don't have any bookings.</h2>
                                </div>
                              </div>
                              `
                              localStorage.removeItem('subscription-response')
                              localStorage.removeItem('payment-response')
                            }, 2000)
                          }
                        } 
                      }

                      // cancel subscription (if applicable)
                      async function cancelSubscription() {
                        // req && res
                        const cancel_sub_req = await fetch(`/cancelSubscription/${localStorage.getItem('currentUser')}`, { method: 'POST' })
                        const cancel_sub_res = await cancel_sub_req.json()

                        // if successful
                        if (cancel_sub_res.subscription) {
                          // clear/update subscription id in MongoDB
                          async function updateMongoDB() {
                            // req && res
                            let newSubId = {
                              subscription_id: ''
                            }
                            const clear_subscription_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(newSubId)}`, { method: 'PUT' })
                            const clear_subscription_res = await clear_subscription_req.json()
                            console.log(clear_subscription_res)
                          }
                            updateMongoDB()
                              .then(() => { console.log('updatemongoDB() has been sent to the server') })
                              .catch((error) => { console.log(error) })
                          
                        }
                      }
                        
                      // update/clear "concierge_booking" values in mongoDb
                      async function clearConciergeBookingValues(object) { 
                        // request & response
                        const clear_cb_values_req = await fetch(`/updateMyAcctFieldMongoDb/${JSON.stringify(object)}`, { method: "PUT" })
                        const clear_cb_values_res = await clear_cb_values_req.json()
                        console.log(clear_cb_values_res)
                      }
                    } 
                  })
                }

              }

            }
              getCompanyAgents()
                .then(() => { console.log('peace') })
                .catch((error) => { console.log(error) })
          }
        }
          getUserAppointments()
            .then(() => { console.log('the getUserAppointments() has been sent to express server') })
            .catch((error) => { console.log(error) })
      }
    })

    // off drop down click
    document.addEventListener('click', (event) => {
      if (this.userAccessProfileDropDown.className === 'user-access-profile-drop-down') {
        if (!this.userAccessProfileDropDown.contains(event.target) && event.target !== this.userAccessProfile) {
          this.userAccessProfileDropDown.className = 'user-access-profile-drop-down hide-container'
          this.userAccessProfileCounter = 0
        }
      }
    })

  }
}

const header = new Header(companyLogo, companyOptions, companyOptionsIcon, companyOptionsDropDown, companyOptionsEle, companyAny, companyLanguages, companyLanguagesIcon, companyLanguagesDropDown, companyOptions1, companyOptions2, companyOptions3, companyOptions4, companyOptions5, bookingModalS1, companyLanguagesEle, companyCallToAction, companyChatSupport, companyChatSupportChatNow, companyChatSupportContainerDetails1, companyChatSupportContainerDetails2, companyChatSupportModal, companyChatSupportModalClose1, companyChatSupportModalClose2, companyChatSupportContainerMessages, companyChatSupportUserInput, companyChatSupportUserInputValue, companyChatSupportSendBtn, userAccessProfile, userAccessProfileDropDown, userAccessAppointments, userAccessContainerLeftAppointments, userAccessContainerRightAppointments, userAccessMyAccount, userAccessContainerLeftMyAccount, userAccessContainerRightMyAccount, userAccessProfileMyAccountFirstN, userAccessProfileMyAccountLastN, userAccessProfileMyAccountNickN, userAccessProfileMyAccountDOB, userAccessProfileMyAccountAddress, userAccessProfileMyAccountState, userAccessProfileMyAccountCity, userAccessProfileMyAccountZipCode, userAccessProfileMyAccountEmail, userAccessProfileMyAccountPhone, userAccessProfileMyAccountPassword, userAccessLogin, userAccessSignUp, userAccessSignOut, userLoggedIn, companyPrimaryColor, companySecondaryColor, transDur, existingAppointmentBtn)


// process cardNumbers (find card type)
// function processCardNumber(inputName, serviceSelectedCardType) {
//   if (inputName.value.length > 13) {
//     // put the value throgh all card regexes --> on match display the img in first container
//     for (let i = 0; i < cardRegexArr.length; i++) {
//       if (inputName.value.mathc(cardRegexArr[i])) {
//         console.log(cardRegexArr[i])
//         if (cardRegexArr[i] === 'visaRegex') {
//           serviceSelectedCardType.innerHTML = `<img src="./img/visa.png" alt="">`
//           inputName.className = 'input-valid-clear'
//         } else if (cardRegexArr[i] === 'mastercardRegex') {
//           serviceSelectedCardType.innerHTML = `<img src="./img/mastercard.png" alt="">`
//           inputName.className = 'input-valid-clear'
//         } else if (cardRegexArr[i] === 'americanExpressRegex') {
//           serviceSelectedCardType.innerHTML = `<img src="./img/americanexpress.png" alt="">`
//           inputName.className = 'input-valid-clear'
//         } else if (cardRegexArr[i] === 'discoverRegex') {
//           serviceSelectedCardType.innerHTML = `<img src="./img/discover.png" alt="">`
//           inputName.className = 'input-valid-clear'
//         } else {
//           serviceSelectedCardType.innerHTML = `<img src="./img/debit-card-icon-png-Transparent-Images.png" alt="">`
//           inputName.className = 'input-invalid-clear'
//           console.log("Sorry this card is invalid.")
//         }
//       }
//     }
//   }
// }






/* Signup Container */
// const hSignupContainer = document.getElementById('header-signup-container')
// const hSignupBtn = document.getElementById('header-signup-btn')

// const signupContainerModal = document.getElementById('signup-container-modal')
// const signupContainerBox = document.getElementById('signup-container-box')
// const signupContainerClose = document.getElementById('signup-container-close')
// const signUpSubmitBtn1 = document.getElementById('signup-submit-btn1')
// const signUpSubmitBtn2 = document.getElementById('signup-submit-btn2')
// const signUpSubmitBtn3 = document.getElementById('signup-submit-btn3')
// const signUpSubmitBtn4 = document.getElementById('signup-submit-btn4')
// const signUpSubmitBtn5 = document.getElementById('signup-submit-btn5')
// const signUpSubmitBtn6 = document.getElementById('signup-submit-btn6')
// const signUpSubmitBtn7 = document.getElementById('signup-submit-btn7')
// const signUpSubmitBtn8 = document.getElementById('signup-submit-btn8')
// const signupSubmitBtn = document.getElementById('signup-submit-btn9')

// const signupDetails1Container = document.getElementById('su-c-right-details-1')
// const signupFsValue = document.getElementById('signup-firstn-value')
// const signupLsValue = document.getElementById('signup-lastn-value')
// const signupNnValue = document.getElementById('signup-nickn-value')
// const signupFsError = document.getElementById('signup-firstn-error')
// const signupLsError = document.getElementById('signup-lastn-error')
// const signupNnError = document.getElementById('signup-nickn-error')

// const signupDetails2Container = document.getElementById('su-c-right-details-2')
// const signupBdayMonth = document.getElementById('signup-bday-month') 
// const signupBdayDays = document.getElementById('signup-bday-days') 
// const signupBdayYear = document.getElementById('signup-bday-year') 
// const signupBdayMonthError = document.getElementById('signup-bday-month-error') 
// const signupBdayDaysError = document.getElementById('signup-bday-day-error') 
// const signupBdayYearError = document.getElementById('signup-bday-year-error')

// const signupDetails3Container = document.getElementById('su-c-right-details-3')
// const signupPhoneValue = document.getElementById('signup-phone-value')
// const signupPhoneError = document.getElementById('signup-phone-error')

// const signupDetails4Container = document.getElementById('su-c-right-details-4')
// const signupLocType = document.getElementById('signup-loc-type-value')
// const signupLocTypeError = document.getElementById('signup-loc-type-error')

// const signupDetails5Container = document.getElementById('su-c-right-details-5')
// const signupAddyValue = document.getElementById('signup-address-value')
// const signupAddyValueError = document.getElementById('signup-address-error')

// const signupDetails6Container = document.getElementById('su-c-right-details-6')
// const signupCityValue = document.getElementById('signup-addy-city')
// const signupCityValueError = document.getElementById('signup-addy-city-error')

// const signupDetails7Container = document.getElementById('su-c-right-details-7')
// const signupStateValue = document.getElementById('signup-addy-state')
// const signupStateValueError = document.getElementById('signup-addy-state-error')

// const signupDetails8Container = document.getElementById('su-c-right-details-8')
// const signupZipCodeValue = document.getElementById('signup-zipcode-value') 
// const signupZipCodeValueError = document.getElementById('signup-zipcode-error') 

// const signupDetails9Container = document.getElementById('su-c-right-details-9')
// const signupEmailValue = document.getElementById('signup-email-value')
// const signupEmailValueError = document.getElementById('signup-email-error')
// const signupPass1Value = document.getElementById('signup-pass1-value')
// const signupPass1ValueError = document.getElementById('signup-pass1-error')
// const signupPass2Value = document.getElementById('signup-pass2-value')
// const signupPass2ValueError = document.getElementById('signup-pass2-error')

// const signupDetails10Container = document.getElementById('su-c-right-details-10')

// const signupDetails11Container = document.getElementById('su-c-right-details-11')

// const reg_fs_ls_nickNameCheck = /[A-Za-z0-9]/
// const phoneCheck1 = /^\([0-9]{3,3}\)\-[0-9]{3,3}\-[0-9]{4,4}$/ // (000)-000-0000
// const phoneCheck2 = /^[0-9]{10,10}$/ // 0000000000
// const phoneCheck3 = /^1\([0-9]{3,3}\)\-[0-9]{3,3}\-[0-9]{4,4}$/ // 1(000)-000-0000
// const phoneCheck4 = /^\([0-9]{3,3}\)[0-9]{3,3}\-[0-9]{4,4}$/ // (000)000-0000
// const phoneCheck5 = /^[0-9]{3,3}\-[0-9]{3,3}\-[0-9]{4,4}$/ // 000-000-0000
// const phoneCheck6 = /^[0-9]{3,3}\.[0-9]{3,3}\.[0-9]{4,4}$/ // 000.000.0000
// const addressCheck = /[A-Za-z0-9]/
// const zipCodeCheck = /^[0-9]{5,5}$/
// const emailCheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,3}$/
// const passwordCheck = /[A-Za-z0-9]{8,25}[~!@#$%^&*()_+{}|"?><|=-`\\';/.,]{3,3}/

// let customerCheckEmail = {
//   email_address: ''
// }

// let squareExists, mongodbExists

// let newCustomerLocType = {
//   type: ''
// }

// let newCustomerLocId = {
//   details: {
//     address_line_1: '',
//     administrative_district_level_1: '',
//     locality: '',
//     postal_code: '',
//     first_name: '',
//     last_name: '',
//     name: ''
//   }
// }

// let newCustomerSquare = {
//   details: {
//     address_line_1: '',
//     administrative_district_level_1: '',
//     locality: '',
//     postal_code: '',
//     birthday: '',
//     email_address: '',
//     family_name: '',
//     given_name: '',
//     idempotency_key: '',
//     nickname: '',
//     note: '',
//     phone_number: ''
//   }
// }

// let newCustomerMdb = {
//   details: {
//     address_line_1: '',
//     administrative_district_level_1: '',
//     locality: '',
//     postal_code: '',
//     birthday: '',
//     email_address: '',
//     family_name: '',
//     given_name: '',
//     idempotency_key: '',
//     nickname: '', 
//     note: '', 
//     phone_number: '',
//     password: '',
//     password2: '',
//   },
//   otherLocations: {
//     loc_one: {
//       address_line_1: '',
//       administrative_district_level_1: '',
//       locality: '',
//       postal_code: ''
//     },
//     loc_two: {
//       address_line_1: '',
//       administrative_district_level_1: '',
//       locality: '',
//       postal_code: ''
//     },
//     loc_three: {
//       address_line_1: '',
//       administrative_district_level_1: '',
//       locality: '',
//       postal_code: ''
//     }
//   }
// }

// let newCustomerConfirmation = {
//     details: {
//       email_address: '',
//       appointment_time: '',
//       time_booked: '',
//       given_name: '',
//       family_name: '',
//       employee: '',
//       phone_number: ''
//   }
// }

// // sign up details 1 -- names
// signUpSubmitBtn1.addEventListener('click', () => { 
//   console.log(signupFsValue.value)
//     // first_name check
//     if (signupFsValue.value.match(reg_fs_ls_nickNameCheck)) {
//       signupFsValue.className = 'input-valid'
//       signupFsError.innerHTML = ''
//     } else {
//       signupFsValue.className = 'input-invalid'
//       signupFsError.innerHTML = `      
//       <p class='hidden'>peace</p>
//       <p class='error show'>This name is invalid.</p>`
//     }

//     // last_name check
//     if (signupLsValue.value.match(reg_fs_ls_nickNameCheck)) {
//       signupLsValue.className = 'input-valid'
//       signupLsError.innerHTML = ''
//     } else {
//       signupLsValue.className = 'input-invalid'
//       signupLsError.innerHTML = `
//       <p class='hidden'>peace</p>
//       <p class='error show'>This name is invalid.</p>`
//     }

//     // nick_name check
//     if (signupNnValue.value.match(reg_fs_ls_nickNameCheck) || signupNnValue.value === '') {
//       signupNnValue.className = 'input-valid'
//       signupNnError.innerHTML = ''
//     } else {
//       signupNnValue.className = 'input-invalid'
//       signupNnError.innerHTML = `      
//       <p class='hidden'>peace</p>
//       <p class='error show'>This name is invalid.</p>`
//     }

//     if (signupFsValue.className === 'input-valid' && signupLsValue.className === 'input-valid' && signupNnValue.className === 'input-valid') {
//       newCustomerMdb.details.given_name = signupFsValue.value
//       newCustomerSquare.details.given_name = signupFsValue.value
//       newCustomerLocId.details.given_name = signupFsValue.value
//       newCustomerConfirmation.details.given_name = signupFsValue.value
//       newCustomerMdb.details.family_name = signupLsValue.value
//       newCustomerSquare.details.family_name = signupLsValue.value
//       newCustomerLocId.details.family_name = signupLsValue.value
//       newCustomerConfirmation.details.family_name = signupLsValue.value
//       newCustomerMdb.details.nickname = signupNnValue.value
//       newCustomerSquare.details.nickname = signupNnValue.value
//       newCustomerLocId.details.nickname = signupNnValue.value
      
//       signupDetails1Container.className = 'su-c-right-details-1 hide-container'
//       signUpSubmitBtn1.className = 'su-next-btn hide-container'
//       signupDetails2Container.className = 'su-c-right-details-2'
//       signUpSubmitBtn2.className = 'su-next-btn'
//     }
// })

// // sign up details 2 -- birthday
// signUpSubmitBtn2.addEventListener('click', () => {
//   // check month selected
//   if (signupBdayMonth.value !== 'MM') {
//     signupBdayMonth.className = 'month-day-w input-valid'
//     signupBdayMonthError.innerHTML = ''
//   } else {
//     signupBdayMonth.className = 'month-day-w input-invalid'
//     signupBdayMonthError.innerHTML = `<p class='error show'>Please select a month.</p>`
//   }

//   // check day selected
//   if (signupBdayDays.value !== 'DD') {
//     signupBdayDays.className = 'month-day-w input-valid'
//     signupBdayDaysError.innerHTML = ''
//   } else {
//     signupBdayDays.className = 'month-day-w input-invalid'
//     signupBdayDaysError.innerHTML = `<p class='error show'>Please select a day.</p>`
//   }

//   // check year selected
//   if (signupBdayYear.value !== 'YYYY') {
//     signupBdayYear.className = 'month-year-w input-valid'
//     signupBdayYearError.innerHTML = ''
//   } else {
//     signupBdayYear.className = 'month-year-w input-invalid'
//     signupBdayYearError.innerHTML = `<p class='error show'>Please select a year.</p>`
//   }

//   if (signupBdayMonth.className === 'month-day-w input-valid' && signupBdayDays.className === 'month-day-w input-valid' && signupBdayYear.className === 'month-year-w input-valid') {
//     newCustomerMdb.details.birthday = `${signupBdayMonth.value}-${signupBdayDays.value}-${signupBdayYear.value}`
//     newCustomerSquare.details.birthday = `${signupBdayYear.value}-${signupBdayMonth.value}-${signupBdayDays.value}`
//     signupDetails2Container.className = 'su-c-right-details-2 hide-container'
//     signUpSubmitBtn2.className = 'su-next-btn hide-container'
//     signupDetails3Container.className = 'su-c-right-details-3'
//     signUpSubmitBtn3.className = 'su-next-btn'
//   }

// })

// // sign up details 3 -- phone 
// signUpSubmitBtn3.addEventListener('click', () => {
//   console.log('ive been clicked')
//   // check phone value
//   if (signupPhoneValue.value.match(phoneCheck1) || signupPhoneValue.value.match(phoneCheck2) || signupPhoneValue.value.match(phoneCheck3) || signupPhoneValue.value.match(phoneCheck4) || signupPhoneValue.value.match(phoneCheck5)) {
//     signupPhoneValue.className = 'input-valid'
//     signupPhoneError.innerHTML = ``
//   } else {
//     signupPhoneValue.className = 'input-invalid'
//     signupPhoneError.innerHTML = `      
//     <p class='hidden'>peace</p>
//     <p class='error show'>This number is invalid.</p>`
//   }

//   if (signupPhoneValue.className = 'input-valid') {
//     newCustomerMdb.details.phone_number = signupPhoneValue.value
//     newCustomerSquare.details.phone_number = signupPhoneValue.value
//     newCustomerConfirmation.details.phone_number = signupPhoneValue.value
//     signupDetails3Container.className = 'su-c-right-details-3 hide-container'
//     signUpSubmitBtn3.className = 'su-next-btn hide-container'
//     signupDetails4Container.className = 'su-c-right-details-4'
//     signUpSubmitBtn4.className = 'su-next-btn'
//   }

// })

// // signup details 4 -- loc_type
// signUpSubmitBtn4.addEventListener('click', () => {
//   // check location type
//   if (signupLocType.value !== 'select-a-type') {
//     signupLocType.className = 'input-valid'
//     signupLocTypeError.innerHTML = ''
//   } else {
//     signupLocType.className = 'input-invalid'
//     signupLocTypeError.innerHTML = `      
//     <p class='hidden'>peace</p>
//     <p class='error show'>Select a location type.</p>`
//   }

//   if (signupLocType.className === 'input-valid') {
//     newCustomerLocType.type = signupLocType.value
//     newCustomerLocId.details.name = `${newCustomerLocType.type}`
//     signupDetails4Container.className = 'su-c-right-details-4 hide-container'
//     signUpSubmitBtn4.className = 'su-next-btn hide-container'
//     signupDetails5Container.className = 'su-c-right-details-5'
//     signUpSubmitBtn5.className = 'su-next-btn'
//   }
// })

// // signup details 5 -- address
// signUpSubmitBtn5.addEventListener('click', () => {
//   console.log('ive been clicked')
//   // check address
//   if (signupAddyValue.value.match(addressCheck) && signupAddyValue.value !== '') {
//     signupAddyValue.className = 'input-valid'
//     signupAddyValueError.innerHTML = ''
//   } else {
//     signupAddyValue.className = 'input-invalid'
//     signupAddyValueError.innerHTML = `
//     <p class='hidden'>peace</p>
//     <p class='error show'>This address is invalid.</p>`
//   }

//   if (signupAddyValue.className === 'input-valid') {
//     newCustomerSquare.details.address_line_1 = signupAddyValue.value
//     newCustomerMdb.details.address_line_1 = signupAddyValue.value
//     newCustomerLocId.details.address_line_1 = signupAddyValue.value
//     signupDetails5Container.className = 'su-c-right-details-5 hide-container'
//     signUpSubmitBtn5.className = 'su-next-btn hide-container'
//     signupDetails6Container.className = 'su-c-right-details-6'
//     signUpSubmitBtn6.className = 'su-next-btn'
//   }
// })

// // signup details 6 -- city
// signUpSubmitBtn6.addEventListener('click', () => {
//   // check address
//   if (signupCityValue.value !== 'select-a-city') {
//     signupCityValue.className = 'input-valid'
//     signupCityValueError.innerHTML = ''
//   } else {
//     signupCityValue.className = 'input-invalid'
//     signupCityValueError.innerHTML = `
//     <p class='hidden'>peace</p>
//     <p class='error show'>Select a city.</p>`
//   }

//   if (signupCityValue.className === 'input-valid') {
//     newCustomerSquare.details.locality = signupCityValue.value
//     newCustomerMdb.details.locality = signupCityValue.value
//     newCustomerLocId.details.locality = signupCityValue.value
//     signupDetails6Container.className = 'su-c-right-details-6 hide-container'
//     signUpSubmitBtn6.className = 'su-next-btn hide-container'
//     signupDetails7Container.className = 'su-c-right-details-7'
//     signUpSubmitBtn7.className = 'su-next-btn'
//   }
// })

// // signup details 7 -- state
// signUpSubmitBtn7.addEventListener('click', () => {
//   // check address
//   if (signupStateValue.value !== 'select-a-state') {
//     signupStateValue.className = 'input-valid'
//     signupStateValueError.innerHTML = ''
//   } else {
//     signupStateValue.className = 'input-invalid'
//     signupStateValueError.innerHTML = `
//     <p class='hidden'>peace</p>
//     <p class='error show'>Select a state.</p>`
//   }

//   if (signupStateValue.className === 'input-valid') {
//     newCustomerSquare.details.administrative_district_level_1 = signupStateValue.value
//     newCustomerMdb.details.administrative_district_level_1 = signupStateValue.value
//     newCustomerLocId.details.administrative_district_level_1 = signupStateValue.value
//     signupDetails7Container.className = 'su-c-right-details-7 hide-container'
//     signUpSubmitBtn7.className = 'su-next-btn hide-container'
//     signupDetails8Container.className = 'su-c-right-details-8'
//     signUpSubmitBtn8.className = 'su-next-btn'
//   }
// })

// // signup details 8 -- zip code
// signUpSubmitBtn8.addEventListener('click', () => {
//   // check address
//   if (signupZipCodeValue.value.match(zipCodeCheck)) {
//     signupZipCodeValue.className = 'input-valid'
//     signupZipCodeValueError.innerHTML = ''
//   } else {
//     signupZipCodeValue.className = 'input-invalid'
//     signupZipCodeValueError.innerHTML = `
//     <p class='hidden'>peace</p>
//     <p class='error show'>This zip code is invalid.</p>`
//   }

//   if (signupZipCodeValue.className === 'input-valid') {
//     newCustomerSquare.details.postal_code = signupZipCodeValue.value
//     newCustomerMdb.details.postal_code = signupZipCodeValue.value
//     newCustomerLocId.details.postal_code = signupZipCodeValue.value
//     signupDetails8Container.className = 'su-c-right-details-8 hide-container'
//     signUpSubmitBtn8.className = 'su-next-btn hide-container'
//     signupDetails9Container.className = 'su-c-right-details-9'
//     signupSubmitBtn.className = 'su-next-btn'
//   }
// })

// // signup details submit btn -- email/pass
// signupSubmitBtn.addEventListener('click', () => {
//   // check email
//   if (signupEmailValue.value.match(emailCheck)) {
//     signupEmailValue.className = 'input-valid'
//     signupEmailValueError.innerHTML = ``
//     customerCheckEmail.email_address = signupEmailValue.value
//     newCustomerSquare.details.email_address = signupEmailValue.value
//     newCustomerMdb.details.email_address = signupEmailValue.value
//     newCustomerConfirmation.details.email_address = signupEmailValue.value
//   } else {
//     signupEmailValue.className = 'input-invalid'
//     signupEmailValueError.innerHTML = `
//     <p class='hidden'>peace</p>
//     <p class='error show'>This email is invalid.</p>`
//   }

//   // check pass1
//   if (signupPass1Value.value.match(passwordCheck)) {
//     signupPass1Value.className = 'input-valid'
//     signupPass1ValueError.innerHTML = ``
//     newCustomerSquare.details.password = signupPass1Value.value
//     newCustomerMdb.details.password = signupPass1Value.value
//   } else {
//     signupPass1Value.className = 'input-invalid'
//     signupPass1ValueError.innerHTML = `
//     <p class='hidden'>peace</p>
//     <p class='error show'>This password is invalid.</p>`
//   }

//   // check pass2
//   if (signupPass2Value.value.match(passwordCheck)) {
//     signupPass2Value.className = 'input-valid'
//     signupPass2ValueError.innerHTML = ``
//     newCustomerSquare.details.password2 = signupPass2Value.value
//     newCustomerMdb.details.password2 = signupPass2Value.value
//   } else {
//     signupPass2Value.className = 'input-invalid'
//     signupPass2ValueError.innerHTML = `
//     <p class='hidden'>peace</p>
//     <p class='error show'>This password is invalid.</p>`
//   }

//   if (signupEmailValue.className === 'input-valid' && signupPass1Value.className === 'input-valid' && signupPass2Value.className === 'input-valid' && signupPass1Value.value === signupPass2Value.value) {
//     console.log(newCustomerSquare, newCustomerMdb)

//     // check mongodb to see if user already exists
//     async function getCustomerMdb() {
//       // req & res
//       const mainResponse = await fetch(`/getUserProfile/${JSON.stringify(customerCheckEmail)}`, { method: 'get' })
//       const mainData = await mainResponse.json()

//       console.log(mainData)

//       if (mainData.length > 0) {
//         mongodbExists = true
//         signupEmailValue.className = 'input-invalid'
//         signupEmailValueError.innerHTML = `
//         <p class='hidden'>peace</p>
//         <p class='error show'>This email is invalid.</p>`
//         console.log('this email already exists in our database -- mongoDb')
//       } else {
//         mongodbExists = false
//         signupEmailValue.className = 'input-valid'
//         signupEmailValueError.innerHTML = ''
//         newCustomerSquare.details.email_address = signupEmailValue.value
//         newCustomerMdb.details.email_address = signupEmailValue.value
//         console.log('this account was not found in our database -- mongoDb')
//       }

//     }
//       getCustomerMdb()
//         .then(() => { console.log('the request to check if user data exists was successfull -- mongodb') })
//         .catch(error => { console.log(error) })

//     // check square to see if user already exists
//     async function getCustomerSquare() {
//       // req & res
//       const get_square_cust_call = await fetch('/getAllSquareCustomers', { method: 'get' })
//       const get_square_cust_data = await get_square_cust_call.json()

//       console.log(get_square_cust_data)

//       for (let i = 0; i < get_square_cust_data.customers.length; i++) {
//         if (get_square_cust_data.customers[i].email_address === customerCheckEmail.email_address) {
//           squareExists = true
//           signupEmailValue.className = 'input-invalid'
//           signupEmailValueError.innerHTML = `
//           <p class='hidden'>peace</p>
//           <p class='error show'>This email already exists.</p>`
//           console.log('this account was found on this attempt -- square api')
//           break
//         } else {
//           squareExists = false
//           signupEmailValue.className = 'input-valid'
//           signupEmailValueError.innerHTML = ''
//           newCustomerSquare.details.email_address = signupEmailValue.value
//           console.log('this account was not found on this attempt -- square api ')     
//         }
//       }

//     }
//       getCustomerSquare()
//         .then(() => { console.log('the request to check if user data exists was successfull -- square api') })
//         .catch(error => { console.log(error) })
   
//     // send to square if both exist bindings are false
//     if (!mongodbExists && !squareExists) {
//       // display lodaing gif
//       signupDetails9Container.className = 'su-c-right-details-9 hide-container'
//       signupDetails10Container.className = 'su-c-right-details-10'

//         // send new customer to square
//         async function sendNewCustSquare() {
//           // req & res
//           const newCustSquare_response = await fetch(`/newCustSquareSignUp/${JSON.stringify(newCustomerSquare.details)}`, { method: 'post' })
//           const newCustSquare_response_data = await newCustSquare_response.json()

//           console.log(newCustSquare_response_data)

//           }
//             sendNewCustSquare()
//               .then(() => { console.log('the new customers data was succsessfully sent -- square api')})
//               .catch((error) => { console.log(error) })  
        
//         // send new customer to mongodb
//         async function sendNewCustMdb() {
//           // req & res
//           const newCustMDB_response = await fetch(`/newCustMDBSignUp/${JSON.stringify(newCustomerMdb.details)}`, { method: 'post' })
//           const newCustMDB_data = await newCustMDB_response.json() 

//           console.log(newCustMDB_data)
//         }
//           sendNewCustMdb()
//             .then(() => { console.log('the new customers data was succsessfully sent -- mongodb')})
//             .catch((error) => { console.log(error) }) 

//         // send sign up confirmation to email
//         async function sendConfirmationEmail() {
//           // req & res
//           const confirmation_email_request = await fetch(`/newCustomerEmail/${JSON.stringify(newCustomerConfirmation.details)}`, {method:'get'})
//           const confirmation_email_response = await confirmation_email_request.json()
          
//           console.log(confirmation_email_response)

//         }
//           sendConfirmationEmail()
//             .then(() => { console.log('the new customer sign up confirmation email has been sent') })
//             .catch((error) => {console.log(error)})

//         // get the new users data from mongodb
//         async function getCustomerDataMdb() {
//           // req & res
//           const thirdResponse = await fetch('/getNewUserDataForOthers', { method: 'get' })
//           const thirdData = await thirdResponse.json()

//           console.log(thirdData)
    
//           // send the new users data to the localstorage
//           localStorage.setItem('currentUser', JSON.stringify(thirdData))

//           console.log(JSON.parse(localStorage.getItem('currentUser')).given_name)

//           liveOn = true

//           localStorage.setItem('live-on', liveOn)
//         }
//           getCustomerDataMdb()
//             .then(() => { 
//               console.log('There wasnt an issue with the request to mongodb -- getnewUserDataForOthers()') 
//               setTimeout(() => {
//                 signupDetails10Container.className = 'su-c-right-details-10 hide-container'
//                 signupDetails11Container.className = 'su-c-right-details-11'

//                 // fetch the port number from the server
//                 async function getPortNumber() {
//                   // fetch the port number
//                   const response = await fetch('/getPortNumber', { method: 'get' })
//                   const data = await response.json()

//                   // portNumber = data

//                   setTimeout(() => {
//                     hLoginContainer.className = 'company-log-in hide-container'
//                     hSignupContainer.className = 'company-sign-up hide-container'
//                     // hLogoutContainer.className = 'company-log-out'

//                     hProfileIcon.className = 'bi bi-person-circle h-icon-green'

//                     window.open(`http://localhost:${data}`, '_top')
//                   }, 3000)
//                 }

//                   getPortNumber()
//                     .then(() => { console.log('The port number was retrieved') })
//                     .catch((error) => { console.log(error) })
//               }, 1000) 
//             })
//             .catch((error) => { console.log(error) }) 
//     }

//   }

// })

// let newDate = new Date()
// let newDateYear = newDate.getFullYear()

// // create auto month option values
// for (let i = 0; i <= 11; i++) {
//   if(i < 9) {
//     signupBdayMonth.innerHTML += `<option value='0${i + 1}'>0${i + 1}</option>`
//   } else {
//     signupBdayMonth.innerHTML += `<option value='${i + 1}'>${i + 1}</option>`
//   }
// }

// // create auto year options for bday select options
// for (let i = newDateYear; i >= 1900; i--) {
//   // console.log(i)
//   signupBdayYear.innerHTML += `<option value='${i}'>${i}</option>`
// }

// // create auto days option based on month and year selected on click or keyup
// signupBdayMonth.addEventListener('click', () => {
//   // signupBdayDays.innerHTML = '<option value="DD">DD</option>'
//   newDate.setMonth(signupBdayMonth.value - 1)
//   newDate.setFullYear(signupBdayYear.value)

//   if (signupBdayMonth.value !== 'MM' && signupBdayYear.value !== 'YYYY') {
//     let firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1).getDate()
//     let lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
//     let days2Show = lastDay - firstDay
    
//     for (let i = 0; i <= days2Show; i++) {
//       if(i < 9) {
//         signupBdayDays.innerHTML += `<option value='0${i + 1}'>0${i + 1}</option>`
//       } else {
//         signupBdayDays.innerHTML += `<option value='${i + 1}'>${i + 1}</option>`
//       }
//     }
//   signupBdayMonth.click()
//   }
// })

// // create auto days option based on month and year selected on click or keyup
// signupBdayYear.addEventListener('click', ()=> {
//   // signupBdayDays.innerHTML = '<option value="DD">DD</option>'
//   newDate.setMonth(signupBdayMonth.value - 1)
//   newDate.setFullYear(signupBdayYear.value)

//   if (signupBdayMonth.value !== 'MM' && signupBdayYear.value !== 'YYYY') {
//     let firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1).getDate()
//     let lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
//     let days2Show = lastDay - firstDay
    
//     for (let i = 0; i <= days2Show; i++) {
//       if(i < 9) {
//         signupBdayDays.innerHTML += `<option value='0${i + 1}'>0${i + 1}</option>`
//       } else {
//         signupBdayDays.innerHTML += `<option value='${i + 1}'>${i + 1}</option>`
//       }
//     }

//   signupBdayYear.click()
//   }
// })

// do something
// if (localStorage.getItem('currentUser')) {
//   hLoginBtn.className = 'company-log-in hide-container'
//   hLoginContainer.className = 'company-log-in hide-container'
//   hSignupContainer.className = 'company-sign-up hide-container'
//   // hLogoutContainer.className = 'company-log-out'
// } else {
//   hLoginContainer.className = 'company-log-in'
//   hSignupContainer.className = 'company-sign-up'
//   // hLogoutContainer.className = 'company-log-out hide-container'
// }

// if (localStorage.getItem('live-on')) {
//   hProfileIcon.className = 'bi bi-person-circle h-icon-green'
// } else {
//   hProfileIcon.className = 'bi bi-person-circle h-icon-red'
// }

// let timeoutID

// // check to see if user is idle or not
// function setup() {
//     this.addEventListener("mousemove", resetTimer, false)
//     this.addEventListener("mousedown", resetTimer, false)
//     this.addEventListener("keypress", resetTimer, false)
//     this.addEventListener("DOMMouseScroll", resetTimer, false)
//     this.addEventListener("mousewheel", resetTimer, false)
//     this.addEventListener("touchmove", resetTimer, false)
//     this.addEventListener("MSPointerMove", resetTimer, false)

//     startTimer();
// }
// setup();

// function startTimer() {
//     // wait 2 seconds before calling goInactive
//     timeoutID = window.setTimeout(goInactive, 1800000)

//     // console.log(timeoutID)
// }

// function resetTimer(e) {
//     window.clearTimeout(timeoutID)

//     goActive();
// }

// function goInactive() {
//   localStorage.removeItem('currentUser')
// }

// function goActive() {

    
//     startTimer()
// }


/* header email contact btn */
// const hEmailBtn = document.getElementById('header-email-btn')
// const emailContactContainerModal = document.getElementById('support-container-modal')
// const emailContactClose = document.getElementById('support-close')

// hEmailBtn.addEventListener('click', ()=> {
//   emailContactContainerModal.className = 'support-container-modal'
// })

// emailContactClose.addEventListener('click', () => {
//   emailContactContainerModal.className = 'support-container-modal hide-container'
// })



/* header nav clicks */
// document.addEventListener('click', (event) => {
//   // login btn 
//   if (event.target === hLoginBtn) {
//     hLoginBtn.style.backgroundColor = '#F05E7C'
//     hLoginBtn.style.color = '#FFF6F7'
//     loginContainerModal.className = 'login-container-modal'
//   } 

//   // signup btn
//   if (event.target === hSignupBtn) {
//     hSignupBtn.style.backgroundColor = '#F05E7C'
//     hSignupBtn.style.color = '#FFF6F7'
//     signupContainerModal.className = 'signup-container-modal'
//   } 
  
//   // login close btn
//   if (event.target === loginContainerClose || event.target === loginContainerModal || event.target === loginContainerBox && event.target !== hLoginBtn) {
//     hLoginBtn.style.backgroundColor = ''
//     hLoginBtn.style.color = '#333333'
//     loginContainerModal.className = 'login-container-modal hide-container'
//   }

//   // signup close btn
//   if (event.target === signupContainerClose || event.target === signupContainerModal || event.target === signupContainerBox && event.target !== hSignupBtn) {
//     hSignupBtn.style.backgroundColor = ''
//     hSignupBtn.style.color = '#333333'
//     signupContainerModal.className = 'signup-container-modal hide-container'
//   }

//   // services drop down close
//   if (csDropDown.className === 'company-services-drop-down') {
//     if (!csDropDown.contains(event.target) && event.target !== csTitle && event.target !== csIcon) {
//       csDropDown.className = 'company-services-drop-down hide-container'
//       csIcon.className = 'bi bi-chevron-down spin-down hover-black'
//       csTitle.style.color = '#717171'
//       csIcon.style.color = '#717171'
//       csDropArrow = 0
//     }
//   }

//   // languages drop down close
//   if (clDropDown.className === 'company-languages-drop-down') {
//     if (!clDropDown.contains(event.target) && event.target !== clTitle && event.target !== clIcon) {
//       clDropDown.className = 'company-languages-drop-down hide-container'
//       clIcon.className = 'bi bi-globe rise-down hover-black'
//       clTitle.style.color = '#717171'
//       clIcon.style.color = '#717171'
//       clDropArrow = 0
//     }
//   }
// })




/** Showcase */
// class TypeWriter {
//   constructor(txtElement, words, wait = 7000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
//   }

//   type() {
//     // Current index of word
//     const current = this.wordIndex % this.words.length;
//     // Get full text of current word
//     const fullTxt = this.words[current];

//     // Check if deleting
//     if(this.isDeleting) {
//       // Remove char
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       // Add char
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     // Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     // Initial Type Speed
//     let typeSpeed = 300;

//     if(this.isDeleting) {
//       typeSpeed /= 1;
//     }

//     // If word is complete
//     if(!this.isDeleting && this.txt === fullTxt) {
//       // Make pause at end
//       typeSpeed = this.wait;
//       // Set delete to true
//       this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === '') {
//       this.isDeleting = false;
//       // Move to next word
//       this.wordIndex++;
//       // Pause before start typing
//       typeSpeed = 1000;
//     }

//     setTimeout(() => this.type(), typeSpeed);
//   }
// }

// // Init On DOM Load
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init() {
//   const txtElement = document.querySelector('.txt-type');
//   const words = JSON.parse(txtElement.getAttribute('data-words'));
//   const wait = txtElement.getAttribute('data-wait');
//   // Init TypeWriter
//   new TypeWriter(txtElement, words, wait);
// }


export { 
  domainName,

  companyPrimaryColor, 
  
  bookingModalS1,
  bookingModalS2,
  bookingModalS3,
  bookingModalS4,
  bookingModalS5,

  companyLat,
  companyLong,

  uniqueRatePerM,
  
  service1Price,
  service2Price,
  service3Price,
  service4Price,
  service5Price2Quart,
  service5Price2Ann,
  
  companyOptions1Bool, 
  companyOptions2Bool,  
  companyOptions3Bool,
  companyOptions4Bool,
  companyOptions5Bool,
  
  reg_fs_ls_nickNameCheck, 
  justLettersCheck, 
  nicknameCheck, 
  phoneCheck1, 
  phoneCheck2, 
  phoneCheck3, 
  phoneCheck4, 
  phoneCheck5, 
  phoneCheck6, 
  filterPhone, 
  addressCheck, 
  zipCodeCheck, 
  lettersOnlyCheck, 
  dobCheck, 
  emailCheck, 
  passwordCheck, 
  
  companyLocationId,

  companyService1VariationId,
  companyService2VariationId,
  companyService3VariationId,
  companyService4VariationId,
  companyService5VariationId,

  companyServicesObj,
  updatedStorageInfo
}

// import './styles/style.css'