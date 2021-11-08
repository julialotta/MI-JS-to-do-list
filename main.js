window.onload = function () { 
html ();
document.getElementById("add").addEventListener("click", addStuff);
localStorages ();
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
let list = [];
let task = document.getElementById("todoinput");
list.push(task.value);
console.log(list);
let ul = document.getElementById("list");
//ul.innerHTML = task.value;
task.value = " ";
    list.forEach(function(n){
        ul.innerHTML += "<li>"+n+"</li>";
})
}

function localStorages() {
    console.log("hej");

}
