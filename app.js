const form = document.querySelector("form");
const displayCookie = document.querySelector(".display-cookie");
const inputName = document.querySelector("#name");
const inputValue = document.querySelector("#value");
const nameCookie = document.querySelector(".name");
const valueCookie = document.querySelector(".value");
const showDisplayCookie = document.querySelector(".show-card-cookie");
const clearCookie = document.querySelector(".clear-span");
const toast = document.querySelector(".toast");
let newCookie;
const errorMessage = document.querySelector(".display-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputName.value && !inputValue.value) {
    handleError();
  } else if (inputName.value && inputValue.value) {
    createCookie(inputName.value, inputValue.value);
    showPushNotification("green", "Cookie crée");
  }
});

showDisplayCookie.addEventListener("click", () => {
  if (!inputName.value && !inputValue.value) {
    handleError();
  } else {
    displayCookie.style.display = "flex";
  }
});

createCookie = (name, value) => {
  nameCookie.textContent = name;
  valueCookie.textContent = value;
  document.cookie = name + "=" + value;
};

updatedCookie = (name, value) => {
  nameCookie.textContent = name;
  valueCookie.textContent = value;
  document.cookie = name + "=" + value;
  showPushNotification("orange", "Cookie modifié");
};

showPushNotification = (color, value) => {
  toast.style.display = "block";
  toast.style.backgroundColor = color;
  toast.style.color = "white";
  toast.textContent = value;
  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
};

clearCookie.addEventListener("click", () => {
  deleteCookie(inputName.value);
});

clearInput = () => {
  form.reset();
  nameCookie.textContent = "";
  valueCookie.textContent = "";
};

deleteCookie = (name) => {
  document.cookie = `${name} =; Max-Age=0`;
  clearInput();
  displayCookie.style.display = "none";
  showPushNotification("red", "Cookie supprimé");
};

handleError = () => {
  errorMessage.style.display = "block";
  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 2000);
};
