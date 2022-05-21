// import modules
const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

const getServicesRouter = express.Router()
// exports.getCompanyCatalogItemsRouter = getCompanyCatalogItemsRouter

getServicesRouter.get('/getServices', async (req, res) => {
  // req

  // res
  const api_url = 'https://connect.squareupsandbox.com/v2/catalog/list'
  const config = {
    method: 'get',
    headers: {
      'square-version': ' 2022-02-16',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    }
  }
  
  const get_company_catalog_items_req = await fetch(api_url, config)
  const get_company_catalog_items_res = await get_company_catalog_items_req.json()

  res.json(get_company_catalog_items_res)
})

module.exports = { getServicesRouter }


