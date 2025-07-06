let indicator = document.querySelector(".scroll-indicator .progress");
console.log(indicator);
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(scrollHeight);
window.addEventListener('scroll',scrolls);

function scrolls() {
    let scrollTp = document.documentElement.scrollTop;
    let scrolled = (scrollTp/scrollHeight) * 100;
    indicator.style.width = `${scrolled}%`
}