import { useEffect, useState } from "react"
import { obtenerProductosById } from "../../Api"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()

    const {productoId} = useParams()

    useEffect (() => {
        obtenerProductosById(productoId).then(response => {
            setProducto(response)

        })
    }, [productoId])


    return (
        <>
            <h2>Detalle del Producto</h2>
            <ItemDetail {...producto}/>
        </>
    )
}


export default ItemDetailContainer