import styles from "./ProductCard.module.css";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt="{product.title}" />
      <h2>{product.title}</h2>
      <h3>${product.price.toFixed(2)}</h3>
    </div>
  );
}
