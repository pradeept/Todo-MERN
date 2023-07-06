
import { Routes, Route } from 'react-router-dom';
import Todo from './components/Todo';
import Register from './components/Register';
import Login from './components/Login';

const App = ()=>{


    return <>

    <Routes>
        <Route path='/todos' element={<Todo />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/' element={<Login />}/>
    </Routes>
        
    </>
}

export default App;