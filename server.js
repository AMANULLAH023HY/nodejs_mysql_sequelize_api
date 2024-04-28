const app =require("./app.js");

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`App is running at http:localhost:${PORT} `);
});
