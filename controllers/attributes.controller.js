const Attribute = require('../models/attributes.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.create = async(req,res)=>{
    try{
        const attr = new Attribute({
            title: req.body.title,
            alias: req.body.alias
        })

        await attr.save()
        res.status(201).json(attr)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.get = async(req,res)=>{
    try{
        let filter = {}

        const attr = await Attribute.find(filter).sort({created_at:-1})
        res.status(200).json(attr)

    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getById = async(req,res) => {
    try{
        let filter = {_id: req.body.id}
        let attr = await Attribute.findOne(filter)
        res.status(200).json(attr)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.edit = async(req,res)=>{
    try{
        let attr = await Attribute.findOneAndUpdate(
            {_id: req.body.id},
            {$set: req.body},
            {new: true}
        )

        res.status(200).json(attr)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.delete = async(req,res)=>{
    try{
        let filter = {_id: req.body.id}

        const attr = await Attribute.remove(filter)

        res.status(200).json(attr)
    }
    catch(e){
        errorHandler(res,e)
    }
}