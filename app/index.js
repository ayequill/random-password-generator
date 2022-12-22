import { dragSlider,selectAnOption } from "./modules/alerts.js";
import {
  getInput,
  randomizePassword,
  renderToDom,
  copyPassword,
} from "./modules/functions.js";
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
}, 3000);

setTimeout(() => {
  Toastify(dragSlider).showToast();
}, 1500);
