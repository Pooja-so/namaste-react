const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h2>Functional Component</h2>
      <h4>Name: {name}</h4>
      <h4>Location:{location}</h4>
    </div>
  );
};

export default User;
