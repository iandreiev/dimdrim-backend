const multer = require('multer'),
      moment = require('moment')

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null, 'uploads/')
    },
    filename(req,file,cb){
        const date = moment().format('DDMMYYYY-HHmmss_SSS')
        cb(null, `${date}-${file.originalname}`)
    }
})

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/png' 
    || file.mimetype === 'image/jpeg'
    || file.mimetype === 'image/gif'
    || file.mimetype === 'image/webp'
    || file.mimetype === 'audio/webm'
    || file.mimetype === 'audio/ogg'
    || file.mimetype === 'audio/mpeg'
    || file.mimetype === 'video/mp4'
    || file.mimetype === 'text/csv'
    || file.mimetype === 'application/vnd.ms-excel'
    ){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const limits = {
    fileSize: 1024 * 1024 * 5 // File size (5mb)
}

module.exports = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits
})