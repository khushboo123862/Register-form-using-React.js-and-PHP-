import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [Name, setName ] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      
      const url = "http://localhost/auth_api/login.php"; 
      
      const response = await axios.post(url, {
        email: email,
        password: password,
        Name:Name
      });

      if (response.data.success) {
setMessage(response.data.message + " Welcome " + response.data.user);
      } else {
        setMessage("Error: " + response.data.message);
      }
      
    } catch (error) {
      console.error(error);
      setMessage("Server connect nahi ho raha!");
    }
  };

  return (
    <div className='Login-card'>
      <h2>Register</h2>
      <form onSubmit={handleLogin}>
        
         <input 
          type="text" 
          placeholder="Enter Name" 
          value={Name}
          onChange={(e) => setName(e.target.value)} 
          
        /><br/><br/>
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          
        /><br/><br/>
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
  
        /><br/><br/>
        <button type="submit">Login Now</button>
      </form>
      
      {message && <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>
        {message}
      </p>}
    </div>
  );
}

export default App;