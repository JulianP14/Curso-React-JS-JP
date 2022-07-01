import { useState, useContext } from "react"
import CartContext from "../../context/Context"
import CartItemList from "../../context/CartItemList"
import { useNotification } from "../../notification/Notification"
import { addDoc, collection, writeBatch, getDocs, query, where, documentId, } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

const Carrito = () => {
    const [loading, setLoading] = useState(false)
    const { carrito, totalQ, getTotal, clearCarrito } = useContext
    (CartContext)

    const total = getTotal ()
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

        const batch = writeBatch (db)
        const ids = carrito.map(prod => prod.id)
        const sinStock = []
        const collectionRef = collection (db, 'products')

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
                    const collectionRef = collection (db, 'orders')
                    return addDoc (collectionRef, objOrden)
                } else {
                    return Promise.reject({type: 'sin_stock',
                products: sinStock})
                }
            }).then(({id}) =>{
                batch.commit()
                clearCarrito()
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
            
        return (
            <>
                <h2>Carrito</h2>
                <CartItemList productsAdded={carrito}/>
                <h3>Total:${total}</h3>
                <button onClick={() => clearCarrito()} className="buttonCarrito">Vaciar Carrito</button>
                <button onClick={handleCreateOrder} className="buttonCarrito">Generar Orden</button>
            </>
        )
}

export default Carrito