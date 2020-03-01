const express = require("express");
const morgan = require("morgan");
const articleRouter = require("./routes/articleRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const app = express();


//Middlewares
app.use(express.json()); // Body parser

app.use(morgan("dev"));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.info(req.requestTime);
  console.log(process.env.NODE_ENV);
  next();
});

//Route
app.use("/api/v1/articles", articleRouter);
app.use("/api/v1/users", userRouter);

//The undefined or unresgistered routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

//The global error handling middleware
app.use(globalErrorHandler);

module.exports = app;