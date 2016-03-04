window.onload = function() {
  console.log("Javascript is loaded");
  hideButton();
  start();
  reset();
};

//questions for trivia
// var nbaTrivia = [
//     { q1: "Current NBA commissioner is David Stern:", answer: 'Adam Silver, false' },
//     { q2: "Stephen Curry's jersey number is #30:", answer: true,},
//     { q3: "Currently, LeBron James plays for Miami Heat:", answer: "Cleveland Cavaliers, false" },
//     { q4: "The shortest NBA player was Muggsy Bogues:", answer: 'true'},
//     { q5: "Shaquille O'Neal's shoe size is 23:", answer: true },
//     { q6: "All NBA teams are based in the USA:", answer: "Toronto Raptors, false"},
//     { q7: "The tallest NBA player was 7 foot 6 Yao Ming:", answer:' 7foot 7inches Manute Bol and Gheorghe Mureşan, false'},
//     { q8: "Stephen Curry's birthname is Wardell Stephen Curry II:", answer: true },
//     { q9: "Kobe Bryant's middle name is 'Bean':", answer: true },
//     { q10: "Michael Jordan is the only player to win three consecutive NBA Finals MVP Awards:", answer: "Shaquille O'Neal 2000-2002, false"
//   }
// ];
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
var gameOver = ["GAMEOVER, please try again."];
var readyPlay = ["Are you ready to play?!"];

//inital values by className
var play = document.querySelector(".play");
var pressStart = document.querySelector(".press");
var user = document.querySelector(".user");
var question = document.querySelector(".question");
var tab = document.querySelector(".questions");
var goal = document.querySelector(".goal");
var answer = document.querySelector(".answer");
var wrong = document.querySelector(".wrong");
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

//starting trivia
function hideButton() {
truee.style.visibility = 'hidden';
falsee.style.visibility = 'hidden';
resetButton.style.visibility = 'hidden';
}

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

// function createPlayer() {
// enterButton.addEventListener('click', function(){
// console.log("enter button is being clicked once");
// play.innerHTML = "Are you ready to play, " + input.value +"?";
// pressStart.innerHTML = "Press Start to Begin!!";
// });
// }


//show questions
//question 1
function question1(event) {
  question.innerHTML = nbaTrivia[0].q1;
  falsee.addEventListener('click', function(){
  console.log("false is clicked.");
  question.innerHTML = "";
  question.innerHTML = nbaTrivia[1].q2;
  answer.innerHTML = "";
  goal.innerHTML = "Next question!";
  play.innerHTML = "Correct!";
});
  truee.addEventListener('click', function() {
  console.log("true is clicked.");
  answer.innerHTML = "";
  answer.innerHTML = "Correct answer is... " + nbaTrivia[0].answer;
  question.innerHTML = "";
  question.innerHTML = "Sorry, try next time.";
  goal.innerHTML = "GAME OVER!";
  play.innerHTML = "";
});
}


//
// //question 2
// status.innerHTML = "Here is your second question";
// var secondQ = document.createElement('p');
// secondQ.innerHTML = nbaTrivia[1].q2;
// question.appendChild(secondQ);
//
// //question 3
// question.innerHTML = "Here is your third question";
// var thirdQ = document.createElement('p');
// secondQ.innerHTML = nbaTrivia[2].q3;
// question.appendChild(thirdQ);
//
// //question 4
// question.innerHTML = "Here is your fourth question. You are on a roll!";
// var fourthQ = document.createElement('p');
// fourthQ.innerHTML = nbaTrivia[3].q4;
// question.appendChild(fourthQ);
//
// //question 5
// question.innerHTML = "Four in a roll! Five more to go! So here...";
// var fifthQ = document.createElement('p');
// fifthQ.innerHTML = nbaTrivia[4].q5;
// question.appendChild(fifthQ);
//
// //question 6
// question.innerHTML = "Here is your sixth question.";
// var sixthQ = document.createElement('p');
// sixthQ.innerHTML = nbaTrivia[5].q6;
// question.appendChild(sixthQ);
//
// //question 7
// question.innerHTML = "You are good. But four more to go!";
// var seventhQ = document.createElement('p');
// seventhQ.innerHTML = nbaTrivia[6].q7;
// question.appendChild(seventhQ);
//
// //question 8
// question.innerHTML = "This is your eighth question. Three more to go!";
// var eighthQ = document.createElement('p');
// eighthQ.innerHTML = nbaTrivia[7].q8;
// question.appendChild(eighthQ);
//
// //question 9
// question.innerHTML = "Good job so Far. Here is your ninth question. Two more question to go!";
// var ninthQ = document.createElement('p');
// ninthQ.innerHTML = nbaTrivia[8].q9;
// question.appendChild(ninthQ);
//
// //question 10
// question.innerHTML = "WOW! You are almost there! One more question to go. So here is your Final question...";
// var tenthQ = document.createElement('p');
// tenthQ.innerHTML = nbaTrivia[9].q10;
// question.appendChild(tenthQ);

//Win
// var winner = document.createElement('div');
// winner.setAttribute('class', 'winner');
// winner.innerHTML = "You Win!!!";
// tab.appendChild(winner);

//Lose
// var loser = document.createElement('div');
// loser.setAttribute('class', 'loser');
// loser.innerHTML = "GAME OVER! Try again next time.";
// tab.appendChild(loser);
