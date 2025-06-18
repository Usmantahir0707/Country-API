import { createContext, useState } from "react";

export const Theme = createContext();


export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("dark");
    return stored !== null ? JSON.parse(stored) : true;
  });
  return <Theme.Provider value={[dark, setDark]}>{children}</Theme.Provider>;
}
