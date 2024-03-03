const webhookRouter = require('./webhooks');

const express = require('express');

const router = express.Router();

router.use('/webhooks', webhookRouter);

module.exports = router;






