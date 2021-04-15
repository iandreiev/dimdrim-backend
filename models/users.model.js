const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String, 
        // required: true,
        unique: true
    },
    password:{
        type: String,
        // required: true
    },
    name: {
        type:"String"
    },
    midname: {
        type: "String"
    },
    phone:{
        type: "String"
    },
    username:{
        type: String, 
        // required: true,
    },
    type:{
        type:String,
        // required:false
    },
    billing_address:{
        type: String
    },
    shipping_type:{
        type: String
    },
    created_at:{
        type:String,
        // required:false
    }
})

module.exports = mongoose.model('users',userSchema)