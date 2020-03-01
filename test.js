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

 newP.innerText=questions[currentQuestion].question

 var currentQuestion = 0;
// console.log(questions[currentQuestion].question)
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answerButtons');

var startButton = document.getElementById('startButton');

startButton.addEventListener('click', function() {
    startGame()

})


// function resetState() {
//     nectButton.classList.add('hide')
// }
function setNextQuestion() {
    
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

