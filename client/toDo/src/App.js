import './App.css';
import React, { useState } from 'react';
import LoginForm from './pages/Login';
import ToDoForm from './pages/Todos';



function App() {
  // State to track whether the user is logged in
  const [isLoggedIn] = useState(true);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    isLoggedIn(true)
  };

  // Function to handle logout
  const handleLogout = () => {
  isLoggedIn(false)
  };



  return (
    <div>
      {isLoggedIn ? (
        // Render the ToDoForm when isLoggedIn is true
        <div id='tdform'>
          <ToDoForm onLogout={handleLogout} />
        </div>
      ) : (
        // Render the LoginForm when isLoggedIn is false
        <div className='form'>
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </div>
  );
}

export default App;

