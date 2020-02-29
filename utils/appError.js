class AppError extends Error {
  constructor(message, statusCode) {
    super(message); //message coming from Error class
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor); //will not appear in the stack trace
  }
};

module.exports = AppError;