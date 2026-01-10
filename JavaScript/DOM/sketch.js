//window is a global object all the code is inside it
//prints the window itself
console.log(window);

//both work the same
//prints hello which also comes inside window
console.log("hello");
//access of window's console
window.console.log("hello2");

//they are same we need not define window the code knows about window object and alert, prompt and many properties are part of window object
// window.alert("Hi")
// alert("Hi")

//DOM --> the HTML code can be accessed in Javascript and it is an object and that object is called document(which is a model(representation) of HTML code) and it is available in window object
//we can see the properties and methods of document object by console.dir(window.document)
//console.log(window.document) just prints the document object as an element

//in DOM every thing is a node which is an object

//access HTML in JavaScript
console.dir(window.document);
//printing 
console.log(window.document);

//childNodes --> nested nodes
//document.body.childNodes[3].innerText="Document Object Model"
//changes the heading
//DOM is used to do dynamic changes
//to access DOM elemnts we need to place script tag in body

//if id is invalid null will be there
let heading = document.getElementById("heading");
console.dir(heading);
console.log(heading);

let button = document.getElementById("myId");
console.dir(button);
console.log(button);

//returns HTML collections similar to array
//if class is invalid then empty collection will be there
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

let paras = document.getElementsByTagName("p");
console.dir(paras);

let firstElement = document.querySelector("p");
console.dir(firstElement);
console.log(firstElement.tagName);

//returns node list
let elements = document.querySelectorAll("p");
console.dir(elements);

let classEle = document.querySelectorAll(".heading");
console.dir(classEle);

//nodes --> text, comment, elements
//for div children are div and p but first child i text not div and last child is also text not div

let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);
console.log(div.innerHTML);

//we can also set the innerText and innerHTML dynamically
//button.textContent will show the hidden content

console.log(firstElement.innerText);
firstElement.innerText = firstElement.innerText + " Hi";

let divs = document.querySelectorAll(".box");
let idx = 0;

for (div of divs){
    div.innerText = `Unique value ${idx}`;
    idx++;
}

let h1 = document.querySelector("h1");

let id = h1.getAttribute("id");
console.log(id);

let name = h1.getAttribute("name");
console.log(name);

let h2 = document.querySelector("h2");
console.log(h2.setAttribute("class", "myName"));

let body = document.querySelector("body");
console.log(body.style);
body.style.backgroundColor ="rgb(162, 206, 245)";

let newBtn = document.createElement("button");
newBtn.innerHTML = "<i>Click me!</i>"
let btn = document.querySelector(".button");
// btn.append(newBtn);
// btn.prepend(newBtn);
// btn.before(newBtn);
btn.after(newBtn);

//classList to get the list and add, remove classes