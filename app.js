const express = require("express");
const articleRouter = require("./routes/articleRoutes");

const app = express();


//Middlewares
app.use(express.json()); // Body parser

app.use("/api/v1/articles", articleRouter);

module.exports = app;