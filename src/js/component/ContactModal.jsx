import React from "react";

import useAppContext from "../store/Context.jsx";
import handlePost from "../functions/handlePost.js";
import fetchPost from "../functions/fetchPost.js";

const ContactModal = ()=>{

    const {store, actions} = useAppContext();

    // const handlePost = ()=>{

    //     fetchPost(store.database, )
    // }

    return (
        <div className="modal-dialog modal-dialog-centered">   
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add a new contact</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="formGroupNameInput" placeholder="Full Name"></input>
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Email</label>
                            <input type="text" className="form-control" id="formGroupEmailInput" placeholder="Email"></input>
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="formGroupPhoneInput" placeholder="Phone"></input>
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Address</label>
                            <input type="text" className="form-control" id="formGroupAddressInput" placeholder="Address"></input>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={()=>{
                            
                            const newContact = {
                                full_name: document.getElementById("formGroupNameInput").value,
                                email: document.getElementById("formGroupEmailInput").value,
                                agenda_slug: store.user,
                                address:document.getElementById("formGroupPhoneInput").value,
                                phone: document.getElementById("formGroupAddressInput").value
                            };
                            
                            fetchPost(store.database,newContact );
                            actions.setContacts(prev => prev.concat(newContact));

                        }}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactModal;
