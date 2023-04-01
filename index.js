
const resultElement = document.getElementById("result");

function display(value) {
  resultElement.value += value;
}

function clearScreen() {
  resultElement.value = "";
}

function calculate() {
  try {
    resultElement.value = eval(resultElement.value);
  } catch (error) {
    resultElement.value = "Error";
  }
}
