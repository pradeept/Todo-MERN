

const ShowTodo = ({todo,id,handleDelete})=>{

    const handleClick =()=>{
        handleDelete(id)
    }

    return <>
            <div >
                <p >{todo}</p>
                <button onClick={handleClick}>Delete</button>
            </div>
                
    </>
}

export default ShowTodo;