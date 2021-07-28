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
          <div style={{color:(credentials.loggedIn)?"var(--terminalGreen":"var(--redOrange"}} className='welcomeMessage'>
            {(credentials.loggedIn)?'Logged In as ' + credentials.username:'User Not Logged In'}
          </div>
          <div className='headerButtons'>
            <button onClick={()=>{setCurrentTerminal(!currentTerminal);}}>{(currentTerminal)?"Hide":"Show"} Terminal</button>
            {(currentTerminal)?temp:<div></div>}
          </div>
        </div>
        


      </div>
    </div>
  );
}

export default App;
