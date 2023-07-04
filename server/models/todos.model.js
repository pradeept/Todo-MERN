const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    }

});

const Todo = new mongoose.model('todo',todoSchema);

module.exports = Todo;