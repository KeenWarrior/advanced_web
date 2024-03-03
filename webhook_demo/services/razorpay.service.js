const User = require('../models/user.model');
const Payment = require('../models/payment.model');
const Order = require('../models/order.model');

async function process_payment_event(payload) {
    const payment = payload.payment.entity;
    const order = payload.order.entity;

    const localOrder = await Order.findOne({ order_id: order.id });
    const user = await User.findOne({ _id: localOrder.user_id });

    
    return 'OK';
}

module.exports = {
    process_payment_event
}