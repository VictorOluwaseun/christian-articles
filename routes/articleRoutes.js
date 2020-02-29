const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    res.json({
      data: "Welcome"
    })
  })


module.exports = router;