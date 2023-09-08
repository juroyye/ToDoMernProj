import React, { useState } from "react";
import Create from "./Create";


function ToDoForm() {
 
    const[todos, setTodos] = useState([])

  return (
    <div>
        <Create />
        {
            todos.length === 0 
            ?
            <div><h2></h2></div>
            :
            todos.map(todo => (
                <div>
                    {todo}
                </div>
            ))
        }
    </div>
  )
}

    
export default ToDoForm;