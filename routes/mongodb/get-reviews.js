// import modules
const express = require('express')

// import login schema
const {getReviewsModel} = require('../../schemas/get-review-schema.js')

const getReviewsRouter = express.Router()

getReviewsRouter.get('/getReviews', (req, res) => {
  getReviewsModel.findById({ _id: process.env.REVIEW_MODEL_ID}, (err, obj) => {
    if (obj) {
      console.log(obj)
      res.json(obj)
    } else if (err) {
      console.log(err)
    }
  })
})

module.exports = { getReviewsRouter }