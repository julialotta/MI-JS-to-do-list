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

document.getElementById("add").addEventListener("click", addStuff);

let list = ["Vara snäll", "Mata katten", "Studera Javascript"];
addCurrent();

function addCurrent() {
    for (let i =0; i < list.length; i++) {
    console.log(list[i]);
    ul.innerHTML += "<li>"+list[i]+"<a onclick='editItem("+i+")'><i>edit</i></a><a onclick='deleteItem("+i+")'>&times;</a></li>";
    }
}

function addStuff() {
list.push(input.value);
input.value = "";
myList ();
}

function myList () {
ul.innerHTML= "";
 list.forEach(function(n,i){
        ul.innerHTML += "<li>"+n+"<a onclick='editItem("+i+")'><i>edit</i></a><a onclick='deleteItem("+i+")'>&times;</a></li>";
    })
}

function deleteItem(i){
    list.splice(i,1);
    myList();
}

function editItem(i){
    let newValue = prompt("Ändrade du dig? Ingen fara");
    list.splice(i,1,newValue);
    myList();
}

// att göra:
// - strukturera i projeketet, selectors, event listeners och functios var för sig... 