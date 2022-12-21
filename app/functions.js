import {
  alpha,
  lowerCaseArray,
  symbolsArray,
  numbersArray,
} from "/app/data.js";
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
    Toastify({
      text: "Select an option!",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#F7ED05ff",
        color: "#1B5E61ff",
        fontWeight: "bold",
        fontSize: "1.4rem",
        borderRadius: "1.25em",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
};

export const renderToDom = () => {
  passwordDom.innerHTML = randomPassword;
  randomPassword = "";
};
export const copyPassword = () => {
  const copyText = document.getElementById("password");
  navigator.clipboard.writeText(copyText.textContent);
};
