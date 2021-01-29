let readline = require('readline-sync');
let deck = [];
let userHand = [];
let computerHand = [];
const CARD_VALUES = {
  A: 11,
  K: 10,
  Q: 10,
  J: 10,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  1: 10
};

function initializeDeck(deck) {
  deck.push('A ♥', 'Q ♥', 'K ♥', 'J ♥', '2 ♥', '3 ♥', '4 ♥', '5 ♥', '6 ♥', '7 ♥', '8 ♥', '9 ♥', '10 ♥',
    'A ♦', 'Q ♦', 'K ♦', 'J ♦', '2 ♦', '3 ♦', '4 ♦', '5 ♦', '6 ♦', '7 ♦', '8 ♦', '9 ♦', '10 ♦',
    'A ♣', 'Q ♣', 'K ♣', 'J ♣', '2 ♣', '3 ♣', '4 ♣', '5 ♣', '6 ♣', '7 ♣', '8 ♣', '9 ♣', '10 ♣',
    'A ♠', 'Q ♠', 'K ♠', 'J ♠', '2 ♠', '3 ♠', '4 ♠', '5 ♠', '6 ♠', '7 ♠', '8 ♠', '9 ♠', '10 ♠');
}

function dealCard(playerArr, numCards = 1) {
  let count = 0;
  while (count < numCards) {
    let cardIndex = Math.floor(Math.random() * deck.length);
    playerArr.push(deck[cardIndex]);
    deck.splice(cardIndex, 1);
    count++;
  }
}

function cardTotal(playerArr) {
  let cardTot = 0;
  let numAces = playerArr.filter(card => {
    return card.split('').includes('A');
  }).length;
  for (let idx in playerArr) {
    cardTot += CARD_VALUES[playerArr[idx].slice(0, 1)];
  }
  while (cardTot > 21 && numAces > 0) {
    cardTot -= 10;
    numAces--;
  }
  return cardTot;
}

function busted(playerArr) {
  let cardTot = cardTotal(playerArr);
  return cardTot > 21;
}

function winner(hand1, hand2) {
  let compTotal = cardTotal(hand1);
  let userTotal = cardTotal(hand2);
  console.log(`------------------------------------`);
  if ((compTotal > userTotal && !busted(hand1)) || busted(hand2)) {
    console.log(`Computer wins with a count of ${compTotal}`);
  } else if ((userTotal > compTotal && !busted(hand2)) || busted(hand1)) {
    console.log(`You win with a count of ${userTotal}`);
  } else {
    console.log(`The game is a tie!`);
  }
}

function getAddtlCards(playerArr) {
  let addtlCards = '';
  for (let idx = 2; idx < playerArr.length; idx++) {
    addtlCards += ` and ${playerArr[idx]} `;
  }
  return addtlCards;
}

initializeDeck(deck);

dealCard(userHand, 2);
dealCard(computerHand, 2);

console.log(`You have:  ${userHand[0]} and ${userHand[1]}`);
console.log(`Your total is: ${cardTotal(userHand)} \n`);
console.log(`Dealer has a ${computerHand[0]} and an unknown card \n`);

while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  console.clear();
  if (answer === 'stay' || answer === 's') break;
  else if (answer === 'hit' || answer === 'h') {
    dealCard(userHand);
    console.log(`You have:  ${userHand[0]} and ${userHand[1]}` + getAddtlCards(userHand));
    console.log(`Your total is: ${cardTotal(userHand)} \n`);
    if (busted(userHand)) {
      console.log('You have busted!');
      break;
    }
  } else console.log("Invalid Input: please enter hit or stay");
}

while (!busted(userHand)) {
  const DEALER_HIT_LIMIT = 17;
  if (busted(computerHand)) {
    console.log("Dealer busted! \n");
    break;
  } else if (cardTotal(computerHand) > DEALER_HIT_LIMIT) break;
  else {
    dealCard(computerHand);
    console.log(`Dealer has a ${computerHand[0]} and ${computerHand[1]} ${getAddtlCards(computerHand)} \n`);
  }
}

console.log("total hand for dealer is " + cardTotal(computerHand) + " and their hand is " + computerHand);
console.log("total hand for you is " + cardTotal(userHand) + " and your hand is " + userHand);
winner(computerHand, userHand);
