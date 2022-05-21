const express = require('express')
// const fetch = require('node-fetch')
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const twilio = require('twilio')
const sgMail = require('@sendgrid/mail')

// Rapid API
const { geocodeRouter } = require('./routes/rapid_api/gecode.js')
const { distanceMatrixRouter } = require('./routes/rapid_api/distance-matrix.js')

// Mongodb
const { checkUserMongoDBRouter } = require('./routes/mongodb/check-user.js')
const { createUserMongoDBRouter } = require('./routes/mongodb/create-user.js')
const { updatePhoneNumberMongoDBRouter } = require('./routes/mongodb/update-phone-number.js')
const { updateUserFieldMongoDbRouter } = require('./routes/mongodb/update-user-field.js')
const { createReviewMongoDbRouter } = require('./routes/mongodb/create-review.js')
const { getReviewsRouter } = require('./routes/mongodb/get-reviews.js')

// Square
const { createUserSquareRouter } = require('./routes/square/create-user.js')
const { getAppointmentsSubRouter } = require('./routes/square/get-appointments-subscription.js')
const { getUserAppointmentsRouter } = require('./routes/square/get-user-appointments.js')
const { getServicesRouter } = require('./routes/square/get-services.js')
const { getAgentsRouter } = require('./routes/square/get-agents.js')
const { getAvailabilitiesRouter } = require('./routes/square/get-availabilities.js')
const { getLocationsRouter } = require('./routes/square/get-locations.js')
const { getUsersSquareRouter } = require('./routes/square/get-users.js')
const { updatePhoneNumberSquareRouter } = require('./routes/square/update-phone-number.js')
const { updateUserFieldSquareRouter } = require('./routes/square/update-user-field.js')
const { createBookingRouter } = require('./routes/square/create-booking.js')
const { cancelBookingRouter } = require('./routes/square/cancel-booking.js')
  // payments
  const { paymentsRouter1, cardsRouter1, staticRouter1 } = require('./routes/square/payments/payment-route.js')
  const { createCardOnFileRouter } = require('./routes/square/payments/create-card.js')
  const { createSubscriptionRouter } = require('./routes/square/payments/create-subscription.js')

// Twilio
const { textBookingRouter } = require('./routes/twilio/text-booking.js')

// SendGrid
const { emailBookingRouter } = require('./routes/sendgrid/email-booking.js')
const { customerReviewRouter } = require('./routes/sendgrid/customer-review.js')
const { sendApplicationRouter } = require('./routes/sendgrid/send-application.js')



// micro provides http helpers
// const { createError, json, send } = require('micro');
// microrouter provides http server routing
// const { router, get, post } = require('microrouter');
// // serve-handler serves static assets
// const staticHandler = require('serve-handler');
// // async-retry will retry failed API requests
// const retry = require('async-retry');

// // logger gives us insight into what's happening
// const logger = require('./server/logger');
// // schema validates incoming requests
// const {
//   validatePaymentPayload,
//   validateCreateCardPayload,
// } = require('./server/schema');
// // square provides the API client and error types
// const { ApiError, client: square } = require('./server/square');
// const { nanoid } = require('nanoid');

// async function createPayment(req, res) {
//   console.log(req.params)
//   // const payload = await json(req);
//   const payload = await req.json()
//   console.log(payload)
//   logger.debug(JSON.stringify(payload));
//   // We validate the payload for specific fields. You may disable this feature
//   // if you would prefer to handle payload validation on your own.
//   if (!validatePaymentPayload(payload)) {
//     // throw createError(400, 'Bad Request');
//     console.log('create error')
//   }
//   await retry(async (bail, attempt) => {
//     try {
//       logger.debug('Creating payment', { attempt });

//       const idempotencyKey = payload.idempotencyKey || nanoid();
//       const payment = {
//         idempotencyKey,
//         locationId: payload.locationId,
//         sourceId: payload.sourceId,
//         // While it's tempting to pass this data from the client
//         // Doing so allows bad actor to modify these values
//         // Instead, leverage Orders to create an order on the server
//         // and pass the Order ID to createPayment rather than raw amounts
//         // See Orders documentation: https://developer.squareup.com/docs/orders-api/what-it-does
//         amountMoney: {
//           // the expected amount is in cents, meaning this is $1.00.
//           amount: '100',
//           // If you are a non-US account, you must change the currency to match the country in which
//           // you are accepting the payment.
//           currency: 'USD',
//         },
//       };

