var questions = [
    {
        question: "your question 1",
        answers: ["opt1", "opt2"],
        correctAnswer: 1
    },
    {
        question: "your question2",
        answers: ["opt1", "opt2"],
        correctAnswer: 1
    }
]

var currentQuestion = 0;
console.log(questions[currentQuestion].question)

var startButton = document.getElementById('startBtn');

startButton.addEventListener('click', function() {
    startGame()

})

function startGame() {
var newP=document.createElement("p")
newP.innerText=questions[currentQuestion].question
// find notes on appendchild for id of question
// put question on page 
// put choices on page 
// start timer 
}

 

function setNextQuestion() {

}

function selectAnswer() {

}


// timer 
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