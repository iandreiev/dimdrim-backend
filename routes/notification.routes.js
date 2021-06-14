const express = require("express")
const controller = require('../controllers/notification.controller')
const router = express.Router()
const passport = require('passport')

router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/get/user/:user_id', controller.getNotifiesByUserId)
router.patch('/setType/:id', controller.setType)

module.exports = router