const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  res.status(400).json({
    status: "fail",
    data: "This route is not defined yet"
  })
});

exports.getUser = catchAsync(async (req, res, next) => {
  res.status(400).json({
    status: "fail",
    data: "This route is not defined yet"
  })
});

exports.createUser = catchAsync(async (req, res, next) => {
  res.status(400).json({
    status: "fail",
    data: "This route is not defined yet"
  })
});

exports.updateUser = catchAsync(async (req, res, next) => {
  res.status(400).json({
    status: "fail",
    data: "This route is not defined yet"
  })
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  res.status(400).json({
    status: "fail",
    data: "This route is not defined yet"
  })
});