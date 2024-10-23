import { useState } from "react";

import("./players.css");
export default function PlayerState() {
  const [player, setPlayer] = useState(14);
  const handleAddPlayer = () => {
    // alert("Player Add button clicked");
    player >= 20 ? alert("Players already available") : setPlayer(player + 1);
  };
  const handleRemovePlayer = () => {
    // alert("Player Remove button clicked");
    player <= 11 ? alert("Minimum player are 11") : setPlayer(player - 1);
  };
  return (
    <div className="player-container">
      <span>state related</span>
      <h3>Total player : {player}</h3>
      <button
        onClick={handleAddPlayer}
        style={{ backgroundColor: "gray", color: "white", margin: "10px" }}
      >
        playerAdd
      </button>
      <button
        onClick={handleRemovePlayer}
        style={{ backgroundColor: "gray", color: "white", margin: "10px" }}
      >
        playerRemove
      </button>
    </div>
  );
}
