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
        default: new Date().getTime()
    },
    location:{
        type:String
    },
    country:{
        type:String
    },
    country_code:{
        type:String
    },
    last_location:{
        type:String
    },
    IP:{
        type: String
    },
    last_login:{
        type:Object,
        default:{},
        device:{
            type:String,
            default: ""
        },
        ip:{
            type:String,
            default:""
        },
        logged_at:{
            type:Date,
            default:""
        },
        last_location:{
            type:String,
            default:""
        }
    }
})

module.exports = mongoose.model('users',userSchema)