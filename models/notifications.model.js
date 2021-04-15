const mongoose = require("mongoose");

const notif = new mongoose.Schema({
    title: {
        type: String
    },
    content:{
        type: String
    },
    created_at:{
        type: Date,
        default: new Date().getTime()
    },
    active:{
        type:Boolean,
        default: true
    },
    msg_type:{
        type: String,
        default: 'info'
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('notifications',notif)