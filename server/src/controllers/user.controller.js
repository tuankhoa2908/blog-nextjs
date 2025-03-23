const User = require('../models/user.model');

const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const { generateToken, generateRefreshToken } = require('../config/jwtToken');
const { validateMongodbId } = require('../utils/validateMongodbId');

module.exports = {
    // Register a new user
    register: asyncHandler(async (req, res, next) => {
        const { username, email, password, full_name } = req.body;

        // Check if user already exists
        const userExists = await User
            .findOne({ email })
            .select('email')
            .lean();
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Create a new user
        const user = await User.create({ username, email, password, full_name });
        if (!user) {
            return res.status(400).json({ message: 'User registration failed' });
        }
        res.json({ message: 'User registered successfully', status: "OKE", data: user });
    }),

    // Login a user
    login: asyncHandler(async (req, res, next) => {
        const { username, password } = req.body;
        // Check if user exists
        const user = await User
            .findOne({ username })
            .select('+password');

        console.log(user);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Check if password is correct
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user._id);
        const refreshToken = generateRefreshToken(user._id);
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        // Update user refreshToken
        await User.findByIdAndUpdate(user._id, { refreshToken }, { new: true });
        res.json({ message: 'User logged in successfully', status: "OKE", data: { token, refreshToken } });
    }),

    // Handle refresh token
    refreshToken: asyncHandler(async (req, res, next) => {
        const { refreshToken } = req.cookies;
        if (!refreshToken) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        try {
            const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const token = generateToken(user._id);
            res.json({ message: 'Token refreshed successfully', status: "OKE", data: token });
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    }),

    // Logout a user
    logout: asyncHandler(async (req, res, next) => {
        const { refreshToken } = req.cookies;
        if (!refreshToken) {
            return res.status(401).json({ message: 'No refresh token in cookies' });
        };
        res.clearCookie('refreshToken', {
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
        });
        res.json({ message: 'User logged out successfully', status: "OKE" });
    }),
}