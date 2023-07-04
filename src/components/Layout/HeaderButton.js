import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import style from "./HeaderButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderButton = (props) => {
  let ctx = useContext(CartContext);

  let cartAmount = ctx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  return (
    <button className={style.button} onClick={props.onShow}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{cartAmount}</span>
    </button>
  );
};

export default HeaderButton;
