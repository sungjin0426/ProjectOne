window.onload = function() {
  console.log("Javascript is loaded");
  hideButton();
  start();
  reset();
};

//list of questions
var questions = [
  "Current NBA commissioner is David Stern:",
  "Stephen Curry's jersey number is #30:",
  "Currently, LeBron James plays for Miami:",
  "The shortest NBA player was Muggsy Bogues:",
  "Shaquille O'Neal's shoe size is 23:",
  "All NBA teams are based in the USA:",
  "Stephen Curry's birthname is Wardell Stephen Curry II:",
  "Kobe Bryant's middle name is 'Bean':",
  "Michael Jordan is the only player to win three consecutive NBA Finals MVP Awards:"
];

//list of answers
var checkAnswer = [
  "False, Current NBA commissioner is Adam Silver.",
  "True, Stephen Curry wear #30.",
  "False, LeBron James plays for Cleveland Cavaliers.",
  "True, Muggsy Bogues is 5 feet and 3 inches tall.",
  "True, that's pretty big for human",
  "False, Toronto Raptors is based in Canada",
  "False, 7foot 7inches Manute Bol and Gheorghe Mureşan",
  "True!",
  "True, what a funny middle name ^^",
  "False, Shaquille O'Neal won consecutively in season 2000-2002"
];

//when game is over
var gameOverSay = ["GAMEOVER, please click RESET to try again."];

//when player beat the game
var winnerSay = ["You Win! Play Again"];

var triviaAnswer;
//inital values by className
var play = document.querySelector(".play");
var pressStart = document.querySelector(".press");
var user = document.querySelector(".user");
var question = document.querySelector(".question");
var tab = document.querySelector(".questions");
var goal = document.querySelector(".goal");
var answer = document.querySelector(".answer");
var enterName = document.querySelector(".enter-name");
var ga = document.querySelector(".ga");

//initial value by id
var middle = document.querySelector("#middle");
var truee = document.querySelector("#true");
var falsee = document.querySelector("#false");
var enterButton = document.querySelector("#enter");
var input = document.querySelector("#input");
var resetButton = document.querySelector("#reset");
var startButton = document.querySelector("#start");
var topSection = document.querySelector("#top-section");
var content = document.querySelector("#content");

//winner
function winner() {
  enterName.innerHTML = winnerSay;
  resetButton.style.visibility = 'visible';
}
//remove all
function removeAll() {
  play.innerHTML = gameOverSay;
  goal.innerHTML = "";
  resetButton.style.visibility = 'visible';
  tab.removeChild(truee);
  tab.removeChild(falsee);
}
//hide buttons
function hideButton() {
truee.style.visibility = 'hidden';
falsee.style.visibility = 'hidden';
resetButton.style.visibility = 'hidden';
}
//show button
function showButton() {
  truee.style.visibility = 'visible';
  falsee.style.visibility = 'visible';
  resetButton.style.visibility = 'visible';
}

function start() {
  enterButton.addEventListener('click', function(){
  console.log("enter button is being clicked once");
  play.innerHTML = input.value + ", Get all 10 questions right & You win!";
  goal.innerHTML = "Here is your first question.";
  middle.removeChild(enterName);
  user.removeChild(input);
  user.removeChild(enterButton);
  showButton();
  question.innerHTML = questions[0];
});
}

function reset() {
  resetButton.addEventListener('click', function(){
  location.reload();
});
}
var questionNumber = 1;
var answerNumber = 0;

// //question 1, if false is clicked, the next question will appear. else if true is clicked, game is over.


//show questions
//question 1
function falsy() {
  falsee.addEventListener('click', function(){
  console.log("false is clicked.");
});
  if (triviaAnswer == checkAnswer[answerNumber]) {
    questionNumber += 1;
    answerNumber += 1;
    questions.innerText = questions[questionsNumber];
  } else {
    question.innerHTML = "Correct answer was, " + checkAnswer[answerNumber];
    removeAll();
  }
}
function truthy() {
  truee.addEventListener('click', function() {
  console.log("true is clicked.");
  if (triviaAnswer == checkAnswer[answerNumber]) {
    questions.innerText = question[questionsNumber];
    answer.innerHTML = "Correct!";
    questionNumber += 1;
    answerNumber += 1;
  } else {
    question.innerHTML = "Correct answer was, " + checkAnswer[answerNumber];
    removeAll();
  }
});
}
