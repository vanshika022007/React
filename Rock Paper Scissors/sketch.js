let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissors = document.getElementById("s");
let body = document.querySelector("body");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let reset = document.querySelector("#reset");
const options = [rock, paper, scissors];
let div;

rock.addEventListener("click", () => {
    if (div != undefined){
        div.remove();
    }
    const choices = Math.floor(Math.random()*3);
    let compChoice = options[choices];
    console.log(compChoice);
    if (compChoice === rock){
        div = document.createElement("div");
        div.innerHTML = `<button class = "ans">No one wins, computer also chose rock!</button>`;
        body.appendChild(div);
    }

    else if (compChoice === paper){
        div = document.createElement("div");
        div.innerHTML = `<button class = "ans">You lose, computer chose paper!</button`;
        compScore.innerText = Number(compScore.innerText) + 1;
        body.appendChild(div);
    }

    else{
        div = document.createElement("div");
        div.innerHTML = `<button class = "ans">You win, computer chose scissors!</button>`;
        userScore.innerText = Number(userScore.innerText) + 1;
        body.appendChild(div);
    }
})

paper.addEventListener("click", () => {
    if (div != undefined){
        div.remove();
    }

    const choices = Math.floor(Math.random()*3);
    let compChoice = options[choices];
    console.log(compChoice);
    if (compChoice === rock){
        div = document.createElement("div");
        div.innerHTML = `<button class = "ans">You win, computer chose rock!</button>`;
        userScore.innerText = Number(userScore.innerText) + 1;
        body.appendChild(div);
    }

    else if (compChoice === paper){
        div = document.createElement("div");
        div.innerHTML = `<button class = "ans">No one wins, computer also chose paper!</button>`;
        body.appendChild(div);
    }

    else{
        div = document.createElement("div");
        div.innerHTML = `<button class = "ans">You lose, computer chose scissors!</button>`;
        compScore.innerText = Number(compScore.innerText) + 1;
        body.appendChild(div);
    }
})

scissors.addEventListener("click", () => {
    if (div != undefined){
        div.remove();
    }

    const choices = Math.floor(Math.random()*3);
    let compChoice = options[choices];
    console.log(compChoice);
    if (compChoice === rock){
        div = document.createElement("div");
        div.innerHTML = `<button class = "ans">You lose, computer chose rock!</button>`;
        compScore.innerText = Number(compScore.innerText) + 1;
        body.appendChild(div);
    }

    else if (compChoice === paper){
        div = document.createElement("div");
        div.innerHTML = `<button class = "ans">You win, computer chose paper!</button>`;
        userScore.innerText = Number(userScore.innerText) + 1;
        body.appendChild(div);
    }

    else{
        div = document.createElement("div");
        div.innerHTML = `<button class = "ans">No one wins, computer also chose scissors!</button>`;
        body.appendChild(div);
    }
})

reset.addEventListener("click", () => {
    userScore.innerText = 0;
    compScore.innerText = 0;
    if (div != undefined){
        div.remove();
    }
})