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
    <div className="flex justify-between bg-yellow-200 shadow-md">
      <div className="w-20 ">
        <img src={logo} className="w-15" />
      </div>
      <div className="flex">
        <ul className="flex gap-6 items-center font-semibold">
          <li className="text-xl">{onlineStatus ? "✅" : "🔴"}Online Status</li>
          <li className="text-xl">
            {/* Using anchor tag Refreshes the whole page. So it's not a good way */}
            {/* <a href="/">Home</a> */}
            <Link to="/"> Home </Link>
          </li>
          <li className="text-xl">
            {/* Link component the whole pag si not refreshed. Only the required component is loaded */}
            <Link to="/about">About US</Link>
          </li>
          <li className="text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-xl">Cart</li>
        </ul>
      </div>
      <div className="flex items-center mx-5">
        <button
          className="p-3 text-pretty bg-green-400 rounded-lg font-medium"
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
