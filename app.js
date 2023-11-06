const express = require("express");
const app = express();
const cors = require("cors");
const tasksController = require("./controllers/tasksController");

app.use(cors());
app.use(express.json());
app.use("/tasks", tasksController);

app.get("/", (req, res) => {
  res.send("Welcome to our single resource app");
});

app.get("*", (req, res) => {
  res.status(404).send("error, route does not exist");
});

module.exports = app;
