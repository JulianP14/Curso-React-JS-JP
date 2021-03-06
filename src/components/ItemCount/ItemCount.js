import { useState } from "react";
import './ItemCount.css'    

const ItemCount = ({stock = 0, inicial = 1, onAdd})=> {
    const [Q, setQ] = useState (inicial)

    const sumar = () => {
        if(Q < stock) {
            setQ (Q + 1)
        }
    }

    const restar = () => {
        if (Q > 1) {
            setQ (Q - 1)
        }
    }
    console.log(onAdd)

    return(
        <div className="contador">
            <div className="controls">
                <button className="botonContador" onClick={restar}>-</button>
                <h3 className="numeroContador">{Q}</h3>
                <button className="botonContadorMas" onClick={sumar}>+</button>
            </div>
                <button className="botonReset" onClick={() => onAdd(Q)}> Agregar al carrito</button>
            </div>
    )
}


export default ItemCount