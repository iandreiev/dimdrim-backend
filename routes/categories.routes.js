const express = require("express")
const controller = require('../controllers/categories.controller')
const router = express.Router()
const passport = require('passport')

router.post('/',controller.create)
router.post('/parent',controller.setParent)
router.get('/',controller.get)
router.get('/id/:id',controller.getById)
router.get('/partners',controller.getByPartner)
router.get('/all',controller.getAll)
router.get('/alias/:alias',controller.getByAlias)
router.patch('/:id',controller.update)
router.delete('/:id',controller.delete)

module.exports = router
