const fetchFrom = (url, cb, onErr) => {
    fetch(url)
        .then(function (response) {
            if (response.status !== 200) {
                const errString = 'Looks like there was a problem. Status Code: ' + response.status;
                console.log(errString);
                onErr(errString);
            } else {
                response.json().then(function (jsonResponse) {
                    cb(jsonResponse);
                });
            }
        })
        .catch(function (err) {
            console.log('Fetch Error', err);
            onErr(err);
        });
}

export default fetchFrom;