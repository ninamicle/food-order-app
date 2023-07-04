import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { useContext } from "react";

const Cart = (props) => {
  let ctx = useContext(CartContext);
  let totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const addCartItemHandler = (item) => {
    return ctx.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    return ctx.removeItem(id);
  };

  let cartItems = (
    <ul className={styles["cart-items"]}>
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeCartItemHandler.bind(null, item.id)}
            onAdd={addCartItemHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        {ctx.items.length > 0 && (
          <button className={styles.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
