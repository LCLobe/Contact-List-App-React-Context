import React from "react";
import { useContext, createContext } from "react";
import { useEffect, useState } from "react";

const Context = createContext();

export const ContextProvider = ({children}) => {

    const [contacts, setContacts] = useState([]);

    const store = {
        contacts    
    };
    const actions ={
        setContacts
    };
    
    return (
        <Context.Provider value={{store, actions}}>
            {children}
        </Context.Provider>
        );

}

const useAppContext = ()=>useContext(Context);
export default useAppContext;