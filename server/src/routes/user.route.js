const express = require('express');
const router = express.Router();

const { user } = require('../controllers/index.controller');

//  POST routes
router.post('/register', user.register);
router.post('/login', user.login);
router.post('/logout', user.logout);

module.exports = router;