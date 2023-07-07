import { useEffect, useState } from "react";
import ShowTodo from "./ShowTodo";
import { getAllTodos, postTodo, deleteTodo} from "../utils/handleTodosAPI";
import { useNavigate } from "react-router-dom";
import {decodeToken} from "react-jwt";
import {GrAdd} from 'react-icons/gr';
import {MdOutlineLogout} from 'react-icons/md';
import logout from "../utils/logout";

const Todo = ()=>{

    const navigate = useNavigate();

    const [todos,setTodos] = useState([]);

    const [inputTodo, setInputTodo] = useState('');

    const [user,setUser] = useState('');


    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token != null){
            const user = decodeToken(token);
            setUser(user.name)
            getAllTodos(setTodos,token);
        }else{
            navigate('/')
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    const handleSubmit = async (e)=>{
        e.preventDefault();
        postTodo({"todo":inputTodo},setTodos);
        setInputTodo("");
    }

    const handleDelete =(id)=>{
        deleteTodo(id,setTodos);
    }

    const handleLogout = ()=>{
        logout();
        navigate('/');
    }

    return<>
        <div className="flex flex-col justify-center w-screen ">
            <nav className=" bg-slate-600 w-screen p-3 flex justify-between ">
                <h1 className="text-lg font-thin text-white">Welcome <span className="font-medium">{user}!</span></h1>
                <button onClick={handleLogout}><MdOutlineLogout color="white" size="25"/></button>
            </nav>
           <div className="flex flex-col justify-center shadow-[rgba(7,_65,_210,_0.2)_0px_9px_30px] m-3 p-10 gap-2">
                {
                    todos.map((item)=>{
                        return <ShowTodo todo={item.todo} key={item._id} id={item._id} handleDelete={handleDelete}/>
                    })
                }
                <form onSubmit={handleSubmit} className="bg-slate-400 flex justify-between mx-8  rounded-md ">
                    <input 
                        type="text" 
                        value={inputTodo} 
                        onChange={(e)=>setInputTodo(e.target.value)} 
                        placeholder="Ex: Buy Milk, Book Ticket.."
                        className="border-b-2 w-full "
                    />

                    <button 
                        type="submit"
                        className="p-2 rounded-lg "
                    ><GrAdd  className="text-2xl"/>
                    </button>
                </form>
           </div>
           
        </div>   
    </>
}

export default Todo;