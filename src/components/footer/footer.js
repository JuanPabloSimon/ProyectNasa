import React from "react";
import "./footer.css";

import logo from "../../assets/logoNameWhite.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="logo" src={logo} alt="logo"></img>
      &#x24B8;
    </div>
  );
};

export default Footer;
