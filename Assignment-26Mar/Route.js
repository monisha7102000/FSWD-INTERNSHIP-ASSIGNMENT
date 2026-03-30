// routes/bookRoutes.js
const express = require('express');
const router = express.Router();

// Sample data
let books = [
    { id: 1, title: "Book One", authorId: 1 },
    { id: 2, title: "Book Two", authorId: 2 }
];

let authors = [
    { id: 1, name: "Author One" },
    { id: 2, name: "Author Two" }
];

// Get all books
router.get('/books', (req, res) => {
    res.json(books);
});

// Get single book
router.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    res.json(book || { message: "Book not found" });
});

// Get authors
router.get('/authors', (req, res) => {
    res.json(authors);
});

module.exports = router;