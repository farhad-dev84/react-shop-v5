import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Header(){

  const {cart} = useContext(CartContext)

  return(
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">React Shop</Link>
      <Link to="/cart" className="btn btn-outline-light">Cart ({cart.length})</Link>
    </nav>
  )
}