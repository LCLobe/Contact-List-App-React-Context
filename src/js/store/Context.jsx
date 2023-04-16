import React from "react";
import { useContext, createContext } from "react";
import { useEffect, useState } from "react";
import fetchGet from "../functions/fetchGet.js";
import fetchPost from "../functions/fetchPost.js"; 
import fetchDelete from "../functions/fetchDelete.js";
import fetchPut from "../functions/fetchPut.js";
import handleDelete from "../functions/handleDelete.js";
import handleEdit from "../functions/handleEdit.js";
import handlePost from "../functions/handlePost.js";

const Context = createContext();

export const ContextProvider = ({children}) => {    

    const databaseOrigin ='https://assets.breatheco.de/apis/fake/contact/' ;
    const user = "LCLobe's_agenda";
    const userAgenda = "agenda/"+user;
    const database = databaseOrigin+userAgenda;

    const [contacts, setContacts] = useState([]);

    const store = {
        databaseOrigin,
        user, 
        database,
        contacts    
    };
    const actions ={
        setContacts,
        fetchGet,
        fetchPost,
        fetchDelete,
        fetchPut,
        handleDelete,
        handleEdit,
        handlePost
    };

    useEffect(()=>{

        console.log(database);

        fetchGet(database, setContacts);

    },[])
    
    return (
        <Context.Provider value={{store, actions}}>
            {children}
        </Context.Provider>
        );

}

const useAppContext = ()=>useContext(Context);
export default useAppContext;