import { Fruit } from "../interfaces";
import "../App.css";
import { useState } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Alert, Snackbar } from "@mui/material";

interface FruitCardProps {
  fruit: Fruit;
}

export function FruitCard({ fruit }: FruitCardProps) {
  const [quantity, setQuantity] = useState(0);
  
  const handleDisabled = quantity===0 ?  "disabled" : "enabled" 
  //impede da quantidade ficar negativa
  if (quantity < 0) setQuantity(quantity + 1);

  const imgPath = `/src/assets/${fruit.name}Img.png`;

  return (
    <div className="card">
      <Card className="fruitCard">
        <CardMedia
          component="img"
          alt={fruit.name}
          height="140"
          src={imgPath}
          title={fruit.name}
        />

        <p>{fruit.name}</p>
        <p>aprox. 500g  </p>

        <CardActions>
            <Button disabled={quantity ===0}  size="small" onClick={() => setQuantity(quantity - 1) }>
              -
            </Button>
           

          <p>{quantity}</p>
          <Button size="small" onClick={() => setQuantity(quantity + 1)}>
            +
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
