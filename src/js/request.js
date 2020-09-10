const https = require('http');
const result = document.getElementById("result");

function query(url, params) {
    https.get(url + encode(params), (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            result.textContent = data;
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

function encode(params) {
    let encoded = "?"
    for (const [key, value] of params) {
        encoded += key + "=" + value + "&";
    }
    return encoded.substring(0, encoded.length - 1);
}
