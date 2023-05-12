import { db } from "../server.js";

//get all books
export const getBooks = async (req, res, next) => {
  const q = "SELECT * FROM books;";
  if (db.state === "disconnected") {
    console.error("Error: MySQL database connection is closed.");
    return;
  }
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error executing MySQL query: ", err);
      return res.json(err);
    }
    res.json(data);
  });
};

//create new Book
export const createBook = async (req, res, next) => {
  const q =
    "INSERT INTO books (`title`,`description`,`price`,`cover`) VALUES (?);";

  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];

  console.log(req.body.cover);

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json("Book has been created successfully");
  });
};

//delete book
export const deleteBook = async (req, res, next) => {
  //request from url
  const getId = req.params.id;

  const q = `DELETE FROM books WHERE id = ${getId}`;

  db.query(q, [getId], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Book has been deleted successfully");
  });
};

//update book
export const updateBook = async (req, res, next) => {
  const getId = req.params.id;

  const q = `UPDATE books SET title = ?, description = ?, price = ?, cover = ? WHERE id = ?;`;


  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values,getId], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Book has been updated successfully");
  });
};
