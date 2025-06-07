import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App"; // adjust path if needed

// one test = one async function
test("adding one product updates badge and cart page", async () => {
  render(<App />); // <-- renders once

  // ---- navigate to Shop (scoped to navbar) ----
  const nav = screen.getByRole("navigation");
  const shopLink = within(nav).getByRole("link", { name: /shop/i });
  await userEvent.click(shopLink);

  // ---- wait for Add to cart button, then click ----
  const addBtn = await screen.findByRole("button", {
    name: /add to cart/i,
  });
  await userEvent.click(addBtn);

  // ---- navbar badge shows 1 ----
  expect(screen.getByText("1")).toBeInTheDocument();

  // ---- open Cart via navbar ----
  const cartLink = within(nav).getByRole("link", { name: /cart/i });
  await userEvent.click(cartLink);

  // ---- cart lists the product ----
  expect(screen.getByText(/test product/i)).toBeInTheDocument();
});
