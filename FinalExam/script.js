const input = document.getElementById('num');
const addP = document.getElementById('addition');
const subP = document.getElementById('subtraction');
const multP = document.getElementById('multiplication');
const divP = document.getElementById('division');
const button = document.getElementById('calcBtn');

function addition(num) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${i} + ${num} = ${i + num}\n`;
  }
  addP.textContent = result;
}

function subtraction(num) {
  let result = '';
  let i = 1;
  while (i <= 10) {
    result += `${i} - ${num} = ${i - num}\n`;
    i++;
  }
  subP.textContent = result;
}

function multiplication(num) {
  let result = '';
  let i = 1;
  do {
    result += `${i} * ${num} = ${i * num}\n`;
    i++;
  } while (i <= 10);
  multP.textContent = result;
}

function division(num) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${i} / ${num} = ${(i / num).toFixed(2)}\n`;
  }
  divP.textContent = result;
}

function runAll() {
  const number = Number(input.value);
  if (isNaN(number) || input.value === '') {
    alert("Please enter a valid number.");
    return;
  }

  addition(number);
  subtraction(number);
  multiplication(number);
  division(number);
}

button.addEventListener('click', runAll);
