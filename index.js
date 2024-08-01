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
const word = words[Math.floor(Math.random() * words.length)];

const answerArr = [];
for (let i = 0; i < word.length; i++) {
  answerArr[i] = '_';
}

let remainLetters = word.length;
let attempt = word.length + 7;

while (remainLetters > 0 && attempt > 0) {
  alert(answerArr.join(' '));
  let guess = prompt('Введите букву или нажмите Отмена для выхода из игры').toLowerCase();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Введите только 1 букву');
  } else {
    for (let i = 0; i < word.length; i++) {
      console.log(remainLetters);
      if (word[i] === guess) {
        if (answerArr[i] === '_') {
          remainLetters--;
          attempt--;
        }
        answerArr[i] = guess;
      }
    }
  }

  if (remainLetters > 0 && attempt === 0) {
    alert('Попытки закончились, загаданным словом было - ' + word);
  }

  if (remainLetters === 0) {
    alert(answerArr.join(' '));
    alert('Победа, слово которое было загадно - ' + word);
  }
}
