const express = require("express")
const controller = require('../controllers/payment.controller')
const router = express.Router()
const passport = require('passport')

router.post('/',controller.create)
router.post('/check',controller.checkPayment)

module.exports = router