const mongoose = require('mongoose')

mongoose.models = {}
mongoose.modelSchemas = {}

const createReviewMongoDbSchema = new mongoose.Schema({
    review: {
    given_name: String,
    family_name: String,
    email_address: String,
    stars_count: String,
    comment: String
  }
}, { strict: false })

const createReviewMongoDbModel = mongoose.model('so-posh-collection', createReviewMongoDbSchema)

module.exports = { createReviewMongoDbModel }