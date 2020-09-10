import * as http from 'http'
const result = document.getElementById("result");

export default class Request {

  public query(url: string, params: Map<string, string>) {
    http.get(url + this.encode(params), (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        if (result != null) {
          result.textContent = data;
        }
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  }

  private encode(params: Map<string, string>) {
    let encoded = "?"
    params.forEach((value: string, key: string) => {
      encoded += key + "=" + value + "&";
    });
    return encoded.substring(0, encoded.length - 1);
  }
}

