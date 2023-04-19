const fetchGet = (databaseOrigin, localSetter) =>{

    fetch(databaseOrigin)
        .then(response => {
            if (!response.ok) {
               throw Error(response.statusText);
            }
             return response.json();
             })
            .then(responseAsJson => {
             localSetter(responseAsJson);
             })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            }
        )
}

export default fetchGet;