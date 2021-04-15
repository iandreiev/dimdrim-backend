const express = require("express")
const controller = require('../controllers/search.controller')
const router = express.Router()
const passport = require('passport')

router.post('/query', controller.searchByQuery)
router.get('/cat', controller.searchByFilters)

module.exports = router
