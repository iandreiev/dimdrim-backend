const controller = require('../controllers/slider.controller')
const express = require("express")
const router = express.Router()
const passport = require('passport')

router.post('/',controller.create)
router.get('/getById/:id',controller.getById)
router.get('/getByAlias/:alias',controller.getByAlias)
router.get('/',controller.get)
router.patch('/:id',controller.editById)
router.delete('/:id',controller.delete)

module.exports = router