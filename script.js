var questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answers: ["<scripting>", "<script>", "<js>", "<javascript>"],
        correctAnswer: 1
    },
    {
        question: "What company developed Javascript?",
        answers: ["Google", "The Home Depot", "Netscape", "Twitter"],
        correctAnswer: 2
    },
    {
        question: "What symbols are used for single line comments?",
        answers: ["//", "==","##","[]"],
        correctAnswer: 0
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["alertBox('Hello World')", "msgBox('Hello World')", "msg('Hello World')", "alert('Hello World')"],
        correctAnswer: 3
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

 

function setQuestion1() {

}

function selectAnswer1() {

}

function setQuestion2() {

}

function selectAnswer2() {

}

function setQuestion3() {

}

function selectAnswer3() {

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