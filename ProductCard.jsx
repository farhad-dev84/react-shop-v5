import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({product}){
  const {addToCart}= useContext(CartContext)

  return(
    <div className="card h-100">
      <img src={product.image} alt={product.title} className="card-img-top h-100" />

      <div className="card-body d-flex flex-column text-center">
        <h5>{product.title}</h5>
        <p>${product.price}</p>
      </div>
      
      <div className="mt-auto">
      <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-primary w-100 mb-2">view</Link>
      <Link><button onClick={() => addToCart(product)} className="btn btn-sm btn-primary w-100">AddToCart</button></Link>        
      </div>

    </div>
  )
}