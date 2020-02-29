var startButton = document.getElementById('startBtn');
console.log(startButton)
startButton.addEventListener('click', function() {
    console.log('test')

})

function startGame() {

}

function setNextQuestion() {

}

function selectAnswer() {

}

// <!-- <div id="timer">
// <h2>Countdown</h2>
// <p id="timerDisplay"></p>
// </div>

/* 
var myVar = setInterval(function(){ myTimer() }, 1000);
var secondlimit = 30;

function myTimer() {
if(secondlimit == 0)
{
    myStopFunction();
}

document.getElementById("timerDisplay").innerHTML = '00:' + zeroPad(secondlimit,2);
secondlimit = secondlimit  - 1;

}

function myStopFunction() {
    clearInterval(myVar);
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}  */