import { useContext } from "react";
import { TopLevelContext } from "../context/toplevelcontext";

export default function Waiting() {
  const { riding, startTime, setStartTime, setRiding, setDisable } =
    useContext(TopLevelContext);

  const postData = async () => {
    const formData = new FormData();
    formData.append("start", riding.split(":")[1]);
    formData.append("end", riding.split(":")[2]);
    formData.append("difference", Date.now() / 1000 - startTime + "");

    try {
      const response = await fetch("/api/time", {
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
          },
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
    <div className={"flex items-center gap-4 flex-col"}>
      <div className={"px-8 text-white font-bold text-3xl text-center"}>
        Riding the {riding.split(":")[0]} Line from {riding.split(":")[1]} to{" "}
        {riding.split(":")[2]}
      </div>
      <div>
        <div className={"text-white text-md"}>Press me when you get off!</div>
        <div
          id="Button"
          className={"text-lg text-white text-center font-bold"}
          onClick={handleClick}
        >
          {riding.split(":")[2]}
        </div>
      </div>
    </div>
  );
}
