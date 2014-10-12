var deck = new Deck({ containerId : 'table' });

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
	setInterval(function () {
		deck.draw(1);
	}, 100);
};