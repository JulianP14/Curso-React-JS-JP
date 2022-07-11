import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItemList from "../CartItemList/CartItemList"
import { useNotification } from "../../notification/Notification"
import { addDoc, collection, writeBatch, getDocs, query, where, documentId, } from 'firebase/firestore'
import { database } from '../../services/firebase/index'
import './Cart.css'

const Carrito = () => {
    const [loading, setLoading] = useState(false)
    const { carrito, totalQ, obtenerTotal, borrarCarrito } = useContext (CartContext)
    const total = obtenerTotal ()
    const setNotification = useNotification ()

    const handleCreateOrder = () =>{
        setLoading(true)

        const objOrden = {
            comprador: {
                name: 'JP',
                email: 'jp@jp.com',
                phone: '1111111111',
                address: 'JP 123'
            }, 
            items: carrito,
            total: total
        }

        const batch = writeBatch (database)
        const ids = carrito.map(prod => prod.id)
        const sinStock = []
        const collectionRef = collection (database, 'products')

        getDocs (query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prod = carrito.find(prod => prod.id === doc.id)
                    const prodQ = prod.quantity
                    if(dataDoc.stock >= prodQ) {
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQ})
                    } else {
                        sinStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then(() =>{
                if(sinStock.length === 0){
                    const collectionRef = collection (database, 'orders')
                    return addDoc (collectionRef, objOrden)
                } else {
                    return Promise.reject({type: 'sin_stock',
                products: sinStock})
                }
            }).then(({id}) =>{
                batch.commit()
                borrarCarrito()
                setNotification('success',`Su orden ha sido generada correctamente. El id de su orden es: ${id}`)
            }).catch(error =>{
                if(error.type === 'sin_stock'){
                    setNotification('error', 'No disponemos de stock para algunos productos')
                }else {
                    console.log(error)
                }
            }).finally(() => {
                setLoading(false)
            })
    }

        if (loading) {
            return (
                <h2>Su orden se esta generando...</h2>
            )
        } 
        if (totalQ === 0) {
            return (
                <h2>No hay productos en el carrito</h2>
            )
        }

        console.log(handleCreateOrder)
            
        return (
            <section className="carritoDisplay">
                <div>
                    <h2 className="carritoTitulo">Carrito</h2>
                </div>

                <CartItemList productsAdded={carrito}/>

                <>
                    <h3 className="carritoTotal">Total:${total}</h3>
                </>
                <button onClick={() => borrarCarrito()} className="buttonCarrito">Vaciar Carrito</button>
                <button onClick={handleCreateOrder} className="buttonCarrito">Generar Orden</button>
            </section>
        )
}

export default Carrito