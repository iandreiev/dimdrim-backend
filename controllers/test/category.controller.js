const Category = require('../../models/tests/category.model')
const ErrorHandler = require('../../utils/errorHandler.util')

module.exports.create = async (req,res) => {
    const category =  new Category(req.body)

    try{
        await category.save()
        res.status(201).json(category)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.get = async(req,res) =>{ 
    try{
        let cat = await Category.find({})
        res.json(cat)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}