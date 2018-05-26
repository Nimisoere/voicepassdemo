import React from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import logo from "../../_assets/images/logo-white.png";

export const Header = () => (
  <div className="main-nav text-center">
    <Link to="/" className='float-left'>
      <MaterialIcon icon="home" color="#BAD1CE" className="home-icon" />
    </Link>
    <Link to="/">
      <img src={logo} height="30" alt="Voice Pass Demo" />
    </Link>
  </div>
);
