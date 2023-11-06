const express = require("express");
const tasks = express.Router();
const { getAllTasks } = require("../queries/tasks");

//GET -
tasks.get("/", async (req, res) => {
  const allTasks = await getAllTasks();
  if (allTasks) {
    res.status(200).json(allTasks);
  } else {
    res.status(404).json({ error: "Tasks Array is empty" });
  }
});

module.exports = tasks;
