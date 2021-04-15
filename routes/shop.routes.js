const express = require("express")
const controller = require('../controllers/shop.controller')
const router = express.Router()
const passport = require('passport')

router.get('/',controller.getProducts)
router.post('/',controller.create)
router.patch('/:id', controller.update)
router.get('/:id', controller.getById)
router.delete('/:id',  controller.remove)

module.exports = router