import React from "react";
import ReactDOM from "react-dom/client";

/* *********************************Part 1 (Revision)************************************************** */
//Step1: creating ReactElement
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
// Step2: Creating root
const root = ReactDOM.createRoot(document.getElementById("root"));
// Step3: Rendering th reactElement
root.render(heading);

/* *********************************Part 2 (JSX Fundamental)******************************************** */
//------------------ JSX is HTML like syntax. It is not HTML inside javascript code-----------
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
const heading1 = <h1 id="heading">Namaste React using JSX </h1>;
root.render(heading1);

console.log(heading);
console.log(heading1);

// Jsx is HTML like language but not HTML because the attributes in JSX is in camelcase but in HTML it is written in lowercase
const heading2 = (
  <h2 className="head" tabIndex="1">
    Namaste React using JSX
  </h2>
);
root.render(heading2);

/* *********************************Part 3 (React Component)******************************************* */
/*---------------React Component-----------
There are two ways to create components:
1. Class Based Component(Old way)
2. Functional Component(New way)
*/
// Both HeadingComponent1 and HeadingComponent2 are valid functional component syntax
const HeadingComponent1 = () => {
  return <h1 className="head"> Namaste React Functional component</h1>;
};
const HeadingComponent2 = () => (
  <h1 className="head"> Namaste React Functional component</h1>
);

/* *********************************Part 4 (Nested React Component)************************************** */
// Component Composition
const Title = () => <h1> Title component </h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// Arrow Function returning JSX code
const Name = () => {
  return <h2>Pooja</h2>;
};
const Surname = () => <h2>Singh</h2>;

// Normal functipn returning JSX code
const Hobby = function () {
  return <h3>Writing, Imagination and goes on.........</h3>;
};
const Container = () => (
  <div id="conatiner">
    <Name />
    <Surname />
    Address: Plot No.41, Vidhyanagar
    <Hobby />
  </div>
);
root.render(<Container />);

/************************* Part 4 ()*******************************/
/************************* Part 5 (Two ways to render react components)*******************************/
const Title1 = () => <h1 className="head"> Namaste React</h1>;
const Heading1 = () => (
  <div id="conatiner">
    {/*Way 1 */} 
    <Title1 />
    {/*Way 2 */}
    <Title1></Title1>
    <h1 className="head">Namaste React Functional Component</h1>
  </div>
);
root.render(<Heading1 />);
