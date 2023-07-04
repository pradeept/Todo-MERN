const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/todos')

const app  = express();

app.use(express.json());
app.use(cors());
app.use('/',router);

mongoose.connect("mongodb://127.0.0.1:27017/todo-mern");


app.listen(3001,()=>console.log('Alive on 3001'));