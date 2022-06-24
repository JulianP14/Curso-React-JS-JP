import { useEffect, useState } from "react"
import { obtenerProductosById } from "../../Api"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { getDoc, doc } from "firebase/firestore"
import { database } from "../../services/firebase"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    const {productoId} = useParams()

    useEffect (() => {
        const docRef = doc(database, 'productos', productoId)

        getDoc(docRef).then(response => {
            const productosFromFirestore = {id: doc.id, ...doc.data()}
            setProducto(productosFromFirestore)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        /* obtenerProductosById(productoId).then(response => {
            setProducto(response)

        }) */
    }, [productoId])

    if(loading) {
        return( 
            <h2>Cargando</h2>
        )
    }


    return (
        <>
            <h2>Detalle del Producto</h2>
            <ItemDetail {...producto}/>
        </>
    )
}


export default ItemDetailContainer