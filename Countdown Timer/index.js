const  endDate="15 Aug 2030 09:00 AM";

document.getElementById("end-date").innerText=endDate;

const inputs=document.querySelectorAll("input");


// const clock=()=>{

// }

function clock(){
    const end= new Date(endDate);
    const now= new Date();
    const diff=  (end-now)/1000;
    
                                       //divided by 1000 it converts into seconds.

    //convert into days 
      inputs[0].value=Math.floor(diff/3600/24);

      //convert into hours 
      console.log(Math.floor(diff/3600)%24)
      inputs[1].value=Math.floor((diff/3600)%24);

      //convert into minutes
      console.log(Math.floor(diff/60)%60);
      inputs[2].value=Math.floor((diff/60)%60);

      //convert into seconds
      console.log(Math.floor(diff%60));
      inputs[3].value=Math.floor((diff%60));
}

clock()


// to run the seconds clock

setInterval(
()=>{
    clock()
},
1000
)
