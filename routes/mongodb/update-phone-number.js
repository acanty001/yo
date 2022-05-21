// import modules
const dotenv = require('dotenv')
const express = require('express')

dotenv.config()

const { updateUserMongoDBModel } = require('../../schemas/update-user-mongodb-schema.js')

const updatePhoneNumberMongoDBRouter = express.Router()
// exports.updatePhoneNumberMongoDBRouter = updatePhoneNumberMongoDBRouter

let filteredUserMongoDbObj = {
  email_address: ''
}

let updateUserPhoneMongoDbObj = {
  phone_number: '',
}

updatePhoneNumberMongoDBRouter.post('/updatePhoneNumberMongoDB/:updateUserPhoneMongoDbObj', async (req, res) => {
  // req 
  const update_phone_number_mongodb_req = req.params.updateUserPhoneMongoDbObj
  const update_phone_number_mongodb_req_parsed = JSON.parse(update_phone_number_mongodb_req)

  console.log(update_phone_number_mongodb_req_parsed)

  filteredUserMongoDbObj.email_address = update_phone_number_mongodb_req_parsed.email_address

  updateUserPhoneMongoDbObj.phone_number = update_phone_number_mongodb_req_parsed.phone_number

  // res
  updateUserMongoDBModel.updateOne(filteredUserMongoDbObj, updateUserPhoneMongoDbObj)
  .then(() => { res.json('the users phone number was updated to the MongoDb') })
  .catch((error) => {console.log(error)})
})

module.exports = { updatePhoneNumberMongoDBRouter }