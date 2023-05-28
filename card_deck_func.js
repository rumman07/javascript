// **********************************
// WRITING EVERYTHING USING FUNCTIONS
// **********************************

function initializeDeck(){
    const deck = [];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for(let value of values.split(",")){
        for(let suit of suits){
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}

function drawCard(deck, drawnCards){
    const card = deck.pop();
    drawnCards.push(card);
    return card;
}

function drawMultiple(numCards, deck, drawnCards){
    const cards = [];
    for(let i = 0; i < numCards; i++){
        cards.push(drawCard(deck, drawnCards));
    }
    return cards;
}

function shuffle(deck){
    // loop over array backwards
    for(let i = deck.length -1; i > 0; i--){
        //pick random index before current element
        let j = Math.floor(Math.random() * (i +1));
        // swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Calling the functions putting it together
const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
//Players hand
const hand1 = drawMultiple(3,firstDeck,drawnCards);
const hand2 = drawMultiple(3,firstDeck, drawnCards);
const hand3 = drawMultiple(6, firstDeck, drawnCards);