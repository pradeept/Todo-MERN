const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    }
});

const createModel = (userName)=>{
  
    const Todo = new mongoose.model(userName,todoSchema);
    return Todo;
}
module.exports = {createModel};