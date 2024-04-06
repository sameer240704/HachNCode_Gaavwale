import React from "react";
import { useSidebarState } from "../hooks/useSidebarState";
import Card1 from "../components/Card/Card1";
import Card2 from "../components/Card/Card2";
import Card3 from "../components/Card/Card3";

const Music = () => {
  const { expanded } = useSidebarState();
  return (
    <div
      className="absolute top-0 px-10 py-12"
      style={{
        left: expanded ? "20vw" : "4vw",
        width: expanded ? "80vw" : "96vw",
      }}
    >
      <div>
        <h1 className="text-4xl mb-10 grid grid-cols-3">Instruments</h1>
        <div className="flex gap-48">
          <Card1 />
          <Card2 />
        </div>
        <Card3 />
      </div>
    </div>
  );
};

export default Music;
