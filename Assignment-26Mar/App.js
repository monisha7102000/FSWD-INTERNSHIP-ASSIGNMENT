// app.js
const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());
app.use('/api', bookRoutes);

app.listen(3000, () => console.log('Server running'));