//       if (payload.customerId) {
//         payment.customerId = payload.customerId;
//       }

//       // VerificationDetails is part of Secure Card Authentication.
//       // This part of the payload is highly recommended (and required for some countries)
//       // for 'unauthenticated' payment methods like Cards.
//       if (payload.verificationToken) {
//         payment.verificationToken = payload.verificationToken;
//       }

//       const { result, statusCode } = await square.paymentsApi.createPayment(
//         payment
//       );

//       logger.info('Payment succeeded!', { result, statusCode });

//       res.send(statusCode, {
//         success: true,
//         payment: {
//           id: result.payment.id,
//           status: result.payment.status,
//           receiptUrl: result.payment.receiptUrl,
//           orderId: result.payment.orderId,
//         }})

//       // send(res, statusCode, {
//       //   success: true,
//       //   payment: {
//       //     id: result.payment.id,
//       //     status: result.payment.status,
//       //     receiptUrl: result.payment.receiptUrl,
//       //     orderId: result.payment.orderId,
//       //   },
//       // });
//     } catch (ex) {
//       if (ex instanceof ApiError) {
//         // likely an error in the request. don't retry
//         logger.error(ex.errors);
//         bail(ex);
//       } else {
//         // IDEA: send to error reporting service
//         logger.error(`Error creating payment on attempt ${attempt}: ${ex}`);
//         throw ex; // to attempt retry
//       }
//     }
//   });
// }

// async function storeCard(req, res) {
//   // const payload = await json(req);
//   const payload = await req.json()

//   if (!validateCreateCardPayload(payload)) {
//     // throw createError(400, 'Bad Request');
//     console.log('create error')
//   }
//   await retry(async (bail, attempt) => {
//     try {
//       logger.debug('Storing card', { attempt });

//       const idempotencyKey = payload.idempotencyKey || nanoid();
//       const cardReq = {
//         idempotencyKey,
//         sourceId: payload.sourceId,
//         card: {
//           customerId: payload.customerId,
//         },
//       };

//       if (payload.verificationToken) {
//         cardReq.verificationToken = payload.verificationToken;
//       }

//       const { result, statusCode } = await square.cardsApi.createCard(cardReq);

//       logger.info('Store Card succeeded!', { result, statusCode });

//       // remove 64-bit value from response
//       delete result.card.expMonth;
//       delete result.card.expYear;

//       res.send(statusCode, {
//         success: true,
//         card: result.card,
//       })
//       // send(res, statusCode, {
//       //   success: true,
//       //   card: result.card,
//       // });
//     } catch (ex) {
//       if (ex instanceof ApiError) {
//         // likely an error in the request. don't retry
//         logger.error(ex.errors);
//         bail(ex);
//       } else {
//         // IDEA: send to error reporting service
//         logger.error(
//           `Error creating card-on-file on attempt ${attempt}: ${ex}`
//         );
//         throw ex; // to attempt retry
//       }
//     }
//   });
// }

// // serve static files like index.html and favicon.ico from public/ directory
// async function serveStatic(req, res) {
//   logger.debug('Handling request', req.path);
//   await staticHandler(req, res, {
//     public: 'public',
//   });
// }

// export routes to be served by micro
// module.exports = router(post('/payment', createPayment), post('/card', storeCard), get('/*', serveStatic));











/* define "express" server */
const app = express()

// express server is reachable to files in the webpack 'dist' folder
app.use(express.static('dist'))

/** config "dotenv" */
dotenv.config()

/** express middleware */
let myFunc = function (req, res, next) {
  console.log(req.method)
  next()
}
app.use(myFunc)

/** api connections and setups */
// connnect mongodb with mongoose
mongoose.connect(process.env.MongoDB_URI, { dbName: 'myFirstDatabase', useUnifiedTopology: true })
  .then(() => { console.log('You are connected to your MongoDB database God!') })
  .catch((error) => { console.log(error) })

// // Connect to Twilio Verify
// const twilioVerifyClient = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
// const twilioVerifyCheck = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

