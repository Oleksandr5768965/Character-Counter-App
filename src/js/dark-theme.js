const darkModeBtn = document.querySelector(".header__dark-theme-button");
darkModeBtn.addEventListener("click", darkModeSwitch);
function darkModeSwitch() { 
    if (darkModeBtn.classList.contains("flip-animation")) {
       darkModeBtn.classList.remove("flip-animation");
       darkModeBtn.classList.add("flip-animation-reverse"); 
    } else {
       darkModeBtn.classList.remove("flip-animation-reverse");
       darkModeBtn.classList.add("flip-animation");
    }
     document.body.classList.toggle("dark-mode");
}