import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import style from "./HeaderButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderButton = (props) => {
  let ctx = useContext(CartContext);

  let cartAmount = ctx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  const [addAnimation, setAddAnimation] = useState(false);

  const btnClasses = `${style.button} ${addAnimation ? style.bump : ""}`;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setAddAnimation(true);
    const timer = setTimeout(() => {
      setAddAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);
  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{cartAmount}</span>
    </button>
  );
};

export default HeaderButton;
