document.querySelector("button").addEventListener("click",random);
function random(){
  var random=Math.floor(Math.random()*2)+1;
  if(random===1){
    document.querySelector("img").setAttribute("src","head.jpeg");
    document.querySelector("h1").innerHTML="Heads!";
  }
  else{
    document.querySelector("img").setAttribute("src","tail.jpeg");
    document.querySelector("h1").innerHTML="Tails!";
  }
}
