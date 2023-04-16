import React from "react";
import { ReactDOM } from "react";

import useAppContext from "../store/Context.jsx";

const ContactCard = ({name, email, phone, address, image})=>{

    const {store, actions} = useAppContext();

    const handleDelete = (event)=>{
        console.log(event.currentTarget);
    }

    const handleEdit = ()=>{

    }
    return (
        <div className="card d-flex flex-row my-1">

                <div className="card-image-wrapper m-3">
                    <img src={image} className="card-img-top" alt="..."></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text ">
                        <i className="fas fa-map-marker-alt"></i> {address}
                    </p>
                    <p className="card-text">
                        <i className="fas fa-phone-alt"></i> {phone}
                    </p>
                    <p className="card-text">
                        <i className="fas fa-envelope"></i> {email}
                    </p>
                </div>
                <div className="card-buttons d-flex flex-row mx-2 justify-content-between">
                    <div  className="m-2">
                        <i className="fas fa-edit"></i>
                    </div>
                    <div  className="m-2" onClick={handleDelete}>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>

        </div>
    )
}

export default ContactCard;