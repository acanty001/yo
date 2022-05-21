const { myApp } = require('../../index.js')

const signUpContainerModal = document.getElementById('signup-container-modal')

const signUpBtn1 = document.getElementById('signup-btn-1')
const signUpContainerClose = document.getElementById('signup-container-close')

const signUpContainerDetails1 = document.getElementById('signup-container-input-value-1') // names
const signUpFirstN = document.getElementById('signup-firstn-value')
const signUpLastN = document.getElementById('signup-lastn-value')
const signUpNickN = document.getElementById('signup-nickn-value')
const signUpFirstNError = document.getElementById('signup-firstn-error')
const signUpLastNError = document.getElementById('signup-lastn-error')
const signUpNickNError = document.getElementById('signup-nickn-error')

const signUpContainerDetails2 = document.getElementById('signup-container-input-value-2') // dob
const signUpBdayMonth = document.getElementById('signup-bday-month')
const signUpBdayDays = document.getElementById('signup-bday-days')
const signUpBdayYear = document.getElementById('signup-bday-year')
const signUpBdayMonthError = document.getElementById('signup-bday-month-error')
const signUpBdayDaysError = document.getElementById('signup-bday-days-error')
const signUpBdayYearError = document.getElementById('signup-bday-year-error')

const signUpContainerDetails3 = document.getElementById('signup-container-input-value-3') // phone
const signUpPhone = document.getElementById('signup-phone-value')
const signUpPhoneError = document.getElementById('signup-phone-error')

const signUpContainerDetails4 = document.getElementById('signup-container-input-value-4') // address
const signUpAddress = document.getElementById('signup-address-value')
const signUpAddressError = document.getElementById('signup-address-error')

const signUpContainerDetails5 = document.getElementById('signup-container-input-value-5') // city
const signUpCity = document.getElementById('signup-city-value')
const signUpCityError = document.getElementById('signup-city-error')

const signUpContainerDetails6 = document.getElementById('signup-container-input-value-6') // state
const signUpState = document.getElementById('signup-state-value')
const signUpStateError = document.getElementById('signup-state-error')

const signUpContainerDetails7 = document.getElementById('signup-container-input-value-7') // zip code
const signUpZipCode = document.getElementById('signup-zipcode-value')
const signUpZipCodeError = document.getElementById('signup-zipcode-error')

const signUpContainerDetails8 = document.getElementById('signup-container-input-value-8') // email/pass
const signUpEmail = document.getElementById('signup-email-value')
const signUpPass1 = document.getElementById('signup-pass1-value')
const signUpPass2 = document.getElementById('signup-pass2-value')
const signUpEmailError = document.getElementById('signup-email-error')
const signUpPass1Error = document.getElementById('signup-pass1-error')
const signUpPass2Error = document.getElementById('signup-pass2-error')

const signUpContainerDetails9 = document.getElementById('signup-container-input-value-9') // spinner/loader
const signUpContainerDetails10 = document.getElementById('signup-container-input-value-10') // check/done

const signUpSubmitBtn1 = document.getElementById('signup-submit-btn-1')
const signUpSubmitBtn2 = document.getElementById('signup-submit-btn-2')
const signUpSubmitBtn3 = document.getElementById('signup-submit-btn-3')
const signUpSubmitBtn4 = document.getElementById('signup-submit-btn-4')
const signUpSubmitBtn5 = document.getElementById('signup-submit-btn-5')
const signUpSubmitBtn6 = document.getElementById('signup-submit-btn-6')
const signUpSubmitBtn7 = document.getElementById('signup-submit-btn-7')
const signUpSubmitBtn8 = document.getElementById('signup-submit-btn-8')
const signUpSubmitBtn9 = document.getElementById('signup-submit-btn-9')

let checkUserConfig = {
  details: {
    email_address: '',
    password: ''
  }
}

let newUserLocation = {
  type_name: 'Home',
  email_address: '',
  address_line_1: '',
  administrative_district_level_1: '',
  locality: '',
  postal_code: ''
}

let newUserSquare = {
  details: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: '',
    birthday: '',
    email_address: '',
    family_name: '',
    given_name: '',
    idempotency_key: '',
    nickname: '',
    note: '',
    phone_number: ''
  }
}

let newUserMongoDB = {
  details: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: '',
    birthday: '',
    email_address: '',
    family_name: '',
    given_name: '',
    idempotency_key: '',
    nickname: '', 
    note: '', 
    phone_number: '',
    password: ''
  },

}

