import React from "react";

const Player = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.rol}</h1>
      <h1>{props.Team}</h1>
    </div>
  );
};

export default Player;
