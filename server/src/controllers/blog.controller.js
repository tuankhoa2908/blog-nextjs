const Blog = require('../models/blog.model');
const User = require('../models/user.model');
const { validateMongodbId } = require('../utils/validateMongodbId');

const asyncHandler = require('express-async-handler');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'blog',
        allowed_formats: ['jpeg', 'png', 'jpg'],
        public_id: (req, file) => file.originalname.split('.')[0],
    },
});

const upload = multer({ storage })

module.exports = {
    createBlog: asyncHandler(async (req, res) => {
        const { title, content, author, category } = req.body;
        const images = req.files ? req.files.map(file => file.path) : [];
        const blog = new Blog({
            title,
            content,
            author,
            category,
            images,
        });
        await blog.save();
        res.status(201).json(blog);
    }),
}