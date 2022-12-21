import { dragSlider,selectAnOption } from "/app/alerts.js";
import {
  getInput,
  randomizePassword,
  renderToDom,
  copyPassword,
} from "/app/functions.js";
let options = "";

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
});

setTimeout(() => {
  Toastify(selectAnOption).showToast();
}, 4000);

setTimeout(() => {
  Toastify(dragSlider).showToast();
}, 1500);
