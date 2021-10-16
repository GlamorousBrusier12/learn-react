import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player'
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "This is Yaparam"),
    React.createElement(Player, {
      name: "Virat Kohli",
      role: "Right Handed Batsman",
      Team: "Royal Challengers Banglore",
    }),
    React.createElement(Player, {
      name: "Glenn Maxwell",
      role: "Right Handed Batsman",
      Team: "Royal Challengers Banglore",
    }),
    React.createElement(Player, {
      name: "Shabaz Ahmed",
      role: "Left Handed Batsman",
      Team: "Royal Challengers Banglore",
    }),
    React.createElement(Player, {
      name: "Venkatesh Iyyer",
      role: "Left Handed Batsman",
      Team: "Kolkata Knight Riders",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
