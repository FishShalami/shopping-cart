import styles from "./CartItemRow.module.css";

export default function CartItemRow({ item }) {
  const { title, price, qty, image } = item;
  console.log("item", item);
  return (
    <div className={styles.itemRow}>
      <img src={image} alt={title} />
      <div className={styles.itemRowInfo}>
        <span className={styles.title}>{title} - </span>
        <span className={styles.qty}>{qty} x </span>
        <span className={styles.subtotal}>${(price * qty).toFixed(2)}</span>
      </div>
    </div>
  );
}
