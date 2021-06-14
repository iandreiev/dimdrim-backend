const express = require("express")
const controller = require('../controllers/attributes.controller')
const router = express.Router()
const passport = require('passport')

router.post('/', controller.create)
router.get('/', controller.get)
router.get('/getById', controller.getById)
router.patch('/edit',controller.edit)
router.delete('/delete', controller.delete)

module.exports = router