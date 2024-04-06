import React from "react";
import { useSidebarState } from "../hooks/useSidebarState";
import Table from "../components/Table";

const LeaderBoard = () => {
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
        <h1 className="text-4xl mb-10 grid grid-cols-3">LeaderBoard</h1>
        <Table/>
      </div>
    </div>
  );
};

export default LeaderBoard;
