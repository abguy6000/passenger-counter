let sum = 0;
let blackjack = false;
let alive = false;
let cards = [];
let message = "";
let stats = {

name: "king",
chips: 200,

}

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el")


playerEl.innerText += stats.name + ": $" + stats.chips


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 11);
  
    if (randomNumber === 1 && sum <= 10) {
      return 11;
    } else if (randomNumber === 1 && sum > 10) {
      return 1;
    } else if (randomNumber > 10) {
      return 10;
    } else {
      return randomNumber;
    }
  }

function renderGame() {
  messageEl.textContent = message;
  sumEl.textContent = "Sum:" + sum;
  cardsEl.textContent = "Card:";

  for (let i = 0; i < cards.length; i += 1) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum === 21) {
    message = "you've won the game MR.";
    blackjack = true;
  } else if (sum < 21) {
    message = "want more cards bro?";
    alive = true;
  } else if (sum > 21) {
    message = "Lost the game, idiot.";
    alive = false;
  }
}

function newCard() {
  if (alive === true && blackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

function StartGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    alive = true;
    message = "";
    renderGame();
  }
