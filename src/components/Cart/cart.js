import { useContext } from "react";
import classes from "./cart.module.css";
import Modal from "../UI/modal";
import CartItem from "./cartItem";
import CartContext from "../../store/cart-context";

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0; 

    const totalAmount= `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemovehandler= (id) => {};
    const cartItemAddhandler=(item) => {};

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=> 
            <CartItem 
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemovehandler.bind(null,item.id)}
                onAdd={cartItemAddhandler.bind(null,item)}
            />
        )}
    </ul>;

    return <Modal onClose={props.onClose} >
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;