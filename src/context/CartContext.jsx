import { createContext, useEffect, useState } from "react";
import { useToast } from '@chakra-ui/react'


export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(0)

    const toast = useToast()

    const addItem = (item, quantity) => {
        const { id, name, price, img, stock } = item

        if (isInCart(id)) {
            const cartCopy = [...cart]
            const itemIndex = cart.findIndex(product => product.id === id)
            if (item.stock < (cartCopy[itemIndex].quantity + quantity)) {
                toast({
                    title: 'No hay mas stock para el producto seleccionado',
                    status: 'error',
                    duration: 2000,
                    position: 'top-right',
                    variant: 'left-accent',
                    containerStyle: {
                        paddingTop: '15%',
                        fontSize: '20px'
                    },
                })
            } else {
                cartCopy[itemIndex].quantity += quantity
                cartCopy[itemIndex].subtotal = cartCopy[itemIndex].quantity * cartCopy[itemIndex].price
                setCart(cartCopy)
                toast({
                    title: 'Producto agregado al carrito',
                    status: 'success',
                    duration: 2000,
                    position: 'top-right',
                    variant: 'left-accent',
                    containerStyle: {
                        paddingTop: '20%',
                        fontSize: '20px'
                    },
                })
            }
        } else {
            const newItem = {
                id,
                name,
                price,
                img,
                quantity,
                stock,
                subtotal: quantity * price,
            }
            console.log(item.stock)
            item.stock > 0 && setCart([...cart, newItem])
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
        setCartQuantity(cart.reduce((acum, item) => acum + item.quantity, 0))
    }

    useEffect(() => {
        handleCartTotal();
        handleCartQuantity();
    }, [cart])

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