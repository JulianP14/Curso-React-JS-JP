import './ItemDetail.css'

const ItemDetail = ({id, name, img, price, description}) => {
    return (
        <div>
            <h2 className='tituloItemDetail'>{name}</h2>
                <div className='TID__divImg'>
                    <img src={img}></img>
                    <p className='TID__price'>
                        ${price}
                    </p>
                    <p className='TID__description'>
                        {description}
                    </p>
                </div>
                <div>
                    
                </div>
            
        </div>
    )
}

export default ItemDetail