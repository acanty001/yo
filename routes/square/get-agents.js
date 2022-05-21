// import modules
const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

const getAgentsRouter = express.Router()
// exports.getCoAgentsRouter = getCompanyAgentsRouter

getAgentsRouter.get('/getCompanyAgents', async (req, res) => {
  // req

  // res
  const api_url = 'https://connect.squareupsandbox.com/v2/bookings/team-member-booking-profiles'
  const config = {
    method: 'get',
    headers: {
      'square-version': '2022-02-16',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    }
  }

  const get_all_agents_req = await fetch(api_url, config)
  const get_all_agents_res = await get_all_agents_req.json()

  console.log(get_all_agents_res)
  res.json(get_all_agents_res)
})

module.exports = { getAgentsRouter }