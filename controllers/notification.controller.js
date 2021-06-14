const Notify = require('../models/notifications.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.getAll = async (req,res) => {
    try{
        const filter = {
            
        }
        let notify = await Notify.find(filter)
        res.status(200).json(notify)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.create = async(req,res) =>{
    try{
        const notify = new Notify({
            title: req.body.title,
            content: req.body.content,
            msg_type: req.body.msg_type,
            user_id: req.body.user_id,
            created_at: req.body.created_at
        })

        await notify.save()
        res.status(201).json(notify)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getNotifiesByUserId = async(req,res) => {
    try{
        const notify = await Notify.find({user_id: req.params.user_id}).sort({created_at: -1})

        res.status(200).json(notify)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.setType = async(req,res) => {
    try{
        let filter = {_id: req.params.id}

        let notify = await Notify.findOneAndUpdate(filter, {$set: req.body.type}, {new:true})
        res.status(200).json(notify)
    }
    catch(e){
        errorHandler(res,e)
    }
}