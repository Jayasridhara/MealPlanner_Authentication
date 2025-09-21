const express = require('express');
const { registerUser, loginUser, Me, logout } = require('../controller/authController');
const { isAuthenticated } = require('../middleware/auth');

const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

authRouter.get('/me', isAuthenticated, Me);
authRouter.post('/logout', isAuthenticated, logout);
module.exports = authRouter;