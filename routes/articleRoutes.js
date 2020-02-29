const express = require("express");
const articleController = require("./../controllers/articleController");

const router = express.Router();

router
  .route("/")
  .get(articleController.getAllArticles)
  .post(articleController.createArticle);

router
  .route("/:id")
  .get(articleController.getArticle)
  .patch(articleController.updateArticle)
  .delete(articleController.deleteArticle)


module.exports = router;