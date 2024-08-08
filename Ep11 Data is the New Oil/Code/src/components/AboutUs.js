import React from "react";
import UserContext from "../utlis/UserContext";
// import User from "./User";
// import CountClass from "./CountClass";
// import UserClass from "./UserClass";

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
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }

  componentDidMount() {
    console.log(" Parent Component did mount.");
  }
}

export default AboutUs;
