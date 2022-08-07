import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { FruitCard } from "../components/FruitCard";
import { Header } from "../components/Header"
import { useCart } from "../hooks/useCart";
import { Fruit } from "../interfaces";

import "./cart.css"


export function Cart(){

  const {cart} = useCart()
  
  return(
    <div>
      <Header/>
      <div>
        <h2>YOUR BAG</h2>
        <span className="shoppingBag">
          <p>Shopping Bag({cart.length})</p>
          <p>Your Wishlist()</p>
        </span>
        <div className="cartItems">
          {cart.map((fruit) => (
            <FruitCard fruit={fruit} key={fruit.id} />
          ))
          }
        </div>

        <span className="buttons">
          <Link to="/">
            <Button variant="contained">CONTINUE SHOPPING</Button>
          </Link>
          <Button variant="contained">CHECKOUT NOW</Button>
        </span>

      </div>
    </div>
  )

}