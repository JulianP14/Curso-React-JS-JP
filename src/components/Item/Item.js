import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../App'

const Item = ({id, name, img, price}) => {
    
    return (
        <div>
            <header>
                <h2>{name}</h2>
            </header>
            <div>
                <img src={img} alt={name}/>
            </div>
            <div>
                <p>
                    Precio: ${price}
                </p>
            </div>
            <footer>
                <Link to={`/detalles/${id}`}> Ver Mas </Link>
            </footer>
        </div>
    )
}

export default Item