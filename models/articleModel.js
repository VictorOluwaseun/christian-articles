const mongoose = require("mongoose");
const slugify = require("slugify");

const articleSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "An article must have a category"],
    trim: true,
    minlength: [3, "The category name must be greater than 2 characters"]
  },
  title: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "An article must have a title"],
    minlength: [3, "An article title must have more than or equal to 3 characters"],
    maxlength: [25, "An article title must have less than or equal to 25 characters"]
  },
  slug: String,
  body: {
    type: String,
    trim: true,
    required: [true, "An article must have a body"]
  },
  keyVerse: {
    type: String,
    trim: true,
    required: [true, "Provide key verse for this article"]
  },
  summary: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  dateToRead: {
    type: Date
  }
});

//DOCUMENT MIDDLEWARE: runs before .save() and .create()
//Slugify title
articleSchema.pre("save", function (next) {
  this.slug = slugify(this.title, {
    lower: true
  });
  next();
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;