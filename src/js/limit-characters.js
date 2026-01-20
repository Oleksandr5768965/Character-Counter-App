import { textArea } from './density-letters';

const limitField = document.getElementById("set-limit-field");
const setLimitCheck = document.getElementById("set-char-cbx");
const errorMessage = document.querySelector(".error-message");
const errorMessageValue = document.querySelector(".error-message-count");
export const excludeSpaceCheck = document.getElementById("exclude-cbx");

function updateState() {
  if (!setLimitCheck.checked) {
    resetError();
    return;
  }

  const limit = Number(limitField.value);
  let value;
  if (excludeSpaceCheck.checked) {
    value = textArea.value.replace(/\s/g, "");
  } else {
  value = textArea.value;
  }

  if (value.length >= limit) {
    limitCharacters();
    errorMessage.style.display = "flex";
    errorMessageValue.textContent = limit;
    errorMessage.classList.add("animate__shakeX");
  } else {
    resetError();
  }
}

function resetError() {
  textArea.style.borderColor = "#C27CF8";
  textArea.style.outlineColor = "#C27CF8";
  errorMessage.style.display = "none";
  errorMessage.classList.remove("animate__shakeX");
}

function limitCharacters() {
  textArea.style.borderColor = "#FE8159";
  textArea.style.outlineColor = "#FE8159";
}

textArea.addEventListener("input", updateState);
setLimitCheck.addEventListener("change", updateState);
excludeSpaceCheck.addEventListener("change", updateState);
limitField.addEventListener("input", updateState);