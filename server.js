const express = require('express')
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

/* define "express" server */
const app = express()
app.use(express.static('dist'))

/** dotenv */
dotenv.config()

/** middleware */
let myFunc = function (req, res, next) {
  console.log(req.method)
  next()
}
app.use(myFunc)

/** mongoose */
mongoose.connect(process.env.MongoDB_URI, { dbName: 'myFirstDatabase', useUnifiedTopology: true })
  .then(() => { console.log('You are connected to your MongoDB database God!') })
  .catch((error) => { console.log(error) })

/** routes */
app.use(geocodeRouter)
app.use(distanceMatrixRouter)
app.use(sendApplicationRouter)
app.use(textBookingRouter)
app.use(checkUserMongoDBRouter)
app.use(createUserMongoDBRouter)
app.use(createReviewMongoDbRouter)
app.use(getReviewsRouter)
app.use(updatePhoneNumberMongoDBRouter)
app.use(createUserSquareRouter) 
app.use(getAppointmentsSubRouter)
app.use(getUserAppointmentsRouter)
app.use(getLocationsRouter)
app.use(getServicesRouter)
app.use(getAgentsRouter)
app.use(getAvailabilitiesRouter)
app.use(getUsersSquareRouter)
app.use(updateUserFieldMongoDbRouter)
app.use(updatePhoneNumberSquareRouter)
app.use(createBookingRouter)
app.use(cancelBookingRouter)
app.use(emailBookingRouter)
app.use(customerReviewRouter)
app.use(updateUserFieldSquareRouter)
app.use(paymentsRouter1)
app.use(cardsRouter1)
app.use(staticRouter1)
app.use(createCardOnFileRouter)
app.use(createSubscriptionRouter)

/* server */
app.listen(process.env.PORT, () => {
  console.log(`server starting starting at port ${process.env.PORT}`)
})
