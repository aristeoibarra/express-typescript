import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_, res) => {
  console.log("Hello World!");
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
