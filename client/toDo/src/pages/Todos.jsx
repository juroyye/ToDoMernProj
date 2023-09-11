import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";


function ToDoForm() {
 
    const[todos, setTodos] = useState([])


    useEffect(() => {
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    }, []) 

    const handleEdit = () => {
      
    }

  return (
    <div>
        <Create />
        {
            todos.length === 0 
            ?
            <div><h2></h2></div>
            :
            todos.map(todo => (
                <div className="outputs" onClick={() => handleEdit(todo._id)}>
                    {todo.task}
         <button type='button' id='delbtn'>Remove Task</button>
        <button type='button'  id='edbtn'>Edit Task</button>
                </div>
            ))
        }
    </div>
  )
}

    
export default ToDoForm;