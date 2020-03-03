var btnGrid = document.querySelector(".btnGrid");
var page1 = document.querySelector(".page1");
var page2 = document.querySelector(".page2");
var page3 = document.querySelector(".page3");
var page4 = document.querySelector(".page4");
var page5 = document.querySelector(".page5");
var page6 = document.querySelector(".page6");
var startBtn = document.querySelector("#startButton");


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



function resetState() {
    nextButton.classList.add('hide')
}
function renderQuestion() {
    var q = questions[QuestionIndex];
}


function setNextQuestion() {
    
}

function hideQuestion() {
    btnGrid.style.display = "none";

}
hideQuestion();


function selectAnswer1() {

}

function setQuestion2() {

}

function selectAnswer2() {

}

function setQuestion3() {

}

function transition1() {
    page1; 
    question1; 
    page1.parentNode.replaceChild(btnGrid, page1);
    btnGrid.style.display="block";

}

function transition2() {
    page2;
    question2;
    page1.parentNode.replaceChild(btnGrid, page1);
    btnGrid.style.display="block";
}

function renderQuestion() {
    var q = questions[0].question
}

startBtn.addEventListener("click", transition1);
startBtn.addEventListener("click", transition2);

