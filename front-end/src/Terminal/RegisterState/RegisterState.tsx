import React, {FormEvent }  from 'react'
import {validTerminalInput} from '../validTerminalInput/validTerminalInput';
import {defaultTrigger} from '../DefaultState/defaultState'
import {stateInterface} from '../stateInterface/stateInterface'

let globalProps:stateInterface;
export const RegisterState = (props:stateInterface):JSX.Element =>{
    globalProps = props;
    let validTerminalInputProps = {
        defaultString:props.defaultString,
        setTerminalInput:props.setTerminalInput
    }
    return <form onSubmit={registerSubmit} autoComplete='off'>
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
const addLines = (lines:string[]) => {
    let tempLines = [...globalProps.lines]
    lines.map((line)=>{return tempLines.push({content:line,userInput:true})});
    globalProps.setLines(tempLines);
}

let registerCreds = [false,false]
export const registerSubmit = (e:FormEvent) =>{
    let input = globalProps.terminalInput;
    e.preventDefault();
    globalProps.setTerminalInput(globalProps.defaultString);
    if(!registerCreds[0]){
        registerCreds[0] = true;
        console.log("Username is: " + input)

        let temp = globalProps.credentials
        temp.username = input;
        globalProps.setCredentials(temp)

        addLines(["‌‌ ","Enter Password"])
    }
    else if(!registerCreds[1]){
        registerCreds[1] = true;

        let temp = globalProps.credentials
        temp.password = input;
        temp.loggedIn = true;
        globalProps.setCredentials(temp)
        addLines(["‌‌ ","Registration Succesfull Welcome " + globalProps.credentials.username + "!","‌‌ "])
        defaultTrigger()
    }
}
export const registerTrigger = () =>{
    globalProps.setTerminalStateIndex(3);
    globalProps.setDefaultString("");

    let tempLines = [...globalProps.lines]
    tempLines.push({content:globalProps.terminalInput,userInput:false})

    console.log("Entered Register State")

    if(!globalProps.credentials.loggedIn){
        tempLines.push({content:"Welcome to the User Registration Portal",userInput:false});
        tempLines.push({content:"Connecting to server ...",userInput:false})
        tempLines.push({content:"Please Enter Username:",userInput:false})
        globalProps.setLines(tempLines);
        globalProps.setTerminalInput("");
    }
    else{
        tempLines.push({content:"*ERROR* already logged in as " + globalProps.credentials.username,userInput:false});
        tempLines.push({content:"Exiting...",userInput:false});
        globalProps.setLines(tempLines);
        defaultTrigger();
    }
}
export default RegisterState;