// import modules
const express = require('express')
const fetch = require('node-fetch')
const { v4: uuidv4 } = require('uuid')

let generateMath = uuidv4()

const createCardOnFileRouter = express.Router()

createCardOnFileRouter.post('/createCard/:createCardObj', async (req, res) => {
  // req
  const create_card_on_file_request = req.params.createCardObj
  const create_card_on_file_request_parsed = JSON.parse(create_card_on_file_request)
  console.log(create_card_on_file_request_parsed)

  // res
  const api_url = 'https://connect.squareupsandbox.com/v2/cards'
  const bodyData = {
    'source_id': create_card_on_file_request_parsed.sourceId,
    'card': {
      'billing_address': {
        'address_line_1': create_card_on_file_request_parsed.billing_address.address_line_1,
        'administrative_district_level_1': create_card_on_file_request_parsed.billing_address.administrative_district_level_1,
        'locality': create_card_on_file_request_parsed.billing_address.locality,
        'postal_code': create_card_on_file_request_parsed.billing_address.postal_code
      },
      'cardholder_name': create_card_on_file_request_parsed.cardholder_name,
      'customer_id': create_card_on_file_request_parsed.customer_id
    },
    'idempotency_key': generateMath
  }
  console.log(bodyData)
  const config = {
    method:  'POST',
    headers: {
      'square-version': '2022-04-20',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  }

  const create_card_on_file_req = await fetch(api_url, config)
  const create_card_on_file_res = await create_card_on_file_req.json()
  console.log(create_card_on_file_res)
  res.json(create_card_on_file_res)
})

module.exports = { createCardOnFileRouter }