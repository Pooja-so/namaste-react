import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(" User Constructor called");
    // Creating state variable and assigning default values
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    console.log(" User component did mount.");

    const data = await fetch("https://api.github.com/users/Pooja-so");
    const json = await data.json();

    console.log("Inside User component did mount: ", json);

    // component is re-rendered when the state varaibles are updated
    this.setState({
      userInfo: json,
    });
  }

  render() {
    console.log(" User render called");
    const { name, location, avatar_url } = this.state;
    return (
      <div className="user-card">
        <div>
          <img src={avatar_url} height={150} width={150} alt={name} />
        </div>
        <h3>Name: {name}</h3>
        <h3>Locaton: {location}</h3>
      </div>
    );
  }

  //* Updating Phase is started when the this.setState updates the state variable
  // In Updating phase, render() is called again, React will update the DOM and then componentDidUpdate method is called
  componentDidUpdate() {
    console.log(" User component did update.");
  }

  componentWillUnmount() {
    // Called before the component is unmounted
    console.log(" User component is unmounted..");
  }
}

export default UserClass;
