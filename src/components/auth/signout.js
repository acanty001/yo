const myApp = require('../../index.js')

const signOutBtn1 = document.getElementById('signout-btn-1')

class SignOut {
  constructor() {

    this.runSignOutBtn = this.runSignOutBtn()
  }

  runSignOutBtn() {
    // on signout click
    signOutBtn1.addEventListener('click', () => {
      let signOutAlert = window.confirm('Are you sure you would like to sign out?')

      if (signOutAlert) {
        // clear local storage
        localStorage.removeItem('currentUser')
        localStorage.removeItem('liveOn')
        localStorage.removeItem('userAccessMyAccountCounter')
        localStorage.removeItem('userAccessAppointmentsCounter')
        localStorage.removeItem('subscription-response')
        localStorage.removeItem('payment-response')
        localStorage.removeItem('service1Price')
        localStorage.removeItem('service2Price')
        localStorage.removeItem('service3Price')
        localStorage.removeItem('service4Price')
        localStorage.removeItem('service5Price')

        window.location.href = 'http://localhost:3000'
      }
    })
  }
}

const signOutComponent = new SignOut()

module.exports = { signOutComponent }