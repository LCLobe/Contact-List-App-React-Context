import React from "react";

import useAppContext from "../store/Context.jsx";
import ContactCard from "../component/ContactCard.jsx";

const ContactsView = ()=>{

    const {store, actions} = useAppContext();
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/330px-Dwayne_Johnson_2014_%28cropped%29.jpg'

    return (
        <div>
            {store.contacts.map((element)=>{
                return(
                    <ContactCard 
                        key={element.id}
                        name={element.full_name}
                        email={element.email} 
                        phone={element.phone} 
                        address={element.address}
                        image={image}
                    />
                )
            })}
        </div>
    )
}

export default ContactsView;