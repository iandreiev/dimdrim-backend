const axios = require('axios');
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler.util')
const NovaPoshta = require('novaposhta')

const np = {
    url:'https://api.novaposhta.ua/v2.0/json/',
    key: keys.np.key
}

const np_api = new NovaPoshta({apiKey: np.key})

module.exports.getCity = async(req,res)=>{
    try{
        // let city = await np_api.address.getCities({CityName: req.body.city})

        res.status(200).json(req.body.city)
    }
    catch(e){
        errorHandler(res,e)
    }
}