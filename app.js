const express = require("express");
const articleRouter = require("./routes/articleRoutes");

const app = express();


//Middlewares
app.use(express.json()); // Body parser

app.use("/api/v1/articles", articleRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started"));