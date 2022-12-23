import { alpha, lowerCaseArray, symbolsArray, numbersArray } from "./data.js";
import { selectOption, copied } from "./alerts.js";
const upperCase = document.getElementById("uppercaseCheckbox");
const lowerCase = document.getElementById("lowerCaseCheckbox");
const symbols = document.getElementById("symbolCheckbox");
const numbers = document.getElementById("numbersCheckbox");
export const passwordDom = document.getElementById("password");
let randomPassword = "";
const savedPasswords = JSON.parse(localStorage.getItem("password"));

let selectedOption = [];
let history = [];

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
    history.push(randomPassword);
    localStorage.setItem("password", JSON.stringify(history));
  } else {
    Toastify(selectOption).showToast();
  }
};

export const renderToDom = () => {
  passwordDom.innerHTML = randomPassword;
  document.getElementById(
    "savedPasswords"
  ).innerHTML += `<p>${randomPassword}</p>`;

  randomPassword = "";
};
export const copyPassword = () => {
  const copyText = document.getElementById("password");
  navigator.clipboard.writeText(copyText.textContent);
  Toastify(copied).showToast();
};

export const savePassword = () => {
  if (savedPasswords) {
    history = savedPasswords;
  }

  history.forEach((password) => {
    document.getElementById("savedPasswords").innerHTML += `<p>${password}</p>`;
  });
};

export const clearStorage = () => {
  localStorage.clear();
};
