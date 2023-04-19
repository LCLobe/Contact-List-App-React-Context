import React from "react";
import { useContext, createContext } from "react";
import { useEffect, useState } from "react";
import fetchGet from "../functions/fetchGet.js";
import fetchPost from "../functions/fetchPost.js"; 
import fetchDelete from "../functions/fetchDelete.js";
import fetchPut from "../functions/fetchPut.js";
import clearInput from "../functions/clearInput.js";

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
    const [tempID, setTempID] = useState(-1);
    const [editMode, setEditMode] = useState(false);

    const {full_name, email, address, phone}=inputData

    //FUNCTION
    const myGetContacts =()=>{
        
        return fetchGet(database, setContacts);

    }

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
        fetchPost(databaseOrigin, myNewContact )
        .then(()=>myGetContacts());
        clearInput(setInputData);
    }

    const handleDelete = (id)=>{
        
        return fetchDelete(databaseOrigin, id)
                .then(()=>myGetContacts());
    }

    const handlePostEdit = ()=>{

        const myEditedContact = {
            full_name,
            email,
            agenda_slug: user,
            address,
            phone
        }
        
        //console.log("Post: ", databaseOrigin, myNewContact);
        fetchPut(databaseOrigin, myEditedContact, tempID )
        .then(()=>myGetContacts());
        clearInput(setInputData);
    }

    const handleEdit = (id)=>{

        //buscar en store.contacts (array) el contacto con la id y meterlos en el objeto
        const found = contacts.find(element => element.id == id);
        const myContact = {
            full_name: found.full_name,
            email: found.email,
            agenda_slug: user,
            address: found.address,
            phone: found.phone
        }
        //meterlos en set input data
        setInputData(myContact);
        //abrir el modal se hace con las propiedades {data-bs-toggle="modal" data-bs-target="#exampleModal"} en el boton
        setTempID(id);
        setEditMode(true);
        
    }

    const handleExitEditMode = ()=>{

        return setEditMode(false);

    }


    //FLUX DEFINITION
    const store = {
        databaseOrigin,
        user, 
        database,
        contacts,
        inputData,
        tempID,
        editMode  
    };
    const actions ={
        setContacts,
        setInputData,
        setTempID,
        fetchGet,
        myGetContacts,
        fetchPost,
        fetchDelete,
        fetchPut,
        handleDelete,
        handlePostEdit,
        handlePost,
        handleEdit,
        clearInput, 
        handleExitEditMode
    };

    //USEEFFECT
    useEffect(()=>{

        myGetContacts();

    },[])
    
    return (
        <Context.Provider value={{store, actions}}>
            {children}
        </Context.Provider>
        );

}

const useAppContext = ()=>useContext(Context);
export default useAppContext;