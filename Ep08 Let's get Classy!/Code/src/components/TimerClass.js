import React from "react";

class TimerClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("Timer constructor called.");
  }

  render() {
    console.log(" Timer render called.");
    return (
      <div>
        <h1>Timer Class Component.</h1>
        <div className="user-card">
          <span>Count: {count}</span>
          <button
            className="search-btn"
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Increment Count
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // Called only once after the first render of the component like useEffect runs only once on initial render
    console.log("Timer Component did mount .");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Timer Component did update .");
    //* this.state.count is latest value of count
    //* prevState.count is previous value of count

    // 1. Run useEffect when count state variable changes
    if (this.state.count !== prevState.count) {
      //* Code to be run if count state variable changes
    }

    // 2. Run useEffect when count2 state variable changes
    if (this.state.count2 !== prevState.count2) {
      //* Code to be run if count2 state variable changes
    }

    // 3. Run useEffect when either count or count2 state variable changes
    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
      //* Code to be run if either count or count2 state variable changes
    }
  }

  componentWillUnmount() {
    console.log("Timer Component unmount .");
  }
}

export default TimerClass;