let signUpUserStorageInfo = {
  address: {
    type_name: 'Home',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  id: '',
  birthday: '',
  nickname: '',
  given_name: '',
  family_name: '',
  email_address: '',
  phone_number: '',
  password: ''
}

let signUpUserConfirmation = {
  details: {
    email_address: '',
    appointment_time: '',
    time_booked: '',
    given_name: '',
    family_name: '',
    employee: '',
    phone_number: ''
  }
}

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

console.log(reg_fs_ls_nickNameCheck)

class SignUp {
  constructor() {

    this.runSignUpBtn = this.runSignUpBtn()
  }

  runSignUpBtn() {
    // on sign up click
    signUpBtn1.addEventListener('click', () => {
      signUpContainerModal.className = 'signup-container-modal'
    })

    // on modal close click
    signUpContainerClose.addEventListener('click', () => {
      signUpContainerModal.className = 'signup-container-modal hide-container'
    })

    // off modal click
    signUpContainerModal.addEventListener('click', (event) => { 
      if (signUpContainerModal.className === 'signup-container-modal') {
        if (!signUpContainerModal.children[0].children[0].contains(event.target)) {
          signUpContainerModal.className = 'signup-container-modal hide-container'
        }
      }
    })

    // signup submit btn 1 -- (names)
    signUpSubmitBtn1.addEventListener('click', () => {

      // first name check
      if (signUpFirstN.value.match(reg_fs_ls_nickNameCheck)) {
        signUpFirstN.className = 'input-valid'
        signUpFirstNError.innerHTML = '' 
      } else {
        signUpFirstN.className = 'input-invalid'
        signUpFirstNError.innerHTML = `
        <p class='hidden'>peace</p>
        <p class='error'>This name is invalid.</p>
        `
      }

      // last name check
      if (signUpLastN.value.match(reg_fs_ls_nickNameCheck)) {
        signUpLastN.className = 'input-valid'
        signUpLastNError.innerHTML = ''
      } else {
        signUpLastN.className = 'input-invalid'
        signUpLastNError.innerHTML = `
        <p class='hidden'>peace</p>
        <p class='error'>This name is invalid.</p>
        `
      }

      // nick name check
      if (signUpNickN.value.match(reg_fs_ls_nickNameCheck) || signUpNickN.value === '') {
        signUpNickN.className = 'input-valid'
        signUpNickNError.innerHTML = ''
      } else {
        signUpNickN.className = 'input-invalid'
        signUpNickNError.innerHTML = `
        <p class='hidden'>peace</p>
        <p class='error'>This name is invalid.</p>
        `
      }

      if (signUpFirstN.className === 'input-valid' && signUpLastN.className === 'input-valid' && signUpNickN.className === 'input-valid') {

        // add to localStorage object
        signUpUserStorageInfo.given_name = signUpFirstN.value
        signUpUserStorageInfo.family_name = signUpLastN.value
        signUpUserStorageInfo.nickname = signUpNickN.value

        // add to Square object        
        newUserSquare.details.given_name = signUpFirstN.value
        newUserSquare.details.family_name = signUpLastN.value
        newUserSquare.details.nickname = signUpNickN.value

        // add to MongoDb object
        newUserMongoDB.details.given_name = signUpFirstN.value
        newUserMongoDB.details.family_name = signUpLastN.value
        newUserMongoDB.details.nickname = signUpNickN.value

        // add to booking confirmation object
        signUpUserConfirmation.details.given_name = signUpFirstN.value
        signUpUserConfirmation.details.family_name = signUpLastN.value

        // hide inputs/errors/btn after slide
        signUpContainerDetails1.className = 'signup-container-input-value-1 hide-container'
        signUpContainerDetails2.className = 'signup-container-input-value-2'
      }
    })

    let newDate = new Date()
    let newDateYear = newDate.getFullYear()

    // create auto month option values
    for (let i = 0; i <= 11; i++) {
      if(i < 9) {
        signUpBdayMonth.innerHTML += `<option value='0${i + 1}'>0${i + 1}</option>`
      } else {
        signUpBdayMonth.innerHTML += `<option value='${i + 1}'>${i + 1}</option>`
      }
    }

    // create auto year options for bday select options
    for (let i = newDateYear; i >= 1900; i--) {
      // console.log(i)
      signUpBdayYear.innerHTML += `<option value='${i}'>${i}</option>`
    }

    // create auto days option based on month and year selected on click or keyup
    signUpBdayMonth.addEventListener('click', () => {
      signUpBdayDays.innerHTML = ''
      // signupBdayDays.innerHTML = '<option value="DD">DD</option>'
      newDate.setMonth(signUpBdayMonth.value - 1)
      newDate.setFullYear(signUpBdayYear.value)

      if (signUpBdayMonth.value !== 'MM' && signUpBdayYear.value !== 'YYYY') {
        let firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1).getDate()
        let lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
        let days2Show = lastDay - firstDay
        
        for (let i = 0; i <= days2Show; i++) {
          if(i < 9) {
            signUpBdayDays.innerHTML += `<option value='0${i + 1}'>0${i + 1}</option>`
          } else {
            signUpBdayDays.innerHTML += `<option value='${i + 1}'>${i + 1}</option>`
          }
        }
      signUpBdayMonth.click()
      }
    })

    // create auto days option based on month and year selected on click or keyup
    signUpBdayYear.addEventListener('click', ()=> {
      signUpBdayDays.innerHTML = ''
      // signupBdayDays.innerHTML = '<option value="DD">DD</option>'
      newDate.setMonth(signUpBdayMonth.value - 1)
      newDate.setFullYear(signUpBdayYear.value)

      if (signUpBdayMonth.value !== 'MM' && signUpBdayYear.value !== 'YYYY') {
        let firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1).getDate()
        let lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate()
        let days2Show = lastDay - firstDay
        
        for (let i = 0; i <= days2Show; i++) {
          if(i < 9) {
            signUpBdayDays.innerHTML += `<option value='0${i + 1}'>0${i + 1}</option>`
          } else {
            signUpBdayDays.innerHTML += `<option value='${i + 1}'>${i + 1}</option>`
          }
        }

      signUpBdayYear.click()
      }
    })

    // signup submit btn 2 -- (dob)
    signUpSubmitBtn2.addEventListener('click', () => {

      console.log('ive been clicked')

      // check bday month
      if (signUpBdayMonth.value !== 'MM') {
        signUpBdayMonth.className = 'input-valid'
        signUpBdayMonthError.innerHTML = ''
      } else {
        signUpBdayMonth.className = 'input-invalid'
        signUpBdayMonthError.innerHTML = `
        <p class='hidden'>peace love and happiness</p>
        <p class='error'>Select a Month.</p>
        `
      }

      // check bday days
      if (signUpBdayDays.value !== 'DD') {
        signUpBdayDays.className = 'input-valid'
        signUpBdayDaysError.innerHTML = ''
      } else {
        signUpBdayDays.className = 'input-invalid'
        signUpBdayDaysError.innerHTML = `
        <p class='hidden'>peace love and happiness</p>
        <p class='error'>Select a Date.</p>
        `
      }

      // check bday year
      if (signUpBdayYear.value !== 'YYYY') {
        signUpBdayYear.className = 'input-valid'
        signUpBdayYearError.innerHTML = ''
      } else {
        signUpBdayYear.className = 'input-invalid'
        signUpBdayYearError.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>Select a Date.</p>
        `
      }

      if (signUpBdayMonth.className === 'input-valid' && signUpBdayDays.className === 'input-valid' && signUpBdayYear.className === 'input-valid') {

        newUserMongoDB.details.birthday = `${signUpBdayMonth.value}-${signUpBdayDays.value}-${signUpBdayYear.value}`

        newUserSquare.details.birthday = `${signUpBdayYear.value}-${signUpBdayMonth.value}-${signUpBdayDays.value}`

        signUpUserStorageInfo.birthday = `${signUpBdayYear.value}-${signUpBdayMonth.value}-${signUpBdayDays.value}`

        signUpContainerDetails2.className = 'signup-container-input-value-2 hide-container'
        signUpContainerDetails3.className = 'signup-container-input-value-3'
      }

    })

    // signup next btn 3 -- phone 
    signUpSubmitBtn3.addEventListener('click', () => {
      
      // check phone value
      if (signUpPhone.value.match(phoneCheck1) || signUpPhone.value.match(phoneCheck2) || signUpPhone.value.match(phoneCheck3) || signUpPhone.value.match(phoneCheck4) || signUpPhone.value.match(phoneCheck5) || signUpPhone.value.match(phoneCheck6)) {
        signUpPhone.className = 'input-valid'
        signUpPhoneError.innerHTML = ''
      } else {
        signUpPhone.className = 'input-invalid'
        signUpPhoneError.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>This phone number is invalid.</p>
        `
      }

      if (signUpPhone.className === 'input-valid') {
        let filteredPhoneValue = signUpPhone.value.replace(filterPhone, '')
        console.log(filteredPhoneValue)

        signUpUserStorageInfo.phone_number = signUpPhone.value 

        newUserSquare.details.phone_number = filteredPhoneValue
        newUserMongoDB.details.phone_number = filteredPhoneValue
        signUpUserConfirmation.details.phone_number = filteredPhoneValue

        signUpContainerDetails3.className = 'signup-container-input-value-3 hide-container'
        signUpContainerDetails4.className = 'signup-container-input-value-4'
      }
    })

    // signup next btn 4 -- address
    signUpSubmitBtn4.addEventListener('click', () => {
      
      // check address
      if (signUpAddress.value.match(addressCheck)) {
        signUpAddress.className = 'input-valid'
        signUpAddressError.innerHTML = ''
      } else {
        signUpAddress.className = 'input-invalid'
        signUpAddressError.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>This address is invalid.</p>
        `
      }

      if (signUpAddress.className === 'input-valid') {

        signUpUserStorageInfo.address.address_line_1 = signUpAddress.value
        newUserMongoDB.details.address_line_1 = signUpAddress.value
        newUserLocation.address_line_1 = signUpAddress.value
        newUserSquare.details.address_line_1 = signUpAddress.value

        signUpContainerDetails4.className = 'signup-container-input-value-4 hide-container'
        signUpContainerDetails5.className = 'signup-container-input-value-5'
      }

    })

    // signup next btn 5 -- city
    signUpSubmitBtn5.addEventListener('click', () => {

      if (signUpCity.value !== 'select-a-city') {
        signUpCity.className = 'input-valid'
        signUpCityError.innerHTML = ''  
      } else {
        signUpCity.className = 'input-invalid'
        signUpCityError.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>Select a city.</p>
        `
      }

      if (signUpCity.className === 'input-valid') {
        newUserSquare.details.locality = signUpCity.value
        newUserLocation.locality = signUpCity.value
        newUserMongoDB.details.locality = signUpCity.value
        signUpUserStorageInfo.address.locality = signUpCity.value

        signUpContainerDetails5.className = 'signup-container-input-value-5 hide-container'
        signUpContainerDetails6.className = 'signup-container-input-value-6'
      }
    })

    // signup next btn 6 -- state
    signUpSubmitBtn6.addEventListener('click', () => {
      if (signUpState.value !== 'select-a-state') {
        signUpState.className = 'input-valid'
        signUpStateError.innerHTML = ''
      } else {
        signUpState.className = 'input-invalid'
        signUpStateError.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>Select a state.</p>
        `
      }

      if (signUpState.className === 'input-valid') {
        newUserLocation.administrative_district_level_1 = signUpState.value
        newUserSquare.details.administrative_district_level_1 = signUpState.value
        newUserMongoDB.details.administrative_district_level_1 = signUpState.value
        signUpUserStorageInfo.address.administrative_district_level_1 = signUpState.value

        signUpContainerDetails6.className = 'signup-container-input-value-6 hide-container'
        signUpContainerDetails7.className = 'signup-container-input-value-7'
      }
    })

    // signup next btn 7 -- zip code
    signUpSubmitBtn7.addEventListener('click', () => {

      if (signUpZipCode.value.match(zipCodeCheck)) {
        signUpZipCode.className = 'input-valid'
        signUpZipCodeError.innerHTML = ''
        
      } else {
        signUpZipCode.className = 'input-invalid'
        signUpZipCodeError.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>This zip code is invalid.</p>
        `
      }

      if (signUpZipCode.className === 'input-valid') {
        newUserLocation.postal_code = signUpZipCode.value
        newUserMongoDB.details.postal_code = signUpZipCode.value
        newUserSquare.details.postal_code = signUpZipCode.value
        signUpUserStorageInfo.address.postal_code = signUpZipCode.value

        signUpContainerDetails7.className = 'signup-container-input-value-7 hide-container'
        signUpContainerDetails8.className = 'signup-container-input-value-8'
      }
    })

    // signup next btn 8 -- email/pass
    signUpSubmitBtn8.addEventListener('click', () => {
      
      // check email
      if (signUpEmail.value.match(emailCheck)) {
        signUpEmail.className = 'input-valid'
        signUpEmailError.innerHTML = '' 
      } else {
        signUpEmail.className = 'input-invalid'
        signUpEmailError.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>This email is invalid.</p>
        `
      }

      // check password
      if (signUpPass1.value.match(passwordCheck)) {
        signUpPass1.className = 'input-valid'
        signUpPass1Error.innerHTML = '' 
      } else {
        signUpPass1.className = 'input-invalid'
        signUpPass1Error.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>This password is invalid.</p>
        `
      }

      // check password2
      if (signUpPass2.value.match(passwordCheck)) {
        signUpPass2.className = 'input-valid'
        signUpPass2Error.innerHTML = '' 
      } else {
        signUpPass2.className = 'input-invalid'
        signUpPass2Error.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>This password is invalid.</p>
        `
      }

      if (signUpPass1.value === signUpPass2.value && signUpPass1.value.match(passwordCheck) && signUpPass2.value.match(passwordCheck)) {
        signUpPass1.className = 'input-valid'
        signUpPass2.className = 'input-valid'
        signUpPass1Error.innerHTML = '' 
        signUpPass2Error.innerHTML = '' 
      } else {
        signUpPass1.className = 'input-invalid'
        signUpPass2.className = 'input-invalid'
        signUpPass1Error.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>Your passwords do not match.</p>
        ` 
        signUpPass2Error.innerHTML = `
        <p class='hidden'>love peace and happiness</p>
        <p class='error'>Your passwords do not match.</p>
        ` 
      }

      if (signUpEmail.className === 'input-valid' && signUpPass1.className === 'input-valid' && signUpPass2.className === 'input-valid' && signUpPass1.value === signUpPass2.value) {

        signUpUserStorageInfo.email_address = signUpEmail.value
        signUpUserStorageInfo.password = signUpPass1.value

        checkUserConfig.details.email_address = signUpEmail.value
        checkUserConfig.details.password = signUpPass1.value

        newUserMongoDB.details.email_address = signUpEmail.value
        newUserMongoDB.details.password = signUpPass1.value

        newUserLocation.email_address = signUpEmail.value

        newUserSquare.details.email_address = signUpEmail.value

        console.log(newUserMongoDB)
        console.log(newUserSquare)
        console.log(checkUserConfig)
        console.log(signUpUserStorageInfo)

        // check new customer doesn't exist in MongoDb
        async function checkUserMongoDBSignUp() {
          // req & res
          const check_user_mongodb_req = await fetch(`/checkUserMongoDB/${JSON.stringify(signUpUserStorageInfo)}`)
          const check_user_mongodb_res = await check_user_mongodb_req.json()
          console.log(check_user_mongodb_res)

          if (check_user_mongodb_res === 'Could not find the account.') {
            // create new customer in Square 
            async function createUserSquare() {
              const create_user_square_req = await fetch(`/createUserSquare/${JSON.stringify(newUserSquare.details)}`, {  method: 'post'} )
              const create_user_square_res = await create_user_square_req.json()
              console.log(create_user_square_res)
      
              if (create_user_square_res.customer) {
                signUpUserStorageInfo.id = create_user_square_res.customer.id

                // send new MongoDB
                async function createUserMongoDB() {
                  const create_user_mongodb_req = await fetch(`/createUserMongoDB/${JSON.stringify(signUpUserStorageInfo)}`, { method: 'post' })
                  const create_user_mongodb_res = await create_user_mongodb_req.json()

                  console.log(create_user_mongodb_res)

                  localStorage.setItem('currentUser', JSON.stringify(create_user_mongodb_res))
                  localStorage.setItem('liveOn', true)

                  signUpContainerDetails8.className = 'signup-container-input-value-8 hide-container'
                  signUpContainerDetails9.className = 'signup-container-input-value-9'
  
                  setTimeout(() => {
                    // signup submit btn 9 -- spinner/loader
                    signUpContainerDetails9.className = 'signup-container-bg-body-9 hide-container'
                    signUpContainerDetails10.className = 'signup-container-input-value-10'
                    setTimeout(() => {
                      window.location.reload()
                    }, 8000)
                    
                  }, 1500)
                }
                  createUserMongoDB()
                    .then(() => { console.log('the newly customers data has been sent to the express server -- MongoDB') })
                    .catch((error) => { console.log(error) })
              }
            }
              createUserSquare()
                .then(() => { console.log('the newly customers data has been sent to the express server -- Square') })
                .catch((error) => { console.log(error) })
          } else {
            signUpEmail.className = 'input-invalid'
            signUpPass1.className = 'input-invalid'
            signUpPass2.className = 'input-invalid'
            signUpEmailError.innerHTML = `
            <p class='hidden'>love peace and happiness</p>
            <p class='error'>An account already exists under this email.</p>
            ` 
          }
        } 
          checkUserMongoDBSignUp()
            .then(() => { console.log('the checkUserMongoDB() request has been sent to express') })
            .catch((error) => { console.log(error) })  
      }
    })
  }
}

const signUpComponent = new SignUp()

module.exports = { signUpComponent }