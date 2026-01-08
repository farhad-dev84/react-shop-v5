import ProductCard from "../components/ProductCard"
import {products} from "../data/products"
export default function Products(){

    return(
        <div className="row g-3 mt-3">
            {
                products.map(product => (
                    <div key={product.id} className="col-md-3">
                        <ProductCard product={product}/>
                    </div>
                ))
            }
        </div>
    )
}