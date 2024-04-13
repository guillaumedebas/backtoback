const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('request');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({message: "Response server" })
    next();
});

app.use((req, res) => {
    console.log('response send');
});

module.exports = app;