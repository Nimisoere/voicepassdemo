import React from "react";
import { Link } from "react-router-dom";
import logo from "../../_assets/images/logo.png";

export const Header = () => (
  <div className="main-nav text-center">
    <Link to="/">
      <img src={logo} height="30" alt="Voice Pass Demo" />
    </Link>
  </div>
);
