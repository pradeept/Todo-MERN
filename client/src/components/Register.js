import {useState} from 'react';
import {encryptObject} from '../utils/encryptData';
import { regUser } from '../utils/handleUserAPI';
import { useNavigate } from 'react-router-dom';


const Register = ()=>{

    const navigate = useNavigate();

    const [userInput,setUserInput] = useState({
        name:'',
        email:'',
        password:''
    });

    const [response,setResponse] = useState('');

    const handleError = (res)=>{
        setResponse(res);
        setUserInput( {
            name:'',
            email:'',
            password:''
        });
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const encryptedObj = encryptObject(userInput);
        const res = await regUser(encryptedObj);
        res===true?setTimeout(()=>{alert("User registered Successfully!");navigate('/')},500):handleError(res);
    }

    return <>
        <div className='flex justify-center bg-blue-400 w-screen h-screen items-center'>
            <form onSubmit={handleSubmit} className='bg-white w-4/5  flex flex-col gap-6 p-10 rounded-md lg:w-2/5'>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold'>Username</label>
                    <input 
                        type="text" 
                        value={userInput.name} 
                        onChange={(e)=>setUserInput({...userInput,"name":e.target.value})}
                        placeholder='Enter name'
                        className='border-b-2 p-2'
                        onFocus={()=>setResponse('')}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-bold'>Email</label>
                    <input 
                        type="text" 
                        value={userInput.email} 
                        onChange={(e)=>setUserInput({...userInput,"email":e.target.value})}
                        placeholder='Enter email'
                        className='border-b-2 p-2'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-bold'>Password</label>
                    <input 
                        type="password" 
                        value={userInput.password} 
                        onChange={(e)=>setUserInput({...userInput,"password":e.target.value})}
                        placeholder='Enter password'
                        className='border-b-2 p-2'
                    />
                </div>
                <small className='text-red-500'>{response}</small>
                <button 
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold  p-3 rounded'
                >Register
                </button>
            </form>
        </div>
    </>
}

export default Register;