// // Twilio Verify Client Set Up
// twilioVerifyClient.verify.services.create({
//   friendlyName: 'Supreme Intel: My First Verify Service',
//   codeLength: 7
// })

// twilioVerifyClient.verify.services(process.env.TWILIO_SERVICE_ID)
//   .rateLimits()
//   .remove()
//   .then((service) => { console.log(service.id) })

// // Connect to Twilio SendGrid Email
// sgMail.setApiKey(process.env.TWILIO_SENDGRID_API_KEY)


/** routes */
// create text booking confirmation

app.use(geocodeRouter)
app.use(distanceMatrixRouter)
app.use(sendApplicationRouter)

app.use(textBookingRouter)

// check if user exists -- MongoDB
app.use(checkUserMongoDBRouter)

// create new user -- MongoDB
app.use(createUserMongoDBRouter)
app.use(createReviewMongoDbRouter)
app.use(getReviewsRouter)

// update mongodb phone number 
app.use(updatePhoneNumberMongoDBRouter)

// create new user -- Square
app.use(createUserSquareRouter) 

// get users appointments details -- Square
app.use(getAppointmentsSubRouter)
app.use(getUserAppointmentsRouter)

// get all company locations -- Square
app.use(getLocationsRouter)

// get company catalog items -- Square
app.use(getServicesRouter)

// get company agents (team members, employees) -- Square
app.use(getAgentsRouter)

// get company availabilites -- Square
app.use(getAvailabilitiesRouter)

// get company users - Square
app.use(getUsersSquareRouter)

// update user field -- MongoDb
app.use(updateUserFieldMongoDbRouter)

// update user phone number -- Square
app.use(updatePhoneNumberSquareRouter)

// create user booking -- Square
app.use(createBookingRouter)

// cancel customer booking -- Square
app.use(cancelBookingRouter)

// create user booking confirmation (Service 1) email -- Square
app.use(emailBookingRouter)
app.use(customerReviewRouter)

// update user field -- Square
app.use(updateUserFieldSquareRouter)

app.use(paymentsRouter1)
app.use(cardsRouter1)
app.use(staticRouter1)
app.use(createCardOnFileRouter)
app.use(createSubscriptionRouter)



/** variables and objects */
// define a mongoose schema


// let newUser3

// let newCustLocId = {
// location: {
//   address: {
//     address_line_1: '',
//     administrative_district_level_1: '',
//     locality: '',
//     postal_code: '',
//     first_name: '',
//     last_name: ''
//   },
//   name: ''
// }
// }

// let newCustomerMDB = {
// address: {
//   address_line_1: '',
//   administrative_district_level_1: '',
//   locality: '',
//   postal_code: '',
// },
// birthday: '',
// email_address: '',
// family_name: '',
// given_name: '',
// idempotency_key: `${process.env.Square_Idempotency_Key}`,
// nickname: '',
// note: '',
// phone_number: '',
// status: '',
// password1: '',
// password2: '',
// otherLocations: {
//   loc_one: {
//     address_line_1: '',
//     administrative_district_level_1: '',
//     locality: '',
//     postal_code: ''
//   },
//   loc_two: {
//     address_line_1: '',
//     administrative_district_level_1: '',
//     locality: '',
//     postal_code: ''
//   },
//   loc_three: {
//     address_line_1: '',
//     administrative_district_level_1: '',
//     locality: '',
//     postal_code: ''
//   }
// }
// }

// let newCustomerSquare = {
// address: {
//   address_line_1: '',
//   administrative_district_level_1: '',
//   locality: '',
//   postal_code: '',
// },
// email_address: '',
// family_name: '',
// given_name: '',
// nickname: '',
// note: '',
// phone_number: '',
// idempotency_key: `${process.env.Square_Idempotency_Key}`,
// birthday: ''
// }

// let userPhoneNumber = ''
// let userCode = ''






// /** endpoints */

// // send the code out to the user -- twilio verify
// app.get('/fireCodeToUser/:sendForgotPassPhoneValue1', (req, res) => {
//   // req
//   const request = req.params.sendForgotPassPhoneValue1
//   const request2Json = JSON.parse(request)

//   // filter the request then send code to the given number
//   console.log(`this is the phone number sent to us God:${request2Json}`)

