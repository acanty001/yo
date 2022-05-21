// import modules
const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

const getAvailabilitiesRouter = express.Router()
// exports.getCompanyAvailabilitiesRouter = getCompanyAvailabilitiesRouter

getAvailabilitiesRouter.post('/getCompanyAvailabilities/:csAvailabilityObj', async (req, res) => {
  // req 
  const get_company_availabilities_request = req.params.csAvailabilityObj
  const get_company_availabilities_request_parsed = JSON.parse(get_company_availabilities_request)

  console.log(get_company_availabilities_request_parsed)

  // res 
  const api_url = 'https://connect.squareupsandbox.com/v2/bookings/availability/search'
  const bodyData = {
    'query': {
      'filter': {
        'start_at_range': {
          'end_at': `${get_company_availabilities_request_parsed.end_at}`,
          'start_at': `${get_company_availabilities_request_parsed.start_at}`
        },
        'location_id': `${get_company_availabilities_request_parsed.location_id}`,
        'segment_filters': [
          {
            'service_variation_id': `${get_company_availabilities_request_parsed.service_variation_id}`
          }
        ]
      }
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

  const get_company_availabilities_req = await fetch(api_url, config)
  const get_company_availabilities_res = await get_company_availabilities_req.json()

  console.log(get_company_availabilities_res)
  
  res.json(get_company_availabilities_res)
})

module.exports = { getAvailabilitiesRouter }