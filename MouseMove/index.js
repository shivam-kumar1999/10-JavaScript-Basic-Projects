
var  elem=document.querySelectorAll('.elem') ;

elem.forEach(function(val){
 
    val.addEventListener('mouseenter', function(){
        val.childNodes[3].style.opacity=1
    })

     val.addEventListener('mouseleave', function(){
        val.childNodes[3].style.opacity=0
    })

    val.addEventListener("mousemove", function(details){
        val.childNodes[3].style.left = details.x+ "px"
        //  val.childNodes[3].style.right   = details.y+ "px"
    })


})













// var elemimg= document.querySelector('#elem1 img')

// elem1.addEventListener('mousemove', function(detail){
//       elemimg.style.left=detail.x+"px";
//        elemimg.style.top=detail.y+"px"
// })

// elem1.addEventListener('mouseenter', function(detail){
//       elemimg.style.opacity=1;
     
// })

// elem1.addEventListener('mouseleave', function(detail){
//       elemimg.style.opacity=0;
     
// })