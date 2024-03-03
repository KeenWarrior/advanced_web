const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

    payment_id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    order_id: {
        type: Number,
        required: true
    },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;