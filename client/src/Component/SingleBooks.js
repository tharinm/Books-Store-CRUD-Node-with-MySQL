import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Stack } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SingleBooks({ books, setBooks }) {
  // const handleDelete = async (id) => {

  // const deletBook = await axios.delete(`http://localhost:8000/api/books/${id}`);

  // }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/books/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card sx={{ width: "250px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={books.cover}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {books.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {books.desc}
          </Typography>
          <Typography marginTop="10px">Price {books.price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <Link to={`/update/${books.id}`}>
            <Button size="small" color="success" variant="contained">
              Update
            </Button>
          </Link>
          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={() => handleDelete(books.id)}
          >
            Delete
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
