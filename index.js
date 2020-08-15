var inputQuestion = document.querySelector('.ask-question');
var buttonGetAnswer = document.querySelector('.get-answer');
var eightBall = document.querySelector('.eight-ball');
var answer = document.querySelector('.hidden');
var hiddenQuestion = document.querySelector('.hidden-question');
var hiddenAnswer = document.querySelector('.hidden-answer');
var buttonClear = document.querySelector('.clear-button');

buttonGetAnswer.addEventListener('click', displayAnswer);
buttonClear.addEventListener('click', clearQuestion);

var response;

var woodyResponse = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomResponse() {
  response = (woodyResponse[getRandomIndex(woodyResponse)]);
  console.log(response);
  return response;
}

function displayAnswer(event) {
  getRandomResponse();
  hiddenAnswer.innerText = response;
  eightBall.classList.add('hidden');
  answer.classList.remove('hidden');
  buttonGetAnswer.disabled = true;
  buttonClear.disabled = false;
  hiddenQuestion.innerText = `"${inputQuestion.value}?"`;
  inputQuestion.value = 'Ask your question here!';
}

function clearQuestion(event) {
  eightBall.classList.remove('hidden');
  answer.classList.add('hidden');
  buttonGetAnswer.disabled = false;
  buttonClear.disabled = true;
  inputQuestion.value = 'Ask your question here!';
}
