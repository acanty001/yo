const myApp = require('../../index.js')

const domainName1 = 'http://localhost:3000'
const domainName2 = 'http://localhost:3000/'
const domainName3 = 'http://localhost:3000/index.html'

// info service arrows
const infoServiceLeftArrow = document.getElementById('info-services-left-arrow')
const infoServiceRightArrow = document.getElementById('info-services-right-arrow')
let infoServiceArrowCount = 0

// info services containers 1/2
const infoServiceIcon1 = document.getElementById('info-services-icons-1') // left
const infoServiceIcon2 = document.getElementById('info-services-icons-2') // left
const infoServiceIcon3 = document.getElementById('info-services-icons-3') // left
const infoServiceIcon4 = document.getElementById('info-services-icons-4') // left
const infoServiceIcon5 = document.getElementById('info-services-icons-5') // left

const infoServicesIconsArr = [infoServiceIcon1, infoServiceIcon2, infoServiceIcon3, infoServiceIcon4, infoServiceIcon5]

const infoService1ContainerRight = document.getElementById('info-service1-container-right') // right
const infoService2ContainerRight = document.getElementById('info-service2-container-right') // right
const infoService3ContainerRight = document.getElementById('info-service3-container-right') // right 
const infoService4ContainerRight = document.getElementById('info-service4-container-right') // right
const infoService5ContainerRight = document.getElementById('info-service5-container-right') // right

const infoServiceContainersArr = [infoService1ContainerRight, infoService2ContainerRight, infoService3ContainerRight, infoService4ContainerRight, infoService5ContainerRight]

// service "book now" btns
const service1BookNowBtn = document.getElementById('service-1-book-now-btn')
const service2BookNowBtn = document.getElementById('service-2-book-now-btn')
const service3BookNowBtn = document.getElementById('service-3-book-now-btn')
const service4BookNowBtn = document.getElementById('service-4-book-now-btn')
const service5BookNowBtn = document.getElementById('service-5-book-now-btn')

// company options ('triggers opening a booking modal on click')
const companyOptions1 = document.getElementById('company-options-1-drop-down')
const companyOptions2 = document.getElementById('company-options-2-drop-down')
const companyOptions3 = document.getElementById('company-options-3-drop-down')
const companyOptions4 = document.getElementById('company-options-4-drop-down')
const companyOptions5 = document.getElementById('company-options-5-drop-down')

// service "more info" btns
const service1InfoModalBtn = document.getElementById('service-1-info-modal-btn')
const service2InfoModalBtn = document.getElementById('service-2-info-modal-btn')
const service3InfoModalBtn = document.getElementById('service-3-info-modal-btn')
const service4InfoModalBtn = document.getElementById('service-4-info-modal-btn')
const service5InfoModalBtn = document.getElementById('service-5-info-modal-btn')

// service "info modals"
const service1InfoModal = document.getElementById('service-1-info-modal')
const service2InfoModal = document.getElementById('service-2-info-modal')
const service3InfoModal = document.getElementById('service-3-info-modal')
const service4InfoModal = document.getElementById('service-4-info-modal')
const service5InfoModal = document.getElementById('service-5-info-modal')

// service "info modal" close btns
const service1InfoModalCloseBtn = document.getElementById('service-1-info-modal-close')
const service2InfoModalCloseBtn = document.getElementById('service-2-info-modal-close')
const service3InfoModalCloseBtn = document.getElementById('service-3-info-modal-close')
const service4InfoModalCloseBtn = document.getElementById('service-4-info-modal-close')
const service5InfoModalCloseBtn = document.getElementById('service-5-info-modal-close')

// info services class
class InfoServices {
  constructor() {

    this.service1MoreInfo = this.service1MoreInfo()
    this.service2MoreInfo = this.service2MoreInfo()
    this.service3MoreInfo = this.service3MoreInfo()
    this.service4MoreInfo = this.service4MoreInfo()
    this.service5MoreInfo = this.service5MoreInfo()

    this.infoServiceArrows = this.infoServiceArrows()
  }

  // info services arrows
  infoServiceArrows() {
    console.log(domainName1)
    console.log(window.location.href)
    if (window.location.href === domainName1 || window.location.href === domainName2 || window.location.href === domainName3) {
      console.log('the window icons are alive baby')
          // style arrow icons
      if (infoServiceArrowCount === 0) {
        infoServiceLeftArrow.style.cursor = 'not-allowed'
        infoServiceRightArrow.style.cursor = 'pointer'
      }

      if (infoServiceArrowCount === 4) {
        infoServiceLeftArrow.style.cursor = 'pointer'
        infoServiceRightArrow.style.cursor = 'not-allowed'
      }

      infoServiceLeftArrow.addEventListener('click', () => {
        if (infoServiceArrowCount === 0) {
          console.log('ahh ahh ahh you cant got any further')
          infoServiceArrowCount = 0
        } else {

          infoServiceRightArrow.style.cursor = 'pointer'

          if (infoServiceArrowCount === 1) {
            infoServiceLeftArrow.style.cursor = 'not-allowed'
          }

          for (let i = 0; i <= 5; i ++) {
            if (infoServiceArrowCount === i) {
              infoServiceContainersArr[i].className = `s${i + 1}-container-left-main hide-container`
              infoServicesIconsArr[i].className = `services-icons-${i + 1} hide-container`
    
              infoServiceContainersArr[i - 1].className = `s${i}-container-left-main`
              infoServicesIconsArr[i - 1].className = `services-icons-${i}`
    
              infoServiceArrowCount--

              console.log(infoServiceArrowCount)
            }
          }
        }
      })

      infoServiceRightArrow.addEventListener('click', () => {
        if (infoServiceArrowCount === 4) {
          console.log('ahh ahh ahh you cant go any further')
          infoServiceArrowCount = 4
        } else {
          infoServiceArrowCount++
          console.log(infoServiceArrowCount)
          infoServiceLeftArrow.style.cursor = 'pointer'
  
          for (let i = 1; i <= 5; i++) {
            if (infoServiceArrowCount === i) {
              console.log(infoServiceArrowCount)
              
              infoServiceContainersArr[i - 1].className = `s${i}-container-left-main hide-container`
              infoServicesIconsArr[i - 1].className = `services-icons-${i} hide-container`
  
              infoServiceContainersArr[i].className = `s${i + 1}-container-left-main`
              infoServicesIconsArr[i].className = `services-icons-${i + 1}`
  
              if (infoServiceArrowCount === 4) {
                infoServiceRightArrow.style.cursor = 'not-allowed'
              } 
            }
          }
        } 
      })
    }
  }

