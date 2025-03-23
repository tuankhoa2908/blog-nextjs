const express = require('express');
const router = express.Router();

const { blog } = require('../controllers/index.controller');
const { verifyToken } = require('../middleware/verifyToken');

// POST routes
router.post('/create-blog', verifyToken, blog.createBlog);

module.exports = router;