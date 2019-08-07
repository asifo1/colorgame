var colors = ["#cf000f",
"#db0a5b",
"#8c14fc",
"#00b5cc",
"#1e824c",
"#f15a22",
"#ffcb05",
"#e8e8e8"
]



var musicr = document.getElementById("myAudior");
var musicw = document.getElementById("myAudiow");
musicr.style.display="none";
musicw.style.display="none";

function playAudior() {
  musicr.play();
}

function playAudiow() {
  musicw.play();
}




function myrandom() {
  return Math.floor(Math.random() * colors.length);
}

function difcolor(list) {
  var x = myrandom();
  for (var i = 0; i < list.length; i++) {
    if (list[i] === x) {
      return difcolor(list);
    }
  }

  return x;
}



function setcolor() {
  var x = difcolor(list);
  list.push(x);
  return colors[x];
}

function randomcolor() {
  var x = Math.floor(Math.random() * 6);
  if (x === 0) {
    opcolor[0] = selectedcolor;
    opcolor[1] = setcolor();
    opcolor[2] = setcolor();
    opcolor[3] = setcolor();
    opcolor[4] = setcolor();
    opcolor[5] = setcolor();
    solidcolor = setcolor();
  } else if (x === 1) {
    opcolor[0] = setcolor();
    opcolor[1] = selectedcolor;
    opcolor[2] = setcolor();
    opcolor[3] = setcolor();
    opcolor[4] = setcolor();
    opcolor[5] = setcolor();
    solidcolor = setcolor();
  } else if (x === 2) {
    opcolor[0] = setcolor();
    opcolor[1] = setcolor();
    opcolor[2] = selectedcolor;
    opcolor[3] = setcolor();
    opcolor[4] = setcolor();
    opcolor[5] = setcolor();
    solidcolor = setcolor();
  } else if (x === 3) {
    opcolor[0] = setcolor();
    opcolor[1] = setcolor();
    opcolor[2] = setcolor();
    opcolor[3] = selectedcolor;
    opcolor[4] = setcolor();
    opcolor[5] = setcolor();
    solidcolor = setcolor();
  } else if (x === 4) {
    opcolor[0] = setcolor();
    opcolor[1] = setcolor();
    opcolor[2] = setcolor();
    opcolor[3] = setcolor();
    opcolor[4] = selectedcolor;
    opcolor[5] = setcolor();
    solidcolor = setcolor();
  } else if (x === 5) {
    opcolor[0] = setcolor();
    opcolor[1] = setcolor();
    opcolor[2] = setcolor();
    opcolor[3] = setcolor();
    opcolor[4] = setcolor();
    opcolor[5] = selectedcolor;
    solidcolor = setcolor();
  }
  //console.log(x+1);   //result in the console
}

function setop1color() {
  op1.style.background = opcolor[0];
  clickbool[0] = true;
  autorevel();
  if(opcolor[0]==selectedcolor){
    return found(6-autorevel());
  }
  playAudiow();

}

function setop2color() {
  op2.style.background = opcolor[1];
  clickbool[1] = true;
  autorevel();
  if(opcolor[1]==selectedcolor){
    return found(6-autorevel());
  }
  playAudiow();
}

function setop3color() {
  op3.style.background = opcolor[2];
  clickbool[2] = true;
  autorevel();
  if(opcolor[2]==selectedcolor){
    return found(6-autorevel());
  }
  playAudiow();
}

function setop4color() {
  op4.style.background = opcolor[3];
  clickbool[3] = true;
  autorevel();
  if(opcolor[3]==selectedcolor){
    return found(6-autorevel());
  }
  playAudiow();
}

function setop5color() {
  op5.style.background = opcolor[4];
  clickbool[4] = true;
  autorevel();
  if(opcolor[4]==selectedcolor){
    return found(6-autorevel());
  }
  playAudiow();
}

function setop6color() {
  op6.style.background = opcolor[5];
  clickbool[5] = true;
  autorevel();
  if(opcolor[5]==selectedcolor){
    return found(6-autorevel());
  }
  playAudiow();
}

function autorevel(){
  var count=0;
  for(var i=0;i<clickbool.length;i++){
    if(clickbool[i]==true){
      count++;
    }
  }
  if (count==5){
    if(clickbool[0]!=true){
      op1.style.background = opcolor[0];
    }
    else if(clickbool[1]!=true){
      op2.style.background = opcolor[1];
    }
    else if(clickbool[2]!=true){
      op3.style.background = opcolor[2];
    }
    else if(clickbool[3]!=true){
      op4.style.background = opcolor[3];
    }
    else if(clickbool[4]!=true){
      op5.style.background = opcolor[4];
    }
    else if(clickbool[5]!=true){
      op6.style.background = opcolor[5];
    }
    found(0);

  }
  return count;

}

function found(sc){
  playAudior();
  result.style.display="inline";
  next.style.display="inline";
  if(sc==5)
  result.textContent = "Bravo!! You got "+sc*10+" points";
  else if(sc==4)
  result.textContent = "Excellent!! You got "+sc*10+" points";
  else if(sc==3)
  result.textContent = "Well Done!! You got "+sc*10+" points";
  else if(sc==2)
  result.textContent = "Good!! You got "+sc*10+" points";
  else if(sc==1)
  result.textContent = "Ohh!! You got "+sc*10+" point";
  else if(sc==0)
  result.textContent = "Better Luck Next Time";




  op1.style.pointerEvents = "none";
  op2.style.pointerEvents = "none";
  op3.style.pointerEvents = "none";
  op4.style.pointerEvents = "none";
  op5.style.pointerEvents = "none";
  op6.style.pointerEvents = "none";
  scorenum+=sc*10;
  score.textContent = scorenum;
  eventcount = eventcount+1;
  counts.textContent = eventcount;
  avg.textContent = (scorenum/eventcount).toFixed(1);;



}

var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var op5 = document.getElementById('op5');
var op6 = document.getElementById('op6');
var qusColor = document.getElementById('quscolor');
var score = document.getElementById('scorenum');
var counts = document.getElementById('count');
var result = document.getElementById('result');
var nextbut = document.getElementById('next');
var avg = document.getElementById('avg');
var scorenum = 0;



var list = [];
var opcolor = [];
var rand;
var selectedcolor;
var clickbool = [];
var solidcolor;
var eventcount=0;
function main(){
list=[];
opcolor=[];
rand = myrandom();
selectedcolor = setcolor();
clickbool=[];
qusColor.style.background = selectedcolor;
result.style.display="none";
next.style.display="none";
randomcolor();






op1.style.background = solidcolor;
op2.style.background = solidcolor;
op3.style.background = solidcolor;
op4.style.background = solidcolor;
op5.style.background = solidcolor;
op6.style.background = solidcolor;


op1.style.pointerEvents = "auto";
op2.style.pointerEvents = "auto";
op3.style.pointerEvents = "auto";
op4.style.pointerEvents = "auto";
op5.style.pointerEvents = "auto";
op6.style.pointerEvents = "auto";

op1.addEventListener("click", setop1color);
op2.addEventListener("click", setop2color);
op3.addEventListener("click", setop3color);
op4.addEventListener("click", setop4color);
op5.addEventListener("click", setop5color);
op6.addEventListener("click", setop6color);
nextbut.addEventListener("click",main);


}
main();
