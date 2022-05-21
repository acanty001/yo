// import modules
const dotenv = require('dotenv')
const express = require('express')
const twilio = require('twilio')

dotenv.config()

const textBookingRouter = express.Router()

textBookingRouter.post('/textBooking/:textBookingObj', async (req, res) => {
  // req
  const text_booking_request = req.params.textBookingObj 
  const text_booking_request_parsed = JSON.parse(text_booking_request)

  console.log(text_booking_request_parsed)

  // convert "duration minutes" to hours && // set confirmation message
  let newDurationTime, newDurationUnit, newConfirmationMsg
  if (text_booking_request_parsed.duration_minutes > 60) {
    newDurationTime = text_booking_request_parsed.duration_minutes / 60
  } else {
    newDurationTime = text_booking_request_parsed.duration_minutes
  }
  
  if (text_booking_request_parsed.duration_minutes / 60 < 1) {
    newDurationUnit = 'mins'
    newConfirmationMsg = 'Talk to you soon!'
  } else if (text_booking_request_parsed.duration_minutes / 60 === 1 ) {
    newDurationUnit = 'hr'
    newConfirmationMsg = 'See you soon!'
  } else if (text_booking_request_parsed.duration_minutes / 60 >= 1 ) {
    newDurationUnit = 'hrs'
    newConfirmationMsg = 'See you soon!'
  }

  // slice booking "date"
  let newAppointmentYear = text_booking_request_parsed.start_at.slice(0, 4)
  let newAppointmentMonth = text_booking_request_parsed.start_at.slice(5, 7)
  let newAppointmentDay = text_booking_request_parsed.start_at.slice(8, 10)

  // slice and rearrange booking "phone_number"
  const firstThree = text_booking_request_parsed.phone_number.slice(0, 3)
  const secondThree = text_booking_request_parsed.phone_number.slice(3, 6)
  const lastFour = text_booking_request_parsed.phone_number.slice(6, 10)
  let newPhoneNumber = '(' + firstThree + ')-' + secondThree + '-' + lastFour

  // res
  const accountSid = `${process.env.TWILIO_ACCOUNT_SID}`
  const authToken = `${process.env.TWILIO_AUTH_TOKEN}`
  const client = twilio(accountSid, authToken)
  
  client.messages 
    .create({ 
      body: `Thank you for booking with So Posh!\n\nEmployee: ${text_booking_request_parsed.employee_name}\nService: ${text_booking_request_parsed.service_name}\nCustomer: ${text_booking_request_parsed.given_name} ${text_booking_request_parsed.family_name}\nAppointment Time: ${newAppointmentMonth}/${newAppointmentDay}/${newAppointmentYear} @ ${text_booking_request_parsed.appointment_time}\nDuration: ${newDurationTime} ${newDurationUnit}\nPhone: ${newPhoneNumber}\nPaid: ${text_booking_request_parsed.service_price}\n\n${newConfirmationMsg}`,
      messagingServiceSid: 'MGd9f844413be5d5f69147dddf190d11d9',      
      to: `${text_booking_request_parsed.phone_number}` 
    }) 
    .then((message) => res.json(message)) 
    .catch((error)=> console.log(error))
})


module.exports = { textBookingRouter }
