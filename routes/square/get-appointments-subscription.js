// import modules
const dotenv = require('dotenv')
const express = require('express')
const fetch = require('node-fetch')

dotenv.config()

const getAppointmentsSubRouter = express.Router()

getAppointmentsSubRouter.get(`/getUserAppointmentsSub/:getUserAppointmentsSubObj`, async (req, res) => {
  // req
  const get_appointments_sub_request = req.params.getUserAppointmentsSubObj
  const get_appointments_sub_request_parsed = JSON.parse(get_appointments_sub_request)
  console.log(get_appointments_sub_request_parsed)

  let startEndObj = {
    start_time: get_appointments_sub_request_parsed.start_time.replace(/:/g, '%3A'),
    end_time: get_appointments_sub_request_parsed.end_time.replace(/:/g, '%3A')
  }

  console.log(startEndObj)

  // res
  const api_url = `https://connect.squareupsandbox.com/v2/bookings?location_id=L408XYCWNRJDP&limit=10000&start_at_min=${startEndObj.start_time}&start_at_max=${startEndObj.end_time}`
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

module.exports = { getAppointmentsSubRouter }