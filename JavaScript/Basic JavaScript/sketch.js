console.log("Hi Newton School of Technology!");

//var variable can be re-declared and updatedA global scope variable
var myName = "Vanshika";

//let variable cannot be re-declared(can be declared if it is inside a  block as it is a block scope variable) but can be updated
let fullName = "Vanshika";

//const variable cannot be re-declared and cannot be updated. A block scope variable
const Fname = "Vanshika";
console.log(typeof Fname);

//primitive date types
//bigint(not used much) adds n in the end while printing
//symbol also not used much
let x = BigInt("123");
let y = Symbol("Hello!");

console.log(x);
console.log(y);
// let a = 24;
// var a = 20;
// cannot re-declare block scope variable.
//non-primitive date types- objects store collection of values

//new value to constant object key can be assigned, to generate error whole object should be changed, only keys can be changed that will not produce any error

const student = {
    name: "Vanshika Mittal",
    marks: 99,
    CGPA: 10,
    isPass: true
};
student["marks"] = student["marks"] + 1
console.log(student, typeof student, student["CGPA"], student.marks);

//Unary Operator ++ -- are of two types pre operator and post operator
a = 5;
console.log("a =",a);
//here it adds the value by 1 first and prints it
console.log("++a =",++a);

//here it prints the value and then adds the value by 1 and in next a the value is changed
b = 5;
console.log("b++ =",b++);
console.log("b =",b);

//equal to and type === (checks data type) equal to == (does not check data type) not equal to and type !==
//Logical operators logical and(&&)--> same as and in python,logical(||-->pipe symbol)--> same as or in python,logical(!)--> same as not in python

//if() {known as block} else{}
let age = 17;
if (age > 18) {
    console.log("Adult");
}
else{ 
    console.log("No");
}
// if() condition(only valis for 1 condition otherwise use block syntax
if (age > 18) console.log("Adult");
else console.log("No");
//Ternary operator--> condition(a)?b:c b is printed if condition is true otherwise c is printed
result = age > 18 ? "Adult" : "Not adult";
console.log(result);
//switch statement(not used frequently)
let fruits = "Oranges";
switch (fruits){
    case 'Oranges':
        console.log("Oranges are 50 ruppees per kg.")
        break;
        
    case 'Mangoes':
        console.log("Mangoes are 50 ruppees per kg.")
        break;

    case 'Apples':
        console.log("Apples are 50 ruppees per kg.")
        break;
        //break is there because switch statement considers all the statements after one works and the last onw works finally, so to only make the right one work break is used

    default:
        console.log(`Sorry, we are out of ${fruits}.`)
    //works like else.
}
alert("Learning JavaScript!");

let input = prompt("Enter a number");
if (input%5 === 0){
    console.log("Yes", input, "is a multiple of 5.");
}
else{
    console.log("No", input, "is not a multiple of 5.");
}

let score = 60;
// if (grade >= 80 && grade <= 100){
//     console.log("Grade is --> A.");
// }
// else if (grade >= 60 && grade < 80){
//     console.log("Grade is --> B.");
// }
// else if (grade >= 40 && grade < 60){
//     console.log("Grade is  --> C.");
// }
// else if (grade >= 20 && grade < 40){
//     console.log("Grade is --> D.");
// }
// else{
//     console.log("Grade is --> E.");
// }

if (score >= 80 && score <= 100){
    grade = "A";
} else if (score >= 60 && score < 80){
    grade = "B";
} else if (score >= 40 && score < 60){
    grade = "C";
} else if (score >= 20 && score < 40){
    grade = "D";
} else{
    grade = "E";
}
console.log("According to your marks, your grade is", grade,".");

//not like python i->(1,5) means i will go from 1 to 5
for (let i = 1;i <= 5;i++){
    console.log("Vanshika");
}
let e = 0;
for (let j = 1;j <= 5;j++){
    e+=j;
}
console.log(b);

