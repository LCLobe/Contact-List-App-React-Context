import popAlert from "./popAlert.js";

const fetchPost = (databaseOrigin, objectToPost) =>{
    
    return fetch(databaseOrigin, {
        method: 'POST',
        body: JSON.stringify(objectToPost), 
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (res.msg) throw Error(res.statusText);
        return res.json();
    })
    .then(response => popAlert("Contact created" , "primary"))
    .catch(error => console.error(error));
}

export default fetchPost;