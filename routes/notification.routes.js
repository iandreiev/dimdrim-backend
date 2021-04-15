const express = require("express")
const controller = require('../controllers/notification.controller')
const router = express.Router()
const passport = require('passport')

router.get('/:id',controller.getAll)

module.exports = router