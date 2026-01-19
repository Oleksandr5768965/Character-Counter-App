import { textArea } from './density-letters';

const charCountEl = document.querySelector(".character-quantity");
const wordCountEl = document.querySelector(".word-quantity");
const sentenceCountEl = document.querySelector(".sentence-quantity")

function getCharacterCount(text) {
    let lettersCount = text.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '').length;
    return lettersCount;
}

function getWordCount(text) {
   let word =  text.split(/\s+/);
   let excludeSpace = word.filter(word => word.trim().length > 0);
   return excludeSpace.length;
}

function getSentenceCount(text) {
  return text
    .split(/[.!?]+/)
    .filter(sentence => sentence.trim().length > 0)
    .length;
}

textArea.addEventListener("input", () => {
    let charCount = getCharacterCount(textArea.value);
    charCountEl.innerText = charCount;
});

textArea.addEventListener("input", () => {
    let wordCount = getWordCount(textArea.value);
    wordCountEl.innerText = wordCount;
});

textArea.addEventListener("input", () => {
    let sentenceCount = getSentenceCount(textArea.value);
    sentenceCountEl.innerText = sentenceCount;
});