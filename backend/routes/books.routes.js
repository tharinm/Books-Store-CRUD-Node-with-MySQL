import express from 'express'
import { getBooks } from '../controller/books.controller.js';

const route = express.Router();

route.get('/books',getBooks)

export default route;
