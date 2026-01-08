import { useContext } from "react"
import {products} from "../data/products"
import { CartContext } from "../context/CartContext"
import { useParams } from "react-router-dom"

export default function ProductDetail(){
    const {id} = useParams()
    const product = products.find(item => item.id === Number(id))
    const {addToCart} = useContext(CartContext)

    if(!product) return <p>Product Not Found</p>

    return(
        <div className="row mt-3">
            <div className="col-md-6 text-center">
                <img src={product.image} alt={product.title} width="200"/>
            </div>
            <div className="col-md-6">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4>${product.price}</h4>
                <button onClick={() => addToCart(product)} className="btn btn-primary">AddToCart</button>
            </div>
        </div>
    )
}