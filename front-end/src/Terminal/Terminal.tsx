import React, { useState,FormEvent }  from 'react'
import './Terminal.css'
interface Props{
    width: number;
    height: number;
    username:string;
    setUsername:React.Dispatch<React.SetStateAction<string>>;
}

let loginTrigger = false;

const Terminal: React.FC<Props> = (props) =>{
    const [lines,setLines] = useState([""]);
    const addLine = (newLine:string) =>{
        updateTerminalInput(defaultString);
        let tempLines = [...lines];
        tempLines.push(newLine);
        setLines(tempLines);


    }
    const addLineArr = (newLines:string[]) =>{
        const tempLines = [...lines];
        for(let i = 0; i < newLines.length; i++)
            tempLines.push(newLines[i]);
        setLines(tempLines);
    }

    const formSubmit = (e:FormEvent) =>{
        let newLine = terminalInput;
        e.preventDefault();
        updateTerminalInput(defaultString);
        addLine(newLine);
        
        newLine = newLine.substr(defaultString.length);
        let arrayLines = newLine.split(" ");
        console.log(newLine);
        console.log(arrayLines);
        if(loginTrigger){
            props.setUsername(terminalInput)
            setDefaultString(terminalInput + '@Terminal:~$ ');
            validTerminalInput("")
            validTerminalInput("")
            loginTrigger = false;
            console.log("Login Trigger username: " + terminalInput)
        }
        else
            commands(arrayLines);
        

    }

    const [defaultString,setDefaultString] = useState(props.username + '@Terminal:~$ ')

    const commands = (command:string[]) =>{
        switch(command[0]){
            case "user":
                switch(command[1]){
                    case "login":
                        login();
                    break;

                    case "logout":
                    console.log("")
                    break;

                    case "register":
                    console.log("")
                    break;
                }
            break;


        }
    }

    const login = () =>{
        setDefaultString("");
        updateTerminalInput("")
        console.log("Entered login")
        addLineArr(["Welcome to User Login Portal", 
                    "----------------------------------------",
                    "Enter Username"])

        
        loginTrigger = true;


    }

    const[terminalInput,updateTerminalInput] = useState(defaultString)
    const validTerminalInput = (input:string) =>{
        if(input.substr(0,defaultString.length) !== defaultString.substr(0,defaultString.length)){
            updateTerminalInput(defaultString)
            return;
        }
        else
            updateTerminalInput(input);       
    }
    return(
        <div 
            style={{width:props.width+"px", 
                    height:props.height+"px"}} 
            className='Terminal'>
            <div className='terminal_wrapper'>
                {lines.map((line:string,key)=>{
                    return (<p key={key}>{line}</p>)
                    })}
                <form onSubmit={formSubmit} autoComplete='off' id='formId'>
                    <input 
                        id="terminalNewLine"
                        onChange={(e)=>validTerminalInput(e.target.value)} 
                        value={terminalInput} 
                        className='terminal_input' 
                        spellCheck='false' 
                        autoComplete='off'
                    />
                </form>
            </div>
        </div>
    )
}
export default Terminal