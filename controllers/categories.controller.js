const Category = require('../models/categories.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.create = async (req,res) => {
    const category = new Category({
        alias: req.body.alias,
        title: req.body.title,
        image: req.body.image,
        type: req.body.type,
        background: req.body.background
    })

    try{
        category.save()
        res.status(201).json(category)
    }
    catch(e){
        console.log(e)
        errorHandler(res, e)
    }
}

module.exports.getAll = async (req,res) => {
    try{
        const filter = {}
        const category = await Category.find(filter)

        res.status(200).json(category)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.get = async (req,res) => {
    try{
        const filter = {type: 'product'}
        const category = await Category.find(filter)
        res.status(200).json(category)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getByPartner = async(req,res) =>{
    try{
        const filter = {type: 'partner'}
        const category = await Category.find(filter)
        
        res.status(200).json(category)
        console.log(category)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.setParent = async (req,res) => {
    const category = new Category({
        alias: req.body.alias,
        title: req.body.title,
        parent: req.body.parent,
        image: req.body.image,
        type: req.body.type,
        ifParent: req.body.ifParent,
        background: req.body.background

    })
    try{
       await category.save()
       res.status(201).json(category)
    }
    catch(e){
        console.log(e)
        errorHandler(res,e)
    }
}

module.exports.getById = async (req,res) => {
    try{
        const filter = {_id: req.params.id}
        const category = await Category.find(filter)
        res.status(200).json(category)
    }
    catch(e){
        errorHandler(res,e)
    }
}
module.exports.getByAlias = async (req,res) => {
    try{
        const filter = {
            alias: req.params.alias
        }

        const category = await Category.findOne(filter)
        res.status(200).json(category)
    }
    catch(e){
        errorHandler(res,e)
    }
}
module.exports.update = async (req,res) => {
    try{
        const category = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new:true}
        )
    
        res.status(200).json(category)
    }
    catch(e){
        errorHandler(res,e)
    }
}
module.exports.delete = async (req,res) => {
    try{
        await Category.remove({_id: req.params.id})
        res.status(200).json({msg:'delete_success'})
    }
    catch(e){
        errorHandler(res,e)
    }
}