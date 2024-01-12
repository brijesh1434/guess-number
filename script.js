"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct answer !";

// console.log(document.querySelector("#number").textContent);
// document.querySelector("#number").textContent = "13";
// document.querySelector(".score-number").textContent = "10";

// console.log((document.querySelector("#guess").value = "22"));
// document.querySelector("#guess").value;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector("#check-button").addEventListener("click", function () {
  const guess = Number(document.querySelector("#guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!!";
  } else if (guess === secretNumber) {
    // document.querySelector("#number").value = number;
    document.querySelector(".message").textContent = "Correct Number";

    document.querySelector("#number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("#number").style.width = "120px";
    document.querySelector("#number").style.fontSize = "35px";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score-number").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score-number").textContent = 0;
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "low";
    score--;
    document.querySelector(".score-number").textContent = score;
  }
});

document.querySelector("#again-button").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing....";

  document.querySelector(".score-number").textContent = score;

  document.querySelector("#number").textContent = "?";
  document.querySelector("#guess").textContent = "";

  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("#number").style.width = "100px";
  //   document.querySelector("#number").style.fontSize = "30px";
});
