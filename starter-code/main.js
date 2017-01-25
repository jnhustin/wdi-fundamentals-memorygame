console.log("JS file is connected to HTML! Woo!")

var gameBoard = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

createBoard();


function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
	
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	var cardData = this.getAttribute('data-card');
	if (cardData === 'queen') {
		this.innerHTML = '<img src="img/queen.png">';
	} else if (cardData === 'king') {
		this.innerHTML = '<img src="img/king.png">';
	}
	
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		
		setTimeout(function () {
			var cardsToReset = document.getElementsByClassName('card');
			for (var i = 0; i < cardsToReset.length; i++) {					
				cardsToReset[i].innerHTML = '';
			}}, 1000);


		console.log('clear!');

		cardsInPlay = [];
	}

}

function isMatch(twoCardArr) {
	if (twoCardArr[0] === twoCardArr[1]) {
		alert('match');
		return true;
	} else {
		alert('no match');
		return false;
	}
}