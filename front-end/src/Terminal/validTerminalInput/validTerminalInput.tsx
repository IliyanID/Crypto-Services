import React from 'react'

interface props{
    defaultString:string;
    setTerminalInput:React.Dispatch<React.SetStateAction<string>>;
}
export const validTerminalInput = (props:props,input:string):void =>{
    if(input.substr(0,props.defaultString.length) !== props.defaultString.substr(0,props.defaultString.length)){
        props.setTerminalInput(props.defaultString)
    }
    else
        props.setTerminalInput(input);       
}

export default validTerminalInput;
