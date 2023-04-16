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

    useEffect(()=>{
        const user = "LCLobe's_agenda";
        const database = 'https://assets.breatheco.de/apis/fake/contact/agenda/'+user;
        console.log(database);
        fetch(database)
        .then(response => {
            if (!response.ok) {
               throw Error(response.statusText);
            }
            // Read the response as json.
             return response.json();
             })
            .then(responseAsJson => {
            // Do stuff with the JSONified response
             console.log(responseAsJson);
             setContacts(responseAsJson);
             })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            }
        )

    },[])
    
    return (
        <Context.Provider value={{store, actions}}>
            {children}
        </Context.Provider>
        );

}

const useAppContext = ()=>useContext(Context);
export default useAppContext;