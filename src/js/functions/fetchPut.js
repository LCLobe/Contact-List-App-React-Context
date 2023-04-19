import popAlert from "./popAlert.js";

const fetchPut = (databaseOrigin, objectToPost, idToUpdate) =>{

    return fetch(databaseOrigin+idToUpdate, {
        method: 'PUT',
        body: JSON.stringify(objectToPost),
        headers:{
            'Content-Type': 'application/json'
    }
    })
    .then(res => {
        //if (res.msg) throw Error(res.statusText);
        return res.json();
    })
    .then(response => popAlert("Contact updated" , "primary"))
    .catch(error => console.error(error));
}

export default fetchPut;