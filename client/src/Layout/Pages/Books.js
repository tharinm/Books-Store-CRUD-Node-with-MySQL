import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState([]);

  //fetch data
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBooks();
  }, []);

    console.log(books)
  return (
    <div>
      <p>Books</p>
    </div>
  );
}
