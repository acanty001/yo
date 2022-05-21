// import modules
const dotenv = require('dotenv')
const express = require('express')
const sgMail = require('@sendgrid/mail')

dotenv.config()

// Connect to Twilio Send Grid Email
sgMail.setApiKey(process.env.TWILIO_SENDGRID_API_KEY)

const emailBookingRouter = express.Router()
// exports.emailBookingRouter = emailBookingRouter

emailBookingRouter.get('/emailBooking/:emailBookingObj', async (req, res) => {
  // req 
  const email_booking_request = req.params.emailBookingObj
  const email_booking_request_parsed = JSON.parse(email_booking_request)

  console.log(email_booking_request_parsed)

  // res
  // convert duration minutes to hours
  let newDurationTime, newDurationUnit, newConfirmationMsg
  if (email_booking_request_parsed.duration_minutes > 60) {
    newDurationTime = email_booking_request_parsed.duration_minutes / 60
  } else {
    newDurationTime = email_booking_request_parsed.duration_minutes
  }
  
  if (email_booking_request_parsed.duration_minutes / 60 < 1) {
    newDurationUnit = 'mins'
    newConfirmationMsg = 'Talk to you soon!'
  } else if (email_booking_request_parsed.duration_minutes / 60 === 1 ) {
    newDurationUnit = 'hr'
    newConfirmationMsg = 'See you soon!'
  } else if (email_booking_request_parsed.duration_minutes / 60 >= 1 ) {
    newDurationUnit = 'hrs'
    newConfirmationMsg = 'See you soon!'
  }

  // rearrange current date
  let newAppointmentYear = email_booking_request_parsed.start_at.slice(0, 4)
  let newAppointmentMonth = email_booking_request_parsed.start_at.slice(5, 7)
  let newAppointmentDay = email_booking_request_parsed.start_at.slice(8, 10)

  // rearrange phone_number
  const firstThree = email_booking_request_parsed.phone_number.slice(0, 3)
  const secondThree = email_booking_request_parsed.phone_number.slice(3, 6)
  const lastFour = email_booking_request_parsed.phone_number.slice(6, 10)

  let newPhoneNumber = '(' + firstThree + ')-' + secondThree + '-' + lastFour 

  // set current time
  let date = new Date()
  console.log(date.toString())

  const message = {
    from: {
      email: 'acanty001@gmail.com', // company email and domain
      name: 'So Posh'
    },
    to: {
      email: 'cantyaikyu@gmail.com',
      name: 'Booking Confirmation'
    },
    subject: 'Thank you for booking with us!',
    dynamic_template_data: {
      'service-name': `${email_booking_request_parsed.service_name}`,
      'service-price': `${email_booking_request_parsed.service_price}`,
      "time-booked": `${date.toString()}`,
      "employee": `${email_booking_request_parsed.employee_name}`,
      "customer": `${email_booking_request_parsed.given_name} ${email_booking_request_parsed.family_name}`, 
      "appointment-time": `${newAppointmentMonth}/${newAppointmentDay}/${newAppointmentYear} @ ${email_booking_request_parsed.appointment_time}`, 
      "duration": `${newDurationTime} ${newDurationUnit}`,
      "phone": `${newPhoneNumber}`,
      'confirmation-msg': `${newConfirmationMsg}` 
    },
    template_id: `${process.env.TWILIO_BOOKING_CONFIRMATION}`
  }

  //res
  sgMail  
    .send(message)
      .then(()=> { res.json('The email booking confirmation has been sent') })
      .catch((error)=> { console.log(error) })
})

module.exports = { emailBookingRouter }