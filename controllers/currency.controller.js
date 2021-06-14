const Currency = require('../models/currency.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.create = async (req,res) => {
    try{
        const cur = new Currency({
            title: req.body.title,
            symbol: req.body.symbol,
            iso_code: req.body.iso_code,
            code: req.body.code,
            country_code: req.body.country_code
        })

        await cur.save()
        res.status(200).json(cur)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.get = async (req,res) => {
    try{
        let filter = {}
        let cur = await Currency.find(filter)

        res.status(200).json(cur)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getByISO = async (req,res) => {
    try{
        let filter = {iso_code: req.params.iso_code}

        let cur = await Currency.find(filter)

        res.status(200).json(cur)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.edit = async(req,res) => {
    try{
        let filter = {_id: req.params.id}

        let cur = await Currency.findByIdAndUpdate(
            filter,
            {$set: req.body},
            {new:true}
        )

        res.status(200).json(cur)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.delete = async(req,res)=>{
    try{
        let cur = await Currency.remove({_id: req.params.id})
        res.status(200).json(cur)
    }
    catch(e){
        errorHandler(res,e)
    }
}