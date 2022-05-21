const mongoose = require('mongoose')
const { checkUserMongoDBModel } = require('./check-user-mongodb-schema')

mongoose.models = {}
mongoose.modelSchemas = {}

const getReviewSchema = new mongoose.Schema({
  _id: mongoose.ObjectId
})

const getReviewsModel = mongoose.model('so-posh-collection', getReviewSchema)

module.exports = { getReviewsModel }