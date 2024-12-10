"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

interface TopLevelContextType {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  direction: number;
  setDirection: Dispatch<SetStateAction<number>>;
  disable: boolean;
  setDisable: Dispatch<SetStateAction<boolean>>;
  startTime: number;
  setStartTime: Dispatch<SetStateAction<number>>;
  endTime: number;
  setEndTime: Dispatch<SetStateAction<number>>;
  riding: string;
  setRiding: Dispatch<SetStateAction<string>>;
}

export const TopLevelContext = createContext({} as TopLevelContextType);

export default function TopLevel(props: { children: React.ReactNode }) {
  const [active, setActive] = useState("red");
  const [direction, setDirection] = useState(0);
  const [disable, setDisable] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [riding, setRiding] = useState("");
  return (
    <TopLevelContext.Provider
      value={{
        active,
        setActive,
        direction,
        setDirection,
        disable,
        setDisable,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        riding,
        setRiding,
      }}
    >
      {props.children}
    </TopLevelContext.Provider>
  );
}
