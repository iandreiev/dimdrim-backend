const mongoose = require('mongoose')

const attribute_schema = new mongoose.Schema({
    title:{
        type: String
    },
    alias:{
        type: String
    },
    created_at:{
        type: Date,
        default: new Date().getTime()
    }
})

module.exports = mongoose.model('attributes', attribute_schema)