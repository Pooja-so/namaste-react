/*
// React.createElement() it is just creating an h1 element in react. that is an core react thing. "So we are using React library"
const heading = React.createElement("h1", {}, "Hello world from React");

// When we have to put html elements inside the browser "we will be using ReactDOM library". Using it we are creating root for our react
const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering(To make visible; to draw) h1 tag into the root
// Rendering is the process used to show the output of markup and code to the user in the browser. A basic example would be when you markup a button in HTML and then see it appear on the page — this is rendering at work.

root.render(heading);
*/

/**  #########################################################################################
//---------------------------- Practice example1-------------------------------

// Here the {} object is the place where we will be giving attributes to the tags
// React.createElement(tag_name, props e.g.{ attribute in the form property:value}, children e.g.content of tag to be display in browser)
const heading4 = React.createElement(
  "h4",
  { id: "heading", xyz: "yuhu" },
  "Hello React Universe"
);

//  heading4 is an reactelement which is nothing but an javascript object
console.log(heading4);

const root = ReactDOM.createRoot(document.getElementById("root4"));
root.render(heading4);
################################################################################################ 
*/

/* Procedure */

//1. React.createElement(tag_tpye, props, [childrens]) - creates an ReactElement which is nothing but an javascript object.
//2. ReactDOM.createRoot() - creates an root inside which react elements are added.
//3. root.render(heading) - used to convert react element into html element or tag inserts it into root.

/* Practice: create following html nested structure using react
  <div id="parent">
    <div id="child1">
      <h4> I am going to be software engineer. </h4>
      <h4> I am an workaholic person. </h4>
    </div>
    <div id="child2">
      <h4> I am going to be software engineer. </h4>
      <h4> I am an workaholic person. </h4>
    </div>
  </div>
*/

// Note: Whenever you need to create siblings you need to crete an array of children.
// If you needs to create more than one children than put it into an array.
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am going to be software engineer"),
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
