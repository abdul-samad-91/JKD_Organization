"use client";
import { createContext, useContext,  useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [theme , setTheme] = useState('light')

  return (
    <GlobalContext.Provider value={{ theme , setTheme}}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
