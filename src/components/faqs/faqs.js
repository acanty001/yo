const myApp = require('../../index')

const domainName1 = 'http://www.googlywiggly.com'
const domainName2 = 'http://www.googlywiggly.com/'
const domainName3 = 'http://www.googlywiggly.com/index.html'

const faqQuestion1 = document.getElementById('faq-question-1')
const faqQuestion2 = document.getElementById('faq-question-2')
const faqQuestion3 = document.getElementById('faq-question-3')
const faqQuestion4 = document.getElementById('faq-question-4')
const faqQuestion5 = document.getElementById('faq-question-5')
const faqQuestion6 = document.getElementById('faq-question-6')
const faqQuestionArr = [faqQuestion1, faqQuestion2, faqQuestion3, faqQuestion4, faqQuestion5, faqQuestion6]

const faqAnswer1 = document.getElementById('faq-answer-1')
const faqAnswer2 = document.getElementById('faq-answer-2')
const faqAnswer3 = document.getElementById('faq-answer-3')
const faqAnswer4 = document.getElementById('faq-answer-4')
const faqAnswer5 = document.getElementById('faq-answer-5')
const faqAnswer6 = document.getElementById('faq-answer-6')
const faqAnswerArr = [faqAnswer1, faqAnswer2, faqAnswer3, faqAnswer4, faqAnswer5, faqAnswer6]

const faqAnswer1Response = `<h1>No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.</h1>`
const faqAnswer2Response = `<h1>No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.</h1>`
const faqAnswer3Response = `<h1>No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.</h1>`
const faqAnswer4Response = `<h1>No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.</h1>`
const faqAnswer5Response = `<h1>No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.No the Phone Consultation is our only free service for 20 minutes. The In-Home Consultation is a one time service for $100 an hour.</h1>`
const faqAnswer3ResponseArr = [faqAnswer1Response, faqAnswer2Response, faqAnswer3Response, faqAnswer4Response, faqAnswer5Response]

class Faqs {
  constructor() {

    this.questionClick = this.questionClick()
  }

  questionClick() {
    if (window.location.href === domainName1 || window.location.href === domainName2 || window.location.href === domainName3) {
      for (let i = 0; i < faqQuestionArr.length; i++) {
        faqQuestionArr[i].addEventListener('click', () => {
          for (let kyu = 0; kyu < faqQuestionArr.length; kyu++) {
            faqAnswerArr[kyu].innerHTML = ''
            faqAnswerArr[kyu].className = 'fq-answer-hide'
  
            if (kyu === faqQuestionArr.length - 1) {
              faqAnswerArr[i].className = 'fq-answer-show'
              faqAnswerArr[i].innerHTML = faqAnswer3ResponseArr[i]
            }
          }
        })
      }
    }
  }
}

const faqsComponent = new Faqs()

module.exports = { faqsComponent }