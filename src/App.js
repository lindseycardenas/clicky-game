import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Tile from "./components/Tile/Tile";
import Wrapper from "./components/Wrapper"
import pokemon from "./cards.json";

class App extends Component {
  state = {
    pokemon,
    currentScore: 0,
    topScore: 0,
    message: "",
    clickedTiles: []
  };

  handleTileClick = id => {
    console.log(`You've clicked ${id}`);

    let clickedTiles = this.state.clickedTiles;
    //check to see if this has been clicked before!
    if (clickedTiles.includes(id)){
      this.setState({clickedTiles: [], currentScore: 0, message: "Game Over! Gotta remember 'em all!"}); 
      return
    }else{
      clickedTiles.push(id)
    }

    if (clickedTiles.length === 10){
      this.setState({currentScore:10, status: "You're a world class trainer! You caught 'em all!", clickedTiles: []}); 
      return; 
    }

    this.setState({pokemon, clickedTiles, currentScore: clickedTiles.length, status: ""}); 

    for (let i = pokemon.length -1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1)); 
      [pokemon[i], pokemon[j]] = [pokemon[j], pokemon[i]]; 
    }
  }

    // this.state.pokemon.forEach(tile => {
    //   if (tile.id === id) {
    //     if (tile.clicked === true) {
    //       console.log("you've clicked the same tile twice");
    //     } else {
    //       tile.clicked = true;
    //       //update the score
    //       //if the score is greater than the top score,
    //       //update the top score too
    //       //don't forget to update your state
    //     }
    //   }
    // });
    //if they've clicked the tile before, somehow randomize the tiles
    //reset the game etc.

  render() {
    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />

        <Wrapper>
          {this.state.pokemon.map((tile, i) => (
            <Tile
              key={i}
              id={tile.id}
              handleTileClick={this.handleTileClick}
              image={tile.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
