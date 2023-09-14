import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

function LoginForm() {
  // State to store the values of email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Hardcoded email and password
    const hardcodedEmail = "manningjustin08@yahoo.com";
    const hardcodedPassword = "password";

    // Check if the entered email and password match the hardcoded values
    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Successful login
      setError(""); // Clear any previous error message
      console.log("Login successful!");
      navigate('/todos')
    } else {
      // Failed login
      setError("Invalid email or password"); // Set an error message
    }
  };

  return (
    <> 
    <div id="logindiv">
      <h1 id="header">Let's <span id="wordDo">Do</span> More</h1>

      {/* <h3 id="loginWrd">Login!</h3> */}

      <form onSubmit={handleSubmit}>
        <div id="emailThing">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div id="passThing">
          <label htmlFor="password">Password: </label>
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
          <button color="white" id="subby" type="submit">Submit</button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    </>
  
  );
}

export default LoginForm;
