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
  const { addItem, removeItem, cart } = useCart();

  const item = useMemo(() => {
    const itemFound = cart.find((currentItem) => currentItem.id === fruit.id);

    return itemFound ? itemFound : { ...fruit, quantity: 0 };
  }, [cart]);

  const imgPath = `/src/assets/${fruit.name}Img.png`;

  return (
    <div className="cartcard">
      <Card className="cartfruitCard">
        <CardMedia
          component="img"
          alt={fruit.name}
          height="140"
          src={fruit.imgLink}
          title={fruit.name}
        />
        <div className="cartfruitCardDescription">
          <p>{fruit.name} 500g</p>
          <p className="cartprice">
            {" "}
            {fruit.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p className="cartitemtotal">
            Total:{" "}
            {(item.price * item.quantity).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div className="cartquantity">
          <CardActions>
            <Button
              disabled={item.quantity === 0}
              size="large"
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
