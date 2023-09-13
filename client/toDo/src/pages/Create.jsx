import React, { useState } from 'react'
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
       axios.post('http://localhost:3001/add', {task: task})
       .then(result => {window.location.reload()})
       .catch(err => console.log(err))
    }

  return (
    <div>
        <h1 id='title'>My Tasks</h1>
        <input type='text' placeholder='what do you wanna do?...' onChange={(e) => setTask(e.target.value)} id='taske'/>
        <button type='button' onClick={handleAdd} className='btn'>Add Task</button>
    </div>
  )
}

export default Create