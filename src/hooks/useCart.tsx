import { createContext, ReactNode, useContext, useState } from "react";
import { Item } from "../interfaces";

interface CartContextData {
  addItem(item: Item): void;
  removeItem(item: Item): void;
  cart: Item[];
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Item[]>([]);

  function addItem(item: Item) {
    const updatedItem: Item = { ...item, quantity: item.quantity + 1 };

    const updatedCart =
      item.quantity === 0
        ? [...cart, updatedItem]
        : cart.map((currentItem) => {
            if (currentItem.id === item.id) {
              return updatedItem;
            }
            return currentItem;
          });

    setCart(updatedCart);

    console.log(item);
    console.log(updatedItem);
    console.log(updatedCart);
  }

  function removeItem(item: Item) {
    const updatedItem: Item = { ...item, quantity: item.quantity - 1 };
    let updatedCart: Item[];

    if (item.quantity === 1) {
        updatedCart = cart.filter((currentItem) => currentItem.id !== item.id);
    } else {
      updatedCart = cart.map((currentItem) => {
        if (currentItem.id === item.id) {
          return updatedItem;
        }
        return currentItem;
      });
    }

    setCart(updatedCart);
  }

  return (
    <CartContext.Provider value={{ addItem, removeItem, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }

  return context;
}
