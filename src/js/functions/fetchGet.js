const fetchGet = (databaseOrigin, localSetter) =>{

    fetch(databaseOrigin)
        .then(response => {
            if (!response.ok) {
               throw Error(response.statusText);
            }
            // Read the response as json.
             return response.json();
             })
            .then(responseAsJson => {
            // Do stuff with the JSONified response
             console.log(responseAsJson);
             localSetter(responseAsJson);
             })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            }
        )
}

export default fetchGet;