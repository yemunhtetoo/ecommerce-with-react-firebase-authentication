import { update } from 'firebase/database';
import React, { createContext, useEffect, useState } from 'react'
export const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [prequantity, setQuantity] = useState(1);
    const [getCartQty, setGetCartQty] = useState(0)
    useEffect(() => {
        
        //Fetch cart item from local storage
        const storageCartItem = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storageCartItem)
    }, [])
    
    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
        setGetCartQty(cartItems.length)
    }

    const removeCartQty = ()=> {
        localStorage.removeItem("cart");
        setGetCartQty(cartItems.length = 0)
    }
    setGetCartQty(cartItems.length)
    return (
        <CartContext.Provider value={{ prequantity, setQuantity,getCartQty, removeCartQty, cartItems, setCartItems, updateLocalStorage }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider