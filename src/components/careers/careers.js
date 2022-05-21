const careerFooterBtn = document.getElementById('career-footer-btn')
const careerModal = document.getElementById('career-modal')
const careerModalClose = document.getElementById('career-modal-close')
const careerModalBox = document.getElementById('career-modal-box')
const careerModalFirstN = document.getElementById('career-modal-first-n')
const careerModalLastN = document.getElementById('career-modal-last-n')
const careerModalEmail = document.getElementById('career-modal-email')
const careerModalPosition = document.getElementById('career-modal-position')
const careerModalPhone = document.getElementById('career-modal-phone')
const careerSubmitBtn = document.getElementById('career-modal-submit-btn')
const careerModalLoader = document.getElementById('career-modal-loader')

const reg_fs_ls_nickNameCheck = /[A-Za-z]{2}[0-9]*$/
const phoneCheck1 = /^\([0-9]{3,3}\)\-[0-9]{3,3}\-[0-9]{4,4}$/
const phoneCheck2 = /^[0-9]{10,10}$/
const phoneCheck3 = /^1\([0-9]{3,3}\)\-[0-9]{3,3}\-[0-9]{4,4}$/
const phoneCheck4 = /^\([0-9]{3,3}\)[0-9]{3,3}\-[0-9]{4,4}$/
const phoneCheck5 = /^[0-9]{3,3}\-[0-9]{3,3}\-[0-9]{4,4}$/
const phoneCheck6 = /^[0-9]{3,3}\.[0-9]{3,3}\.[0-9]{4,4}$/
const emailCheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

let careerApplicationObj = {
  position: '',
  given_name: '',
  family_name: '',
  email_address: '',
  phone: ''
}

class Careers {
  constructor() {

    this.openCareers = this.openCareers()
    this.sendApplication = this.sendApplication()
    this.closeModal = this.closeModal()
  }

  openCareers() {
    careerFooterBtn.addEventListener('click', () => {
      careerModal.className = 'career-modal'
    })
  }

  sendApplication() {
    careerSubmitBtn.addEventListener('click', () => {
      if (careerModalFirstN.value.match(reg_fs_ls_nickNameCheck)) {
        careerApplicationObj.given_name = careerModalFirstN.value
        careerModalFirstN.className = 'input-valid-clear'
      } else {
        careerModalFirstN.className = 'input-invalid'
      }
      if (careerModalLastN.value.match(reg_fs_ls_nickNameCheck)) {
        careerApplicationObj.family_name = careerModalLastN.value
        careerModalLastN.className = 'input-valid-clear'
      } else {
        careerModalLastN.className = 'input-invalid'
      }
      if (careerModalEmail.value.match(emailCheck)) {
        careerApplicationObj.email_address = careerModalEmail.value
        careerModalEmail.className = 'input-valid-clear'
      } else {
        careerModalEmail.className = 'input-invalid'
      }
      if (careerModalPhone.value.match(phoneCheck1) || careerModalPhone.value.match(phoneCheck2) || careerModalPhone.value.match(phoneCheck3) || careerModalPhone.value.match(phoneCheck4) || careerModalPhone.value.match(phoneCheck5) || careerModalPhone.value.match(phoneCheck6)) {
        careerApplicationObj.phone = careerModalPhone.value
        careerModalPhone.className = 'input-valid-clear'
      } else {
        careerModalPhone.className = 'input-invalid'
      }

      if (careerModalFirstN.className === 'input-valid-clear' && careerModalLastN.className === 'input-valid-clear' && careerModalEmail.className === 'input-valid-clear' && careerModalPhone.className === 'input-valid-clear') {
        careerApplicationObj.position = careerModalPosition.value
        sendApplication(careerApplicationObj)
          .then('sendApplication() has been sent to the server')
          .catch((error) => { console.log(error) })
      }

      async function sendApplication(object) {
        const send_application_req = await fetch(`/sendApplication/${JSON.stringify(object)}`, { method: 'POST' })
        const send_application_res = await send_application_req.json()
        console.log(send_application_res)
    
        careerModalBox.innerHTML = `
        <div class="career-modal-box-header">
          <h2 class="hidden">Love</h2>
          <i class="bi bi-x-circle"></i>
        </div>
        <div id="career-modal-lodaer" class="career-modal-loader"></div>
        `
        setTimeout(() => {
          careerModalBox.innerHTML = `
          <div class="career-modal-box-header">
            <h2 class="hidden">Love</h2>
            <i id="career-modal-close" class="bi bi-x-circle"></i>
          </div>
          <div class="carerr-modal-thank-you">
            <h1>Application Sent <i class="bi bi-check-circle"></i></h1>
            <h2>We will reach out to you shortly</h2>
          </div>
          `
          setTimeout(() => {
            careerModal.className = 'career-modal hide-container'
          }, 10000)
        },2000)
      }
    })
  }

  closeModal() {
    careerModalClose.addEventListener('click', () => {
      careerModal.className = 'career-modal hide-container'
    })

    document.addEventListener('click', (event) => {
      if (event.target === careerModal) {
        careerModal.className = 'career-modal hide-container'
      }
    })
  }
}

const careersComponent = new Careers()

module.exports = { careersComponent }