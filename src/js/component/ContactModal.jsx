import React from "react";

import useAppContext from "../store/Context.jsx";

const ContactModal = ()=>{

    const {store, actions} = useAppContext();
    const {full_name, email, address, phone} = store.inputData;
    const {editMode} = store;
    const {setInputData, handlePost, handlePostEdit, handleExitEditMode} = actions;
    
    return (
        <div className="modal-dialog modal-dialog-centered">   
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{editMode ? "Modify contact" : "Add a new contact"}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={editMode ? handleExitEditMode : undefined}></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="formGroupNameInput" 
                                    placeholder="Full Name"
                                    value={full_name}
                                    onChange={(e) => setInputData({ ...store.inputData, full_name: e.target.value })}>      
                                </input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="formGroupEmailInput" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setInputData({ ...store.inputData, email: e.target.value })}>
                                </input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">Phone</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="formGroupPhoneInput" 
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setInputData({ ...store.inputData, phone: e.target.value })}>
                                </input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="formGroupAddressInput" 
                                    placeholder="Address"
                                    value={address}
                                    onChange={(e) => setInputData({ ...store.inputData, address: e.target.value })}>
                                </input>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={editMode ? handleExitEditMode : undefined}>Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={editMode ? handlePostEdit : handlePost}>{editMode ? "Update contact" : "Create contact"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactModal;


//dismiss modal no deberia funcionar cuando el post ha dado fallo
