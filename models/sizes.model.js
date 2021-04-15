const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
    name:{
        type: String
    },
    type:{
        type: Number
    },
    category:{
        type:String
    }
})

module.exports = mongoose.model('sizes',sizeSchema)