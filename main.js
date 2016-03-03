window.onload = function() {
  console.log("Javascript is loaded");
  createPlayer();
};
//questions for trivia
var nbaTrivia = {
  question: {
    q1: "Current NBA commissioner is David Stern:", //false adam silver
    q2: "Stephen Curry's jersey number is #30:", //true
    q3: "LeBron James plays for Miami Heat:", //false Cleveland Cavaliers
    q4: "The shortest NBA player was Muggsy Bogues:", //true
    q5: "Shaquille O'Neal's shoe size is 23:", //true
    q6: "All NBA teams are based in the USA:", //false Toronto Raptors
    q7: "The tallest NBA player was 7 foot 6 Yao Ming:", //false 7'7'' Manute Bol and Gheorghe Mureşan
    q8: "Stephen Curry's birthname is Wardell Stephen Curry II:", //true
    q9: "Kobe Bryant's middle name is 'Bean':", //true
    q10: "Michael Jordan is the only player to win three consecutive NBA Finals MVP Awards:" //false Shaquille O'Neal 2000-2002
  }
};
var answer;
var player;

var startButton = document.querySelector("#start");
var truee = document.querySelector("#true");
var falsee = document.querySelector("#false");
var enterButton = document.querySelector("#enter");
var name = document.querySelector("#name");
var userName = document.querySelector("#userName");
var input = document.querySelector("#input");


function createPlayer() {
enterButton.addEventListener('click', function(){
console.log("enter button is being clicked");
var playerName = document.createElement('p');
playerName.innerHTML = "Are you ready to play " + input.value +"?";
userName.appendChild(playerName);
});
}

startButton.addEventListener('click', function(){
  console.log("start button is being clicked");
});

truee.addEventListener('click', function() {
  console.log("true is being clicked");
  if (answer === true) {
    console.log("you are correct");
  }

});

falsee.addEventListener('click', function() {
  console.log("false is being clicked");
  if (answer !== true) {
  alert("come on! know your player!");
  }

});
