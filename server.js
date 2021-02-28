const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const hbs = require('hbs');
const path = require('path');
const chalk = require('chalk');

const staticPath = path.join(__dirname , '/public/');

app.use(express.static(staticPath));

app.get('/' , (req , res) => {
    res.send('index');
});

app.listen(port , () => {
    console.log( chalk.red.bgBlue.bold(`http://127.0.0.1:${port}`));
});