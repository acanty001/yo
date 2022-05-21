const termsConditionsFooterBtn = document.getElementById('terms-and-conditions-footer-btn')
const termsConditionsModal = document.getElementById('terms-and-conditions-modal')
const termsConditionsClose = document.getElementById('terms-and-conditions-modal-close')

class TermsAndConditions {
  constructor() {

    this.openModal = this.openModal()
    this.closeModal = this.closeModal()
  }

  openModal() {
    termsConditionsFooterBtn.addEventListener('click', () => {
      termsConditionsModal.className = 'terms-and-conditions-modal'
    })
  }

  closeModal() {
    termsConditionsClose.addEventListener('click', () => {
      termsConditionsModal.className = 'terms-and-conditions-modal hide-container'
    })

    document.addEventListener('click', (event) => {
      if (event.target === termsConditionsModal) {
        termsConditionsModal.className = 'terms-and-conditions-modal hide-container'
      }
    })
  }
}

const termsConditionsComponent = new TermsAndConditions()

module.exports = { termsConditionsComponent }