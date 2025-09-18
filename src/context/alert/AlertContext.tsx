import { createContext, useReducer } from "react";
import { alertReducer } from "./AlertReducer";
import type { State } from "./type";

type AlertContextType =  {
    setAlert: (msg:string, type:string) => Promise<void>
    alert: State
}


const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const AlertProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    //Set Alert
    const setAlert = async (msg:string, type:string) =>{
        dispatch({
            type: "SET_ALERT",
            payload: {msg, type}
        })
        setTimeout(() => dispatch({type: "REMOVE_ALERT"}), 3000);
    }

    return(
        <AlertContext.Provider value={{alert: state, setAlert}}>
            {children}
        </AlertContext.Provider>
    )
} 

export default AlertContext