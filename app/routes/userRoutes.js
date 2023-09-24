const express = require('express');
const userController = require('../controllers/userController');
const authentication = require('../middleware/authentication');

const router = express.Router();

router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.get('/profile', authentication, userController.profileUser)
  
module.exports = router;