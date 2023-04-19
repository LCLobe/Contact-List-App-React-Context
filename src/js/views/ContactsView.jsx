import React, {useEffect}  from "react";

import useAppContext from "../store/Context.jsx";
import ContactCard from "../component/ContactCard.jsx";

const ContactsView = ()=>{

    const {store, actions} = useAppContext();
    const {contacts, image, database} = store;
    const {fetchGet, setContacts} = actions; 

    return (
        <div>
            {contacts.length ? 
                contacts.map((element)=>{
                    return(
                        <ContactCard 
                            key={element.id}
                            id={element.id}
                            name={element.full_name}
                            email={element.email} 
                            phone={element.phone} 
                            address={element.address}
                            image={image}
                        />
                    )
                })
                : null 
            }
        </div>
    )
}

export default ContactsView;