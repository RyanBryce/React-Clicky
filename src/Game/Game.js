import React, { Component } from 'react';
import cardData from "../data.json";
import ImageCard from "../ImageCard"
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highScore: 0
    }
  }
  handleclick  = () =>{
    
    for (var i = cardData.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cardData[i];
      cardData[i] = cardData[j];
      cardData[j] = temp;
    }
      console.log(cardData);
  }

  shuffleCards = () => {
    for (var i = cardData.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cardData[i];
      cardData[i] = cardData[j];
      cardData[j] = temp;
    }
    console.log(cardData);
  }
  

  render() {
    return (
      <div>
       {}
      </div>
    );
  }
}

export default Game;

this.state = {
  score: 0,
  highScore: 0
}