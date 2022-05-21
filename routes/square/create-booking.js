// import modules
const dotenv = require('dotenv')
const express = require('express')
const fetch = require('node-fetch')

dotenv.config()

const createBookingRouter = express.Router()

createBookingRouter.post(`/createBooking/:createBookingObj`, async (req, res) => {
  // req 
  const create_booking_request = req.params.createBookingObj
  const create_booking_request_parsed = JSON.parse(create_booking_request)
  
  // res
  const api_url = 'https://connect.squareupsandbox.com/v2/bookings'
  const bodyData = {
    "booking": {
      "appointment_segments": [
        {
          "duration_minutes": `${create_booking_request_parsed.duration_minutes}`,
          "service_variation_id": `${create_booking_request_parsed.service_variation_id}`,
          'service_variation_version': `${create_booking_request_parsed.service_variation_version}`,
          'team_member_id': `${create_booking_request_parsed.team_member_id}`
        }
      ],
      'customer_note': `${create_booking_request_parsed.name} ${create_booking_request_parsed.address_line_1} ${create_booking_request_parsed.administrative_district_level_1} ${create_booking_request_parsed.locality} ${create_booking_request_parsed.postal_code}`,
      'start_at': `${create_booking_request_parsed.start_at}`,
      'location_id': `${process.env.Square_Location_Id}`, // company "location_id"
      'customer_id': `${create_booking_request_parsed.customer_id}`
    }
  }
  const config = {
    method: 'post',
    headers: {
      'square-version': '2022-02-16',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  }

  const create_booking_service_1_req = await fetch(api_url, config)
  const create_booking_service_1_res = await create_booking_service_1_req.json()

  console.log(create_booking_service_1_res)
  res.json(create_booking_service_1_res)
})

module.exports = { createBookingRouter }