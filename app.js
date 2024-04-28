const express =require(  "express");
const dotenv =require ("dotenv");
const bodyParser =require("body-parser");

const postRoute =require('./route/posts.js')

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/posts',postRoute);

app.use("/ping", function (req, res) {
  res.send("/pong");
});

app.all("*", (req, res) => {
  res.status(404).send("OOPS! 404 page not found");
});

module.exports =  app;
