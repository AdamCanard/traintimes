"use client";
import { useContext } from "react";
import TrainList from "./components/trainlist";
import Waiting from "./components/waiting";
import { TopLevelContext } from "./context/toplevelcontext";

export default function Home() {
  const { startTime } = useContext(TopLevelContext);
  return (
    <div className={"w-full h-full bg-[#41584f]"}>
      {startTime === 0 ? (
        <>
          <TrainList />
        </>
      ) : (
        <>
          <Waiting />
        </>
      )}
    </div>
  );
}
