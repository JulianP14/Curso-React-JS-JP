import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import {Link} from 'react-router-dom'
import { useNotification } from '../../notification/Notification'


const ItemDetail = ({id, name, category, stock, img, price, description}) => {
    const [Qadded, setQadded] = useState(0)
    const {addItem} = useContext(CartContext)
    const setNotification = useNotification()

    const handleOnAdd = (Q) => {
        debugger
        setNotification('success', `Se agregaron ${Q} ${name}`)
        addItem({id, name, price, Q})
        setQadded(Q)
    }

    return (
        <div>
            <h2 className='tituloItemDetail'>
                {name}
            </h2>
            <div className='TID__divImg'>
                <img src={img} alt={name}></img>
                <div>
                    <p className='TID__price'>
                        ${price}
                    </p>
                    <p className='TID__description'>
                        {description}
                    </p>
                    <p>
                        {category}
                    </p>
                </div>    
            </div>
            <div>
                {Qadded === 0 ? <ItemCount stock={stock} onAdd={() =>
                handleOnAdd(Qadded)}/> : <Link to='/cart'>Finalizar Compra</Link> }
            </div>
        </div>
    )
}
export default ItemDetail