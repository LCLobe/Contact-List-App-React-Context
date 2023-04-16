const handlePost = ()=>{

    const myNewContact = {
        full_name,
        email,
        agenda_slug: store.user,
        address,
        phone
    }
    
    console.log("Post: ", store.databaseOrigin, myNewContact);
    actions.fetchPost(store.databaseOrigin, myNewContact );
    actions.fetchGet(store.database, actions.setContacts);

    return
}

export default handlePost;