// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/taskController');

router.get('/tasks', ctrl.getTasks);
router.post('/tasks', ctrl.createTask);
router.put('/tasks/:id', ctrl.updateTask);
router.delete('/tasks/:id', ctrl.deleteTask);

module.exports = router;