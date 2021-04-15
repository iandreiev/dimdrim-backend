const express = require("express")
const controller = require('../controllers/slider.controller')
const router = express.Router()
const passport = require('passport')

router.post('/', controller.create)
router.get('/', controller.get)

module.exports = router
