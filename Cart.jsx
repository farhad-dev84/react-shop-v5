import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart(){
    const {cart, increase, decrease, removeFromCart, totalPrice} = useContext(CartContext)

    if(cart.length === 0) {
        return <h4 className="text-center mt-3">Cart is Empty (0) ...</h4>
    }

    return(
        <>
        {
            cart.map(item => (
                <div className="d-flex align-items-center mb-4">
                    <img src={item.image} alt={item.title} className="img-fluid" width="100"/>

                    <div className="ms-3 flex-grow-1 mt-3">
                        <h5>{item.title}</h5>
                        <p>${item.price}</p>

                    <div>
                    <button onClick={() => decrease(item.id)} className="btn btn-sm btn-secondary me-2">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increase(item.id)} className="btn btn-sm btn-secondary ms-2">+</button>                        
                    </div>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Remove</button>

                </div>
            ))
        }
        <h4 className="text-end">Total: ${totalPrice}</h4>
        </>
    )
}