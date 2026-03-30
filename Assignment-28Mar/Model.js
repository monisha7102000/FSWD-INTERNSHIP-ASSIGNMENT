// models/taskModel.js
let tasks = [];

exports.getAllTasks = () => tasks;

exports.createTask = (task) => {
    tasks.push(task);
    return task;
};

exports.updateTask = (id, data) => {
    tasks = tasks.map(t => t.id == id ? { ...t, ...data } : t);
};

exports.deleteTask = (id) => {
    tasks = tasks.filter(t => t.id != id);
};