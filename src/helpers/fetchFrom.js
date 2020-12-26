const fetchFrom = (url, cb) => {
    fetch(url)
        .then(function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            } else {
                response.json().then(function (jsonResponse) {
                    cb(jsonResponse);
                });
            }
        })
        .catch(function (err) {
            console.log('Fetch Error', err);
        });
}

export default fetchFrom;