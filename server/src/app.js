const express = require("express");

const planetsRuter = require("./routes/planets/planets.router");

const app = express();

app.use(express.json());
app.use(planetsRuter);

module.exports = app;
