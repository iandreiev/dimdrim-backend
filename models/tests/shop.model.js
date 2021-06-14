const mongoose = require("mongoose")

const shop = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    price:{
        type: Number
    },
    vendor:{
        type: String
    },
    hero:{
        type: String
    }
})

module.exports = mongoose.model('test-shop', shop)