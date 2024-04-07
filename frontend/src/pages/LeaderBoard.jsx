import React, { useState, useEffect } from "react";
import { useSidebarState } from "../hooks/useSidebarState";
import Table from "../components/Table";

const LeaderBoard = () => {

  const { expanded } = useSidebarState();
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/points/getPoints');
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard');
      }
      const data = await response.json();
      setLeaderboard(data);
    } catch (error) {
      console.error(error);
    }
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
        <h1 className="text-4xl mb-10 grid grid-cols-3">LeaderBoard</h1>
        <Table leaderboard={leaderboard} />
      </div>
    </div>
  );
};

export default LeaderBoard;
