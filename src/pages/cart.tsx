import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FruitCard } from "../components/FruitCard";
import { Header } from "../components/Header";
import { useCart } from "../hooks/useCart";

import "../components/FruitCard.css";
import "./cart.css";
import { useEffect, useState } from "react";

export function Cart() {
  const { cart, cartTotal } = useCart();
 
  return (
    <div>
      <Header />
      <div>
        <h2>YOUR BAG</h2>
        <span className="shoppingBag">
        </span>
        <div className="cartItems">
          {cart.map((fruit) => (
            <FruitCard fruit={fruit} key={fruit.id} />
          ))}
        </div>
        <div className="subtotal">
          <p>
            Subtotal: { cartTotal.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL"
            })}
          </p>
        </div>

        <span className="buttons">
          <Link to="/"style={{ textDecoration: 'none' }}>
            <Button variant="contained">CONTINUE SHOPPING</Button>
          </Link>
          <Button variant="contained">CHECKOUT NOW</Button>
        </span>
      </div>
    </div>
  );
}
