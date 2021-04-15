const Shop = require('../models/shop.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.searchByQuery = async(req,res) =>{
    try{
        const query = req.body.query
        const product = await Shop.find({title: {"$regex": query, "$options": "i"}, 
    })

        res.status(200).json(product)

    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.searchByFilters = async(req,res) =>{
    try{
        const filter = {categories: req.body.category}
        const product = await Shop.find(filter)

        res.status(200).json(product)
    }
    catch(e){
        errorHandler(res,e)
    }
}