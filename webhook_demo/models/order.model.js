const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    payments: {
        type: Array,
        required: true,
        default: []
    },
    successful_payments: {
        type: Array,
        required: true,
        default: []
    },
    user_id: {
        type: String,
        required: true
    }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;