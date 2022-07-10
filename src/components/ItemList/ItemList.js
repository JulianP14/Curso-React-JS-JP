import './ItemList.css'
import Item from "../Item/Item"
import { memo } from 'react'

const ItemList = ({productos}) => {
    return(
        <div className='contenedorProductos'>
            <ul className="listaProductos">
                {productos.map(prod => <Item key={prod.id} {...prod}/>)}
            </ul>
        </div>
    )
}


export default memo (ItemList)