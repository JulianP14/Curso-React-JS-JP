import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { obtenerProductos, obtenerProductosByCategory } from '../../Api.js'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { database } from '../../services/firebase'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('Bienvenidos')

    const {categoryId} = useParams()

    useEffect (() => {
        setLoading(true)

        const collectionRef = categoryId ? ( 
            query(collection(database, 'productos'), where ('category', '==', categoryId))) 
            : (collection (database, 'productos'))

        getDocs (collectionRef).then(response => {  
            const productosFromFirestore = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setProductos(productosFromFirestore)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
                
    }, [categoryId])

        useEffect(() =>{
            setTimeout(() => {
                setTitle('Nuestros Productos')
            }, 3000);
        })

    if(loading){
        return<h2>Cargando...</h2>
    }


    return(
        <div>
            <h1>{title}</h1>
            {
            productos.length > 0 ? <ItemList productos={productos}/> : <h2>No hay productos</h2>
            }
        </div>
    )
}

export default ItemListContainer