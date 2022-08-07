import { Fruit, Item } from "../interfaces";
import "../App.css";
import { useMemo, useState } from "react";

import "./FruitCard.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Alert, Snackbar } from "@mui/material";
import { useCart } from "../hooks/useCart";

interface FruitCardProps {
  fruit: Fruit;
}

export function FruitCard({ fruit }: FruitCardProps) {
  const [quantity, setQuantity] = useState(0);
  const { addItem, removeItem, cart } = useCart();

  const item = useMemo(() => {
    const itemFound = cart.find((currentItem) => currentItem.id === fruit.id);

    return itemFound ? itemFound : { ...fruit, quantity: 0 };
  }, [cart]);
  
  const imgPath = `/src/assets/${fruit.name}Img.png`;

  return (
    <div className="card">
      <Card className="fruitCard">
        <CardMedia
          component="img"
          alt={fruit.name}
          height="140"
          src={fruit.imgLink}
          title={fruit.name}
        />
        <div className="fruitCardDescription">
          <p>{fruit.name} 500g</p>
          <p className="price">R$ 5,00</p>

        </div>
          <div className="quantity">

          <CardActions>
            <Button
              disabled={item.quantity === 0}
              size="small"
              onClick={() => removeItem(item)}
            >
              -
            </Button>

            <p>{item.quantity}</p>

            <Button size="small" onClick={() => addItem(item)}>
              +
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
