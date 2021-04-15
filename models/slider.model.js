const mongoose = require("mongoose");

const slides = new mongoose.Schema({
    title:{
        type: String
    },
    cta:{
        type: Boolean
    },
    heroImage:{
        type:Boolean
    },
    onlyText:{
        type:Boolean
    },
    content:{
        type:String
    },
    cta_btn:{
        type:String
    },
    cta_link:{
        type: String
    },
    hero:{
        type: String
    },
    image:{
        type:String
    },
    created_at:{
        type:Date,
        default:new Date().getTime()
    },
    order:{
        type:Number
    }

})

module.exports = mongoose.model('slides',slides)