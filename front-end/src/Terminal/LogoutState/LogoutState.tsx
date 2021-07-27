import React, {FormEvent }  from 'react'
import {validTerminalInput} from '../validTerminalInput/validTerminalInput';
import {defaultTrigger} from '../DefaultState/defaultState'
import {loginTrigger} from '../LoginState/LoginState'
import {stateInterface} from '../stateInterface/stateInterface'

let globalProps:stateInterface;
export const LogoutState = (props:stateInterface):JSX.Element =>{
    globalProps = props;
    let validTerminalInputProps = {
        defaultString:props.defaultString,
        setTerminalInput:props.setTerminalInput
    }
    return <form onSubmit={loginoutSubmit} autoComplete='off'>
                <input 
                    id="terminalNewLine"
                    onChange={(e)=>validTerminalInput(validTerminalInputProps,e.target.value)} 
                    value={props.terminalInput} 
                    className='terminal_input' 
                    spellCheck='false' 
                    autoComplete='off'
                />
            </form>
}

export const loginoutSubmit = (e:FormEvent) =>{
    e.preventDefault();
}
export const logoutTrigger = () =>{
    globalProps.setTerminalStateIndex(2);
    globalProps.setDefaultString("");

    let tempLines = [...globalProps.lines]
    tempLines.push({content:globalProps.terminalInput,userInput:false})

    if(globalProps.credentials.loggedIn){
        tempLines.push({content:"Welcome to User Login Portal",userInput:false});
        tempLines.push({content:"Connecting to server ...",userInput:false})
        tempLines.push({content:"Logging User Out",userInput:false})
        globalProps.setLines(tempLines);
        globalProps.setTerminalInput("");

        let temp = globalProps.credentials;
        temp.username = "guest";
        temp.password = ""
        temp.loggedIn = false;
        globalProps.setCredentials(temp);
        defaultTrigger();
    }
    else{
        tempLines.push({content:"*ERROR* user is not logged in ",userInput:false});
        tempLines.push({content:"Entering Login Portal",userInput:false});
        globalProps.setLines(tempLines);
        loginTrigger()
    }
    
}
export default LogoutState;