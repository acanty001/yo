// import modules
const express = require('express')
const fetch = require('node-fetch')


const distanceMatrixRouter = express.Router()

distanceMatrixRouter.get('/getDistance/:getDistanceObj', async (req, res) => {
  // req
  const get_distance_matrix_request = req.params.getDistanceObj
  const get_distance_matrix_request_parsed = JSON.parse(get_distance_matrix_request)
  console.log(get_distance_matrix_request_parsed)

  // res
  const api_url = `https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=${get_distance_matrix_request_parsed.companyLat}%2C${get_distance_matrix_request_parsed.companyLong}%3B${get_distance_matrix_request_parsed.userLat}%2C${get_distance_matrix_request_parsed.userLong}&destinations=${get_distance_matrix_request_parsed.companyLat}%2C${get_distance_matrix_request_parsed.companyLong}%3B${get_distance_matrix_request_parsed.userLat}%2C${get_distance_matrix_request_parsed.userLong}`
  const config = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com',
		  'X-RapidAPI-Key': process.env.RAPID_API_KEY
    }
  }

  const get_distance_matrix_req = await fetch(api_url, config)
  const get_distance_matrix_res = await get_distance_matrix_req.json()
  console.log(get_distance_matrix_res)
  res.json(get_distance_matrix_res)
})

module.exports = { distanceMatrixRouter }