// import modules 
const mongoose = require('mongoose')

mongoose.models = {}
mongoose.modelSchemas = {}

const updateUserMongoDbSchema = new mongoose.Schema({
  address: {
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  },
  id: String,
  birthday: String,
  subscription_id: String,
  email_address: { type: String, required: true },
  family_name: String,
  given_name: String,
  nickname: String,
  phone_number: String,
  password: String,
  concierge_bookings: {
    booking_time1: String,
    booking_id1: String,
    booking_time2: String,
    booking_id2: String,
    booking_time3: String,
    booking_id3: String,
    booking_time4: String,
    booking_id4: String
  },
  location1: {
    type_name: String,
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  },
  location2: {
    type_name: String,
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  },
  location3: {
    type_name: String,
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  },
  location4: {
    type_name: String,
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  },
  location5: {
    type_name: String,
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  },
  location6: {
    type_name: String,
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  },
  location7: {
    type_name: String,
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  },
  location8: {
    type_name: String,
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  },
  location9: {
    type_name: String,
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  },
  location10: {
    type_name: String,
    address_line_1: String,
    administrative_district_level_1: String,
    locality: String,
    postal_code: String
  }
})

// export module to allow it to be exported into other files
const updateUserMongoDBModel = mongoose.model('so-posh-collection', updateUserMongoDbSchema)

module.exports = { updateUserMongoDBModel }