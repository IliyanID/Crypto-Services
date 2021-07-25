export interface stateInterface {
    defaultString:string;
    setDefaultString:React.Dispatch<React.SetStateAction<string>>;

    lines:string[];
    setLines:React.Dispatch<React.SetStateAction<string[]>>;

    terminalInput:string;
    setTerminalInput:React.Dispatch<React.SetStateAction<string>>;

    setTerminalStateIndex:React.Dispatch<React.SetStateAction<number>>;

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