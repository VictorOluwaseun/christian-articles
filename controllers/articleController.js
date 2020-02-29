const Article = require("./../models/articleModel");

exports.getAllArticles = async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.status(200).json({
      status: "success",
      result: articles.length,
      data: {
        articles
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        err
      }
    });
  }

}

exports.getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        article
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        err
      }
    });
  }
}

exports.createArticle = async (req, res, next) => {
  try {
    const newArticle = await Article.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newArticle
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        err
      }
    });
  }
}

exports.updateArticle = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        err
      }
    });
  }

}
exports.deleteArticle = async (req, res, next) => {
  try {
    await Article.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: err
    });
  }
}