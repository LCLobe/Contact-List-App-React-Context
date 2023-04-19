import popAlert from "./popAlert.js";

const fetchDelete = (databaseOrigin, idToDelete) =>{

    return fetch(databaseOrigin+idToDelete, {
        method: 'DELETE'
    })
    .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
    })
    .then(response => popAlert("Contact deleted" , "primary"))
    .catch(error => console.error(error));
}

export default fetchDelete;