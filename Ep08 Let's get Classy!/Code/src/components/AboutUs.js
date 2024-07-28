// import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      {/* <User name={"Pooja (Function)"} location={"Bhavnagar"} /> */}
      <UserClass name={"Pooja (Class)"} location={"Bhavnagar"} />
    </div>
  );
};

export default AboutUs;
