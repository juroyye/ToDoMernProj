import React, {useState} from "react";


function LoginForm() {
    // State to store the values of email and password inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      // You can add your logic here, such as sending the data to a server
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return(
        <div>
            <h1 id="header">
                Let's Do More
            </h1>

            <p>Login</p>
            
            <form onSubmit={handleSubmit}>
        <div>
          <label email="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label password="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div id="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
        </div>
    )
}

export default LoginForm;