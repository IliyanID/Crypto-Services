import React, { useState}  from 'react'
import {DefaultState} from './DefaultState/defaultState'
import {LoginState} from './LoginState/LoginState'
import {LogoutState} from './LogoutState/LogoutState'
import {RegisterState} from './RegisterState/RegisterState'
import './Terminal.css'

interface Props{
    width: number;
    height: number;
    credentials: {
        username: string;
        password: string;
        loggedIn: boolean;
    };
    setCredentials:React.Dispatch<React.SetStateAction<{
        username: string;
        password: string;
        loggedIn: boolean;
    }>>;
}


const Terminal: React.FC<Props> = (props) =>{
    const [lines,setLines] = useState([{content:"",userInput:false}]);
    const [defaultString,setDefaultString] = useState(props.credentials.username + '@Terminal:~$ ')
    const [terminalInput,setTerminalInput] = useState(defaultString);
    const [terminalStateIndex,setTerminalStateIndex] = useState(0);
    
    let stateProps = {
        defaultString:defaultString,
        setDefaultString:setDefaultString,
    
        lines:lines,
        setLines:setLines,
    
        terminalInput:terminalInput,
        setTerminalInput:setTerminalInput,

        setTerminalStateIndex:setTerminalStateIndex,

        credentials:props.credentials,
        setCredentials:props.setCredentials
    }
    const terminalState = [
        {
           state:"default",
           formJSX: DefaultState(stateProps)
        },
        {
            state:"login",
            formJSX: LoginState(stateProps)
        },
        {
            state:"logout",
            formJSX:LogoutState(stateProps)
        },
        {
            state:"register",
            formvJSX:RegisterState(stateProps)
        }
    ]
    let delay = 0
    return(
        <div 
            style={{width:props.width+"px", 
                    height:props.height+"px"}} 
            className='Terminal'>
            <div className='terminal_wrapper'>
                {   
                    lines.map((line,key)=>{
                        if(line.userInput){
                            delay = 0;
                            return (<p style={{animationDelay:".5s"}} key={key}>{line.content}</p>);
                        }
                        
                        else{
                            return (<p style={{animationDelay:(delay++) +"s"}} key={key}>{line.content}</p>)
                        }
                    })}
                {terminalState[terminalStateIndex].formJSX}
            </div>
        </div>
    )
}
export default Terminal;