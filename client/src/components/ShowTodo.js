import {MdDeleteOutline} from 'react-icons/md';

const ShowTodo = ({todo,id,handleDelete})=>{

    const handleClick =()=>{
        handleDelete(id)
    }

    return <>
            <div className="flex px-10 py-4 justify-between mx-4 rounded-md bg-slate-100">
                <p >{todo}</p>
                <button onClick={handleClick}
                ><MdDeleteOutline /></button>
            </div>
                
    </>
}

export default ShowTodo;