const myApp = require('../../index.js')
const { v4: uuidv4 } = require('uuid')

const domainName1 = 'http://localhost:3000'
const domainName2 = 'http://localhost:3000/'
const domainName3 = 'http://localhost:3000/index.html'

const reviewTextArea = document.getElementById('review-textarea')
const reviewSubmitBtn = document.getElementById('review-submit')

const reviewStar1 = document.getElementById('review-star-1')
const reviewStar2 = document.getElementById('review-star-2')
const reviewStar3 = document.getElementById('review-star-3')
const reviewStar4 = document.getElementById('review-star-4')
const reviewStar5 = document.getElementById('review-star-5')
const reviewStarArr = [reviewStar1, reviewStar2, reviewStar3, reviewStar4, reviewStar5]
let starsCount
let starsSelected = false

const reviewWheel = document.getElementById('review-wheel')
let reviewWheelArr = []
let reviewWheelCounter = 0

let x = ''

class Reviews {
  constructor() {

    this.runReviewsComp = this.reviewTextArea()
    this.reviewStars = this.reviewStars()
    this.reviewSubmitBtn = this.reviewSubmitBtn()
    this.reviewWheel = this.reviewWheel()
  }

  reviewTextArea() {
    if (window.location.href === domainName1 || window.location.href === domainName2 || window.location.href === domainName3) {
      reviewTextArea.addEventListener('keydown', () => {
        if (starsSelected && reviewTextArea.value.length > 0) {
          reviewSubmitBtn.style.backgroundColor = 'rgb(240, 94, 124)'
          reviewSubmitBtn.style.transitionDuration = '0.5s'
        }
      })

      setInterval(() => {
        if (reviewTextArea.value.length === 0) {
          reviewSubmitBtn.style.backgroundColor = ''
          reviewSubmitBtn.style.transitionDuration = '0.5s'
        }
      },500)
    }
  }

  reviewStars() {
    if (window.location.href === domainName1 || window.location.href === domainName2 || window.location.href === domainName3) {
      // "mouseover"
      for (let i = 0; i < reviewStarArr.length; i++) {
        reviewStarArr[i].addEventListener('mouseover', (event) => {
          if (event.target === reviewStarArr[i]) {
            for (let j = 0; j <= reviewStarArr.indexOf(reviewStarArr[i]); j++) {
              reviewStarArr[j].className = 'review-stars-icon bi bi-star-fill'
            }
          }
        })
      }
      // mouseleave
      for (let i = 0; i < reviewStarArr.length; i++) {
        reviewStarArr[i].addEventListener('mouseleave', (event) => {
          if (event.target === reviewStarArr[i] && !starsSelected) {
            for (let j = 0; j < reviewStarArr.length; j++) {
              reviewStarArr[j].className = 'review-stars-icon bi bi-star'
            }
          } else if (event.target === reviewStarArr[i] && starsSelected){
            for (let j = starsCount; j < reviewStarArr.length; j++) {
              reviewStarArr[j].className = 'review-stars-icon bi bi-star'
            }
          }
        })
      }
      // "click"
      for (let i = 0; i < reviewStarArr.length; i++) {
        reviewStarArr[i].addEventListener('click', (event) => {
          if (reviewTextArea.value.length > 0) {
            reviewSubmitBtn.style.backgroundColor = 'rgb(240, 94, 124)'
            reviewSubmitBtn.style.transitionDuration = '0.5s'
          }

          if (event.target === reviewStarArr[i]) {
            for (let p = 0; p < reviewStarArr.length; p++) {
              reviewStarArr[p].className = 'review-stars-icon bi bi-star'
            }

            for (let j = 0; j <= reviewStarArr.indexOf(reviewStarArr[i]); j++) {
              reviewStarArr[j].className = 'review-stars-icon bi bi-star-fill'
              if (j === reviewStarArr.indexOf(reviewStarArr[i])) {
                starsCount = j + 1
              }
            }
            starsSelected = true
          }
        })
      }
    }  
  }

