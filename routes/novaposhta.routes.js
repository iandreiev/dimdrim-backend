const express = require("express")
const controller = require('../controllers/novaposhta.controller')
const router = express.Router()
const passport = require('passport')

router.get('/search', controller.getCity)

module.exports = router
