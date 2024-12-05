let display = document.getElementById('display');

function clearDisplay() {
  display.textContent = '0';
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1) || '0';
}

function appendValue(value) {
  if (display.textContent === '0' && value !== '.') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = 'Error';
  }
}

function calculatePercentage() {
  try {
    display.textContent = eval(display.textContent) / 100;
  } catch (error) {
    display.textContent = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    display.textContent = Math.sqrt(eval(display.textContent));
  } catch (error) {
    display.textContent = 'Error';
  }
}

function scientificFunction(func) {
  try {
    let value = eval(display.textContent);
    switch (func) {
      case 'sin':
        display.textContent = Math.sin((value * Math.PI) / 180); 
        break;
      case 'cos':
        display.textContent = Math.cos((value * Math.PI) / 180);
        break;
      case 'tan':
        display.textContent = Math.tan((value * Math.PI) / 180);
        break;
      default:
        display.textContent = 'Error';
    }
  } catch (error) {
    display.textContent = 'Error';
  }
}
