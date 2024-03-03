const { process_payment_event } = require("../services/razorpay.service");

async function webhookEvent(req, res) {
  const payload = req.body.payload;
  await process_payment_event(payload);
  res.status(200).send("OK");
}

module.exports = {
  webhookEvent,
};
