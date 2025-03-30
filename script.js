document.addEventListener('DOMContentLoaded', () => {
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
    const cards = [...emojis, ...emojis];
    let flippedCards = [];
    let matchedPairs = 0;

    // Embaralha as cartas
    cards.sort(() => 0.5 - Math.random());

    // Cria o tabuleiro
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = '';
    
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        card.dataset.value = emoji;
        card.innerHTML = '<span style="display:none">' + emoji + '</span>';
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });

    // Função para virar carta
    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
            this.classList.add('flipped');
            this.querySelector('span').style.display = 'block';
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    // Verifica se as cartas são iguais
    function checkMatch() {
        const [card1, card2] = flippedCards;
        
        if (card1.dataset.value === card2.dataset.value) {
            matchedPairs++;
            if (matchedPairs === emojis.length) {
                setTimeout(() => alert('Parabéns! Você venceu! 🎉'), 300);
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.querySelector('span').style.display = 'none';
            card2.querySelector('span').style.display = 'none';
        }
        
        flippedCards = [];
    }
});
