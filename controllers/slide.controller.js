const Slide = require('../models/slide.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.create = async(req,res) =>{
    const slide = new Slide({
        title: req.body.title,
        cta: req.body.cta,
        heroImage: req.body.heroImage,
        onlyText: req.body.onlyText,
        content: req.body.content,
        cta_btn: req.body.cta_btn,
        cta_link: req.body.cta_link,
        hero: req.body.hero,
        image: req.body.image,
        order: req.body.order,
        slider_id: req.body.slider_id
    })

    try{
        await slide.save()
        res.status(201).json(slide)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.get = async(req,res) =>{
    try{
        const filter = {}
        const slider = await Slide.find(filter)

        res.status(200).json(slider)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getBySliderId = async(req,res) =>{
    try{
        let filter = {slider_id: req.params.slider_id}
        let slide = await Slide.find(filter)
        res.json(slide)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.update = async(req,res) =>{
    try{}
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.remove = async(req,res) =>{
    try{}
    catch(e){
        errorHandler(res,e)
    }
}