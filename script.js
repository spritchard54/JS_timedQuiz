console.log("Javascipt Quiz .js is connected");


//<--------------------- Start Button JS Code ----------------------->

// Listen for a click event on toggle switch
document.querySelector(".startQuiz").addEventListener("click", function(){
    setTime();
    intro.setAttribute("style", "display: none;");
    questions.setAttribute("style", "display: block;");

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
// setTime function below disabled to prevent timer from staring before visitor clicks "Start Button" SP.
    // setTime();
