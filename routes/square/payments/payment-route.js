// import modules
const express = require('express')

const staticHandler = require('serve-handler');
// async-retry will retry failed API requests
const retry = require('async-retry');

// logger gives us insight into what's happening
const logger = require('../../../server/logger');
// schema validates incoming requests
const {
  validatePaymentPayload,
  validateCreateCardPayload,
} = require('../../../server/schema');
const { ApiError, client: square } = require('../../../server/square');
const { nanoid } = require('nanoid')

const paymentsRouter1 = express.Router()
const cardsRouter1 = express.Router()
const staticRouter1 = express.Router()

paymentsRouter1.post('/payment/:bodyData', async (req, res) => {
  // const payload = await json(req);
  const payload = JSON.parse(req.params.bodyData)
  console.log(payload)
  console.log(payload.email_address)
  logger.debug(JSON.stringify(payload));
  // We validate the payload for specific fields. You may disable this feature
  // if you would prefer to handle payload validation on your own.
  if (!validatePaymentPayload(payload)) {
    // throw createError(400, 'Bad Request');
    console.log('create error')
  }
  await retry(async (bail, attempt) => {
    try {
      logger.debug('Creating payment', { attempt });

      const idempotencyKey = payload.idempotencyKey || nanoid();
      const payment = {
        idempotencyKey,
        locationId: payload.locationId,
        sourceId: payload.sourceId,
        // While it's tempting to pass this data from the client
        // Doing so allows bad actor to modify these values
        // Instead, leverage Orders to create an order on the server
        // and pass the Order ID to createPayment rather than raw amounts
        // See Orders documentation: https://developer.squareup.com/docs/orders-api/what-it-does
        amountMoney: {
          // the expected amount is in cents, meaning this is $1.00.
          amount: `${payload.amount}`,
          // If you are a non-US account, you must change the currency to match the country in which
          // you are accepting the payment.
          currency: 'USD',
        },
        note: `${payload.service_name} - ${payload.given_name} ${payload.family_name} - ${payload.email_address}`
      };

      if (payload.customerId) {
        payment.customerId = payload.customerId;
      }

      // VerificationDetails is part of Secure Card Authentication.
      // This part of the payload is highly recommended (and required for some countries)
      // for 'unauthenticated' payment methods like Cards.
      if (payload.verificationToken) {
        payment.verificationToken = payload.verificationToken;
      }

      const { result, statusCode } = await square.paymentsApi.createPayment(
        payment
      );

      logger.info('Payment succeeded!', { result, statusCode });

      res.send(statusCode, {
        success: true,
        payment: {
          id: result.payment.id,
          status: result.payment.status,
          receiptUrl: result.payment.receiptUrl,
          orderId: result.payment.orderId,
        }})

      // send(res, statusCode, {
      //   success: true,
      //   payment: {
      //     id: result.payment.id,
      //     status: result.payment.status,
      //     receiptUrl: result.payment.receiptUrl,
      //     orderId: result.payment.orderId,
      //   },
      // });
    } catch (ex) {
      if (ex instanceof ApiError) {
        // likely an error in the request. don't retry
        logger.error(ex.errors);
        bail(ex);
      } else {
        // IDEA: send to error reporting service
        logger.error(`Error creating payment on attempt ${attempt}: ${ex}`);
        throw ex; // to attempt retry
      }
    }
  });
})

cardsRouter1.post('/card', async (req, res) => {
  // const payload = await json(req);
  const payload = JSON.parse(req)

  if (!validateCreateCardPayload(payload)) {
    // throw createError(400, 'Bad Request');
    console.log('create error')
  }
  await retry(async (bail, attempt) => {
    try {
      logger.debug('Storing card', { attempt });

      const idempotencyKey = payload.idempotencyKey || nanoid();
      const cardReq = {
        idempotencyKey,
        sourceId: payload.sourceId,
        card: {
          customerId: payload.customerId,
        },
      };

      if (payload.verificationToken) {
        cardReq.verificationToken = payload.verificationToken;
      }

      const { result, statusCode } = await square.cardsApi.createCard(cardReq);

      logger.info('Store Card succeeded!', { result, statusCode });

      // remove 64-bit value from response
      delete result.card.expMonth;
      delete result.card.expYear;

      res.send(statusCode, {
        success: true,
        card: result.card,
      })
      // send(res, statusCode, {
      //   success: true,
      //   card: result.card,
      // });
    } catch (ex) {
      if (ex instanceof ApiError) {
        // likely an error in the request. don't retry
        logger.error(ex.errors);
        bail(ex);
      } else {
        // IDEA: send to error reporting service
        logger.error(
          `Error creating card-on-file on attempt ${attempt}: ${ex}`
        );
        throw ex; // to attempt retry
      }
    }
  });
})

staticRouter1.get('/*', async (req, res) => {
  logger.debug('Handling request', req.path);
  await staticHandler(req, res, {
    public: 'public',
  });
})

module.exports = { paymentsRouter1, cardsRouter1, staticRouter1 }