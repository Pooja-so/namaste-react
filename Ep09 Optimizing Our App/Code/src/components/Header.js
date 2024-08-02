import { useState } from "react";
import useOnlineStatus from "../utlis/useOnlineStatus";
import { Link } from "react-router-dom";
import logo from "../../img/food.png";

const Header = () => {
  let btnName = "Login"; //Normal JS variable

  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  console.log(" Header Component rendered..");
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "✅" : "🔴"}Online Status</li>
          <li>
            {/* Using anchor tag Refreshes the whole page. So it's not a good way */}
            {/* <a href="/">Home</a> */}
            <Link to="/"> Home </Link>
          </li>
          <li>
            {/* Link component the whole pag si not refreshed. Only the required component is loaded */}
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
