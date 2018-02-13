import React from 'react';


const ImageCard = props => {
  return (
    <div className="col-sm-2">
      <img className="img-responsive" key={props.id} src={props.image} alt="card" id={props.id} onClick={() => props.handleClick(props.id)} ></img>
    </div>
  );
};


export default ImageCard;