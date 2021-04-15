const Color = require('../models/colors.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.create = async(req,res)=>{
    const color = new Color({
        hex: req.body.hex,
        alias: req.body.alias,
        title: req.body.title
    })

    try{
        await color.save()
        res.status(201).json(color)
    }
    catch(e){
        errorHandler(res,e)
    }
}
module.exports.get = async(req,res)=>{
    try{
        const color = await Color.find({})
        res.status(200).json(color)
    }
    catch(e){
        errorHandler(res,e)
    }
}
module.exports.getByAlias = async(req,res)=>{
    try{
        const filter = {alias: req.params.alias}
        const color = await Color.find(filter)
        res.status(200).json(color)
    }
    catch(e){
        errorHandler(res,e)
    }
}
module.exports.getById = async(req,res)=>{
    try{
        const filter = {_id: req.params.id}
        const color = await Color.find(filter)
        res.status(200).json(color)
    }
    catch(e){
        errorHandler(res,e)
    }
}
module.exports.update = async(req,res)=>{
    try{
        const color = await Color.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new:true}
        )
    
        res.status(200).json(color)
    }
    catch(e){
        errorHandler(res,e)
    }
}
module.exports.remove = async(req,res)=>{
    try{
        await Color.remove({_id: req.params.id})
        res.status(200).json({msg:'delete_success'})
    }
    catch(e){
        errorHandler(res,e)
    }
}