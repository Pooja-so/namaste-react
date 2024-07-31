import React from "react";


class TimerClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(" Timer class constructor.");
  }

  render() {
    console.log(" Timer class render.");
    return (
      <div>
        <h1>Timer class component.</h1>
      </div>
    );
  }

  //   Called only after the initial render of the component
  componentDidMount() {
    console.log(" Timer class component did mount.");

    this.timer = setInterval(() => {
      console.log("Timer class Component");
    }, 1000);
  }

  componentDidUpdate() {
    console.log(" Timer class component did update.");
  }

  componentWillUnmount() {
    console.log(" Timer class component  unmounted....");

    clearInterval(this.timer);
  }
}

export default TimerClass;