//   console.log(request2Json)

//   userPhoneNumber = request2Json

//   // res
//   twilioVerifyClient.verify.services(process.env.TWILIO_SERVICE_ID)
//     .verifications  
//     .create({ to: `+1${userPhoneNumber}`, channel: 'sms' })
//     .then((verification) => { res.json(verification.status) })
//     .catch((error) => { console.log(error) })
// })

// // send back code entered from user -- twilio verify
// app.post('/sendCodeToServer/:userCode', (req, res) => {
//   // req
//   const request2 = req.params.userCode
//   const request2Json2 = JSON.parse(request2)

//   userCode = request2Json2

//   console.log(userCode)

//   // res
//   twilioVerifyCheck.verify.services(process.env.TWILIO_SERVICE_ID)
//     .verificationChecks
//     .create({ to: `+1${userPhoneNumber}`, code: `${userCode}`})
//     .then((verificationCheck) => { 
//       console.log(verificationCheck.status)
//       if (verificationCheck.status === 'approved') {
//         res.json('The code is correct!')
//       } else {
//         res.json('This is the wrong code! Please try again')
//       }
//     })
// })

// app.get('/getPortNumber', (req, res) => {
//   // req

//   // res
//   const portNumber = port

//   res.json(portNumber)
// })





// // update password -- mongodb
// app.post('/updateUserPass/:updateUserNewP', (req, res) => {
//   // req
//   const updatedUserP = req.params.updateUserNewP
//   const parsedUpdatedUserP = JSON.parse(updatedUserP)
//   // console.log(parsedUpdatedUserP)
//   // res

//   newCustomerMDB.address.address_line_1 = parsedUpdatedUserP.address_line_1
//   newCustomerMDB.address.administrative_district_level_1 = parsedUpdatedUserP.administrative_district_level_1
//   newCustomerMDB.address.locality = parsedUpdatedUserP.locality
//   newCustomerMDB.address.postal_code = parsedUpdatedUserP.postal_code

//   newCustomerMDB.birthday = parsedUpdatedUserP.birthday
//   newCustomerMDB.email_address = parsedUpdatedUserP.email_address
//   newCustomerMDB.family_name = parsedUpdatedUserP.family_name
//   newCustomerMDB.given_name = parsedUpdatedUserP.given_name
//   newCustomerMDB.nickname = parsedUpdatedUserP.nickname
//   newCustomerMDB.note = parsedUpdatedUserP.note
//   newCustomerMDB.password1 = parsedUpdatedUserP.password1
//   newCustomerMDB.password2 = parsedUpdatedUserP.password2
//   newCustomerMDB.phone_number = parsedUpdatedUserP.phone_number

//   // const newUserModel = mongoose.model('user-profiles-signup', newUserSchema)

//   newUserModel.updateOne(newCustomerMDB)
//     .then(() => { console.log(res.json('The users password was updated god')) })
//     .catch((error) => { console.log(error) } )
// })

// // update phone number -- mongodb & square api
// app.post('/updatePhone/:updateUserProf', (req, res) => {
//   // req
//   const requestDetails = req.params.updateUserProf
//   const requestDetailsParsed = JSON.parse(requestDetails)

//   // const requestOL = req.params.updateUserProf.otherLocations
//   // const requestOLParsed = JSON.parse(requestOL)
  
//   console.log(requestDetailsParsed)
//   // console.log(requestOLParsed)

//   // res
//   newCustomerMDB.address.address_line_1 = requestDetailsParsed.address_line_1
//   newCustomerMDB.address.administrative_district_level_1 = requestDetailsParsed.administrative_district_level_1
//   newCustomerMDB.address.locality = requestDetailsParsed.locality
//   newCustomerMDB.address.postal_code = requestDetailsParsed.postal_code

//   newCustomerMDB.birthday = requestDetailsParsed.birthday
//   newCustomerMDB.email_address = requestDetailsParsed.email_address
//   newCustomerMDB.family_name = requestDetailsParsed.family_name
//   newCustomerMDB.given_name = requestDetailsParsed.given_name
//   newCustomerMDB.nickname = requestDetailsParsed.nickname
//   newCustomerMDB.note = requestDetailsParsed.note
//   newCustomerMDB.password1 = requestDetailsParsed.password1
//   newCustomerMDB.password2 = requestDetailsParsed.password2
//   newCustomerMDB.phone_number = requestDetailsParsed.phone_number

