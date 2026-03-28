const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});

app.get('/contact', (req, res) => {
    res.send("Contact us at: contact@example.com");
});

// 404 route
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});