const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
    hex:{
        type: String
    },
    title:{
        type: String
    },
    alias:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('colors',colorSchema)
