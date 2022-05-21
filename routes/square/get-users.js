// import modules
const dotenv = require('dotenv')
const express = require('express')
const fetch = require('node-fetch')

dotenv.config()

const getUsersSquareRouter = express.Router()
// exports.getCompanyUsersSquareRouter = getCompanyUsersSquareRouter

getUsersSquareRouter.get('/getCompanyUsersSquare', async (req, res) => {
  // req

  // res
  const api_url = 'https://connect.squareupsandbox.com/v2/customers'
  const config = {
    method: 'get',
    headers: {
      'square-version': '2022-02-16',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    }
  }
  const get_company_users_square_req = await fetch(api_url, config)
  const get_company_users_square_res = await get_company_users_square_req.json()

  console.log(get_company_users_square_res)
  res.json(get_company_users_square_res)
})

module.exports = { getUsersSquareRouter }