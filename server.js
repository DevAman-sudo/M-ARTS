const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const hbs = require('hbs');
const path = require('path');
const chalk = require('chalk');

const staticPath = path.join(__dirname , '/public/');
const templatePath = path.join(__dirname , '/templates/');
const viewsPath = path.join(__dirname , '/templates/views/');

// To Set The View Engine
app.set('view engine', 'hbs');
app.set("views" , viewsPath);
hbs.registerPartials(__dirname + '/templates/partials');

app.use(express.static(staticPath));

app.get('/' , (req , res) => {
    res.render('index');
});

app.listen(port , () => {
    console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});