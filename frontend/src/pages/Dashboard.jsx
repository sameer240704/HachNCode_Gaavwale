import React from "react";
import { useSidebarState } from "../hooks/useSidebarState";
import BasicCards from "../components/BasicCard.jsx"

const Dashboard = () => {
  const { expanded } = useSidebarState();
  return (
    <div>
      <h1 className="absolute text-white text-3xl font-semibold mt-20 right-20">Dashboard</h1>
      <div
        className="absolute top-0"
        style={{ left: expanded ? "20vw" : "4vw" }}
      ></div>
      <div className="absolute w-64 h-40 bg-yellow-200 top-52">
        <h1>Card1</h1>
      </div>

  </div>

  );
};

export default Dashboard;
