import React, { useState } from 'react'
import Terminal from './Terminal/Terminal'
import './App.css';

const App = () => {
  const [credentials,setCredentials] = useState({username:"guest",password:"",loggedIn:false});
  const [currentTerminal,setCurrentTerminal] = useState(false);

  let temp = (
    <Terminal 
    width={500}
    height={500}
    credentials={credentials}
    setCredentials={setCredentials}>
  </Terminal>
  )

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div>
        <div className='header'>
          <div className='headerButtons'>
            <button onClick={()=>{setCurrentTerminal(!currentTerminal);}}>Trigger Terminal</button>
            {(currentTerminal)?temp:<div></div>}
          </div>
        </div>
        


      </div>
    </div>
  );
}

export default App;
