const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const userIndex = require('./routes/index.js');

app.set('views', path.join(__dirname, '/views'));
app.set("view engine", "ejs");
app.use('/', userIndex);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});