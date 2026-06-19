import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        user,
        setUser,
        addToCart,
        removeFromCart,
        addToWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}