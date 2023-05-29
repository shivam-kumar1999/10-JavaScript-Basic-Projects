const btnEl= document.getElementById("btn");

const quoteEl= document.getElementById("quote");
const authorEl=document.getElementById("author");

const apiURl="http://api.quotable.io/random";



async function getQuote(){

    try {

    const response= await fetch(apiURl);
    const data= await response.json();
    const quoteContent= data.content;
    const quoteAuthor=data.author;

    quoteEl.innerText= quoteContent;
    authorEl.innerText= "~" + quoteAuthor;

        
    } catch (error) {
        console.log(error);
        quoteEl.innerText="An error happend, try again later";
        authorEl.innerText="An error happend, try again later";
        
    }

    


}

btnEl.addEventListener("click", getQuote);