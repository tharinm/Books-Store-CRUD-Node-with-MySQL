import React, { useEffect, useState } from "react";
import axios from "axios";
import { Stack } from "@mui/material";
import SingleBooks from "../../Component/SingleBooks";

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

  

  console.log(books);
  return (
    <Stack
      direction="row"
      margin="50px"
      sx={{ gap: { lg: "70px", xs: "50px" } }}
      flexWrap="wrap"
      alignItem="center"
    >
      {books.map((books) => {
        return <SingleBooks books={books} key={books.id} />;
      })}
    </Stack>
  );
}
