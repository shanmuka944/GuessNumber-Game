'use strict';
let secretNumber=Math.trunc(Math.random()*20+1);
 let Score=20;
 let highScore=0;

document.querySelector(".check").addEventListener("click",function(){
    const guess=Number(document.querySelector(".guess").value);
    if(!guess){
     document.querySelector(".message").textContent="No Number given!!";
    
    }
    else if(guess===secretNumber)
    {
        document.querySelector(".message").textContent="You Won the Game!!";
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector("body").style.backgroundColor='#60b347';
        document.querySelector(".number").style.width='30rem';
        if(Score>highScore)
        {
            document.querySelector(".highscore").textContent=Score;
        }
    }
    else if(guess>secretNumber)
    {   
        if(Score>0){
        document.querySelector(".message").textContent="Number is too high!!"
        Score--;
        document.querySelector(".score").textContent=Score;}
        else{
            document.querySelector(".score").textContent="You Lost the Game"; 
        }
        
    }
    else if(guess<secretNumber)

    {
        if(Score>0)
        {
        document.querySelector(".message").textContent="NUmber is less!!"
        Score--;
        document.querySelector(".score").textContent=Score;
        }
        else{
            document.querySelector(".score").textContent="You Lost the Game";
        }
    }
    }
    )


    document.querySelector(".again").addEventListener("click",function()
    {
        Score =20;
        secretNumber=Math.trunc(Math.random()*20+1);
        document.querySelector('.score').textContent=20;
        document.querySelector(".message").textContent="Start guessing";
        document.querySelector(".guess").value=" ";

        document.querySelector("body").style.backgroundColor='#222';
        document.querySelector(".number").style.width='15rem';

    }
    )


