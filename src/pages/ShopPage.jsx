import React from "react";
import { useState, useEffect } from "react";
import { fetchProducts } from "../api/products";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./ShopPage.module.css";

export default function ShopPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="shop-page">
      <h1>Shop</h1>
      <div className={styles.products}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {/* <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul> */}
    </main>
  );
}
