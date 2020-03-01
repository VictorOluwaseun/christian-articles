const express = require("express");
const articleRouter = require("./routes/articleRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const app = express();


//Middlewares
app.use(express.json()); // Body parser

app.use("/api/v1/articles", articleRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;