console.log("Javascipt Quiz .js is connected");

// <--------------------- Start (Q)s and (A)s ----------------------->
var questions = [
    {
        questions: "In JavaScript 'var' is short for...",
        answers: [
            {Text: "A. Variable", correct: true},
            {Text: "B. Variety", correct: false},
            {Text: "C. Variation", correct: false},
            {Text: "D. Varies", correct: false},
        ]
    },
    {
        questions: "In JavaScript was first designed to work in...",
        answers: [
            {Text: "A. Server application", correct: false},
            {Text: "B. Mobile applications", correct: false},
            {Text: "C. Desktop applications", correct: false},
            {Text: "D. Web browsers", correct: true},
        ]
    },
    {
        questions: "JavaScript and Java are the same language.",
        answers: [
            {Text: "A. True", correct: false},
            {Text: "B. False", correct: true},
            {Text: "C. Kind of...", correct: false},
            {Text: "D. Only when the code is stored in a .js file", correct: false},
        ]
    },
    {
        questions: "JavaScript arrays hold...",
        answers: [
            {Text: "A. Conditions", correct: false},
            {Text: "B. Statements", correct: false},
            {Text: "C. Parameters", correct: false},
            {Text: "D. Values", correct: true},
        ]
    },
    {
        questions: "If HTL is the structure of a page, and CSS is the style of a page, then Javascript is...",
        answers: [
            {Text: "A. Funtionality", correct: true},
            {Text: "B. Structure and Style", correct: false},
            {Text: "C. Where the page is on the web", correct: false},
            {Text: "D. Not that important", correct: false},
        ]
    }
]
//<--------------------- Start Button JS Code ----------------------->

// Listen for a click event on toggle switch
document.querySelector(".startQuiz").addEventListener("click", function(){
    setTime();
    intro.setAttribute("style", "display: none;");
    quizQuestions.setAttribute("style", "display: block;");

});//End of function


//<-------------------Begin Timer Code------------------------->
// Selects timer element
var timerEl = document.getElementById("timer");
var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "You have " + secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}



//<--------------Quiz variables funtions---------->

var questEl = document.getElementById("question");
var ansEl = document.getElementById("answer-buttons");
var currentQuestionIndex = 0;
var score = 0; 

function beginQuiz(){
    var currentQuestionIndex = 0;
    var score = 0;
    displayQuestion();
}

function displayQuestion(){
        var currentQuestion = questions[currentQuestionIndex];
        var questionNum = currentQuestionIndex + 1;
            questEl.innerHTML = questionNum + ". " + currentQuestion.questions;

            currentQuestion.answers.forEach(answers => {
        var button  = document.createElement("button");
            button.innerHTML = answers.Text;
            button.classList.add("aBtn");
            ansEl.appendChild(button);
        }
    );
}

beginQuiz();