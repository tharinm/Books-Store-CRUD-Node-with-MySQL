import express from "express";
import {
  getBooks,
  createBook,
  deleteBook,
} from "../controller/books.controller.js";

const route = express.Router();

route.get("/books", getBooks);
route.post("/books", createBook);
route.delete("/books/:id", deleteBook);

export default route;
