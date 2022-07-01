import {Link} from 'react-router-dom'

const Item = ({id, name, img, price}) => {
    
    return (
        <div className='contenedorGlobal'>
            <header>
                <h2>{name}</h2>
            </header>
            <div className='contenedorVisual'>
                <img src={img} alt={name}/>
                <p>
                    Precio: ${price}
                </p>
                <footer>
                    <Link to={`/detalles/${id}`}> Ver detalle </Link>
                </footer>
            </div>
        </div>
    )
}

export default Item