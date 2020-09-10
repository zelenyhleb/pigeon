function send() {
    const descriptor = document.getElementsByClassName("param_descriptor");
    const params = new Map();
    for (var i = 0, len = descriptor.length; i < len; i++) {
        params.set(descriptor[i].children[0].value, descriptor[i].children[1].value);
    }
    const url = document.getElementById("address").value;
    query(url, params)
}

