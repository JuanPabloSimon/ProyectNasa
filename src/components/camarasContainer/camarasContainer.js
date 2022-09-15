import React, { useState } from "react";

import CamarasCuriosity from "../camarasCuriosity/camarasCuriosity";
import CamarasOpportunity from "../camarasOpportunity/camarasOpportunity";
import CamarasSpirit from "../camarasSpirit/camarasSpirit";
import PictureContainer from "../picturesContainer/picturesContainer";

const CamarasContainer = ({ props }) => {
  const [camera, setCamera] = useState("");

  function selectCamara(e) {
    setCamera(e.target.value);
  }

  function showCameras(rover) {
    if (rover === "curiosity") {
      return <CamarasCuriosity selectCamara={selectCamara} />;
    } else if (rover === "spirit") {
      return <CamarasSpirit selectCamara={selectCamara} />;
    } else if (rover === "opportunity") {
      return <CamarasOpportunity selectCamara={selectCamara} />;
    } else return <h1 className="titles"> No Rover Selected </h1>;
  }
  return (
    <div>
      {showCameras(props)}
      <PictureContainer rover={props} camera={camera} />
    </div>
  );
};

export default CamarasContainer;
