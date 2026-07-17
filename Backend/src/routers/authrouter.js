const express = require('express');
const router = express.Router();
const {Register, Login, logout} = require('../controllers/authcontrollers');

const authmiddleware = require('../middleware/authmiddleware');

//public routes
router.post('/register', Register);
router.post('/login', Login);


router.post('/logout', logout);

module.exports = router;