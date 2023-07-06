import { useState,useEffect } from "react";
import {encryptObject} from '../utils/encryptData';
import { loginUser } from '../utils/handleUserAPI';
import {useNavigate} from 'react-router-dom';

const Login = ()=>{

    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        name:'',
        password:''
    });

    const [error,setError] = useState("")

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token !=null){
            navigate('/todos')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleError = (res)=>{
        setError(res);
        setUserInput({
            name:'',
            password:''
        });
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const encryptedObj =  encryptObject(userInput);
        const res = await loginUser(encryptedObj);
        res===true?navigate('/todos'):handleError(res);     
    }

    return<>
        <div className="flex justify-center bg-blue-400 w-screen h-screen items-center">
            <form onSubmit={handleSubmit} className="bg-white w-4/5  flex flex-col gap-6 p-10 rounded-md lg:w-2/5 ">
                <div className="flex flex-col gap-1 ">
                    <label className="font-bold">Name: </label>
                    <input type="text" 
                        value={userInput.name} 
                        onChange={(e)=>setUserInput({...userInput,"name":e.target.value})} 
                        placeholder="Enter your name"
                        className="border-b-2 p-2 "
                        autoComplete="off"
                        onFocus={()=>{setError('')}}
                    />
                </div>

            <div className="flex flex-col gap-1">
                    <label className="font-bold">Password: </label>
                    <input type="password"
                            value={userInput.password} 
                            onChange={(e)=>setUserInput({...userInput,"password":e.target.value})} 
                            placeholder="Enter your password"
                            className="border-b-2 p-2 "
                            autoComplete="off"
                        />
            </div>
            <small className="text-red-500">{error}</small>
                <button type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold  p-3 rounded"
                >Login</button>
                <small className="text-center">Don't have an account? <a href="/register" className="text-blue-700 hover:underline">Register</a></small>
            </form>
        </div>

    </>
}

export default Login;