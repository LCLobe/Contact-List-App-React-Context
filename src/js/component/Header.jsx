import React from "react";

const Header = ()=>{

    return (
        <div className="d-flex justify-content-around my-2">
            <h1>LCLobe's Agenda</h1>   
            <button type="button" className="btn btn-success" ="modal" data-bs-target="#exampleModal">
            Add new contact
            </button>
        </div>
    )
}

export default Header;