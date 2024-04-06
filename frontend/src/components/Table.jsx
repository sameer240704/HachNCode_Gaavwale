import React, { useState } from 'react';

const Leaderboard = () => {
  const [players, setPlayers] = useState([
    { name: 'Player 1', score: 100 },
    { name: 'Player 2', score: 80 },
    { name: 'Player 3', score: 90 },
    { name: 'Player 4', score: 70 },
    { name: 'Player 4', score: 70 },
    { name: 'Player 4', score: 70 },
    { name: 'Player 4', score: 70 },
    { name: 'Player 4', score: 70 },
    { name: 'Player 4', score: 70 },
    { name: 'Player 4', score: 70 },
    { name: 'Player 4', score: 70 },
    { name: 'Player 4', score: 70 },
    { name: 'Player 4', score: 70 },
  ]);

  return (
    <div>
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
    </div>
  );
};

export default Leaderboard;