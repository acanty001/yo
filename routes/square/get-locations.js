// import modules
const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

const getLocationsRouter = express.Router()
// exports.getCompanyLocationsRouter = getCompanyLocationsRouter

dotenv.config()

getLocationsRouter.get('/getCompanyLocations', async (req, res) => {
  // req


  // res
  const api_url = 'https://connect.squareupsandbox.com/v2/locations'
  const config = {
    method: 'get',
    headers: {
      'square-version': '2022-02-16',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    }
  }

  const request = await fetch(api_url, config)
  const response = await request.json()

  console.log(response)
  res.json(response)
})

module.exports = { getLocationsRouter }