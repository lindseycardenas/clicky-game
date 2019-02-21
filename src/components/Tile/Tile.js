import React from "react";
import "./Tile.css"

export default function Tile(props) {
  return (
    <div className="tile img-container ">
      <img
        alt={props.name}
        src={props.image}
        id={props.id}
        onClick={() => props.handleTileClick(props.id)}
        className="tileScore"
      />
    </div>
  );
}
