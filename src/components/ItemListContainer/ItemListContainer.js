import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { obtenerProductos } from '../../api.js'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState ([])

    useEffect (() => {
        obtenerProductos().then(response =>{
            setProductos(response)
        })
    }, [])

/*     const productosComponents = productos.map (producto =>{
        return (
            <li key={producto.id}>
                {producto.name}
            </li>
        )
    }) */


    return(
        <div>
            <h1 id="titulo">{props.greeting}</h1>
            <ItemList productos={productos}/>
            {/* <ul>
                {productos.map(producto => <li key={producto.id}>{producto.name}</li>)}
            </ul> */}
        </div>
    )
}

export default ItemListContainer