const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    cart_id: {
        type: String
    },
    customer_id:{
        type: String
    },
    is_registered:{
        type: Boolean
    },
    order_type:{
        type: String
    },
    value:{
        type: String
    },
    created_at:{
        type: String
    },
    delivery_city:{
        type:String
    },
    delivery_address:{
        type:String
    },
    delivery_type:{
        type:String
    },
    payment_type:{
        type:String
    }
})

module.exports = mongoose.model('orders',orderSchema)
