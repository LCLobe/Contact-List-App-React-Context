const fetchDelete = (databaseOrigin, idToDelete) =>{

    return fetch(databaseOrigin+idToDelete, {
        method: 'DELETE'
    })
    .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error(error));
}

export default fetchDelete;