const express = require("express")
const controller = require('../controllers/slide.controller')
const router = express.Router()
const passport = require('passport')

router.post('/', controller.create)
router.get('/', controller.get)
router.get('/alias/:slider_id', controller.getBySliderId)

module.exports = router
