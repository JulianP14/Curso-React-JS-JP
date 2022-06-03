import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({productos}) => {
    return(
        <div className='contenedorProductos'>
            <ul className="listaProductos">
                {productos.map(producto => <Item key={producto.id} {...producto}/>)}
            </ul>
        </div>
    )
}


export default ItemList