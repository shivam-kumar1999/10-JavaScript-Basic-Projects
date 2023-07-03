
const btnEl=document.getElementById("btn");

const animeContainer=document.querySelector(".anime-container");

const animeImgEl=document.querySelector(".anime-img");

const animeNameEl=document.querySelector(".anime-name")

btnEl.addEventListener("click",async function(){
    try {

        btnEl.disabled= true;
        btnEl.innerText="Loading...";
        animeImgEl.innerText="Updating..."
        animeImgEl.src="spimmer.svg"
        const response= await fetch(" https://api.catboys.com/img");

        const data= await response.json();

        btnEl.disabled=false;
        btnEl.innerText="Get Anime"
        
        animeContainer.style.display="block";

        animeImgEl.src=data.url;
        animeNameEl.innerText=data.artist;

    } catch (error) {
        
    }
})