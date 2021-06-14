const express = require("express")
const controller = require('../controllers/currency.controller')
const router = express.Router()
const passport = require('passport')

router.post('/', controller.create)
router.get('/', controller.get)
router.get('/getByISO/:iso_code', controller.getByISO)
router.patch('/:id', controller.edit)
router.delete('/:id', controller.delete)

module.exports = router