//   console.log(newCustomerMDB)

//   // const newUserModel = mongoose.model('user-profiles-signup', newUserSchema)

//   newUserModel.updateOne(newCustomerMDB)
//     .then(() => { console.log(res.json('The users phone number was updated to mogodb god')) })
//     .catch((error) => { console.log(error) })
// })

// // retrieve last newly creadted customers object -- for local storage purposes
// app.get('/getNewUserDataForOthers', (req, res) => {
//   // request

//   // response
//   res.json(newUser3)
// })

// // get a user profile -- mongodb
// app.get('/getUserProfile/:getUser', (req, res) => { 
//   // request
//   const getUser = req.params.getUser
//   const parseGetUser = JSON.parse(getUser)
//   console.log(parseGetUser)

//   // repsonse
//   // const userLoginModel = mongoose.model('user-profiles-signup', newUserSchema)

//   userLoginModel.find(parseGetUser, (error, obj) => {
//     if (obj) {
//       console.log(obj)
//       res.json(obj)
//     } else {
//       console.log(error)
//     }    
//   })
// })

// // get all customer profiles -- square api
// app.get('/getAllSquareCustomers', async (req, res) => {
//   // req 

//   // res
//   const api_url = 'https://connect.squareupsandbox.com/v2/customers'
//   const config = {
//     method: 'get',
//     headers: {
//       'square-version': '2021-12-15',
//       'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
//       'content-type': 'application/json'
//     }
//   }
//   const response = await fetch(api_url, config)
//   const data = await response.json()

//   // console.log(data)

//   res.json(data)
// })

// // update customer profile data -- square api
// app.put('/updateUserSquare/:updatedUserProf', async (req, res) => {
//   // req
//   const request = req.params.updatedUserProf
//   const requestParsed = JSON.parse(request)

//   // console.log(requestParsed)

//   // res
//   const api_url = `https://connect.squareupsandbox.com/v2/customers/${requestParsed.id}`
//   const bodyData = {
//     phone_number: `${requestParsed.phone_number}`
//   }
//   const config = {
//     method: 'put',
//     headers: {
//       'square-version': '2021-12-15',
//       'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(bodyData)
//   }

//   const response = await fetch(api_url, config)
//   const data = await response.json()

//   console.log(data)

//   res.json(data)

// })

// // "get" a list of all catalog(services) items -- square api
// app.get('/retrieveCatalogItems', async (req, res) => {
//   // request from script

//   // response back script
//   const response = await fetch('https://connect.squareupsandbox.com/v2/catalog/list', {
//     method: "GET",
//     headers: {
//       'Square-Version': '2021-10-20',
//       'Authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
//       'Content-Type': 'application/json'  
//     }
//   })

//   const data = await response.json()
  
//   res.json(data)
// })

// // get all company team members -- square api
// app.get('/retrieveTeamMemeberBookingProfile', async (req, res) => {
//   // response

//   // request
//   const response = await fetch('https://connect.squareupsandbox.com/v2/bookings/team-member-booking-profiles?location_id=L408XYCWNRJDP', {
//     method: "GET",
//     headers: {
//       'Square-Version': '2021-10-20',
//       'Authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
//       'Content-Type': 'application/json'  
//     }
//   })
//   const data = await response.json()

//   // console.log(json)
//   res.json(data)
// })

// // search availabilty for specified service -- square api
// app.post('/searchWomensHaircut/:idData', async (req, res) => {
//     // request from script
//     // console.log(req.params)
//     const idData = req.params.idData
//     // console.log(request.body)

//     // response back script 
//     const api_url = 'https://connect.squareupsandbox.com/v2/bookings/availability/search'
//     const bodyData = {
//       "query": {
//         "filter": {
//           "start_at_range": {
//             "start_at": "2022-01-25T09:00:00-05:00",
//             "end_at": "2022-02-25T17:00:00-05:00"
//           },
//           "segment_filters": [
//             {
//               "service_variation_id": `${idData}`
//             }
//           ],
//           "location_id": "L408XYCWNRJDP"
//         }
//       }
//     }
//     const config = {
//       method: 'POST',
//       headers: {
//         'Square-Version': '2021-10-20',
//         'Authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
//         'Content-Type': 'application/json' 
//       },
//       body: JSON.stringify(bodyData)
//     }