  // service 1
  service1MoreInfo() {
    if (window.location.href === domainName1 || window.location.href === domainName2 || window.location.href === domainName3) {
      service1InfoModalBtn.addEventListener('click', () => {
        console.log('yoo')
        service1InfoModal.className = 'service-1-info-modal'

        service1InfoModalCloseBtn.addEventListener('click', () => {
          service1InfoModal.className = 'service-1-info-modal hide-container'
        })
      
        if (service1InfoModal.className === 'service-1-info-modal') {
          document.addEventListener('click', (event) => {
            if (event.target === service1InfoModal) {
              service1InfoModal.className = 'service-1-info-modal hide-container'
            }
          })
        }
      })

      // "book now btn"
      service1BookNowBtn.addEventListener('click', () => {
        service1InfoModal.className = 'service-1-info-modal hide-container'
        companyOptions1.click()
      })
    }
  }

  // service 2
  service2MoreInfo() {
    if (window.location.href === domainName1 || window.location.href === domainName2 || window.location.href === domainName3) {
      service2InfoModalBtn.addEventListener('click', () => {
        service2InfoModal.className = 'service-2-info-modal'

        service2InfoModalCloseBtn.addEventListener('click', () => {
          service2InfoModal.className = 'service-2-info-modal hide-container'
        })
      
        if (service2InfoModal.className === 'service-2-info-modal') {
          document.addEventListener('click', (event) => {
            if (event.target === service2InfoModal) {
              service2InfoModal.className = 'service-2-info-modal hide-container'
            }
          })
        }
      })

      // "book now btn"
      service2BookNowBtn.addEventListener('click', () => {
        service2InfoModal.className = 'service-2-info-modal hide-container'
        companyOptions2.click()
      })
    }
  }

  // service 3
  service3MoreInfo() {
    if (window.location.href === domainName1 || window.location.href === domainName2 || window.location.href === domainName3) {
      service3InfoModalBtn.addEventListener('click', () => {
        service3InfoModal.className = 'service-3-info-modal'

        service3InfoModalCloseBtn.addEventListener('click', () => {
          service3InfoModal.className = 'service-3-info-modal hide-container'
        })
      
        if (service3InfoModal.className === 'service-3-info-modal') {
          document.addEventListener('click', (event) => {
            if (event.target === service3InfoModal) {
              service3InfoModal.className = 'service-3-info-modal hide-container'
            }
          })
        }
      })

      // "book now btn"
      service3BookNowBtn.addEventListener('click', () => {
        service3InfoModal.className = 'service-3-info-modal hide-container'
        companyOptions3.click()
      })
    }
  }

  // service 4
  service4MoreInfo() {
    if (window.location.href === domainName1 || window.location.href === domainName2 || window.location.href === domainName3) {
      service4InfoModalBtn.addEventListener('click', () => {
        service4InfoModal.className = 'service-4-info-modal'

        service4InfoModalCloseBtn.addEventListener('click', () => {
          service4InfoModal.className = 'service-4-info-modal hide-container'
        })
      
        if (service4InfoModal.className === 'service-4-info-modal') {
          document.addEventListener('click', (event) => {
            if (event.target === service4InfoModal) {
              service4InfoModal.className = 'service-4-info-modal hide-container'
            }
          })
        }
      })

      // "book now btn"
      service4BookNowBtn.addEventListener('click', () => {
        service4InfoModal.className = 'service-4-info-modal hide-container'
        companyOptions4.click()
      })
    }
  }

  // service 5
  service5MoreInfo() {
    if (window.location.href === domainName1 || window.location.href === domainName2 || window.location.href === domainName3) {
      service5InfoModalBtn.addEventListener('click', () => {
        service5InfoModal.className = 'service-5-info-modal'

        service5InfoModalCloseBtn.addEventListener('click', () => {
          service5InfoModal.className = 'service-5-info-modal hide-container'
        })
      
        if (service5InfoModal.className === 'service-5-info-modal') {
          document.addEventListener('click', (event) => {
            if (event.target === service5InfoModal) {
              service5InfoModal.className = 'service-5-info-modal hide-container'
            }
          })
        }
      })

      // "book now btn"
      service5BookNowBtn.addEventListener('click', () => {
        service5InfoModal.className = 'service-5-info-modal hide-container'
        companyOptions5.click()
      })
    }
  }
} 

const infoServicesComponent = new InfoServices()

module.exports = { infoServicesComponent }







