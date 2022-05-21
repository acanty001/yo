// import modules
const express = require('express')
const bcrypt  = require('bcryptjs')

// import login schema
const {checkUserMongoDBModel} = require('../../schemas/check-user-mongodb-schema.js')

const checkUserMongoDBRouter = express.Router()
// exports.checkUserMongoDBRouter = checkUserMongoDBRouter

let loginEmailConfig = {
  email_address: ''
}

let loginStorageInfo = {
  address: {
    address_line_1: '',
    administrative_district_level_1: '',
    locality: '',
    postal_code: ''
  },
  id: '',
  birthday: '',
  given_name: '',
  family_name: '',
  nickname: '',
  phone_number: '',
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

// get user profile -- mongodb
checkUserMongoDBRouter.get('/checkUserMongoDB/:checkUserMongoDB', (req, res) => { 
  // request
  let check_user_mongodb_req = req.params.checkUserMongoDB
  let check_user_mongodb_req_parsed = JSON.parse(check_user_mongodb_req)
  console.log(check_user_mongodb_req_parsed)

  loginEmailConfig.email_address = check_user_mongodb_req_parsed.email_address

  console.log(loginEmailConfig)
 
  // repsonse 
  checkUserMongoDBModel.findOne(loginEmailConfig, (error, obj) => {
    if (obj === null) {
      console.log('Could not find the account.')
      res.json('Could not find the account.')
    } else {
      if (obj) {
        let userInfo = obj.toObject()
        if (check_user_mongodb_req_parsed.password !== '**********') {
          let passwordTrue = bcrypt.compareSync(check_user_mongodb_req_parsed.password, obj.password)

          if (passwordTrue) {
            loginStorageInfo.address.address_line_1 = userInfo.address.address_line_1
            loginStorageInfo.address.administrative_district_level_1 = userInfo.address.administrative_district_level_1
            loginStorageInfo.address.locality = userInfo.address.locality
            loginStorageInfo.address.postal_code = userInfo.address.postal_code

            loginStorageInfo.id = userInfo.id
            loginStorageInfo.email_address = userInfo.email_address
            loginStorageInfo.given_name = userInfo.given_name
            loginStorageInfo.family_name = userInfo.family_name
            loginStorageInfo.phone_number = userInfo.phone_number
            loginStorageInfo.birthday = userInfo.birthday
            loginStorageInfo.nickname = userInfo.nickname
            loginStorageInfo.password = '**********'

            loginStorageInfo.concierge_bookings.booking_time1 = userInfo.concierge_bookings.booking_time1
            loginStorageInfo.concierge_bookings.booking_time2 = userInfo.concierge_bookings.booking_time2
            loginStorageInfo.concierge_bookings.booking_time3 = userInfo.concierge_bookings.booking_time3
            loginStorageInfo.concierge_bookings.booking_time4 = userInfo.concierge_bookings.booking_time4

            loginStorageInfo.concierge_bookings.booking_id1 = userInfo.concierge_bookings.booking_id1
            loginStorageInfo.concierge_bookings.booking_id2 = userInfo.concierge_bookings.booking_id2
            loginStorageInfo.concierge_bookings.booking_id3 = userInfo.concierge_bookings.booking_id3
            loginStorageInfo.concierge_bookings.booking_id4 = userInfo.concierge_bookings.booking_id4

            loginStorageInfo.location1.type_name = userInfo.location1.type_name            
            loginStorageInfo.location1.address_line_1 = userInfo.location1.address_line_1
            loginStorageInfo.location1.administrative_district_level_1 = userInfo.location1.administrative_district_level_1
            loginStorageInfo.location1.locality = userInfo.location1.locality
            loginStorageInfo.location1.postal_code = userInfo.location1.postal_code
            
            loginStorageInfo.location2.type_name = userInfo.location2.type_name
            loginStorageInfo.location2.address_line_1 = userInfo.location2.address_line_1
            loginStorageInfo.location2.administrative_district_level_1 = userInfo.location2.administrative_district_level_1
            loginStorageInfo.location2.locality = userInfo.location2.locality
            loginStorageInfo.location2.postal_code = userInfo.location2.postal_code

            loginStorageInfo.location3.type_name = userInfo.location3.type_name
            loginStorageInfo.location3.address_line_1 = userInfo.location3.address_line_1
            loginStorageInfo.location3.administrative_district_level_1 = userInfo.location3.administrative_district_level_1
            loginStorageInfo.location3.locality = userInfo.location3.locality
            loginStorageInfo.location3.postal_code = userInfo.location3.postal_code

            loginStorageInfo.location4.type_name = userInfo.location4.type_name
            loginStorageInfo.location4.address_line_1 = userInfo.location4.address_line_1
            loginStorageInfo.location4.administrative_district_level_1 = userInfo.location4.administrative_district_level_1
            loginStorageInfo.location4.locality = userInfo.location4.locality
            loginStorageInfo.location4.postal_code = userInfo.location4.postal_code

            loginStorageInfo.location5.type_name = userInfo.location5.type_name
            loginStorageInfo.location5.address_line_1 = userInfo.location5.address_line_1
            loginStorageInfo.location5.administrative_district_level_1 = userInfo.location5.administrative_district_level_1
            loginStorageInfo.location5.locality = userInfo.location5.locality
            loginStorageInfo.location5.postal_code = userInfo.location5.postal_code

            loginStorageInfo.location6.type_name = userInfo.location6.type_name            
            loginStorageInfo.location6.address_line_1 = userInfo.location6.address_line_1
            loginStorageInfo.location6.administrative_district_level_1 = userInfo.location6.administrative_district_level_1
            loginStorageInfo.location6.locality = userInfo.location6.locality
            loginStorageInfo.location6.postal_code = userInfo.location6.postal_code

            loginStorageInfo.location7.type_name = userInfo.location7.type_name
            loginStorageInfo.location7.address_line_1 = userInfo.location7.address_line_1
            loginStorageInfo.location7.administrative_district_level_1 = userInfo.location7.administrative_district_level_1
            loginStorageInfo.location7.locality = userInfo.location7.locality
            loginStorageInfo.location7.postal_code = userInfo.location7.postal_code

            loginStorageInfo.location8.type_name = userInfo.location8.type_name
            loginStorageInfo.location8.address_line_1 = userInfo.location8.address_line_1
            loginStorageInfo.location8.administrative_district_level_1 = userInfo.location8.administrative_district_level_1
            loginStorageInfo.location8.locality = userInfo.location8.locality
            loginStorageInfo.location8.postal_code = userInfo.location8.postal_code

            loginStorageInfo.location9.type_name = userInfo.location9.type_name
            loginStorageInfo.location9.address_line_1 = userInfo.location9.address_line_1
            loginStorageInfo.location9.administrative_district_level_1 = userInfo.location9.administrative_district_level_1
            loginStorageInfo.location9.locality = userInfo.location9.locality
            loginStorageInfo.location9.postal_code = userInfo.location9.postal_code

            loginStorageInfo.location10.type_name = userInfo.location10.type_name
            loginStorageInfo.location10.address_line_1 = userInfo.location10.address_line_1
            loginStorageInfo.location10.administrative_district_level_1 = userInfo.location10.administrative_district_level_1
            loginStorageInfo.location10.locality = userInfo.location10.locality
            loginStorageInfo.location10.postal_code = userInfo.location10.postal_code
  
            console.log(loginStorageInfo)
            
            res.json(loginStorageInfo)
          } else {
            res.json('Sorry this password is incorrect')
          }
        } else {
          loginStorageInfo.address.address_line_1 = userInfo.address.address_line_1
          loginStorageInfo.address.administrative_district_level_1 = userInfo.address.administrative_district_level_1
          loginStorageInfo.address.locality = userInfo.address.locality
          loginStorageInfo.address.postal_code = userInfo.address.postal_code

          loginStorageInfo.id = userInfo.id
          loginStorageInfo.birthday = userInfo.birthday
          loginStorageInfo.email_address = userInfo.email_address
          loginStorageInfo.given_name = userInfo.given_name
          loginStorageInfo.family_name = userInfo.family_name
          loginStorageInfo.phone_number = userInfo.phone_number
          loginStorageInfo.nickname = userInfo.nickname
          loginStorageInfo.password = '**********'

          loginStorageInfo.concierge_bookings.booking_time1 = userInfo.concierge_bookings.booking_time1
          loginStorageInfo.concierge_bookings.booking_time2 = userInfo.concierge_bookings.booking_time2
          loginStorageInfo.concierge_bookings.booking_time3 = userInfo.concierge_bookings.booking_time3
          loginStorageInfo.concierge_bookings.booking_time4 = userInfo.concierge_bookings.booking_time4

          loginStorageInfo.concierge_bookings.booking_id1 = userInfo.concierge_bookings.booking_id1
          loginStorageInfo.concierge_bookings.booking_id2 = userInfo.concierge_bookings.booking_id2
          loginStorageInfo.concierge_bookings.booking_id3 = userInfo.concierge_bookings.booking_id3
          loginStorageInfo.concierge_bookings.booking_id4 = userInfo.concierge_bookings.booking_id4

          loginStorageInfo.location1.type_name = userInfo.location1.type_name            
          loginStorageInfo.location1.address_line_1 = userInfo.location1.address_line_1
          loginStorageInfo.location1.administrative_district_level_1 = userInfo.location1.administrative_district_level_1
          loginStorageInfo.location1.locality = userInfo.location1.locality
          loginStorageInfo.location1.postal_code = userInfo.location1.postal_code

          loginStorageInfo.location2.type_name = userInfo.location2.type_name
          loginStorageInfo.location2.address_line_1 = userInfo.location2.address_line_1
          loginStorageInfo.location2.administrative_district_level_1 = userInfo.location2.administrative_district_level_1
          loginStorageInfo.location2.locality = userInfo.location2.locality
          loginStorageInfo.location2.postal_code = userInfo.location2.postal_code

          loginStorageInfo.location3.type_name = userInfo.location3.type_name
          loginStorageInfo.location3.address_line_1 = userInfo.location3.address_line_1
          loginStorageInfo.location3.administrative_district_level_1 = userInfo.location3.administrative_district_level_1
          loginStorageInfo.location3.locality = userInfo.location3.locality
          loginStorageInfo.location3.postal_code = userInfo.location3.postal_code

          loginStorageInfo.location4.type_name = userInfo.location4.type_name
          loginStorageInfo.location4.address_line_1 = userInfo.location4.address_line_1
          loginStorageInfo.location4.administrative_district_level_1 = userInfo.location4.administrative_district_level_1
          loginStorageInfo.location4.locality = userInfo.location4.locality
          loginStorageInfo.location4.postal_code = userInfo.location4.postal_code

          loginStorageInfo.location5.type_name = userInfo.location5.type_name
          loginStorageInfo.location5.address_line_1 = userInfo.location5.address_line_1
          loginStorageInfo.location5.administrative_district_level_1 = userInfo.location5.administrative_district_level_1
          loginStorageInfo.location5.locality = userInfo.location5.locality
          loginStorageInfo.location5.postal_code = userInfo.location5.postal_code

          loginStorageInfo.location6.type_name = userInfo.location6.type_name            
          loginStorageInfo.location6.address_line_1 = userInfo.location6.address_line_1
          loginStorageInfo.location6.administrative_district_level_1 = userInfo.location6.administrative_district_level_1
          loginStorageInfo.location6.locality = userInfo.location6.locality
          loginStorageInfo.location6.postal_code = userInfo.location6.postal_code

          loginStorageInfo.location7.type_name = userInfo.location7.type_name
          loginStorageInfo.location7.address_line_1 = userInfo.location7.address_line_1
          loginStorageInfo.location7.administrative_district_level_1 = userInfo.location7.administrative_district_level_1
          loginStorageInfo.location7.locality = userInfo.location7.locality
          loginStorageInfo.location7.postal_code = userInfo.location7.postal_code

          loginStorageInfo.location8.type_name = userInfo.location8.type_name
          loginStorageInfo.location8.address_line_1 = userInfo.location8.address_line_1
          loginStorageInfo.location8.administrative_district_level_1 = userInfo.location8.administrative_district_level_1
          loginStorageInfo.location8.locality = userInfo.location8.locality
          loginStorageInfo.location8.postal_code = userInfo.location8.postal_code

          loginStorageInfo.location9.type_name = userInfo.location9.type_name
          loginStorageInfo.location9.address_line_1 = userInfo.location9.address_line_1
          loginStorageInfo.location9.administrative_district_level_1 = userInfo.location9.administrative_district_level_1
          loginStorageInfo.location9.locality = userInfo.location9.locality
          loginStorageInfo.location9.postal_code = userInfo.location9.postal_code

          loginStorageInfo.location10.type_name = userInfo.location10.type_name
          loginStorageInfo.location10.address_line_1 = userInfo.location10.address_line_1
          loginStorageInfo.location10.administrative_district_level_1 = userInfo.location10.administrative_district_level_1
          loginStorageInfo.location10.locality = userInfo.location10.locality
          loginStorageInfo.location10.postal_code = userInfo.location10.postal_code

          console.log(loginStorageInfo)
          
          res.json(loginStorageInfo)
        }
      } else {
        console.log(error, 'Sorry we could not find this account')
      }
    }
  })
})

module.exports = { checkUserMongoDBRouter }


