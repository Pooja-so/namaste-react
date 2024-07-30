import React from "react";

/*
Behaviour of componentDidMount & componentDidUpdate and useEffect trying to achieve same functionality

1. componentDidMount vs useEffect: Code that runs only after intial render of component

    componentDidMount() {
        console.log("Child Component did mount .");
    }

    useEffect(()=> {
        
    }, [])

2. componentDidUpdate vs useEffect: Code that runs when the state variable changes. refer the below code.

//* Conclusion: The introduction of functional component and hooks has simplifies the way we used to write the complex code using class component. Now you'll definitely understands why the React is popular as its newer version keeps on introducing the functionalities that simplifies the way we used to write our code before.

*/

class ComponentDidMountClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
    console.log(" Child constructor.");
  }

  render() {
    const { count, count2 } = this.state;

    console.log("------Child render.---------");
    return (
      <div>
        <h1> Class Component.</h1>
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
        <div className="user-card">
          <span>Count2: {count2}</span>
          <button
            className="search-btn"
            onClick={() => {
              this.setState({ count2: this.state.count2 + 1 });
            }}
          >
            Increment Count2
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // Called only once after the first render of the component like useEffect runs only once on initial render
    console.log("Child Component did mount .");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(" Child Component did update .");
    //* this.state.count is latest value of count
    //* prevState.count is previous value of count

    // 2.1. Run useEffect when count state variable changes
    if (this.state.count !== prevState.count) {
      //* Code to be run if count state variable changes
      console.log("Count changed.");
    }

    // 2.2. Run useEffect when count2 state variable changes
    if (this.state.count2 !== prevState.count2) {
      //* Code to be run if count2 state variable changes
      console.log("Count2 changed.");
    }

    // 2.3. Run useEffect when either count or count2 state variable changes
    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
      //* Code to be run if either count or count2 state variable changes
      console.log("Either Count or count2 changed.");
    }
  }

  componentWillUnmount() {
    console.log("Child Component unmount .");
  }
}

export default ComponentDidMountClass;
