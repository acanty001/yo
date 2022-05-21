// import modules
const express = require('express')
const fetch = require('node-fetch')


const geocodeRouter = express.Router()

geocodeRouter.get('/getLatLong/:getLatLongObj', async (req, res) => {
  // req
  const get_lat_long_request = req.params.getLatLongObj
  const get_lat_long_request_parsed = JSON.parse(get_lat_long_request)
  console.log(get_lat_long_request_parsed)

  // res
  const api_url = `https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${get_lat_long_request_parsed.address_line_1}%20${get_lat_long_request_parsed.administrative_district_level_1}%20${get_lat_long_request_parsed.locality}%20${get_lat_long_request_parsed.postal_code}&accept-language=en&polygon_threshold=0.0`
  const config = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.RAPID_API_KEY
    }
  }

  const get_lat_long_req = await fetch(api_url, config)
  const get_lat_long_res = await get_lat_long_req.json()
  console.log(get_lat_long_res)
  res.json(get_lat_long_res)
})

module.exports = { geocodeRouter }