//initial values
let timer;
let [sec, millisec]=[0, 0]
let isRunning=false;

//get the elements to add functionalities
let display=document.querySelector(".display")
let startBtn = document.querySelector(".start-btn");
let clearBtn = document.querySelector(".clear-btn");
//adding event listeners
startBtn.addEventListener("click",startTimer)
clearBtn.addEventListener("click",clearTimer)
//functionalities for timers
function startTimer(num){
  startBtn.style.display="none"
  clearBtn.style.display="inline-block"
  let count=document.getElementById("count")
  num=count.value
    if(!isRunning){
        isRunning=true
        timer=setInterval(updateTimer,10,num)
    }
}
function stopTimer() {
  clearInterval(timer);
  isRunning=false;
  updateDisplay()
}
function clearTimer() {
    clearInterval(timer);
    [sec, millisec] = [0, 0];
    isRunning=false;
    updateDisplay()
    startBtn.style.display="inline-block"
    clearBtn.style.display="none"
}
function updateTimer(num) {
  millisec = millisec + 10;
  if (millisec >= 1000) {
    millisec = 0;
    sec++;
  }
  if(num==sec){
    //resetTimer();
    stopTimer();
  }
  updateDisplay();
}
function updateDisplay(){
    display.textContent=`${sec}:${millisec}`
}
document.body.appendChild(count)