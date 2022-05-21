// import modules
const dotenv = require('dotenv')
const express = require('express')
const fetch = require('node-fetch')

dotenv.config()

const getUserAppointmentsRouter = express.Router()

getUserAppointmentsRouter.get(`/getUserAppointments`, async (req, res) => {
  // req

  // res
  const api_url = 'https://connect.squareupsandbox.com/v2/bookings?location_id=L408XYCWNRJDP&limit=10000'
  const config = {
    method: 'get',
    headers: {
      'square-version': '2022-03-16',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    }
  } 
  const get_user_appointments_square_req = await fetch(api_url, config)
  const get_user_appointments_square_res = await get_user_appointments_square_req.json()

  console.log(get_user_appointments_square_res)
  res.json(get_user_appointments_square_res)
})

module.exports = { getUserAppointmentsRouter }