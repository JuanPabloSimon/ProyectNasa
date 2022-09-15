import React from "react";
import "./picture.css";

const Picture = ({ props }) => {
  return (
    <figure className="picture">
      <img src={props.img_src} alt="Imagen" />
      <b>Picture Date: {props.earth_date}</b>
    </figure>
  );
};

export default Picture;
