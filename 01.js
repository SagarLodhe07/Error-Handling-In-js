const cart = [];

const addToCart = (name, price, quantity) => {
  if (!name) throw new Error("Product name is required");
  if (!Number.isInteger(price) || price <= 0)
    throw new Error("Invalid product price");
  if (!Number.isInteger(quantity) || quantity <= 0)
    throw new Error("Invalid quantity");

  cart.push(name, price, quantity);

  return cart;
};

const checkout = () => {
  if (cart.length == 0) throw new Error("Cart is empty");
};

try {
  addToCart("Laptop", 10, 2);
  checkout()
} catch (error) {
  console.log(error.message);
}

