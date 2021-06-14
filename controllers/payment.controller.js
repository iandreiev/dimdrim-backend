const Payment = require('../models/payment.model')
const errorHandler = require('../utils/errorHandler.util')
const moment = require('moment')
var LiqPay = require('liqpay-sdk');
const keys = require('../config/keys');

module.exports.create = async (req,res) =>{
    const public_key = keys.pay.public
    const private_key = keys.pay.private

    const liqpay = new LiqPay(public_key,private_key)

    const pay = new Payment({
        action: req.body.action,
        amount: req.body.amount,
        public_key: public_key,
        currency: req.body.currency,
        description: req.body.description,
        order_id: new Date().getTime(),
        version: '3',
        paytypes: req.body.paytypes,
        language: req.body.language,
        sandbox: 1, 
        created_at: moment().format('DD.MM.YYYY-HH:mm:ss')
    }) 

    const payment = liqpay.cnb_object(pay)

    try{
        await pay.save()
        res.status(201).json([payment, pay])
    }
    catch(e){
        console.log(e)
        errorHandler(res, e)
    }
}

module.exports.checkPayment = async(req,res) =>{
    const public_key = keys.pay.public
    const private_key = keys.pay.private
    const liqpay = new LiqPay(public_key,private_key)

    let params = {
        action:'status',
        version:'3',
        order_id:req.body.order_id
    }
    try{
        liqpay.api("request",params,
        (json)=>{
            res.status(200).json(json)
        },
        (error,response)=>{
            console.log(error, response)
            res.status(500).json([error,response])
        })
        
    }
    catch(e){
        console.log(e)
        errorHandler(res,e)
    }
}