// initial timer values
let timer;
let [hours, min, sec, millisec] = [0, 0, 0, 0];
let isRunning = false;

//get all elements to add functionalities
let display = document.querySelector(".display");
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let resetBtn = document.querySelector(".reset-btn");
//adding events to each elements
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
//function for starting the timer
function startTimer() {
    if(!isRunning){//temporarily making isRunning true to start the timer
        isRunning=true
        timer=setInterval(updateTimer,10)
    }
}
//function for stopping the timer
function stopTimer() {
    if(isRunning){
        isRunning=false;
        clearInterval(timer);
    }
}
//function for reset the timer
function resetTimer() {
    clearInterval(timer);
    [hours, min, sec, millisec] = [0, 0, 0, 0];
    isRunning=false;
    updateDisplay()
}
//function for update the timer values
function updateTimer() {
  millisec = millisec + 10;
  if (millisec >= 1000) {
    millisec = 0;
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
      if (min >= 60) {
        min = 0;
        hours++;
      }
    }
  }
  updateDisplay();
}
//function for update the display
function updateDisplay() {
    display.textContent=`${hours}:${min}:${sec}:${millisec}`
}
