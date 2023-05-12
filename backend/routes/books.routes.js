import express from "express";
import {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
} from "../controller/books.controller.js";

const route = express.Router();

route.get("/books", getBooks);
route.post("/books", createBook);
route.delete("/books/:id", deleteBook);
route.put("/books/:id", updateBook);

export default route;
