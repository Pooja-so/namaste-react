import React from "react";

class CountClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " contructor called.");

    this.state = {
      count: 0,
    };
  }

  render() {
    console.log(this.props.name + " render called.");

    // const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Class Component</h2>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increment
        </button>
        {/* <h4>Name: {name}</h4>
        <h4>Location:{location}</h4> */}
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.name + " Component did mount.");
  }
}

export default CountClass;
