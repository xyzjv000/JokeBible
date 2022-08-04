import React from 'react';
function JokeCard(props) {
  return (
    <div
      style={{ width: props.width, minHeight: props.height }}
      className={props.className}
    >
      {props.children}
    </div>
  );
}

export default JokeCard;
