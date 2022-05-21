// import modules
const dotenv = require('dotenv')
const express = require('express')
const sgMail = require('@sendgrid/mail')

dotenv.config()

// Connect to Twilio Send Grid Email
sgMail.setApiKey(process.env.TWILIO_SENDGRID_API_KEY)

const customerReviewRouter = express.Router()

customerReviewRouter.get('/customerReview/:customerReviewObj', async (req, res) => {
  // req 
  const customer_review_request = req.params.customerReviewObj
  const customer_review_request_parsed = JSON.parse(customer_review_request)
  console.log(customer_review_request_parsed)
  console.log(customer_review_request_parsed.reviewVariable)

  // res
  const message = {
    from: {
      email: 'acanty001@gmail.com', // company email and domain
      name: 'So Posh'
    },
    to: {
      email: 'cantyaikyu@gmail.com',
      name: 'Booking Confirmation'
    },
    subject: 'Customer',
    text: `
    Customer Name: ${customer_review_request_parsed[`${customer_review_request_parsed.reviewVariable}`].given_name} ${customer_review_request_parsed[`${customer_review_request_parsed.reviewVariable}`].family_name}
    Customer Email: ${customer_review_request_parsed[`${customer_review_request_parsed.reviewVariable}`].email_address},
    Star Count: ${customer_review_request_parsed[`${customer_review_request_parsed.reviewVariable}`].starsCount}/5,
    Comment: ${customer_review_request_parsed[`${customer_review_request_parsed.reviewVariable}`].comment}`
  }

  //res
  sgMail  
    .send(message)
      .then(()=> { res.json('The customers review confirmation has been sent') })
      .catch((error)=> { console.log(error) })

})  

module.exports = { customerReviewRouter }

