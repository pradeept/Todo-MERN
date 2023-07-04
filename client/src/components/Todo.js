import { useEffect, useState } from "react";
import ShowTodo from "./ShowTodo";
import { getAllTodos, postTodo, deleteTodo} from "../utils/handleAPI";

const Todo = ()=>{

    const [todos,setTodos] = useState([]);

    const [inputTodo, setInputTodo] = useState('');

    useEffect(()=>{
        getAllTodos(setTodos);
    },[]);


    const handleSubmit = async (e)=>{
        e.preventDefault();
        postTodo({"todo":inputTodo},setTodos);
        setInputTodo("");
    }

    const handleDelete =(id)=>{
        deleteTodo(id,setTodos);
    }

    return<>
            {
                todos.map((item)=>{
                    return <ShowTodo todo={item.todo} key={item._id} id={item._id} handleDelete={handleDelete}/>
                })
            }
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputTodo} onChange={(e)=>setInputTodo(e.target.value)} />
                <button type="submit">add</button>
            </form>
    </>
}

export default Todo;