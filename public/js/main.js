// DOM elements //
const readMoreBtn = document.getElementById('read_more_btn');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit_btn');

// redirection button //
readMoreBtn.addEventListener('click' , () => {
    window.location = '/about';
});

// form submit //
form.addEventListener('submit' , (event) => {
    event.preventDefault();
    
    alert(username.value);
});