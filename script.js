let display = document.querySelector('.display1');
let output = '';

function appendInput(value) {
  output += value;
  display.value = output;
}

function clearInput() {
  output = '';
  display.value = output;
}

function calculate() {
  try {
    let result = eval(output);
    display.value = result;
    output = result;
  } catch (error) {
    display.value = 'Error';
  }
}