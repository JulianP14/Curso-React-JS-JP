import { useState, useEffect, createContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([])
    const [totalQ, setTotalQ] = useState(0)
    console.log(carrito)


    useEffect (() =>{
        let totalQ = 0
        carrito.forEach(prod => {
            totalQ += prod.quantity
        });
        setTotalQ(totalQ)
    }, [carrito])

    const agregarItem = (agregarProducto) => {
        if(!estaEnCarrito(agregarProducto.id)) {
            setCarrito([...carrito, agregarProducto])
        }
    }

    const removerItem = (id) => {
        const carritoSinProducto = carrito.filter(prod => prod.id !== id)
        setCarrito(carritoSinProducto)
    }

    const estaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id )
    }

    return (
        <CartContext.Provider value = {{
            carrito,
            totalQ,
            agregarItem,
            removerItem,
            estaEnCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext