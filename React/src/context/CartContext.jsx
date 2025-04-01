import { createContext, useState } from "react";
import { pizzaCart } from "../pizzas";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    pizzaCart.map((pizza) => ({
      ...pizza,
      cantidad: 1,
    }))
  );

  const aumentar = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
      )
    );
  };

  const restar = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((pizza) =>
        pizza.id === id && pizza.cantidad > 0
          ? { ...pizza, cantidad: pizza.cantidad - 1 }
          : pizza
      );
      return updatedCart.filter((pizza) => pizza.cantidad > 0);
    });
  };

  const agregarAlCarrito = (pizza) => {
    setCart((prevCart) => {
      const pizzaExistente = prevCart.find((item) => item.id === pizza.id);
      if (pizzaExistente) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }

      return [...prevCart, { ...pizza, cantidad: 1 }];
    });
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, aumentar, restar, agregarAlCarrito, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
