import React from "react";
import ReactModal from "react-modal";

const ContactModal = ()=>{

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
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name"></input>
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Email</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email"></input>
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Phone"></input>
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className="form-label">Address</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Address"></input>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactModal;
