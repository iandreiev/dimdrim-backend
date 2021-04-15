const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    customer_id:{
        type: String
    },
    products_id:{
        type: Array
    },
    created_at:{
        type: String
    }
})

module.exports = mongoose.model('cart',cartSchema)