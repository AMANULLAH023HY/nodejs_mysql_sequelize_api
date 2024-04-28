import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/ping", function (req, res) {
  res.send("/pong");
});

app.all("*", (req, res) => {
  res.status(404).send("OOPS! 404 page not found");
});

export default app;
