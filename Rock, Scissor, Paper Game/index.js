const choices = ["paper", "rock", "scissors"];
function playGame(inputChoice) {
  let humanChoice = inputChoice.id;
  let botChoice = choices[Math.floor(Math.random() * choices.length)];
  document
    .querySelector("#rock")
    .setAttribute("src", "gameImg/" + humanChoice + ".png");
  // create new h3 element
  const relacedItem = document.querySelector("#paper");
  const newItem = document.createElement("h3");
  relacedItem.parentNode.replaceChild(newItem, relacedItem);
  document.querySelector("h3").classList.add("display-winner");

  document
    .querySelector("#scissors")
    .setAttribute("src", "gameImg/" + botChoice + ".png");

  if (humanChoice === botChoice) {
    document.querySelector("h3").innerHTML = "Draw";
  } else if (
    (humanChoice === "scissors" && botChoice === "paper") ||
    (humanChoice === "rock" && botChoice === "scissors") ||
    (humanChoice === "paper" && botChoice === "rock")
  ) {
    document.querySelector("h3").innerHTML = "You won";
  } else {
    document.querySelector("h3").innerHTML = "You lost";
  }
}

function reset(){
    location.reload();
}