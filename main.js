// skapandet av HTML.
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

let addbutton = document.createElement("button");
div.appendChild(addbutton);
addbutton.innerHTML = "Add to list";
addbutton.id = "add";

let sortbutton = document.createElement("button");
div.appendChild(sortbutton);
sortbutton.innerHTML= "Sort A-Z";
sortbutton.id = "sort";

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


//Skapandet av klasser

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

// Anropningar av funktioner:

let add = document.getElementById("add");
add.addEventListener("click", addToList);
sort.addEventListener("click", sortList);
input.addEventListener("keydown", pressEnter);

createHtml();


function pressEnter (e) {
    if (e.keyCode == "13"){
        e.preventDefault();
        addToList();
}
}


function createHtml() {
    ul.innerHTML= "";
    for (let i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        let cross = document.createElement("a");
        let p = document.createElement("p");
        li.appendChild(p);
        cross.innerHTML = "&times;";
        cross.id = "delete";
        if (list[i].checked === true) {
            p.id = "checked";
        }
        p.innerHTML += list[i].task;
        li.appendChild(cross);
        cross.addEventListener("click", () => {
            deleteItem (i);
        });
        p.addEventListener("click", () => {
            checkItem (i);
        });

    }
}

function checkItem (i) {
    list[i].checked = !list[i].checked;
    console.log(list[i].checked);
    updateLocalStorage();
}

function deleteItem (i) {
list.splice(i,1);
updateLocalStorage();
}


function addToList() {
        if (input.value.length == 0) {
        } else {
    let newTask = input.value;
    let listObject = new Todos (newTask);
    listObject.checked = false; 
    list.push(listObject);
    input.value = "";
    updateLocalStorage ();
}
}

function sortList () {
   list.sort((a, b) => {
      if (a.task.toLowerCase() > b.task.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
    updateLocalStorage();
}

function updateLocalStorage () {
    let listastext = JSON.stringify(list);
    localStorage.setItem("savedList", listastext);  
    createHtml();
}



// att göra:
// - strukturera i projeketet, selectors, event listeners och functios var för sig... 
// Kunna sortera ordningen på dina todos
