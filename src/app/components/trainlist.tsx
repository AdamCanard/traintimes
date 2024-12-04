"use client";
import { useContext, useEffect, useState } from "react";
import { TopLevelContext } from "../context/toplevelcontext";
import TrainLine from "./trainline";

export default function TrainList() {
  const [trainList, setTrainList] = useState([]);
  const { active } = useContext(TopLevelContext);

  //API expectations
  //passes red or blue via params
  //returns lists of strings for train line
  const getTrains = async () => {
    try {
      const response = await fetch("/api/train/" + active, { method: "GET" });
      const data = await response.json();
      setTrainList(data.trains);
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
  }, []);

  return (
    <>
      {trainList.map((train, index) => {
        return <TrainLine train={train} key={index} />;
      })}
    </>
  );
}