let i = 1;
while (i<=5 /*(stopping condition)*/){
    console.log("Vanshika");
    i++;
}

//do while loop, will atleast run 1 time because in this stopping condition is checked at the end
do{
    console.log("Vanshika");
    i++;
}while(i<=5)/*stopping condition*/;

//for-of loop
language="JavaScript"
size = 0
for (let k of language){
    console.log("k =",k);
    size++;
}
console.log("String size is",size);

//for-in loop
let student1 = {
    fn: "Vanshika Mittal",
    CGPA: 10,
    college: "Newton"
}

for (let k in student1){
    console.log("key =",k,"value =",student1[k]);
}

for (let i=0; i<=100; i+=2){
    console.log(i);
}

for (let l=0; l<=100; l++) {
    if (l%2 !== 0){
    console.log(l);
    };
}

let gameNum = 25;
let userNum = prompt("Guess the number:");
// for (let i = 1; i>=0; i++){
// if (userNum == gameNum){
//     console.log("Yes");
//     break;
// } else{
//     userNum = prompt("Guess the number:");
// }}
while (userNum != gameNum){
   userNum = prompt("You've guessed the wrong number, guess again:");
}
console.log("Congratulations!, you've guessed the correct number.");

let str = "Vanshika Mittal";
console.log(str.length);
console.log(str[1]);

//Template Literals
let str2 = `This is template literal ${str}`;
console.log(str2);
let obj = {
    pen: 5,
    price: 50
};
let output = `The price of ${obj.pen} pens is ${obj.price} ruppees.`;
console.log(output);

//\t is counted as 1 while counting the length of string
let str3 = "    Newton\tSchoo l    ";
console.log(str3.length);

console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

console.log(str3.trim());

//inclusive so 3 will not be included and indices start from 0, if we do not provide end value then then all the values from start are taken
let str4 = str.slice(0,3);
console.log(str4);

let str5 = str.concat(str3);
console.log(str5);

//if the words are repeated then only the first one will be replaced, others will not be replaced
let str6 = str3.replace(" l","l");
console.log(str6);

let str7 = str.charAt(1);        
console.log(str7);

//original string is always immutable(cannot directly change something at a certain index value), to change it we need to create a new string and store the value in it

//array is a specail type of object, it is a little sifferent but type of array is object only. array is mutable
let u = prompt("Enter your full name-");
console.log(`@${u}${u.length}`);

let marks = [100,98,94,95,93];
console.log(marks);
size = marks.length;

for (let l = 0; l<size;l++){
    console.log(marks);
}

for (let mark of marks){
    console.log(mark);
}

let sum = 0;
for (let mark of marks){
    sum += mark;
}

let avg = sum/(marks.length);
console.log("Average marks of the class is",avg);

let prices = [250, 645, 300, 900, 50];

//for of loop will not change the array as it only gets the value it does not get the index so it will not make any change in the array but we can make the change indirectly
let i1 = 0;
for (let price of prices){
    console.log(`value at ${i1}=${price}`);
    prices[i1] = price - (price/10);
    console.log(`Price after offer is ${prices[i1]}`);
    i1++;
};
console.log(prices);

//for loop
for (let i2 = 0; i2<prices.length; i2++){
    prices[i2] -= prices[i2]*0.1;
};

console.log(prices);

//array methods-(change and new array)
let foodItems = ["potato", "apple", "litchi", "tomato"];
//change array
// foodItems.push("chips");

//change array
// foodItems.pop();
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);

//new array
console.log(foodItems.toString());
console.log(marks.toString());

