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
    
    
    const handleEdit = (id) => {
      axios.put('http://localhost:3001/update/'+id)
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result => {window.location.reload()})
      .catch(err => console.log(err))
    }



  return (
    <div>
        <Create />
        {
            todos.length === 0 
            ?
            <div><h2 id="taskTitle">No Tasks</h2></div>
            :
            todos.map(todo => (
                <div className="outputs">
                <input type="checkbox" id="check" onClick={() => handleEdit(todo._id)}></input>
              <h3>{todo.task}</h3>   
         <button type='button' onClick={() => handleDelete(todo._id)} id='rembtn'>Remove Task</button>
                </div>
            ))
        }
    </div>
  )
}

    
export default ToDoForm;