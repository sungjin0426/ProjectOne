window.onload = function() {
  console.log("Javascript is loaded");
  startTrivia();
  createPlayer();
  reset();
};

//questions for trivia
var nbaTrivia = [
    { q1: "Current NBA commissioner is David Stern:", answer: 'Adam Silver, false' },
    { q2: "Stephen Curry's jersey number is #30:", answer: true,},
    { q3: "Currently, LeBron James plays for Miami Heat:", answer: "Cleveland Cavaliers, false" },
    { q4: "The shortest NBA player was Muggsy Bogues:", answer: 'true'},
    { q5: "Shaquille O'Neal's shoe size is 23:", answer: true },
    { q6: "All NBA teams are based in the USA:", answer: "Toronto Raptors, false"},
    { q7: "The tallest NBA player was 7 foot 6 Yao Ming:", answer:' 7foot 7inches Manute Bol and Gheorghe Mureşan, false'},
    { q8: "Stephen Curry's birthname is Wardell Stephen Curry II:", answer: true },
    { q9: "Kobe Bryant's middle name is 'Bean':", answer: true },
    { q10: "Michael Jordan is the only player to win three consecutive NBA Finals MVP Awards:", answer: "Shaquille O'Neal 2000-2002, false"
  }
];
//inital values
var answer;
var game = false;
var currentPoint;
var playerName = document.querySelector(".playerName");
var truee = document.querySelector("#true");
var falsee = document.querySelector("#false");
var enterButton = document.querySelector("#enter");
var name = document.querySelector("#name");
var userName = document.querySelector("#userName");
var input = document.querySelector("#input");
var question = document.querySelector(".question");
var tab = document.querySelector(".question-tab");
var resetButton = document.querySelector("#reset");
var goal = document.querySelector(".goal");
var startButton = document.querySelector("#start");
var status = document.getElementsByClassName(".status");
var answer = document.querySelector(".answer");
var wrong = document.querySelector(".wrong");

//if start button is not clicked, don't start the trivia
var startTrivia = function () {
  startButton.addEventListener('click', function(){
  console.log("start button is being clicked");
  start();
  questions();
});
};
var questions = function() {
  question1();
};
//starting trivia
function start() {
  console.log('starting game');
  game = true;
  goal.innerHTML = "Get all 10 questions right & You win!";
  status.innerHTML = "Here is your first question.";
}

function reset() {
  resetButton.addEventListener('click', function(){
  location.reload();
});
}

function createPlayer() {
enterButton.addEventListener('click', function(){
console.log("enter button is being clicked once");
playerName.innerHTML = "Are you ready to play, " + input.value +"?";
});
}

truee.addEventListener('click', function() {
  console.log("true is being clicked");
});
falsee.addEventListener('click', function() {
  console.log("false is being clicked");
});

//show questions
//question 1
function question1() {
  question.innerHTML = nbaTrivia[0].q1;
  falsee.addEventListener('click', function(){
  question.innerHTML = "";
  question.innerHTML = nbaTrivia[1].q2;
  answer.innerHTML = "";
  goal.innerHTML = "";

});
  truee.addEventListener('click', function() {
  answer.innerHTML = "";
  answer.innerHTML = "Correct answer is... " + nbaTrivia[0].answer;
  question.innerHTML = "";
  question.innerHTML = "Sorry, try next time.";
  goal.innerHTML = "";
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
