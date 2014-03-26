var deck = new Deck('table');

document.getElementById('shuffle-button').onclick = function () {
	deck.shuffle();	
};
document.getElementById('reverse-button').onclick = function () {
	deck.reverse();
};
document.getElementById('draw-button').onclick = function () {
	deck.draw(1);
};