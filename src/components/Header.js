import React from "react";

export default function Header(props) {
  return (
    <header className="inner-container">
      <div>Pokemon Mix-Up</div>
      <div>{props.message}</div>
      <div>Current Score: {props.currentScore}</div>
      <div>Top Score: {props.topScore}</div>
    </header>
  );
}
