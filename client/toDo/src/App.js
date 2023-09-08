import './App.css';
import React from 'react';
// import LoginForm from './pages/Login';
import ToDoForm from './pages/Todos';

function App() {

  return (
<>   
      <header id='title'>My Tasks</header>
        <div id='tdform'> 
          <ToDoForm/>
          </div>    
      
      {/* <div className='form'>
         <LoginForm />
         </div> */}

             </>            
  );
}

export default App;
