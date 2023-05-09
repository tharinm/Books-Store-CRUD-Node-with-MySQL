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
