import React, { createContext } from "react";

export const context = createContext();

export default function CartContext({ children }) {
  function addItem() {
    alert("hola")
  }

  function removeItem() {

  }
  function clear() {

  }

  return (
    <>
      <context.Provider value={{ addItem, removeItem, clear }}>
        {children}
      </context.Provider>
    </>
  );
}
