const mongoose = require('mongoose')

const cur_schema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    symbol:{
        type:String,
        required:true
    },
    iso_code:{
        type:Number,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default: new Date().getTime()
    },
    country_code:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('currencies', cur_schema)