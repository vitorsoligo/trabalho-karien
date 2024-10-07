const express = require('express');
const app = express();
const port = 5000;

const path = require("path");
const page1 = require('./page1');
const page2 = require('./page2');

const basepath = path.join(__dirname);

app.use('/page1', page1);
app.use('/page2', page2);

app.get('/', (req, res) => {
    res.sendFile(path.join(basepath, 'page1', 'page1.html'));
});

app.listen(port, () => {
    console.log(`App está rodando na porta ${port}`);
});