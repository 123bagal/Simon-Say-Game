let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let highscore=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let btns = document.querySelectorAll(".btn"); 
document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game is started");
        started=true;
       levelup();
    }
})

function gameflash(btn)
{
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
  },250)
}

function userflash(btn)
{
  btn.classList.add("gflash");
  setTimeout(function(){
    btn.classList.remove("gflash");
  },250)
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText=`Level${level}`;
   
    let randIdx = Math.floor(Math.random() * btns.length);
    let randbtn = btns[randIdx];

    
   gameseq.push(randbtn.getAttribute("id"));

    console.log(gameseq);
    gameflash(randbtn);
}


function checkans(){
 // console.log("curr level:",level);
let idx = userseq.length - 1;

 if(userseq[idx] === gameseq[idx])
 {
   //console.log("same value");
   if (userseq.length == gameseq.length) {
    setTimeout(levelup, 1000);
    userseq = [];
}

 }
 else{
  if(level > highscore)
  {
    highscore = level-1;
    highscore.toLocaleString.innerText=`High Score:${highscore}`;
  }
  h2.innerHTML=`Game Over!Your score was <b> ${level} </b> Press any key to start`;
  document.querySelector("body").style.backgroundColor= "red";
  setTimeout(function(){
  document.querySelector("body").style.backgroundColor = "white";
  },150)
  reset();
 }

}


function btnpress()
{
 // console.log(this);
  let btn=this;
  userflash(btn);
  usercolor=btn.getAttribute("id");
  //console.log(usercolor);
  userseq.push(usercolor);
  checkans();

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns)
{
  btn.addEventListener("click",btnpress);
}

function reset()
{
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}