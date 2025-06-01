import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>This is where the home page will be displayed.</p>
      <p>
        Go to
        <Link to="/shop"> Shop</Link>
      </p>
      <p>
        Go to
        <Link to="/cart"> Cart</Link>
      </p>
      {/* Add home page items and functionality here */}
    </div>
  );
}
