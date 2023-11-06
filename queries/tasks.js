const db = require("../db/dbConfig");

const getAllTasks = async () => {
  try {
    const allTasks = await db.any("SELECT * FROM tasks");
    return allTasks;
  } catch (error) {
    console.log(error);
  }
};

async function getTask(id) {
  try {
    const task = await db.one("SELECT * FROM tasks WHERE id=$1", id);
    return task;
  } catch (e) {
    console.log(e);
  }
}

async function createTask(task) {
  try {
    const newTask = await db.one(
      "INSERT INTO tasks (name, description, deadline, category, assigned_to, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        task.name,
        task.description,
        task.deadline,
        task.category,
        task.assigned_to,
        task.status,
      ]
    );
    return newTask;
  } catch (e) {
    console.log(e);
  }
}

async function updateTask(id, task) {
  try {
    const updatedTask = await db.one(
      "UPDATE tasks SET name=$1, description=$2, deadline=$3, category=$4, assigned_to=$5, status=$6 WHERE id=$7 RETURNING * ",
      [
        task.name,
        task.description,
        task.deadline,
        task.category,
        task.assigned_to,
        task.status,
        id,
      ]
    );
    return updatedTask;
  } catch (e) {
    console.log(e);
  }
}

async function deleteTask(id) {
  try {
    const deletedTask = await db.one(
      "DELETE FROM tasks WHERE id=$1 RETURNING *",
      id
    );
    return deletedTask;
  } catch (e) {
    console.log(e);
  }
}
module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
