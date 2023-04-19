const fetchPut = (databaseOrigin, objectToPost, idToUpdate) =>{

    return fetch(databaseOrigin+idToUpdate, {
        method: 'PUT',
        body: JSON.stringify(objectToPost), // data can be a `string` or  an {object} which comes from somewhere further above in our application
        headers:{
            'Content-Type': 'application/json'
    }
    })
    .then(res => {
        //if (res.msg) throw Error(res.statusText);
        return res.json();
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error(error));
}

export default fetchPut;