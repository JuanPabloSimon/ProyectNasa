import React from "react";
import "./camarasSpirit.css";

const CamarasSpirit = (props) => {
  return (
    <div className="container_cameras">
      <h2> Select a Camera</h2>
      <hr />
      <div className="cameras_curiosity">
        <button
          value="fhaz"
          onClick={props.selectCamara}
          className="button_cameras"
        >
          FHAZ
        </button>
        <button
          value="rhaz"
          onClick={props.selectCamara}
          className="button_cameras"
        >
          RHAZ
        </button>
        <button
          value="navcam"
          onClick={props.selectCamara}
          className="button_cameras"
        >
          NAVCAM
        </button>
        <button
          value="pancam"
          onClick={props.selectCamara}
          className="button_cameras"
        >
          PANCAM
        </button>
        <button
          value="minites"
          onClick={props.selectCamara}
          className="button_cameras"
        >
          MINITES
        </button>
      </div>
    </div>
  );
};

export default CamarasSpirit;
