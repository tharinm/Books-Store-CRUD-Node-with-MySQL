import { db } from "../server.js";

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

export const createBook = async (req, res, next) => {
  const q = "INSERT INTO books (`title`,`desc`,`cover`,`price`) VALUES (?);";

  //Testing data
  //   const values = [
  // "title from backend",
  // "desc from backend",
  // "cover from backend",
  //   ];

  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Book has been created successfully");
  });
};

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
