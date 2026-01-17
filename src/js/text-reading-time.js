// import { textArea } from './limit-characters';

const textArea = document.getElementById("text");
const readingTimeEl = document.querySelector(".reading-time");

function getReadingTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if (words === 0) return "";
  const minutes = Math.ceil(words / 200);
  return minutes < 1
    ? "less than 1 minute"
    : `${minutes} minute${minutes > 1 ? "s" : ""}`;
}

textArea.addEventListener("input", () => {
  const readingTime = getReadingTime(textArea.value);
  readingTimeEl.textContent = readingTime;
    // ? `Approx reading: ${readingTime}`
    // : "";
});

