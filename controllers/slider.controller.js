const Slider = require('../models/slider.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.create = async(req,res)=>{
    try{
        const slide = new Slider({
            title: req.body.title,
            alias: req.body.alias
        })

        await slide.save()
        res.status(201).json(slide)
    }
    catch(e){
        errorHandler(res,e)
        console.log(res,e)
    }
}

module.exports.get = async(req,res)=>{
    try{
        const filter = {}
        const slider = await Slider.find(filter)

        res.status(200).json(slider)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getById = async (req,res)=>{
    try{
        const filter = {_id: req.params.id}

        const slider = await Slider.find(filter)

        res.status(200).json(slider)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getByAlias = async (req,res) => {
    try{
        const filter = {alias: req.params.alias}
        const slider = await Slider.findOne(filter)

        res.status(200).json(slider)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.delete = async (req,res) => {
    try{
        const filter = {_id: req.params.id}

        const slider = await Slider.remove(filter)
        res.status(200).json(slider)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.editById = async (req,res)=>{
    try{
        const filter = {_id: req.params.id}

        let toEdit = await Slider.findOneAndUpdate(
            filter,
            {$set: req.body},
            {new: true}
        )

        res.status(200).json(toEdit)
    }
    catch(e){
        errorHandler(res,e)
    }
}