import {useState, useEffect, createContext, useRef } from 'react'

const CartContext = createContext()

    export const CartProvider = ({children}) => {
        const [carrito, setCarrito] = useState ([])
        const [totalQ, setTotalQ] = useState(0)
        /* console.log(carrito) */

        const renderRef = useRef (0)

        
        useEffect (() => {
            const cartSaved = localStorage.getItem('carrito')
            const cartParsed = JSON.parse(cartSaved)
            
            setCarrito(cartParsed)
        }, [])
        
        useEffect(() =>{
            if(renderRef.current > 0){
                localStorage.setItem('carrito', JSON.stringify(carrito))
            }
            renderRef.current += 1
        }, [carrito])
        
        useEffect (() =>{
            let totalQ = 0
            console.log("carrito:" + carrito)
            if(carrito){
            carrito.forEach(prod => {
                totalQ += prod.quantity
            })
            setTotalQ(totalQ)
        }
        }, [carrito])
        
        const agregarItem = (agregarProducto) => {
            if(!estaEnCarrito(agregarProducto.id)) {
                setCarrito([...carrito, agregarProducto])
            }
        }

        const removerItem = (id) => {
            const carritoSinProducto = carrito.filter(prod => prod.id !== id)
            setCarrito(carritoSinProducto)  //esta f() sirve para remover items del carrito tambien
        }

        const estaEnCarrito = (id) => {
            return carrito.some(prod => prod.id === id )
        }

        const borrarCarrito = () => {
            setCarrito ([])
        }

        const obtenerTotal = () => {
            let total = 0;
            carrito.forEach(prod => {
                total += prod.quantity * prod.price
            })
            return total
        }

        return (
            <CartContext.Provider value = {{
                carrito,
                totalQ,
                agregarItem,
                removerItem,
                estaEnCarrito,
                borrarCarrito,
                obtenerTotal,
            }}>
                {children}
            </CartContext.Provider>
        )
}

export default CartContext