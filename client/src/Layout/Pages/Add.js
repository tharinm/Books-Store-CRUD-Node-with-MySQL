import React, { useState } from "react";
import { Box, Stack, TextField, Button } from "@mui/material";
import Typography from "@mui/material/node/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [books, setBooks] = useState([]);
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) =>
    setBooks((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  console.log(books);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (books === "") {
        return setErr(true);
      }
      await axios.post("http://localhost:8000/api/books", books);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  return (
    <Stack justifyItems="center" alignItems="center">
      {err && <Typography alignItems="center">Something Went Wrong</Typography>}
      <Box
        sx={{
          width: { md: "500px", xs: "300px" },
          backgroundColor: "#A0D8B3",
          height: "500px",
          alignItems: "center",
          justifyContent: "center",
          mt: { lg: "50px", xs: "30px" },
          borderRadius: "15px",
        }}
      >
        <Stack alignItems="center" padding="10px" direction="column">
          <Typography alignItems="center">Add Book Details</Typography>
          <Stack padding="20px">
            <TextField
              id="outlined-basic"
              label="Title"
              color="secondary"
              name="title"
              required
              sx={{
                width: {
                  md: "400px",
                  xs: "250px",
                  fontSize: { xs: "0.8rem", md: "6rem" },
                },
              }}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              color="secondary"
              multiline
              rows={4}
              name="desc"
              sx={{
                width: {
                  md: "400px",
                  xs: "250px",
                  fontSize: { xs: "0.8rem", md: "6rem" },
                },
                marginTop: "20px",
              }}
              required
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Price"
              color="secondary"
              name="price"
              required
              sx={{
                width: {
                  md: "400px",
                  xs: "250px",
                  fontSize: { xs: "0.8rem", md: "6rem" },
                },
                marginTop: "20px",
              }}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              component="label"
              sx={{ marginTop: "20px", backgroundColor: "purple" }}
            >
              Upload Cover Image
              <input
                name="cover"
                hidden
                accept="image/*"
                type="file"
                onChange={handleChange}
              />
            </Button>
            <Button
              variant="contained"
              component="label"
              sx={{ marginTop: "20px" }}
              type="submit"
              onClick={handleClick}
            >
              ADD
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
