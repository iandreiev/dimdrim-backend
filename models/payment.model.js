const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    action:{
        type: String,
        required: true
    },
    amount:{
        type: String,
        // required: true
    },
    currency:{
        type: String,
        // required: true
    },
    description:{
        type: String,
        default: "Transaction",
        // required: true
    },
    order_id:{
        type: String,
        // required: true
    },
    version:{
        type: String,
        default: "3"
    },
    paytypes:{
        type: String
    },
    created_at:{
        type: String
    },
    status:{
        type:String,
        default: "await_commit"
    },
    public_key:{
        type:String,
        // required: true
    }
})

module.exports = mongoose.model('payment',paymentSchema)