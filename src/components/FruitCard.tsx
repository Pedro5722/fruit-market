import { Fruit } from "../interfaces";
import "../App.css";
import { useState } from "react";

interface FruitCardProps {
  fruit: Fruit;
}

export function FruitCard({ fruit}: FruitCardProps) {
  
  const [quantity, setQuantity] = useState(0)

  const add = setQuantity

  return (
    <div className="cardContainer">
      <p>{fruit.name}</p>
      <p>{fruit.family}</p>
      <p>{quantity}</p>
      
    </div>
  );
}
