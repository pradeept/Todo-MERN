const express = require('express');
const {verifyUser, registerUser} = require('../controllers/user.controller');


const userRouter = express.Router();

userRouter.use(express.json());

userRouter.post('/login',verifyUser);

userRouter.post('/register',registerUser);

module.exports = userRouter;