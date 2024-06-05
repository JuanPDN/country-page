"use client";

import { ReactNode, useState } from "react";
import { GlobalContext } from "@/app/context/AppContext";

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [globalState, setGlobalState] = useState({
    selectRegion: ["Americas", "Africa", "Asia", "Europe"],
    totalCountries: 0,
    unMember:false,
    independent:false
  });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};
