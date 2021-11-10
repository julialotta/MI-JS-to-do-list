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
h2.innerHTML = "My list:";

let ul = document.createElement("ul");
divContainer.appendChild(ul);
ul.className = "list";
ul.id = "list";


let footer = document.createElement("footer");
document.body.appendChild(footer);
let footerP = document.createElement("p");
footer.appendChild(footerP);
footerP.innerHTML = "This app is created by Julia-Lotta";

let add = document.getElementById("add");
add.addEventListener("click", addStuff);
add.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        add.addStuff();
    }
});


class Todos {
    constructor (task, checked) {
    this.task = task;
    this.checked = checked;
    }
}

let task1 = new Todos ("Vara snäll", false);
let task2 = new Todos ("Mata katten", false);
let task3 = new Todos ("Koka kaffe", false);

let list = JSON.parse(localStorage.getItem("savedList")) || [task1, task2, task3];

createHtml();

function createHtml() {
    ul.innerHTML= "";
    for (let i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        let cross = document.createElement("a");
        cross.innerHTML = "&times;";
        cross.id = "delete";
        li.innerHTML += list[i].task + " "+ cross.outerHTML;
    }
document.getElementById("delete").addEventListener("click", deleteItem);

}

function deleteItem(i){
    list.splice(i,1);
    updateLocal ();
}


function addStuff() {
    let newTask = input.value;
    let listObject = new Todos (newTask);
    list.push(listObject);
    input.value = "";
    updateLocal ();
    console.log(list);
}

function updateLocal () {
    let listastext = JSON.stringify(list);
    localStorage.setItem("savedList", listastext);  
    createHtml();
}



// att göra:
// - strukturera i projeketet, selectors, event listeners och functios var för sig... 
// strukturea skapandet av <li> och ändra så att det är snyggare kod
// Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
// Kunna sortera ordningen på dina todos
