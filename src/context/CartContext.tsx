import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext<any>(null)

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('kk_cart')
    if (stored) setCartItems(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('kk_cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (item: any) => {
    setCartItems(prev => {
      const exists = prev.find(p => p.name === item.name)
      if (exists) {
        return prev.map(p =>
          p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p
        )
      } else {
        return [...prev, { ...item, quantity: 1 }]
      }
    })
  }

  const incrementItem = (item: any) => {
    setCartItems(prev =>
      prev.map(p =>
        p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p
      )
    )
  }

  const decrementItem = (item: any) => {
    setCartItems(prev =>
      prev
        .map(p =>
          p.name === item.name ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter(p => p.quantity > 0)
    )
  }

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, incrementItem, decrementItem, getTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}
