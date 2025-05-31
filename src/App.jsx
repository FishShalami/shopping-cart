import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";

export default function App() {
  const [cartItems, setCartItems] = useState([]); //array of {id, qty, price, title}

  const addToCart = (product, qty) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  // pass down two things wherever needed:
  // 1. cartItems.length (for the badge)
  // 2. addToCart function

  return (
    <BrowserRouter>
      <Navbar cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
}
