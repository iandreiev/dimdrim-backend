const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    alias:{
        type: String
    },
    title:{
        type:String
    },
    parent:{
        type:Array
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