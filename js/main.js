var options = { 
	containerId 		: 'table', 
	drawTimeInterval 	: 50
};

var deck = new Deck(options);


document.getElementById('shuffle-button').onclick = function () {
	deck.shuffle();	
};
document.getElementById('reverse-button').onclick = function () {
	deck.reverse();
};
document.getElementById('draw-button').onclick = function () {
	deck.draw(1);
};
document.getElementById('draw-all-button').onclick = function () {
	deck.drawAll();
};
document.getElementById('reset-deck').onclick = function () {
	deck.destroy();
	deck = new Deck(options);
};