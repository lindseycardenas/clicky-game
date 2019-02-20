import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Tile from "./components/Tile";

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "",
    tiles: [
      { id: 0, val: "a" },
      { id: 1, val: "b" },
      { id: 2, val: "c" },
      { id: 3, val: "d" }
    ]
  };

  handleTileClick  = (id) => {
    console.log(`You've clicked ${id}`);

    //check to see if this has been clicked before!
    this.state.tiles.forEach((tile) => {
      if (tile.id === id) {
        if (tile.clicked === true) {
          console.log("you've clicked the same tile twice");
        } else {
          tile.clicked = true;
          //update the score
          //if the score is greater than the top score,
          //update the top score too
          //don't forget to update your state
        }
      }
    });
    //if they've clicked the tile before, somehow randomize the tiles
    //reset the game etc.
  };
  render() {
    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />

        <div className="game-board">
          {this.state.tiles.map((tile, i) => 
            <Tile
              key={i}
              id={tile.id}
              handleTileClick={this.handleTileClick}
              char={tile.val}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
