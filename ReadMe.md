Introduction:

The ultimate goal of this application is to create a modern and simplistic application that allows the user to easily store tasks due for completion. Upon interaction with the interface, users are able to create, read, update, and delete tasks. 





DEPLOYED LINK: 




Technologies Used: 

MERN Stack (MongoDB, Express, React, Node.js), VS Code, Github

Getting Started: https://trello.com/b/bYSrfqna/todoapp

Unsolved Problems: N/A

Future Enhancements: Stylistic chamges, import images that offer personality to each task





1. start with login page

create login box and password box
create submit button
create title of "Let's DO More"
change background color to a gray

2. todoApp page

create "What do you wanna do?" title
create entry field for where the task will go
figure out how im going to have divs appear and disappear
create buttons that spawn with those divs and allow for an update and a delete





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