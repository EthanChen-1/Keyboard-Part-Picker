const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.get("", (req, res) => {
    res.sendFile(path.join(__dirname, "mainpage", "main_page.html"));
});

app.get('/mainpage/:file', (req, res) => {
    let css_file = req.params;
    console.log(css_file);
    res.sendFile(path.join(__dirname, 'mainpage', `${css_file.file}`));
});

const itemRouter = require('./routes/items');

app.use('/item', itemRouter);

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
});