var randomNumber1 = Math.random();
randomNumber1 = Math.ceil(randomNumber1*6);

var randomNumber2 = Math.random();
randomNumber2 = Math.ceil(randomNumber2*6);

// Image 1  
if(randomNumber1===1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(randomNumber1===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(randomNumber1===3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(randomNumber1===4){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(randomNumber1===5){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(randomNumber1===6){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}

// Image 2
if(randomNumber2===1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(randomNumber2===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(randomNumber2===3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(randomNumber2===4){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(randomNumber2===5){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(randomNumber2===6){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw...";
}

