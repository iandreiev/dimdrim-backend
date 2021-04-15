const Size = require('../models/sizes.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.create = async(req,res)=>{
    const size = new Size({
        name: req.body.name,
        type: req.body.type,
        category: req.body.category
    })

    try{
        await size.save()
        res.status(201).json(size)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getSizes = async(req,res) => {
    try{
        const filter = {}
        const size = await Size.find(filter)

        res.status(200).json(size)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.update = async(req,res)=>{
    try{
        const size = await Size.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(size)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.remove = async(req,res) =>{
    try{
        await Size.remove({ _id: req.params.id })
        res.status(200).json({ msg: 'delete_success' })
    }
    catch(e){
        errorHandler(res,e)
    }
}