randomNumber1 =( Math.floor(Math.random()*6))+1;
var randomimage ="images/dice"+randomNumber1+".png";
var source1 =document.querySelectorAll("img")[0];
source1.setAttribute("src",randomimage);
randomNumber2= (Math.floor(Math.random()*6))+1;
randomimage2="images/dice"+randomNumber2+".png";
source2=document.querySelectorAll("img")[1];
source2.setAttribute("src",randomimage2);
if(randomNumber1 > randomNumber2){
document.querySelector ("h1").innerHTML="player1 won the game";
}
else if (randomNumber2 > randomNumber1) {

document.querySelector ("h1").innerHTML="player2 won the game";
}
else{
  document.querySelector("h1").innerHTML="its Draw";
}