//     const response = await fetch(api_url, config)
//     const data = await response.json()

//     res.json(data)
//   }
// )

// // get all location ids -- square api
// app.get('/gLocations', async (req, res) => {
//   // req

//   // res
//   const api_url = 'https://connect.squareupsandbox.com/v2/locations'
//   const config =  {
//     method: 'get',
//     headers: {
//       'Square-Version': '2021-12-15',
//       'Authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
//       'Content-type': 'application/json'
//     }
//   }
//   const loc_response = await fetch(api_url, config)
//   const loc_data = await loc_response.json()

//   // console.log(loc_data)

//   res.json(loc_data)
// })

// // create a location id -- square api
// app.post('/cLocation/:newLocId', async (req, res) => {
//   // req
//   const reqData = req.params.newLocId
//   const reqDataParsed = JSON.parse(reqData)

//   // console.log(reqDataParsed, 'this is the requested location data')

//   newCustLocId.location.address.address_line_1 = reqDataParsed.address_line_1
//   newCustLocId.location.address.administrative_district_level_1 = reqDataParsed.administrative_district_level_1
//   newCustLocId.location.address.locality = reqDataParsed.locality
//   newCustLocId.location.address.postal_code = reqDataParsed.postal_code
//   newCustLocId.location.address.first_name = reqDataParsed.first_name
//   newCustLocId.location.address.last_name = reqDataParsed.last_name
//   newCustLocId.location.name = `${reqDataParsed.name}-${requestDataParsed.first_name}-${requestDataParsed.last_name}-001`

//   // res
//   const api_url = 'https://connect.squareupsandbox.com/v2/locations'
//   const bodyData = newCustLocId
//   const config = {
//     method: 'POST',
//     headers: {
//       'Square-Version': '2021-12-15',
//       'Authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(bodyData)
//   }

//   const response = await fetch(api_url, config)
//   const data = await response.json()

//   // console.log(data)

//   res.json(data)
// })

// // create new phone booking -- square api
// app.post('/cPhoneBooking/:customerPhoneBooking', async (req, res) => {
//   // req
//   const request = req.params.customerPhoneBooking
//   const requestP = JSON.parse(request)

//   console.log(requestP)

//   // requestP.idempotency_key = `${process.env.Square_Idempotency_Key}`

//   // console.log(requestP.idempotency_key)

//   // console.log(requestP, 'this is the requested customer phone booking data')
//   // res

//   const api_url = 'https://connect.squareupsandbox.com/v2/bookings'
//   const data = requestP 
//   const config = {
//     method: 'post',
//     headers: {
//       'square-version': '2021-12-15',
//       'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   }

//   const response = await fetch(api_url, config)
//   const response_data = await response.json()

//   console.log(response_data)

//   res.json(response_data)
// })

// // send sign up confirmation to customer email -- company
// app.get('/newCustomerEmail/:newCustomerConfirmation', async (req, res) => {
//   const request = req.params.newCustomerConfirmation
//   const requestParsed = JSON.parse(request)

//   console.log(requestParsed)

//   const message = {
//     from: {
//       email: 'acanty001@gmail.com', // company email and domain
//       name: 'So Posh'
//     },
//     to: {
//       email: 'cantyaikyu@gmail.com',
//       name: 'Sign Up Confirmation'
//     },
//     subject: 'Thank you for signing up',
//     dynamic_template_data: {
//       "user_first_name": `${requestParsed.given_name}`
//     },
//     template_id: `${process.env.TWILIO_SIGNUP_CONFIRMATION}`
//   }

//   //res
//   sgMail  
//     .send(message)
//     .then(()=> { res.json('The email has been sent') })
//     .catch((error)=> { console.log(error) })
// })

// // send booking confirmation to customer email (phone consultation) -- company
// app.get('/newBookingEmail/:newBookingConfirmation', async (req, res) => {
//   // req
//   const request = req.params.newBookingConfirmation
//   const requestParsed = JSON.parse(request)

