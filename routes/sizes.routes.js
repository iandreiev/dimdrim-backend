const express = require("express")
const controller = require('../controllers/sizes.controller')
const router = express.Router()
const passport = require('passport')

router.get('/',controller.getSizes)
router.post('/',controller.create)
router.patch('/:id', controller.update)
router.delete('/:id',  controller.remove)

module.exports = router

// passport.authenticate('jwt',{session:false}),