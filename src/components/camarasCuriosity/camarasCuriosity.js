import React from "react";
import "./camarasCuriosity.css";

const CamarasCuriosity = (props) => {
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
          value="mast"
          onClick={props.selectCamara}
          className="button_cameras"
        >
          MAST
        </button>
        <button
          value="chemcam"
          onClick={props.selectCamara}
          className="button_cameras"
        >
          CHEMCAM
        </button>
        <button
          value="mahli"
          onClick={props.selectCamara}
          className="button_cameras"
        >
          MAHLI
        </button>
        <button
          value="mardi"
          onClick={props.selectCamara}
          className="button_cameras"
        >
          MARDI
        </button>
        <button
          value="navcam"
          onClick={props.selectCamara}
          className="button_cameras"
        >
          NAVCAM
        </button>
      </div>
    </div>
  );
};

export default CamarasCuriosity;
