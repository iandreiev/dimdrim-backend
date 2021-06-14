const express = require("express")
const controller = require('../controllers/shop.controller')
const router = express.Router()
const passport = require('passport')
const file_worker = require('../controllers/import.controller')

router.get('/',controller.getProducts)
router.get('/list/shuffle',controller.getRecentlyBought)
router.post('/',controller.create)
router.post('/import/csv',file_worker.import)
router.post('/import/xlsx',file_worker.xlsxImport)
router.get('/import/get',file_worker.getImportedGoods)
router.get('/category/alias/:cat', controller.getByCategoryAlias)
router.patch('/:id', controller.update)
router.get('/:id', controller.getById)
router.delete('/:id',  controller.remove)

module.exports = router