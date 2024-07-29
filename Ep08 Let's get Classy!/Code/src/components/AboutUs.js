import React from "react";
// import User from "./User";
// import CountClass from "./CountClass";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log(" Parent constructor is called.");
  }

  render() {
    console.log(" Parent render is called.");
    return (
      <div className="about">
        <h1>About Us</h1>
        {/* <User name={"Pooja (Function)"} location={"Bhavnagar"} /> */}
        {/* <CountClass name={"Child 2"} location={"Bhavnagar"} />
        <CountClass name={"Child 3"} location={"Bhavnagar"} /> */}

        <UserClass />
      </div>
    );
  }

  componentDidMount() {
    console.log(" Parent Component did mount.");
  }
}

export default AboutUs;
