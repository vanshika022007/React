let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type, e.target);
//     console.log(e.clientX, e.clientY);
//     console.log("button was clicked");
//     a++;
//     console.log(a);
// }

btn1.addEventListener("click",() => {
    console.log("button1 was clicked handler - 1");
});

btn1.addEventListener("click",() => {
    console.log("button1 was clicked handler - 2");
});

const handler3 = () => {
    console.log("button1 was clicked handler - 3")};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click",() => {
    console.log("button1 was clicked handler - 4");
});

btn1.removeEventListener("click", handler3);

let div = document.querySelector(".div");
div.onmouseover = (e) => {
    console.log(e);
    console.log(e.type, e.target);
    console.log(e.clientX, e.clientY);
    console.log("div was hovered on");
}

let mode = "light";
let body = document.querySelector("body");
let btnMode = document.querySelector(".mode");
btnMode.addEventListener("click",  () => {
    if (mode == "light"){
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }

    else{
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});

//objects and protoypes
const employee = {
    calcTax(){
        console.log("Salary rate is 10%");
    }
}

const karanArjun1 = {
    salary: 50000,
    calcTax (){
        console.log("Salary rate is 20%");
    }
}

const karanArjun2 = {
    salary: 50000
}


const karanArjun3 = {
    salary: 50000
}


karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;

//classes and objects
class ToyotaCar{
    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
    
    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar("fortuner",10);
console.log(fortuner);
// fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);
// lexus.setBrand("lexus");

//inheritance
class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{}

let obj = new Child();

class Person{
    constructor(name){
        console.log("enter parent constructor");
        this.species = "Homo Sapiens";
        this.name = name;
    }

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

    work(){
        console.log("do nothing");
    }
}

//child class work will be invoked
//Method Overriding
class Engineer extends Person{
    constructor(branch,name){
        //to invoke the constructor of child class we first need to invoke the function of parent class by using super()
        console.log("enter child constructor");
        super(name);
        this.branch = branch;
        //before exiting the child constructor we need to invoke parent constructor by super()
        console.log("exit child constructor");
    }

    
    work(){
        super.eat();
        console.log("solve problems, build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("treatPatients");
    }
}

let Person1 = new Person();
let vanshikaObj = new Engineer("CS","Vanshika");
let ayushObj = new Doctor();

//try-catch
let a = 5;
let b = 10;
console.log("a = ",a);
console.log("b = ",b);
console.log("a + b = ",a+b);
try{
    console.log("a + b = ",a+c);
}
catch(err){
    console.log(err);
}
console.log("a + b = ",a+b);
console.log("a + b = ",a+b);

setTimeout(() => {
    console.log("hello");
}, 4000);

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 5000);
    });
}

getData(1).then(() => {
    getData(2).then((res) => {
        console.log(res)
    })
})