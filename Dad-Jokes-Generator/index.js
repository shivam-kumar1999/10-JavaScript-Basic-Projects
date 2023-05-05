const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");

const apiKey="O0msUGPJv+LkGnki4gcR/w==nebV5uH2EjTnigMB";

const options={
    method: "GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};

const apiURl="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async  function getJoke(){

    jokeEl.innerText= "Updating..."
    


    const response= await fetch(apiURl, options);
    const data= await response.json();

     
    jokeEl.innerText= data[0].joke;
}

btnEl.addEventListener("click", getJoke);


