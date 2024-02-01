'use strict';
console.log(document.querySelector(".message").textContent);

const randNum= Math.trunc((Math.random()*20)+1);
let score=20;

document.querySelector(".number").textContent =randNum;



document.querySelector(".check").addEventListener('click', function(){
    var guess =Number(document.querySelector(".guess").value);
    console.log(guess);
    if(!guess)
    {
        document.querySelector(".message").textContent="Not a Number";
    }
    else if(guess===randNum)
    {
        document.querySelector(".message").textContent="Correct!!! You Win!!!";
        document.querySelector("body").style.backgroundColor='orange';
        document.querySelector(".number").style.width='30rem';
    }
    else if(guess>randNum && score >1)
    {
        document.querySelector(".message").textContent="Guess is too High!! Try AGAIN";
        score--;
        document.querySelector(".score").textContent =score;

    }
    else if(guess<randNum && score >1)
    {
        document.querySelector(".message").textContent="Guess is too Low!! Try AGAIN";
        score--;
        document.querySelector(".score").textContent =score;

    }
    else
    {
        document.querySelector(".message").textContent="You Lost!!!!";
        document.querySelector(".score").textContent=0;
    }
})

