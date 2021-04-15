const express = require("express")
const controller = require('../controllers/colors.controller')
const router = express.Router()
const passport = require('passport')

router.post('/',controller.create)
router.get('/',controller.get)
router.get('/id/:id',controller.getById)
router.get('/alias/:alias',controller.getByAlias)
router.patch('/:id',controller.update)
router.delete('/:id',controller.remove)

module.exports = router
