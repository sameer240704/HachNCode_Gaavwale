import React from "react";
import { useSidebarState } from "../hooks/useSidebarState";

const Music = () => {
  const { expanded } = useSidebarState();
  return (
    <div className="absolute top-0" style={{ left: expanded ? "20vw" : "4vw" }}>
      Drums
    </div>
  );
};

export default Music;
