const pleaseLoginSignUpModalClose = document.getElementById('please-login-signup-modal-close')

const pleaseLoginSignUpModal = document.getElementById('please-login-signup-modal-container')
const pleaseLoginBtn = document.getElementById('please-login-btn')
const loginContainerModal = document.getElementById('login-container-modal')
const pleaseSignUpBtn = document.getElementById('please-signup-btn')
const signUpContainerModal = document.getElementById('signup-container-modal')

class PleaseLoginSignUp {
  constructor() {
    this.runPleaseLoginBtn = this.runPleaseLoginBtn()
    this.runPleaseSignUpBtn = this.runPleaseSignUpBtn()
    this.runPleaseLoginSignUpModalClose = this.runPleaseLoginSignUpModalClose()
  }

  runPleaseLoginBtn() {
    // if please "login" btn clicked
    pleaseLoginBtn.addEventListener('click', () => {
      pleaseLoginSignUpModal.className = 'please-login-signup-container-modal hide-container'
      loginContainerModal.className = 'login-container-modal'   
    })
  }

  runPleaseSignUpBtn() {
    // if please "signup" btn clicked
    pleaseSignUpBtn.addEventListener('click', () => {
      pleaseLoginSignUpModal.className = 'please-login-signup-container-modal hide-container'
      signUpContainerModal.className = 'signup-container-modal'  
    })
  }

  runPleaseLoginSignUpModalClose() {
    // if please login/signup "close" btn clicked
    pleaseLoginSignUpModalClose.addEventListener('click', () => {
      pleaseLoginSignUpModal.className = 'please-login-signup-container-modal hide-container'
    })

    // if clicked outside of please login/signup modal
    document.addEventListener('click', (event) => {
      if (event.target.className === 'please-login-signup-modal-container') {
        pleaseLoginSignUpModal.className = 'please-login-signup-container-modal hide-container'
      }
    })
  }
}

const pleaseLoginSignUpComponent = new PleaseLoginSignUp()

module.exports = { pleaseLoginSignUpComponent }