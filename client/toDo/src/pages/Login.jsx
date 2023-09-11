import React, { useState } from "react";

function LoginForm() {
  // State to store the values of email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages

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
      // You can add redirection or further logic here for authenticated users
    } else {
      // Failed login
      setError("Invalid email or password"); // Set an error message
    }
  };

  return (
    <div>
      <h1 id="header">Let's Do More</h1>

      <p>Login</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="password">Password:</label>
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

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default LoginForm;
