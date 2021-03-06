const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    hero:{
        type:String
    },
    images:{
        type: Array
    },
    categories:{
        type: Array
    },
    in_stock:{
        type: Boolean,
        default: 'true'
    },
    stock_qty:{
        type: Number
    },
    prices:{
        type: Array
    },
    sale:{
        type: String,
        default: '0'
    },
    attrs:{
        type: Array 
    },
    sizes:{
        type: Array
    },
    created_at:{
        type: String
    },
    vendor:{
        type: String
    },
    public_key:{
        type: String
    }
})

module.exports = mongoose.model('shop',shopSchema)