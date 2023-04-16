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

    //ENV
    const databaseOrigin ='https://assets.breatheco.de/apis/fake/contact/' ;
    const user = "LCLobe's_agenda";
    const userAgenda = "agenda/"+user;
    const database = databaseOrigin+userAgenda;

    //USESTATE
    const [contacts, setContacts] = useState([]);
    const [inputData, setInputData] = useState({
        full_name: "",
        email: "",
        agenda_slug: user,
        address: "",
        phone: ""
    })
    const {full_name, email, address, phone}=inputData

    //HANLDES
    const handlePost = ()=>{

        const myNewContact = {
            full_name,
            email,
            agenda_slug: user,
            address,
            phone
        }
        
        //console.log("Post: ", databaseOrigin, myNewContact);
        fetchPost(databaseOrigin, myNewContact );
        fetchGet(database, setContacts);
    }


    //FLUX DEFINITION
    const store = {
        databaseOrigin,
        user, 
        database,
        contacts,
        inputData    
    };
    const actions ={
        setContacts,
        setInputData,
        fetchGet,
        fetchPost,
        fetchDelete,
        fetchPut,
        handleDelete,
        handleEdit,
        handlePost
    };

    //USEEFFECT
    useEffect(()=>{

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