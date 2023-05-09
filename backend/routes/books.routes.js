import express from 'express'
import { getBooks,createBook } from '../controller/books.controller.js';

const route = express.Router();

route.get('/books', getBooks)
route.post('/books',createBook)

export default route;
