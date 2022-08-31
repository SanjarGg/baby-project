import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

function Card4() {
  return (
    <>
      <Container>
        <div className="cards-companents">
          <Card className="card-companent" sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="300"
              image="https://lh3.googleusercontent.com/pw/AL9nZEUruIo2GSb3x0mUnBQTeYO4t3xxPka45EBVwI7g6MhJCkVqfvX7odyQPnqlQZPO1VySHiOAX5oHPQhULzJ5A_As1oo6X4M6mE0P6HgOe8vNYm7kJeVaX7uq7bJZzzdMDBiQABiI1BDlGuktjribrOI=w1394-h930-no?authuser=0"
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
          <Card className="card-companent" sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="300"
              image="https://lh3.googleusercontent.com/pw/AL9nZEXiLIeyJyZUKx86CXuKDkgcm7pIr6BYjeEZpkUU2p8caXOofAxeG1zySe2b0Mbg05rPzA5HycJwLfEL3Y5VINuQgHlSAaRSyDme_-CVghVZ841syOs3JFcLMYoAExaX5BV-zMlWts6s5ogNqPTguVg=w1394-h930-no?authuser=0"
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

export default Card4;
