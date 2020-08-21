import React, { useState, useContext } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { DataContext } from "./context";
const Header = () => {
  const { cart } = useContext(DataContext);

  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <header>
        <div className="menu" onClick={menuToggle}>
          <img src={Menu} alt=" Menu" width="20" />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">Nike</Link>
          </h1>
        </div>
        <nav className="nav">
          <ul className={toggle ? "toggle" : ""}>
            <li onClick={menuToggle}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={menuToggle}>
              <Link to="/product">Product</Link>
            </li>
            <li onClick={menuToggle}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={menuToggle}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={menuToggle}>
              <Link to="/LoginRegister">Sign in / Join us</Link>
            </li>
            <li className="close" onClick={menuToggle}>
              <img src={Close} alt="" width="15" />
            </li>
          </ul>
          <div></div>
          <div className="nav-cart">
            <span>{cart.length}</span>

            <Link to="/cart">
              <img src={CartIcon} alt=" CartIcon" width="20" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
