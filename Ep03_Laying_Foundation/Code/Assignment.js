/* *****************Task1**********************
1.1 Create a Nested header Element using React.createElement(h1, h2, h3 inside a div with class "title") 
1.2 Create the same element using JSX
1.3 Create a functional component of the same with JSX
1.4 Pass attributes into the tag in JSX
1.5 Composition of Component(Add a component inside another)
1.6 {TitleComponent} vs {<TitleComponent/>} vs {<Title Component></TitleComponent>} in JSX */

import React from "react";
import ReactDOM from "react-dom/client";
import userIcon from "./img/user.png";
import logo from "./img/logo.png";
import "./Assignment.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

// 1.1 Create a Nested header Element using React.createElement(h1, h2, h3 inside a div with class "title")
const nestedHeader1 = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { key: "h1" }, "Heading 1"),
  React.createElement("h2", { key: "h2" }, "Heading 2"),
  React.createElement("h3", { key: "h3" }, "Heading 3"),
]);

root.render(nestedHeader1);

// 1.2 Create the same element using JSX
const nestedHeader2 = (
  <div className="title">
    <h1>Heading 1 using JSX</h1>
    <h2>Heading 2 using JSX</h2>
    <h3>Heading 3 using JSX</h3>
  </div>
);

root.render(nestedHeader2);

// 1.3 Create a functional component of the same with JSX
// Notice: Name should be in Pascal case >> First letter capital
const NestedHeader3 = () => (
  <div className="title">
    <h1>Heading 1 using Functional component.</h1>
    <h2>Heading 2 using Functional component.</h2>
    <h3>Heading 3 using Functional component.</h3>
  </div>
);

root.render(<NestedHeader3 />);

// 1.4 Pass attributes into the tag in JSX
const heading1 = (
  <h1 style={{ backgroundColor: "aqua", color: "burlywood" }}>Heading1</h1>
);
const heading2 = (
  <h2 style={{ backgroundColor: "silver", color: "blueviolet" }}>Heading2</h2>
);
const NestedHeader4 = (
  <div>
    {heading1}
    {heading2}
  </div>
);
root.render(NestedHeader4);

// 1.5 Composition of Component(Add a component inside another)
const HeadingComponent1 = () => <h1>Nested Heading 1 component</h1>;
const HeadingComponent2 = () => <h2>Nested Heading 2 component</h2>;
const HeadingComponent3 = () => <h3>Nested Heading 3 component</h3>;

// Three Different rendering ways
const NestedComponent = () => (
  <div className="title">
    <HeadingComponent1 />
    <HeadingComponent2></HeadingComponent2>
    {HeadingComponent3()}
  </div>
);
root.render(<NestedComponent />);

// 1.6 {TitleComponent} vs {<TitleComponent/>} vs {<Title Component></TitleComponent>} in JSX
/**
 1. {TitleComponent}:
    This assumes that TitleComponent is a variable or reference to a React component.
    It's used to include the component directly in JSX.

  2. {<TitleComponent/>}:
    This is the standard and correct way to render a React component using JSX.
    It creates an instance of the TitleComponent component.
  
  3. {<TitleComponent></TitleComponent>}:
    This is also a correct way to render a React component using JSX.
    It's an alternative syntax for creating an instance of the TitleComponent component.
 */

const TitleComponent = () => {
  return <h1>Hello, I am a TitleComponent!</h1>;
};

const App = () => {
  return (
    <div>
      {/* 1. Using {TitleComponent} */}
      {TitleComponent}

      {/* 2. Using {<TitleComponent/>} */}
      {<TitleComponent />}

      {/* 3. Using {<TitleComponent></TitleComponent>} */}
      {<TitleComponent></TitleComponent>}
    </div>
  );
};

root.render(<App />);

/** ******************Task 2*************************
• Create a Header Component from scratch using Functional Components with JSX
• Add a Logo on left
• Add a search bar in middle
• Add User icon on right
• Add CSS to make it look nice
 */

const Header = () => {
  return (
    <div className="header">

      <div className="logo">
        <img src={logo}></img>
      </div>

      <div className="search">
        <input autoComplete="off" placeholder="Enter Disney movie name"></input>
        <button type="submit">Search</button>
      </div>

      <div className="user">
        <img src={userIcon}></img>
      </div>
    </div>
  );
};

root.render(<Header />);
