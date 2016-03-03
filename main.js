window.onload = function() {
  console.log("Javascript is loaded");
  createPlayer();
  reset();
};

//questions for trivia
var nbaTrivia = {
  question: {
    q1: "Current NBA commissioner is David Stern:", //false adam silver
    q2: "Stephen Curry's jersey number is #30:", //true
    q3: "Currently, LeBron James plays for Miami Heat:", //false Cleveland Cavaliers
    q4: "The shortest NBA player was Muggsy Bogues:", //true
    q5: "Shaquille O'Neal's shoe size is 23:", //true
    q6: "All NBA teams are based in the USA:", //false Toronto Raptors
    q7: "The tallest NBA player was 7 foot 6 Yao Ming:", //false 7'7'' Manute Bol and Gheorghe Mureşan
    q8: "Stephen Curry's birthname is Wardell Stephen Curry II:", //true
    q9: "Kobe Bryant's middle name is 'Bean':", //true
    q10: "Michael Jordan is the only player to win three consecutive NBA Finals MVP Awards:", //false Shaquille O'Neal 2000-2002
  }
};
var answer;
var playerName;
var game;
var currentPoint;
var startButton = document.querySelector("#start");
var truee = document.querySelector("#true");
var falsee = document.querySelector("#false");
var enterButton = document.querySelector("#enter");
var name = document.querySelector("#name");
var userName = document.querySelector("#userName");
var input = document.querySelector("#input");
var question = document.querySelector(".question");
var tab = document.querySelector(".question-tab");
var resetButton = document.querySelector("#reset");

function reset() {
  resetButton.addEventListener('click', function(){
  location.reload();
});
}

function createPlayer() {
enterButton.addEventListener('click', function(){
console.log("enter button is being clicked once");
playerName = document.createElement('p');
playerName.innerHTML = "Are you ready to play " + input.value +"?";
userName.appendChild(playerName);
});
}

//if start button is not clicked, don't start the trivia
function startTrivia() {
startButton.addEventListener('click', function(){
  console.log("start button is being clicked");
});
}

var left = truee.addEventListener('click', function() {
  console.log("true is being clicked");
});

var right = falsee.addEventListener('click', function() {
  console.log("false is being clicked");
});

//question 1
question.innerHTML = "Here is your first question.";
var firstQ = document.createElement('p');
firstQ.innerHTML = nbaTrivia.question.q1;
question.appendChild(firstQ);
answer = false;
if (answer === left) {
  console.log("wrong");
} else if (answer === right) {
    console.log("correct");
  }
//
// //question 2
// question.innerHTML = "Here is your second question";
// var secondQ = document.createElement('p');
// secondQ.innerHTML = nbaTrivia.question.q2;
// question.appendChild(secondQ);
//
// //question 3
// question.innerHTML = "Here is your third question";
// var thirdQ = document.createElement('p');
// secondQ.innerHTML = nbaTrivia.question.q3;
// question.appendChild(thirdQ);
//
// //question 4
// question.innerHTML = "Here is your fourth question. You are on a roll!";
// var fourthQ = document.createElement('p');
// fourthQ.innerHTML = nbaTrivia.question.q4;
// question.appendChild(fourthQ);
//
// //question 5
// question.innerHTML = "Four in a roll! Five more to go! So here...";
// var fifthQ = document.createElement('p');
// fifthQ.innerHTML = nbaTrivia.question.q5;
// question.appendChild(fifthQ);
//
// //question 6
// question.innerHTML = "Here is your sixth question.";
// var sixthQ = document.createElement('p');
// sixthQ.innerHTML = nbaTrivia.question.q6;
// question.appendChild(sixthQ);
//
// //question 7
// question.innerHTML = "You are good. But four more to go!";
// var seventhQ = document.createElement('p');
// seventhQ.innerHTML = nbaTrivia.question.q7;
// question.appendChild(seventhQ);
//
// //question 8
// question.innerHTML = "This is your eighth question. Three more to go!";
// var eighthQ = document.createElement('p');
// eighthQ.innerHTML = nbaTrivia.question.q8;
// question.appendChild(eighthQ);
//
// //question 9
// question.innerHTML = "Good job so Far. Here is your ninth question. Two more question to go!";
// var ninthQ = document.createElement('p');
// ninthQ.innerHTML = nbaTrivia.question.q9;
// question.appendChild(ninthQ);
//
// //question 10
// question.innerHTML = "WOW! You are almost there! One more question to go. So here is your Final question...";
// var tenthQ = document.createElement('p');
// tenthQ.innerHTML = nbaTrivia.question.q10;
// question.appendChild(tenthQ);

//Win
var winner = document.createElement('div');
winner.setAttribute('class', 'winner');
winner.innerHTML = "You know your NBA. You Win!";
tab.appendChild(winner);

//Lose
var loser = document.createElement('div');
loser.setAttribute('class', 'loser');
loser.innerHTML = "GAME OVER! You don't know your NBA.";
tab.appendChild(loser);
