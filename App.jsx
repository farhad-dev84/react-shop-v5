import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

export default function App(){

  return(
    <BrowserRouter>
    <Header/>
    <div className="container">
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>    
    </div>
    </BrowserRouter>
  )
}