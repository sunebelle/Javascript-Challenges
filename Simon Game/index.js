const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(nextSequence(), 3000);
      $("h1").text("Level " + level);
    }
  } else {
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restartr");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    setTimeout(() => location.reload(),500);
    // console.log("it is " + gamePattern);
    // console.log("it is " + userClickedPattern);
  }
}

$(".btn").click(function handledClick() {
  let userChosenColour = this.id;
  //   userClickedPattern.push(userChosenColour);
  const indexofLastAnswer = userClickedPattern.push(userChosenColour) - 1;
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(indexofLastAnswer);
  // console.log(indexofLastAnswer);
  // console.log(userClickedPattern);
});

function playSound(name) {
  let makeSound = new Audio("sounds/" + name + ".mp3");
  makeSound.play();
}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function () {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}

let gameStarted = false;
$(document).keypress(function () {
  if (!gameStarted) {
    nextSequence();
    $("h1").text("Level " + level);
    gameStarted = true;
  }
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
  // console.log(userClickedPattern);
}

