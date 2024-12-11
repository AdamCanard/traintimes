import { useContext, useEffect } from "react";
import { TopLevelContext } from "../context/toplevelcontext";
import capitalize from "../_utils/capitalize.js";
import { useState } from "react";
import TripTime from "./trip-time";

interface TripType {
  start: string;
  end: string;
  difference: number;
}

export default function Waiting() {
  const { riding, startTime, setStartTime, setRiding, setDisable } =
    useContext(TopLevelContext);
  const [trips, setTrips] = useState<[]>([]);

  useEffect(() => {
    getAvgTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAvgTrips = async () => {
    const formData = new FormData();
    formData.append("start", riding.split(":")[1]);
    formData.append("end", riding.split(":")[2]);

    try {
      const response = await fetch("/api/get-trip", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      setTrips(data);
    } catch (err) {
      console.log("error");
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
    return null;
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("start", riding.split(":")[1]);
    formData.append("end", riding.split(":")[2]);
    formData.append("difference", Date.now() / 1000 - startTime + "");

    try {
      const response = await fetch("/api/add-trip", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      setStartTime(0);
      setRiding("");
      setDisable(false);
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
  const handleClick = () => {
    postData();
  };

  return (
    <div className={"p-5 flex items-center gap-4 flex-col"}>
      <div className={"px-8 text-white font-bold text-xl text-center"}>
        Riding the{" "}
        <span
          className={`${
            riding.split(":")[0] === "red" ? "text-[#c0253a]" : "text-[#0089ac]"
          }`}
        >
          {capitalize(riding.split(":")[0])} Line
        </span>{" "}
        from {riding.split(":")[1]} to {riding.split(":")[2]}
      </div>
      <div className={"flex flex-col items-center"}>
        <div className={"text-white text-md"}>Press me when you get off!</div>
        <div
          id="Button"
          className={"text-lg text-white text-center m-5 font-bold"}
          onClick={handleClick}
        >
          {riding.split(":")[2]}
        </div>
      </div>
      <div
        className={
          "flex flex-col items-center text-lg font-bold text-white p-5"
        }
      >
        Previous trip times:
        {trips.map((trip: TripType, index) => {
          return <TripTime key={index} difference={trip.difference} />;
        })}
      </div>
    </div>
  );
}
