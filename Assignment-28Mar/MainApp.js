// app.js
const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());
app.use('/api', taskRoutes);

app.listen(3000, () => console.log('MVC Server running'));