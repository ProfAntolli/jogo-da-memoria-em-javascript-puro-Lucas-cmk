const cards = ['🦸', '🦹', '🧙', '🧚', '🦸', '🦹', '🧙', '🧚'];
let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createGame() {
    const gameContainer = document.querySelector('.game-container');
    const shuffledCards = shuffle(cards);
    
    shuffledCards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.textContent = emoji;
        card.style.display = 'none'; // Esconde inicialmente
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this)) {
        this.style.display = 'flex';
        this.classList.add('flipped');
        flippedCards.push(this);
        
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.textContent === card2.textContent) {
        matchedCards.push(card1, card2);
        if (matchedCards.length === cards.length) {
            alert('Você venceu! 🎉');
        }
    } else {
        card1.style.display = 'none';
        card2.style.display = 'none';
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    
    flippedCards = [];
}

createGame();
