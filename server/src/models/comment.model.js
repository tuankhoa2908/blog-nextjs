const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    blog_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        require: true
    },
    content: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Comment', commentSchema);