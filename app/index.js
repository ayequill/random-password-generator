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
    Toastify({
      text: "Copied",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
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
});

setTimeout(() => {
  Toastify({
    text: "And select an option",
    duration: 4000,
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
}, 4000);

setTimeout(() => {
  Toastify({
    text: "Drag the slider for length of password.",
    duration: 4000,
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
}, 1500);
