

var main= document.querySelector('#main');
var cursor= document.querySelector('.cursor');

main.addEventListener("mousemove", function(detail){
   cursor.style.left= detail.x+ "px"
    cursor.style.top= detail.y+ "px"

})