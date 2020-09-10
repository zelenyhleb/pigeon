// initializing empty param-divs array
const childs = [];
const target = document.getElementById("params");

function add() {
    target.appendChild(container());
    childs.push(container);
}

function remove() {
    if (childs.length > 0) {
        target.removeChild(childs[childs.length - 1])
        childs.pop();
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