// DOM elements //
const readMoreBtn = document.getElementById('read_more_btn');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit_btn');

// redirection button //
readMoreBtn.addEventListener('click', () => {
    window.location = '/about';
});

// form submit //
form.addEventListener('submit', (event) => {
    event.preventDefault();

    Email.send({
        Host: "smtp.gmail.com",
        Username: "mannu.website@gmail.com",
        Password: "leurerxsqnslvnzk",
        To: 'mannu.website@gmail.com',
        From: email.value,
        Subject: "Email From User Of Mannu @Website",
        Body: `Name= ${username.value} ,
        Email= ${email.value} ,
        Message= ${message.value}`
    }).then(
        message => alert("message send success")
    );
});