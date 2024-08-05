const express = require('express')
const verifyToken = require('../middleware/verifyToken')
const userSignInController = require('../controllers/userController/userSignInController')
const userDetailsController = require('../controllers/userController/userDetailsController')

const router = express.Router()

router.post('/signin', userSignInController)
router.get('/user-details',verifyToken,userDetailsController)

module.exports = router;