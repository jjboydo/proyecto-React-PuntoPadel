import { createContext, useEffect, useState } from "react";


export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(0)

    
    const addItem = (item, quantity) => {
        const { id, name, price, img } = item

        if(isInCart(id)){
            const cartCopy = [...cart]
            const itemIndex = cart.findIndex(product => product.id === id) 
            cartCopy[itemIndex].quantity += quantity
            cartCopy[itemIndex].subtotal = cartCopy[itemIndex].quantity + cartCopy[itemIndex].price
            setCart(cartCopy)
        } else {
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