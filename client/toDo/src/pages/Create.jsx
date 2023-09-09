import React, { useState } from 'react'
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
       axios.post('http://localhost:3001/add', {task: task})
       .then(result => console.log(result))
       .catch(err => console.log(err))
    }

  return (
    <div>
        <input type='text' placeholder='what do you wanna do?...' onChange={(e) => setTask(e.target.value)} id='taske'/>
        <button type='button' onClick={handleAdd} className='btn'>Add Task</button>
    </div>
  )
}

export default Create