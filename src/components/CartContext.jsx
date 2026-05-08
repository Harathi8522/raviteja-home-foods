import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  // 🔥 Load cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 🔥 Save cart automatically
  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // 🔥 ADD TO CART
  const addToCart = (product) => {

    const existingItem = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.weight === product.weight
    );

    if (existingItem) {

      const updatedCart = cartItems.map((item) =>
        item.id === product.id &&
        item.weight === product.weight
          ? { ...item, qty: item.qty + product.qty }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([...cartItems, product]);

    }
  };

  // 🔥 REMOVE ITEM
  const removeFromCart = (id, weight) => {
    const updatedCart = cartItems.filter(
      (item) =>
        !(item.id === id && item.weight === weight)
    );

    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;