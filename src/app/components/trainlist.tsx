"use client";
import { FormEvent, useContext, useEffect, useState } from "react";
import { TopLevelContext } from "../context/toplevelcontext";
import TrainLine from "./trainline";

export default function TrainList() {
  const [trainList, setTrainList] = useState([]);
  const [reverseTrainList, setReverseTrainList] = useState<string[]>([]);
  const [startTrain, setStartTrain] = useState("");
  const { active, direction, setDisable, setRiding, setStartTime } =
    useContext(TopLevelContext);

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
          }
        );
      } else {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getTrains();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleChoice = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const element = e.target as HTMLInputElement;
    if (element.value !== "") {
      setStartTrain(element.value);
      setDisable(true);
    }
  };
  const handleSecondChoice = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const element = e.target as HTMLInputElement;
    if (element.value !== "") {
      setRiding(active + ":" + startTrain + ":" + element.value);
      setStartTime(Date.now() / 1000);
    }
  };
  const getIndex = (startTrain: string, trainList: string[]) => {
    for (let i = 0; i < trainList.length; i++) {
      if (trainList[i] == startTrain) {
        return i + 1;
      }
    }
  };

  return (
    <div className={"pt-2 flex flex-col items-center gap-5"}>
      {startTrain === "" ? (
        <>
          <h1
            className={"text-2xl text-white font-bold text-center mt-5 -mb-3"}
          >
            Select a Train Direction:
          </h1>
          <DirectionDecider />
          <form className={"w-full px-4"} onChange={(e) => handleChoice(e)}>
            <h2 className={"text-xl text-white font-bold text-center p-2"}>
              Select a Starting Stop:
            </h2>
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
          <form
            className={"w-full px-4"}
            onChange={(e) => handleSecondChoice(e)}
          >
            <select className={"w-full h-12 text-lg"}>
              {direction === 0 ? (
                <TrainLine
                  trains={trainList.slice(getIndex(startTrain, trainList))}
                />
              ) : (
                <TrainLine
                  trains={reverseTrainList.slice(
                    getIndex(startTrain, reverseTrainList)
                  )}
                />
              )}
              )
            </select>
          </form>
          <button
            onClick={() => {
              setStartTrain("");
              setDisable(false);
            }}
            className={"text-center bg-red-300 mt-[60vh] py-2 px-5"}
          >
            Go Back
          </button>
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
