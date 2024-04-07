import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const [players, setPlayers] = useState([
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 80 },
    { name: 'Player 3', score: 90 },
    { name: 'Player 4', score: 70 },
  ]);

  const navigate = useNavigate();

  const handleLeaderBoard = (event) => {
    event.preventDefault();
    navigate("/leaderboard");
  };

  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.sort((a, b) => b.score - a.score).map((player, index) => (
            <tr key={player.name}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLeaderBoard}>Go to Guitar</button>
    </div>
  );
};

export default Leaderboard;