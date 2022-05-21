const policyFooterBtn = document.getElementById('policy-footer-btn')
const policyModal = document.getElementById('policy-modal')
const policyClose = document.getElementById('policy-modal-close')

class Policy {
  constructor() {

    this.openModal = this.openModal()
    this.closeModal = this.closeModal()
  }

  openModal() {
    policyFooterBtn.addEventListener('click', () => {
      policyModal.className = 'policy-modal'
    })
  }

  closeModal() {
    policyClose.addEventListener('click', () => {
      policyModal.className = 'policy-modal hide-container'
    })

    document.addEventListener('click', (event) => {
      if (event.target === policyModal) {
        policyModal.className = 'policy-modal hide-container'
      }
    })
  }
}

const policyComponent = new Policy()

module.exports = { policyComponent }