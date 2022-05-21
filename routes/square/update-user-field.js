// import modules
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const express = require('express')

dotenv.config()

const updateUserFieldSquareRouter = express.Router()
// exports.updateUserFieldSquareRouter = updateUserFieldSquareRouter

updateUserFieldSquareRouter.put('/updateUserFieldSquare/:updateUserFieldSquare', async (req, res) => {
  // req
  const update_user_field_square_request = req.params.updateUserFieldSquare
  const update_user_field_square_request_parsed = JSON.parse(update_user_field_square_request)

  const addressPropertiesArr = ['address_line_1', 'administrative_district_level_1', 'locality', 'postal_code']
  let objKeys = Object.keys(update_user_field_square_request_parsed)
  let objField = objKeys[1]

  console.log(objKeys)
  console.log(objField)
  console.log(update_user_field_square_request_parsed)
  // res 
  const api_url = ` https://connect.squareupsandbox.com/v2/customers/${update_user_field_square_request_parsed.id}`
  const bodyData = {}
  for (let i = 0; i < addressPropertiesArr.length; i++) {
    if (addressPropertiesArr[i] === objField) {
      bodyData.address[`${objField}`] = update_user_field_square_request_parsed[`${objField}`]
    } else {
      bodyData[`${objField}`] = update_user_field_square_request_parsed[`${objField}`]
    }
  }
  const config = {
    method: 'put',
    headers: {
      'square-version': '2022-03-16',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  }

  const update_user_field_square_req = await fetch(api_url, config)
  const update_user_field_square_res = await update_user_field_square_req.json()

  console.log(update_user_field_square_res)
})

module.exports = { updateUserFieldSquareRouter }