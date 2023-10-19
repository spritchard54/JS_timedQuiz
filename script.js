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
    intro.setAttribute("style", "display: none;"); //hide the div containing the into paragraph
    document.getElementById("quizQuestions").setAttribute("style", "display: block;");//display the block containing the quiz questions and next button

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

var questEl = document.getElementById("question");      // This is the H1 elements that displays the question
var ansEl = document.getElementById("answer-buttons");  // This is a div that contains the answer buttons
var nextButton = document.querySelector(".nextBtn");    // This is the next button to advance to the next question
var currentQuestionIndex = 0;                           // This variable sets the current question to questions 1
var score = 0;                                          // This variable sets the initial score to 0

function beginQuiz(){                  // When executed calls the displayQuestion function 
    var currentQuestionIndex = 0;
    var score = 0;
    displayQuestion();
}

function clearQuest(){
    while(ansEl.firstChild){
        ansEl.removeChild(ansEl.firstChild);
    }
}


function displayQuestion(){
        clearQuest(); //clears the initial children seen in index.html
        var currentQuestion = questions[currentQuestionIndex]; //establlishes the current questions as question 1
        var questionNum = currentQuestionIndex + 1; //identifies the current question as 1 instead of 0
            
            questEl.innerHTML = questionNum + ". " + currentQuestion.questions; //displays the h1 quest. 
            currentQuestion.answers.forEach(answers => { //=> hashrocket, shorthand notation defines functions    
                var button  = document.createElement("button"); //creates quiz buttons
                button.innerHTML = answers.Text; //applies answers text to buttons
                button.classList.add("aBtn"); //applies class/style from css to buttons
                ansEl.appendChild(button); //adds buttons to page
                if(answers.correct){ //if the button has a value of correct
                    button.dataset.correct = answers.correct //add answers.correct (true or false) to the dataset
                }
            });
        }
//all the code below breaks the displayQuestion Function
        // function handleNextButton(){
        //     currentQuestionIndex++;
        //     if(currentQuestionIndex < currentQuestionIndex.length){
        //         displayQuestion();
        //     }else{
        //         beginQuiz();
        //     }
        // }

        // nextButton.addEventListener("click", ()=>{// nextButton = document.querySelector(".nxtBtn");
        //     if(currentQuestionIndex < currentQuestionIndex.length){
        //         handleNextButton();
        //     }
        //     else{
        //         beginQuiz();
        //     }

        // });





beginQuiz();



//clearInterval method to stop the timer
//need ani if statement to determine is time has run out and stop the quiz