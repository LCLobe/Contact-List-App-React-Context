const fetchPost = (databaseOrigin, objectToPost) =>{

    fetch(databaseOrigin, {
        method: 'POST', // or 'POST'
        body: JSON.stringify(objectToPost), // data can be a `string` or  an {object} which comes from somewhere further above in our application
        headers:{
            'Content-Type': 'application/json'
    }
    })
    .then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error(error));
}

export default fetchPost;