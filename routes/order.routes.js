const express = require("express")
const controller = require('../controllers/order.controller')
const router = express.Router()
const passport = require('passport')

router.get('/',controller.getAllOrders)
router.get('/:id',controller.getById)
router.get('/history',controller.findHistory)
router.post('/',controller.create)
router.patch('/:id',controller.setType)
router.delete('/:id',controller.remove)

module.exports = router