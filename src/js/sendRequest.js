const https = require('https');

function query(url, params) {
    https.get(url + params(params), (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            console.log(JSON.parse(data).explanation);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

function params(params) {
    let encoded = "?"
    for (const [key, value] of params) {
        encoded += key + "=" + value + "&";
    }
    return encoded.substring(0, encoded.length - 2);
}

export { query }