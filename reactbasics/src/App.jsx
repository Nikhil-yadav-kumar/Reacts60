import {} from 'react';

import './App.css'


const showName=()=>{
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  alert(`Name: ${name}\nEmail: ${email}`);
}



function App() {
   
  return (
    <div className="App">

      <h1>Hello</h1>
     <label for="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" />
      <br />
     <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email Id" />
      <br />
     <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password" />
      <br />
      <button onClick={showName}>Submit</button>
    </div>
  )  
}

export default App
