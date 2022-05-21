// import modules
const express = require('express')

const { createReviewMongoDbModel } = require('../../schemas/create-review-schema.js')

const createReviewMongoDbRouter = express.Router()

createReviewMongoDbRouter.post('/addReview/:addReviewObj', (req, res) => {
  // req
  const add_review_request = req.params.addReviewObj
  const add_review_request_parsed = JSON.parse(add_review_request)
  console.log(add_review_request_parsed)
  // req
  createReviewMongoDbModel.findByIdAndUpdate({ _id: process.env.REVIEW_MODEL_ID}, add_review_request_parsed, { upsert: true }, (error, obj) => {
    if (obj) {
      console.log(obj)
      res.json(obj)
    } else if (error) {
      console.log(error)
    }
  })
})

module.exports = { createReviewMongoDbRouter }