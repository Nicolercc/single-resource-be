const express = require("express");
const tasks = express.Router();
const { getAllTasks, getTask, createTask } = require("../queries/tasks");

//GET - Index
tasks.get("/", async (req, res) => {
  const allTasks = await getAllTasks();
  if (allTasks) {
    res.status(200).json(allTasks);
  } else {
    res.status(404).json({ error: "Tasks Array is empty" });
  }
});

//GET - show
tasks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneTask = await getTask(id);

  if (!oneTask) {
    res.status(404).json({ error: "Task not found" });
  } else {
    res.status(200).json(oneTask);
  }
});

//Create -
tasks.post("/", async (req, res) => {
  const body = req.body;
  const newTask = await createTask(body);
  res.status(200).json(newTask);
});

module.exports = tasks;
