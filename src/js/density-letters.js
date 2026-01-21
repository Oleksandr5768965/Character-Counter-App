
export const textArea = document.getElementById("text");
const densityBlock = document.getElementById("letter-density");

textArea.addEventListener("input", updateDensity);
 export let expanded = false;          // expanded state

function updateDensity() {
  const text = textArea.value.toLowerCase().replace(/\s/g, "");

  if (!text.length) {
    densityBlock.innerHTML = `
    <span class="letter-count__list-title">Letter Density</span>
    <p id="placeholder">Type something to see letter density</p>`;
    return;
  }

  const map = {};
  const lettersOnly = text.match(/[a-z]/g);   // only english letters

  if (!lettersOnly) {
    densityBlock.innerHTML = `
    <div>
     <span class="letter-count__list-title">Letter Density</span>
     <p>No English letters found</p>
    </div>`
    return;
  }

  lettersOnly.forEach(char => map[char] = (map[char] || 0) + 1);

  const entries = Object.entries(map)
    .sort((a, b) => b[1] - a[1]);

  const total = lettersOnly.length;

  renderList(entries, total);
}

 export function renderList(entries, total) {
  densityBlock.innerHTML = `<span class="letter-count__list-title">Letter Density</span>`;  
   const visible = expanded ? entries : entries.slice(0, 5);
  visible.forEach(([letter, count]) => {
    const percent = ((count / total) * 100).toFixed(2);
    densityBlock.innerHTML += `
      <div class="row">
        <div class="letter">${letter}</div>
        <div class="bar-wrapper">
          <div class="bar" style="width:${percent}%"></div>
        </div>
        <div class="info">
          ${count} (${percent}%)
        </div>
      </div>
    `;
  });
  if (entries.length > 5) {
    densityBlock.innerHTML += `
  <div id="toggleMore" class="${expanded ? "toggle-btn-less" : "toggle-btn-more"}">
    ${expanded ? "See less" : "See more"}
  </div>
  `;
     document.getElementById("toggleMore").addEventListener("click", (event) => {
      const btn = event.target.closest("#toggleMore");
        if (!btn) return;
        expanded = !expanded;
        btn.classList.toggle("toggle-btn-more");
        btn.classList.toggle("toggle-btn-less");
      renderList(entries, total);
    });
  }
}