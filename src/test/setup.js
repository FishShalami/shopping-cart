import "@testing-library/jest-dom";

// Mock the product API so tests don't hit the network
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Test Product",
          price: 9.99,
          image: "test.png",
        },
      ]),
  })
);
