const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
router.post('/login', userController.create)
router.post('/autentication', userController.autentication)
module.exports = router