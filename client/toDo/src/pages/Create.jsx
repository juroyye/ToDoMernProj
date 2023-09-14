import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function Create() {
    const [task, setTask] = useState()
    const navigate = useNavigate();

    const handleAdd = () => {
       axios.post('http://localhost:3001/add', {task: task})
       .then(result => {window.location.reload()})
       .catch(err => console.log(err))
    }

    const gotoLogin = () => {
      navigate('/login')
  }

  return (
    <div>
        <h1 id='title'>My <span className='jenn'>Tasks</span></h1>
        <input type='text' placeholder='what do you wanna do?...' onChange={(e) => setTask(e.target.value)} id='taske'/>
        <button type='button' onClick={handleAdd} className='btn'>Add Task</button>
        <button type='button' onClick={gotoLogin} id='logoutbtn'>Logout</button>
    </div>
  )
}

export default Create