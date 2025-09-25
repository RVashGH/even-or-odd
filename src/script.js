const inputField = document.getElementById('input');
const resultText = document.getElementById('result');
const infoText = document.getElementById('info');
const enterButton = document.getElementById('button');

enterButton.addEventListener('click', function() {
  let x = inputField.value;
  let modX = x % 2;
  let ch;
  
  if (modX === 0) {
  ch = 1;
  } else {
  ch = 0;
  };

  resultText.textContent = ch;

  if (ch === 1) {
  infoText.textContent = "(чётное)"
  } else {
  infoText.textContent = "(нечётное)"
  };
});