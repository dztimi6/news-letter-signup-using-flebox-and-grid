"use script";

// Decleration of variables
let form;
const email = document.getElementById("email");
const input = document.querySelector("input");
const vEmail = document.querySelector(".v-email");
const succesPage = document.querySelector(".success-page");
const overlay = document.querySelector(".overlay");
const btnCloseSuccessPage = document.querySelector(".dismiss-button");
const btnOpenSuccessPage = document.querySelector(".submit-button");

const displayEmail = function (email) {
  document.querySelector(".span-email").textContent = email;
};

// function to open the success page
const openSuccessPage = function () {
  succesPage.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Funtion to close the success page
const closeSucessPage = function () {
  succesPage.classList.add("hidden");
  overlay.classList.add("hidden");
};

// function to check if email is valid
const isValidEmail = function (email) {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
};

// function to add error css style when email is not valid
const addErrorState = function () {
  input.classList.add("bg-color");
  console.log(email.classList);
  vEmail.classList.remove("hidden");
  vEmail.classList.add("error-color");
  console.log(input.placeholder);
  input.classList.add("error-email");
};

// function to remove error css style when email is valid
const removeErrorState = function () {
  email.classList.remove("bg-color");
  vEmail.classList.add("hidden");
  vEmail.classList.remove("error-color");
};

const emailCheck = function (email) {
  if (email.value === "") {
    addErrorState();
  } else {
    removeErrorState();
  }
  return;
};

const emailValidation = function (e) {
  if (email.value === "") {
    e.preventDefault();
    emailCheck(email);
    return;
  }

  if (email.value !== "" && isValidEmail(email.value)) {
    e.preventDefault();
    console.log("hoi");
    openSuccessPage();
  } else {
    addErrorState();
    return;
  }
};

// event listener to know if the submmit button is clicked for submission
btnOpenSuccessPage.addEventListener("click", function (e) {
  const emailValue = input.value;
  displayEmail(emailValue);
  emailValidation(e);
});

// event listener to know if the dismiss button is clicked after submission
btnCloseSuccessPage.addEventListener("click", function (e) {
  //   console.log(e.target.type);
  const form = document.querySelector(".form");
  closeSucessPage();
  if ((e.target.type = "submit")) {
    form.submit();
  }
});

overlay.addEventListener("click", closeSucessPage);

// Event listener to know if the ecape key or any area other area of the page was clicked to close the success page
document.addEventListener("keydown", function (e) {
  console.log(e);

  if (e.key === "Escape" && !succesPage.classList.contains("hidden")) {
    closeSucessPage();
    console.log(e.key);
    form = document.querySelector(".form");
    form.submit();
  }
});
