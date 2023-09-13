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
            <div><h2>No Tasks Found</h2></div>
            :
            todos.map(todo => (
                <div className="outputs" onClick={() => handleEdit(todo._id)}>
                <input type="checkbox" id="check" onClick={handleEdit}></input>
                    {todo.task}
         <button type='button' onClick={() => handleDelete(todo._id)} id='delbtn'>Remove Task</button>
                </div>
            ))
        }
    </div>
  )
}

    
export default ToDoForm;