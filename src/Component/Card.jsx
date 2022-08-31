import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard() {
  return (
    <div className="cards-companents">
      <Link to="/nipples">
        <Card className="card-companent" sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="300"
            image="https://lh3.googleusercontent.com/pw/AL9nZEUs1gqJynRywiRUAMWNVDG1BcOJhu0bcMbVr0RIJCp1k6shJbpn_F7k93YAzUp70qNs7D9KrN6omKZ95DYDql2lZYgEO-1nzRw5z37vTlZ0dF6LOj4HlQ52tE2Kl2Rb9TWYI9iSkwB1L8hdvNwemSA=w1133-h930-no?authuser=0"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Coски
            </Typography>
            <Typography variant="body2" color="text.secondary">
              материал: ПЛАСТИК
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Link to="/spoons">
        <Card className="card-companent" sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="300"
            image="https://lh3.googleusercontent.com/pw/AL9nZEW2Xq-2S7GcefjW8HIl71NIKit0BW8TvJ4yM0jChBlFj6hr8kWPppsqkR28WhPIUrwRFlVgvJIYfYTFGqdvdB6_hUl0UgSOdXvW2iodgOl3-tmDCzAWwsL0b-oTYCljg_Qqcg4kAiVox2IEOwrK7Tg=s500-no?authuser=0"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ложки
            </Typography>
            <Typography variant="body2" color="text.secondary">
              материал: ПЛАСТИК
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Link to="/botels">
        <Card className="card-companent" sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="300"
            image="https://lh3.googleusercontent.com/pw/AL9nZEVk-BbhHt4C92CfKKYYoKdu34J9MMdhVeWtbS9U2K-MuzKLdML5xN5JCFvZ0m6CZtuLjfnbmzcDC_fQ8k_SbAT0UulVJCnqQTBJEHQgIej907QaFdfP5rxtZIlItAEIz1rh1onqBibPaa5SNA3G_1Y=w1394-h930-no?authuser=0"
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
      </Link>

      <Link to="cheshizubi">
        <Card className="card-companent" sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="300"
            image="https://lh3.googleusercontent.com/pw/AL9nZEWBhFMPb_RCkIU0V63nvm3gFQhLRB2qr430rOgmV339R6lZTw6AcTxuxsmyADTFsa3Tesoo-xupzxYI06-CQ5VJdB5QcVjmrQVeMDJ9oC4JMA-oc8Fp00ZersFUHd7xwIF1bZ_Cm-yGx0IPgQw0gx0=w1394-h930-no?authuser=0"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Зубогрызки
            </Typography>
            <Typography variant="body2" color="text.secondary">
              материал: ПЛАСТИК
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
