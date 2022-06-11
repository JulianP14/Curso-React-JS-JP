import { useEffect, useState } from "react"
import { obtenerProductosById } from "../../api"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()

    const {productoId} = useParams()

    useEffect (() => {
        obtenerProductosById(productoId).then(response => {
            setProducto(response)

        })
    }, [])


    return (
        <>
            
            <ItemDetail {...producto}/>
        </>
    )
}


export default ItemDetailContainer