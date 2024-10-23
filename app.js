let gameSeq=[];
let userSeq=[];
let highest=7;
let btns=["red","yellow","green","purple"];

let level=0;
let started=false;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },230);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },230);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    // random btn choose
    let randIdx=Math.floor(Math.random() *4);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`);

    gameSeq.push(randCol);
    console.log(gameSeq);

    // console.log(randIdx);
    // console.log(randCol);
    // console.log(randBtn);

    // btnFlash();
    gameFlash(randBtn);
}

function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,800);
            // levelUp(); check this also by uncommenting NOTE 1 stmt nust be comment in if stmt
        }
    }else{
        h2.innerHTML=`Game Over! <b> Your Score was: ${level}</b> <br>Press any key to start..`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },180)
        if(level >=highest){
            h2.innerHTML=`Game Over! <b> This Was Your Highest Score: ${level}</b> <br>Press any key to start..`;
            level=highest;
        }
            reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userCol=btn.getAttribute("id");
    // console.log(userCol);
    userSeq.push(userCol);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;

}