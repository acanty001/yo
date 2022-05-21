// import modules
const dotenv = require('dotenv')
const express = require('express')
const { updateUserMongoDBModel } = require('../../schemas/update-user-mongodb-schema.js')

dotenv.config()

const updateUserFieldMongoDbRouter = express.Router()
// exports.updateMyAcctFieldMongoDbRouter = updateMyAcctFieldMongoDbRouter

let filteredUserMongoDbObj = {
  email_address: ''
}
let updateUserMongoDbObj = {
  email_address: ''
}

updateUserFieldMongoDbRouter.put('/updateMyAcctFieldMongoDb/:myAccoutFieldObj', async (req, res) => {
  // req
  const update_my_acct_field_request = req.params.myAccoutFieldObj
  const update_my_acct_field_request_parsed = JSON.parse(update_my_acct_field_request)
  console.log(update_my_acct_field_request_parsed)

  const addressPropertiesArr = ['address_line_1', 'administrative_district_level_1', 'locality', 'postal_code']
  let objKeys, objField

  objKeys = Object.keys(update_my_acct_field_request_parsed)
  console.log(objKeys)
  objField = objKeys[1]
  console.log(objField)

  // res
  filteredUserMongoDbObj.email_address = update_my_acct_field_request_parsed.email_address

  updateUserMongoDbObj.email_address = update_my_acct_field_request_parsed.email_address
  for (let i = 0; i < addressPropertiesArr.length; i++) {
    // updating customer "field"
    if (addressPropertiesArr[i] === objField) {
      updateUserMongoDbObj.address[objField] = update_my_acct_field_request_parsed[objField]
    } else if (objField.slice(0, 8) === 'location' || !updateUserMongoDbObj.address) {
      updateUserMongoDbObj[objField] = update_my_acct_field_request_parsed[objField]
    }
  }
  console.log(updateUserMongoDbObj)

  updateUserMongoDBModel.updateOne(filteredUserMongoDbObj, updateUserMongoDbObj)
    .then((obj) => { res.json(`the users selected input field has been updated on MongoDb`) })
    .catch((error) => { console.log(error) })
})

module.exports = { updateUserFieldMongoDbRouter }