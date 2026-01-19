
 const textArea = document.getElementById("text");
const limitField = document.getElementById("set-limit-field");
const setLimitCheck = document.getElementById("set-char-cbx");
const errorMessage = document.querySelector(".error-message");
const errorMessageValue = document.querySelector(".error-message-count");
const excludeSpaceCheck = document.getElementById("exclude-cbx");
export function updateState() {
  if (!setLimitCheck.checked) {
    resetError();
    return;
  }

  const limit = Number(limitField.value);
  const value = excludeSpaceCheck.checked
    ? textArea.value.replace(/\s/g, "")
    : textArea.value;

  if (value.length >= limit) {
    limitCharacters();
    errorMessage.style.display = "flex";
    errorMessageValue.textContent = limit;
    errorMessage.classList.add("animate__shakeX");
  } else {
    resetError();
  }
}

export function resetError() {
  textArea.style.borderColor = "#C27CF8";
  textArea.style.outlineColor = "#C27CF8";
  errorMessage.style.display = "none";
  errorMessage.classList.remove("animate__shakeX");
}

export function limitCharacters() {
  textArea.style.borderColor = "#FE8159";
  textArea.style.outlineColor = "#FE8159";
}

textArea.addEventListener("input", updateState);
setLimitCheck.addEventListener("change", updateState);
excludeSpaceCheck.addEventListener("change", updateState);
limitField.addEventListener("input", updateState);