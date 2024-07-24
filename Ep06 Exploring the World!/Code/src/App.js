// import React from "react";
import ReactDOM from "react-dom/client";
// import {Header} from "./components/Header";
import Header from "./components/Header";
import Body from "./components/Body";

/* import Header from "./components/Header" is same as import Header from "./components/Header.js". So don't write .js extension and try to keep it as simple as possible. */

//Task 1: Building Top-level Component for instance App Component that will contain all components
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
