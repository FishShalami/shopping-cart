import styles from "./CartItemRow.module.css";

export default function CartItemRow({ item }) {
  const { title, price, qty } = item;
  console.log("item", item);
  return (
    <li className={styles.itemRow}>
      <span className={styles.title}>{title} - </span>
      <span className={styles.qty}>{qty} x </span>
      <span className={styles.subtotal}>${(price * qty).toFixed(2)}</span>
    </li>
  );
}
