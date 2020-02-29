const express = require("express");
const articleRouter = require("./routes/articleRoutes");
const globalErrorHandler = require("./controllers/errorController");

const app = express();


//Middlewares
app.use(express.json()); // Body parser

app.use("/api/v1/articles", articleRouter);

app.use(globalErrorHandler);

module.exports = app;