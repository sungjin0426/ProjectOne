window.onload = function() {
  console.log("Javascript is loaded");
  hideButton();
  start();
  reset();
  falsy();
  truthy();
};

//trivia questions, answers, explanation
var data = [
  {
    question: "Current NBA commissioner is David Stern:",
    answer: false,
    explanation: "Current NBA commissioner is Adam Silver."
  },
  {
    question: "Stephen Curry's jersey number is #30:",
    answer: true,
    explanation: "Stephen Curry wears #30."
  },
  {
    question: "Currently, LeBron James plays for Miami:",
    answer: false,
    explanation: "LeBron James plays for Cleveland Cavaliers.",
  },
  {
    question: "The shortest NBA player was Muggsy Bogues:",
    answer: true,
    explanation: "Muggsy Bogues was the SHORTEST! with 5 feet and 3 inches tall.",
  },
  {
    question: "Shaquille O'Neal's shoe size is 23:",
    answer: true,
    explanation: "That's pretty big for human.",
  },
  {
    question: "All NBA teams are based in the USA:",
    answer: false,
    explanation: "Toronto Raptors is based in Canada.",
  },
  {
    question: "The tallest NBA player was 7 foot 6 Yao Ming",
    answer: false,
    explanation: "Tallest player are (7foot 7inches) Manute Bol and Gheorghe Mureşan.",
  },
  {
    question: "Stephen Curry's birthname is Wardell Stephen Curry II:",
    answer: true,
    explanation: "That's a cool name!",
  },
  {
    question: "Kobe Bryant's middle name is 'Bean':",
    answer: true,
    explanation: "what a funny middle name!",
  },
  {
    question: "Michael Jordan is the only player to win three consecutive NBA Finals MVP Awards:",
    answer: false,
    explanation: "Shaquille O'Neal won consecutively in season 2000-2002.",
  }
];

//when game is over
var gameOverSay = "GAMEOVER, please click RESET to try again.";

//when player beat the game
var winnerSay = "You Win! Please click RESET to Play Again";

//inital values by className
var play = document.querySelector(".play");
var pressStart = document.querySelector(".press");
var user = document.querySelector(".user");
var question = document.querySelector(".question");
var tab = document.querySelector(".questions");
var goal = document.querySelector(".goal");
var answer = document.querySelector(".answer");
var enterName = document.querySelector(".enter-name");

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
  play.innerHTML = winnerSay;
  goal.innerHTML = "";
  resetButton.style.visibility = 'visible';
  tab.removeChild(truee);
  tab.removeChild(falsee);
}

//remove all
function removeAll() {
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

//start button
function start() {
  enterButton.addEventListener('click', function(){
    console.log("enter button is being clicked once");
    if (input.value === input.value){
    play.innerHTML = input.value + ", Get all 10 questions right & You win!";
    goal.innerHTML = "Here is your first question.";
    middle.removeChild(enterName);
    user.removeChild(input);
    user.removeChild(enterButton);
    showButton();
    question.innerHTML = data[questionNumber].question;
  } else if (input.value === false) {
    play.innerHTML = "Please identify yourself!";
    middle.removeChild(enterName);
    user.removeChild(input);
    user.removeChild(enterButton);
  }
  });
}

//reset
function reset() {
  resetButton.addEventListener('click', function(){
  location.reload();
});
}

//Question and Answer Buttons
var questionNumber = 9;
var answerNumber = 0;
function falsy() {
  falsee.addEventListener('click', function(){
    var value = false;
    console.log("false is clicked.");
    console.log(data[questionNumber].answer);
    if (value == data[questionNumber].answer) {
      if (questionNumber === data.length - 1) {
        //winner
        winner();
        question.innerHTML = "Thanks for Playing " + input.value + "!";
      } else {
        //next question
        questionNumber += 1;
        goal.innerHTML = "";
        play.innerHTML = "Question " + (questionNumber + 1) + " of 10";
        answer.innerHTML = "Previous answer: " + data[questionNumber].explanation;
        question.innerHTML = data[questionNumber].question;
      }
    } else {
      answer.innerHTML = data[questionNumber].explanation;
      questionNumber = 0;
      play.innerHTML = gameOverSay;
      removeAll();
    }
  });
}

function truthy() {
  truee.addEventListener('click', function() {
  value = true;
  console.log("true is clicked.");
  console.log(data[questionNumber].answer);
  if (value == data[questionNumber].answer) {
    if(questionNumber === data.length - 1) {
      //winner
      winner();
      quesiton.innerHTML = "Thanks for Playing " + input.value + "!";
    } else {
    questionNumber += 1;
    goal.innerHTML = "";
    play.innerHTML = "Question " + (questionNumber + 1) + " of 10";
    answer.innerHTML = "Previous answer: " + data[questionNumber].explanation;
    }
    question.innerHTML = data[questionNumber].question;
  } else {
    answer.innerHTML = data[questionNumber].explanation;
    questionNumber = 0;
    play.innerHTML = gameOverSay;
    removeAll();
  }
});
}
