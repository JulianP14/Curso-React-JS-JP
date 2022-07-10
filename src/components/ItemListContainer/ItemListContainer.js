import './ItemListContainer.css'
/* import { useState, useEffect } from 'react' */
/* import { getDocs, collection, query, where } from 'firebase/firestore'
import { database } from '../../services/firebase' */
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { obtenerProductos } from '../../services/firebase/firestore'

const ItemListContainer = (props) => {
    const {categoryId} = useParams ()
    const {isLoading, data, error} = useAsync(() => obtenerProductos(categoryId), [categoryId])
    
        if(isLoading) {
            return <h2>Cargando...</h2>
        }
        if (error) {
            return <h2>Hubo un problema cargando los productos</h2>
        }

        return (
            <div>
                <h2>{props.greeting}</h2>
                {
                data.length > 0 
                ? <ItemList productos={data}/> 
                : <h2>No se encontraron productos</h2>
                }
            </div>
        )
}
/*     const [productos, setProductos] = useState ([])
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
} */

export default ItemListContainer