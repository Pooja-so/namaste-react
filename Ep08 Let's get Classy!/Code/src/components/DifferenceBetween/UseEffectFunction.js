import { useEffect, useState } from "react";

const UseEffectFunction = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // 1. Run useEffect when count state variable changes
  useEffect(() => {
    console.log("Count state variable changed.");
  }, [count]);

  // 2. Run useEffect when count2 state variable changes
  useEffect(() => {
    console.log("Count2 state variable changed.");
  }, [count2]);

  // 3. Run useEffect when either count or count2 state variable changes
  useEffect(() => {
    console.log("Either Count or Count2 state variable changed.");
  }, [count, count2]);

  return (
    <div>
      <h1> Class Component.</h1>
      <div className="user-card">
        <span>Count: {count}</span>
        <button
          className="search-btn"
          onClick={() => {
            setCount(count + 1);
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
            setCount2(count2 + 1);
          }}
        >
          Increment Count2
        </button>
      </div>
    </div>
  );
};

export default UseEffectFunction;
