import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="user-card">
      <h2>Functional Component</h2>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <h4>Name: {name}</h4>
      <h4>Location:{location}</h4>
    </div>
  );
};

export default User;
