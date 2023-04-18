const clearInput = (setter)=>{

    setter(prev=>{
        return {
            full_name: "",
            email: "",
            agenda_slug: prev.agenda_slug,
            address: "",
            phone: ""
        }
    })
}

export default clearInput;  