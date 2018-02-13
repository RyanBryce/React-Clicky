import React, { Component } from 'react';
import cardData from "../data.json";
import ImageCard from "../ImageCard"
import ScoreCard from '../ScoreCard';
class Game extends Component {

  state = {
      score: 0,
      highScore: 0,
      cardData
    }

  
  componentDidMount() {
    this.setState({ cardData: this.suffleCards(this.state.cardData)});
  }
  
  suffleCards = (data) => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
    
  }

  correctGuess = (newData) => { 
    //increment 
    const {score, highScore} = this.state
    const newScore = score + 1;
    const newHighScore = newScore > highScore ? newScore : highScore;
    this.setState({
      cardData: this.suffleCards(newData),
      score: newScore,
      highScore: newHighScore
    })

  }

  incorrectGuess = (newData) => {
    this.setState({
      cardData: this.resetData(newData),
      score: 0
    })
  }

  resetData = (newData) => {
    const refreshedData = newData.map((item) => {
      item.clicked = false;
      return item
    })
     return this.suffleCards(refreshedData)
  }
  
  
  handleClick  = (id) =>{
    console.log("this worked")
    let guessedCorrect = false;
    const newData = this.state.cardData.map((item, i) => {
      const newItem = item
      if(item.id === id){
        if(!item.clicked){
          newItem.clicked = true;
          guessedCorrect = true
        }
      }
      return newItem
    })
    guessedCorrect ? this.correctGuess(newData) : this.incorrectGuess(newData)
  }
  

  render() {
    return (

      <div className="container-fluid">
        <ScoreCard score={this.state.score} highScore={this.state.highScore}/>
        <div clasname="row">
       {this.state.cardData.map((item, i) => {
          return <ImageCard key={item.id} id={item.id} image={item.image} handleClick={this.handleClick} />
       })}
        </div>
      </div>
    );
  }
}

export default Game;
