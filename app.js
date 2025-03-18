let gameSeq=[];
let userSeq=[];

let btns=["yellow","pink","blue","purple"]

let started =false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started");
        started==true;
        
        levelup();
    }
})


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}


function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
let randIdx= Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`)
    gameFlash(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
}


function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,250);
        }
    }else{
        h2.innerHTML=`Game over! <b> Your best score is ${level}</b> Press any key to continue`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
    }
}


function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn")
    for(btn of allBtns){
btn.addEventListener("click",btnPress);
    }

function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
}