"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface TopLevelContextType {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export const TopLevelContext = createContext({} as TopLevelContextType);

export default function TopLevel(props: { children: React.ReactNode }) {
  const [active, setActive] = useState("red");

  return (
    <TopLevelContext.Provider value={{ active, setActive }}>
      {props.children}
    </TopLevelContext.Provider>
  );
}
