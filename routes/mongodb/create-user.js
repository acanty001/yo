// import modules
const express = require('express')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs')

// import schema
const { createUserMongoDBModel } = require('../../schemas/create-user-mongodb-schema.js')

const createUserMongoDBRouter = express.Router()
// exports.RoutercreateUserMongoDBRouter = createUserMongoDBRouter
const salt = bcrypt.genSaltSync(10)

dotenv.config()

let newUserMongoDB = {
  address: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: '',
  },
  id: '',
  subscription_id: '',
  birthday: '',
  email_address: '',
  family_name: '',
  given_name: '',
  idempotency_key: '',
  nickname: '',
  note: '',
  phone_number: '',
  status: '',
  password: '',
  concierge_bookings: {
    booking_time1: '',
    booking_id1: '',
    booking_time2: '',
    booking_id2: '',
    booking_time3: '',
    booking_id3: '',
    booking_time4: '',
    booking_id4: '',
  },
  location1: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location2: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location3: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location4: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location5: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location6: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location7: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location8: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location9: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location10: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  }
}

let newUserStorageInfo = {
  address: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  id: '',
  subscription_id: '',
  birthday: '',
  given_name: '',
  family_name: '',
  nickname: '',
  phone_number: '',
  password: '',
  location1: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location2: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location3: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location4: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location5: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location6: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location7: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location8: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location9: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  location10: {
    type_name: '',
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  }
}

// create new user profile -- Mongodb
createUserMongoDBRouter.post(`/createUserMongoDB/:createUserMongoDB`, (req, res) => {
  // request
  const new_customer_mongodb_req = req.params.createUserMongoDB
  const new_customer_mongodb_req_parsed = JSON.parse(new_customer_mongodb_req)

  console.log(new_customer_mongodb_req_parsed)

  newUserMongoDB.address.address_line_1 = new_customer_mongodb_req_parsed.address.address_line_1
  newUserMongoDB.address.administrative_district_level_1 = new_customer_mongodb_req_parsed.address.administrative_district_level_1
  newUserMongoDB.address.locality = new_customer_mongodb_req_parsed.address.locality
  newUserMongoDB.address.postal_code = new_customer_mongodb_req_parsed.address.postal_code

  newUserMongoDB.id = new_customer_mongodb_req_parsed.id
  newUserMongoDB.birthday = new_customer_mongodb_req_parsed.birthday
  newUserMongoDB.email_address = new_customer_mongodb_req_parsed.email_address
  newUserMongoDB.family_name = new_customer_mongodb_req_parsed.family_name
  newUserMongoDB.given_name = new_customer_mongodb_req_parsed.given_name
  newUserMongoDB.nickname = new_customer_mongodb_req_parsed.nickname
  newUserMongoDB.note = new_customer_mongodb_req_parsed.note
  newUserMongoDB.phone_number = new_customer_mongodb_req_parsed.phone_number
  let hash1 = bcrypt.hashSync(new_customer_mongodb_req_parsed.password, salt)
  newUserMongoDB.password = hash1

  newUserStorageInfo.address.address_line_1 = new_customer_mongodb_req_parsed.address.address_line_1
  newUserStorageInfo.address.administrative_district_level_1 = new_customer_mongodb_req_parsed.address.administrative_district_level_1
  newUserStorageInfo.address.locality = new_customer_mongodb_req_parsed.address.locality
  newUserStorageInfo.address.postal_code = new_customer_mongodb_req_parsed.address.postal_code

  newUserStorageInfo.id = new_customer_mongodb_req_parsed.id
  newUserStorageInfo.birthday = new_customer_mongodb_req_parsed.birthday
  newUserStorageInfo.email_address = new_customer_mongodb_req_parsed.email_address
  newUserStorageInfo.given_name = new_customer_mongodb_req_parsed.given_name
  newUserStorageInfo.family_name = new_customer_mongodb_req_parsed.family_name
  newUserStorageInfo.nickname = new_customer_mongodb_req_parsed.nickname
  newUserStorageInfo.phone_number = new_customer_mongodb_req_parsed.phone_number
  newUserStorageInfo.password = '**********'
  
  // response
  createUserMongoDBModel.create(newUserMongoDB)
    .then(() => { res.json(newUserStorageInfo) })
    .catch((error) => { console.log(error) })
})

module.exports = { createUserMongoDBRouter }

