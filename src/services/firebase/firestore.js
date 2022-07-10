import {database} from '.'
import { getDocs, query, where, collection } from 'firebase/firestore'
import {createAdaptedProductFromFirestore} from '../../adapters/productAdapters'

export const obtenerProductos = (categoryId) => {
    return new Promise ((resolve, reject) => {
        const collectionRef = categoryId 
        ? 
        (query(collection(database, 'products'), where('category', '==', categoryId))) 
        :
        (collection(database, 'products'))

        getDocs(collectionRef).then(response => {
            const productosFromFirestore = response.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })
            resolve(productosFromFirestore)
        }).catch(error => {
            reject(error)
        })
    })
}