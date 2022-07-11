import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import {Link} from 'react-router-dom'
import { useNotification } from '../../notification/Notification.js'


const ItemDetail = ({id, name, stock, img, price, description}) => {
    const [Qadded, setQadded] = useState(0)
    const {agregarItem} = useContext(CartContext)
    const setNotification = useNotification()

    const handleOnAdd = (Q) => {

        setNotification('success', `Se agregaron ${Q} ${name}`)
        agregarItem({id, name, price, Q})
        setQadded(Q)
    }

    return (
        <section className='sectionItemDetail'>
            <header>
                <h2 className='tituloItemDetail'>{name}</h2>
            </header>
            <picture className='TID__divImg' >
                <img src={img} alt={name} className='TID__divImg'/>
            </picture>
            <div className='info'>
                <p className='TID__description'>
                    {description}
                </p>
                <p className='TID__price'>
                    Precio: ${price}
                </p>
            </div>
            <footer className='footerCompra'>
                {Qadded === 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <Link to='/cart' className='finalizarCompra'>Finalizar Compra</Link>}
            </footer>
        </section>
    )
}
export default ItemDetail