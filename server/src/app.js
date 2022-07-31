const express = require("express");
const cors = require("cors");

const planetsRuter = require("./routes/planets/planets.router");

const app = express();

app.use(cors({
    origin: "http://localhost:3001"
}));
app.use(express.json());
app.use(planetsRuter);

module.exports = app;
