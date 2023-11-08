const express = require("express");
const tasks = express.Router();
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../queries/tasks");

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

//Update
tasks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const updatedTask = await updateTask(id, body);
  if (!updatedTask) {
    res.status(404).json({ error: "Task did not update." });
  } else {
    res.status(200).json(updatedTask);
  }
});

tasks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedTask = await deleteTask(id);
  if (!deletedTask) {
    res.status(404).json({ error: "Task was not deleted" });
  } else {
    res.status(200).json(deletedTask);
  }
});

module.exports = tasks;
