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
let labelforprio = document.createElement("label");
labelforprio.for = "prioinput";
labelforprio.innerHTML = "Add prio, 1-3";
div.appendChild(labelforprio);
let prio = document.createElement("select");
div.appendChild(prio);
prio.id = "prioinput";
let priozero = document.createElement("option");
priozero.innerHTML = "select importance";
let prioone = document.createElement("option");
prioone.innerHTML = "Very important";
let priotwo = document.createElement("option");
priotwo.innerHTML = "A little bit important";
let priothree = document.createElement("option");
priothree.innerHTML = "Not that important...";
prioone.value = "1";
priotwo.value = "2";
priothree.value = "3";

prio.appendChild(priozero);
prio.appendChild(prioone);
prio.appendChild(priotwo);
prio.appendChild(priothree);

let addbutton = document.createElement("button");
div.appendChild(addbutton);
addbutton.innerHTML = "Add to list";
addbutton.id = "add";

let sortbutton = document.createElement("button");
div.appendChild(sortbutton);
sortbutton.innerHTML= "Sort by prio";
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
    constructor (task, checked, prio) {
    this.task = task;
    this.checked = checked;
    this.prio = prio;
    }
}

let task1 = new Todos ("Vara snäll", false, 1);
let task2 = new Todos ("Mata katten", false, 1);
let task3 = new Todos ("Koka kaffe", false, 1);

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
        if (list[i].prio == 1) {
            p.className = "prioone";
        } if (list[i].prio == 2) {
            p.className = "priotwo";
        } if (list[i].prio == 3) {
            p.className = "priothree";
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
        if ((input.value.length == 0) || (prio.value == "select importance") ) {
            alert("Du har inte fyllt i korrekt");
        } else {
    let newTask = input.value;
    let listObject = new Todos (newTask);
    let val = prio.value;
    listObject.checked = false; 

    if (val == "1") {
        listObject.prio = 1;
    } if (val == "2") {
         listObject.prio = 2;
    } if (val == "3") {
         listObject.prio = 3
    }

    list.push(listObject);
    input.value = "";
    prio.value = "";
    updateLocalStorage ();
}
}

function sortList () {
   list.sort((a, b) => {
      if (a.prio > b.prio) {
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
// fixa design
