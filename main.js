window.onload = function () { 
html ();
document.getElementById("add").addEventListener("click", addStuff);
}

function html () {
let header = document.createElement("header");
document.body.appendChild(header);
let headline = document.createElement("h1");
header.appendChild(headline);
headline.innerHTML = "Stuff I need to do today";

let main = document.createElement("main");
document.body.appendChild(main);


let divContainer = document.createElement("div");
main.appendChild(divContainer);
divContainer.className = "container";

let div = document.createElement("div");
divContainer.appendChild(div);

let label = document.createElement("label");
div.appendChild(label);
label.innerHTML = "TO DO:";
label.setAttribute("for", "todoinput");
 //<label for="todoinput">TO DO:</label>

let input = document.createElement("input");
div.appendChild(input);
input.id = "todoinput";
input.className ="todoinput";
input.type ="text";
input.placeholder = "write stuff here..."

let button = document.createElement("button");
div.appendChild(button);
button.innerHTML = "Add to list";
button.id = "add";
button.type = "submit";


let h2 = document.createElement("h2");
divContainer.appendChild(h2);
h2.innerHTML = "My list:"

let ul = document.createElement("ul");
divContainer.appendChild(ul);
ul.className = "list";
ul.id = "list";


let footer = document.createElement("footer");
document.body.appendChild(footer);
let footerP = document.createElement("p");
footer.appendChild(footerP);
footerP.innerHTML = "This app is created by Julia-Lotta";

}

function addStuff() {
let list = document.createElement("li");
let task = document.getElementById("todoinput");
let ul = document.getElementById("list");
ul.appendChild(list);
list.innerHTML = task.value;
task.value = "";
}
