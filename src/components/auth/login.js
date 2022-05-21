// import modules
const myApp = require('../../index.js')

// variables
const loginBtn1 = document.getElementById('login-btn-1')
const loginContainerModal = document.getElementById('login-container-modal')
const loginContainerClose = document.getElementById('login-container-close')

const loginContainerBgFields = document.getElementById('login-container-bg-fields')
const loginEmailError = document.getElementById('login-email-error')
const loginEmail = document.getElementById('login-email-value')
const loginPassError = document.getElementById('login-pass-error')
const loginPass = document.getElementById('login-pass-value')
const loginContainerBgSuccess = document.getElementById('login-container-bg-success')
const loginLoader = document.getElementById('login-loader')

const loginGoogle = document.getElementById('login-google-way') 
const loginApple = document.getElementById('login-apple-way')

const loginSubmitBtn1 = document.getElementById('login-submit-btn-1')

let loginConfig = {
  details: {
    email_address: '',
    password: ''
  }
}

class Login {
  constructor() {
    this.runLoginOpen = this.runLoginOpen()
    this.runLoginClose = this.runLoginClose()
    this.runLoginBtn = this.runLoginBtn()
  }

  runLoginOpen() {
    loginBtn1.addEventListener('click', () => {
      console.log('yoo')
      loginContainerModal.className = 'login-container-modal'
    })
  }

  runLoginClose() {
    // off login modal drop down
    document.addEventListener('click', (event) => {
      console.log(event.target)
      if (event.target.className === 'login-container' || event.target.className === 'login-container-modal') {
        loginContainerModal.className = 'login-container-modal hide-container'
      }
    })
  }

  runLoginBtn() {
    // login submit btn
    loginSubmitBtn1.addEventListener('click', () => {
      console.log('peace')
      // check for valid email
      if (loginEmail.value.match(myApp.emailCheck)) {
        loginEmail.className = 'input-valid-clear'
        loginEmailError.innerHTML = ''
        loginConfig.details.email_address = loginEmail.value
      } else {
        loginEmail.className = 'input-invalid'
        loginEmailError.innerHTML = `
        <p class='hidden'>peace</p>
        <p class='error'>This email is invalid.</p>
        `
      }

      // check for valid password
      if (loginPass.value.match(myApp.passwordCheck)) {
        loginPass.className = 'input-valid-clear'
        loginPassError.innerHTML = ''
        loginConfig.details.password = loginPass.value
      } else {
        loginPass.className = 'input-invalid'
        loginPassError.innerHTML = `
        <p class='hidden'>peace</p>
        <p class='error'>This password is invalid.</p>
        `
      }

      // check if entered details exist in mongodb
      if (loginEmail.className === 'input-valid-clear' && loginPass.className === 'input-valid-clear' ) {
        console.log(loginConfig)

        // send email express server to check mongodb
        async function checkUserMongoDBLogin() {
          // req & res
          const check_user_req = await fetch(`/checkUserMongoDB/${JSON.stringify(loginConfig.details)}`, { method: 'get' })
          const check_user_res = await check_user_req.json()

          console.log(check_user_res)

          if (check_user_res !== 'Sorry this password is incorrect') {
            
  
            if (check_user_res.email_address === loginConfig.details.email_address && check_user_res.password === '**********') {
              loginEmailError.innerHTML = ''
              loginPassError.innerHTML = ''
              
            
              localStorage.setItem('currentUser', JSON.stringify(check_user_res))
              localStorage.setItem('liveOn', true)

              loginEmail.className = 'input-valid slide-input-left hide-container'
              loginPass.className = 'input-valid slide-input-left hide-container'
              loginSubmitBtn1.className = 'bi bi-arrow-right-circle-fill hide-container'

              loginLoader.className = 'login-loader'

              setTimeout(() => {
                // loginContainerBgSuccessLoader.className = 'login-container-bg-success-details-loader hide-container'
                loginContainerModal.className - 'login-container-modal hide-container'
                window.location.reload()
              }, 1500)


            } else {
              loginEmailError.innerHTML = `
              <p class='hidden'>peace</p>
              <P class='error'>This is the wrong email/password. Please try again.</p>
              `
              loginPassError.innerHTML = `
              <p class='hidden'>peace</p>
              <P class='error'>This is the wrong email/password. Please try again.</p>
              `
              loginEmail.className = 'input-invalid'
              loginPass.className = 'input-invalid'
            }
          }

        }
          checkUserMongoDBLogin()
            .then(() => { console.log('login config object -- email -- has been sent to express js server') })
            .catch((error) => console.log(error))
      }
    })
  }
}

const loginComponent = new Login()

/* export modules */
module.exports = { loginComponent }