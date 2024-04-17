import React from "react";
import Switch from "../modeDark/buttonSwitch";
import word from "../../assets/word.png";
import { Link } from "react-router-dom";
import './navbar.css'
const NavBar = () => {
  return (
    <div>
      <nav className="navbar border-bottom border-body">
        <div className="container-fluid">
          <img src={word} alt="" />
          <div className="div-buttons">
            <Link to="/">
              <button type="button" className="btn ">
                Home
              </button>
            </Link>
            <Link to="/create-country">
              <button type="button" className="btn ">
                Create Country
              </button>
            </Link>
            <Switch />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
