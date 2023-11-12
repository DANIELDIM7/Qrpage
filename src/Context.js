import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [InputValue, setInputValue] = useState("");

  console.log("Aquí está el valor del state", InputValue);

  const values = {
    InputValue,
    actualizarValor(val) {
      setInputValue(val);
    },
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
// 