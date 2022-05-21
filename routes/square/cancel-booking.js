// import modules
const dotenv = require('dotenv')
const express = require('express')
const fetch = require('node-fetch')

dotenv.config()

const cancelBookingRouter = express.Router()
// exports.cancelBookingSquareRouter = cancelBookingSquareRouter

cancelBookingRouter.post('/cancelBooking/:userBookingId', async (req, res) => {
  // req
  const cancel_booking_request = req.params.userBookingId
  const cancel_booking_request_parsed = JSON.parse(cancel_booking_request)
  let userBookingId = cancel_booking_request_parsed.id 
  console.log(userBookingId)

  // res
  const api_url = `https://connect.squareupsandbox.com/v2/bookings/${userBookingId}/cancel/`
  const config = {
    method: 'post',
    headers: {
      'square-version': '2022-03-16',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    }
  }

  const cancel_booking_req = await fetch(api_url, config)
  const cancel_booking_res = await cancel_booking_req.json()  
  console.log(cancel_booking_res)
  res.json(cancel_booking_res)
})

module.exports = { cancelBookingRouter }