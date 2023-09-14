import './App.css';
// import React, { useState } from 'react';
import LoginForm from './pages/Login';
import ToDoForm from './pages/Todos';
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  // State to track whether the user is logged in
//   const [isLoggedIn, setIsLoggedIn] = useState(false);


//   // Function to handle logout

// const handleLogout = () => {
//   setIsLoggedIn(false)
// }

  return (
        <div id='form'>
         <BrowserRouter>
         <Routes>
          <Route index element={<LoginForm/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/todos' element={<ToDoForm/>} />
          </Routes>
          </BrowserRouter>
         </div>

  );
}

export default App;

