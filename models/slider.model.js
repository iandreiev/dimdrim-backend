const mongoose = require('mongoose')

const sliderSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    alias:{
        type:String
    },
    created_at:{
        type:Date,
        default: new Date().getTime()
    }
})

module.exports = mongoose.model('slider',sliderSchema)