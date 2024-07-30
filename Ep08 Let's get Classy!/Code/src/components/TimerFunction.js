import { useEffect } from "react";

const TimerFunction = () => {
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
    console.log("Count2 state variable changed.");
  }, [count, count2]);

  return (
    <div>
      <h1>Timer Functional Component.</h1>
    </div>
  );
};

export default TimerFunction;