//new array
let marvelHeroes = ["thor", "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];
let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(heroes);

//change array
marvelHeroes.unshift("antman");
let shift = marvelHeroes.shift();
console.log(marvelHeroes);
console.log(shift);

//new array
//starting non inclusive
console.log(heroes.slice(2,4));
console.log(heroes.slice()); //used to make copy of array(whole array)

//change array
let arr = [1, 2, 3, 4, 5, 6, 7];

//arr.splice(2, 2, 101, 102);

//Add Element
//2 is the index from which it has to start, 0 is for delete and 101 is for add or replace
//arr.splice(2, 0, 101);

//Delete Element
//arr.splice(3, 1);

//Replace Element 
//arr.splice(3, 1, 101);

//acts like slice and gives all the values from the index 4 and understands that start from index 4 and delete all the values from index 4 so in original array all the values starting from index 4 are deleted
arr.splice(4);

//does nothing
arr.splice();

let array = ["Bloomerg","Microsoft","Uber","Google","IBM","Netflix"];
array.splice(0,1);
//or array.shift();
array.splice(1,1,"Ola");
array.push("Amazon");
console.log(array);

function myFunction(){
    console.log("Hi Functions");
}

myFunction();

//in JavaScript you cannot multipy a string with number
function sum2(x,y){
    s = x+y;
    return s;
}

let sum1 = sum2(3,4);
console.log(sum1);

//function
(a,b)=>{
    console.log(a+b);
}

//store in variable
const arrowSum = (a,b) =>{
    console.log(a+b);
};
console.log(arrowSum);
//gives -->
// const arrowSum = (a,b) =>{
//     console.log(a+b);
// };

//acts as function gives the value of function
console.log(arrowSum(3,4));

const arrowMul = (a,b) => {
    return (a*b);
};

//here the value is already getting stored in a variable so no need to store the value and then print it
console.log(arrowMul(3,4));

//const is not only way to store function we are just assigning a variable name to function so let and var can also beus

//for single line const a = () => functionWork;(no {})
let count = 0;
function stringFunc(string){
    for (let str of string){
        if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u"){
            count+=1;
        };
    }
    return count;
}

let vowels = stringFunc("Vanshika");
console.log(vowels);

let count1 = 0;
const strFunc = (string) =>{
    for (let str of string){
        if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u"){
            count1++;
        };
    }
    return count;
}

strFunc("aeiou");

//toUppercase is a method because the function is associated with object which is string
//functions can be passed as an parameter(known as callback function) and can also be returned

//forEach(only for arrays)
let array1 = ["pune", "delhi", "mumbai"];

array1.forEach(function printVal(val, idx, arr){
    console.log(val, idx, arr);
})

//same
array1.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
})

//functions which take another function as parameter or return another function they are known as higher order function and forEach is a higher order function
let num = [1, 2, 3, 4, 5];

num.forEach((num) => {
    console.log(num*num)
    // console.log(num**2);
})

//map is same as forEach it just creates a new array whereas forEach just performs a task
let newNum = num.map((val) => {
    return val;
})

console.log(newNum);

//filter filters some values and returns them in the new array
let newNum1 = num.filter((num1) => {
    return num1%2 === 0;
})

console.log(newNum1)

//for forEach and arrow functions you do not need to sonole functions after returning

//reduce is used to perform some operations on array and get 1 single value(like sum, avg, smallest, largest)
const array2 = [1, 2, 3, 4, 5]

//res is previous value, curr is current value
//res = 0, 1, 3, 6, 10, 15
const sum3 = array2.reduce((res, curr) => {
    return res + curr;
})
console.log(sum3);

const largest = array2.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
});
console.log(largest);

let marksStu = [70, 80, 50, 80, 90, 100];
const highest = marksStu.filter((marksS) => {
    return marksS > 90;
})

console.log(highest);

let Num = prompt("Enter a number")
let arrNum = [];
for (let it = 1; it <= Num; it++){
    arrNum[it-1] = it;
}

console.log(arrNum);

let sumArr = arrNum.reduce((prev,curr) => {
    return prev + curr;
});
console.log(sumArr);


let productArr = arrNum.reduce((prev,curr) => {
    return prev*curr;
});
console.log(productArr);