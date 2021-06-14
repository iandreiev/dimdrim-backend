const express = require("express")
const controller = require('../controllers/colors.controller')
const router = express.Router()
const passport = require('passport')

router.post('/',controller.create)
router.get('/',controller.get)
router.get('/id/:id',controller.getById)
router.get('/alias/:alias',controller.getByAlias)
router.patch('/:id',passport.authenticate('jwt', {session:false}),controller.update)
router.delete('/:id',passport.authenticate('jwt', {session:false}),controller.remove)

module.exports = router
