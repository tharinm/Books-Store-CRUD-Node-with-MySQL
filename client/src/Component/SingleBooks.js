import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Stack } from "@mui/material";

export default function SingleBooks({books}) {
    return (
      <Card sx={{ width:'250px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.pexels.com/photos/16542268/pexels-photo-16542268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {books.title}
            </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {books.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Stack direction="row" spacing={3}>
            <Button size="small" color="success" variant="contained">
              Update
            </Button>
                    <Typography>Price {books.price}</Typography>
          </Stack>
        </CardActions>
      </Card>
    );
}