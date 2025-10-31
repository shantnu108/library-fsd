const express = require("express");
const app = express();

app.use(express.json());

let books = [];

// Root route (to avoid 404 on base URL)
app.get("/", (req, res) => {
  res.send("Library Server API is running on Vercel!");
});

// POST route
app.post("/books", (req, res) => {
  const { bookNo, title, price } = req.body;
  if (!bookNo || !title || !price) {
    return res.status(400).json({ error: "bookNo, title, and price are required." });
  }
  const book = { bookNo, title, price };
  books.push(book);
  res.status(201).json({ message: "Book added successfully", book });
});

// GET route
app.get("/books", (req, res) => {
  res.json(books);
});

module.exports = app;
