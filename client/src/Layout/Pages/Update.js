import React, { useState } from "react";
import { Box, Stack, TextField, Button, containerClasses } from "@mui/material";
import Typography from "@mui/material/node/Typography";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import upload from "../../utils/upload";
import Loading from "../../Component/Loading";

export default function Update() {
  const [books, setBooks] = useState({
    title: "",
    description: "",
    price: "",
    cover: "",
  });

  const [loading, setLoading] = useState(false);

  //To catch book ID
  const location = useLocation();

  // console.log(location);

  const bookId = location.pathname.split("/")[2];
  console.log(bookId);

  const [err, setErr] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setBooks((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let updatedBooks = { ...books };

      if (file) {
        const url = await upload(file);
        updatedBooks = {
          ...books,
          cover: url,
        };
      }

      if (Object.values(updatedBooks).some((value) => value === "")) {
        setErr(true);
        return;
      }

      await axios.put(
        `http://localhost:8000/api/books/${bookId}`,
        updatedBooks
      );
      navigate("/");
    } catch (error) {
      console.log(error);
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack justifyItems="center" alignItems="center">
      {err && <Typography alignItems="center">Something Went Wrong</Typography>}
      <Box
        sx={{
          width: { md: "500px", xs: "300px" },
          backgroundColor: "#ADE4DB",
          height: "500px",
          alignItems: "center",
          justifyContent: "center",
          mt: { lg: "50px", xs: "30px" },
          borderRadius: "15px",
        }}
      >
        <Stack alignItems="center" padding="10px" direction="column">
          <Typography alignItems="center">Update Books</Typography>
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
              name="description"
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
                onChange={(e) => setFile(e.target.files[0])}
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
            <Stack alignItems="center" sx={{ marginTop: "15px" }}>
              {loading && <Loading />}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
