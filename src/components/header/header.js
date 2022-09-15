import React from "react";
import "./header.css";
import img from "../../assets/mars.jpg";

const Header = () => {
  return (
    <header id="header">
      <div>
        <h1 id="title"> Nasa On Mars </h1>
        <img id="logoMars" src={img} alt="mars" />
      </div>
    </header>
  );
};

export default Header;
