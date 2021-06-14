const express = require("express")
const controller = require('../controllers/users.controller')
const router = express.Router()
const passport = require('passport')

router.get('/',controller.getUsers)
router.post('/temp-customer', controller.tempCustomer)
router.get('/temp-customer', controller.getTempCustomers)
router.get('/:id', controller.getUser)
router.patch('/:id/type', controller.setType)
router.patch('/:id', controller.updateUser)
router.patch('/setLastLogin/:id',controller.setLastLogin)
router.delete('/:id',  controller.deleteUser)

module.exports = router