import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const path = location.pathname;
  // console.log(path);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <Link to='/books'> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book Store
          </Typography>
          {/* </Link> */}
          <Link to="/add" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "yellow",
                color: "darkblue",
                display: path === "/add" ? "none" : "block",
              }}
            >
              Add Book
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
