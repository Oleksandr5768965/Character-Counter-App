import { textArea } from './density-letters';

const limitField = document.getElementById("set-limit-field");
const setLimitCheck = document.getElementById("set-char-cbx");
const errorMessage = document.querySelector(".error-message");
const errorMessageValue = document.querySelector(".error-message-count");
export const excludeSpaceCheck = document.getElementById("exclude-cbx");

function updateStateLimitCharacters() {
  if (!setLimitCheck.checked) {
    resetLimitCharactersError();
    return;
  }

  const limit = Number(limitField.value);
  let value;

  if (excludeSpaceCheck.checked) {
    value = textArea.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
  } else {
  value = textArea.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
  }
  if (value.length === 0) {
    resetLimitCharactersError();
  } 
  else if (value.length >= limit) {
    showLimitCharactersError();
    errorMessage.style.display = "flex";
    errorMessageValue.textContent = limit;
    errorMessage.classList.add("animate__shakeX");
  } else {
    resetLimitCharactersError();
  }
}

function resetLimitCharactersError() {
  textArea.style.borderColor = "#C27CF8";
  textArea.style.outlineColor = "#C27CF8";
  errorMessage.style.display = "none";
  errorMessage.classList.remove("animate__shakeX");
}

function showLimitCharactersError() {
  textArea.style.borderColor = "#FE8159";
  textArea.style.outlineColor = "#FE8159";
}

textArea.addEventListener("input", updateStateLimitCharacters);
setLimitCheck.addEventListener("change", updateStateLimitCharacters);
excludeSpaceCheck.addEventListener("change", updateStateLimitCharacters);
limitField.addEventListener("input", updateStateLimitCharacters);