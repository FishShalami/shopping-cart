import styles from "./CartItemRow.module.css";

export default function CartItemRow({ item, updateQty, removeItem }) {
  const { id, title, price, qty, image } = item;
  const inc = () => updateQty(id, qty + 1);
  const dec = () => updateQty(id, Math.max(1, qty - 1));

  console.log("item", item);
  return (
    <div className={styles.itemRow}>
      <img src={image} alt={title} />
      <div className={styles.qtyCtrl}>
        <button onClick={dec}>-</button>
        <input
          type="number"
          value={qty}
          min="1"
          step="1"
          onChange={(e) =>
            updateQty(id, Math.max(1, e.target.valueAsNumber || 1))
          }
        />
        <button onClick={inc}>＋</button>
      </div>

      <div className={styles.itemRowInfo}>
        <span className={styles.title}>{title} - </span>
        <span className={styles.qty}>{qty} x </span>
        <span className={styles.subtotal}>${(price * qty).toFixed(2)}</span>
      </div>
      <button
        onClick={() => removeItem(id)}
        aria-label="Remove Item"
        className={styles.removeBtn}
      >
        x
      </button>
    </div>
  );
}
