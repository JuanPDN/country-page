"use client"

import { ReactNode, useState } from "react";
import { RegionContext } from "@/app/context/regionContext";

export const RegionsProvider = ({ children }: { children: ReactNode }) => {
  const [regionSelect, setRegionSelect] = useState<string[]>([
    "Americas",
    "Africa",
    "Asia",
    "Europe",
  ]);

  return (
    <RegionContext.Provider value={{ regionSelect, setRegionSelect }}>
      {children}
    </RegionContext.Provider>
  );
};
