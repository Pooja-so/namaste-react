import { useState } from "react";
import logo from "../../img/food.png";

const Header = () => {
  let btnName = "Login"; //Normal JS variable

  const [loginBtn, setLoginBtn] = useState("Login");

  console.log(" Header Component rendered..");
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div>
        <button
          className="login-btn"
          onClick={() => {
            // btnName = "Log Out";
            // console.log("Button Name: ", btnName);
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
            console.log("Button clicked: " + loginBtn);
          }}
        >
          {loginBtn}
        </button>
      </div>
    </div>
  );
};

//   Export the component in order to import it
export default Header;
// export { Header };
