"use client";
import { useContext } from "react";
import { TopLevelContext } from "../context/toplevelcontext";

export default function Header() {
  const { active, setActive, disable } = useContext(TopLevelContext);
  return (
    <>
      {disable ? (
        <>
          {" "}
          <header
            className={
              "w-full bg-[#24AE51] h-16 flex justify-around flex-row items-center"
            }
          ></header>
        </>
      ) : (
        <>
          <header
            className={
              "w-full bg-[#24AE51] h-16 flex justify-around flex-row items-center"
            }
          >
            <div
              id={active === "red" ? "RedLineButtonActive" : "RedLineButton"}
              onClick={() => {
                setActive("red");
              }}
            >
              REDLINE
            </div>
            <div
              id={active === "blue" ? "BlueLineButtonActive" : "BlueLineButton"}
              onClick={() => {
                setActive("blue");
              }}
            >
              BLUELINE
            </div>
          </header>
        </>
      )}
    </>
  );
}
