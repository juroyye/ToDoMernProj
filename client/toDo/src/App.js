import './App.css';
// import React, { useState } from 'react';
import LoginForm from './pages/Login';
import ToDoForm from './pages/Todos';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BackgroundVideo from './BackgroundVid';


function App() {


  return (
    <>   
    <BackgroundVideo/>
     <div id='form'>
         <BrowserRouter>
         <Routes>
          <Route index element={<LoginForm/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/todos' element={<ToDoForm/>} />
          </Routes>
          </BrowserRouter>
         </div>
         </>
  

  );
}

export default App;

