const mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['sport', 'life', 'animals', 'people', 'war', 'technology', 'music'],
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    images: [String],
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Blog', blogSchema);