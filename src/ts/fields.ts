// initializing empty param-divs array
const children = new Array<HTMLElement>();
const target = document.getElementById("params");

function add() {
  if (target != null) {
    const container = element();
    target.appendChild(container);
    children.push(container);
  }
}

function remove() {
  if (target != null && children.length > 0) {
    target.removeChild(children[children.length - 1])
    children.pop();
  }
}

function element() {
  let container = document.createElement("div");
  container.setAttribute("class", "param_descriptor");
  container.appendChild(input("key"));
  container.appendChild(input("value"));
  return container;
}

function input(type: string) {
  let name = document.createElement('input');
  name.setAttribute("placeholder", "Parameter key");
  name.setAttribute("class", "param_input")
  name.setAttribute("id", type);
  return name;
}