//   console.log(requestParsed)

//   let newAppointmentYear = requestParsed.appointment_time.slice(0, 4)
//   let newAppointmentMonth = requestParsed.appointment_time.slice(5, 7)
//   let newAppointmentDay = requestParsed.appointment_time.slice(8, 10)
//   let newAppointmentTime = requestParsed.appointment_time.slice(11, 19)

//   if (newAppointmentTime === '09:00:00') {
//     newAppointmentTime = '9:00 AM'
//   } else if (newAppointmentTime === '09:30:00') {
//     newAppointmentTime = '9:30 AM'
//   } else if (newAppointmentTime === '10:00:00') {
//     newAppointmentTime = '10:00 AM'
//   } else if (newAppointmentTime === '10:30:00') {
//     newAppointmentTime = '10:30 AM'
//   } else if (newAppointmentTime === '11:00:00') {
//     newAppointmentTime = '11:00 AM'
//   } else if (newAppointmentTime === '11:30:00') {
//     newAppointmentTime = '11:30 AM'
//   } else if (newAppointmentTime === '12:00:00') {
//     newAppointmentTime = '12:00 PM'
//   } else if (newAppointmentTime === '12:30:00') {
//     newAppointmentTime = '12:30 PM'
//   } else if (newAppointmentTime === '13:00:00') {
//     newAppointmentTime = '1:00 PM'
//   } else if (newAppointmentTime === '13:30:00') {
//     newAppointmentTime = '1:30 PM'
//   } else if (newAppointmentTime === '14:00:00') {
//     newAppointmentTime = '2:00 PM'
//   } else if (newAppointmentTime === '14:30:00') {
//     newAppointmentTime = '2:30 PM'
//   } else if (newAppointmentTime === '15:00:00') {
//     newAppointmentTime = '3:00 PM'
//   } else if (newAppointmentTime === '15:30:00') {
//     newAppointmentTime = '3:30 PM'
//   } else if (newAppointmentTime === '16:00:00') {
//     newAppointmentTime = '4:00 PM'
//   } else if (newAppointmentTime === '16:30:00') {
//     newAppointmentTime = '4:30 PM'
//   } else if (newAppointmentTime === '17:00:00') {
//     newAppointmentTime = '5:00 PM' 
//   }

//   let newAppointmentTime1 = `${newAppointmentMonth}-${newAppointmentDay}-${newAppointmentYear} ${newAppointmentTime}`

//   const firstThree = requestParsed.phone_number.slice(0, 3)
//   const secondThree = requestParsed.phone_number.slice(3, 6)
//   const lastFour = requestParsed.phone_number.slice(6, 10)

//   let newPhoneNumber = '(' + firstThree + ')-' + secondThree + '-' + lastFour 

//   const message = {
//     from: {
//       email: 'acanty001@gmail.com', // company email and domain
//       name: 'So Posh'
//     },
//     to: {
//       email: 'cantyaikyu@gmail.com',
//       name: 'Booking Confirmation'
//     },
//     subject: 'Thank you for booking with us!',
//     dynamic_template_data: {
//       "time-booked": `${requestParsed.time_booked}`,
//       "employee": `${requestParsed.employee}`,
//       "customer": `${requestParsed.given_name} ${requestParsed.family_name}`, 
//       "appointment-time": `${newAppointmentTime1}`, 
//       "duration": "20 minutes",
//       "email": `${requestParsed.email_address}`, 
//       "phone": `${newPhoneNumber}` 
//     },
//     template_id: `${process.env.TWILIO_BOOKING_CONFIRMATION}`
//   }

//   //res
//   sgMail  
//     .send(message)
//     .then(()=> { res.json('The email has been sent') })
//     .catch((error)=> { console.log(error) })

// })

// // send booking confirmation to customer phone (phone consultation) -- company
// app.post('/newBookingPhone/:newBookingConfirmation', async (req, res) => {
//   // req
//   const request = req.params.newBookingConfirmation
//   const requestParsed = JSON.parse(request)

//   const filterPhoneValue = /[-()]/g
//   let filteredCleanPhoneValue = requestParsed.phone_number.replace(filterPhoneValue, '')

