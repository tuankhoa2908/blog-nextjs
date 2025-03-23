const express = require('express');
const router = express.Router();

const user = require('./user.route');
const blog = require('./blog.route');

router.use('/user', user);
router.use('/blog', blog);

module.exports = router;