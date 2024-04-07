import React from "react";
import { useSidebarState } from "../hooks/useSidebarState";
import Online from "../assets/online.png";
import Offline from "../assets/offline.png";
import { useNavigate } from "react-router-dom";

const WhiteboardScreen = () => {
  const navigate = useNavigate();
  const { expanded } = useSidebarState();

  const handleOnline = (event) => {
    event.preventDefault();
    navigate("/whiteboard/online");
  };

  const handleOffline = (event) => {
    event.preventDefault();
    navigate("/whiteboard/offline");
  };

  return (
    <div
      className="absolute top-0 px-10 py-12"
      style={{
        left: expanded ? "20vw" : "4vw",
        width: expanded ? "80vw" : "96vw",
      }}
    >
      <div>
        <h1 className="text-4xl mb-16">Whiteboard</h1>
        <div className="flex gap-20">
          <div
            className=" h-[450px] border-2 rounded-xl px-5 py-4"
            style={{ width: expanded ? "500px" : "650px" }}
          >
            <img src={Online} className="rounded-lg mb-3" />
            <h1 className="text-2xl">Online Whiteboard</h1>
            <button
              onClick={handleOnline}
              className="p-2 border-2 bg-slate-100 text-black rounded-xl"
            >
              Create
            </button>
          </div>
          <div
            className=" h-[450px] border-2 rounded-xl px-5 py-4"
            style={{ width: expanded ? "500px" : "650px" }}
          >
            <img src={Offline} className="rounded-lg mb-3" />
            <h1 className="text-2xl">Offline Whiteboard</h1>
            <button
              onClick={handleOffline}
              className="p-2 border-2 bg-slate-100 text-black rounded-xl"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteboardScreen;
