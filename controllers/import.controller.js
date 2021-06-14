const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')
const axios = require('axios')
const errorHandler = require('../utils/errorHandler.util')
const Product = require('../models/tests/shop.model')
const xlsx = require('convert-excel-to-json');


module.exports.xlsxImport = async(req,res) =>{
    getXlsxFromStream = async(link,name) => {
        const url = link 
        const folder = path.resolve('uploads/xlsx', name)
        const write = fs.createWriteStream(folder)
        
        let options = {
            url: url,
            method: 'get',
            responseType: 'stream'
        }
        const response = await axios(options)
        response.data.pipe(write)

        return new Promise((resolve,reject)=>{
            write.on('finish', resolve)
            write.on('error',reject)
        })
    }
    try{
        let file = await getXlsxFromStream(req.body.file, req.body.name)
        .then(()=>{
          return xlsx({
                source: fs.readFileSync(`uploads/xlsx/${req.body.name}`),
                
            })
          
          
        })
        console.log(file)
        res.status(200).json(file)
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.save = async(i,req,res) =>{
    try{
        let product = new Product({
            title: i.title,
            description: i.description,
            price: parseInt(i.price),
            vendor: i.vendor,
            hero: i.hero
        })

        await product.save()
        console.log(product)
    }

    catch(e){
        errorHandler(res,e)
    }
}

module.exports.import = async(req,res)=>{

    getFileFromStream = async (link, name) =>{
        const url = link
        const folder = path.resolve('uploads/csv', name)
        const write = fs.createWriteStream(folder)
        
        let options = {
            url: url,
            method: 'get',
            responseType: 'stream'
        }
        const response = await axios(options)
        response.data.pipe(write)

        return new Promise((resolve,reject)=>{
            write.on('finish', resolve)
            write.on('error',reject)
        })

    }

    try{
        let file = await getFileFromStream(req.body.file, req.body.name)
        .then(()=>{
            csv()
            .fromFile(`uploads/csv/${req.body.name}`)
            .then(json=>{
                json.forEach(i=>{
                    this.save(i)
                })
            })
        })

        res.status(200).json({
            code:201,
            status: 'saved',
            msg: 'Import success'
        })
        
    }
    catch(e){
        console.log(e)
        errorHandler(res,e)
    }
}

module.exports.getImportedGoods = async(req,res)=>{
    try{
        const product = await Product.find({})

        res.status(200).json(product)
    }
    catch(e){
        errorHandler(res,e)
    }
}