  reviewSubmitBtn() {
    if (window.location.href === domainName1 || window.location.href === domainName2 || window.location.href === domainName3){
      reviewSubmitBtn.addEventListener('mouseover', () => {
        if (reviewSubmitBtn.style.backgroundColor === 'rgb(113, 113, 113)') {
          reviewSubmitBtn.style.cursor = 'not-allowed'
        } else if (reviewSubmitBtn.style.backgroundColor === 'rgb(240, 94, 124)') {
          reviewSubmitBtn.style.cursor = 'pointer'
        }
      })

      reviewSubmitBtn.addEventListener('click', () => {
        if (starsSelected && reviewTextArea.value.length > 0) {
          let uniqueId = uuidv4()
          let newUniqueId = uniqueId.replace(/-/g, "")
          console.log(newUniqueId)
          let reviewVar = `review${newUniqueId}`
          let reviewObj = {
            [reviewVar]: {}
          }
          console.log('lets submit!')
          reviewObj[reviewVar].given_name = JSON.parse(localStorage.getItem('currentUser')).given_name
          reviewObj[reviewVar].family_name = JSON.parse(localStorage.getItem('currentUser')).family_name
          reviewObj[reviewVar].email_address = JSON.parse(localStorage.getItem('currentUser')).email_address
          reviewObj[reviewVar].starsCount = starsCount
          reviewObj[reviewVar].comment = reviewTextArea.value
          console.log(reviewObj)
          
          addReviewMongoDb(reviewObj)
            .then(() => { 
              console.log('addReviewMongoDb() has been sent to the server')
              // getCustomerData()
              //   .then(() => { console.log('getCustomerData() has been sent to the server') })
              //   .catch((error) => { console.log(error) })
            })
            .catch((error) => { console.log(error) })

          reviewObj.reviewVariable = reviewVar
          shareReview2Co(reviewObj)
            .then(() => { console.log('shareReview2Co() has been sent to the server') })
            .catch((error) => { console.log(error) })    


          // add review to mongodb
          async function addReviewMongoDb(object) {
            console.log('yooo')
            // request & response
            const update_mongodb_req = await fetch(`/addReview/${JSON.stringify(object)}`, { method: 'post' })
            const update_mongodb_res = await update_mongodb_req.json()
            console.log(update_mongodb_res)
            reviewTextArea.value = ''
            for (let i = 0; i < reviewStarArr.length; i++) {
              reviewStarArr[i].style.backgroundColor = ''
            }
          }

          // send review to company email
          async function shareReview2Co(object) {
            // request & response
            const update_share_review_2co_req = await fetch(`/customerReview/${JSON.stringify(object)}`, { method: 'get' })
            const update_share_review_2co_res = await update_share_review_2co_req.json()
            console.log(update_share_review_2co_res) 
          }
           
          // get customer data from mongodb
          async function getCustomerData() {
            // request & response
            const get_customer_data_req = await fetch(`/checkUserMongoDB/${localStorage.getItem('currentUser')}`)
            const get_customer_data_res = await get_customer_data_req.json()
            console.log(get_customer_data_res)
          }
            
        }
      })
    }
  }

  reviewWheel() {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('page loaded')
      getReviews()
        .then(() => { console.log('getReviews() has been sent to the server') })
        .catch((error) => { console.log(error) })
    })

    // get reviews + display on page
    async function getReviews() {
      const get_reviews_mongodb_req = await fetch('/getReviews', { method: 'get' })
      const get_reviews_mongodb_res = await get_reviews_mongodb_req.json()
      console.log(get_reviews_mongodb_res)

      for (let name in get_reviews_mongodb_res) {
        console.log(name)
        reviewWheelArr.push(get_reviews_mongodb_res[`${name}`].comment)
        reviewWheelArr[0] = "This was such an amazing experience!"
      }
      console.log(reviewWheelArr)

      setInterval(() => {
        reviewWheel.innerHTML = `<h1 class="appear"><span class="quotes-1">"</span>${reviewWheelArr[reviewWheelCounter]}<span class="quotes-2">"</span></h1>`
        reviewWheelCounter++
        if (reviewWheelCounter === reviewWheelArr.length) {
          reviewWheelCounter = 0
        }
      }, 8000)
    }
  }
}

const reviewsComponent = new Reviews()

module.exports = { reviewsComponent }