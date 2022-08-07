import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="cart">
        <Link to="/cart">
          <ShoppingCartIcon sx={{color: "white"}}/>
        </Link>
      </div>
    </header>
  );
}
