// controllers/taskController.js
const Task = require('../models/taskModel');

exports.getTasks = (req, res) => {
    res.json(Task.getAllTasks());
};

exports.createTask = (req, res) => {
    const task = { id: Date.now(), ...req.body };
    res.json(Task.createTask(task));
};

exports.updateTask = (req, res) => {
    Task.updateTask(req.params.id, req.body);
    res.json({ message: "Updated" });
};

exports.deleteTask = (req, res) => {
    Task.deleteTask(req.params.id);
    res.json({ message: "Deleted" });
};