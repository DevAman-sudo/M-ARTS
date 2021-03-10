// DOM elements //
const preloader = document.getElementById('loader');

setTimeout(function() {
    window.onload = preLoader();
}, 1500);

// per loader //
function preLoader() {
    preloader.style.display = "none";
}