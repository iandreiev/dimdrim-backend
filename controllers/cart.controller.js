const Cart = require('../models/cart.model')
const errorHandler = require('../utils/errorHandler.util')
const moment = require('moment')

module.exports.create = async (req,res) => {
    const cart = new Cart({
        customer_id: req.body.customer_id,
        products_id: req.body.products_id,
        created_at: moment().format('DD.MM.YYYY-HH:mm:ss')
    })

    try{
        await cart.save()
        res.status(201).json(cart)
    }
    catch(e){
        errorHandler(res, e)
        console.log(e)
    }
}

module.exports.getAllCarts = async (req,res) =>{
    try{
        const filter = {}
        const cart = await Cart.find(filter).sort({created_at: -1})
        res.status(200).json(cart)
    }
    catch(e){
        errorHandler(res, e)
    }
}

module.exports.getById = async(req,res)=>{
    try{
        const filter = {_id: req.params.id}
        const cart = await Cart.find(filter)
        res.status(200).json(cart)
    }
    catch(e){
        errorHandler(res, e)
    }
}
