import React from 'react';
const Player = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.role),
    React.createElement("h2", {}, props.Team),
  ]);
};

export default Player;