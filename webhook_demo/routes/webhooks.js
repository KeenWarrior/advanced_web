const express = require("express");
const { webhookEvent } = require("../controllers/razorpaywebhook.controller");

const router = express.Router();

router.post("/", webhookEvent);

module.exports = router;
