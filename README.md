Shopping Cart Components

    - Nav Bar
        - Nav Button
        - Shoppping Cart Button
    - Items/Products
        - Retrieve items API
        - Quantity input
        - Increment buttons
        - Card elements
    - Cart
    - Homepage
    - Shopping cart

src/
components/ (re-usable UI bits)
Navbar/
Navbar.jsx
CartButton.jsx
ProductCard/
ProductCard.jsx
QuantityInput.jsx
Cart/
CartItemRow.jsx
pages/ (route “screens”)
HomePage.jsx
ShopPage.jsx
CartPage.jsx
context/
CartContext.jsx
api/
products.js (wrap the fetch call)
App.jsx
main.jsx

Incremental build plan
Routing skeleton

- Install react-router-dom.
- Create the three pages with placeholder text.
- Add Navbar with working links.

Cart context

- Set up CartProvider that exposes { cartItems, addItem, removeItem, updateQty }.
- Show count badge in CartButton.

Fetch & render products

- In ShopPage, fetch from FakeStore API, map to <ProductCard>.

Quantity picker + “Add to cart”

- Build <QuantityInput> with ± and text field.
- On “Add”, call addItem(product, qty) from context.

Cart page summary

- Read cartItems from context, display rows, total price.

Prop-Types / ESLint

- Add prop-types package; clear those warnings.

Tests

- Write RTL tests for:
  - Navbar link navigation.
  - “Add to cart” increments badge.
  - QuantityInput behaving correctly.
- Mock the router in tests rather than testing react-router-dom internals.
