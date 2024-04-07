import React from "react";
import { useSidebarState } from "../hooks/useSidebarState";
import { BentoCourseDemo } from "../components/BentoCourses.tsx";

const Courses = () => {
  const { expanded } = useSidebarState();
  return (
    <div>

      <h1 className="absolute text-white text-3xl font-semibold mt-20 right-20">Courses</h1>

      <div
        className="absolute top-0"
        style={{
          left: expanded ? "20vw" : "4vw",
          width: expanded ? "80vw" : "96vw",
        }}
      ></div>
      <BentoCourseDemo />
    </div>
  );
};

export default Courses;
