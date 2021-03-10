const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const hbs = require('hbs');
const path = require('path');
const chalk = require('chalk');

const staticPath = path.join(__dirname, '/public/');
const partialsPath = path.join(__dirname, '/templates/partials/');
const viewsPath = path.join(__dirname, '/templates/views/');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

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
        let user_message = req.body.password;

        
        res.redirect('/contact');

    } catch {
        res.status(400).send(Error);
    }
});

app.listen(port, () => {
    console.log(chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});