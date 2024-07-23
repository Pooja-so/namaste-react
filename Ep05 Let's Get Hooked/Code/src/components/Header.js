import logo from "../../img/food.png";

const Header = () => {
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
    </div>
  );
};

//   Export the component in order to import it
export default Header;
// export { Header };
