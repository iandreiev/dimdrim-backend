const Order = require('../models/order.model')
const Notify = require('../models/notifications.model')
const errorHandler = require('../utils/errorHandler.util')
const moment = require('moment')
const Cart = require('../models/cart.model')

module.exports.create = async (req, res) => {
    const order = new Order({
        cart_id: req.body.cart_id,
        customer_id: req.body.customer_id,
        is_registered: req.body.is_registered,
        order_type: req.body.order_type,
        value: req.body.value,
        created_at: req.body.created_at
    })

    const notify = (params) => new Notify({
        title: params.title,
        content: params.content,
        msg_type: params.type,
        user_id: params.user_id,
        created_at: params.created_at
    })

    try {
        await order.save()
        

        let notification = await notify({
           title: 'Нове замовлення',
           content: `Замовлення №${order._id} успішно створено`,
           user_id: req.body.user_id,
           created_at: req.body.created_at,
           type: 'default'
        }).save()

        res.status(201).json(order)

        console.log(notification)
    }
    catch (e) {
        errorHandler(res, e)
    }
}


module.exports.getAllOrders = async (req, res) => {
    try {
         await Order
         .find({})
         .select({})
         .populate('customer_id')
         .exec()
         .then(items=>{
             res.json(items)
         })
    }
    catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const order = await Order.findById(filter)
        res.status(200).json(order)
    }
    catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getByUser = async (req, res) => {
    try {
        await Order
            .find({ customer_id: req.params.customer, order_type:['new','paid','ready','pending','cancel','delivery','in_delivery'] })
            .select({})
            .populate('cart_id', 'products_id')
            .exec()
            .then(docs => {
                console.log(docs)
                res.json(docs)
            })


        // res.status(200).json(order)
    }
    catch (e) {
        errorHandler(res, e)
    }
}

module.exports.findHistoryByUser = async (req, res) => {
    try {
        const filter = {
            order_type: 'success',
            customer_id: req.params.customer
        }

        await Order
            .find(filter)
            .select({})
            .populate('cart_id', 'products_id')
            .exec()
            .then(docs => {
                console.log(docs)
                res.json(docs)
            })

    }
    catch (e) {
        errorHandler(res, e)
    }
}

module.exports.setType = async (req, res) => {
    const notify = (params) => new Notify({
        title: params.title,
        content: params.content,
        msg_type: params.type,
        user_id: params.user_id,
        created_at: params.created_at
    })

    try {
        const order = await Order.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    order_type: req.body.order_type
                }
            },
            { new: true }
        )
        console.log(req.body.notify)
        await notify(req.body.notify).save()

        res.status(200).json(order)
    }
    catch (e) {
        console.log(e)
        errorHandler(res, e)
    }
}

module.exports.remove = async (req, res) => {
    try {
        await Order.remove({ _id: req.params.id })
        res.status(200).json({ msg: 'delete_success' })
    }
    catch (e) {
        errorHandler(res, e)
    }
}

module.exports.findHistory = async (req, res) => {
    try {
        const filter = { order_type: 'success' }
        const order = await Order.find(filter)
        res.status(200).json(order)
    }
    catch (e) {
        errorHandler(res, e)
    }
}



module.exports.setAgent = async (req, res) => {
    try {
        const order = await Order.findOneAndUpdate(
            { _id: req.body.id },
            {
                $set: {
                    agent: req.body.agent
                }
            },
            { new: true }
        )

        res.status(200).json(order)
    }
    catch (e) {
        errorHandler(res, e)
    }
}

module.exports.setExpired = async (req, res) => {
    try {
        const order = await Order.findOneAndUpdate(
            { _id: req.body.id },
            {
                $set: {
                    if_expired: true,
                    expires_date: new Date().getTime()
                }
            },
            { new: true }
        )

        res.status(200).json(order)
    }
    catch (e) {
        errorHandler(res, e)
    }
}


//DANGER ZONE!!!!!!

module.exports.deleteAll = async (req, res) => {
    try {
        await Order.remove({})
        res.json({ status: 200, msg: 'deleted_all' })
    }
    catch (e) {
        errorHandler(res, e)
    }
}