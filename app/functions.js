import {
  alpha,
  lowerCaseArray,
  symbolsArray,
  numbersArray,
} from "/app/data.js";
import { selectOption, copied } from "/app/alerts.js";
const upperCase = document.getElementById("uppercaseCheckbox");
const lowerCase = document.getElementById("lowerCaseCheckbox");
const symbols = document.getElementById("symbolCheckbox");
const numbers = document.getElementById("numbersCheckbox");
const passLength = document.getElementById("lengthInput");
const rangeValue = document.getElementById("rangeValue");
export const passwordDom = document.getElementById("password");
let randomPassword = "";
let selectedOption = [];

export const getInput = (str) => {
  if (upperCase.checked) {
    str += alpha.join("");
  }
  if (lowerCase.checked) {
    str += lowerCaseArray.join("");
  }
  if (symbols.checked) {
    str += symbolsArray.join("");
  }
  if (numbers.checked) {
    str += numbersArray.join("");
  }

  selectedOption = str.split("");
};

export const randomizePassword = () => {
  if (
    upperCase.checked ||
    lowerCase.checked ||
    symbols.checked ||
    numbers.checked
  ) {
    const passLength = document.getElementById("lengthInput").value;
    for (let i = 0; i < passLength; i++) {
      randomPassword +=
        selectedOption[Math.floor(Math.random() * selectedOption.length)];
    }
  } else {
    Toastify(selectOption).showToast();
  }
};

export const renderToDom = () => {
  passwordDom.innerHTML = randomPassword;
  randomPassword = "";
};
export const copyPassword = () => {
  const copyText = document.getElementById("password");
  navigator.clipboard.writeText(copyText.textContent);
  Toastify(copied).showToast();
};
