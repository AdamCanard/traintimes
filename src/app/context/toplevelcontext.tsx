"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface TopLevelContextType {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  direction: number;
  setDirection: Dispatch<SetStateAction<number>>;
  disable: boolean;
  setDisable: Dispatch<SetStateAction<boolean>>;
}

export const TopLevelContext = createContext({} as TopLevelContextType);

export default function TopLevel(props: { children: React.ReactNode }) {
  const [active, setActive] = useState("red");
  const [direction, setDirection] = useState(0);
  const [disable, setDisable] = useState(false);

  return (
    <TopLevelContext.Provider
      value={{
        active,
        setActive,
        direction,
        setDirection,
        disable,
        setDisable,
      }}
    >
      {props.children}
    </TopLevelContext.Provider>
  );
}
