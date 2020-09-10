import Request from './request';

function send() {
  const descriptor = document.getElementsByClassName("param_descriptor");
  const params = new Map();
  for (var i = 0, len = descriptor.length; i < len; i++) {
    const key = descriptor[i].children[0] as HTMLInputElement;
    const value = descriptor[i].children[1] as HTMLInputElement;
    params.set(key.value, value.value);
  }
  const addressField = document.getElementById("address") as HTMLInputElement;
  if (addressField != null) {
    const url = addressField.value;
    new Request().query(url, params)
  }
}
