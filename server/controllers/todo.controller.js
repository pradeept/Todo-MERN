const {createModel} = require('../models/todos.model');
var Todo;

module.exports.getTodo = async (req,res)=>{
    //req.user {name,email,iat}
    Todo = createModel(req.user.name);
    const todo = await Todo.find();
    res.json(todo);
}

module.exports.postTodo = async (req,res)=>{
    try{
        const todo = new Todo(req.body);
        const response = await todo.save();
        res.json(response.todo)
    }catch(e){
    }
}

module.exports.deleteTodo = async (req,res)=>{
    const id = req.params.id;
    try{
        const result = await Todo.deleteOne({_id:id});
        res.send("Success");
        res.status(200);
    }catch(e){
        res.status(200);
        res.send("Bad Gateway");
    }
}