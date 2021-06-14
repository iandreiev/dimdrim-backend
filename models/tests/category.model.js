const mongoose = require('mongoose')

const test_category = new mongoose.Schema({
    title:{
        type: String,
        default: ''
    },
    description:{
        type: String,
        default: ''
    },
    alias:{
        type:String,
        default:''
    },
    type:{
        type: String,
        default: 'product'
    },
    parent:{
        type: Array,
        default: []
    },
    image:{
        type: String,
        default: ''
    },
    background:{
        type: String,
        default: '#282828'
    }
})

module.exports = mongoose.model('test_cats', test_category)