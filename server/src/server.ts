import express from "express";

const app = express();

app.get("/users", (req, res) => {
  res.json(["Murilo", "Diego", "Mayk"]);
});

const port = 3333;
app.listen(port, () => console.log("Backend running on port " + port));
