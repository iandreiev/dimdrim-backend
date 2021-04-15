const Notify = require('../models/notifications.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.getAll = async (req,res) => {
    try{
        const filter = {
            user_id: req.params.id
        }
        let notify = await Notify.find(filter)
        res.status(200).json(notify)
    }
    catch(e){
        errorHandler(res,e)
    }
}