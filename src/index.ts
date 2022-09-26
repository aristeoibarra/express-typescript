import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (_, res) => {
  console.log("Hello World!");
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
