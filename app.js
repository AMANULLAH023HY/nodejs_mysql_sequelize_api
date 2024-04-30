const express =require(  "express");
const dotenv =require ("dotenv");
const bodyParser =require("body-parser");

const postRoute =require('./route/posts.js')
const userRoute =require('./route/user.js')

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

// ROUTES
app.use('/api/posts',postRoute);
app.use('/api/user',userRoute);


app.all("*", (req, res) => {
  res.status(404).send("OOPS! 404 page not found");
});

module.exports =  app;
