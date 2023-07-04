import axios from 'axios';

const baseURL = "http://127.0.0.1:3001"

const getAllTodos = (setTodos)=>{

    axios.get(baseURL+'/todos')
    .then(({data})=>{
        setTodos(data);
    })
    .catch((e)=>{
        console.log(e);
    })
}


const postTodo =  (data,setTodos) =>{
    axios.post(baseURL+'/todos',data)
    .then(()=>{
        getAllTodos(setTodos)
    })
    .catch((e)=>console.log(e))
}


const deleteTodo = (id,setTodos)=>{
    axios.delete(`${baseURL}/todos/${id}`)
    .then(()=>{
        getAllTodos(setTodos)
    })
    .catch((e)=>console.log(e))
}

export {getAllTodos, postTodo, deleteTodo}