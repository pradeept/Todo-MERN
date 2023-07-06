const express = require('express');
const todoRouter = express.Router();
const {getTodo, postTodo, deleteTodo} = require('../controllers/todo.controller')
const {validateJWT} = require('../utils/validateJWT');


todoRouter.get('/todos',validateJWT,getTodo);


todoRouter.post('/todos',validateJWT,postTodo);


todoRouter.delete('/todos/:id',validateJWT,deleteTodo);


module.exports = todoRouter;
