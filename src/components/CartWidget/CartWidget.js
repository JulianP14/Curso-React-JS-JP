import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const{ getCartQ, totalQ } = useContext (CartContext)
    const navigate = useNavigate ()

    return(
        <div className="cartWidget" onClick={() => navigate('/cart')}>
            <img src="https://toppng.com/uploads/preview/shopping-cart-11530997216xsrc2jr32q.png" alt="cart-widget"/> 
            {totalQ}
        </div>
    )
}

export default CartWidget;