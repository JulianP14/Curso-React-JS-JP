import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { obtenerProductos, obtenerProductosByCategory } from '../../api.js'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect (() => {
        setLoading(true)
        
        if(!categoryId) {
            obtenerProductos().then(prods =>{
                setProductos(prods)
            }).catch(error =>{
                console.error(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            obtenerProductosByCategory(categoryId).then(prods =>{
                setProductos(prods)
            }).catch(error =>{
                console.error(error)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])

    if(loading){
        return<h2>Cargando...</h2>
    }


    return(
        <div>
            <ItemList productos={productos}/>
            {productos.length > 0 ? <ItemList productos = {productos}/> : <h2>No hay productos</h2>}
        </div>
    )
}

export default ItemListContainer