const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    alias:{
        type: String
    },
    title:{
        type:String
    },
    parent:{
        type: mongoose.Types.ObjectId,
        ref: 'categories'
    },
    ifParent:{
        type:Boolean,
        default:false
    },
    image:{
        type: String
    },
    type:{
        type: String
    },
    background:{
        type: String
    }
})

module.exports = mongoose.model('categories',categoriesSchema)