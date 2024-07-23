import React from "react";
import ReactDOM from "react-dom";
// Note: Whenever you need to create siblings you need to crete an array of children.
// If you needs to create more than one children than put it into an array.
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am going to be front-end developer"),
    React.createElement("h2", {}, "I am an workaholic person."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am going to be software engineer"),
    React.createElement("h2", {}, "I am an workaholic person."),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// this render function  doesn't appends but "replaces" everything inside root which is div tag in .html file with the react element specified as argument
root.render(parent);
