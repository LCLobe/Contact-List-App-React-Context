const fetchPost = (databaseOrigin, objectToPost) =>{

    //handlePostOK
    //handlelPostNOK
    
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
    .then(response => console.log('Success:', response))
    .catch(error => console.error(error));
}

export default fetchPost;