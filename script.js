var No1=Math.floor(Math.random()*6)+1;

var diceImg="./images/dice"+No1+".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", diceImg);

var No2=Math.floor(Math.random()*6)+1;

var diceImg2="./images/dice"+No2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", diceImg2);

if (No1>No2){
   document.querySelector("h1").innerHTML="Player 1 wins !! 👌"
}
else if(No2>No1){
    document.querySelector("h1").innerHTML="Player 2 wins !! 😍"
}
else{
    document.querySelector("h1").innerHTML="Ooops Draw 😒"
}


