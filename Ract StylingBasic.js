//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

var d = new Date();
let time = d.getHours();
let customStyle = {};
var Greeting;
if (time < 12) {
  Greeting = "Good Morning";
  customStyle = {
    color: "red"
  };
} else if (time >= 12 && time < 18) {
  Greeting = "Good Afternoon";
  customStyle = {
    color: "orange"
  };
} else {
  Greeting = "Good Night";
  customStyle = {
    color: "blue"
  };
}
ReactDom.render(
  <h1 style={customStyle}>{Greeting}</h1>,
  document.getElementById("root")
);
