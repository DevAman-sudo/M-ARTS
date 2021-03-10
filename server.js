const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const hbs = require('hbs');
const path = require('path');
const chalk = require('chalk');
const nodemailer = require("nodemailer");
require('dotenv').config();

const staticPath = path.join(__dirname, '/public/');
const partialsPath = path.join(__dirname, '/templates/partials/');
const viewsPath = path.join(__dirname, '/templates/views/');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// nodemailer auth //
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSKEY,
    },
});

// To Set The View Engine
app.set('view engine', 'hbs');
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact', async (req, res) => {
    try {
        let user_name = req.body.name;
        let user_email = req.body.email;
        let user_message = req.body.message;
        let textMessage = `Name = ${user_name} , Email = ${user_email} , Message = ${user_message}`;
        console.log(textMessage);

        // nodemailer mail option //
        let mailOptions = {
            from: 'user_email', // sender address
            to: "mannu.website@gmail.com", // list of receivers
            subject: "Mail From User Of Mannu @Website ✔", // Subject line
            text: textMessage
        };
        
        transporter.sendMail(mailOptions , (err , data) => {
            if (err) {
                console.log(`Error Occured => ${err}`);
            } else {
                console.log('Email Send Sucessfully');
            }
        });

        res.redirect('/contact');

    } catch {
        res.status(400).send(Error);
    }
});

app.listen(port, () => {
    console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});