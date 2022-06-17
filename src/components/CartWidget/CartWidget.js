import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/Context';

const CartWidget = () => {
    const{ getCartQ, totalQ } = useContext (CartContext)

    return(
        <div className="cartWidget">
            <img src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png" alt="cart-widget"/> 
            {totalQ}
        </div>
    )
}

export default CartWidget;