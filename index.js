const words = [
  'панцирь',
  'шоколад',
  'задница',
  'природа',
  'интерстеллар',
  'прикол',
  'локомотив',
  'ракета',
  'музыка',
];

const chooseWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const setupAnswerArray = (word) => {
  let answerArr = [];
  for (let i = 0; i < word.length; i++) {
    answerArr[i] = '_';
  }
  return answerArr;
};

const word = chooseWord();
const answerArray = setupAnswerArray(word);
let remainLetters = word.length;
let attempt = remainLetters + 6;

const showPlayerProgress = (answerArray) => {
  alert(answerArray.join(' '));
};

const getGuess = () => {
  return prompt('Введите букву или нажмите Отмена для выхода из игры').toLowerCase();
};

const updateGameState = (guess, word, answerArray) => {
  let count = 0;
  attempt--;
  for (let i = 0; i < word.length; i++) {
    if (guess === word[i]) {
      attempt++;
      if (answerArray[i] !== guess) {
        count++;
        answerArray[i] = guess;
      }
    } else {
      continue;
    }
  }
  return count;
};

const resultGame = (answerArray) => {
  alert(answerArray.join(' '));
  if (remainLetters > 0 && attempt <= 0) {
    alert('Попытки закончились, загаданным словом было - ' + word);
  }
  if (remainLetters === 0) {
    alert('Победа, слово которое было загадно - ' + word);
  }
};

while (remainLetters > 0) {
  showPlayerProgress(answerArray);
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите одиночную букву.');
  } else {
    const correctGuesses = updateGameState(guess, word, answerArray);
    remainLetters -= correctGuesses;
  }
  if (remainLetters > 0 && attempt <= 0) {
    break;
  }
}
resultGame(answerArray);
