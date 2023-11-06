const express = require("express");
const app = express();
const cors = require("cors");
//const controller = require("./controllers/")

app.use(cors());
app.use(express.json());
//app.use("/", )

app.get("/", (req, res) => {
  res.send("Welcome to our single resource app");
});

app.get("*", (req, res) => {
  res.status(404).send("error, route does not exist");
});

module.exports = app;
