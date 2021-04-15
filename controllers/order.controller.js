const Order = require('../models/order.model')
const Notify = require('../models/notifications.model')
const errorHandler = require('../utils/errorHandler.util')
const moment = require('moment')

module.exports.create = async (req,res) =>{
    const order = new Order({
        cart_id: req.body.cart_id,
        customer_id: req.body.customer_id,
        is_registered: req.body.is_registered,
        order_type: req.body.order_type,
        value: req.body.value,
        created_at: moment().format('DD.MM.YYYY-HH:mm:ss')
    })

    const notify = (id) => new Notify({
        title: 'Нове замовлення',
        content: `Замовлення №${id} успішно створено!`
    })

    try{
        await order.save()
        res.status(201).json(order)

        console.log(order)
    }
    catch(e){
        errorHandler(res, e)
    }
}


module.exports.getAllOrders = async (req,res) =>{
    try{
        const filter = {}
        const order = await Order.find(filter).sort({created_at: -1})
        res.status(200).json(order)
    }
    catch(e){
        errorHandler(res, e)
    }
}

module.exports.getById = async(req,res)=>{
    try{
        const filter = {_id: req.params.id}
        const order = await Order.find(filter)
        res.status(200).json(order)
    }
    catch(e){
        errorHandler(res, e)
    }
}

module.exports.setType = async(req,res)=>{
    try{
        const order = await Order.findOneAndUpdate(
            {_id: req.params.id},
            {$set:{
                order_type:req.body.order_type
            }},
            {new:true}
        )

        res.status(200).json(order)
    }
    catch(e){
        errorHandler(res, e)
    }
}

module.exports.remove = async (req,res)=>{
    try{
        await Order.remove({ _id: req.params.id })
        res.status(200).json({ msg: 'delete_success' })
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.findHistory = async (req,res) =>{
    try{
        const filter = {order_type: 'completed'}
        const order = await Order.find(filter)
        res.status(200).json(order)
    }
    catch(e){
        errorHandler(res, e)
    }
}