import React from "react";
import { Box, Stack, TextField, Button } from "@mui/material";
import Typography from "@mui/material/node/Typography";

export default function Add() {

  
  return (
    <Stack justifyItems="center" alignItems="center">
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
              sx={{
                width: {
                  md: "400px",
                  xs: "250px",
                  fontSize: { xs: "0.8rem", md: "6rem" },
                },
              }}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              color="secondary"
              multiline
              rows={4}
              sx={{
                width: {
                  md: "400px",
                  xs: "250px",
                  fontSize: { xs: "0.8rem", md: "6rem" },
                },
                marginTop: "20px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Price"
              color="secondary"
              sx={{
                width: {
                  md: "400px",
                  xs: "250px",
                  fontSize: { xs: "0.8rem", md: "6rem" },
                },
                marginTop: "20px",
              }}
            />
            <Button
              variant="contained"
              component="label"
              sx={{ marginTop: "20px", backgroundColor: "purple" }}
            >
              Upload Cover Image
              <input hidden accept="image/*" type="file" />
            </Button>
            <Button
              variant="contained"
              component="label"
              sx={{ marginTop: "20px" }}
              type="submit"
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
