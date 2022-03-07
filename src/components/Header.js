import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import user from "../images/user.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="heading">Movie App</h1>
      </Link>
      <div className="image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
