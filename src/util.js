const inquirer = require('inquirer');
const { endRound, processTurn } = require('./card');

const genList = (round) => {
  let card = round.currentCard;
  
  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (userGuess, currentRound) => {
  const feedback = processTurn(currentRound, userGuess);
  return {
    name: 'feedback',
    message: `Your answer of ${userGuess} is ${feedback}`
  }
}

async function main(round) {
  if(!round.currentCard) {
    endRound(round);
    return; // Exit early from the function if there's no more cards
  }

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

  main(round)

}

module.exports.main = main;