require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRouter = require('./router/todos')
const userRouter = require('./router/user')

const app  = express();

app.use(express.json());
app.use(cors());
app.use('/',todoRouter);
app.use('/user', userRouter);

mongoose.connect("mongodb://127.0.0.1:27017/todo-mern");


app.listen(process.env.PORT,()=>console.log('Alive on 3001'));