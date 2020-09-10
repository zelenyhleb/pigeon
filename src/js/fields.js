// initializing empty param-divs array
const children = [];
const target = document.getElementById("params");

function add() {
    let element = element();
    target.appendChild(element);
    children.push(element);
}

function remove() {
    if (children.length > 0) {
        target.removeChild(children[children.length - 1])
        children.pop();
    }
}

function element() {
    let container = document.createElement("div");
    container.appendChild(input());
    container.appendChild(input());
    return container;
}

function input() {
    let name = document.createElement('input');
    name.setAttribute("placeholder", "Parameter key");
    name.setAttribute("class", "param_input");
    return name;
}