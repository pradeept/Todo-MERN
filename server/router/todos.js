const express = require('express');
const router = express.Router();
const Todo = require('../models/todos.model');


router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});



router.get('/todos',async (req,res)=>{
    const todo = await Todo.find();
    res.json(todo);
});


router.post('/todos',async (req,res)=>{
    try{
        const todo = new Todo(req.body);
        const response = await todo.save();
        console.log(response);
        res.json(response.todo)
    }catch(e){
        console.log(e);
    }

});

router.delete('/todos/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const result = await Todo.deleteOne({_id:id});
        console.log(result);
        res.send("Success");
        res.status(200);
    }catch(e){
        console.log(e);
        res.status(200);
        res.send("Bad Gateway");
    }
})

module.exports = router;
