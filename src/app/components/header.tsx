"use client";
import { useState } from "react";

export default function Header() {
  const [pressed, setPressed] = useState("red");
  return (
    <header
      className={
        "w-full bg-[#24AE51] h-16 flex justify-around flex-row items-center"
      }
    >
      <div
        id={pressed === "red" ? "RedLineButtonActive" : "RedLineButton"}
        onClick={() => {
          setPressed("red");
        }}
      >
        REDLINE
      </div>
      <div
        id={pressed === "blue" ? "BlueLineButtonActive" : "BlueLineButton"}
        onClick={() => {
          setPressed("blue");
        }}
      >
        BLUELINE
      </div>
    </header>
  );
}
