// console.log("Javascipt Quiz .js is connected");

// <--------------------- Start (Q)s and (A)s ----------------------->
var questions = [
  {
    questions: "In JavaScript 'var' is short for...",
    answers: [
      { Text: "A. Variable", correct: true },
      { Text: "B. Variety", correct: false },
      { Text: "C. Variation", correct: false },
      { Text: "D. Varies", correct: false },
    ],
  },
  {
    questions: "In JavaScript was first designed to work in...",
    answers: [
      { Text: "A. Server application", correct: false },
      { Text: "B. Mobile applications", correct: false },
      { Text: "C. Desktop applications", correct: false },
      { Text: "D. Web browsers", correct: true },
    ],
  },
  {
    questions: "JavaScript and Java are the same language.",
    answers: [
      { Text: "A. True", correct: false },
      { Text: "B. False", correct: true },
      { Text: "C. Kind of...", correct: false },
      { Text: "D. Only when the code is stored in a .js file", correct: false },
    ],
  },
  {
    questions: "JavaScript arrays hold...",
    answers: [
      { Text: "A. Conditions", correct: false },
      { Text: "B. Statements", correct: false },
      { Text: "C. Parameters", correct: false },
      { Text: "D. Values", correct: true },
    ],
  },
  {
    questions:
      "If HTML is the structure of a page, and CSS is the style of a page, then Javascript is...",
    answers: [
      { Text: "A. Funtionality", correct: true },
      { Text: "B. Structure and Style", correct: false },
      { Text: "C. Where the page is on the web", correct: false },
      { Text: "D. Not that important", correct: false },
    ],
  },
];
//<--------------------- Start Button JS Code ----------------------->

// Listen for a click event on toggle switch
document.querySelector(".startQuiz").addEventListener("click", function () {
  setTime();
  intro.setAttribute("style", "display: none;"); //hide the div containing the intro paragraph
  quizQuestionsEl.setAttribute("style", "display: block;");
  beginQuiz();
});

//<-------------------Begin Timer Code------------------------->
// Selects timer element
var timerEl = document.getElementById("timer");
var secondsLeft = 120;

timerEl.textContent = secondsLeft;

var timerInterval;
var questionTimeout;

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft = Math.max(0, secondsLeft - 1);
    timerEl.textContent = secondsLeft;

    if (secondsLeft < 1) {
      // Stops execution of action at set interval
      endQuiz();
    }
  }, 1000);
}

//<--------------Quiz variables funtions---------->
var questEl = document.getElementById("question");
var ansEl = document.getElementById("answer-buttons");
var currentQuestionIndex = 0;
var answerResponse = document.getElementById("response");
var finalScoreEl = document.getElementById("finalScore");
var quizResultsEl = document.getElementById("quizResults");
var scoreFormEl = document.getElementById("scoreForm");
var initialsEl = document.getElementById("initials");
var highScoresSectionEl = document.getElementById("highScoresSectionEl");
var highScoresListEl = document.getElementById("highScoresListEl");
var playAgainBtnEl = document.getElementById("playAgainBtn");
var quizQuestionsEl = document.getElementById("quizQuestionsEl");
var clearHighScoresBtn = document.getElementById("clearHighScoresBtn");
var viewHS = document.getElementById("viewHS");

function beginQuiz() {
  // When executed calls the displayQuestion function
  currentQuestionIndex = 0;
  displayQuestion();
}

function endQuiz() {
  clearInterval(timerInterval);
  clearTimeout(questionTimeout);

  quizQuestionsEl.setAttribute("style", "display: none");
  quizResultsEl.setAttribute("style", "display: block");
  finalScoreEl.textContent = secondsLeft;
}

scoreFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  var initials = initialsEl.value;
  var newScore = { initials: initials, score: secondsLeft };
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push(newScore);
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  localStorage.setItem("highScores", JSON.stringify(highScores));
  quizResultsEl.setAttribute("style", "display:none");
  displayHighScores();
});

playAgainBtnEl.addEventListener("click", function (event) {
  currentQuestionIndex = 0;
  secondsLeft = 120;
  timerEl.textContent = secondsLeft;
  setTime();
  highScoresSectionEl.setAttribute("style", "display: none");
  quizQuestionsEl.setAttribute("style", "display: block");
  displayQuestion();
});

clearHighScoresBtn.addEventListener("click", function () {
  localStorage.removeItem("highScores");

  displayHighScores();
});

viewHS.addEventListener("click", function () {
  intro.setAttribute("style", "display: none");
  clearInterval(timerInterval);
  clearTimeout(questionTimeout);
  quizQuestionsEl.setAttribute("style", "display: none");
  displayHighScores();
});

function displayHighScores() {
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScoresListEl.innerHTML = "";

  if (highScores.length === 0) {
    var emptyMessage = document.createElement("li");
    emptyMessage.textContent = "No high scores yet. Play a game!";
    highScoresListEl.appendChild(emptyMessage);
  }

  highScores.forEach(function (score) {
    var listItem = document.createElement("li");
    listItem.textContent = `${score.initials}: ${score.score}`;
    highScoresListEl.appendChild(listItem);
  });
  highScoresSectionEl.setAttribute("style", "display: block");
}

function clearQuest() {
  while (ansEl.firstElementChild) {
    // console.log("Clearquest Function", ansEl.firstElementChild);
    ansEl.removeChild(ansEl.firstElementChild);
  }
}

function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  clearQuest(); //clears the initial children seen in index.html

  answerResponse.textContent = "";

  var currentQuestion = questions[currentQuestionIndex]; //establlishes the current questions as question 1

  var questionNum = currentQuestionIndex + 1; //identifies the current question as 1 instead of 0

  currentQuestionIndex++;

  questEl.innerHTML = questionNum + ". " + currentQuestion.questions; //displays the h1 quest.

  currentQuestion.answers.forEach((answers) => {
    //=> hashrocket, shorthand notation defines functions
    var button = document.createElement("button"); //creates quiz buttons

    button.innerHTML = answers.Text; //applies answers text to buttons

    button.classList.add("aBtn"); //applies class/style from css to buttons

    ansEl.appendChild(button); //adds buttons to page

    if (answers.correct) {
      //if the button has a value of correct
      button.dataset.correct = answers.correct; //add answers.correct to dataset attr
    }

    button.addEventListener("click", function () {
      if (!button.dataset.correct) {
        secondsLeft = Math.max(0, secondsLeft - 10);
        timerEl.textContent = secondsLeft;
        answerResponse.textContent = "Wrong Answer";
      } else {
        answerResponse.textContent = "Correct";
      }
      var answerButtons = ansEl.querySelectorAll("button");

      answerButtons.forEach(function (answer) {
        answer.disabled = true;
      });

      if (secondsLeft === 0) {
        endQuiz();
        return;
      }
      questionTimeout = setTimeout(function () {
        displayQuestion();
      }, 1000);
    });
  });
}
