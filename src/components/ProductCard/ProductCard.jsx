import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, addToCart }) {
  const [qty, setQty] = useState(1);
  const handleAdd = () => {
    if (qty > 0) addToCart(product, qty);
    setQty(1);
  };

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>${product.price.toFixed(2)}</h3>
      <div className={styles.qtyRow}>
        <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
        <input
          type="number"
          value={qty}
          step="1"
          min="1"
          onChange={(e) => setQty(Math.max(1, e.target.valueAsNumber) || 1)}
        />
        <button onClick={() => setQty((q) => q + 1)}>+</button>
      </div>
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
}
