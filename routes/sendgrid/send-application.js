// import modules
const dotenv = require('dotenv')
const express = require('express')
const sgMail = require('@sendgrid/mail')

dotenv.config()

// Connect to Twilio Send Grid Email
sgMail.setApiKey(process.env.TWILIO_SENDGRID_API_KEY)

const sendApplicationRouter = express.Router()

sendApplicationRouter.post('/sendApplication/:sendApplicationObj', async (req, res) => {
  const send_application_request = req.params.sendApplicationObj
  const send_application_request_parsed = JSON.parse(send_application_request)
  console.log(send_application_request_parsed)

  const message = {
    from: {
      email: `acanty001@gmail.com`, // users email
      name: `${send_application_request_parsed.given_name} ${send_application_request_parsed.family_name}`
    },
    to: {
      email: 'cantyaikyu@gmail.com',
      name: 'Career Application'
    },
    subject: 'Career Application',
    text: `
    Position: ${send_application_request_parsed.position},
    Customer Name: ${send_application_request_parsed.given_name} ${send_application_request_parsed.family_name},
    Customer Email: ${send_application_request_parsed.email_address},
    Phone Number: ${send_application_request_parsed.phone}`
  }

  //res
  sgMail  
    .send(message)
      .then(()=> { res.json('The customers application has been sent') })
      .catch((error)=> { console.log(error) })
})

module.exports = { sendApplicationRouter }