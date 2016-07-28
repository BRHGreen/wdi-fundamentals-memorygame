/*console.log("JS file is connected to HTML! Woo!")
var cardOne = "King";	
var cardTwo = "King";
var cardThree = "Queen";
var cardFour = "Queen";

/*if (cardTwo == cardFour) {
	alert('you found a match!');
}
else {
	alert('play again?')
}*/
var cards = ['Queen', 'Queen', 'King', 'King'];

var cardsInPlay = [];

var board = document.getElementById('game-board');


var createBoard = function () {

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card'; 
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
		board.appendChild(cardElement);
	}
}

function isMatch (card) {
	if (card[0] === card[1]) {
		alert('you found a match!');
	}
	else {
		alert('play again?');
	}
	for (var i = 0; i < cards.length; i++) {
		document.getElementsByClassName('card')[i].innerHTML = " ";
		}
}

var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'King') { 
		this.innerHTML = "<img class='cardPics' src = 'images/Elvis.jpg'>";
		} else {
			this.innerHTML = "<img class='cardPics' src = 'images/queen.jpg'>";
			}
		if (cardsInPlay.length === 2) { 
			isMatch (cardsInPlay);
			cardsInPlay = []; 
		}
	}
	

createBoard();



























