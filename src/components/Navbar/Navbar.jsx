import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ cartCount }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" aria-label="Go to cart">
            🛒
            <span className={styles.badge}>{cartCount}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
