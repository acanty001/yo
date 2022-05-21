const supportFooterBtn = document.getElementById('support-footer-btn')
const supportModal = document.getElementById('support-modal')
const supportModalClose = document.getElementById('support-modal-close')

class Support {
  constructor() {

    this.openModal = this.openModal()
    this.closeModal = this.closeModal()
  }

  openModal() {
    supportFooterBtn.addEventListener('click', () => {
      supportModal.className = 'support-modal'
    })
  }

  closeModal() {
    supportModalClose.addEventListener('click', () => {
      console.log('ive been clicked')
      supportModal.className = 'support-modal hide-container'
    })

    document.addEventListener('click', (event) => {
      if (event.target === supportModal) {
        supportModal.className = 'support-modal hide-container'
      }
    })
  }
}

const supportComponent = new Support()

module.exports = { supportComponent }