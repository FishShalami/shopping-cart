import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, addToCart }) {
  const [qty, setQty] = useState(0);

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt="{product.title}" />
      <h2>{product.title}</h2>
      <h3>${product.price.toFixed(2)}</h3>
      <button onClick={() => setQty(qty + 1)}>+</button>
      <button onClick={() => setQty(Math.max(0, qty - 1))}>-</button>
      <p>{qty}</p>
      <button onClick={() => addToCart(product, qty)}>Add to cart</button>
    </div>
  );
}
