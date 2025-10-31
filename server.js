const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let books = [];

app.post("/books", (req, res) => {
  const { bookNo, title, price } = req.body;
  if (!bookNo || !title || !price) {
    return res.status(400).json({ error: "bookNo, title, and price are required." });
  }
  const book = { bookNo, title, price };
  books.push(book);
  res.status(201).json({ message: "Book added successfully", book });
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
