// import modules
const express = require('exprss')

const cancelSubscriptionRouter = express.Router()

cancelSubscriptionRouter.post('/cancelSubscription/:cancelSubscriptionObj', async (req, res) => {
  // req 
  const cancel_subscription_request = req.params.cancelSubscriptionObj
  const cancel_subscription_request_parsed = JSON.parse(cancel_subscription_request)

  // res
  const api_url = `https://connect.squareupsandbox.com/v2/subscriptions/${cancel_subscription_request_parsed.subscription_id}/cancel`
  const config = {
    method: 'POST',
    headers: {
      'square-version': '2022-04-20',
      'authorization': `Bearer ${process.env.Square_Authorization_Bearer}`,
      'content-type': 'application/json'
    }
  }

  const cancel_subscription_req = await fetch(api_url, config)
  const cancel_subscription_res = await cancel_subscription_req.json()
  res.json(cancel_subscription_res)
})

module.exports = { cancelSubscriptionRouter }