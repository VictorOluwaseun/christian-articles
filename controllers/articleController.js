const Article = require("./../models/articleModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllArticles = catchAsync(async (req, res, next) => {
  const articles = await Article.find();
  res.status(200).json({
    status: "success",
    result: articles.length,
    data: {
      articles
    }
  });
});

exports.getArticle = catchAsync(async (req, res, next) => {
  const article = await Article.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      article
    }
  });
});

exports.createArticle = catchAsync(async (req, res, next) => {
  const newArticle = await Article.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      newArticle
    }
  });

});

exports.updateArticle = catchAsync(async (req, res, next) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  res.status(200).json({
    status: "success",
    data: {
      article
    }
  });
});

exports.deleteArticle = catchAsync(async (req, res, next) => {
  await Article.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null
  });
});