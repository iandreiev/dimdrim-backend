const express = require("express")
const controller = require('../controllers/order.controller')
const router = express.Router()
const passport = require('passport')

router.get('/',passport.authenticate('jwt', {session:false}),controller.getAllOrders)
router.get('/:id',controller.getById)
router.get('/user/:customer',controller.getByUser)
router.get('/history/all',controller.findHistory)
router.get('/history/user/:customer',controller.findHistoryByUser)
router.post('/',controller.create)
router.patch('/:id',passport.authenticate('jwt', {session:false}),controller.setType)
router.delete('/:id',passport.authenticate('jwt', {session:false}),controller.remove)
router.get('/delete/all',passport.authenticate('jwt', {session:false}),controller.deleteAll)

module.exports = router