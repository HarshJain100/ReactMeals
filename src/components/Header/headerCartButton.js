import { useContext } from "react";
import classes from "./headerCartButton.module.css";
import CartIcon from "../../assests/carticon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const noCartItems = cartCtx.items.reduce((curNum,item)=>{return curNum+item.amount},0);

    return <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon} >
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{noCartItems}</span>
    </button>
};

export default HeaderCartButton;