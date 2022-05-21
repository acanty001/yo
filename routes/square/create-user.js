// import modules
const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

const createUserSquareRouter = express.Router()
// exports.createUserSquareRouter = createUserSquareRouter

dotenv.config()

let newUserSquare = {
  address: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: '',
  },
  email_address: '',
  family_name: '',
  given_name: '',
  nickname: '',
  note: '',
  phone_number: '',
  idempotency_key: '',
  birthday: ''
}

// creat user (customer) -- Square
createUserSquareRouter.post(`/createUserSquare/:createUserSquare`, async (req, res) => {
  // request
  const new_customer_square_req = req.params.createUserSquare
  const new_customer_square_req_parsed = JSON.parse(new_customer_square_req)

  newUserSquare.address.address_line_1 = new_customer_square_req_parsed.address_line_1
  newUserSquare.address.administrative_district_level_1 = new_customer_square_req_parsed.administrative_district_level_1
  newUserSquare.address.locality = new_customer_square_req_parsed.locality
  newUserSquare.address.postal_code = new_customer_square_req_parsed.postal_code
  newUserSquare.email_address = new_customer_square_req_parsed.email_address
  newUserSquare.family_name = new_customer_square_req_parsed.family_name
  newUserSquare.given_name = new_customer_square_req_parsed.given_name
  newUserSquare.nickname = new_customer_square_req_parsed.nickname
  newUserSquare.note = new_customer_square_req_parsed.note
  newUserSquare.birthday = new_customer_square_req_parsed.birthday
  newUserSquare.phone_number = new_customer_square_req_parsed.phone_number

  // response
  const api_url = 'https://connect.squareupsandbox.com/v2/customers'
  const bodyData = newUserSquare
  const config = {
    method: 'post',
    headers: {
      'square-version': '2021-12-15',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  }

  const response = await fetch(api_url, config)
  const data = await response.json()

  console.log(data)
  res.json(data)
})

module.exports = { createUserSquareRouter }