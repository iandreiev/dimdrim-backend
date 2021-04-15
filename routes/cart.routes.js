const express = require("express")
const controller = require('../controllers/cart.controller')
const router = express.Router()
const passport = require('passport')

router.post('/',controller.create)
router.get('/', controller.getAllCarts)
router.get('/:id', controller.getById)

module.exports = router
