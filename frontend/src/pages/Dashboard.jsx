import React from "react";
import { useSidebarState } from "../hooks/useSidebarState";
import { BentoGridDemo } from "../components/BentoGrid.tsx";

const Dashboard = () => {
  const { expanded } = useSidebarState();
  return (
    <div>
<<<<<<< HEAD
      <h1 className="absolute text-white text-3xl font-semibold mt-20 right-20">
        Dashboard
      </h1>
=======
      <h1 className="absolute text-white text-3xl font-semibold mt-20 right-20">Dashboard</h1>
>>>>>>> d415edf9994fa38474822fb85728629c6c2cb61d
      <div
        className="absolute top-0"
        style={{
          left: expanded ? "20vw" : "4vw",
          width: expanded ? "80vw" : "96vw",
        }}
      ></div>
      <BentoGridDemo />
    </div>
  );
};

export default Dashboard;