//   let newAppointmentYear = requestParsed.appointment_time.slice(0, 4)
//   let newAppointmentMonth = requestParsed.appointment_time.slice(5, 7)
//   let newAppointmentDay = requestParsed.appointment_time.slice(8, 10)
//   let newAppointmentTime = requestParsed.appointment_time.slice(11, 19)

//   if (newAppointmentTime === '09:00:00') {
//     newAppointmentTime = '9:00 AM'
//   } else if (newAppointmentTime === '09:30:00') {
//     newAppointmentTime = '9:30 AM'
//   } else if (newAppointmentTime === '10:00:00') {
//     newAppointmentTime = '10:00 AM'
//   } else if (newAppointmentTime === '10:30:00') {
//     newAppointmentTime = '10:30 AM'
//   } else if (newAppointmentTime === '11:00:00') {
//     newAppointmentTime = '11:00 AM'
//   } else if (newAppointmentTime === '11:30:00') {
//     newAppointmentTime = '11:30 AM'
//   } else if (newAppointmentTime === '12:00:00') {
//     newAppointmentTime = '12:00 PM'
//   } else if (newAppointmentTime === '12:30:00') {
//     newAppointmentTime = '12:30 PM'
//   } else if (newAppointmentTime === '13:00:00') {
//     newAppointmentTime = '1:00 PM'
//   } else if (newAppointmentTime === '13:30:00') {
//     newAppointmentTime = '1:30 PM'
//   } else if (newAppointmentTime === '14:00:00') {
//     newAppointmentTime = '2:00 PM'
//   } else if (newAppointmentTime === '14:30:00') {
//     newAppointmentTime = '2:30 PM'
//   } else if (newAppointmentTime === '15:00:00') {
//     newAppointmentTime = '3:00 PM'
//   } else if (newAppointmentTime === '15:30:00') {
//     newAppointmentTime = '3:30 PM'
//   } else if (newAppointmentTime === '16:00:00') {
//     newAppointmentTime = '4:00 PM'
//   } else if (newAppointmentTime === '16:30:00') {
//     newAppointmentTime = '4:30 PM'
//   } else if (newAppointmentTime === '17:00:00') {
//     newAppointmentTime = '5:00 PM' 
//   }

//   let newAppointmentTime1 = `${newAppointmentMonth}-${newAppointmentDay}-${newAppointmentYear} ${newAppointmentTime}`

//   const firstThree = requestParsed.phone_number.slice(0, 3)
//   const secondThree = requestParsed.phone_number.slice(3, 6)
//   const lastFour = requestParsed.phone_number.slice(6, 10)

//   let newPhoneNumber = '(' + firstThree + ')-' + secondThree + '-' + lastFour
  
//   // res
//   const accountSid = `${process.env.TWILIO_ACCOUNT_SID}`
//   const authToken = `${process.env.TWILIO_AUTH_TOKEN}`
//   const client = twilio(accountSid, authToken)
   
//   client.messages 
//         .create({ 
//            body: `Thank you for booking with So Posh!\n\nEmployee: ${requestParsed.employee}\nCustomer: ${requestParsed.given_name} ${requestParsed.family_name}\nAppointment Time: ${newAppointmentTime1}\nDuration: 20 minutes\nEmail: ${requestParsed.email_address}\nPhone: ${newPhoneNumber}\n\nTalk with you soon!
//            `,  
//            messagingServiceSid: 'MGd9f844413be5d5f69147dddf190d11d9',      
//            to: `${requestParsed.phone_number}` 
//          }) 
//         .then(message => console.log('the phone message has been sent')) 
//         .catch((error)=> console.log(error))
// })

// // send user message to agent/employee -- liveChat
// app.post('/sendChatMessage/:companyChatSupportUserInputValue', async (req, res) => {
//   // req
//   const request = req.params.companyChatSupportUserInputValue
//   const requestParsed = JSON.parse(request)

//   console.log(requestParsed)

//   latestUserMsgTime = requestParsed.time_sent
//   // res
  
// })

// // get all incoming messages
// app.get('/getIncomingMessages', async (req, res) => {
//   // req

//   // res
   
// })



app.listen(process.env.PORT, () => {
  console.log(`Express server listening at port ${process.env.PORT}...`) 
})
