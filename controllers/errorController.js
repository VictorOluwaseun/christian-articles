const AppError = require("./../utils/appError");

//Cast Error handler
const handleCastErrorDB = err => {
 const message = `Invalid ${err.path}: ${err.value}.`;
 return new AppError(message, 400);
};

// Duplicate Error handler
const handleDuplicateFieldsDB = err => {
 const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];

 const message = `Duplicate field value: ${value}. Please enter another value`;

 return new AppError(message, 400);
};

//Validation Error handler
const handleValidationErrorDB = err => {
 console.log(err);
 const errors = Object.values(err.errors).map(el => el.message);
 console.log(errors);

 const message = `Invalid input data. ${errors.join(". ")}`;
 return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
 res.status(err.statusCode).json({
  status: err.status,
  error: err,
  message: err.message,
  stack: err.stack
 });
};

const sendErrorProd = (err, res) => {
 //Operational, trusted error: Send error to the client
 if (err.isOperational) {
  res.status(err.statusCode).json({
   status: err.status,
   message: err.message
  });
 } else {
  //Programming error or other unknown error: not to leak error details
  //1. Lor error
  console.error("ERROR 💥", err);
  //2. Send generic message
  res.status(500).json({
   status: "error",
   message: "Something went very wrong!"
  });
 }
};

module.exports = (err, req, res, next) => {
 // console.log(err.stack);
 err.statusCode = err.statusCode || 500;
 err.status = err.status || "error";

 if (process.env.NODE_ENV === "development") {
  sendErrorDev(err, res);
 } else if (process.env.NODE_ENV === "production") {
  let error = { ...err };
  if (!error.message) error.message = err.message;
  if (error.name === "CastError") error = handleCastErrorDB(error);
  //code from mongo db driver
  if (error.code === 11000) error = handleDuplicateFieldsDB(error);
  if (error.name === "ValidationError") error = handleValidationErrorDB(error);
  sendErrorProd(error, res);
 }
};
