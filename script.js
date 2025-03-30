document.addEventListener('DOMContentLoaded', () => {
    const emojis = ['😒', '😊', '😂', '😁', '😉', '😎', '😜', '🤔'];
    const cards = [...emojis, ...emojis];
    let flippedCards = [];
    let matchedPairs = 0;

    cards.sort(() => 0.5 - Math.random());

    const gameContainer = document.getElementById('game');
    
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.value = emoji;
        card.innerHTML = `<span>${emoji}</span>`;
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
            this.classList.add('flipped');
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        
        if (card1.dataset.value === card2.dataset.value) {
            matchedPairs++;
            if (matchedPairs === emojis.length) {
                setTimeout(() => alert('Parabéns! Você venceu! 🎉'), 300);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
            }, 500);
        }
        
        flippedCards = [];
    }
});
