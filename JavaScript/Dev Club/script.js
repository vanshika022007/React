// var num = "Vanshika";
// let name;
// name = "Mittal"
// const number = 8;
// console.log(num, name)
// console.log(number)
// let age;
// age = 19

// typeof"Vanshika";
// && = and 
// || = or

// if(age > 18 || age > 20){
//     console.log("Eligible to vote")
// }

// else if(age > 17 && age<18){
//     console.log("Not eligible to vote")

// }

// else{
//     console.log("Not elgible to vote")
// }

// for (let i = 100; i>0; i--){
//     console.log(i);
// }

// // var x = 100;

// if(x>10){
//  x = 60;
//  console.log(x);
//}

// console.log(x);

// function func(){
//     console.log(5);
//}

// console.log(func)

// func = ()=>{
//     console.log(5)}

// func()
// console.log(func)

// var funci = ()=>{
//     console.log(5)
// }

// funci()
// console.log(funci)

// alert("Hello");
// confirm("Hi");

// var conf = confirm("Hello");
// alert(conf);

// var input = prompt("What's your name");
// alert(input);

// var input1 = prompt("Give a number");
// alert(input1);

// var input2 = prompt("Give another number");
// alert(input2);

// var input3 = prompt("Give the operation");
// alert(input3)

// alert(input1, input2, input3);

// var myname = prompt("What is your name?");
// alert(`Hi, my name is ${myname}`);

// var conf1 = prompt("Give a number");
// var conf2 = prompt("Give another number");

// alert(Number(conf1) + Number(conf2));

// console.log(expression.split("+"));
// var conf2 = conf1.split("+");

function calculate(){
    let userinput = document.getElementById("expression").value;

    if(userinput.includes("+")){
        var conf2 =userinput.split("+");
        let output = Number(conf2[0]) + Number(conf2[1]);
        document.getElementById("kuchbhi").innerHTML = output;
        console.log(Number(conf2[0]) + Number(conf2[1]));
    }

    else if(userinput.includes("-")){
        var conf2 = userinput.split("-");
        let output = Number(conf2[0]) - Number(conf2[1]);
        document.getElementById("kuchbhi").innerHTML = output;
        console.log(Number(conf2[0]) - Number(conf2[1]));
    }

    else if(userinput.includes("/")){
        var conf2 = userinput.split("/");
        let output = Number(conf2[0]) / Number(conf2[1]);
        document.getElementById("kuchbhi").innerHTML = output;
        console.log(Number(conf2[0]) / Number(conf2[1]));
    }

    else if(userinput.includes("*")){
        var conf2 = userinput.split("*");
        let output = Number(conf2[0]) * Number(conf2[1]);
        document.getElementById("kuchbhi").innerHTML = output;
        console.log(Number(conf2[0]) * Number(conf2[1]));
    }

    else{
        console.log("Invalid Operation");
    }
}