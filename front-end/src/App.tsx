import React, { useState } from 'react'
import Terminal from './Terminal/Terminal'
import './App.css';

const App = () => {
  const [credentials,setCredentials] = useState({username:"guest",password:"",loggedIn:false});
  


  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div>
        <p>TeST</p>
        <Terminal 
          width={500}
          height={500}
          credentials={credentials}
          setCredentials={setCredentials}>
        </Terminal>

      </div>
    </div>
  );
}

export default App;
