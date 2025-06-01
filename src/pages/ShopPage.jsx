import React from "react";
import { useEffect } from "react";

export default function ShopPage({ addToCart }) {
  //   useEffect(() => {
  //     addToCart({ id: 42, title: "Test item", price: 10 }, 2);
  //   }, []);
  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <p>This is where the Shop items will be displayed.</p>
      {/* Add Shop items and functionality here */}
    </div>
  );
}
