import React, {FormEvent }  from 'react'
import {validTerminalInput} from '../validTerminalInput/validTerminalInput';
import {loginTrigger} from '../LoginState/LoginState'
import {logoutTrigger} from '../LogoutState/LogoutState'
import {registerTrigger} from '../RegisterState/RegisterState'

import {stateInterface} from '../stateInterface/stateInterface'

let globalProps:stateInterface;
export const DefaultState = (props:stateInterface):JSX.Element =>{
    globalProps = props;
    let validTerminalInputProps = {
        defaultString:props.defaultString,
        setTerminalInput:props.setTerminalInput
    }
    return <form onSubmit={defaultSubmit} autoComplete='off'>
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
export const defaultSubmit = (e:FormEvent) =>{
    let newLine = globalProps.terminalInput;
    e.preventDefault();
    globalProps.setTerminalInput(globalProps.defaultString);
    
    let tempLines = [...globalProps.lines]
    tempLines.push({content:newLine,userInput:true});
    globalProps.setLines(tempLines);
    
    newLine = newLine.substr(globalProps.defaultString.length);

    //Make array from string => remove empty entries => lowercase all entries
    let arrayLines = newLine.split(" ").filter((el)=>{return el !=="";}).map((el)=>el.toLocaleLowerCase()); 
    console.log(newLine);
    

    commands(arrayLines);
    

}
export const defaultTrigger = () =>{
    globalProps.setTerminalStateIndex(0);

    let tempDefaultLine = globalProps.credentials.username + '@Terminal:~$ ';
    globalProps.setDefaultString(tempDefaultLine);
    globalProps.setTerminalInput(tempDefaultLine);
}
export const commands = (command:string[]) =>{
    switch(command[0]){
        case "cls":
            globalProps.setLines([{content:"",userInput:true}])
        break;
        case "clear":
            globalProps.setLines([{content:"",userInput:true}])
        break;
        case "user":
            switch(command[1]){
                case "login":
                    console.log(command)
                    loginTrigger()
                break;

                case "logout":
                    console.log(command)
                    logoutTrigger()
                break;

                case "register":
                    console.log(command)
                    registerTrigger();
                break;

                default :
                    console.log("Unknown User");
                break;
                    
            }
        break;
        
        default :
            console.log("Unknown Command");
        break;


    }
}


export default DefaultState;