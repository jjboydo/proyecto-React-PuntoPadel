import { createContext, useEffect, useState } from "react";


export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(0)

    
    const addItem = (item, quantity) => {
        const { id, name, price, img } = item
        // Debo evitar duplicados aqui, hacerlo cuando ya tenga los products en Firebase

        const newItem = {
            id,
            name,
            price,
            img,
            quantity,
            subtotal: quantity * price,
        }

        setCart([...cart, newItem])
    }

    const removeItem = (itemId) => {
        const productsFilter = cart.filter((item) => item.id !== itemId)
        setCart(productsFilter)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(producto => producto.id === itemId)
    }

    const handleCartTotal = () => {
        setCartTotal(cart.reduce((acum, item) => acum + item.subtotal, 0))
    }

    const handleCartQuantity = () => { 
        setCartQuantity(cart.reduce( (acum, item) => acum + item.quantity, 0))
    }

    useEffect( () => { 
        handleCartTotal();
        handleCartQuantity();
    }, [cart] )

    const valueObject = {
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        cartTotal,
        cartQuantity
    }

    console.log(cart)

    return <CartContext.Provider value={valueObject}> {children} </CartContext.Provider>

}