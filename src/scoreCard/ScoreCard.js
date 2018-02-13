import React from 'react';

const ScoreCard = (props) => {
  return (
    <div className="row">
      <div className="col-xs-4 col-xs-offset-8">
        <span> Score:{props.score} High Score: {props.highScore}</span>
      </div>
    </div>
  );
};

export default ScoreCard;