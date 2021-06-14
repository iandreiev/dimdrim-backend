const mongoose = require("mongoose");
const days = Math.floor(3600*24*1000*3)

const orderSchema = new mongoose.Schema({
    cart_id: {
        ref:'cart',
        type: mongoose.Schema.Types.ObjectId
    },
    customer_id:{
        ref:'users',
        type: mongoose.Schema.Types.ObjectId
    },
    is_registered:{
        type: Boolean
    },
    if_expired:{
        type: Boolean,
        default: false
    },
    agent:{
        ref: 'users',
        type: mongoose.Schema.Types.ObjectId,
        default: undefined
    },
    order_type:{
        type: String
    },
    value:{
        type: String
    },
    created_at:{
        type: Date,
        default: new Date().getTime()
    },
    expires_date:{
        type: Date,
        default: Math.floor(new Date().getTime()+days)
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
    },
    
})

module.exports = mongoose.model('orders',orderSchema)
