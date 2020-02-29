exports.getAllArticles = (req, res, next) => {
  res.json({
    data: "Welcome"
  });
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