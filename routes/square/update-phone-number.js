// import modules
const dotenv = require('dotenv')
const express = require('express')
const fetch = require('node-fetch')

dotenv.config()

const updatePhoneNumberSquareRouter = express.Router()
// exports.updatePhoneNumberSquareRouter = updatePhoneNumberSquareRouter

updatePhoneNumberSquareRouter.put('/updatePhoneSquare/:updateUserPhoneSquareObj', async (req, res) => {
  // req
  const update_phone_number_square_request = req.params.updateUserPhoneSquareObj
  const update_phone_number_square_request_parsed = JSON.parse(update_phone_number_square_request)

  console.log(update_phone_number_square_request_parsed)
  // res
  const api_url = `https://connect.squareupsandbox.com/v2/customers/${update_phone_number_square_request_parsed.customer_id}`
  const bodyData = {
    phone_number: `${update_phone_number_square_request_parsed.phone_number}`
  }
  const config = {
    method: 'put',
    headers: {
      'square-version': '2022-02-16',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  }
  const update_phone_number_square_req = await fetch(api_url, config)
  const update_phone_number_square_res = await update_phone_number_square_req.json()
  console.log(update_phone_number_square_res)
  res.json(update_phone_number_square_res)
})

module.exports = { updatePhoneNumberSquareRouter }