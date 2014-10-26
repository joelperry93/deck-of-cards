function Deck(options) {
    var deck = this, cardImagesSuitStartingPoints = [1,49,45,41,37,33,29,25,21,17,13,9,5] /// Where rank cards start in the images folder. 1.png = Aces, 49.png = 2s.. etc.
    
    this.tableID    = options.containerId;
    this.suits      = ['Clubs', 'Spades', 'Hearts', 'Diamonds'], // In order with image folder
    this.imageURL   = "img/cards/face-down.png",
    this.cards      = [],
    this.drawn      = [];

 	// Make 52 cards 
    for (var i = 1; i <= 13; i++) { 
        for (var suit in this.suits) {
           this.cards.push(new Card(this.suits[suit], i, cardImagesSuitStartingPoints[i - 1]));
        }
    }
    
    this.draw = function (numberOfCards) {
	    var cards = [];

	    for (var i = 0; i < numberOfCards; i++) {
	        if (this.cards.length === 0) {
	            return false;
	        }

	        cards[i] = this.cards.pop();

	        this.drawn.push(cards[i]);

	        document.getElementById(this.tableID).appendChild(createCardDiv(cards[i]));
	    }

	    return cards;

	    function createCardDiv(cardData) {
	        var divTag   = document.createElement('div');
	        var imageTag = document.createElement('img');
	        var nameTag  = document.createElement('div');
	        var valueTag = document.createElement('div');

	        imageTag.src       = cardData.imageURL;
	        nameTag.innerHTML  = cardData.rank + " of " + cardData.suit;
	        valueTag.innerHTML = "(" + cardData.value + ")";

	        imageTag.className  += " card";
	        nameTag.className   += " cardName";
	        valueTag.className  += " cardValue";
	        divTag.className    += " cardHolder";

	        divTag.appendChild(imageTag);
	        divTag.appendChild(nameTag);
	        divTag.appendChild(valueTag);

	        return divTag;
	    }
	};

	this.shuffle = function () {
	    var i = this.cards.length, j, tempi, tempj;

	    if (i == 0) {
	        return false;
	    }

	    while (--i) {
	       j = Math.floor(Math.random() * (i + 1));

	       tempi = this.cards[i];
	       tempj = this.cards[j];

	       this.cards[i] = tempj;
	       this.cards[j] = tempi;
	     }

	     return this.cards;
	};

	this.reverse = function () {
	      this.cards.reverse();
	};

	this.reset = function() {
		this.cards = [];
		this.drawn = [];
		document.getElementById(this.tableID).innerHTML = '';
		console.log(this);
		delete this;
	};

	this.addToBottom = function (card) {
	    deck.cards.unshift(card);
	    delete deck.drawn.lastIndexOf(card);
	};

    function Card(suit, number, imagesStartPoint) {
        this.suit     = suit;
        this.imageURL = "img/cards/" + (imagesStartPoint + deck.suits.indexOf(suit)) + ".png";

        switch (number) {
            case 1 : this.rank  = "Ace";
                     this.value = 11;
                     break;

            case 11: this.rank  = "Jack";
                     this.value = 10;
                     break;

            case 12: this.rank  = "Queen";
                     this.value = 10;
                     break;

            case 13: this.rank  = "King";
                     this.value = 10;
                     break;

            default: this.rank  = number;
                     this.value = number;
        }
    }
}