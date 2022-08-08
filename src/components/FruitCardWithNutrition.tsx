import { Fruit, Item } from "../interfaces";
import "../App.css";
import { useMemo, useState } from "react";

import "./FruitCardWithNutrition.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Alert, Snackbar } from "@mui/material";
import { useCart } from "../hooks/useCart";

interface FruitCardProps {
  fruit: Fruit;
}

export function FruitCardWithNutrition({ fruit }: FruitCardProps) {
  const { addItem, removeItem, cart } = useCart();

  const item = useMemo(() => {
    const itemFound = cart.find((currentItem) => currentItem.id === fruit.id);

    return itemFound ? itemFound : { ...fruit, quantity: 0 };
  }, [cart]);

  const imgPath = `/src/assets/${fruit.name}Img.png`;

  return (
    <div className="card">
      <Card
        className="fruitCard"
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <div className="fruitDataContainer">
          <CardMedia
            component="img"
            alt={fruit.name}
            sx={{ height: 100, width: 160, paddingTop: 1, paddingLeft: 1 }}
            src={fruit.imgLink}
            title={fruit.name}
          />
          <div className="fruitCardDescription">
            <p>{fruit.name} 500g</p>
            <p className="price">R$ {fruit.price.toPrecision(3)}</p>
          </div>
          <div className="quantity">
            <CardActions>
              <Button
                disabled={item.quantity === 0}
                size="small"
                onClick={() => removeItem(item)}
                sx={{ height: 48, width: 48 }}
              >
                -
              </Button>

              <p>{item.quantity}</p>

              <Button
                size="small"
                onClick={() => addItem(item)}
                sx={{ height: 48, width: 48 }}
              >
                +
              </Button>
            </CardActions>
          </div>
        </div>
        <div className="nutritionalFacts">
          <table>
            <tr>
              <th>Per Portion</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>Calories</td>
              <td>{fruit.nutritions.calories}Kcal</td>
            </tr>
            <tr>
              <td>Carbohydrates</td>
              <td>{fruit.nutritions.carbohydrates}g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{fruit.nutritions.fat}g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>{fruit.nutritions.protein}g</td>
            </tr>
            <tr>
              <td>Sugar</td>
              <td>{fruit.nutritions.sugar}g</td>
            </tr>
          </table>
        </div>
      </Card>
    </div>
  );
}
