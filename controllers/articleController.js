const Article = require("./../models/articleModel");

exports.getAllArticles = async (req, res, next) => {
  const articles = await Article.find();
  res.status(200).json({
    status: "success",
    data: {
      articles
    }
  });
  next()
}

exports.getArticle = (req, res, nex) => {
  res.json({
    data: "Get One article"
  });
}

exports.postArticle = (req, res, nex) => {
  res.json({
    data: "Post an article"
  });
}

exports.updateArticle = (req, res, nex) => {
  res.json({
    data: "Update an article"
  });
}
exports.deleteArticle = (req, res, nex) => {
  res.json({
    data: "Delete an article"
  });
}