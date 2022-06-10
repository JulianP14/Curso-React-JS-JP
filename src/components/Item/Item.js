import {Link} from 'react-router-dom'

const Item = ({id, name, img, price}) => {
    return (
        <li>
            {name}
            <img src={img} alt={name}/>
            <Link to={`/detalles/${id}`}> ver Mas </Link>
        </li>
    )
}

export default Item