// import modules
const mongoose = require('mongoose')

mongoose.models = {}
mongoose.modelSchemas = {}

// create schemas
const checkUserMongoDBSchema = new mongoose.Schema({
  email_address: {type: String, required: true},
  password: {type: String, required: true}
})

// export module to allow it to be exported into other files
const checkUserMongoDBModel = mongoose.model('so-posh-collection', checkUserMongoDBSchema)

module.exports = { checkUserMongoDBModel }
