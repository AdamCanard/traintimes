"use client";
import { FormEvent, useContext, useEffect, useState } from "react";
import { TopLevelContext } from "../context/toplevelcontext";
import TrainLine from "./trainline";

export default function TrainList() {
  const [trainList, setTrainList] = useState([]);
  const [reverseTrainList, setReverseTrainList] = useState<string[]>([]);
  const [startTrain, setStartTrain] = useState("");
  const { active, direction, setDisable } = useContext(TopLevelContext);

  //API expectations
  //passes red or blue via params
  //returns lists of strings for train line
  const getTrains = async () => {
    try {
      const response = await fetch("/api/train/" + active, { method: "GET" });
      const data = await response.json();
      setTrainList(data.trains);
      const reverseList: string[] = [...data.trains];
      setReverseTrainList(reverseList.reverse());
    } catch (err: unknown) {
      if (err instanceof Error) {
        return new Response(
          JSON.stringify({ error: err.message || err.toString() }),
          {
            status: 500,
            headers: {},
          },
        );
      } else {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getTrains();
  }, [active]);

  const handleChoice = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const element = e.target as HTMLInputElement;
    setStartTrain(element.value);
    setDisable(true);
  };

  const getIndex = (startTrain: string, trainList: string[]) => {
    for (let i = 0; i < trainList.length; i++) {
      if (trainList[i] == startTrain) {
        return i + 1;
      }
    }
  };

  return (
    <div className={"pt-2"}>
      {startTrain === "" ? (
        <>
          <DirectionDecider />
          <form className={"w-full px-4"} onChange={(e) => handleChoice(e)}>
            <select className={"w-full h-12 text-lg"}>
              {direction === 0 ? (
                <TrainLine trains={trainList} />
              ) : (
                <TrainLine trains={reverseTrainList} />
              )}
              )
            </select>
          </form>
        </>
      ) : (
        <>
          <div className={"pl-4 text-3xl text-white font-bold"}>
            {" "}
            Select End Train
          </div>
          <form className={"w-full px-4"} onChange={(e) => handleChoice(e)}>
            <select className={"w-full h-12 text-lg"}>
              {direction === 0 ? (
                <TrainLine
                  trains={trainList.slice(getIndex(startTrain, trainList))}
                />
              ) : (
                <TrainLine
                  trains={reverseTrainList.slice(
                    getIndex(startTrain, reverseTrainList),
                  )}
                />
              )}
              )
            </select>
          </form>
        </>
      )}
    </div>
  );
}

export function DirectionDecider() {
  const { active, direction, setDirection } = useContext(TopLevelContext);
  return (
    <div className={"w-full h-16 flex justify-around flex-row items-center"}>
      <div
        id={direction === 0 ? "ButtonActive" : "Button"}
        onClick={() => {
          setDirection(0);
        }}
      >
        {active === "red" ? "Tuscany" : "69 St Station"}
      </div>
      <div
        id={direction === 1 ? "ButtonActive" : "Button"}
        onClick={() => {
          setDirection(1);
        }}
      >
        {active === "blue" ? "Saddletowne" : "Somerset Bridlewood"}
      </div>
    </div>
  );
}
