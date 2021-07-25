import React, { useState } from 'react'
import Terminal from './Terminal/Terminal'
import './App.css';

const App = () => {
  const [username,setUsername] = useState("user");
  


  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div>
        <p>TeST</p>
        <Terminal 
          width={500}
          height={500}
          setUsername={setUsername}
          username={username}>
        </Terminal>

      </div>
    </div>
  );
}

export default App;
