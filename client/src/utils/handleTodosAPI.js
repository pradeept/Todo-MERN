import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;


const getAllTodos = (setTodos)=>{
    axios.get(baseURL+'/todos',{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(({data})=>{
        setTodos(data);
    })
    .catch((e)=>{
        console.log(e);
    })
}



const postTodo =  (data,setTodos) =>{
     axios.post(baseURL+'/todos',data,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
     })
    .then(()=>{
        getAllTodos(setTodos)
    })
    .catch((e)=>console.log(e))
}



const deleteTodo = (id,setTodos)=>{
    axios.delete(`${baseURL}/todos/${id}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(()=>{
        getAllTodos(setTodos)
    })
    .catch((e)=>console.log(e))
}


export {getAllTodos, postTodo, deleteTodo}