
function createCard(id, question, answers, correctAnswer){
   let card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
    return card
}

function evaluateGuess(guess, correctAnswer){
    if(guess === correctAnswer){
        return 'correct!'
    }
    return 'incorrect!'
}

function createDeck(cards){
    return cards;
}

function countCards(deck){
    return deck.length;
}


// Creating a round
function createRound(deck) {
    let round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
        
        takeTurn: function(guess) {
            console.log(guess)
            return processTurn(round, guess);
           
        }
    };
    return round;
}

// Taking a turn
function processTurn(round, guess) {
   
    let feedback = evaluateGuess(guess, round.currentCard.correctAnswer);
    
    if (feedback === 'incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id);
    }

    if (round.turns < round.deck.length - 1) {
        round.turns++;
        round.currentCard = round.deck[round.turns];
    } else {
    round.currentCard = undefined;
    }
    return feedback  
}

function endRound(round) {
    let score = ((round.deck.length - round.incorrectGuesses.length) / round.deck.length) * 100;
    if(score < 90) {
        console.log(`Your score is ${score}%. You need more practice! Restart the round with node index.js`);
    } else {
        console.log(`Your score is ${score}%. Well done!`);
    }
}

//exporting 

module.exports = {
    createCard,
    evaluateGuess,
    createDeck,
    countCards,
    createRound,
    processTurn,
    endRound

}