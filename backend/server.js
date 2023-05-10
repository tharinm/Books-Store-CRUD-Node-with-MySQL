import express from "express";
// import mysql from "mysql";
import mysql from "mysql2";
import booksRoute from "./routes/books.routes.js";
import cors from 'cors'

const app = express();

//to read json files
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "crud",
});

db.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database: ", error);
    return;
  }
  console.log("Connected to MySQL database.");
});



app.get("/", (req, res, next) => {
  res.json("This is backend");
});

app.use("/api/", booksRoute);

app.listen(8000, () => {
  console.log("Backend is running..!");
});

export { db };
