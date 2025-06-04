import React from "react";
import CartItemRow from "../components/Cart/CartItemRow";

export default function CartPage({ cartItems, updateQty, removeItem }) {
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  return (
    <main className="cart-page">
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <CartItemRow
            key={item.id}
            item={item}
            updateQty={updateQty}
            removeItem={removeItem}
          />
        ))}
      </ul>
      <h2>Total : ${total.toFixed(2)}</h2>
    </main>
  );
}
