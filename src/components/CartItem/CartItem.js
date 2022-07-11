import { useContext } from "react";
import CartContext from "../../context/CartContext";
import './CartItem.css'

const CartItem = ({id, name, Q, price}) => {
    const {removerItem} = useContext (CartContext)

    const handleRemove = (id) => {
        removerItem(id)
    }

        return (
            <section>
                <header>
                    <h2>{name}</h2>
                </header>
                <div>
                    <p>Cantidad:{Q}</p>
                    <p>Precio por Unidad: ${price}</p>
                    
                </div>
                <footer>
                    <p>Subtotal: ${price * Q}</p>
                    <button onClick={() => {handleRemove(id)}}>
                        X
                    </button>
                </footer>
            </section>
        )
}

export default CartItem