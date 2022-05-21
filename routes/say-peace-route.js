// import modules
const express = require('express')

const sayPeaceRouter = express.Router()

sayPeaceRouter.get('/sayPeace', async (req, res) => {
  console.log('weve got the request!')
  res.json('Peace to all the gods and earths')
})

module.exports = { sayPeaceRouter }

