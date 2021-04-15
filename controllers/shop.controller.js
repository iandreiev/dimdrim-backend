const Shop = require('../models/shop.model')
const errorHandler = require('../utils/errorHandler.util')
const moment = require('moment')

module.exports.create = async(req,res)=>{
    const product = new Shop({
        title: req.body.title,
        description: req.body.description,
        hero: req.body.hero,
        images: req.body.images,
        in_stock: req.body.in_stock,
        price: req.body.price,
        sale_price: req.body.sale_price,
        categories: req.body.categories,
        sale: req.body.sale,
        attrs: req.body.attrs,
        sizes: req.body.sizes,
        vendor: req.body.vendor,
        created_at: moment().format('DD.MM.YYYY-HH:mm:ss')
    })

    try{
        await product.save()
        res.status(201).json(product)
    }
    catch(e){
        errorHandler(res, e)
        console.log(e)
    }
}

module.exports.getProducts = async(req,res) => {
    try{
        const filter = {}
        const product = await Shop.find(filter).sort({created_at:-1})

        res.status(200).json(product)
    }
    catch(e){
        errorHandler(res, e)
    }
}

module.exports.getById = async (req,res) => {
    try{
        const product = await Shop.find({
            _id: req.params.id
        })

        res.status(200).json({
            _id: product[0]._id,
            attrs: product[0].attrs,
            created_at: product[0].created_at,
            sizes: product[0].sizes,
            hero: product[0].hero,
            images: product[0].images,
            title: product[0].title,
            description: product[0].description,
            price: product[0].price,
            sale_price: product[0].sale_price,
            sale: product[0].sale,
            categories: product[0].categories,
            vendor: product[0].vendor,
            in_stock: product[0].in_stock,
            stock_qty: product[0].stock_qty

        })
    }
    catch(e){
        errorHandler(res, e)
    }
}

module.exports.update = async(req,res) => {
    try{
        const shop = await Shop.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(shop)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.remove = async(req,res) =>{
    try{
        await Shop.remove({ _id: req.params.id })
        res.status(200).json({ msg: 'delete_success' })
    }
    catch(e){
        errorHandler(res,e)
    }
}