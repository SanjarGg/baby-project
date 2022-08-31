import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

function Card2() {
  return (
    <>
      <Container>
        <div className="cards-companents">
          <Card className="card-companent" sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="300"
              image="https://lh3.googleusercontent.com/pw/AL9nZEW2Xq-2S7GcefjW8HIl71NIKit0BW8TvJ4yM0jChBlFj6hr8kWPppsqkR28WhPIUrwRFlVgvJIYfYTFGqdvdB6_hUl0UgSOdXvW2iodgOl3-tmDCzAWwsL0b-oTYCljg_Qqcg4kAiVox2IEOwrK7Tg=s500-no?authuser=0"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Бутылочки
              </Typography>
              <Typography variant="body2" color="text.secondary">
                материал: ПЛАСТИК
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Card2;
