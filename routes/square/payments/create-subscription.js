// import modules
const express = require('express')
const fetch = require('node-fetch')

const createSubscriptionRouter = express.Router()

createSubscriptionRouter.post('/createSubscription/:createSubscriptionObj', async (req, res) => {
  // req 
  const create_sub_request = req.params.createSubscriptionObj
  const create_sub_request_parsed = JSON.parse(create_sub_request)


  // res
  const api_url = 'https://connect.squareupsandbox.com/v2/subscriptions'
  const bodyData = {
    'customer_id': create_sub_request_parsed.customer_id,
    'location_id': process.env.Square_Location_Id,
    'plan_id': process.env.Service5_Sub_Id,
    'card_id': create_sub_request_parsed.card_id,
  }
  const config = {
    method: 'post',
    headers: {
      'square-version': '2022-04-20',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  }

  const create_sub_req = await fetch(api_url, config)
  const create_sub_res = await create_sub_req.json()
  res.json(create_sub_res)
})

module.exports = { createSubscriptionRouter }