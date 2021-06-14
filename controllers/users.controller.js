const User = require('../models/users.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.getUsers = async (req,res) => {
    try {
       
        const user = await User.find({}).select('username name midname phone email type location billing_address country country_code last_login')

        res.status(200).json(
           user
        )
    }
    catch (e) {
        errorHandler(res, e)
    }
}

module.exports.tempCustomer = async (req,res) => {
    const customer = new User({
        email: req.body.email,
        name: req.body.name,
        midname: req.body.midname,
        phone: req.body.phone,
        type: 'temp_customer',
        // billing_address: req.body.billing_address,
        // shipping_type: req.body.shipping_type,
    })

    try{
        customer.save()
        res.status(201).json(customer)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getTempCustomers = async (req,res) => {
    try{
        const filter = {type: 'temp_customer'}

        const user = User.find(filter)
        res.status(200).json(user)
    }
    catch(e){
        errorHandler(res,e)
    }
}

// User types 

module.exports.setType = async (req,res) => {
    try{
        const user = await User.findOneAndUpdate(
             {_id: req.params.id},
             {$set:{
                type: req.body.type
             }},
             {new:true}
            )

        res.status(200).json({
             id:user._id,
            email:user.email,
            username:user.username,
            name: user.name,
            phone: user.phone,
            midname: user.midname,
            type:user.type,
            created_at:user.created_at,
            location: user.location,
            billing_address: user.billing_address,
            country: user.country,
            country_code:  user.country_code,
        })
    }
    catch(e){
         errorHandler(res,e)
    }
}

module.exports.getUser = async (req,res) => {
    try{
        const user = await User.findById(
            {_id:req.params.id}
        )

        res.status(200).json({
            id:user._id,
            email:user.email,
            username:user.username,
            name: user.name,
            phone: user.phone,
            type: user.type,
            midname: user.midname,
            created_at:user.created_at,
            location: user.location,
            billing_address: user.billing_address,
            country: user.country,
            country_code:  user.country_code,
        })
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.updateUser = async (req,res) => {
    try{
        const user = await User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new:true}
        )
        res.status(201).json({
            id:user._id,
            email:user.email,
            username:user.username,
            phone: user.phone,
            type:user.type,
            created_at:user.created_at,
            location: user.location,
            billing_address: user.billing_address,
            country: user.country,
            country_code:  user.country_code,
        })
    }
    catch(e){
        errorHandler(res, e)
    }
}


module.exports.deleteUser = async (req,res) => {
    try{
        await User.remove({ _id: req.params.id })
        res.status(200).json({ msg: 'delete_success' })
    }
    catch(e){
        errorHandler(res,e)
    }
}

//ANALYTICS PURPOSES ONLY 
module.exports.setLastLogin = async (req,res) => {
    try{
         await User.findOneAndUpdate(
            {_id: req.params.id},
            {$set:{
                last_login:{
                    device: req.body.device,
                    ip:req.body.ip,
                    logged_at: req.body.logged_at
                }
            }},
            {new:true}
            )

        res.json({code: 200, msg: 'SET_LAST_LOGIN'})
    }
    catch(e){
        errorHandler(res,e)
    }
}