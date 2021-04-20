// DOM elements //
const readMoreBtn = document.getElementById('read_more_btn');
const alertButton = document.getElementById('alert-button');
const username = document.getElementById('username');

// redirection button //
readMoreBtn.addEventListener('click', () => {
    window.location = '/about';
});

// alert message //
alertButton.addEventListener('click', () => {
    alert('message send successful');
});