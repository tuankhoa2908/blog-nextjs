const mongoose = require('mongoose');
const argon2 = require('argon2');
const { nanoid } = import('nanoid');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    full_name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String,
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
}, {
    timestamps: true,
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        this.password = await argon2.hash(this.password);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await argon2.verify(this.password, candidatePassword);
};

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = nanoid();
    this.passwordResetToken = resetToken;
    this.passwordResetExpires = Date.now() + 10 * 60 * 100;
    return resetToken;
}

module.exports = mongoose.model('User', userSchema);