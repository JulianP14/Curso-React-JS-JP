import CartItem from "../CartItem/CartItem";

const CartItemList = ({productsAdded}) => {
    return(
        <div>
            {productsAdded.map(p => <CartItem key={p.id}/>)}
        </div>
    )
}

export default CartItemList