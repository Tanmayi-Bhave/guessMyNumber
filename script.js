'use strict';
console.log(document.querySelector(".message").textContent);

let randNum= Math.trunc((Math.random()*20)+1);
let score=20;
let highScore=0;

const dispMessage= function(message){
    document.querySelector(".message").textContent=message;
};

document.querySelector(".again").addEventListener('click', function(){
    randNum= Math.trunc((Math.random()*20)+1);
    score=20;
    //document.querySelector(".message").textContent="Start guessing...";
    dispMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor='black';
    document.querySelector(".number").textContent ="?";
    document.querySelector(".number").style.width='15rem';
    document.querySelector(".score").textContent =20;
    document.querySelector(".guess").value="";

})

document.querySelector(".check").addEventListener('click', function(){
    var guess =Number(document.querySelector(".guess").value);
    console.log(guess);
    if(!guess)
    {
        //document.querySelector(".message").textContent="Not a Number";
        dispMessage("Not a Number!!");
    }
    else if(guess===randNum)
    {
        //document.querySelector(".message").textContent="Correct!!! You Win!!!";
        dispMessage("Correct!!! You Win!!!");
        document.querySelector("body").style.backgroundColor='orange';
        document.querySelector(".number").textContent =randNum;
        document.querySelector(".number").style.width='30rem';
        if(score>highScore)
        {
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }
    }
    else if(guess!==randNum){
        if(score>1)
        {
            //document.querySelector(".message").textContent= guess>randNum ? "Guess is too High!! Try AGAIN" : "Guess is too Low!! Try AGAIN";
            dispMessage(guess>randNum ? "Guess is too High!! Try AGAIN" : "Guess is too Low!! Try AGAIN");
            score--;
            document.querySelector(".score").textContent =score;
        }

    }
    // else if(guess>randNum && score >1)
    // {
    //     document.querySelector(".message").textContent="Guess is too High!! Try AGAIN";
    //     score--;
    //     document.querySelector(".score").textContent =score;
       

    // }
    // else if(guess<randNum && score >1)
    // {
    //     document.querySelector(".message").textContent="Guess is too Low!! Try AGAIN";
    //     score--;
    //     document.querySelector(".score").textContent =score;
        

    // }
    else
    {
        document.querySelector(".message").textContent="You Lost!!!!";
        document.querySelector(".score").textContent=0;
    }
})

