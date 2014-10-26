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
	var interval = setInterval(function () {
		if (!deck.draw(1)) {
			clearInterval(interval);
		}
	}, 50);
};

document.getElementById('reset-deck').onclick = function() {
	deck.reset();
	deck = new Deck({ containerId : 'table' });
}