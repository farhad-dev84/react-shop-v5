import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}){
  
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = product => {
    setCart(prev => {
      const found = prev.find(item => item.id === product.id)

      if(found){
        return prev.map(p => p.id === product.id ? {...p, quantity: p.quantity + 1} : p)
      }
      return [...prev, {...product, quantity: 1}]

    })
  }

  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const increase = id => {
    setCart(prev => prev.map(p => p.id === id ? {...p, quantity: p.quantity + 1} : p))
  }

  const decrease = id => {
    setCart(prev => prev.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p)
    .filter(p => p.quantity > 0)
  )
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return(
    <CartContext.Provider value={{cart, addToCart, removeFromCart, increase, decrease, totalPrice}}>
      {children}
    </CartContext.Provider>
  )

}
