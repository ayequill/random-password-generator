import { cleared, dragSlider, selectAnOption } from "./modules/alerts.js";
import {
  getInput,
  randomizePassword,
  renderToDom,
  copyPassword,
  savePassword,
  clearStorage,
} from "./modules/functions.js";
let options = "";

savePassword();

document.addEventListener("click", (e) => {
  if (e.target.id === "genBtn") {
    getInput(options);
    randomizePassword();
    renderToDom();
    options = "";
  }
  if (e.target.id === "copy") {
    copyPassword();
  }
  if (e.target.id === "clearBtn") {
    clearStorage();
    document.getElementById("savedPasswords").innerHTML = "";
    Toastify(cleared).showToast();
  }
});

setTimeout(() => {
  Toastify(selectAnOption).showToast();
}, 3000);

setTimeout(() => {
  Toastify(dragSlider).showToast();
}, 1500);
