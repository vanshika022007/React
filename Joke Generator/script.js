    const jokeButton = document.getElementById("get-joke");
    const container = document.getElementById("container");
    const stepA = document.getElementById('step1');

jokeButton.addEventListener("click",fetchJoke);

async function fetchJoke(){
    try{
        const res = await fetch("https://sv443.net/jokeapi/v2/joke/Any");
        const data = await res.json();
        const jokeEle = document.createElement('div');

        if (data.type == 'single'){
        jokeEle.textContent = data.joke;
        container.appendChild(jokeEle);
        }

        else{
        jokeEle.textContent = `${data.setup} ------ ${data.delivery}`;
        container.appendChild(jokeEle);
        }

    }
    catch(error){
        console.log(error);

    }
}